import type { Metadata } from "next";
import "./globals.css";
import { Alice, Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const alice = Alice({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Heart of the Forest Dramatic Society",
  description:
    "Welcome to our community panto charity group. Book tickets and get involved!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        alice.variable,
        plusJakartaSans.variable,
      )}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
