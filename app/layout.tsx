import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AdSense from "./components/AdSense";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infinix Blog",
  description: "Coolest blogs ever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <AdSense />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
