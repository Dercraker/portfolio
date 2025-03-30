import { LINKS } from "@feat/navigation/Links";
import type {
  GeneratedNavigationLinks,
  NavigationLinks,
} from "@feat/navigation/navigation.type";

export const NAVBAR_LINKS = [
  LINKS.About,
  LINKS.Projects,
  LINKS.Contributions,
  LINKS.Events,
] satisfies NavigationLinks;

export const GetNavbarLinks = (): GeneratedNavigationLinks =>
  NAVBAR_LINKS.map((l) => ({ ...l, href: l.href({}) }));
