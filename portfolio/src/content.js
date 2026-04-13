export const SITE = {
  name: "Divyanshu Agarwal",
  role: "Software Engineer @ Deutsche Bank",
  tagline: "Building automation systems & scalable backend solutions.",
  email: "divyanshu1150@gmail.com",
  githubUsername: "divyanshu1150",
  socials: {
    linkedin: "https://www.linkedin.com/in/divyanshu-agarwal/",
    github: "https://github.com/divyanshu1150",
    leetcode: "https://leetcode.com/u/divyanshu1150/",
    codeforces: "https://codeforces.com/profile/divyanshu1150",
    codechef: "https://www.codechef.com/users/divyanshu1150",
    youtubeChannel: "https://www.youtube.com/@SmartRasoiAI",
    youtubeVideos: "https://www.youtube.com/@SmartRasoiAI/videos",
  },
};

export const NAV_ITEMS = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "YouTube", id: "youtube" },
  { name: "Contact", id: "contact" },
];

export const PROJECTS = [
  {
    title: "FreePlay Arena",
    desc: "Browser-based gaming platform with multiple games, user profiles, and leaderboards — deployed at freeplayarena.com.",
    tech: ["React", "Node.js", "Games"],
    link: "https://freeplayarena.com",
  },
  {
    title: "Redis Rate Limiter Service",
    desc: "REST API service implementing the Token Bucket algorithm with Redis. Supports per-user throttling at 100 req/min with auto token refill, TTL-based cleanup, and HTTP 429 responses on limit breach.",
    tech: ["Java", "Spring Boot", "Redis", "Docker"],
    github: "https://github.com/divyanshu1150/rate-limiter-service",
  },
  {
    title: "PDF Unlocker",
    desc: "Simple tool to unlock PDFs with focus on monetization.",
    tech: ["React", "Backend"],
    link: "https://pdf.divyanshuagarwal.com",
    github: "https://github.com/divyanshu1150/pdf-unlocker",
  },
  {
    title: "Financial Tools",
    desc: "Collection of financial calculators and utilities.",
    tech: ["React", "Finance"],
    link: "https://finance.divyanshuagarwal.com",
    github: "https://github.com/divyanshu1150/tools",
  },
];

export const SKILLS = [
  "Java",
  "C++",
  "Python",
  "React",
  "Spring Boot",
  "Selenium",
  "System Design",
];

export const PROFILE_LINKS = [
  { name: "LinkedIn", url: SITE.socials.linkedin, icon: "linkedin" },
  { name: "GitHub", url: SITE.socials.github, icon: "github" },
  { name: "LeetCode", url: SITE.socials.leetcode, icon: "leetcode" },
  { name: "Codeforces", url: SITE.socials.codeforces, icon: "codeforces" },
  { name: "CodeChef", url: SITE.socials.codechef, icon: "codechef" },
];
