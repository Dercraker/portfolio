import { Layout, LayoutContent } from "@components/layout/layout";
import type { PageParams } from "@type/next";
import { BentoSection } from "./_component/bentoSection";
import { CTASection } from "./_component/ctaSection";
import { FAQSection } from "./_component/faqSection";
import { FeatureSection } from "./_component/featureSection";
import { Hero } from "./_component/hero";
import { LandingFooter } from "./_component/landingFooter";
import { PricingSection } from "./_component/pricingSection";
import { TestimonialSection } from "./_component/testimonialSection";

const RoutePage = (props: PageParams) => {
  return (
    <>
      <Hero />
      <Layout size="lg">
        <LayoutContent>
          <FeatureSection />
          <CTASection />
          <BentoSection />
          <PricingSection />
          <TestimonialSection />
          <FAQSection />
        </LayoutContent>
      </Layout>
      <LandingFooter />
    </>
  );
};

export default RoutePage;
