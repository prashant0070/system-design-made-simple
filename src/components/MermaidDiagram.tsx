"use client";

import { useEffect, useId, useState } from "react";

type Props = {
  chart: string;
};

export function MermaidDiagram({ chart }: Props) {
  const id = useId().replace(/:/g, "");
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          securityLevel: "loose",
          themeVariables: {
            primaryColor: "#d7efe8",
            primaryTextColor: "#10233a",
            primaryBorderColor: "#1f6f6a",
            lineColor: "#35506b",
            secondaryColor: "#f3ebe0",
            tertiaryColor: "#e8f2f8",
            background: "#fffaf3",
            fontFamily: "var(--font-body), sans-serif",
          },
        });
        const { svg: rendered } = await mermaid.render(`mmd-${id}`, chart.trim());
        if (!cancelled) {
          setSvg(rendered);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Could not render diagram");
        }
      }
    }

    void render();
    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  if (error) {
    return (
      <pre className="overflow-x-auto rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
        {chart}
      </pre>
    );
  }

  if (!svg) {
    return (
      <div className="flex min-h-40 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--panel)] text-sm text-[var(--muted)]">
        Drawing diagram…
      </div>
    );
  }

  return (
    <div
      className="mermaid-frame overflow-x-auto rounded-lg border border-[var(--line)] bg-[var(--panel)] p-4"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
