import { HoverGithubIcon } from "@components/animatedIcon/hoverGithub.icon";
import { HoverLinkedinIcon } from "@components/animatedIcon/hoverLinkedin.icon";
import { LinkPreview } from "@ui/link-preview";
import { combineWithParentMetadata } from "@utils/metadata";
import { GLOBAL_CONFIG } from "globalConfig";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Timeline } from "./_component/timeline";
export const generateMetadata = combineWithParentMetadata({
  title: "About",
});

const RoutePage = async () => {
  const t = await getTranslations("About");
  return (
    <>
      <div className="relative mx-auto flex max-w-5xl flex-col justify-between space-y-10 px-8 md:mt-20 md:flex-row md:space-y-0 md:space-x-10">
        <div>
          <h1 className="max-w-3xl text-3xl font-bold text-zinc-50 md:text-5xl md:leading-tight">
            {t("Title1")} <span className="text-secondary">{t("Title2")}</span>{" "}
            {t("Title3")}
          </h1>
          <p className="mt-8 max-w-2xl text-sm tracking-wide text-zinc-400 md:text-base md:leading-loose">
            {t("Description")}
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
          {t("WhenNotBusy")}
        </p>
        <p className="mt-8 text-sm tracking-wide text-zinc-400 md:text-base md:leading-loose">
          {t("Timeline")}
        </p>
        <Timeline />
      </div>
    </>
  );
};

export default RoutePage;
