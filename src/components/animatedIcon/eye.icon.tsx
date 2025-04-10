"use client";

import ICON from "@assets/wired-outline-69-eye-hover-look-around.json";
import { useDisclosure } from "@hooks/useDisclosure";

import { type Player as PlayerType } from "@lordicon/react";
import { Button } from "@ui/button";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

type EyeIconProps = {
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
export const EyeIcon = ({
  colorize = "var(--muted-foreground)",
  size = 64,
  disabled = false,
  isHover = false,
  loop = false,
  stayLastFrame = false,
  onClick,
}: EyeIconProps) => {
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
        colorize={disabled ? "var(--muted-foreground)" : colorize}
      />
    </Button>
  );
};
