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
            <h1 className="text-3xl font-semibold">포트폴리오</h1>
            <p className="mt-2 ">촬영 카테고리를 선택하세요.</p>
          </div>

          {/* flex 중앙 정렬 */}
          <div className="flex flex-wrap justify-center gap-8">
            {portfolioData.categories.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
              >
                <Link
                  href={`/portfolio/${c.slug}`}
                  className="
                    group block overflow-hidden rounded-2xl shadow
                    max-w-[280px] w-full sm:w-[260px] md:w-[240px]
                    min-h-[340px] flex flex-col justify-between bg-white
                    transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:shadow-xl
                  "
                >
                  {/* 이미지 영역 */}
                  <div className="relative h-48 w-full">
                    <Image
                      src={c.cover}
                      alt={c.title}
                      fill
                      sizes="(max-width:640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* 텍스트 영역 */}
                  <div className="p-4 text-center flex flex-col flex-grow justify-center">
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                    <p className="text-text-gray-600">{c.subtitle}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
