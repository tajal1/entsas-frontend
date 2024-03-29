import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Head from "next/head";

const intrepid = localFont({
  src: "../public/fonts/Intrepid.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LOUIS VUITTON",
  description: "LOUIS VUITTON Official USA Website | LOUIS VUITTON ®",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <body className={intrepid.className}>
        <NavBar />
        {children}
        <div className="">
          <Footer />
        </div>
      </body>
    </html>
  );
}
