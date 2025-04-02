import { z } from "zod";

export const TimelinePointSchema = z.object({
  year: z.number(),
  points: z.array(z.string()),
});

export const TimelineSchema = z.array(TimelinePointSchema);

export type TimelinePointType = z.infer<typeof TimelinePointSchema>;
export type TimelineType = z.infer<typeof TimelineSchema>;

// export const timeline = [
//   {
//     year: 2025,
//     points: [
//       "Lancement de mon projet de fin d'étude : From-A2B, une application de planification de voyage.",
//       "Association avec un autre étudiant Next.js pour créer un Boilerplate Next.js performant et optimisé.",
//     ],
//   },
//   {
//     year: 2024,
//     points: [
//       "Grâce à mon alternance, je perfectionne ma maîtrise du C# et des concepts avancés de clean code.",
//       "Initiation à React par le biais de mon alternance, une révélation qui me pousse à approfondir et aller plus loin avec Next.js.",
//     ],
//   },
//   {
//     year: 2023,
//     points: [
//       "Premiers pas en front-end sur un projet : une tâche que je redoutais mais qui me mène à Vue.js.",
//       "Apprentissage autodidacte de Docker et approfondissement des concepts DevOps.",
//       "Début de mon alternance chez Elcia sur ma technologie de prédilection : le C#.",
//     ],
//   },
//   {
//     year: 2022,
//     points: [
//       "Exploration de nouveaux langages : Python, C, C++ et Java.",
//       "Multiplication de projets qui enrichissent ma compréhension des concepts avancés en programmation.",
//       "Découverte du C# et de la programmation orientée objet, qui deviendra un des piliers de ma stack technique.",
//     ],
//   },
//   {
//     year: 2021,
//     points: [
//       "Plongée dans le développement avec la découverte du Golang lors d'une piscine intensive.",
//       "Enchaînement d'exercices en Golang pour maîtriser l'algorithmie.",
//       "Transition vers JavaScript avec l'objectif de le maîtriser en profondeur.",
//     ],
//   },
//   {
//     year: 2020,
//     points: [
//       "Défi lancé par mon professeur d'informatique : créer un intranet pour la gestion des rendus numériques. Défi relevé !",
//       "Année marquée par la pandémie de Covid, mais validation de mon Bac Pro Systèmes Numériques.",
//       "Choix d'une formation privée en programmation pour poursuivre mon ambition.",
//     ],
//   },
//   {
//     year: 2019,
//     points: [
//       "Premiers pas dans le code avec HTML et CSS : création de ma première page web.",
//       "Prise de conscience du pouvoir du code : transformer une idée en projet concret.",
//       "Soif d'apprentissage grandissante : les cours ne suffisent plus, je me forme en autodidacte.",
//       "Lancement de mes premiers side projects.",
//     ],
//   },
//   {
//     year: 2018,
//     points: [
//       "Début de mes études en Bac Pro Systèmes Numériques : premier contact avec l'informatique et coup de foudre immédiat.",
//       "Passion grandissante pour l'informatique, qui devient rapidement une vocation.",
//       "Dès ma première année, avant même d'avoir écrit une ligne de code, je savais que ce serait mon métier.",
//     ],
//   },
// ] satisfies TimelineType;

export const timeline = [
  {
    year: 2025,
    points: [
      "Launch of my final year project: From-A2B, a travel planning application.",
      "Collaboration with another Next.js student to create a high-performance and optimized Next.js Boilerplate.",
    ],
  },
  {
    year: 2024,
    points: [
      "Thanks to my apprenticeship, I perfected my mastery of C# and advanced clean code concepts.",
      "Introduction to React through my apprenticeship, a revelation that pushed me to explore and go further with Next.js.",
    ],
  },
  {
    year: 2023,
    points: [
      "First steps in front-end development on a project: a task I initially dreaded but which led me to Vue.js.",
      "Self-taught learning of Docker and deepening my understanding of DevOps concepts.",
      "Start of my apprenticeship at Elcia, working on my favorite technology: C#.",
    ],
  },
  {
    year: 2022,
    points: [
      "Exploration of new languages: Python, C, C++, and Java.",
      "Multiple projects that enriched my understanding of advanced programming concepts.",
      "Discovery of C# and object-oriented programming, which would become a key pillar of my tech stack.",
    ],
  },
  {
    year: 2021,
    points: [
      "Immersion in development with the discovery of Golang during an intensive bootcamp.",
      "Series of Golang exercises to master algorithms.",
      "Transition to JavaScript with the goal of mastering it in depth.",
    ],
  },
  {
    year: 2020,
    points: [
      "Challenge set by my computer science teacher: create an intranet for managing digital submissions. Challenge accepted!",
      "Year marked by the Covid pandemic, but I successfully obtained my Bac Pro Systèmes Numériques.",
      "Decision to pursue a private training program in programming to follow my ambition.",
    ],
  },
  {
    year: 2019,
    points: [
      "First steps in coding with HTML and CSS: creation of my first web page.",
      "Realization of the power of coding: turning an idea into a concrete project.",
      "Growing thirst for knowledge: school courses were no longer enough, so I started learning independently.",
      "Launch of my first side projects.",
    ],
  },
  {
    year: 2018,
    points: [
      "Start of my studies in Bac Pro Systèmes Numériques: first encounter with IT and immediate fascination.",
      "Growing passion for IT, which quickly became a true vocation.",
      "From my first year, even before writing a single line of code, I knew this was my future career.",
    ],
  },
] satisfies TimelineType;
