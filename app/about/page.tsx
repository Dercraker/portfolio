import { HoverGithubIcon } from "@components/animatedIcon/hoverGithub.icon";
import { HoverLinkedinIcon } from "@components/animatedIcon/hoverLinkedin.icon";
import { LinkPreview } from "@ui/link-preview";
import { combineWithParentMetadata } from "@utils/metadata";
import { GLOBAL_CONFIG } from "globalConfig";
import Image from "next/image";
import { Timeline } from "./_component/timeline";

export const generateMetadata = combineWithParentMetadata({
  title: "About",
});

const RoutePage = () => {
  return (
    <>
      <div className="relative mx-auto flex max-w-5xl flex-col justify-between space-y-10 px-8 md:mt-20 md:flex-row md:space-y-0 md:space-x-10">
        <div>
          <h1 className="max-w-3xl text-3xl font-bold text-zinc-50 md:text-5xl md:leading-tight">
            Hey ! I'm <span className="text-secondary">Antoine Capitain</span>{" "}
            and I'm a full stack software developer.
          </h1>
          <p className="mt-8 max-w-2xl text-sm tracking-wide text-zinc-400 md:text-base md:leading-loose">
            Ever since I was a child, I've been obsessed with technology. When I
            wasn't disassembling joysticks or game consoles, I was learning to
            code. A few years later, I became a code ninja in my own right, with
            an insatiable thirst for creating applications and functional tools.
          </p>
        </div>

        <div className="order-first md:order-last">
          <Image
            src={`/images/photoPro.png`}
            width={200}
            height={200}
            alt="Avatar"
            className="rounded-2xl"
          />
          <div className="flex justify-center gap-2">
            <LinkPreview url={GLOBAL_CONFIG.social.linkedin}>
              <HoverLinkedinIcon size={32} loop />
            </LinkPreview>
            <LinkPreview url={GLOBAL_CONFIG.social.github}>
              <HoverGithubIcon size={32} loop />
            </LinkPreview>
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-10 max-w-5xl px-8">
        <p className="mt-8 text-sm tracking-wide text-zinc-400 md:text-base md:leading-loose">
          When I'm not busy slaying bugs and writing code. I'm usually busy
          indulging in my favorite hobbies: gaming, new technologies and
          motorbike.
        </p>
        <p className="mt-8 text-sm tracking-wide text-zinc-400 md:text-base md:leading-loose">
          Here's a timeline of what I've been upto
        </p>
        <Timeline />
      </div>
    </>
  );
};

export default RoutePage;
