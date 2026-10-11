export const SITE = {
  name: "Divyanshu Agarwal",
  role: "Senior Software Engineer @ Nomura",
  tagline: "Building production-grade backend systems, SaaS products, and automation tools.",
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
    title: "IPO Khata",
    desc: "Full-stack SaaS for tracking IPO applications across family accounts. Auto-checks allotment at 5 registrars, sends email and push notifications for results, closing-day digest, and sell reminders. Public IPO pages with live GMP and subscription data.",
    tech: ["Python", "FastAPI", "React", "Cloudflare Pages", "Postgres"],
    link: "https://ipokhata.com",
  },
  {
    title: "Jobs Halla",
    desc: "AI-powered job-seeker copilot. Ingests job openings worldwide, embeds and matches them against each candidate's resume profile using LLMs, then generates a tailored resume and cover letter on a strong match — delivered by email and in the dashboard.",
    tech: ["Next.js", "Node.js", "Redis", "Postgres", "BullMQ", "LLM"],
    link: "https://jobs.divyanshuagarwal.com",
  },
  {
    title: "CourtCall",
    desc: "Push-notification app for advocates at Madhya Pradesh High Court. Tracks court listings, hall numbers, and item positions from the live display board. Sends real-time alerts as hearings approach.",
    tech: ["Python", "FastAPI", "React Native", "Expo", "Postgres", "WebPush"],
    link: "https://courtcall.divyanshuagarwal.com",
  },
  {
    title: "Redis Rate Limiter Service",
    desc: "REST API service implementing the Token Bucket algorithm with Redis. Supports per-user throttling at 100 req/min with auto token refill, TTL-based cleanup, and HTTP 429 responses on limit breach.",
    tech: ["Java", "Spring Boot", "Redis", "Docker"],
    link: "https://ratelimiter.divyanshuagarwal.com",
    github: "https://github.com/divyanshu1150/rate-limiter-service",
  },
  {
    title: "Abuse Masker",
    desc: "Real-time content moderation service for live chat. Uses a Trie data structure for O(m) pattern matching — masks profane words while preserving word boundaries, preventing false positives like 'hello' being flagged for 'hell'.",
    tech: ["Java", "Spring Boot", "WebSocket", "Docker"],
    link: "https://chat.divyanshuagarwal.com",
    github: "https://github.com/divyanshu1150/abuse-masker",
  },
  {
    title: "AI Chatbot Widget",
    desc: "Floating chat widget embeddable on any website with one script tag. Answers customer FAQs from the business's own Markdown knowledge base, replies in English/Hindi/Hinglish, captures leads, and hands off to WhatsApp when it can't answer.",
    tech: ["Next.js", "Claude AI", "TypeScript", "SQLite"],
    link: "https://ai-chatbot-five-rho-41.vercel.app",
  },
  {
    title: "GST Invoice Generator",
    desc: "Single-user tool for creating GST-compliant invoices and quotations with line items, HSN/SAC codes, and live tax calculations. Generates PDFs with UPI QR codes, tracks payment status, and creates shareable public links.",
    tech: ["Next.js", "TypeScript", "PDF", "GST"],
    link: "https://invoice-generator-one-murex.vercel.app",
  },
  {
    title: "Appointment Booking System",
    desc: "Mobile-first booking app for salons, clinics, and consultants. Service catalog, time-slot management, booking history, admin panel, and reskin-ready — all niche content lives in one config file.",
    tech: ["Next.js", "TypeScript", "Turso", "libSQL"],
    link: "https://booking-system-swart.vercel.app",
  },
  {
    title: "Online Store",
    desc: "Config-driven e-commerce store for Indian home businesses. Product variants, persistent cart, Razorpay payments, UPI QR codes, Cash on Delivery, and an Order-via-WhatsApp fallback. All branding lives in one file.",
    tech: ["Next.js", "TypeScript", "Razorpay", "libSQL"],
    link: "https://online-store-chi-puce.vercel.app",
  },
  {
    title: "Wholesale Bookkeeping",
    desc: "Multi-user web bookkeeping system for Indian trading businesses. One transaction entry auto-updates party ledger, balances, and reports. Exports 23 report types as Excel, PDF, and CSV. Keyboard-friendly and screen-reader accessible.",
    tech: ["Next.js", "TypeScript", "Turso", "Excel/PDF"],
    link: "https://bookkeeping-web-smoky.vercel.app",
  },
  {
    title: "Small Business Website",
    desc: "Config-driven Next.js website for Indian local businesses — tiffin services, restaurants, and salons. All content lives in one file, reskinnable for any niche in minutes. Includes menu, UPI checkout, WhatsApp integration, and SEO.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://tiffin-website-lovat.vercel.app",
  },
  {
    title: "FreePlay Arena",
    desc: "Browser-based gaming platform with multiple games, user profiles, and leaderboards.",
    tech: ["React", "Next.js", "Games"],
    link: "https://freeplayarena.com",
  },
  {
    title: "PDF Unlocker",
    desc: "Simple tool to unlock PDFs.",
    tech: ["React"],
    link: "https://pdf.divyanshuagarwal.com",
    github: "https://github.com/divyanshu1150/pdf-unlocker",
  },
  {
    title: "Financial Tools",
    desc: "Collection of financial calculators and utilities.",
    tech: ["React"],
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
