import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const intrepid = localFont({
  src: "../public/fonts/Intrepid.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LOUIS VUITTON",
  description: "LOUIS VUITTON Official USA Website | LOUIS VUITTON ®",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={intrepid.className}>{children}</body>
    </html>
  );
}
