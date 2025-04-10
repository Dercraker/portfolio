import type { GenericLinkSchema, NavigationLink } from "./navigation.type";

const createLink = (
  href: string,
  label: string,
  options: Partial<
    Omit<NavigationLink, "href" | "label" | "generateLink">
  > = {},
): NavigationLink => ({
  href: () => href,
  label,
  ...options,
});

// Définition des liens
export const LINKS = {
  Landing: createLink("/", "Landing"),
  About: createLink("/about", "About"),
  Projects: createLink("/projects", "Projects"),
  Contributions: createLink("/contributions", "Contributions"),
  Events: createLink("/events", "Events"),

  Maintenance: createLink("/maintenance", "Maintenance", {
    hidden: true,
    disabled: true,
  }),
} satisfies GenericLinkSchema;
