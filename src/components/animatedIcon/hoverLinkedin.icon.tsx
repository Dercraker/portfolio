"use client";

import ICON from "@assets/wired-outline-2632-logo-circle-linkedin-hover-roll.json";
import { useDisclosure } from "@hooks/useDisclosure";

import { type Player as PlayerType } from "@lordicon/react";
import { Button } from "@ui/button";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

type HoverLinkedinIconProps = {
  onClick?: () => void;

  isHover?: boolean;
  loop?: boolean;
  size?: number;
  colorize?: string;
  disabled?: boolean;

  stayLastFrame?: boolean;
};

const Player = dynamic(
  async () => import("@lordicon/react").then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => <Loader2 size={32} className="animate-spin" />,
  },
);

export const HoverLinkedinIcon = ({
  colorize = "var(--secondary)",
  size = 64,
  disabled = false,
  isHover = false,
  loop = false,
  stayLastFrame = false,
  onClick,
}: HoverLinkedinIconProps) => {
  const [hovered, { open: openHover, close: closeHover }] =
    useDisclosure(false);
  const playerRef = useRef<PlayerType>(null);

  useEffect(() => {
    if ((isHover || hovered) && !playerRef.current?.isPlaying)
      playerRef.current?.playFromBeginning();

    if (!isHover && !hovered && !playerRef.current?.isPlaying)
      void (stayLastFrame
        ? playerRef.current?.goToLastFrame()
        : playerRef.current?.goToFirstFrame());
  }, [isHover, hovered, playerRef.current?.isPlaying, stayLastFrame]);

  const onComplete = () => {
    if ((isHover || hovered) && loop) playerRef.current?.playFromBeginning();

    if (!isHover && !hovered)
      void (stayLastFrame
        ? playerRef.current?.goToLastFrame()
        : playerRef.current?.goToFirstFrame());
  };

  return (
    <Button
      variant="ghost2"
      onMouseOver={!isHover ? openHover : void 0}
      onMouseLeave={closeHover}
      onClick={onClick}
      disabled={disabled}
      className="m-0 p-0"
    >
      <Player
        // @ts-expect-error - Player is not typed
        ref={playerRef}
        icon={ICON}
        size={size}
        onComplete={onComplete}
        colorize={
          disabled
            ? "var(--muted-foreground)"
            : hovered
              ? colorize
              : "var(--color-neutral-300)"
        }
      />
    </Button>
  );
};
