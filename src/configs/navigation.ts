export interface NavItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

import { personalInfo } from "./personal";

export const navItems: NavItem[] = [
  {
    id: "intro",
    label: "Home",
    href: "/",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
  },

  {
    id: "resume",
    label: "Resume",
    href: personalInfo.resumeUrl,
    external: true,
  },
];
