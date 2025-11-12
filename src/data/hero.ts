// 디바이스별 이미지 경로를 자동 생성하는 스캐폴드
export type HeroImg = {
  desktop: string; // PC/태블릿용 (가로형)
  mobile: string;  // 모바일용 (세로형)
  alt: string;
};

/**
 * 예) buildHeroImages({
 *   count: 3,
 *   desktopBase: '/images/hero/wide',  // wide1.jpg, wide2.jpg ...
 *   mobileBase:  '/images/hero/vert',  // vert1.jpg, vert2.jpg ...
 *   altBase:     'Hero'
 * })
 */
export function buildHeroImages(opts: {
  count: number;
  desktopBase: string; // '/images/hero/wide'
  mobileBase: string;  // '/images/hero/vert'
  startIndex?: number; // 기본 1
  altBase?: string;    // 기본 'Hero'
}): HeroImg[] {
  const {
    count,
    desktopBase,
    mobileBase,
    startIndex = 1,
    altBase = 'Hero',
  } = opts;

  return Array.from({ length: count }, (_, k) => {
    const i = k + startIndex;
    return {
      desktop: `${desktopBase}${i}.jpg`,
      mobile: `${mobileBase}${i}.jpg`,
      alt: `${altBase} ${i}`,
    };
  });
}

// 프로젝트에서 바로 쓸 기본 프리셋 (원하면 수정)
export const heroImages = buildHeroImages({
  count: 5,                               // 👉 이미지 개수만 바꾸면 자동 생성
  desktopBase: '/images/hero/wide',       // wide1.jpg, wide2.jpg, ...
  mobileBase: '/images/hero/vert',        // vert1.jpg, vert2.jpg, ...
  altBase: 'KKYUM SNAP',
});
