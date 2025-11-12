'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { heroImages } from '@/data/hero'; // 위 스캐폴드에서 자동 생성

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroImages.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[80vh] sm:h-[85vh] md:h-[90vh] overflow-hidden bg-[#fdfaf7]">
      {heroImages.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === i ? 1 : 0 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="absolute inset-0"
          aria-hidden={index !== i}
        >
          {/* ✅ 반응형 이미지 선택: 데스크탑/태블릿=가로형, 모바일=세로형 */}
          <picture>
            {/* 데스크탑(>=1024px)용 가로형 */}
            <source media="(min-width: 1024px)" srcSet={img.desktop} />
            {/* 태블릿(>=640px)도 가로형 (원하면 이 줄 제거해 태블릿을 모바일처럼 처리 가능) */}
            <source media="(min-width: 640px)" srcSet={img.desktop} />

            {/* 모바일 세로형 — fallback 으로 Next/Image 사용 */}
            <Image
              src={img.mobile}
              alt={img.alt}
              fill
              priority={i === 0}
              fetchPriority={i === 0 ? 'high' : 'auto'}
              sizes="100vw"
              className="object-cover sm:object-cover object-center"
              // 사진별 초점 미세 조정이 필요하면 아래 라인을 각 index 별로 커스터마이즈:
              // style={{ objectPosition: i === 0 ? 'center 20%' : 'center' }}
            />
          </picture>
        </motion.div>
      ))}

      {/* 필요 시 텍스트 대비용 오버레이 */}
      <div className="absolute inset-0 bg-black/30" />

      <Container className="relative h-full">
        <div className="flex h-full flex-col items-start justify-end pb-14 md:pb-24">
          {/* Hero 텍스트가 필요 없다면 비워두세요 */}
        </div>
      </Container>
    </section>
  );
}
