import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Georgi Burnaski - CV",
  description: "Full Stack Developer, Scientist, Mathematician - Professional CV",
  keywords: "Full Stack Developer, Scientist, Mathematician, React, Next.js, TypeScript, Python, CV, Resume, Portfolio",
  authors: [{ name: "Georgi Burnaski" }],
  icons: {
    icon: [
      {
        url: "/GB_black_on_white.ico",
        media: "(prefers-color-scheme: light)",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        url: "/GB_white_on_black.ico",
        media: "(prefers-color-scheme: dark)",
        sizes: "32x32",
        type: "image/x-icon",
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
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
