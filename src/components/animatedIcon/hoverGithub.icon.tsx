"use client";

import ICON from "@assets/wired-outline-2572-logo-github-hover-roll.json";
import { useDisclosure } from "@hooks/useDisclosure";

import { Player } from "@lordicon/react";
import { Button } from "@ui/button";
import { useEffect, useRef } from "react";

type HoverGithubIconProps = {
  onClick?: () => void;

  isHover?: boolean;
  loop?: boolean;
  size?: number;
  colorize?: string;
  disabled?: boolean;

  stayLastFrame?: boolean;
};

export const HoverGithubIcon = ({
  colorize = "var(--secondary)",
  size = 64,
  disabled = false,
  isHover = false,
  loop = false,
  stayLastFrame = false,
  onClick,
}: HoverGithubIconProps) => {
  const [hovered, { open: openHover, close: closeHover }] =
    useDisclosure(false);
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    if (playerRef.current?.isPlaying) return;

    if (isHover || hovered) playerRef.current?.playFromBeginning();

    if (!isHover && !hovered)
      stayLastFrame
        ? playerRef.current?.goToLastFrame()
        : playerRef.current?.goToFirstFrame();
  }, [isHover, hovered, playerRef.current?.isPlaying]);

  const onComplete = () => {
    if ((isHover || hovered) && loop) playerRef.current?.playFromBeginning();

    if (!isHover && !hovered)
      stayLastFrame
        ? playerRef.current?.goToLastFrame()
        : playerRef.current?.goToFirstFrame();
  };

  return (
    <Button
      variant="ghost2"
      onMouseOver={!isHover ? openHover : void 0}
      onMouseLeave={closeHover}
      onClick={onClick}
      disabled={disabled}
      className="p-0 m-0"
    >
      <Player
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
