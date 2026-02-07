export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming",
    skills: ["Python", "C++", "C", "JavaScript", "TypeScript", "Bash/Shell", "HTML", "CSS"],
  },
  {
    id: "ai-cv",
    name: "AI & Computer Vision",
    skills: ["OpenCV", "MediaPipe", "NumPy", "Image Processing"],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    skills: ["Kali Linux", "OSINT", "Network Security", "Google Dorking", "Social Engineering"],
  },
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Vite",
      "Responsive Design",
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    id: "devops",
    name: "DevOps & Tools",
    skills: [
      "Linux",
      "Git",
      "GitHub",
      "Docker",
      "Networking",
    ],
  },
  {
    id: "iot",
    name: "IoT & Hardware",
    skills: ["Arduino", "Raspberry Pi", "Wokwi", "ESP32"],
  },
];

export const allSkills = skillCategories.flatMap((cat) => cat.skills);