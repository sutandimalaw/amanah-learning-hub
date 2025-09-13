import { Hero } from '@/components/site/Hero';
import { ServicesSection } from '@/components/site/ServicesSection';
import { CTASection } from '@/components/site/CTASection';

const Index = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <Hero />
      <ServicesSection />
      <CTASection />
    </div>
  );
};

export default Index;
