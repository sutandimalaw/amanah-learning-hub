import { ServicesSection } from '@/components/site/services-section';
import { MethodsSection } from '@/components/site/methods-section';
import { AdvantagesSection } from '@/components/site/advantages-section';
import { TrainerSection } from '@/components/site/trainer-section';
import { ProductsSection } from '@/components/site/products-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layanan - Yan Consulting',
  description: 'Layanan pelatihan profesional Yan Consulting: Salesmanship, Leadership, Service Excellence. Metode training offline, online, dan hybrid dengan trainer berpengalaman.',
};

export default function LayananPage() {
  return (
    <div className="pt-20">
      <ServicesSection />
      <MethodsSection />
      <AdvantagesSection />
      <TrainerSection />
      <ProductsSection />
    </div>
  );
}