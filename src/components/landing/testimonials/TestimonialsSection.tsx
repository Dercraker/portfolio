import Marquee from "@/components/magicui/marquee";
import { TestimonialCard } from "./testimonialCard";

const reviews = [
  {
    name: "Mayme",
    username: "@Mayme",
    body: "Irure eiusmod eiusmod laborum sunt occaecat excepteur anim ex enim occaecat ipsum ad nisi aliqua.",
  },
  {
    name: "Beatrice",
    username: "@Beatrice",
    body: "Aliqua minim ut magna duis aliqua sit.",
  },
  {
    name: "Christina",
    username: "@Christina",
    body: "Non sint non cillum esse.",
  },
  {
    name: "Vincent",
    username: "@Vincent",
    body: "Dolor sunt voluptate qui culpa sunt excepteur labore excepteur incididunt eiusmod veniam laboris.",
  },
  {
    name: "Teresa",
    username: "@Teresa",
    body: "Ut ex occaecat mollit dolor Lorem ea.",
  },
  {
    name: "Wesley",
    username: "@Wesley",
    body: "Elit dolor irure dolor aliqua amet reprehenderit nulla sunt adipisicing sit duis.",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export const TestimonialsSection = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden ">
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
