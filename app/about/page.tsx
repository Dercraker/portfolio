import { LinkPreview } from "@ui/link-preview";
import { GLOBAL_CONFIG } from "globalConfig";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { Timeline } from "./_component/timeline";

const RoutePage = () => {
  return (
    <>
      <div className="relative mx-auto flex max-w-5xl flex-col justify-between space-y-10 px-8 md:mt-20 md:flex-row md:space-x-10 md:space-y-0">
        <div>
          <h1 className="max-w-3xl text-3xl font-bold text-zinc-50 md:text-5xl md:leading-tight">
            Hey ! I'm <span className="text-cyan-500">Antoine Capitain</span>{" "}
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
          <div className="mt-2 flex flex-row justify-start space-x-2 md:justify-center">
            <LinkPreview
              url={GLOBAL_CONFIG.social.linkedin}
              className="relative text-sm text-zinc-500"
            >
              <Linkedin className="relative z-10 inline-block p-2 hover:text-cyan-500" />
            </LinkPreview>
            <LinkPreview
              url={GLOBAL_CONFIG.social.github}
              className="relative text-sm text-zinc-500"
            >
              <Github className="relative z-10 inline-block p-2 hover:text-cyan-500" />
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
