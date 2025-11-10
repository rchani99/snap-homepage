// src/app/portfolio/outdoor/page.tsx
import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import portfolioData from '@/data/portfolio.json';
import GalleryMasonry from '@/components/GalleryMasonry';

type ImageItem = {
  src: string;
  alt?: string;
  category?: string;
};

type Params = {
  params: { slug: string };
};

export default function OutdoorPage() {
  return (
    <main>
      <section className="pt-16 pb-10 bg-white">
        <Container>
          <div className="mb-6 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#4c3126]">
              야외스냅 포트폴리오
            </h1>
            <p className="mt-3 text-sm md:text-base text-[#4c3126]/80">
              계절과 장소의 분위기를 그대로 담은 야외스냅 사진들입니다.
            </p>
          </div>
        </Container>

        <section className="pb-16">
          <GalleryMasonry category="outdoor" limit={100} />
        </section>
      </section>
    </main>
  );
}

