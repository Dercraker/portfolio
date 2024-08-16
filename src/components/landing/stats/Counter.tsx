import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

type CounterProps = {
  from: number;
  to: number;
  duration?: number;
};

export const Counter = ({ from, to, duration = 2 }: CounterProps) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!nodeRef.current) return;
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration,
      ease: "easeInOut",

      onUpdate(value) {
        const decimals = Number.isInteger(to) ? 0 : 2;
        node.textContent = value.toFixed(decimals);
      },
    });

    return () => controls.stop();
  }, [from, to, duration]);

  return <span ref={nodeRef}>{from}</span>;
};
