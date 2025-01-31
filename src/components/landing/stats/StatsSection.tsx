"use client";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { GetFeedbackCountAction } from "@/features/landing/stats/GetFeedBackCount.action";
import { GetRepositoryCountAction } from "@/features/landing/stats/getRepositoryCount.action";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { toast } from "sonner";
import { Counter } from "./Counter";

type StatProps = {
  number: number;
  suffix: string;
  text: string;
};

export const StatsSection = () => {
  const { data: repositoryCount } = useQuery({
    queryKey: ["Repository", "Count", { userId: "46059868" }],
    queryFn: async () => {
      const res = await GetRepositoryCountAction({
        userId: "46059868",
      });

      if (!res || res.serverError || !res.data) {
        toast("An error occurred when fetching Dercraker profile");
        return 0;
      }

      return res.data;
    },
  });
  const { data: feedbackCount } = useQuery({
    queryKey: ["Testimonial", "Count"],
    queryFn: async () => {
      const res = await GetFeedbackCountAction({});

      if (!res || res.serverError || !res.data) {
        toast("An error occurred when fetching data");
        return 0;
      }

      return res.data;
    },
  });

  const stats: StatProps[] = [
    {
      number: moment().diff(moment("2018-12-22"), "seconds") / 1000000,
      suffix: "M",
      text: "Secondes depuis mon premier HelloWorld",
    },
    {
      number: feedbackCount || 0,
      suffix: "",
      text: "Clients recommandant mon travaille (pro)",
    },
    {
      number: repositoryCount || 0,
      suffix: "",
      text: "Projet crées (Pro & Perso)",
    },
  ];

  return (
    <SectionLayout size="base" variant="card">
      <div className="flex flex-col flex-wrap items-center justify-around gap-12 sm:flex-row sm:gap-0 ">
        {stats.map((stat, index) => (
          <div key={index} className="relative text-center md:px-5">
            <h4 className="mb-2 text-2xl font-bold tabular-nums md:text-3xl">
              <Counter from={0} to={stat.number} />

              {stat.suffix}
            </h4>
            <p className="text-sm text-muted-foreground">{stat.text}</p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};
