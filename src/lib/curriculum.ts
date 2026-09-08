export type Level = "beginner" | "intermediate" | "advanced";
export type Section = "foundations" | "building-blocks" | "design-problems";

export type LessonMeta = {
  slug: string;
  title: string;
  section: Section;
  level: Level;
  order: number;
  summary: string;
  minutes: number;
};

export const SECTIONS: {
  id: Section;
  title: string;
  blurb: string;
}[] = [
  {
    id: "foundations",
    title: "Foundations",
    blurb: "Start here. Learn how systems grow and how to think in interviews.",
  },
  {
    id: "building-blocks",
    title: "Building Blocks",
    blurb: "Reusable ideas you will use in almost every design.",
  },
  {
    id: "design-problems",
    title: "Design Problems",
    blurb: "Real systems, explained simply — from URL shortener to stock exchange.",
  },
];

export const LESSONS: LessonMeta[] = [
  {
    slug: "scale-from-zero",
    title: "Scale From Zero to Millions",
    section: "foundations",
    level: "beginner",
    order: 1,
    summary: "How a single server becomes a system that serves millions.",
    minutes: 12,
  },
  {
    slug: "back-of-envelope",
    title: "Back-of-the-Envelope Estimation",
    section: "foundations",
    level: "beginner",
    order: 2,
    summary: "Quick math for QPS, storage, and bandwidth before you design.",
    minutes: 10,
  },
  {
    slug: "interview-framework",
    title: "System Design Interview Framework",
    section: "foundations",
    level: "beginner",
    order: 3,
    summary: "A calm 4-step process you can reuse in every interview.",
    minutes: 10,
  },
  {
    slug: "rate-limiter",
    title: "Rate Limiter",
    section: "building-blocks",
    level: "intermediate",
    order: 4,
    summary: "Protect APIs by controlling how often clients can call you.",
    minutes: 14,
  },
  {
    slug: "consistent-hashing",
    title: "Consistent Hashing",
    section: "building-blocks",
    level: "intermediate",
    order: 5,
    summary: "Add or remove servers with minimal key reshuffling.",
    minutes: 12,
  },
  {
    slug: "key-value-store",
    title: "Key-Value Store",
    section: "building-blocks",
    level: "advanced",
    order: 6,
    summary: "Build a Dynamo-style store with replication and consistency choices.",
    minutes: 18,
  },
  {
    slug: "unique-id-generator",
    title: "Unique ID Generator",
    section: "building-blocks",
    level: "intermediate",
    order: 7,
    summary: "Create unique IDs across many machines without collisions.",
    minutes: 12,
  },
  {
    slug: "url-shortener",
    title: "URL Shortener",
    section: "design-problems",
    level: "beginner",
    order: 8,
    summary: "Shorten long links, redirect fast, and store billions of mappings.",
    minutes: 14,
  },
  {
    slug: "web-crawler",
    title: "Web Crawler",
    section: "design-problems",
    level: "intermediate",
    order: 9,
    summary: "Crawl the web politely and at scale.",
    minutes: 14,
  },
  {
    slug: "notification-system",
    title: "Notification System",
    section: "design-problems",
    level: "intermediate",
    order: 10,
    summary: "Send push, email, and SMS reliably without overwhelming providers.",
    minutes: 14,
  },
  {
    slug: "news-feed",
    title: "News Feed System",
    section: "design-problems",
    level: "intermediate",
    order: 11,
    summary: "Fan-out posts to friends and build a fast home feed.",
    minutes: 15,
  },
  {
    slug: "chat-system",
    title: "Chat System",
    section: "design-problems",
    level: "intermediate",
    order: 12,
    summary: "1:1 and group messaging with presence and delivery guarantees.",
    minutes: 16,
  },
  {
    slug: "search-autocomplete",
    title: "Search Autocomplete",
    section: "design-problems",
    level: "intermediate",
    order: 13,
    summary: "Suggest top queries as the user types.",
    minutes: 14,
  },
  {
    slug: "youtube",
    title: "YouTube-like Video Platform",
    section: "design-problems",
    level: "advanced",
    order: 14,
    summary: "Upload, transcode, store, and stream video at huge scale.",
    minutes: 18,
  },
  {
    slug: "google-drive",
    title: "Google Drive-like Storage",
    section: "design-problems",
    level: "advanced",
    order: 15,
    summary: "Sync files, share them, and upload large objects efficiently.",
    minutes: 16,
  },
  {
    slug: "proximity-service",
    title: "Proximity Service",
    section: "design-problems",
    level: "advanced",
    order: 16,
    summary: "Find nearby restaurants or places with geo indexing.",
    minutes: 16,
  },
  {
    slug: "nearby-friends",
    title: "Nearby Friends",
    section: "design-problems",
    level: "advanced",
    order: 17,
    summary: "Track live friend locations and notify when they are close.",
    minutes: 15,
  },
  {
    slug: "google-maps",
    title: "Google Maps-like Service",
    section: "design-problems",
    level: "advanced",
    order: 18,
    summary: "Serve map tiles, find routes, and estimate ETA.",
    minutes: 18,
  },
  {
    slug: "message-queue",
    title: "Distributed Message Queue",
    section: "design-problems",
    level: "advanced",
    order: 19,
    summary: "Reliable publish/subscribe with partitions and consumer groups.",
    minutes: 18,
  },
  {
    slug: "metrics-monitoring",
    title: "Metrics Monitoring & Alerting",
    section: "design-problems",
    level: "advanced",
    order: 20,
    summary: "Ingest metrics, store time series, and fire useful alerts.",
    minutes: 16,
  },
  {
    slug: "ad-click-aggregation",
    title: "Ad Click Event Aggregation",
    section: "design-problems",
    level: "advanced",
    order: 21,
    summary: "Count clicks in near real time without losing money accuracy.",
    minutes: 16,
  },
  {
    slug: "hotel-reservation",
    title: "Hotel Reservation System",
    section: "design-problems",
    level: "advanced",
    order: 22,
    summary: "Book rooms without double booking — concurrency done right.",
    minutes: 16,
  },
  {
    slug: "email-service",
    title: "Distributed Email Service",
    section: "design-problems",
    level: "advanced",
    order: 23,
    summary: "Send and store email with queues, retries, and spam checks.",
    minutes: 15,
  },
  {
    slug: "object-storage",
    title: "S3-like Object Storage",
    section: "design-problems",
    level: "advanced",
    order: 24,
    summary: "Store blobs durably with metadata, replication, and versioning.",
    minutes: 18,
  },
  {
    slug: "gaming-leaderboard",
    title: "Real-time Gaming Leaderboard",
    section: "design-problems",
    level: "intermediate",
    order: 25,
    summary: "Rank players live with sorted sets and sharding.",
    minutes: 14,
  },
  {
    slug: "payment-system",
    title: "Payment System",
    section: "design-problems",
    level: "advanced",
    order: 26,
    summary: "Move money safely with idempotency, ledgers, and retries.",
    minutes: 16,
  },
  {
    slug: "digital-wallet",
    title: "Digital Wallet",
    section: "design-problems",
    level: "advanced",
    order: 27,
    summary: "Balances, transfers, and consistency across wallet accounts.",
    minutes: 16,
  },
  {
    slug: "stock-exchange",
    title: "Stock Exchange",
    section: "design-problems",
    level: "advanced",
    order: 28,
    summary: "Match orders with ultra-low latency and fairness.",
    minutes: 18,
  },
];

export function getLesson(slug: string) {
  return LESSONS.find((l) => l.slug === slug);
}

export function getAdjacentLessons(slug: string) {
  const index = LESSONS.findIndex((l) => l.slug === slug);
  return {
    prev: index > 0 ? LESSONS[index - 1] : null,
    next: index >= 0 && index < LESSONS.length - 1 ? LESSONS[index + 1] : null,
  };
}

export function lessonsBySection(section: Section) {
  return LESSONS.filter((l) => l.section === section).sort(
    (a, b) => a.order - b.order,
  );
}
