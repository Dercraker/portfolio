"use client";

import { Event } from "@components/events/event";
import { LinkedinPostType } from "@type/linkedinPost.type";
import { useState } from "react";

type LatestEventProps = {
  posts: LinkedinPostType[];
  limit?: number;
};

export const LatestEvent = ({ posts, limit }: LatestEventProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex max-w-3xl flex-col space-y-16">
      {(limit ? posts.slice(0, limit) : posts).map(
        (post: LinkedinPostType, idx: number) => (
          <Event
            key={idx}
            setHoveredIndex={setHoveredIndex}
            idx={idx}
            hoveredIndex={hoveredIndex}
            post={post}
          />
        ),
      )}
    </div>
  );
};
