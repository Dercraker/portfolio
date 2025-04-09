"use client";

import { cn } from "@lib/utils";
import { LinkPreview } from "@ui/link-preview";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="border-border flex h-screen flex-col items-center justify-center border-b">
      <Background />
      <Content />
    </div>
  );
};

const Content = () => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden px-8 pb-4  md:px-8 ">
      <div className="relative mt-20 flex flex-col items-center  justify-center ">
        <h1 className="relative mx-auto mt-4 max-w-6xl text-center text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-7xl ">
          I'm a{" "}
          <span className="bg-secondary relative bg-clip-text text-transparent">
            full stack
          </span>{" "}
          developer{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-secondary inline-block size-14 stroke-[1px]"
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
        <p className="mt-8 max-w-4xl text-sm tracking-wide text-zinc-400 md:text-lg">
          Meet Antoine Capitain, the self-proclaimed code wizard who can turn
          idea into websites, tools or other solution with caffeine. His passion
          for web and software programming has equalled only by your ideas.
        </p>
        <div className="mt-4 w-full max-w-4xl text-sm tracking-wide text-zinc-400 md:text-lg">
          Building{" "}
          <LinkPreview
            className={
              "outline-hidden font-bold text-zinc-200 transition duration-150 hover:text-cyan-500"
            }
            url="https://from-a2b.com"
          >
            From A2B
          </LinkPreview>{" "}
          and{" "}
          <LinkPreview
            className={
              "font-bold text-zinc-200 transition duration-150 hover:text-cyan-500"
            }
            url="https://techmotion.io"
          >
            Techmotion
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
  const rectangleSVGLight = `<svg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'><rect width='40' height='40' x='0' y='0' stroke='hsl(240, 5%, 25%)' fill='none' /></svg>`;
  const encodedRectangleSVGLight = encodeURIComponent(rectangleSVGLight);
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden",
        className,
      )}
      {...props}
    >
      <div
        className={cn("h-full w-full")}
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodedRectangleSVGLight}")`,
          backgroundSize: "40px 40px",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
};
