"use client";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import type { ICloud } from "react-icon-cloud";
import { Cloud, fetchSimpleIcons } from "react-icon-cloud";
import { RenderCustomIcon } from "./renderCustomIcon";
export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.02,
    minSpeed: 0.02,
    dragControl: false,
  },
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

const IconCloud = ({ iconSlugs }: DynamicCloudProps) => {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      RenderCustomIcon({ icon, theme: theme ?? "light" }),
    );
  }, [data, theme]);

  return (
    <Cloud {...cloudProps} id="Tools-Cloud-Icons">
      <>{renderedIcons}</>
    </Cloud>
  );
};

export default IconCloud;
