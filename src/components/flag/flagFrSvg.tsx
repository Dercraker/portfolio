import type { ComponentPropsWithoutRef } from "react";

export type FlagFrSvgProps = ComponentPropsWithoutRef<"svg"> & {
  size?: number;
};

export const FlagFrSvg = ({ size = 24, ...props }: FlagFrSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icons-fr"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      {...props}
    >
      <path fill="#fff" d="M0 0h512v512H0z" />
      <path fill="#000091" d="M0 0h170.7v512H0z" />
      <path fill="#e1000f" d="M341.3 0H512v512H341.3z" />
    </svg>
  );
};
