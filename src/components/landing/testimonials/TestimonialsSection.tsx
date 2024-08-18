import Marquee from "@/components/magicui/marquee";
import { prisma } from "@/lib/prisma";
import { TestimonialCard } from "./testimonialCard";

export const TestimonialsSection = async () => {
  const testimonials = await prisma.feedback.findManyRandom(50, {
    select: {
      id: true,
      message: true,
      username: true,
    },
  });

  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);
  return (
    <div
      className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden"
      id="Testimonials"
    >
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <TestimonialCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <TestimonialCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};
