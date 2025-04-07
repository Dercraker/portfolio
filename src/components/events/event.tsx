"use client";

import { LinkedinPostType } from "@type/linkedinPost.type";
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
      <div className="relative ">
        <Typography className="block text-zinc-500 md:border-l  md:border-zinc-700 md:pl-4">
          {new Date(post.date).toLocaleDateString()}
        </Typography>
        <Typography className="mt-4 max-w-4xl text-sm font-normal leading-loose text-zinc-200">
          {post.content}
        </Typography>

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
