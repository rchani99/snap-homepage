// src/app/services/page.tsx
import React from 'react';
import Container from '@/components/ui/Container';
import services from '@/data/services.json';

export default function ServicesPage() {
  return (
    <main>
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold">상품안내</h1>
            <p className="mt-2 text-gray-600">촬영 패키지와 옵션을 확인하세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.slug} className="rounded-2xl bg-white p-6 shadow">
                <h3 className="text-xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-gray-600">{s.description}</p>
                <p className="mt-4 font-medium">₩{s.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
