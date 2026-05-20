import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CartDrawer from "@/components/cart/cart-drawer";

export const metadata: Metadata = {
  title: "Reestore",
  description: "Modern wellness & nutrition platform",

  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body id="top" className="bg-[#f7fffd] text-[#232323] overflow-x-hidden">

        <Navbar />

        {children}

        <Footer />

        <CartDrawer />
      </body>
    </html>
  );
}