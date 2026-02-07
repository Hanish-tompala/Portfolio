import { personalInfo } from "./personal";

export const siteConfig = {
  name: personalInfo.name,
  title: personalInfo.title ? `${personalInfo.name} | ${personalInfo.title}` : personalInfo.name,
  description: `Portfolio of ${personalInfo.name}${personalInfo.title ? ` - ${personalInfo.title}` : ""} specializing in React, Next.js, Node.js, Python, Docker, Cloud technologies. Based in ${personalInfo.location}.`,
  url: personalInfo.website || "http://localhost:3000",
  ogImage: `${personalInfo.website}/thumbnail.png`,
  links: {
    github: "https://github.com/Hanish-Tompala",
    linkedin: "https://www.linkedin.com/in/hanishtompala/",
  },
  creator: personalInfo.name,
  keywords: [
    // Primary keywords
    "Full Stack Developer",
    "DevSecOps Engineer",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    // Technologies
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Python",
    "Docker",
    "AWS",
    "Azure",
    // Location-based
    "Developer in Vishakhapatnam",
    "Developer in India",
    "Indian Software Engineer",
    // Personal brand
    personalInfo.name,
    "Hanish",
    "Hanish tompala Portfolio",
  ],
  authors: [
    {
      name: personalInfo.name,
      url: personalInfo.website,
    },
  ],
  locale: "en_US",
  type: "website" as const,
};

// Structured data for JSON-LD
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  url: personalInfo.website,
  email: personalInfo.email,
  jobTitle: personalInfo.title,
  description: personalInfo.bio,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vishakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "India",
  },
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin,
  ],
  knowsAbout: [
    "Full Stack Development",
    "DevSecOps",
    "Cloud Computing",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Docker",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  author: {
    "@type": "Person",
    name: personalInfo.name,
  },
};

// Page-specific metadata
export const pageMetadata = {
  home: {
    title: siteConfig.title,
    description: siteConfig.description,
  },
  about: {
    title: `About | ${personalInfo.name}`,
    description: `Learn more about ${personalInfo.name} - ${personalInfo.title}. ${personalInfo.bio.substring(0, 150)}...`,
  },
  projects: {
    title: `Projects | ${personalInfo.name}`,
    description: `Explore the portfolio of projects by ${personalInfo.name}. Full stack applications, open source contributions, and more.`,
  },

};
