"use client";

import ICON from "@assets/wired-outline-20-love-heart-morph-glitter.json";
import { useDisclosure } from "@hooks/useDisclosure";

import { type Player as PlayerType } from "@lordicon/react";
import { Button } from "@ui/button";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

type HearthIconProps = {
  onClick?: () => void;

  isHover?: boolean;
  loop?: boolean;
  size?: number;
  colorize?: string;
  disabled?: boolean;

  stayLastFrame?: boolean;
};

const Player = dynamic(
  () => import("@lordicon/react").then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => <Loader2 size={32} className="animate-spin" />,
  },
);
export const HearthIcon = ({
  colorize = "var(--muted-foreground)",
  size = 64,
  disabled = false,
  isHover = false,
  loop = false,
  stayLastFrame = false,
  onClick,
}: HearthIconProps) => {
  const [hovered, { open: openHover, close: closeHover }] =
    useDisclosure(false);
  const playerRef = useRef<PlayerType>(null);

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
    <>
      <Button
        variant="ghost2"
        onMouseOver={!isHover ? openHover : void 0}
        onMouseLeave={closeHover}
        onClick={onClick}
        disabled={disabled}
        className="p-0 m-0"
      >
        <Player
          // @ts-ignore
          ref={playerRef}
          icon={ICON}
          size={size}
          onComplete={onComplete}
          colorize={disabled ? "var(--muted-foreground)" : colorize}
        />
      </Button>
    </>
  );
};
