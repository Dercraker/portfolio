import { Hero } from "@/components/landing/Hero";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { ProjectSection } from "@/components/landing/ProjectSection";
import { ToolsSection } from "@/components/landing/ToolsSection";
import { StatsSection } from "@/components/landing/stats/StatsSection";
import { TestimonialsSection } from "@/components/landing/testimonials/TestimonialsSection";
import { SectionDivider } from "@/components/layout/SectionDivider";
import { Footer } from "@/features/layout/Footer";

export default function HomePage() {
  return (
    <div className="relative flex h-fit flex-col bg-background text-foreground">
      <LandingHeader />

      <Hero />

      <StatsSection />

      <ToolsSection />

      <ProjectSection />

      <TestimonialsSection />

      <SectionDivider />

      <Footer />
    </div>
  );
}
