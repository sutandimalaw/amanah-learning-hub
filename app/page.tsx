import { Hero } from '@/components/site/hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yan Consulting - Partner Strategis Pengembangan SDM yang Amanah & Terpercaya',
  description: 'Yan Consulting hadir sejak 2023 sebagai mitra terbaik dalam pengembangan Sumber Daya Manusia di Indonesia. Amanah Learning Partner untuk pelatihan Leadership, Sales, dan Service Excellence.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}