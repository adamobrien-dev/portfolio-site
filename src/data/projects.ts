// src/data/projects.ts

export interface Project {
  key: string;
  title: string;
  blurb: string;
  badge: string;
  codeLink?: string;
  demoLink?: string;
  siteLink?: string;
  status?: "in-progress" | "shipped";
}

export const openSourceProjects: Project[] = [
  {
    key: "ai-insight-api",
    title: "AI Insight API",
    blurb:
      "Comprehensive FastAPI-powered AI analysis platform with text, image, and batch processing capabilities. Features secure file uploads, API key authentication, and interactive documentation.",
    badge: "AI/DevTools",
    codeLink: "https://github.com/adamobrien-dev/ai-insight-api",
    demoLink: "https://ai-insight-api.adamobrien.dev/docs",
    status: "shipped",
  },
  {
    key: "fullstack-saas-dashboard",
    title: "Fullstack SaaS Dashboard",
    blurb:
      "In-progress FastAPI + React reference app with auth, PostgreSQL persistence, and charting. Focused on shipping a production-ready SaaS starter with API integrations and telemetry.",
    badge: "SaaS/Platform",
    codeLink: "https://github.com/adamobrien-dev/fullstack-saas-dashboard",
    status: "in-progress",
  },
];

export const commercialProjects: Project[] = [
  {
    key: "tradecam",
    title: "TradeCam",
    blurb:
      "AI-powered mobile companion that converts any stock chart photo into instant BUY/SELL/HOLD signals with confidence levels, price targets, and risk guidance.",
    badge: "Fintech/AI",
    siteLink: "https://tradecamai.vercel.app/",
    status: "shipped",
  },
  {
    key: "trollie",
    title: "Trollie",
    blurb:
      "Consumer savings platform that blends social shopping inspiration with automated deal tracking, referral links, and AI-powered list curation.",
    badge: "Consumer/SaaS",
    siteLink: "https://trollie.ca",
    status: "in-progress",
  },
];

