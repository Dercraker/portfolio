import moment from "moment";

type DateBadgeProps = {
  date?: moment.Moment;
};

export const DateBadge = ({ date }: DateBadgeProps) => {
  if (!date)
    return (
      <div className="flex w-fit items-center gap-1 rounded-xl border border-border/60 px-4 text-muted/60">
        Coming Soon...
      </div>
    );
  else
    return (
      <div className="flex w-fit items-center gap-1 rounded-xl border border-border px-4 text-muted">
        {date.format("YYYY/MM")}
      </div>
    );
};
