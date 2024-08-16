import { Typography } from "@/components/ui/typography";
import { Layout, LayoutContent } from "@/features/page/layout";
import { SiteConfig } from "@/site-config";
import { SocialDock } from "./SocialDock";

export const Footer = () => {
  return (
    <footer className="bg-card">
      <Layout className="py-24">
        <LayoutContent className="flex max-lg:justify-center">
          <div className="flex w-fit flex-col items-center gap-4 md:items-start">
            <SocialDock />
            <Typography variant="h3" className="select-all">
              {SiteConfig.title}
            </Typography>
            <Typography variant="muted" className="italic">
              © {new Date().getFullYear()} {SiteConfig.company.name} - All
              rights reserved.
            </Typography>
          </div>
        </LayoutContent>
      </Layout>
    </footer>
  );
};
