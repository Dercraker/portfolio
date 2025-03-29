"use client";

import { cn } from "@lib/utils";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center border-b border-neutral-100 dark:border-neutral-800">
      <Background />
      <Content />
    </div>
  );
};

const Content = () => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden px-8 pb-4  md:px-8 ">
      <div className="relative mt-20 flex flex-col items-center  justify-center ">
        <h1 className="mb-8relative mx-auto mt-4 max-w-6xl text-center text-3xl font-bold tracking-tight text-zinc-700 dark:text-white md:text-4xl lg:text-7xl ">
          I'm a{" "}
          <span className="relative z-10 bg-gradient-to-b from-indigo-700 to-indigo-600 bg-clip-text text-transparent">
            full stack
          </span>{" "}
          developer{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block size-14 stroke-indigo-500 stroke-[1px]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <motion.path
                initial={{
                  pathLength: 0,
                  fill: "#a5b4fc",
                  opacity: 0,
                }}
                animate={{
                  pathLength: 1,
                  fill: "#a5b4fc",
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                  repeatDelay: 0.5,
                }}
                d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"
              />
            </svg>
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-sm leading-loose tracking-wide text-zinc-400 md:text-base">
          Meet Antoine Capitain, the self-proclaimed code wizard who can turn
          idea into beautiful websites, tools or other solution with caffeine.
          His passion for web and software programming has equalled only by your
          ideas.
        </p>
        <div className="mt-8 text-zinc-400 text-sm md:text-base max-w-2xl leading-loose tracking-wide">
          Building{" "}
          <LinkPreview
            className={
              "text-zinc-200 font-bold hover:text-cyan-500 transition duration-150 outline-none"
            }
            url="https://algochurn.com"
          >
            Algochurn
          </LinkPreview>{" "}
          and{" "}
          <LinkPreview
            className={
              "text-zinc-200 font-bold hover:text-cyan-500 transition duration-150"
            }
            url="https://aceternity.com"
          >
            Aceternity
          </LinkPreview>{" "}
          when I'm not working on my day job.
        </div>
      </div>
    </div>
  );
};

const Background = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 size-full overflow-hidden [perspective:1000px] [transform-style:preserve-3d]">
      <Rectangles
        style={{ transform: "rotateX(45deg)" }}
        className="[mask-image:linear-gradient(to_top,white,transparent)]"
      />
      <Rectangles
        style={{ transform: "rotateX(-45deg)" }}
        className="[mask-image:linear-gradient(to_bottom,white,transparent)]"
      />
    </div>
  );
};

const Rectangles = ({
  className,
  ...props
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  const rectangleSVGLight = `<svg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'><rect width='40' height='40' x='0' y='0' stroke='rgba(0,0,0,0.1)' fill='none' /></svg>`;
  const rectangleSVGDark = `<svg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'><rect width='40' height='40' x='0' y='0' stroke='rgba(255,255,255,0.15)' fill='none' /></svg>`;
  const encodedRectangleSVGLight = encodeURIComponent(rectangleSVGLight);
  const encodedRectangleSVGDark = encodeURIComponent(rectangleSVGDark);
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden",
        className,
      )}
      {...props}
    >
      <div
        className={cn("h-full w-full dark:hidden")}
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodedRectangleSVGLight}")`,
          backgroundSize: "40px 40px",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        className={cn("hidden h-full w-full dark:block")}
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodedRectangleSVGDark}")`,
          backgroundSize: "40px 40px",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
};
