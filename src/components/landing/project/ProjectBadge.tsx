export type ProjectBadgeProps = {
  isRunning?: boolean;
};

export const ProjectBadge = ({ isRunning }: ProjectBadgeProps) => {
  if (isRunning)
    return (
      <div className="flex w-fit items-center gap-1 rounded-xl border-2 border-primary/60 bg-primary/20 px-4 font-semibold text-primary">
        <div className="size-2 rounded-full bg-primary"></div>
        Online
      </div>
    );
  else
    return (
      <div className="flex w-fit items-center gap-1 rounded-xl border-2 border-red-500 bg-red-200/20 px-4 font-semibold text-red-500">
        <div className="size-2 rounded-full bg-red-500"></div>
        Offline
      </div>
    );
};
