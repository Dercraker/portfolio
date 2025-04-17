"use client";

import { IconList } from "@components/logo/iconList";
import { Typography } from "@ui/typography";
import { GetProjects } from "constant/project";
import { AnimatePresence, motion } from "framer-motion";
import { SquareTerminal } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-5xl px-8">
      <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {GetProjects().map((project, idx) => (
          <a
            href={project.link}
            key={project?.link}
            className="group relative block p-2"
            data-toploader-disabled
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 size-full rounded-3xl bg-zinc-800/[0.8]"
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
            <div className="relative z-20 h-full overflow-hidden rounded-2xl border border-transparent bg-zinc-800 group-hover:border-zinc-700">
              <div className="relative z-20">
                <div className="relative h-44 w-full bg-black/10 transition duration-500 group-hover:bg-transparent sm:h-60 md:h-44">
                  <div className="absolute bottom-0 z-10 h-20 w-full bg-zinc-900 [mask-image:linear-gradient(to_bottom,transparent,transparent,white)] transition duration-500 group-hover:bg-zinc-800" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="absolute inset-0 object-cover object-center mix-blend-multiply"
                  />
                </div>
                <div className="p-4">
                  <Typography className="group-hover:text-secondary mt-4 font-bold tracking-wide text-zinc-100">
                    {project.title}
                  </Typography>
                  <Typography className="mt-8 text-sm leading-relaxed tracking-wide text-zinc-400">
                    {project.description}
                  </Typography>

                  <IconList
                    iconSlugs={project.stack.map((stack) => stack.slug)}
                    size={24}
                    className="mt-8"
                  />
                  <div className="mt-4 flex flex-row items-center space-x-2 px-0.5">
                    <SquareTerminal className="stroke-1.5 group-hover:text-secondary size-3 text-zinc-500" />
                    <Typography className="group-hover:text-secondary text-xs text-zinc-500">
                      View Source
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
