import moment from "moment";

type DateBadgeProps = {
  date?: moment.Moment;
};

export const DateBadge = ({ date }: DateBadgeProps) => {
  return (
    <div className="flex w-fit items-center gap-1 rounded-xl border-2 border-border/60 px-4 text-base/6 text-neutral-200/70">
      {date ? date.format("YYYY/MM") : "Coming Soon..."}
    </div>
  );
};
