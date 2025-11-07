'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css'; // 스타일 임포트
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

export default function GalleryMasonry({ limit = 100 }: { limit?: number }) {
  const images = (portfolioData.gallery as Img[]) ?? [];

  // 1) 랜덤 배치: 첫 렌더 시 셔플
  const randomized = useMemo(() => shuffle(images).slice(0, limit), [images, limit]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* PhotoProvider: 라이트박스 컨텍스트 */}
      <PhotoProvider
        // 라이트박스 옵션 (화살표 네비/스와이프/닫기 기본 제공)
        maskOpacity={0.9} // 검은 배경 농도
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
              img.w && img.h ? `${(img.h / img.w) * 100}%` : '150%'; // 크기 정보 없으면 대략 세로형
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
                  {/* 비율 스페이서 + 자연스러운 높이 */}
                  <div className="relative w-full bg-gray-100" style={{ paddingTop: ratioPadding }}>
                    {/* next/image 대신 본래 높이를 자연스럽게 쓰고 싶으면 <img>가 가장 간단 */}
                    {/* 성능 최적화를 원하면 next/image 사용 + width/height 지정으로 교체 가능 */}
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
