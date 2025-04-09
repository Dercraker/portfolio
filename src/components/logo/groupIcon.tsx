import { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, ICloud } from "react-icon-cloud";
import { RenderCustomIcon } from "./renderCustomIcon";

export type GroupIconProps = {
  iconSlugs: string[];
  cloudProps?: Omit<ICloud, "children">;
};
type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export const GroupIcon = ({
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
      frontSelect: true,
      hideTags: true,
      outlineColour: "#0aa375",
      outlineMethod: "colour",

      // reverse: false,
      // wheelZoom: false,
      // imageScale: 1,
      tooltip: "native",
      initial: [0.05, -0.05],
      // clickToFront: 500,
      // tooltipDelay: 0,
      // outlineColour: "#0000",
      maxSpeed: 0.02,
      minSpeed: 0.001,
    },
  },
}: GroupIconProps) => {
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
