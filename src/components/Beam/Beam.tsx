/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./style.module.css";

type BeamProps = {
  showBeam: boolean;
  className?: string;
};

const Beam = ({ showBeam, className }: BeamProps) => {
  const meteorRef = useRef<any>(null);

  useEffect(() => {
    if (showBeam) {
      const meteor = meteorRef.current;

      meteor.addEventListener("animationend", () => {
        meteor.style.visibility = "hidden";
        const animationDelay = Math.floor(Math.random() * (3 - 0) + 0);
        const animationDuration = Math.floor(Math.random() * (4 - 0) + 0);
        const meteorWidth = Math.floor(Math.random() * (150 - 80) + 80);
        meteor.style.setProperty("--meteor-delay", `${animationDelay}s`);
        meteor.style.setProperty("--meteor-duration", `${animationDuration}s`);
        meteor.style.setProperty("--meteor-width", `${meteorWidth}px`);

        restartAnimation();
      });

      meteor.addEventListener("animationstart", () => {
        meteor.style.visibility = "visible";
      });
    }

    return () => {
      if (showBeam) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const meteor = meteorRef.current;
        if (meteor) {
          meteor.removeEventListener("animationend", () => void 0);
          meteor.removeEventListener("animationstart", () => void 0);
        }
      }
    };
  }, [showBeam]);
  const restartAnimation = () => {
    const meteor = meteorRef.current;
    meteor.style.animation = "none";
    void meteor.offsetWidth;
    meteor.style.animation = null;
  };

  return (
    showBeam && (
      <span
        ref={meteorRef}
        className={twMerge(
          "bg-secondary before:via-secondary before:to-secondary absolute left-4 z-20 h-[0.1rem] w-[0.1rem] rounded-[9999px] shadow-[0_0_0_1px_#ffffff10] before:bg-gradient-to-l before:from-transparent",
          styles.meteor,
          className,
        )}
      ></span>
    )
  );
};

export default Beam;
