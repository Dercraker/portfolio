"use client";

import ICON from "@assets/system-regular-1-share-hover-share.json";
import { useDisclosure } from "@hooks/useDisclosure";

import { Player } from "@lordicon/react";
import { Button } from "@ui/button";
import { useEffect, useRef } from "react";

type ShareIconProps = {
  onClick?: () => void;

  isHover?: boolean;
  loop?: boolean;
  size?: number;
  colorize?: string;
  disabled?: boolean;

  stayLastFrame?: boolean;
};

export const ShareIcon = ({
  colorize = "var(--muted-foreground)",
  size = 64,
  disabled = false,
  isHover = false,
  loop = false,
  stayLastFrame = false,
  onClick,
}: ShareIconProps) => {
  const [hovered, { open: openHover, close: closeHover }] =
    useDisclosure(false);
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    if ((isHover || hovered) && !playerRef.current?.isPlaying)
      playerRef.current?.playFromBeginning();

    if (!isHover && !hovered && !playerRef.current?.isPlaying)
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
        colorize={disabled ? "var(--muted-foreground)" : colorize}
      />
    </Button>
  );
};
