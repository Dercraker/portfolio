import { hardwares } from "constant/hardware";
import { getTranslations } from "next-intl/server";

export const Hardware = async () => {
  const t = await getTranslations("Hardware");
  return (
    <div>
      <h2 className="mb-2 font-bold text-zinc-50">{t("Title")}</h2>
      {hardwares.map((hardware, idx) => (
        <div key={`hardwares-${idx}`} className="my-8">
          <h4 className="text-base font-bold text-zinc-100">{hardware.name}</h4>
          <p className="text-sm leading-loose text-zinc-400">
            {hardware.description}
          </p>
        </div>
      ))}
    </div>
  );
};
