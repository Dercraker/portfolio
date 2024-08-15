"use client";
import { GetRepositoryCountAction } from "@/features/landing/getRepositoryCount.action";
import { useQuery } from "@tanstack/react-query";
import { animate } from "framer-motion";
import moment from "moment";
import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { SectionLayout } from "../../features/landing/SectionLayout";

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
        // userId: env.DERCRAKER_GITHUB_ACCOUNT_ID,
        userId: "46059868",
      });

      if (!res || res.serverError || !res.data) {
        toast("An error occurred when fetching Dercraker profile");
        return 0;
      }

      return res.data;
    },
  });

  const stats: StatProps[] = [
    {
      number: moment().diff(moment("2018-12-22"), "seconds") / 1000000,
      suffix: "M",
      text: "Secondes depuis ma première ligne de code",
    },
    {
      number: repositoryCount || 0,
      suffix: "",
      text: "Projet crées",
    },
    {
      number: 2.1,
      suffix: "M",
      text: "Ligne écrites",
    },
    {
      number: 1,
      suffix: "",
      text: "Clients recommandant mon travaille",
    },
  ];

  return (
    <SectionLayout size="sm">
      <div className="grid w-full items-center gap-12 sm:grid-cols-2 md:-mx-5 md:max-w-none md:grid-cols-4 md:gap-0">
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

const Counter = ({
  from,
  to,
  duration = 2,
}: {
  from: number;
  to: number;
  duration?: number;
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!nodeRef.current) return;
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration,
      ease: "easeInOut",

      onUpdate(value) {
        const decimals = Number.isInteger(to) ? 0 : 2;
        node.textContent = value.toFixed(decimals);
      },
    });

    return () => controls.stop();
  }, [from, to, duration]);

  return <span ref={nodeRef}>{from}</span>;
};
