"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LESSONS, SECTIONS, type Level } from "@/lib/curriculum";
import clsx from "clsx";

const levelTone: Record<Level, string> = {
  beginner: "bg-emerald-100 text-emerald-900",
  intermediate: "bg-amber-100 text-amber-950",
  advanced: "bg-sky-100 text-sky-950",
};

function LessonAnchor({
  href,
  className,
  children,
  onNavigate,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  onNavigate?: () => void;
}) {
  // Full page navigation is more reliable than App Router soft-nav in
  // embedded / port-forwarded previews where RSC fetches can stall.
  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        onNavigate?.();
        // Allow modified clicks (new tab, etc.) to behave normally.
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }
        event.preventDefault();
        window.location.assign(href);
      }}
    >
      {children}
    </a>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const nav = (
    <nav className="space-y-8 text-sm">
      <div>
        <LessonAnchor
          href="/"
          className="font-display text-xl tracking-tight text-[var(--ink)]"
          onNavigate={() => setOpen(false)}
        >
          System Design
          <span className="block text-sm font-sans font-normal text-[var(--muted)]">
            Made Simple
          </span>
        </LessonAnchor>
      </div>

      {SECTIONS.map((section) => {
        const lessons = LESSONS.filter((l) => l.section === section.id);
        return (
          <div key={section.id}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              {section.title}
            </p>
            <ul className="space-y-1">
              {lessons.map((lesson) => {
                const href = `/learn/${lesson.slug}`;
                const active = pathname === href;
                return (
                  <li key={lesson.slug}>
                    <LessonAnchor
                      href={href}
                      onNavigate={() => setOpen(false)}
                      className={clsx(
                        "block rounded-md px-2 py-1.5 leading-snug transition",
                        active
                          ? "bg-[var(--accent-soft)] text-[var(--ink)]"
                          : "text-[var(--ink-soft)] hover:bg-[var(--panel)]",
                      )}
                    >
                      <span className="mr-2 inline-block w-5 text-[var(--muted)]">
                        {lesson.order}.
                      </span>
                      {lesson.title}
                    </LessonAnchor>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );

  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-72 lg:shrink-0 lg:flex-col lg:border-r lg:border-[var(--line)] lg:bg-[var(--sidebar)]">
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-[var(--line)] bg-[var(--bg)]/95 px-4 py-3 backdrop-blur lg:hidden">
        <Link href="/" className="font-display text-lg text-[var(--ink)]">
          System Design Made Simple
        </Link>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-md border border-[var(--line)] p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 bg-[var(--bg)] lg:hidden">
          <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3">
            <p className="font-display text-lg text-[var(--ink)]">Topics</p>
            <button
              type="button"
              aria-label="Close menu"
              className="rounded-md border border-[var(--line)] p-2"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
          <div className="h-[calc(100vh-57px)] overflow-y-auto p-6">{nav}</div>
        </div>
      ) : null}

      <div className="hidden min-h-0 flex-1 overflow-y-auto p-6 lg:block">{nav}</div>
    </div>
  );
}

export function LevelBadge({ level }: { level: Level }) {
  return (
    <span
      className={clsx(
        "rounded px-2 py-0.5 text-xs font-medium capitalize",
        levelTone[level],
      )}
    >
      {level}
    </span>
  );
}

export function TopicLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <LessonAnchor href={href} className={className}>
      {children}
    </LessonAnchor>
  );
}
