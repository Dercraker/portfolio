"use client";

import { EyeIcon } from "@components/animatedIcon/eye.icon";
import { HearthIcon } from "@components/animatedIcon/hearth.icon";
import { ShareIcon } from "@components/animatedIcon/share.icon";
import { WeChatIcon } from "@components/animatedIcon/weChat.icon";
import type { LinkedinPostType } from "@type/linkedinPost.type";
import { InlineTooltip } from "@ui/tooltip";
import { Typography } from "@ui/typography";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";

export type EventProps = {
  setHoveredIndex: Dispatch<SetStateAction<number | null>>;
  idx: number;
  hoveredIndex: number | null;
  post: LinkedinPostType;
};

export const Event = ({
  setHoveredIndex,
  idx,
  hoveredIndex,
  post,
}: EventProps) => {
  return (
    <div
      className="relative md:p-8"
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="absolute inset-0 size-full rounded-2xl bg-zinc-800/[0.8]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <div className="relative">
        <Typography className="block font-bold text-zinc-500 md:border-l md:border-zinc-700 md:pl-4">
          {post.date}
        </Typography>
        <Typography className="mt-4 max-w-4xl text-sm leading-loose font-normal text-zinc-200">
          {post.content}
        </Typography>

        <div className="text-muted-foreground ml-auto flex w-fit cursor-pointer items-center gap-2">
          <InlineTooltip title="Likes">
            <Typography className="flex items-center gap-1">
              {post.likes}
              <HearthIcon
                colorize={
                  hoveredIndex === idx ? "#51a2ff" : "var(--muted-foreground)"
                }
                isHover={hoveredIndex === idx}
                size={32}
              />
            </Typography>
          </InlineTooltip>
          <InlineTooltip title="Comments">
            <Typography className="flex items-center gap-1">
              {post.comments}{" "}
              <WeChatIcon
                colorize={
                  hoveredIndex === idx
                    ? "var(--color-green-400)"
                    : "var(--muted-foreground)"
                }
                isHover={hoveredIndex === idx}
                size={32}
              />
            </Typography>
          </InlineTooltip>
          <InlineTooltip title="Shares">
            <Typography className="flex items-center gap-1">
              {post.shares}
              <ShareIcon
                colorize={
                  hoveredIndex === idx
                    ? "var(--color-yellow-400)"
                    : "var(--muted-foreground)"
                }
                isHover={hoveredIndex === idx}
                size={32}
              />
            </Typography>
          </InlineTooltip>
          {post?.impressions && post.impressions > 0 ? (
            <InlineTooltip title="Imprint">
              <Typography className="flex items-center gap-1">
                {post.impressions}{" "}
                <EyeIcon
                  colorize={
                    hoveredIndex === idx
                      ? "var(--color-red-400)"
                      : "var(--muted-foreground)"
                  }
                  isHover={hoveredIndex === idx}
                  size={32}
                />
              </Typography>
            </InlineTooltip>
          ) : null}
        </div>
        {post.url && (
          <Link
            href={post.url}
            className="text-secondary cursor-pointer hover:underline"
          >
            Read More
          </Link>
        )}
      </div>
    </div>
  );
};
