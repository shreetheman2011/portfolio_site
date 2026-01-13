import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
