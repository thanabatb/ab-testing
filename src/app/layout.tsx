import type { Metadata } from "next";
import { Noto_Sans_Thai, Space_Grotesk } from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading"
});

const body = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Rapid Prototype Template",
  description: "Reusable responsive web app starter for fast prototyping"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
