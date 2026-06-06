import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stutterheim International School | Excellence in Education",
  description:
    "Stutterheim International School offers quality education with over 20 subjects, qualified teachers, and boarding facilities in the Eastern Cape.",
  openGraph: {
    title: "Stutterheim International School | Excellence in Education",
    description:
      "Quality education with 20+ subjects, qualified teachers, and boarding facilities in Stutterheim, Eastern Cape.",
    url: "https://www.stutterheimschool.co.za",
    siteName: "Stutterheim International School",
    locale: "en_ZA",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: { url: "/favicon-180.png", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F8FA] text-[#1F1F1F] font-[var(--font-geist-sans)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
