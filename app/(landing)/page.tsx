import { Footer } from "@components/layout/footer";
import { Layout, LayoutContent } from "@components/layout/layout";
import type { PageParams } from "@type/next";
import { Experience } from "./_component/experience";
import { Hero } from "./_component/hero";
import { LatestRepoSection } from "./_component/latestRepoSection";
import { Tools } from "./_component/tools";

const RoutePage = async (props: PageParams) => {
  return (
    <>
      <Hero />
      <Layout size="lg">
        <LayoutContent>
          <Experience />
          <Tools />
          <LatestRepoSection />
        </LayoutContent>
      </Layout>
      <Footer />
    </>
  );
};

export default RoutePage;
