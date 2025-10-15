// src/app/portfolio/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import portfolioData from '@/data/portfolio.json';

export default function PortfolioPage() {
  return (
    <main>
      <section className="py-16">
        <Container>
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold">포트폴리오</h1>
            <p className="mt-2 text-gray-600">촬영 카테고리를 선택하세요.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.categories.map((c) => (
              <Link key={c.slug} href={`/portfolio/${c.slug}`} className="group block overflow-hidden rounded-2xl shadow">
                <div className="relative h-48 w-full">
                  <Image src={c.cover} alt={c.title} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="text-sm text-gray-500">{c.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
