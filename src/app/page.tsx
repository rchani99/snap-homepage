
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Phone, Mail, Instagram, MapPin } from 'lucide-react';
import Image from "next/image";


import services from '@/data/services.json';
import reviews from '@/data/reviews.json';
import portfolio from '@/data/portfolio.json';
import about from '@/data/about.json';

const KAKAO_CHANNEL_CHAT_URL = 'https://pf.kakao.com/_yourChannelId/chat'; // <- CHANGE ME

const heroImages = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg'
];

function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function Button({ children, href, onClick, className = '' }: any) {
  const Comp: any = href ? 'a' : 'button';
  return (
    <Comp
      href={href}
      onClick={onClick}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium shadow-sm hover:shadow md:text-base transition-all bg-black text-white hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </Comp>
  );
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10 text-center">
      {eyebrow && <p className="mb-2 text-xs tracking-widest text-gray-500 uppercase">{eyebrow}</p>}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    { href: '#portfolio', label: '포트폴리오' },
    { href: '#services', label: '서비스/가격' },
    { href: '#about', label: '작가소개' },
    { href: '#reviews', label: '리뷰' },
    { href: KAKAO_CHANNEL_CHAT_URL, label: '카카오 예약', external: true },
  ];

  return (
    <header className={`sticky top-0 z-40 backdrop-blur ${scrolled ? 'bg-white/90 shadow-sm' : 'bg-white/60'}`} style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight">SNAP STUDIO</a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              target={n.external ? '_blank' : undefined}
              rel={n.external ? 'noopener noreferrer' : undefined}
              className="text-gray-700 hover:text-black"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-2">
          <Button href={KAKAO_CHANNEL_CHAT_URL}>카카오톡으로 예약</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="메뉴 열기"
          className="md:hidden inline-flex items-center justify-center rounded-xl p-2 -mr-1 outline-none ring-1 ring-gray-300 active:scale-95"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="i">≡</span>
        </button>
      </Container>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <Container className="py-3">
            <ul className="flex flex-col">
              {nav.map((n) => (
                <li key={n.label}>
                  <a
                    className="block py-3 text-base text-gray-800"
                    href={n.href}
                    target={n.external ? '_blank' : undefined}
                    rel={n.external ? 'noopener noreferrer' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button href={KAKAO_CHANNEL_CHAT_URL} className="w-full justify-center">카카오톡으로 예약</Button>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}


function Hero() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroImages.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[85vh] w-full overflow-hidden rounded-b-[2.5rem]">
      {heroImages.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === i ? 1 : 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt="Hero"
            fill
            priority={i === 0}
            placeholder="empty"
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-black/30" />
      <Container className="relative h-full">
        <div className="flex h-full flex-col items-start justify-end pb-14 md:pb-24">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-2xl text-white">
            <p className="mb-2 text-sm tracking-widest uppercase">Snap Photography Studio</p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">{about.headline}</h1>
            <p className="mt-4 text-white/90">웨딩 · 커플 · 패밀리 · 돌스냅 · 데이 이벤트까지, 일상의 찰나를 작품처럼.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#portfolio">포트폴리오 보기 <ChevronRight className="h-4 w-4"/></Button>
              <Button href={KAKAO_CHANNEL_CHAT_URL} className="bg-white text-black">카카오톡으로 예약</Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// function Hero() {
//   const [index, setIndex] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => setIndex((i) => (i + 1) % heroImages.length), 4000);
//     return () => clearInterval(id);
//   }, []);
//   return (
//     <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden rounded-b-[2.5rem]">
//       {heroImages.map((src, i) => (
//         <motion.img
//           key={i}
//           src={src}
//           alt="Hero"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: index === i ? 1 : 0 }}
//           transition={{ duration: 1.1, ease: 'easeInOut' }}
//           className="absolute inset-0 h-full w-full object-cover"
//         />
//       ))}
//       <div className="absolute inset-0 bg-black/30" />
//       <Container className="relative h-full">
//         <div className="flex h-full flex-col items-start justify-end pb-14 md:pb-24">
//           <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-2xl text-white">
//             <p className="mb-2 text-sm tracking-widest uppercase">Snap Photography Studio</p>
//             <h1 className="text-4xl md:text-6xl font-semibold leading-tight">{about.headline}</h1>
//             <p className="mt-4 text-white/90">웨딩 · 커플 · 패밀리 · 돌스냅 · 데이 이벤트까지, 일상의 찰나를 작품처럼.</p>
//             <div className="mt-8 flex flex-wrap gap-3">
//               <Button href="#portfolio">포트폴리오 보기 <ChevronRight className="h-4 w-4"/></Button>
//               <Button href={KAKAO_CHANNEL_CHAT_URL} className="bg-white text-black">카카오톡으로 예약</Button>
//             </div>
//           </motion.div>
//         </div>
//       </Container>
//     </section>
//   );
// }

function CategoryGrid() {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <Container>
        <SectionTitle eyebrow="Portfolio" title="포트폴리오 카테고리" subtitle="촬영 목적에 맞는 스타일을 선택해 보세요." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolio.categories.map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-3xl shadow-sm">
              <img src={c.cover} alt={c.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0"/>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-80">{c.subtitle}</p>
                <h3 className="text-xl font-semibold">{c.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Gallery() {
  return (
    <section className="py-12">
      <Container>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {portfolio.gallery.map((src, i) => (
            <img key={i} src={src} alt={`p-${i}`} className="mb-4 w-full break-inside-avoid rounded-2xl shadow" />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionTitle eyebrow="Services" title="서비스 & 가격" subtitle="투명한 가격으로 믿음을 드립니다." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((p) => (
            <div key={p.slug} className={`rounded-3xl p-6 md:p-8 shadow-sm bg-white`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <span className="text-lg font-medium text-gray-800">₩{p.price.toLocaleString()}</span>
              </div>
              <p className="mt-3 text-sm text-gray-600">{p.description}</p>
              <Button href={KAKAO_CHANNEL_CHAT_URL} className="mt-6 w-full justify-center">카카오톡으로 예약</Button>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-gray-500">* 주말/공휴일, 이동거리, 추가 보정 컷 수에 따라 비용이 상이할 수 있습니다.</p>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img src="/images/about.jpg" alt="behind" className="rounded-3xl shadow" />
          <div>
            <SectionTitle eyebrow="About" title="작가 소개" />
            <p className="text-gray-700 leading-relaxed">{about.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {about.badges.map((b) => (
                <span key={b} className="rounded-full bg-gray-100 px-3 py-1 text-xs">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionTitle eyebrow="Reviews" title="고객 후기" subtitle="실제 고객분들의 생생한 후기입니다." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-gray-700">“{r.body}”</p>
              <p className="mt-4 text-sm font-medium text-gray-800">{r.author}</p>
            </div>
          ))}
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
            <p className="mt-2 text-sm text-gray-600 flex items-center gap-2"><MapPin className="h-4 w-4"/> 서울특별시 ○○구 ○○로 123</p>
          </div>
          <div>
            <p className="text-sm font-medium">Navigation</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#portfolio" className="hover:text-black">포트폴리오</a></li>
              <li><a href="#services" className="hover:text-black">서비스/가격</a></li>
              <li><a href="#about" className="hover:text-black">작가소개</a></li>
              <li><a href="#reviews" className="hover:text-black">리뷰</a></li>
              <li><a href={KAKAO_CHANNEL_CHAT_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black">카카오 예약</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> 010-0000-0000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> hello@snapstudio.kr</li>
              <li className="flex items-center gap-2"><Instagram className="h-4 w-4"/> @snapstudio</li>
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
      <Header />
      <Hero />
      <CategoryGrid />
      <Gallery />
      <Services />
      <About />
      <Reviews />
      <Footer />
    </div>
  );
}