import { Skeleton } from "@ui/skeleton";
import Link from "next/link";

export type LatestReposLoaderProps = {
  showMore?: boolean;
};

export const LatestReposLoader = ({ showMore }: LatestReposLoaderProps) => {
  return (
    <>
      <div className="relative mx-auto mb-20 max-w-5xl overflow-hidden px-8">
        <div className="mx-auto mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <Skeleton key={i} className="h-36 w-72 rounded-2xl" />
          ))}
        </div>
        {showMore && (
          <div>
            <div className="absolute bottom-0 z-[60] mx-auto flex h-56 w-full max-w-5xl items-center justify-center bg-zinc-900 transition duration-500 [mask-image:linear-gradient(to_bottom,transparent,white_10rem,white)]" />

            <div className="relative z-[70] flex justify-center ">
              <Link
                href="/contributions"
                className="rounded-lg border border-zinc-600 bg-zinc-900 px-8 py-2 text-zinc-200 transition duration-200 hover:border-zinc-700 hover:bg-zinc-800/[0.8]"
              >
                Show More
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
