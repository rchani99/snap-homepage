// src/components/ImageItem.tsx
'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  alt?: string;
  index: number;
  onClick: (index: number) => void;
  sizes?: string;
  /** 정사각형이 기본. 필요하면 3/4 등 다른 비율로 바꿀 수 있어요. */
  aspect?: number; // width / height, 예: 1(정사각), 3/4=0.75, 4/3=1.333...
};

export default function ImageItem({
  src,
  alt = '',
  index,
  onClick,
  sizes = '(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw',
  aspect = 1,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Lazy load: IntersectionObserver
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '300px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // 비율 스페이서 높이 계산 (정사각 기본)
  // padding-top(%) = (height / width) * 100 = (1 / aspect) * 100
  const padTopPercent = `${(1 / aspect) * 100}%`;

  return (
    <div
      ref={ref}
      className="w-full break-inside-avoid select-none cursor-zoom-in"
      role="button"
      tabIndex={0}
      onClick={() => visible && onClick(index)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') visible && onClick(index);
      }}
    >
      <div className="relative w-full overflow-hidden" style={{ paddingTop: padTopPercent }}>
        {/* 스페이서 상단에 실제 이미지(visible일 때만) */}
        {visible && (

        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"          // ✅ 명시적으로 lazy
          onLoad={() => setLoaded(true)}
        />

        )}
      </div>
    </div>
  );
}
