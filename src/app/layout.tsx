import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reestore",
  description: "Modern wellness & nutrition platform",

  icons: {
    icon: [
      {
        url: "/favicon.svg?v=2",
        type: "image/svg+xml",
      },
    ],
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
        id="top"
        className={`${inter.className} bg-[#f7fffd] text-[#232323] overflow-x-hidden`}
      >

        {children}

      </body>
    </html>
  );
}