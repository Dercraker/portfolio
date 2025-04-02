import { Projects } from "./_components/projects";

const RoutePage = () => {
  return (
    <>
      <div className="relative mx-auto mt-10 max-w-5xl px-8 md:mt-20">
        <h1 className="max-w-3xl text-3xl font-bold text-zinc-50 md:text-5xl md:leading-tight">
          I've been building a
          <span className="text-cyan-500"> lot of things</span>
        </h1>
        <p className="mt-8 max-w-2xl text-sm tracking-wide text-zinc-400 md:text-base md:leading-loose">
          Come and discover the fruits of my labor, from small experiments to
          complete web applications, each project illustrates my love for
          programming and creating solutions.
        </p>
      </div>
      <Projects />
    </>
  );
};

export default RoutePage;
