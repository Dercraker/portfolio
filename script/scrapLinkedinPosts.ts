/* eslint-disable no-await-in-loop */

import dotenv from "dotenv";
import { mkdir, readFile, writeFile } from "fs/promises";
import path, { dirname } from "path";
import type { Locator } from "playwright";
import { firefox } from "playwright";
import { Logger } from "tslog";
import { z } from "zod";

export const LinkedinPostTypeSchema = z.object({
  date: z.string(),
  content: z.string(),
  impressions: z.number().nullable(),
  likes: z.number().nullable(),
  shares: z.number().nullable(),
  comments: z.number().nullable(),
  url: z.string(),
});

export type LinkedinPostType = z.infer<typeof LinkedinPostTypeSchema>;

const main = async () => {
  dotenv.config();
  const logger = new Logger({
    name: "LinkedinScraper",
  });

  const FILE_PATH = path.resolve("./public/linkedin-posts.json");

  const LK_PROFILE_POSTS_URL =
    "https://www.linkedin.com/in/dercraker/recent-activity/all/";

  const browser = await firefox.launch({ headless: true });
  const context = await browser.newContext();
  await context.setDefaultNavigationTimeout(0);
  await context.addCookies([
    {
      name: "li_at",
      value:
        process.env.LI_AT ??
        (() => {
          throw new Error("LI_AT is not set");
        })(),
      secure: true,
      httpOnly: true,
      sameSite: "None",
      path: "/",
      domain: ".www.linkedin.com",
    },
  ]);
  const page = await context.newPage();

  logger.info("🔑 Go to recent-activity/all");
  await page.goto(LK_PROFILE_POSTS_URL, {});

  await page.waitForTimeout(10000);

  let previousHeight = 0;
  let sameHeightCount = 0;

  logger.info("🔑 Scroll to bottom of page");
  while (sameHeightCount < 4) {
    logger.info(`💻 Scroll to ${previousHeight}px`);

    const currentHeight = await page.evaluate(() => {
      window.scrollBy(0, 2000);
      return document.body.scrollHeight;
    });

    if (currentHeight === previousHeight) {
      sameHeightCount++;
    } else {
      sameHeightCount = 0;
      previousHeight = currentHeight;
    }

    await page.waitForTimeout(1500);
  }

  logger.info("🔑 Scrap posts");

  const nodes = await page.locator('[data-urn^="urn:li:activity"]').all();

  const processNode = async (node: Locator) => {
    try {
      const content = await getContent(node);
      const date = await getDate(node);
      const likes = await getLikesCount(node);
      const comments = await getCommentsCount(node);
      const shares = await getShares(node);
      const impressions = await getImpressions(node);
      const url = await getUrl(node);

      const post = {
        date,
        content,
        likes,
        comments,
        shares,
        impressions,
        url,
      };
      logger.info("🚀 ~ processNode ~ post:", post);

      return post;
    } catch (error) {
      logger.info("🚀 ~ processNode ~ error:", error);
      return null;
    }
  };

  const processedPosts = await Promise.all(nodes.map(processNode));
  logger.info("🚀 ~ main ~ processedPosts:", processedPosts);

  let oldPosts: LinkedinPostType[] = [];
  try {
    const data = await readFile(FILE_PATH, "utf-8");
    oldPosts = JSON.parse(data);
  } catch {
    oldPosts = [];
  }
  logger.info("🚀 ~ main ~ oldPosts:", oldPosts);

  const existingUrls = new Set(oldPosts.map((p) => p.url));
  const newPosts = processedPosts.filter(
    (post) => post?.url && !existingUrls.has(post.url),
  );
  logger.info("🚀 ~ main ~ newPosts:", newPosts);
  const allPosts = [...newPosts, ...oldPosts];

  await mkdir(dirname(FILE_PATH), { recursive: true });
  await writeFile(FILE_PATH, JSON.stringify(allPosts, null, 2));
  logger.info(`✅ ${newPosts.length} nouveaux posts ajoutés`);

  await browser.close();
};
void main();

const getContent = async (node: Locator) => {
  try {
    const contentNode = await node
      .locator(".update-components-text")
      .elementHandle();

    if (!contentNode) return null;

    const content = (await contentNode?.textContent())?.trim() ?? null;

    if (!content) return null;

    return content.slice(0, 100).concat("...");
  } catch {
    return null;
  }
};

const getDate = async (node: Locator) => {
  try {
    const dateNode = await node
      .getByText("• Visible de tous sur LinkedIn et en dehors")
      .elementHandle();

    if (!dateNode) return null;

    const date = (await dateNode?.textContent())?.trim() ?? null;

    return date;
  } catch {
    return null;
  }
};

const getLikesCount = async (node: Locator) => {
  try {
    const likesNode = await node
      .locator(".social-details-social-counts__social-proof-fallback-number")
      .or(node.locator(".social-details-social-counts__reactions-count"))
      .elementHandle();

    if (!likesNode) return 0;

    const likes =
      (await likesNode?.textContent())?.replace("likes", "").trim() ?? 0;

    if (!likes) return 0;

    return parseInt(likes, 10);
  } catch {
    return 0;
  }
};

const getCommentsCount = async (node: Locator) => {
  try {
    const commentsNode = await node
      .locator(".social-details-social-counts__comments")
      .elementHandle();

    if (!commentsNode) return 0;

    const comments =
      (await commentsNode?.textContent())?.replace("commentaires", "").trim() ??
      0;

    if (!comments) return 0;

    return parseInt(comments, 10);
  } catch {
    return 0;
  }
};

const getShares = async (node: Locator) => {
  try {
    const shareNode = await node.getByText("republication").elementHandle();

    if (!shareNode) return 0;

    const shares =
      (await shareNode?.textContent())
        ?.replace("republications", "")
        .replace("republication", "")
        .trim() ?? 0;

    if (!shares) return 0;

    return parseInt(shares, 10);
  } catch {
    return 0;
  }
};

const getImpressions = async (node: Locator) => {
  try {
    const impressionsNode = await node.getByText("impressions").elementHandle();

    if (!impressionsNode) return 0;

    const impressions = impressionsNode
      ? ((await impressionsNode?.textContent())
          ?.replace("impressions", "")
          .trim() ?? 0)
      : 0;

    if (!impressions) return 0;

    return parseInt(impressions, 10);
  } catch {
    return 0;
  }
};

const getUrl = async (node: Locator) => {
  const BASE_POST_URL = "https://www.linkedin.com/posts/";

  const nodeAttribute = await node.evaluate((el) => {
    return Array.from(el.attributes).reduce((acc, attr) => {
      // @ts-expect-error getAttribute is not typed
      acc[attr.name] = attr.value;
      return acc;
    }, {});
  });

  // @ts-expect-error getAttribute is not typed
  const postId = nodeAttribute["data-urn"].split(":").pop();

  return `${BASE_POST_URL}${postId}`;
};
