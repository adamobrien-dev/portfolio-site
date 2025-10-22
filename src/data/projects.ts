// src/data/projects.ts

export interface Project {
  key: string;
  title: string;
  blurb: string;
  badge: string;
  codeLink?: string;
  demoLink?: string;
}

export const projects: Project[] = [
  { 
    key: "project1", 
    title: "AI Insight API", 
    blurb: "Comprehensive FastAPI-powered AI analysis platform with text, image, and batch processing capabilities. Features secure file uploads, API key authentication, and interactive documentation.", 
    badge: "AI/DevTools",
    codeLink: "https://github.com/adamobrien-dev/ai-insight-api",
    demoLink: "https://ai-insight-api.adamobrien.dev/docs"
  },
  { key: "project2", title: "Project 2", blurb: "Placeholder project description", badge: "Consumer" },
  { key: "project3", title: "Project 3", blurb: "Placeholder project description", badge: "Social/Audio" },
  { key: "project4", title: "Project 4", blurb: "Placeholder project description", badge: "Trading" },
  { key: "project5", title: "Project 5", blurb: "Placeholder project description", badge: "FX/CFD" },
  { key: "project6", title: "Project 6", blurb: "Placeholder project description", badge: "DevTools" },
];

