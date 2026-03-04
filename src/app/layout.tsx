import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import Cursor from "@/components/ui/Cursor";
import Loader from "@/components/ui/Loader";

/* ─── Fonts ─────────────────────────────────────── */
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

/* ─── Metadata ───────────────────────────────────── */
export const metadata: Metadata = {
  title: "Kavali Pavan — Developer & Data Scientist",
  description:
    "Full-stack developer, data scientist, and ML engineer crafting elegant solutions at the intersection of software and intelligence.",
  keywords: [
    "web developer",
    "data scientist",
    "machine learning engineer",
    "portfolio",
    "Next.js",
    "React",
    "Python",
  ],
  authors: [{ name: "Kavali Pavan" }],
  openGraph: {
    title: "Kavali Pavan — Developer & Data Scientist",
    description: "Portfolio of a full-stack developer and ML engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="theme">
          <Loader />
          <Cursor />
          <ScrollProgress />
          <Navbar />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
