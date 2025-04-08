import fs from "fs/promises";
import { chromium } from "playwright";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/dercraker/detail/recent-activity/shares/";
const LI_AT = process.env.LI_AT;

async function run() {
  if (!LI_AT) throw new Error("Cookie LI_AT manquant");

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    storageState: {
      cookies: [
        {
          name: "li_at",
          value: LI_AT,
          domain: ".linkedin.com",
          path: "/",
          httpOnly: true,
          secure: true,
          expires: Date.now() + 1000 * 60 * 60 * 24 * 365, // 1 an
          sameSite: "Lax",
        },
      ],
      origins: [],
    },
  });

  const page = await context.newPage();
  await page.goto(LINKEDIN_URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(5000);

  const posts = await page.evaluate(() => {
    const data = [];
    const postEls = document.querySelectorAll('[data-urn^="urn:li:activity:"]');

    postEls.forEach((el) => {
      const text = el.innerText;
      const date =
        el.querySelector('span[aria-hidden="true"]')?.textContent ?? "";
      const impressions = text.match(/(\d+[,.]?\d*)\s+vues?/i)?.[1] ?? null;
      const likes = text.match(/(\d+[,.]?\d*)\s+jaime|like/i)?.[1] ?? null;
      const shares =
        text.match(/(\d+[,.]?\d*)\s+republication|republication/i)?.[1] ?? null;
      const comments = text.match(/(\d+[,.]?\d*)\s+commentaire/i)?.[1] ?? null;

      const urn = el.getAttribute("data-urn");
      const url = `https://www.linkedin.com/feed/update/${urn}`;

      data.push({
        date,
        content: text.slice(0, 300),
        impressions,
        likes,
        shares,
        comments,
        url,
      });
    });

    return data;
  });

  await fs.writeFile(
    "../public/linkedin-posts.json",
    JSON.stringify(posts, null, 2),
  );
  await browser.close();
}

run();
