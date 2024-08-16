import { cva, VariantProps } from "class-variance-authority";

export const WobbleCardVariants = cva(
  "relative col-span-1 mx-auto  min-h-[300px] w-full overflow-hidden rounded-2xl",
  {
    variants: {
      size: {
        small: ["bg-muted/10"],
        medium: ["h-full bg-muted lg:col-span-2"],
        large: ["h-full bg-background lg:col-span-3"],
      },
    },
    defaultVariants: {
      size: "small",
    },
  },
);

export type WobbleCardVariants = VariantProps<typeof WobbleCardVariants>;
