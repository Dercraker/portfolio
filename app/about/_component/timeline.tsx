"use client";

import Beam from "@components/Beam/Beam";
import type { TimelinePointType } from "constant/timeline";
import { timeline } from "constant/timeline";
import { CheckCircle } from "lucide-react";

export const Timeline = () => {
  return (
    <div className="relative mx-auto   max-w-3xl divide-zinc-800">
      <div className="to:transparent absolute -left-4 h-full w-[4px] bg-linear-to-b from-transparent  via-cyan-500 md:-left-10">
        <Beam showBeam={true} className={`left-1`} />
      </div>
      {timeline.map((item: TimelinePointType, idx: number) => (
        <div key={`timeline-item-${idx}`} className="border-b border-zinc-800">
          <h1 className="relative my-8 text-xl font-bold text-zinc-200">
            <div className="absolute -left-[20px] top-2 size-3 rounded-full border-2 border-cyan-500 bg-zinc-800 md:-left-[46px] md:top-1 md:size-4" />
            {item.year}
          </h1>

          <div className="mb-8">
            {item.points.map((point: string, idx: number) => (
              <div
                key={`timeline-item-${idx}`}
                className="my-2 flex flex-row items-start space-x-2"
              >
                <CheckCircle className="mt-[3px] shrink-0 text-cyan-500" />
                <span className="text-sm text-zinc-400 md:text-base">
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
