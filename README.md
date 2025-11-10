# 📸 KKYUM SNAP — 감성 스냅 촬영 홈페이지

> Next.js 기반으로 제작된 뀨엠스냅(감성 스냅 촬영 전문) 공식 홈페이지입니다.  
> Dolpang 스타일을 참고하여 제작되었으며, 최소한의 백엔드 없이 정적 구조로 운영됩니다.

---

## 🏗️ 기술 스택

| 구분 | 사용 기술 |
|------|------------|
| **Frontend** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | TailwindCSS |
| **Font** | GmarketSans (로컬 TTF 호스팅) |
| **Deploy** | [Vercel](https://vercel.com) |
| **Hosting Type** | Static Export (No Backend) |

---

## 🧩 주요 페이지 구성

| 페이지 | 설명 |
|--------|------|
| `/` | **메인 페이지** — Hero 이미지 + Masonry 갤러리 (Lightbox / Lazy Load) |
| `/portfolio` | 포트폴리오 카테고리 목록 (돌스냅 / 야외스냅) |
| `/portfolio/dolsnap` | 돌스냅 상세 페이지 |
| `/portfolio/outdoor` | 야외스냅 상세 페이지 |
| `/services` | 상품안내 / 출장비 / 보정 / 예약 / 환불 안내 |
| (공통) | Header / Footer / Kakao 예약 버튼 |

---

## 🎨 디자인 컨셉

| 항목 | 설정 |
|------|------|
| **브랜드 컬러** | `#4c3126` (따뜻한 브라운톤) |
| **보조 배경색** | `#fdfaf7`, `#fffdf9` |
| **폰트** | GmarketSans (Light / Medium / Bold) |
| **버튼 스타일** | `bg-black text-white` (hover: `#2a2a2a`) |
| **링크 Hover 효과** | 투명도 기반 (`hover:opacity-70`) |
| **전체 톤앤매너** | 따뜻하고 자연스러운 감성, Dolpang 스타일 참고 |

---

## 📁 폴더 구조

src/
├── app/
│ ├── page.tsx → 메인 (Hero + Masonry)
│ ├── portfolio/
│ │ ├── page.tsx → 포트폴리오 목록
│ │ ├── dolsnap/page.tsx → 돌스냅 상세
│ │ └── outdoor/page.tsx → 야외스냅 상세
│ ├── services/page.tsx → 상품 안내 + 출장비 및 예약안내
│ └── layout.tsx → Root 레이아웃
├── components/
│ ├── Header.tsx
│ ├── Footer.tsx
│ ├── GalleryMasonry.tsx
│ └── ui/Container.tsx
├── data/
│ ├── portfolio.json
│ └── services.json
└── public/
└── images/
├── hero1.jpg, hero2.jpg, ...
├── dolsnap, outdoor 샘플 이미지
└── kk_logo.png


---

## 🧠 기능 요약

- 반응형 Hero 이미지 섹션  
- Masonry 갤러리 (Lazy Load + Lightbox 확대 + 페이드인 효과)  
- 포트폴리오 카테고리별 라우팅  
- 상품 안내 + 상세 촬영 안내 문서  
- 카카오톡 채널 예약 버튼 (헤더 & 모바일 메뉴)  
- 모든 페이지에 공통 Header/Footer 적용  

---

## 🪄 브랜드 톤 유지 가이드

| 요소 | 규칙 |
|------|------|
| 제목(h1~h2) | `text-[#4c3126] font-extrabold` |
| 소제목(h3~h4) | `text-[#4c3126] font-semibold` |
| 본문 텍스트 | `text-[#4c3126]/90 leading-relaxed` |
| 배경 | 흰색 또는 베이지톤 (`#fdfaf7`) |
| 버튼 | `bg-black !text-white hover:bg-[#2a2a2a]` |

---

## 🚀 배포

1. **개발 환경 실행**
   ```bash
   npm run dev

2. **프로덕션 빌드**
   ```bash
   npm run build

3. **Vercel 배포**

Vercel 대시보드에서 연결 후 자동 빌드
커스텀 도메인 설정 가능 (www.kkumsnap.com 등)

📌 작업 진행 요약 (2025)
단계	상태
✅ 기본 페이지 구성 및 라우팅	완료
✅ Masonry + Lightbox 갤러리	완료
✅ 폰트/컬러 브랜드 통합	완료
✅ 상품안내 + 촬영안내 텍스트 삽입	완료
🔧 반응형 세부 수정	진행 중
⏳ SEO / Metadata / OG 이미지	예정
⏳ 커스텀 도메인 연결	예정


👥 협업 참고

배포 확인: vercel.com/dashboard

Kakao 채널: NEXT_PUBLIC_KAKAO_URL 환경변수에 링크 지정

이미지 추가 시: public/images/ 폴더에 저장 후 경로만 코드 수정

📍 프로젝트 관리 Tip
“뀨엠스냅 홈페이지 작업 이어서” 라고 말하면,
이 README 내용 기반으로 바로 연속 작업을 이어갈 수 있습니다.


---

이 파일을 프로젝트 루트(`snap-homepage/README.md`)에 저장하면,  
GitHub / Vercel / VSCode 모두에서 프로젝트 개요가 깔끔하게 표시됩니다 ✅  

원하신다면 — 이 README에  
**실제 스크린샷**(`public/images/preview-home.jpg` 등) 넣는 버전도 만들어줄까요?  
(`![홈페이지 미리보기](...)` 형식으로 표시 가능)





This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
