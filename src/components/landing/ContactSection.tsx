import { SectionLayout } from "../layout/SectionLayout";
import { Typography } from "../ui/typography";

export const ContactSection = () => {
  return (
    <>
      <SectionLayout variant="card">
        <Typography className="leading-relaxed">
          Que ce soit pour construire des applications web complexes ou résoudre
          des problèmes techniques exigeants, je suis prêt à relever de nouveaux
          défis et à collaborer avec des équipes passionnées. Mon parcours ne
          fait que commencer, et je suis impatient de découvrir ce que l'avenir
          me réserve.
        </Typography>
      </SectionLayout>
      <SectionLayout className="bg-green-400/20">contact me</SectionLayout>
    </>
  );
};
