// src/components/Header.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Container from './ui/Container';

const KAKAO_CHANNEL_CHAT_URL = process.env.NEXT_PUBLIC_KAKAO_URL || 'https://pf.kakao.com/_yourChannelId/chat';

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
      className={`sticky top-0 z-40 backdrop-blur ${scrolled ? 'bg-white/90 shadow-sm' : 'bg-white/60'}`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          SNAP STUDIO
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-gray-700 hover:text-black">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2">
          <a
            href={KAKAO_CHANNEL_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-black text-white"
          >
            카카오톡으로 예약
          </a>
        </div>

        <button
          aria-label="메뉴 열기"
          className="md:hidden inline-flex items-center justify-center rounded-xl p-2 -mr-1 outline-none ring-1 ring-gray-300"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-xl">≡</span>
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t bg-white">
          <Container className="py-3">
            <ul className="flex flex-col">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="block py-3 text-base text-gray-800" onClick={() => setOpen(false)}>
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={KAKAO_CHANNEL_CHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-black text-white"
                >
                  카카오톡으로 예약
                </a>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
