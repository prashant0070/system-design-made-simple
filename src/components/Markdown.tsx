"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { MermaidDiagram } from "./MermaidDiagram";

type Props = {
  content: string;
};

export function Markdown({ content }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSlug]}
      components={{
        code({ className, children, ...props }) {
          const text = String(children).replace(/\n$/, "");
          const isMermaid = className?.includes("language-mermaid");
          const isBlock = Boolean(className) || text.includes("\n");

          if (isMermaid) {
            return <MermaidDiagram chart={text} />;
          }

          if (!isBlock) {
            return (
              <code className="rounded bg-[var(--code-bg)] px-1.5 py-0.5 text-[0.9em]" {...props}>
                {children}
              </code>
            );
          }

          return (
            <pre className="overflow-x-auto rounded-lg border border-[var(--line)] bg-[var(--code-bg)] p-4 text-sm">
              <code className={className} {...props}>
                {children}
              </code>
            </pre>
          );
        },
        table({ children }) {
          return (
            <div className="my-6 overflow-x-auto rounded-lg border border-[var(--line)]">
              <table className="w-full border-collapse text-left text-sm">{children}</table>
            </div>
          );
        },
        th({ children }) {
          return (
            <th className="border-b border-[var(--line)] bg-[var(--panel)] px-3 py-2 font-semibold">
              {children}
            </th>
          );
        },
        td({ children }) {
          return <td className="border-b border-[var(--line)] px-3 py-2 align-top">{children}</td>;
        },
        a({ href, children }) {
          return (
            <a href={href} className="font-medium text-[var(--accent)] underline-offset-2 hover:underline">
              {children}
            </a>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
