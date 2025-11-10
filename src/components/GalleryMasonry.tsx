// src/components/GalleryMasonry.tsx
'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import portfolioData from '@/data/portfolio.json';

// 타입
type Img = { src: string; alt?: string; category?: string; w?: number; h?: number };

function shuffle<T>(arr: T[]): T[] {
  // Fisher–Yates
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type GalleryMasonryProps = {
  limit?: number;
  category?: string; // ✅ 추가: 돌스냅 / 야외스냅 필터용
};

export default function GalleryMasonry({ limit = 100, category }: GalleryMasonryProps) {
  const images = (portfolioData.gallery as Img[]) ?? [];

  // ✅ category가 있으면 필터 후 셔플, 없으면 전체 셔플
  const randomized = useMemo(() => {
    let base = images;
    if (category) {
      base = base.filter((img) => img.category === category);
    }
    return shuffle(base).slice(0, limit);
  }, [images, category, limit]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <PhotoProvider
        maskOpacity={0.9}
        toolbarRender={({ onScale, scale, onRotate, rotate }) => (
          <div className="text-white text-sm flex items-center gap-3">
            <button onClick={() => onScale(scale + 1)}>확대+</button>
            <button onClick={() => onScale(scale - 1)}>축소−</button>
            <button onClick={() => onRotate(rotate + 90)}>회전↻</button>
          </div>
        )}
      >
        {/* Masonry: CSS columns */}
        <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3">
          {randomized.map((img, i) => {
            const ratioPadding =
              img.w && img.h ? `${(img.h / img.w) * 100}%` : '150%';

            return (
              <motion.div
                key={`${img.src}-${i}`}
                className="mb-3 break-inside-avoid overflow-hidden cursor-zoom-in rounded-none"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <PhotoView src={img.src}>
                  <div
                    className="relative w-full bg-gray-100"
                    style={{ paddingTop: ratioPadding }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt || `img-${i}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover select-none"
                      draggable={false}
                    />
                  </div>
                </PhotoView>
              </motion.div>
            );
          })}
        </div>
      </PhotoProvider>
    </div>
  );
}
