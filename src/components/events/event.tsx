"use client";

import { LinkPreview } from "@ui/link-preview";
import { AnimatePresence, motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";

export type EventProps = {
  setHoveredIndex: Dispatch<SetStateAction<number | null>>;
  idx: number;
  hoveredIndex: number | null;
};

export const Event = ({ setHoveredIndex, idx, hoveredIndex }: EventProps) => {
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
      <div className="relative z-50">
        <small className="block text-zinc-500 md:border-l  md:border-zinc-700 md:pl-4">
          formatDate(article.date)
        </small>
        <h2 className="mt-4 text-lg font-bold text-zinc-200">article.title</h2>
        <p className="mt-4 max-w-4xl text-sm font-normal leading-loose text-zinc-200">
          article.description
        </p>
        <LinkPreview
          url="/"
          className="cursor-pointer  text-cyan-500 hover:underline"
        >
          <p className="mt-6 block text-sm text-cyan-500">Read More</p>
        </LinkPreview>
      </div>
    </div>
  );
};
