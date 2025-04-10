"use client";
import { useEffect, useMemo, useState } from "react";
import type { ICloud } from "react-icon-cloud";
import { Cloud, fetchSimpleIcons } from "react-icon-cloud";
import { RenderCustomIcon } from "./renderCustomIcon";

export type DynamicCloudProps = {
  iconSlugs: string[];
  cloudProps?: Omit<ICloud, "children">;
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

const IconCloud = ({
  iconSlugs,
  cloudProps = {
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
      activeCursor: "default",
      animTiming: "Smooth",
      clickToFront: 1000,
      decel: 0.98,
      depth: 1,
      dragControl: true,
      frontSelect: false,
      hideTags: true,
      outlineColour: "#0aa375",
      outlineMethod: "colour",
      pinchZoom: false,
      tooltip: "native",

      wheelZoom: false,
      initial: [0.05, -0.05],
      maxSpeed: 0.02,
      minSpeed: 0.001,
    },
  },
}: DynamicCloudProps) => {
  const [data, setData] = useState<IconData | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      RenderCustomIcon({ icon }),
    );
  }, [data]);

  return (
    <Cloud {...cloudProps} id="Tools-Cloud-Icons">
      <>{renderedIcons}</>
    </Cloud>
  );
};

export default IconCloud;
