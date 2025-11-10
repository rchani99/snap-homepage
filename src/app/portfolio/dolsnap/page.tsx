import React from 'react';
import Container from '@/components/ui/Container';
import GalleryMasonry from '@/components/GalleryMasonry';

export default function DolsnapPage() {
  return (
    <main>
      <section className="pt-16 pb-10 bg-white">
        <Container>
          <div className="mb-6 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#4c3126]">
              돌스냅 포트폴리오
            </h1>
            <p className="mt-3 text-sm md:text-base text-[#4c3126]/80">
              우리 아기의 첫 번째 생일을 자연스럽고 따뜻하게 담은 돌스냅 사진들입니다.
              <br className="hidden md:block" />
              촬영 스타일과 색감을 참고해 주세요.
            </p>
          </div>
        </Container>

        {/* Masonry 갤러리 (돌스냅만) */}
        <section className="pb-16">
          <GalleryMasonry category="dolsnap" limit={100} />
        </section>
      </section>
    </main>
  );
}
