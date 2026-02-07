export interface Social {
  id: string;
  name: string;
  url: string;
  icon: string;
  username: string;
}

export const socials: Social[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/Hanish-Tompala",
    icon: "github",
    username: "Hanish-Tompala",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hanishtompala/",
    icon: "linkedin",
    username: "hanishtompala",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/cuzimhanish/",
    icon: "instagram",
    username: "cuzimhanish",
  },
  // {
  //   id: "orcid",
  //   name: "ORCID",
  //   url: "https://orcid.org/0009-0004-2994-1872",
  //   icon: "orcid",
  //   username: "0009-0004-2994-1872",
  // },
];

export const primarySocials = socials.filter(
  (s) => s.id === "github" || s.id === "linkedin"
);
