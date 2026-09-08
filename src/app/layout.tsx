import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "System Design Made Simple",
    template: "%s · System Design Made Simple",
  },
  description:
    "Beginner to advanced system design notes with clear explanations and diagrams. Learn scaling, building blocks, and classic design problems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full text-[var(--ink)] antialiased">
        <div className="flex min-h-screen flex-col lg:flex-row">
          <Sidebar />
          <main className="min-w-0 flex-1 overflow-x-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
