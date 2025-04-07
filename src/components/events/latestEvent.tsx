"use client";

import { Event } from "@components/events/event";
import { LinkedinPostType } from "@type/linkedinPost.type";
import { useState } from "react";

export const LatestEvent = ({ posts }: { posts: LinkedinPostType[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex max-w-3xl flex-col space-y-16">
      {posts.slice(0, 2).map((post: LinkedinPostType, idx: number) => (
        <Event
          key={idx}
          setHoveredIndex={setHoveredIndex}
          idx={idx}
          hoveredIndex={hoveredIndex}
          post={post}
        />
      ))}
    </div>
  );
};
