"use client";

import { cn } from "@lib/utils";
import { CircleHelp, MoveRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative z-20 mx-auto my-20 grid w-full max-w-7xl grid-cols-1 justify-start bg-gradient-to-br from-gray-100 to-white dark:from-neutral-900 dark:to-neutral-950 md:my-40 md:grid-cols-3">
      <GridLineHorizontal className="top-0" offset="200px" />
      <GridLineHorizontal className="bottom-0 top-auto" offset="200px" />
      <GridLineVertical className="left-0" offset="80px" />
      <GridLineVertical className="left-auto right-0" offset="80px" />
      <div className="p-8 md:col-span-2 md:p-14">
        <h2 className="text-left text-xl font-medium tracking-tight text-neutral-500 dark:text-neutral-200 md:text-3xl">
          Ship products with the{" "}
          <span className="font-bold text-black dark:text-white">
            speed of light
          </span>
        </h2>
        <p className="mt-4 max-w-lg text-left text-xl font-medium tracking-tight text-neutral-500 dark:text-neutral-200 md:text-3xl">
          Get the best in class <span className="text-sky-700">support</span>{" "}
          for the most advanced{" "}
          <span className="text-indigo-700">products</span>.
        </p>

        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:gap-4">
          <button className="group mt-8 flex items-center space-x-2 rounded-lg bg-gradient-to-b from-blue-500 to-blue-700 px-4 py-2 text-base text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]">
            <span>Buy now</span>
            <MoveRight className="mt-0.5 size-3 stroke-[1px] text-white transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <button className="group mt-8 flex items-center space-x-2 rounded-lg border border-neutral-200 px-4  py-2 text-base text-black shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] dark:border-neutral-800 dark:text-white">
            <span>Talk to us</span>
            <CircleHelp className="mt-0.5 size-3 stroke-[1px] text-black transition-transform duration-200 group-hover:translate-x-1 dark:text-white" />
          </button>
        </div>
      </div>
      <div className="border-t border-dashed p-8 md:border-l md:border-t-0 md:p-14">
        <p className="text-base text-neutral-700 dark:text-neutral-200">
          &quot;This is the best product ever when it comes to shipping. Ten on
          ten recommended. I just can&apos;t wait to see what happens with this
          product.&quot;
        </p>
        <div className="mt-4 flex flex-col items-start gap-1 text-sm">
          <p className="font-bold text-neutral-800 dark:text-neutral-200">
            Michael Scarn
          </p>
          <p className="text-neutral-500 dark:text-neutral-400">
            Side projects builder
          </p>
        </div>
      </div>
    </section>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset ?? "200px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute w-[calc(100%+var(--offset))] h-[var(--height)] left-[calc(var(--offset)/2*-1)]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset ?? "150px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute h-[calc(100%+var(--offset))] w-[var(--width)] top-[calc(var(--offset)/2*-1)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};
