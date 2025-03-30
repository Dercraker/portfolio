"use client";

import { GetNavbarLinks } from "@app/(landing)/_navigation/navbar.links";
import { Logo } from "@components/logo/logo";
import type { GeneratedNavigationLink } from "@feat/navigation/navigation.type";
import { cn } from "@lib/utils";
import { buttonVariants } from "@ui/button";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

type NavbarProps = {
  isVisible: boolean;
};

export const LandingNavbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div ref={ref} className="fixed inset-x-0 top-0 z-50 w-full">
      <DesktopNav isVisible={visible} />
      <MobileNav isVisible={visible} />
    </motion.div>
  );
};

const DesktopNav = ({ isVisible: visible }: NavbarProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
      }}
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "hidden md:flex flex-row  self-start bg-transparent dark:bg-transparent items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[100] w-full",
        visible && "bg-white/80 dark:bg-neutral-950/80",
      )}
    >
      <Logo />
      <motion.div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 md:flex lg:space-x-2">
        {GetNavbarLinks().map((link: GeneratedNavigationLink, idx: number) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
            key={`link=${idx}`}
            href={link.href}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 size-full rounded-full bg-gray-100 dark:bg-neutral-800"
              />
            )}
            <span className="relative z-20">{link.label}</span>
          </Link>
        ))}
      </motion.div>
      <div className="relative flex items-center gap-4">
        <Link
          className={cn(buttonVariants({}), "hidden md:block")}
          href="/cv.pdf"
          download
          target="_blank"
        >
          Download CV
        </Link>
      </div>
    </motion.div>
  );
};

const MobileNav = ({ isVisible: visible }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "none",
          width: visible ? "90%" : "100%",
          y: visible ? 20 : 0,
          borderRadius: open ? "4px" : "2rem",
          paddingRight: visible ? "12px" : "0px",
          paddingLeft: visible ? "12px" : "0px",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className={cn(
          "flex relative flex-col md:hidden w-full justify-between items-center bg-transparent max-w-[calc(100vw-2rem)] mx-auto px-0 py-2 z-50",
          visible && "bg-white/80 dark:bg-neutral-950/80",
        )}
      >
        <div className="flex w-full flex-row items-center justify-between">
          <Logo />
          <Menu
            className="text-black dark:text-white"
            onClick={() => setOpen(!open)}
          />
        </div>

        <AnimatePresence></AnimatePresence>
      </motion.div>
    </>
  );
};
