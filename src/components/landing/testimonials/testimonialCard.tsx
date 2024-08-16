import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useGenerateAvatar } from "@/hooks/useGenerateAvatar";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  name: string;
  username: string;
  body: string;
};

export const TestimonialCard = ({
  name,
  username,
  body,
}: TestimonialCardProps) => {
  const avatarData = useGenerateAvatar(name);

  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Avatar>
          <AvatarImage alt={`${name}'s picture`} src={avatarData} />
        </Avatar>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 line-clamp-4 text-sm">{body}</blockquote>
    </figure>
  );
};
