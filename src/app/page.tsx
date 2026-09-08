import { LESSONS, SECTIONS, lessonsBySection } from "@/lib/curriculum";
import { LevelBadge, TopicLink } from "@/components/Sidebar";

export default function HomePage() {
  const first = LESSONS[0];

  return (
    <div className="px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
      <section className="animate-rise mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          Learning path
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-4xl leading-[1.08] tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
          System Design
          <span className="block text-[var(--accent)]">Made Simple</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">
          All the classic interview topics — rewritten in plain language, with
          diagrams that show how pieces fit. Start as a beginner, grow to advanced
          designs without drowning in jargon.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <TopicLink
            href={`/learn/${first.slug}`}
            className="rounded-md bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)] transition hover:bg-[var(--accent)]"
          >
            Start with foundations
          </TopicLink>
          <TopicLink
            href="/learn/url-shortener"
            className="rounded-md border border-[var(--line)] bg-[var(--panel)] px-5 py-2.5 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)]"
          >
            Jump to first design problem
          </TopicLink>
        </div>
      </section>

      <section className="animate-rise-delay mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
        {[
          { label: "Lessons", value: String(LESSONS.length) },
          { label: "Levels", value: "Beginner → Advanced" },
          { label: "Format", value: "Notes + Mermaid diagrams" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-[var(--line)] bg-[var(--panel)] px-4 py-5"
          >
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">{item.label}</p>
            <p className="mt-2 font-display text-2xl text-[var(--ink)]">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-16 max-w-4xl space-y-12">
        {SECTIONS.map((section) => {
          const lessons = lessonsBySection(section.id);
          return (
            <div key={section.id}>
              <div className="mb-4">
                <h2 className="font-display text-3xl tracking-tight">{section.title}</h2>
                <p className="mt-1 text-[var(--ink-soft)]">{section.blurb}</p>
              </div>
              <div className="grid gap-3">
                {lessons.map((lesson) => (
                  <TopicLink
                    key={lesson.slug}
                    href={`/learn/${lesson.slug}`}
                    className="card-link flex flex-col gap-2 rounded-lg border border-[var(--line)] bg-[var(--panel)] px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-medium text-[var(--ink)]">
                        <span className="mr-2 text-[var(--muted)]">{lesson.order}.</span>
                        {lesson.title}
                      </p>
                      <p className="mt-1 text-sm text-[var(--muted)]">{lesson.summary}</p>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
                      <LevelBadge level={lesson.level} />
                      <span>{lesson.minutes} min</span>
                    </div>
                  </TopicLink>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <footer className="mx-auto mt-20 max-w-4xl border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)]">
        Original simplified notes inspired by common system design interview topics.
        Written for learning — not a copy of any single book or notes repo.
      </footer>
    </div>
  );
}
