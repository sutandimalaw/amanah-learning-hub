import { Hero } from '@/components/site/Hero';
import { ServicesSection } from '@/components/site/ServicesSection';
import { TestimonialsSection } from '@/components/site/TestimonialsSection';
import { CTASection } from '@/components/site/CTASection';
import { InHouseTraining } from '@/components/site/InHouseTraining';

const Index = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <Hero />
      <InHouseTraining/>
      {/* <ServicesSection /> */}
      {/* <TestimonialsSection /> */}
      <CTASection />
    </div>
  );
};

export default Index;
