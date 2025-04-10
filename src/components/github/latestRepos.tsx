"use client";

import { motion } from "motion/react";

import { ForkPinchIcon } from "@components/animatedIcon/forkPinch.icon";
import { HoverPinchStarIcon } from "@components/animatedIcon/hoverPinchStar.icon";
import { LockeyLockIcon } from "@components/animatedIcon/lockeyLock.Icon";
import { cn } from "@lib/utils";
import type { GithubRepository } from "@type/githubEvent.type";
import { LinkPreview } from "@ui/link-preview";
import { InlineTooltip } from "@ui/tooltip";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export type latestReposProps = {
  repos: GithubRepository[];
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
          .map((repo: GithubRepository, idx: number) => (
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
          <div className="absolute bottom-0 z-10 mx-auto flex h-56 w-full max-w-5xl items-center justify-center bg-zinc-900 [mask-image:linear-gradient(to_bottom,transparent,white_10rem,white)] transition duration-500" />

          <div className="relative z-20 flex justify-center">
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
  repo: GithubRepository;
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
                <LockeyLockIcon
                  size={24}
                  colorize="var(--color-red-400)"
                  isHover={hoveredIndex === idx}
                  loop
                />
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
          <p className="mt-4 text-sm leading-loose font-normal tracking-wide text-zinc-400">
            {repo?.description}
          </p>
        </div>

        <div className="group-hover:text-secondary mt-4 flex flex-row items-center space-x-4 text-zinc-500">
          <div className="flex items-center gap-1 text-sm font-normal">
            <ForkPinchIcon
              size={24}
              colorize="var(--secondary)"
              isHover={hoveredIndex === idx}
              loop
            />
            <span className="group-hover:text-secondary">
              {repo.forks_count}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm font-normal">
            <HoverPinchStarIcon
              size={24}
              colorize="var(--secondary)"
              isHover={hoveredIndex === idx}
              loop
            />
            <span className="">{repo.stargazers_count}</span>
          </div>
        </div>
      </div>
    </>
  );
};
