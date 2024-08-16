import { cva, VariantProps } from "class-variance-authority";

export const WobbleCardVariants = cva(
  "relative col-span-1 mx-auto  min-h-[300px] w-full overflow-hidden rounded-2xl",
  {
    variants: {
      size: {
        small: ["bg-indigo-800"],
        medium: ["h-full bg-pink-800 lg:col-span-2"],
        large: ["h-full bg-green-800 lg:col-span-3"],
      },
    },
    defaultVariants: {
      size: "small",
    },
  },
);

export type WobbleCardVariants = VariantProps<typeof WobbleCardVariants>;
