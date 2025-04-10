import { z } from "zod";

export const hardwareSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export type HardwareType = z.infer<typeof hardwareSchema>;

export const hardwares: HardwareType[] = [
  {
    name: "16 pouces thinkpad x1 carbon on dualboot fedora and windows",
    description: `My main machine for development that I've been using for over 3 years now. Such a beast of a machine. I love it.`,
  },
  {
    name: "Logitech Ergo K860",
    description:
      "My main keyboard for development. It's ergonomic and large. I use it with a Logitech MX Master 3 mouse.",
  },
  {
    name: "Logitech MX Master 3s",
    description:
      "My main mouse for development. I love the scroll wheel and the thumb buttons. I use it with a Ergo K860 keyboard.",
  },
];
