import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/Markdown";
import { LevelBadge } from "@/components/Sidebar";
import { getAdjacentLessons, LESSONS } from "@/lib/curriculum";
import { getLessonContent } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return LESSONS.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const lesson = getLessonContent(slug);
  if (!lesson) return {};
  return {
    title: lesson.title,
    description: lesson.summary,
  };
}

export default async function LessonPage({ params }: Props) {
  const { slug } = await params;
  const lesson = getLessonContent(slug);
  if (!lesson) notFound();

  const { prev, next } = getAdjacentLessons(slug);

  return (
    <article className="px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
        <LevelBadge level={lesson.level} />
        <span>Lesson {lesson.order} of {LESSONS.length}</span>
        <span>·</span>
        <span>{lesson.minutes} min read</span>
      </div>

      <p className="mb-8 max-w-2xl text-lg text-[var(--ink-soft)]">{lesson.summary}</p>

      <div className="prose-lesson">
        <Markdown content={lesson.body} />
      </div>

      <nav className="mt-14 grid gap-3 border-t border-[var(--line)] pt-6 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/learn/${prev.slug}`}
            className="rounded-lg border border-[var(--line)] bg-[var(--panel)] px-4 py-3 transition hover:border-[var(--accent)]"
          >
            <span className="block text-xs uppercase tracking-[0.12em] text-[var(--muted)]">Previous</span>
            <span className="font-medium text-[var(--ink)]">{prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/learn/${next.slug}`}
            className="rounded-lg border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-right transition hover:border-[var(--accent)]"
          >
            <span className="block text-xs uppercase tracking-[0.12em] text-[var(--muted)]">Next</span>
            <span className="font-medium text-[var(--ink)]">{next.title}</span>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
