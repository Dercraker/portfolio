"use client";

import { Event } from "@components/events/event";
import { useState } from "react";

export const LatestEvent = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="flex max-w-3xl flex-col space-y-16">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Event
          key={idx}
          setHoveredIndex={setHoveredIndex}
          idx={idx}
          hoveredIndex={hoveredIndex}
        />
      ))}
    </div>
  );
};
