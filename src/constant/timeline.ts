import { z } from "zod";

export const TimelinePointSchema = z.object({
  year: z.number(),
  points: z.array(z.string()),
});

export const TimelineSchema = z.array(TimelinePointSchema);

export type TimelinePointType = z.infer<typeof TimelinePointSchema>;
export type TimelineType = z.infer<typeof TimelineSchema>;

export const timeline = [
  {
    year: 2025,
    points: [
      "Building a new startup, this time it's going to be a big one",
      "Started writing blogs as a daily habit. Won the nobel prize for literature",
      "My brother went on to pursue a career in music, he's now a famous singer",
    ],
  },
  {
    year: 2024,
    points: [
      "Building a new startup, this time it's going to be a big one",
      "Started writing blogs as a daily habit. Won the nobel prize for literature",
      "My brother went on to pursue a career in music, he's now a famous singer",
    ],
  },
  {
    year: 2023,
    points: [
      "Building a new startup, this time it's going to be a big one",
      "Started writing blogs as a daily habit. Won the nobel prize for literature",
      "My brother went on to pursue a career in music, he's now a famous singer",
    ],
  },
  {
    year: 2022,
    points: [
      "Bought a new M2 chip macbook pro wow this is crazy!",
      "Broke the chip as soon as I got it, had to buy a new one",
      "Bought a new M2 chip macbook pro and started living on the streets.",
    ],
  },
  {
    year: 2021,
    points: [
      "Won the interstate merathon, died 4 times on the way.",
      "Built a side project to help the people of my country win the war against covid",
      "Started a podcast with my brother, we talk about the latest tech news",
    ],
  },
  {
    year: 2020,
    points: [
      "Mon professeur d'informatique me challenge, de crée un intranet pour les rendu numérique, défis relevé",
      "Le covid arrive et fait des ravages, néamoins je valide mon bac professionnel Système Numérique",
      "Après mon bac, je m'oriente sur une formation privée dans la programmation",
    ],
  },
  {
    year: 2019,
    points: [
      "Je découvre mes premières lignes de code, HTML et CSS, je m'en sers pour créer ma première page web",
      "Très vite je me rend compte que je peut crée ce que je veut a partir d'une simple idée et quelques lignes de code",
      "Si au début les exercices de dev lors de mes cours me convenais, j'en ai vite demander plus au point que les cours de l'école ne suffisent plus à mes attentes, je décide de me former en autodidacte",
      "Je commence mes premier side projects.",
    ],
  },
  {
    year: 2018,
    points: [
      "Je commence mes première études qui ce rapproche de l'informatique, j'arrive au lycée pour un bac professionnel Système Numérique et je tombe sous le charme de l'informatique",
      "Très rapidement je confirme mon admiration pour l'informatique, plus que tout j'en fait ma passion",
      "Dès ma première année, sans même encore avoir découvert le code, je veut en faire mon métier",
    ],
  },
] satisfies TimelineType;
