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
  title: "뀨엠스냅 | 서울 경기 돌스냅 · 야외스냅 전문 감성스냅",
  description:
    "서울, 경기 전지역 돌스냅 · 야외스냅 전문 감성 스냅촬영. 자연스러운 감정과 빛을 담은 사진, 대표 작가 1:1 진행.",
  keywords: [
    "뀨엠스냅",
    "돌스냅",
    "야외스냅",
    "서울스냅",
    "경기스냅",
    "감성스냅",
    "가족사진",
    "스냅사진",
  ],
  openGraph: {
    title: "뀨엠스냅 | 서울 경기 돌스냅 · 야외스냅 전문 감성스냅",
    description:
      "대표 작가가 직접 진행하는 서울/경기 돌스냅 · 야외스냅 촬영. 감성적인 색감과 자연스러운 순간을 담습니다.",
    url: "https://snap-homepage-six.vercel.app",
    siteName: "뀨엠스냅",
    images: [
      {
        url: "/og-image.png", // ✅ /public/og-image.png 준비 필요
        width: 1200,
        height: 630,
        alt: "뀨엠스냅 감성스냅 대표사진",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "뀨엠스냅 | 돌스냅 · 야외스냅 전문 감성스냅",
    description: "서울/경기 돌스냅, 야외스냅 전문 감성 스냅사진",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://snap-homepage-six.vercel.app"),
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
