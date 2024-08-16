import { cn } from "@/lib/utils";
import { ProjectSchema } from "@/types/project/Project.type";
import moment from "moment";
import { SectionLayout } from "../../layout/SectionLayout";
import { Typography } from "../../ui/typography";
import { WobbleCard } from "../../ui/wobble/wobble-card";
import { DateBadge } from "./DateBadge";
import { ProjectBadge } from "./ProjectBadge";

const projectList: ProjectSchema[] = [
  {
    title: "GuanajuatoRP",
    desc: "Adorant faire du 'RôlePlay' sur le jeu Forza Horizon 5 avec des amis et d'autres joueurs. J'ai décidé de crée un serveur discord dédier à cela. Afin de permettre une meilleur expérience, et sachant que le jeu ne permet pas le modding. J'ai crée un bot discord, ainsi qu'un site web qui permettais aux joueurs sur discord, d'avoir tout un écosystème pour encadrer les sessions de jeu",
    link: "https://github.com/GuanajuatoRP",
    size: "small",
    date: moment("2022-10-02"),
  },
  {
    title: "Forza Horizon Live Map",
    desc: "Le jeu Forza Horizon 5, est doté d'un système d'export des donnée télémétrique des joueurs. Grâce à ce dernier j'ai pu mettre en place cette map interactive. Sur la carte, il est possible, si des joueurs partages leurs donnée. De visualiser la position de ce dernier en temp réel...",
    link: "https://forzamap.dercraker.fr",
    size: "medium",
    date: moment("2023-11-07"),
  },
  {
    title: "Challenge - Motdle",
    desc: "J'ai participer à un challenge qui consistais a crée un Wordle, et ce dans un temps restreint. J'ai crée ma propre version en français",
    link: "https://motdle.dercraker.fr/",
    size: "small",
    date: moment("2024-04-29"),
  },
  {
    title: "Challenge - Timer",
    desc: "J'ai participer à un challenge dans le quel, j'ai du crée un timer en ligne dans un temps impartis de quelques heurs",
    link: "https://awesome-timer.dercraker.fr/",
    size: "small",
    date: moment("2024-06-30"),
  },
  {
    title: "Challenge - 2048",
    desc: "Cette fois ci c'est moi qui crée un challenge ! Ce dernier seras a destination de développeur qui suivent des formations, JS, React, Next.Js. Le but seras de crée une app web permettant de jouer à un 2048",
    link: undefined,
    size: "small",
    date: undefined,
  },
  {
    title: "From-A2B",
    desc: "Pour mon projet de fin d'étude, j'ai décidé de partir sur la création d'un planificateur de voyage booster à l'IA!. Grâce à celui-ci, il deviendras facile de crée et planifier un voyage, cette tâche fastidieuses qui pouvais prendre de très longue heurs voir plusieurs jours n'est plus qu'un mauvais souvenir. Décrivez le voyage qui vous fait envi (Destination, Durée, Période, ....) puis l'IA crée tout votre voyage en un instant. Ce dernier seras constituer d'un ensemble de modules vous permettant ainsi de le modifier et personnaliser a votre guise",
    link: undefined,
    size: "large",
    date: undefined,
  },
  {
    title: "Staracter",
    desc: "Dans le cadre d'une formation Next.js, j'ai crée ce site. Qui permet aux joueurs de StarCitizen de pouvoir, uploader les skins de leurs différents personnages de jeu. Afin de pouvoir partager ces dernier, ainsi que facilement pour y avoir accès",
    link: "https://staracter.dercraker.fr/",
    size: "medium",
    date: moment("2024-05-26"),
  },
  {
    title: "StarTrad",
    desc: "Depuis plusieurs mois, le jeu Star Citizen. A été doté d'une possibilité d'ajouter des traduction en modifiant certains fichier du jeu. La procédure est complexe et peut faire peur au moins aguerris. J'ai participer à la création de l'outils OpenSource StarTrad. Ce dernier permet d'avoir des traductions installer et mise a jour automatiquement. L'outils propose d'autre fonctionnalité permettant aux utilisateur d'avoir une expérience plus fluide avec le jeu.",
    link: "https://startrad.fr/",
    size: "small",
    date: moment("2024-05-28"),
  },
];

export const ProjectSection = () => {
  return (
    <SectionLayout size="lg" id="Projects">
      <div className="mx-auto grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
        {projectList.map(({ title, desc, link, size, date }, idx) => {
          return (
            <WobbleCard key={idx} size={size} link={link}>
              <div
                className={cn(
                  size === "small"
                    ? "max-w-xs"
                    : size === "medium"
                      ? "max-w-2xl"
                      : "max-w-5xl",
                )}
              >
                {date && <ProjectBadge isRunning={!!link} />}
                <Typography
                  variant="h2"
                  className="select-none text-wrap text-left"
                >
                  {title}
                </Typography>
                <p className="mt-4 line-clamp-6  select-none text-left text-base/6 text-neutral-200">
                  {desc}
                </p>
                <DateBadge date={date} />
              </div>
            </WobbleCard>
          );
        })}
      </div>
    </SectionLayout>
  );
};
