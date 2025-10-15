// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // 경로 확인해서 맞게 수정

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SNAP STUDIO",
  description: "스냅 스튜디오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyClass = `${geistSans.variable} ${geistMono.variable} antialiased`;

  return (
    <html lang="ko">
      <body className={bodyClass}>
        {/* 공통 헤더: 모든 페이지에 항상 보이게 됨 */}
        <Header />

        {/* 페이지별 내용 */}
        <main>{children}</main>
      </body>
    </html>
  );
}
