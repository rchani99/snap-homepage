// src/components/GalleryMasonry.tsx
'use client';
import React from 'react';
import ImageItem from './ImageItem';
import Lightbox from './Lightbox';
import portfolioData from '@/data/portfolio.json';

type Img = { src: string; alt?: string; category?: string };

export default function GalleryMasonry({ limit = 100 }: { limit?: number }) {
  const images = (portfolioData.gallery as Img[] || []).slice(0, limit);

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <>
      <div
        // CSS columns 방식: 반응형 column 수는 media query로 조정
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="masonry-columns gap-[4px]">
          {images.map((img, i) => (
            <ImageItem
              key={i}
              src={img.src}
              alt={img.alt}
              index={i}
              onClick={(idx) => setOpenIndex(idx)}
              sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            />
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox images={images} startIndex={openIndex} onClose={() => setOpenIndex(null)} />
      )}
    </>
  );
}
