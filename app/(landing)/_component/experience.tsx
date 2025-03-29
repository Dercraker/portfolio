"use client";

import Beam from "@components/Beam/Beam";
import { LinkPreview } from "@ui/link-preview";
import { InlineTooltip } from "@ui/tooltip";
import clsx from "clsx";
import type { workExperienceType } from "constant/workExperience";
import { workExperience } from "constant/workExperience";
import { format } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeWorkExperience, setActiveWorkExperience] =
    useState<workExperienceType>(workExperience[0]);

  return (
    <div className=" mx-auto max-w-5xl px-8">
      <h1 className="mx-auto mt-20 max-w-5xl text-2xl font-bold text-white md:mt-40 md:text-3xl">
        Work Experience
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-loose tracking-wide text-zinc-400 md:text-base ">
        I'm exploring the world of work to improve my skills and knowledge.
      </p>
      <div className="mx-auto mt-20 flex max-w-2xl flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0">
        <div className="relative flex flex-row overflow-x-auto md:flex-col md:overflow-x-visible">
          <div className="absolute -left-6 h-full w-px overflow-hidden bg-zinc-800">
            <Beam showBeam={true} className={`-left-0`} />
          </div>

          {workExperience.map((exp, idx) => (
            <div
              key={`exp-${idx}`}
              className="relative my-2"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 size-full rounded-md bg-zinc-800"
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
              <button
                onClick={() => setActiveWorkExperience(exp)}
                className={clsx(
                  "group relative z-20 flex w-full min-w-28 flex-row items-center space-x-2 rounded-md px-4 py-2 text-left text-zinc-400",
                  activeWorkExperience?.company === exp.company
                    ? "bg-zinc-800"
                    : null,
                )}
              >
                <span>{exp.company}</span>
              </button>
            </div>
          ))}
        </div>
        <div className="flex-1  md:pl-10">
          <div className="flex flex-col space-y-4">
            <AnimatePresence>
              <motion.div
                className="flex flex-col space-y-2"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15 },
                }}
                layoutId={activeWorkExperience?.company}
              >
                <h1 className="text-2xl font-bold text-zinc-100">
                  {activeWorkExperience?.role}{" "}
                  {activeWorkExperience.link ? (
                    <LinkPreview url={activeWorkExperience.link}>
                      <span className="text-cyan-500">
                        @ {activeWorkExperience?.company}
                      </span>
                    </LinkPreview>
                  ) : (
                    <span className="text-cyan-500">
                      @ {activeWorkExperience?.company}
                    </span>
                  )}
                </h1>
                <div className="text-sm tracking-widest text-zinc-400">
                  {format(activeWorkExperience?.startDate, "MMM yyyy")}
                  {activeWorkExperience?.endDate !== undefined ? " - " : null}
                  {activeWorkExperience?.endDate === undefined
                    ? null
                    : activeWorkExperience?.endDate === null
                      ? "Present"
                      : format(activeWorkExperience?.endDate, "MMM yyyy")}
                </div>
                <p className="text-sm text-zinc-400">
                  {activeWorkExperience?.location
                    ? activeWorkExperience?.location
                    : "Full Remote"}
                </p>
                <div>
                  {activeWorkExperience?.description.map((bullet, idx) => (
                    <div
                      key={`bullet-${idx}`}
                      className="my-2 flex flex-row flex-nowrap items-start space-x-2"
                    >
                      <Check className="mt-[3px] shrink-0 text-cyan-500" />
                      <span className="text-sm text-zinc-400">{bullet}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-row flex-wrap gap-2">
                  {activeWorkExperience.technologies.map((t) => (
                    <InlineTooltip key={t} title={t}>
                      <Image
                        src={`https://cdn.simpleicons.org/${t}`}
                        alt={t}
                        width={24}
                        height={24}
                      />
                    </InlineTooltip>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
