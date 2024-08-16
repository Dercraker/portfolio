"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { Noise } from "../noise";
import { WobbleCardVariants } from "./wobble-variants";

type WobbleCardProps = {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  link?: string;
} & WobbleCardVariants;

export const WobbleCard = ({
  children,
  containerClassName,
  className,
  size,
  link,
}: WobbleCardProps) => {
  console.log("🚀 ~ link:", link);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };
  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
      className={cn(WobbleCardVariants({ size }), containerClassName)}
    >
      <Link href={link || "#Projects"} target={link ? "_blank" : "_self"}>
        <div
          className="relative  h-full overflow-hidden  [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl"
          style={{
            boxShadow:
              "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
          }}
        >
          <motion.div
            style={{
              transform: isHovering
                ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
                : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
              transition: "transform 0.1s ease-out",
            }}
            className={cn("h-full px-4 py-20 sm:px-10", className)}
          >
            <Noise />
            {children}
          </motion.div>
        </div>
      </Link>
    </motion.section>
  );
};
