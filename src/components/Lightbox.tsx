// src/components/Lightbox.tsx
'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

type Props = {
  images: { src: string; alt?: string }[];
  startIndex: number;
  onClose: () => void;
};

export default function Lightbox({ images, startIndex, onClose }: Props) {
  const [index, setIndex] = React.useState(startIndex);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [images.length, onClose]);

  // prevent background scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  if (!images || images.length === 0) return null;

  const img = images[index];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <button
        onClick={onClose}
        aria-label="닫기"
        className="absolute top-6 right-6 text-white text-2xl"
      >
        ×
      </button>

      <button
        onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
        aria-label="이전"
        className="absolute left-4 text-white text-3xl p-2"
      >
        ‹
      </button>

      <div className="relative max-w-[95vw] max-h-[95vh] w-full">
        <Image src={img.src} alt={img.alt || `image-${index}`} fill style={{ objectFit: 'contain' }} />
      </div>

      <button
        onClick={() => setIndex((i) => (i + 1) % images.length)}
        aria-label="다음"
        className="absolute right-4 text-white text-3xl p-2"
      >
        ›
      </button>
    </div>
  );
}
