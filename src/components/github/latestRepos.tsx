"use client";

import { motion } from "motion/react";

import { cn } from "@lib/utils";
import type { Repository } from "@type/repository.type";
import { LinkPreview } from "@ui/link-preview";
import { InlineTooltip } from "@ui/tooltip";
import { AnimatePresence } from "framer-motion";
import { GitFork, LockKeyhole, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export type latestReposProps = {
  repos: Repository[];
  take?: number;
  showMore?: boolean;
};

export const LatestRepos = ({
  take,
  showMore = false,
  repos,
}: latestReposProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative mx-auto mb-20 max-w-5xl overflow-hidden px-8">
      <div className="mx-auto mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {repos
          ?.slice(0, take ?? undefined)
          .map((repo: Repository, idx: number) => (
            <div
              key={repo?.html_url}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {!repo.private ? (
                <LinkPreview
                  url={repo.html_url}
                  className="group relative flex h-full flex-col justify-between rounded-2xl border border-zinc-800 bg-linear-to-b from-zinc-800 to-zinc-900 p-4 shadow-xs"
                >
                  <RepoCard repo={repo} hoveredIndex={hoveredIndex} idx={idx} />
                </LinkPreview>
              ) : (
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-zinc-800 bg-linear-to-b from-zinc-800 to-zinc-900 p-4 shadow-xs">
                  <RepoCard repo={repo} hoveredIndex={hoveredIndex} idx={idx} />
                </div>
              )}
            </div>
          ))}
      </div>
      {showMore && (
        <div>
          <div className="absolute bottom-0 z-10 mx-auto flex h-56 w-full max-w-5xl items-center justify-center bg-zinc-900 transition duration-500 [mask-image:linear-gradient(to_bottom,transparent,white_10rem,white)]" />

          <div className="relative z-20 flex justify-center ">
            <Link
              href="/contributions"
              className="rounded-lg border border-zinc-600 bg-zinc-900 px-8 py-2 text-zinc-200 transition duration-200 hover:border-zinc-700 hover:bg-zinc-800/[0.8]"
            >
              Show More
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const RepoCard = ({
  repo,
  hoveredIndex,
  idx,
}: {
  repo: Repository;
  hoveredIndex: number | null;
  idx: number;
}) => {
  return (
    <>
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="absolute inset-0 size-full rounded-xl bg-zinc-800"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-0 flex h-full flex-col justify-between">
        <div>
          <div className="flex items-center">
            {repo.private && (
              <InlineTooltip title="Private repository">
                <LockKeyhole className="mr-2 size-4 text-red-400" />
              </InlineTooltip>
            )}
            <h2
              className={cn(
                "text-base font-bold text-zinc-100",
                !repo.private && "group-hover:underline",
                repo.private && "group-hover:text-red-400",
              )}
            >
              {repo.name}
            </h2>
          </div>
          {/* TODO: Truncate text */}
          <p className=" mt-4 text-sm font-normal leading-loose tracking-wide text-zinc-400">
            {repo?.description}
          </p>
        </div>

        <div className="mt-4 flex flex-row items-center space-x-4 text-zinc-500 group-hover:text-secondary">
          <div className=" flex flex-row items-center space-x-1 text-sm font-normal ">
            <GitFork className="size-4 stroke-1 " />
            <span className=" group-hover:text-secondary">
              {repo.forks_count}
            </span>
          </div>
          <div className=" flex flex-row items-center space-x-1 text-sm font-normal">
            <Star className="size-4 stroke-1 " />
            <span className="">{repo.stargazers_count}</span>
          </div>
        </div>
      </div>
    </>
  );
};
