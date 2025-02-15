import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicholas Byrne | Software Developer",
  description: "Portfolio showcasing my projects and experience as a software developer",
  keywords: ["Software Developer", "Full Stack", "React", "TypeScript", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
          {children}
          <Analytics />
      </body>
    </html>
  );
}
