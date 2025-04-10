"use client";

import { cn } from "@lib/utils";
import { useEffect, useMemo, useState } from "react";
import { fetchSimpleIcons } from "react-icon-cloud";
import { RenderCustomIcon } from "./renderCustomIcon";

export type IconListProps = {
  iconSlugs: string[];
  size?: number;
  className?: string;
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;
export const IconList = ({ iconSlugs, size, className }: IconListProps) => {
  const [data, setData] = useState<IconData | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      RenderCustomIcon({ icon, size }),
    );
  }, [data, size]);

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>{renderedIcons}</div>
  );
};
