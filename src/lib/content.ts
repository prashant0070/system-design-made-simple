import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { LESSONS, type LessonMeta } from "./curriculum";

export type LessonContent = LessonMeta & {
  body: string;
};

const SECTION_DIR: Record<string, string> = {
  foundations: "foundations",
  "building-blocks": "building-blocks",
  "design-problems": "design-problems",
};

export function getLessonContent(slug: string): LessonContent | null {
  const meta = LESSONS.find((l) => l.slug === slug);
  if (!meta) return null;

  const filePath = path.join(
    process.cwd(),
    "content",
    SECTION_DIR[meta.section],
    `${slug}.md`,
  );

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);
  return { ...meta, body: content };
}

export function getAllLessonContents(): LessonContent[] {
  return LESSONS.map((l) => getLessonContent(l.slug)).filter(
    (l): l is LessonContent => Boolean(l),
  );
}
