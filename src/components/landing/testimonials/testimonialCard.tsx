import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useGenerateAvatar } from "@/hooks/useGenerateAvatar";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  username: string;
  message: string;
};

export const TestimonialCard = ({
  username,
  message,
}: TestimonialCardProps) => {
  const avatarData = useGenerateAvatar(username);

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
          <AvatarImage alt={`${username}'s picture`} src={avatarData} />
        </Avatar>
        <figcaption className="text-sm font-medium dark:text-white">
          {username}
        </figcaption>
      </div>
      <blockquote className="mt-2 line-clamp-4 text-sm">{message}</blockquote>
    </figure>
  );
};
