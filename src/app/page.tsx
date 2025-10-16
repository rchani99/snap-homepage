'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

const GalleryMasonry = dynamic(() => import('@/components/GalleryMasonry'), { ssr: false });


/* ===========================
   데이터 타입 정의
   =========================== */

/* 카카오 채널 URL — 배포 시 환경변수로 교체 권장 */
const KAKAO_CHANNEL_CHAT_URL =
  process.env.NEXT_PUBLIC_KAKAO_URL || 'https://pf.kakao.com/_yourChannelId/chat';

/* ===========================
   공용 컴포넌트 타입 정의
   =========================== */

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className = '' }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  target?: string;
  rel?: string;
};

function Button({ children, href, onClick, className = '', target, rel }: ButtonProps) {
  const Comp: React.ElementType = href ? 'a' : 'button';
  // Anchor일 경우에는 href, target, rel을, Button일 경우에는 onClick을 사용
  return (
    <Comp
      href={href}
      onClick={onClick}
      target={href ? target : undefined}
      rel={href ? rel : undefined}
      className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium shadow-sm hover:shadow md:text-base transition-all bg-black text-white hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </Comp>
  );
}

/* ===========================
   페이지 컴포넌트
   =========================== */

const heroImages = ['/images/hero1.jpg', '/images/hero2.jpg', '/images/hero3.jpg'];

function Hero() {
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroImages.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    // <section className="relative h-[60vh] sm:h-[70vh] md:h-[85vh] w-full overflow-hidden">
      <section className="relative h-[80vh] sm:h-[85vh] md:h-[90vh] overflow-hidden">

      {heroImages.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === i ? 1 : 0 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image src={src} alt={`Hero ${i}`} fill priority={i === 0} fetchPriority={i === 0 ? 'high' : 'auto'} sizes="100vw" className="object-cover" />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-black/30" />
      <Container className="relative h-full">
        <div className="flex h-full flex-col items-start justify-end pb-14 md:pb-24">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-2xl text-white">
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-lg font-semibold">SNAP STUDIO</p>
            <p className="mt-2 text-sm text-gray-600">© 2013–2025 All rights reserved.</p>
            <p className="mt-2 text-sm text-gray-600 flex items-center gap-2">
              <MapPin className="h-4 w-4" /> 서울특별시 ○○구 ○○로 123
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Navigation</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#portfolio" className="hover:text-black">
                  포트폴리오
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-black">
                  상품 안내
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> 010-0000-0000
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@snapstudio.kr
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" /> @snapstudio
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function Page() {
  return (
    <div className="font-[ui-sans-serif] antialiased text-gray-900">
      <Hero />
      {/* Masonry Gallery (limit 100) */}
      <section className="pt-6 pb-8">
        <GalleryMasonry limit={100} gutter={8} />
      </section>
      <Footer />
    </div>
  );
}
