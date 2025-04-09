"use client";

import { HoverCheckIcon } from "@components/animatedIcon/hoverCheck.icon";
import Beam from "@components/Beam/Beam";
import type { TimelinePointType } from "constant/timeline";
import { timeline } from "constant/timeline";
import { useState } from "react";

export const Timeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  return (
    <div className="relative mx-auto   max-w-3xl divide-zinc-800">
      <div className="to:transparent absolute -left-4 h-full w-[4px] bg-linear-to-b from-transparent  via-secondary md:-left-10">
        <Beam showBeam={true} className={`left-1`} />
      </div>
      {timeline.map((item: TimelinePointType, idxYear: number) => (
        <div
          key={`timeline-year-${idxYear}`}
          className="border-b border-zinc-800"
        >
          <h1 className="relative my-8 text-xl font-bold text-zinc-200">
            <div className="absolute -left-[20px] top-2 size-3 rounded-full border-2 border-secondary bg-zinc-800 md:-left-[46px] md:top-1 md:size-4" />
            {item.year}
          </h1>

          <div className="mb-8">
            {item.points.map((point: string, idx: number) => (
              <div
                key={`timeline-year-${idxYear}-item-${idx}`}
                className="my-2 flex items-center gap-2 cursor-default "
                onMouseEnter={() => setHoveredIndex(`${idxYear}-${idx}`)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <HoverCheckIcon
                  size={32}
                  colorize="var(--secondary)"
                  loop
                  isHover={hoveredIndex === `${idxYear}-${idx}`}
                />
                <span className="text-sm text-muted-foreground md:text-base">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
