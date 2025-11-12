'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import portfolioData from '@/data/portfolio.json';

export default function PortfolioPage() {
  return (
    <main>
      <section className="py-16">
        <Container>
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold text-[#4c3126]">포트폴리오</h1>
            <p className="mt-2 text-[#4c3126]/80">촬영 카테고리를 선택하세요.</p>
          </div>

          {/* ✅ 가운데 정렬 + 2개 카드 동일 크기 */}
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
              {portfolioData.categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/portfolio/${c.slug}`}
                  className="
                    group w-full max-w-[340px]
                    overflow-hidden rounded-2xl shadow border border-[#4c3126]/10 bg-white
                    flex flex-col
                  "
                >
                  {/* ✅ 커버 비율 통일 */}
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={c.cover}
                      alt={c.title}
                      fill
                      sizes="(max-width:640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority={false}
                    />
                  </div>

                  {/* ✅ 텍스트 영역 균일화 */}
                  <div className="p-4 text-center text-[#4c3126]">
                    <h3 className="text-base sm:text-lg font-semibold">{c.title}</h3>
                    {c.subtitle && (
                      <p className="mt-1 text-xs sm:text-sm text-[#4c3126]/70 line-clamp-1">
                        {c.subtitle}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>



        </Container>
      </section>
    </main>
  );
}
