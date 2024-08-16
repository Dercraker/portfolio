"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconMail,
} from "@tabler/icons-react";

export const SocialDock = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="size-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="size-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/antoine-capitain-055519182/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="size-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Dercraker",
    },
    {
      title: "Email",
      icon: (
        <IconMail className="size-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:contact@dercraker.fr",
    },
  ];
  return <FloatingDock items={links} />;
};
