import { getTranslations } from "next-intl/server";
import { z } from "zod";

export const hardwareSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export type HardwareType = z.infer<typeof hardwareSchema>;

export const GetHardwares = async (): Promise<HardwareType[]> => {
  const t = await getTranslations("Hardware");

  return [
    {
      name: t("16PoucesThinkpadX1Carbon.Name"),
      description: t("16PoucesThinkpadX1Carbon.Description"),
    },
    {
      name: t("LogitechErgoK860.Name"),
      description: t("LogitechErgoK860.Description"),
    },
    {
      name: t("LogitechMXMaster3s.Name"),
      description: t("LogitechMXMaster3s.Description"),
    },
  ];
};
