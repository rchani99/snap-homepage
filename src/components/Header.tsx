// src/components/Header.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Container from './ui/Container';
import Image from 'next/image';

const KAKAO_CHANNEL_CHAT_URL =
  process.env.NEXT_PUBLIC_KAKAO_URL || 'http://pf.kakao.com/_vHxiMG';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    { href: '/portfolio', label: '포트폴리오' },
    { href: '/services', label: '상품안내' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur ${
        scrolled ? 'bg-white/90 shadow-sm' : 'bg-white/60'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* ✅ 왼쪽: 로고 + 메뉴를 하나의 flex 그룹으로 묶기 */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/kk_logo.png"
              alt="KKYUM SNAP Logo"
              width={120} // Next 최적화용 베이스 값 (무시되지 않음)
              height={120}
              priority
              sizes="(max-width:640px) 32px, (max-width:1024px) 40px, 48px"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-gray-700 hover:opacity-70 transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ✅ 오른쪽: 카카오 버튼 + 모바일 메뉴 버튼 */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center">
            <a
              href={KAKAO_CHANNEL_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 rounded-2xl px-5 py-3
                bg-[#4c3126] !text-white text-sm font-light
                hover:bg-[#3b261e] transition-colors
              "
            >
              카카오 채널로 예약
            </a>
          </div>

          <button
            aria-label="메뉴 열기"
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 outline-none ring-1 ring-gray-300"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-xl">≡</span>
          </button>
        </div>
      </Container>

      {/* 모바일 드롭다운 메뉴 */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <Container className="py-3">
            <ul className="flex flex-col">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="block py-3 text-base text-gray-800"
                    onClick={() => setOpen(false)}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={KAKAO_CHANNEL_CHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full inline-flex items-center justify-center
                    rounded-2xl px-5 py-3
                    bg-[#4c3126] !text-white text-sm font-light
                    hover:bg-[#3b261e] transition-colors
                  "
                >
                  카카오 채널로 예약
                </a>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
