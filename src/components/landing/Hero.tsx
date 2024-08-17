import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import moment from "moment";
import { Typography } from "../../components/ui/typography";
import { TypingAnimation } from "../ui/TypingAnimation";

export const Hero = () => {
  return (
    <main className="relative m-auto flex h-screen w-full max-w-7xl items-center gap-4 px-8 max-lg:mt-20 max-lg:flex-col">
      <div className="relative flex flex-1 flex-col items-start gap-4 lg:gap-6 xl:gap-8">
        <div className="flex items-center">
          <TypingAnimation
            text="Antoine Capitain"
            variant="h1"
            className="select-all text-primary "
            duration={100}
          />
          <TypingAnimation
            text="alias - Dercraker"
            variant="code"
            className="ml-2 select-none italic text-primary"
            duration={300}
          />
        </div>
        <Typography
          variant="muted"
          className="-mt-6 italic text-muted-foreground"
        >
          Développeur fullstack Next.js et .Net
        </Typography>
        <Typography className="leading-relaxed">
          Il y a {moment().diff(moment("2018-12-22"), "years")} ans, en quête de
          ma future vocation, je me suis plongé dans le monde du web et de la
          programmation. Très vite, l'idée de transformer des concepts en
          réalités numériques m'a captivé. À 18 ans, j'ai écrit mes premières
          lignes de code, et je savais déjà que ce n'était que le début d'une
          aventure passionnante
        </Typography>
      </div>
      <div className="flex flex-1 justify-end">
        <Avatar className="size-96">
          <AvatarFallback>AC</AvatarFallback>
          <AvatarImage src="/images/me.jpg" />
        </Avatar>
      </div>
    </main>
  );
};
