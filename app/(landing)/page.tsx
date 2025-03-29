import { Footer } from "@components/layout/footer";
import { Layout, LayoutContent } from "@components/layout/layout";
import type { PageParams } from "@type/next";
import { Experience } from "./_component/experience";
import { Hero } from "./_component/hero";
import { Tools } from "./_component/tools";

const RoutePage = (props: PageParams) => {
  return (
    <>
      <Hero />
      <Layout size="lg">
        <LayoutContent>
          <Experience />
          <Tools />
        </LayoutContent>
      </Layout>
      <Footer />
    </>
  );
};

export default RoutePage;
