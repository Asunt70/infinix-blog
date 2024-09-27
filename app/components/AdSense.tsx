import Script from "next/script";

export default function AdSense() {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7484381705146440"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
