import { SiteConfig } from "@/site-config";
import Image from "next/image";

export const FloatingLegalFooter = () => {
  return (
    <div className="fixed bottom-2 right-2 flex items-center gap-2">
      <Image src={SiteConfig.appIcon} width={12} height={12} alt="app icon" />
    </div>
  );
};
