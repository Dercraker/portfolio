import { combineWithParentMetadata } from "@utils/metadata";
import { getTranslations } from "next-intl/server";
import { Projects } from "./_components/projects";

export const generateMetadata = combineWithParentMetadata({
  title: "My projects",
});

const RoutePage = async () => {
  const t = await getTranslations("Projects");
  return (
    <>
      <div className="relative mx-auto mt-10 max-w-5xl px-8 md:mt-20">
        <h1 className="max-w-3xl text-3xl font-bold text-zinc-50 md:text-5xl md:leading-tight">
          {t("Title1")}
          <span className="text-secondary">{t("Title2")}</span>
        </h1>
        <p className="mt-8 max-w-2xl text-sm tracking-wide text-zinc-400 md:text-base md:leading-loose">
          {t("Description")}
        </p>
      </div>
      <Projects />
    </>
  );
};

export default RoutePage;
