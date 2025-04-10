import { Skeleton } from "@ui/skeleton";

export const LatestReposLoader = () => {
  return (
    <div className="relative mx-auto mb-20 max-w-5xl overflow-hidden px-8">
      <div className="mx-auto mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, idx) => (
          <Skeleton
            key={idx}
            className="flex h-28 w-full flex-col justify-between rounded-2xl border border-zinc-800 p-4"
          />
        ))}
      </div>
    </div>
  );
};
