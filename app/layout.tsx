import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AdventureLand Bot Monitor",
  description: "High-performance UI for monitoring and interacting with AdventureLand MMORPG bots. Built with Next.js, React, and TypeScript.",
  keywords: ["AdventureLand", "MMORPG", "bot", "monitor", "gaming", "Next.js", "React"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
