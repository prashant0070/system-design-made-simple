"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LESSONS, SECTIONS, type Level } from "@/lib/curriculum";
import clsx from "clsx";

const levelTone: Record<Level, string> = {
  beginner: "bg-emerald-100 text-emerald-900",
  intermediate: "bg-amber-100 text-amber-950",
  advanced: "bg-sky-100 text-sky-950",
};

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const nav = (
    <nav className="space-y-8 text-sm">
      <div>
        <Link href="/" className="font-display text-xl tracking-tight text-[var(--ink)]" onClick={() => setOpen(false)}>
          System Design
          <span className="block text-sm font-sans font-normal text-[var(--muted)]">Made Simple</span>
        </Link>
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
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={clsx(
                        "block rounded-md px-2 py-1.5 leading-snug transition",
                        active
                          ? "bg-[var(--accent-soft)] text-[var(--ink)]"
                          : "text-[var(--ink-soft)] hover:bg-[var(--panel)]",
                      )}
                    >
                      <span className="mr-2 inline-block w-5 text-[var(--muted)]">{lesson.order}.</span>
                      {lesson.title}
                    </Link>
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
    <>
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-[var(--line)] bg-[var(--bg)]/95 px-4 py-3 backdrop-blur lg:hidden">
        <Link href="/" className="font-display text-lg text-[var(--ink)]">
          System Design Made Simple
        </Link>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-md border border-[var(--line)] p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-[var(--bg)] p-6 lg:hidden">{nav}</div>
      )}

      <aside className="hidden w-72 shrink-0 border-r border-[var(--line)] bg-[var(--sidebar)] lg:block">
        <div className="sticky top-0 max-h-screen overflow-y-auto p-6">{nav}</div>
      </aside>
    </>
  );
}

export function LevelBadge({ level }: { level: Level }) {
  return (
    <span className={clsx("rounded px-2 py-0.5 text-xs font-medium capitalize", levelTone[level])}>
      {level}
    </span>
  );
}
