import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Typography } from "../../components/ui/typography";

export const Hero = () => {
  return (
    <main className="relative m-auto flex min-h-[700px] w-full max-w-7xl items-center gap-4 px-8 max-lg:flex-col">
      <div className="relative flex flex-1 flex-col items-start gap-4 lg:gap-6 xl:gap-8">
        <Typography variant="h1" className="select-all text-primary">
          Antoine Capitain
          <Typography variant="code" className="ml-2 select-none italic">
            alias - Dercraker
          </Typography>
        </Typography>
        <Typography
          variant="muted"
          className="-mt-6 italic text-muted-foreground"
        >
          Développeur fullstack
        </Typography>
        <Typography>
          Je crée des platforms web dédiée a vos besoin. Afin de vous satisfaire
          et permettre a vos activités d'évoluée
        </Typography>
      </div>
      <div className="flex flex-1 justify-end">
        <Avatar className="size-48">
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
      </div>
    </main>
  );
};
