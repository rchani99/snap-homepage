'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import services from '@/data/services.json';

export default function ServicesPage() {
  return (
    <main>
      {/* 상단: 텍스트 + 오른쪽 이미지 섹션 */}
      <section className="py-16 bg-[#fdfaf7]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* 왼쪽: 대주제 + 부주제 + 설명 */}
            <div>
              {/* 대주제 (브랜드 컬러, 크고 진하게) */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#4c3126] tracking-tight">
                소중한 순간을<br className="hidden sm:block" />
                가장 자연스럽게 담는 스냅
              </h1>

              {/* 부주제 (굵게만 표시된 텍스트) */}
              <h2 className="mt-4 text-xl md:text-2xl font-semibold text-[#4c3126]">
                돌스냅 · 야외스냅 · 패밀리 · 커플 촬영까지
              </h2>

              {/* 설명문 */}
              <p className="mt-5 text-base md:text-lg text-[#4c3126]/80 leading-relaxed">
                인위적인 포즈보다는, 자연스럽게 웃고 바라보고 뛰노는 모습을 담습니다.
                <br />
                촬영 시간 동안은 카메라를 의식하기보다,
                <span className="font-semibold"> 함께 있는 그 순간에만 집중</span>하실 수 있도록
                편안한 분위기를 만들어 드립니다.
                <br />
                <br />
                날짜, 장소, 컨셉에 따라 다양한 패키지를 선택하실 수 있어요.
              </p>
            </div>

            {/* 오른쪽: 대표 이미지 (또는 콜라주) */}
            <div className="relative w-full max-w-md md:max-w-lg mx-auto">
              {/* 메인 이미지 */}
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/d1.jpg" // 👉 여기 이미지 파일만 네 사진으로 교체
                  alt="스냅 촬영 샘플 이미지"
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* 보조 이미지 (작게 겹치게 배치하고 싶다면) */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-md border border-white/70 bg-white">
                <Image
                  src="/images/o1.jpg" // 👉 서브 이미지도 바꿔주면 좋아
                  alt="촬영 현장 디테일"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 하단: 실제 상품 카드 그리드 */}
      <section className="py-16 bg-white">
        <Container>
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-[#4c3126]">상품 안내</h3>
            <p className="mt-2 text-sm md:text-base text-[#4c3126]/80 whitespace-pre-line">
              {`고객님의 특별한 날을 아름답게 남기실 수 있도록,
            DATA · FRAME · ALBUM 패키지를 준비했습니다.
            (상세 가격은 카카오톡채널에서 확인하실 수 있습니다.)`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.slug}
                className="rounded-2xl bg-[#fdfaf7] p-6 shadow-sm border border-[#4c3126]/10 text-[#4c3126] flex flex-col"
              >
                <h4 className="text-lg md:text-xl font-semibold">{s.name}</h4>
                <p className="mt-2 text-sm md:text-base text-[#4c3126]/80 flex-1  whitespace-pre-line">
                  {s.description}
                </p>
                {/* {s.note && (
                  <p className="mt-1 text-xs text-[#4c3126]/70">
                    * {s.note}
                  </p>
                )} */}
              </div>
            ))}
          </div>
        </Container>
      </section>

            {/* 하단: 안내 텍스트 섹션 전체 */}
      <section className="py-16 bg-[#fffdf9] border-t border-[#4c3126]/10">
        <Container>
          {/* === 출장비 안내 === */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#4c3126] mb-3">
              출장비 안내
            </h2>

            <div className="grid gap-6 md:grid-cols-2 text-sm md:text-base text-[#4c3126]/90">
              <div className="rounded-2xl bg-white p-5 shadow-sm border border-[#4c3126]/10">
                <h3 className="font-semibold text-[#4c3126] mb-2">
                  서울, 일부 경기 지역
                </h3>
                <p>출장비 없음</p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm border border-[#4c3126]/10">
                <h3 className="font-semibold text-[#4c3126] mb-2">
                  아래 경기 지역 (출장비 발생)
                </h3>
                <p className="mb-1">
                  광주 (남한산성 제외), 의정부, 평택, 동두천, 안산, 오산, 시흥, 파주, 이천,
                  양주, 포천, 여주, 연천, 가평, 양평, 고양시
                </p>
              </div>
            </div>
          </div>

          {/* === 예약 전 안내사항 (대주제) === */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#4c3126] mb-4">
              예약 전, 안내사항
            </h2>

            {/* 보정 안내 */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#4c3126] mb-2">
                보정 안내
              </h3>

              <div className="space-y-4 text-sm md:text-base text-[#4c3126]/90 leading-relaxed">
                <div>
                  <p className="font-semibold">1. 원본 사진 제공</p>
                  <p>
                    촬영 후 1차 선별 작업을 거쳐 NG 컷을 제외한 원본 사진을 보내드립니다.
                    <br />
                    원본 사진은 기본 보정(색감, 밝기, 대비, 수평, 구도 등)을 거쳐 전달됩니다.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">2. 보정 범위</p>
                  <p>
                    현장의 아름다움과 분위기를 살리기 위해 자연스러운 보정만 진행됩니다.
                    <br />
                    피부톤, 피부 결, 체형 등 자연스러운 선에서 리터치 보정이 가능합니다.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">3. 보정 제한 사항</p>
                  <p className="mb-2">
                    다음과 같은 합성이 필요한 과도한 보정은 진행하지 않습니다.
                  </p>
                  <ul className="list-disc pl-5">
                    <li>머리 모양 수정, 염색 보정, 메이크업 수정</li>
                    <li>치아 색/교정기 보정, 안경 빛 반사 제거</li>
                    <li>머리끈·옷 태그 제거, 속옷 보정, 인물 합성 등</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold">4. 추가 보정</p>
                  <p>
                    상품 구성 외 추가 보정을 원하실 경우,
                    <br />
                    <span className="font-semibold">10장당 4만 원</span>의 추가 비용이 발생합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 촬영 안내 */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#4c3126] mb-2">
                촬영 안내
              </h3>

              <div className="space-y-4 text-sm md:text-base text-[#4c3126]/90 leading-relaxed">
                <div>
                  <p className="font-semibold">1. 촬영 진행</p>
                  <p>
                    모든 촬영은 대표 작가 1인이 직접 진행합니다.
                    <br />
                    촬영은 행사 1시간 30분 전부터 시작하여 돌잡이 행사까지 이어집니다.
                    촬영 시간에 늦지 않도록 신경 써 주세요.
                    <br />
                    촬영 순서: 연출 스냅 → 돌상 직계가족 원판 촬영 → 돌잡이 행사
                  </p>
                </div>

                <div>
                  <p className="font-semibold">2. 사전 안내</p>
                  <p>
                    촬영 일주일 전에 촬영 관련 안내를 드립니다.
                    <br />
                    안내 연락을 받지 못하셨다면, 카카오톡 채널을 통해 문의 부탁드립니다.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">3. 촬영 시 유의사항</p>
                  <p>
                    상품별 컷 수는 아기의 컨디션에 따라 달라질 수 있습니다.
                    <br />
                    돌스냅은 정적인 포즈 위주의 사진이 아닌, 행사 속 자연스러운 순간을
                    담는 촬영입니다.
                    <br />
                    돌잔치 중 손님과 스텝의 동선은 사진작가가 통제할 수 없으므로,
                    손님의 뒷모습이나 방해물이 사진에 포함될 수 있음을 양해 부탁드립니다.
                    <br />
                    다만 최대한 피해서 촬영해드리고 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 사진 발송 안내 */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#4c3126] mb-2">
                사진 발송 안내
              </h3>

              <div className="space-y-4 text-sm md:text-base text-[#4c3126]/90 leading-relaxed">
                <div>
                  <p className="font-semibold">1. 프리뷰 컷 제공</p>
                  <p>
                    행사 진행 후 24시간 내에 촬영본 중 30장을 작가의 시점으로 선별하여
                    프리뷰 컷을 보내드립니다.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">2. 파일 전달 및 보관</p>
                  <p>
                    사진은 클라우드 다운로드 형식으로 제공됩니다.
                    <br />
                    USB 제공을 원하실 경우 추가 비용 5만 원이 발생합니다.
                    <br />
                    촬영 파일 전달 후에는 보관 의무가 고객님께 있습니다.
                    <br />
                    클라우드 사진 저장 기간은 90일이며, 이후에는 삭제되므로 반드시 기간
                    내에 백업해 주세요.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">3. 셀렉 및 보정</p>
                  <p>
                    보정본 및 상품 사진(액자·앨범)은 고객님이 직접 셀렉한 사진으로
                    제작됩니다.
                    <br />
                    원본 파일 전송 후 3개월 이내에 셀렉이 없을 경우, 작가 셀렉으로 보정
                    및 상품 제작이 진행되며, 이후 변경은 불가능합니다.
                    <br />
                    리터치 보정은 최대 3회까지 재수정 가능합니다.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">4. 보정본 및 상품 배송</p>
                  <p>
                    고객님의 셀렉 이후 제작이 진행되며, 최대 3개월 소요될 수 있습니다.
                    <br />
                    고객님의 셀렉이 늦어질 경우, 배송까지 최대 6개월이 소요될 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 예약 관련 안내 */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#4c3126] mb-2">
                예약 관련 안내
              </h3>

              <div className="space-y-4 text-sm md:text-base text-[#4c3126]/90 leading-relaxed">
                <div>
                  <p className="font-semibold">1. 촬영 가능 지역</p>
                  <p>
                    기본 촬영 지역은 서울 및 경기입니다.
                    <br />
                    일부 경기 지역은 출장비가 발생할 수 있으니, 상단 출장비 안내를
                    확인해 주세요.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">2. 예약 확정</p>
                  <p>
                    가계약은 불가능하며, 예약금 입금(10만 원)이 완료되어야 예약이
                    확정됩니다.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">3. 예약 변경 안내</p>
                  <p>
                    예약 확정 이후 날짜 및 장소 변경은 작가의 스케줄이 가능한 경우에 한해
                    1회 변경 가능합니다.
                    <br />
                    뀨엠스냅 스케줄이 마감된 경우, 예약금 환불은 어렵습니다.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">4. 장소 변경 시 유의사항</p>
                  <p>
                    변경된 장소는 반드시 서울·경기 지역 내여야 합니다.
                    <br />
                    서울·경기 외 지역으로 변경 시 계약이 해지되며, 이 경우 예약금 환불은
                    불가합니다.
                    <br />
                    변경된 장소가 출장비 발생 지역일 경우, 출장비 5만 원이 추가됩니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 결제 및 환불 안내 */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#4c3126] mb-2">
                결제 및 환불 안내
              </h3>

              <div className="space-y-4 text-sm md:text-base text-[#4c3126]/90 leading-relaxed">
                <div>
                  <p className="font-semibold">1. 촬영 비용 구성</p>
                  <p>
                    촬영 비용은 예약금 + 잔금으로 구성됩니다.
                    <br />
                    예약금 10만 원 입금 시 예약이 확정됩니다.
                    <br />
                    행사 규모와 상관없이 비용은 동일하며, 쌍둥이 촬영 시 10만 원이
                    추가됩니다.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">2. 예약금 안내</p>
                  <p>
                    예약금은 예약 후 3시간 이내 입금해 주셔야 합니다.
                    <br />
                    기한 내 미입금 시, 예약은 자동 취소되며 다음 예약자에게 순서가 넘어갈
                    수 있습니다.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">3. 환불 규정</p>
                  <p>
                    예약금 환불은 입금 후 72시간 이내에만 가능합니다.
                    <br />
                    이후에는 예약금 환불이 불가능합니다.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">4. 잔금 정산</p>
                  <p>잔금은 촬영 완료 후 정산 안내를 드립니다.</p>
                </div>
              </div>
            </div>

            {/* 사진 사용 동의 안내 */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#4c3126] mb-2">
                사진 사용 동의 안내
              </h3>

              <div className="space-y-4 text-sm md:text-base text-[#4c3126]/90 leading-relaxed">
                <p>
                  뀨엠스냅은 고객님과 함께 만들어가는 순간을 소중히 생각합니다.
                  <br />
                  촬영한 사진 중 일부는 홍보용 콘텐츠로 사용될 수 있으며, 이를 통해 다른
                  가족분들과도 특별한 순간의 감동을 나누고자 합니다.
                </p>
                <p>
                  혹시 사진 활용을 원치 않으신다면, 예약 시 또는 촬영 전 미리 말씀해
                  주세요.
                  <br />
                  고객님의 선택을 존중하며, 편안하고 믿을 수 있는 촬영 경험을 위해
                  최선을 다하겠습니다.
                </p>
              </div>
            </div>

            {/* 그 외의 특수 사항 */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#4c3126] mb-2">
                그 외의 특수 사항
              </h3>

              <div className="space-y-4 text-sm md:text-base text-[#4c3126]/90 leading-relaxed">
                <p>
                  대표 작가가 부득이하게 부상, 1급 감염병, 천재지변 등 통제 불가한 사유로
                  인해 촬영이 불가능한 경우, 고객님과 협의하여 아래와 같이 진행됩니다.
                </p>
                <ul className="list-disc pl-5">
                  <li>예약금의 3배 금액 배상</li>
                  <li>혹은 다른 작가로 대체 촬영 진행</li>
                </ul>
                <p>
                  고객님의 소중한 날이 차질 없이 진행될 수 있도록, 가능한 모든 방법을
                  통해 최선을 다하겠습니다.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
