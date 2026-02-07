export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  stars?: number;
  forks?: number;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "peoplegrid",
    title: "PeopleGrid",
    description: "A social media app prototype.",
    longDescription:
      "A prototype for a social media application focused on connecting people.",
    technologies: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/Hanish-tompala/peoplegrid",
    featured: true,
  },
  {
    id: "build-link",
    title: "Build Link",
    description: "An architecture design website built with TypeScript and HTML.",
    longDescription:
      "A platform for architectural design, showcasing projects and concepts.",
    technologies: ["TypeScript", "HTML"],
    githubUrl: "https://github.com/Hanish-tompala/Build-Link",
    featured: true,
  },
  {
    id: "onion-lens",
    title: "Onion Lens",
    description: "A mixed-stack project (JavaScript, Python, CSS, HTML).",
    longDescription:
      "A versatile project utilizing a mix of technologies including JavaScript, Python, CSS, and HTML.",
    technologies: ["JavaScript", "Python", "CSS", "HTML"],
    githubUrl: "https://github.com/Hanish-tompala/onion-lens",
    featured: true,
  },
  {
    id: "ghost-input",
    title: "Ghost Input",
    description:
      "A Chrome extension that bypasses website restrictions by force-enabling Copy, Paste, Right-Click, and Text Selection.",
    longDescription:
      "Overrides Event.prototype.preventDefault globally to restore user control over browser interactions.",
    technologies: ["Chrome Extension", "JavaScript"],
    githubUrl: "https://github.com/Hanish-tompala/Ghost-Input",
    featured: true,
  },
  {
    id: "luna-v12-iron-dome",
    title: "Luna V12 Iron Dome",
    description:
      "A high-performance Chrome extension that keeps tabs active by enforcing persistent page visibility and focus.",
    longDescription:
      "Uses the Chrome Debugger API to prevent background throttling and spoof the Visibility API, ensuring tabs remain active.",
    technologies: ["Chrome Extension", "Debugger API"],
    githubUrl: "https://github.com/Hanish-tompala/Luna-V12-Iron-Dome",
    featured: true,
  },
  {
    id: "biometric-gesture-apps",
    title: "Biometric Gesture Apps",
    description:
      "A Python collection of interactive apps using OpenCV and MediaPipe for real-time biometric tracking.",
    longDescription:
      "Features facial expression analysis and gesture-based automation with 2D/3D landmark normalization.",
    technologies: ["Python", "OpenCV", "MediaPipe", "AI"],
    githubUrl: "https://github.com/Hanish-tompala/Biometric-Gesture-Apps",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
