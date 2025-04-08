"use client";

import { LinkedinPostType } from "@type/linkedinPost.type";
import { InlineTooltip } from "@ui/tooltip";
import { Typography } from "@ui/typography";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, MessagesSquare, Share2, ThumbsUp } from "lucide-react";
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
      <div className="relative ">
        <Typography className="block text-zinc-500 md:border-l font-bold md:border-zinc-700 md:pl-4">
          {new Date(post.date).toLocaleDateString()}
        </Typography>
        <Typography className="mt-4 max-w-4xl text-sm font-normal leading-loose text-zinc-200">
          {post.content}
        </Typography>

        <div className="flex items-center gap-2 ml-auto w-fit text-muted-foreground cursor-pointer">
          <InlineTooltip title="Likes">
            <Typography className="flex items-center gap-1 ">
              {post.likes} <ThumbsUp className="size-4 text-blue-400" />
            </Typography>
          </InlineTooltip>
          <InlineTooltip title="Comments">
            <Typography className="flex items-center gap-1">
              {post.comments}{" "}
              <MessagesSquare className="size-4 text-green-400" />
            </Typography>
          </InlineTooltip>
          <InlineTooltip title="Shares">
            <Typography className="flex items-center gap-1">
              {post.shares} <Share2 className="size-4 text-yellow-400" />
            </Typography>
          </InlineTooltip>
          <InlineTooltip title="Imprint">
            <Typography className="flex items-center gap-1">
              {post.impressions} <Eye className="size-4 text-red-400" />
            </Typography>
          </InlineTooltip>
        </div>
        <Link
          href={post.url}
          className="cursor-pointer  text-secondary hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
