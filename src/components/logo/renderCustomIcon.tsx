import type { SimpleIcon } from "react-icon-cloud";
import { renderSimpleIcon } from "react-icon-cloud";

export type RenderCustomIconProps = {
  icon: SimpleIcon;
  size?: number;
};

export const RenderCustomIcon = ({
  icon,
  size = 42,
}: RenderCustomIconProps) => {
  const bgHex = "#000";
  const fallbackHex = "#fff";
  const minContrastRatio = 2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size,
    aProps: {
      onClick: (e) => e.preventDefault(),
    },
  });
};
