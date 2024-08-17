import { prisma } from "@/lib/prisma";
import { cn } from "@/lib/utils";
import moment from "moment";
import { SectionLayout } from "../../layout/SectionLayout";
import { Typography } from "../../ui/typography";
import { WobbleCard } from "../../ui/wobble/wobble-card";
import { DateBadge } from "./DateBadge";
import { ProjectBadge } from "./ProjectBadge";

export const ProjectSection = async () => {
  const projectList = await prisma.project.findMany();

  return (
    <>
      <SectionLayout variant="card">
        <Typography className="leading-relaxed">
          L'un des projets dont je suis le plus fier est GuanajuatoRP que j'ai
          développée avec du React, .NET et Discord.JS. Ce projet m'a permis de
          relever des défis techniques importants, comme l'intégration d'une
          expérience utilisateur fluide entre un jeu et discord. Chaque
          fonctionnalité développée a renforcé ma passion pour la création
          d'applications robustes et intuitives.
        </Typography>
      </SectionLayout>
      <SectionLayout
        size="lg"
        id="Projects"
        className="flex flex-col items-center justify-center"
      >
        <div className="mx-auto grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
          {projectList.map(
            ({ title, desc, link, size, date, isRunning }, idx) => {
              return (
                <WobbleCard key={idx} size={size} link={link || undefined}>
                  <div
                    className={cn(
                      size === "small"
                        ? "max-w-xs"
                        : size === "medium"
                          ? "max-w-2xl"
                          : "max-w-5xl",
                    )}
                  >
                    <div className="flex gap-2">
                      {date && <ProjectBadge isRunning={isRunning} />}
                      <DateBadge date={date ? moment(date) : undefined} />
                    </div>
                    <Typography
                      variant="h2"
                      className="select-none text-wrap text-left"
                    >
                      {title}
                    </Typography>
                    <p className="mt-4 line-clamp-6  select-none text-left text-base/6 text-neutral-200">
                      {desc}
                    </p>
                  </div>
                </WobbleCard>
              );
            },
          )}
        </div>
      </SectionLayout>
      <SectionLayout variant="card">
        <Typography className="leading-relaxed">
          Aujourd'hui, je continue à me perfectionner dans l'écosystème Next.js
          et .NET, tout en explorant de nouveaux horizons comme l'intelligence
          artificielle.
        </Typography>
        <Typography className="leading-relaxed">
          Chaque projet est pour moi une opportunité d'aller plus loin et de
          transformer des idées en expériences numériques captivantes.
        </Typography>
      </SectionLayout>
    </>
  );
};
