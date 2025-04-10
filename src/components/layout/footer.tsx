import { HoverGithubIcon } from "@components/animatedIcon/hoverGithub.icon";
import { HoverLinkedinIcon } from "@components/animatedIcon/hoverLinkedin.icon";
import { Logo } from "@components/logo/logo";
import { LINKS } from "@feat/navigation/Links";
import type {
  GeneratedNavigationLinks,
  NavigationLinks,
} from "@feat/navigation/navigation.type";
import { cn } from "@lib/utils";
import { LinkPreview } from "@ui/link-preview";
import { GLOBAL_CONFIG } from "globalConfig";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  const FooterLinks = [
    LINKS.About,
    LINKS.Projects,
    LINKS.Contributions,
    LINKS.Events,
  ] satisfies NavigationLinks;

  const GetFooterLinks = (): GeneratedNavigationLinks =>
    FooterLinks.map((l) => ({ ...l, href: l.href({}) }));

  return (
    <div className="relative mt-16 w-full overflow-hidden border-t border-white/[0.1] bg-neutral-950 px-8 py-20">
      <div className="mx-auto max-w-7xl items-start justify-between text-sm text-neutral-500 md:px-8">
        <div className="relative flex w-full flex-col items-center justify-center">
          <div className="mr-0 mb-4 md:mr-4 md:flex">
            <Logo />
          </div>

          <ul className="hover:text-text-neutral-800 flex list-none flex-col gap-4 text-neutral-300 transition-colors sm:flex-row">
            {GetFooterLinks().map((page, idx) => (
              <li key={`pages${idx}`} className="list-none">
                <Link
                  className="hover:text-text-neutral-800 transition-colors"
                  href={page.href}
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>

          <GridLineHorizontal className="mx-auto mt-8 max-w-7xl" />
        </div>
        <div className="mt-8 flex w-full flex-col items-center justify-between sm:flex-row">
          <p className="mb-8 text-neutral-400 sm:mb-0">
            &copy; {new Date().getFullYear()} {GLOBAL_CONFIG.company.name}
          </p>
          <div className="flex gap-4">
            <LinkPreview url={GLOBAL_CONFIG.social.linkedin}>
              <HoverLinkedinIcon size={48} loop />
            </LinkPreview>
            <LinkPreview url={GLOBAL_CONFIG.social.github}>
              <HoverGithubIcon size={48} loop />
            </LinkPreview>
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset ?? "200px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};
