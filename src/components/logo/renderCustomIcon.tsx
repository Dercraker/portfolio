import type { SimpleIcon } from "react-icon-cloud";
import { renderSimpleIcon } from "react-icon-cloud";

export type RenderCustomIconProps = {
  icon: SimpleIcon;
  theme: string;
  size?: number;
};

export const RenderCustomIcon = ({
  icon,
  theme,
  size = 42,
}: RenderCustomIconProps) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onClick: (e: any) => e.preventDefault(),
    },
  });
};
