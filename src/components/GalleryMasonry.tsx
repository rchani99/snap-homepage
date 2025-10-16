/* =============================
   src/components/GalleryMasonry.tsx
   react-masonry-css 기반 Masonry + CSS 스타일
   ============================= */

'use client';

import React from 'react';
import Masonry from 'react-masonry-css';
import ImageItem from './ImageItem';
import Lightbox from './Lightbox';
import portfolioData from '@/data/portfolio.json';

type Img = { src: string; alt?: string; category?: string };

type Props = {
  limit?: number;
  gutter?: number;
};

export default function GalleryMasonry({ limit = 100, gutter = 8 }: Props) {
  const images = (portfolioData.gallery as Img[] || []).slice(0, limit);
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const breakpointCols = {
    default: 5,
    1280: 5,
    1024: 4,
    768: 3,
    480: 2,
    0: 2
  };

  const masonryStyle = {
    display: 'flex',
    marginLeft: `-${gutter}px`,
    width: 'auto',
  } as React.CSSProperties;

  console.log('gallery length =', (portfolioData.gallery || []).length);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Masonry
          breakpointCols={breakpointCols}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          style={masonryStyle}
        >
          {images.map((img, i) => (
            <div key={i} className="mb-0">
              <ImageItem
                src={img.src}
                alt={img.alt}
                index={i}
                onClick={(idx) => setOpenIndex(idx)}
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </Masonry>
      </div>

      {openIndex !== null && (
        <Lightbox images={images} startIndex={openIndex} onClose={() => setOpenIndex(null)} />
      )}

      {/* =============================
          globals.css 추가 스타일
          ============================= */}
      <style jsx global>{`
        .my-masonry-grid {
          display: flex;
          margin-left: -${gutter}px;
          width: auto;
        }
        .my-masonry-grid_column {
          padding-left: ${gutter}px;
          background-clip: padding-box;
        }
        .my-masonry-img {
          transition: opacity 0.7s ease-out;
          display: block;
          width: 100%;
          height: auto;
        }
      `}</style>
    </>
  );
}
