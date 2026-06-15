import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import BackgroundMusicPrompt from "@/components/ui/BackgroundMusicPrompt";
import "./globals.css";

const editorial = Fraunces({
  variable: "--font-editorial",
  subsets: ["latin"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shree Manickaraja | Portfolio",
  description:
    "Portfolio of Shree Manickaraja, a high school student passionate about Computer Science, AI/ML, and Full Stack Development.",
  keywords: [
    "Shree Manickaraja",
    "Portfolio",
    "Computer Science",
    "AI",
    "ML",
    "Web Development",
    "App Development",
    "Next.js",
    "React",
  ],
  openGraph: {
    title: "Shree Manickaraja | Portfolio",
    description:
      "Aspiring Computer Scientist & AI/ML Enthusiast showcasing projects and skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${editorial.variable} ${sans.variable} antialiased`}>
        <BackgroundMusicPrompt />
        {children}
      </body>
    </html>
  );
}
