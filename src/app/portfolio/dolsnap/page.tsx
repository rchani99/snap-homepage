// src/app/portfolio/dolsnap/page.tsx
import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import portfolioData from '@/data/portfolio.json';

type ImageItem = {
  src: string;
  alt?: string;
  category?: string;
};

type Params = {
  params: { slug: string };
};

export default function DolsnapPage({ params }: Params) {
  const slug = params?.slug ?? 'dolsnap';
  const category = portfolioData.categories.find((c) => c.slug === slug);

  if (!category) return notFound();

  // portfolio.json의 gallery가 ImageItem[] 구조라고 가정
  const images = (portfolioData.gallery as ImageItem[]).filter((g) => g.category === slug);

  return (
    <main>
      <section className="py-16">
        <Container>
          <div className="mb-8">
            <h1 className="text-3xl font-semibold">{category.title}</h1>
            <p className="mt-2 text-gray-600">{category.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={img.src}
                    alt={img.alt ?? `${category.title}-${i}`}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
