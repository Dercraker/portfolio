import { useTranslations } from "next-intl";
import { z } from "zod";

export const TimelinePointSchema = z.object({
  year: z.number(),
  points: z.array(z.string()),
});

export const TimelineSchema = z.array(TimelinePointSchema);

export type TimelinePointType = z.infer<typeof TimelinePointSchema>;
export type TimelineType = z.infer<typeof TimelineSchema>;

export const GetTimeline = () => {
  const t = useTranslations("Timeline");
  return [
    {
      year: 2025,
      points: [t("2025.Description1"), t("2025.Description2")],
    },
    {
      year: 2024,
      points: [t("2024.Description1"), t("2024.Description2")],
    },
    {
      year: 2023,
      points: [
        t("2023.Description1"),
        t("2023.Description2"),
        t("2023.Description3"),
      ],
    },
    {
      year: 2022,
      points: [
        t("2022.Description1"),
        t("2022.Description2"),
        t("2022.Description3"),
      ],
    },
    {
      year: 2021,
      points: [
        t("2021.Description1"),
        t("2021.Description2"),
        t("2021.Description3"),
      ],
    },
    {
      year: 2020,
      points: [
        t("2020.Description1"),
        t("2020.Description2"),
        t("2020.Description3"),
      ],
    },
    {
      year: 2019,
      points: [
        t("2019.Description1"),
        t("2019.Description2"),
        t("2019.Description3"),
        t("2019.Description4"),
      ],
    },
    {
      year: 2018,
      points: [
        t("2018.Description1"),
        t("2018.Description2"),
        t("2018.Description3"),
      ],
    },
  ] satisfies TimelineType;
};
