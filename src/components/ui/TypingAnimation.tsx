"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, type ComponentPropsWithoutRef } from "react";
import { Typography, TypographyCvaProps } from "./typography";

export type TypingAnimationProps = ComponentPropsWithoutRef<"div"> & {
  text: string;
  duration?: number;
  variant: TypographyCvaProps["variant"];
};

export const TypingAnimation = ({
  children,
  className,
  text,
  duration = 200,
  variant,
  ...props
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i]);

  return (
    <Typography variant={variant} className={cn("", className)} {...props}>
      {displayedText ? displayedText : text}
    </Typography>
  );
};
