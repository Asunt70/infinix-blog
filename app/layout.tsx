import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
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
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7484381705146440"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
