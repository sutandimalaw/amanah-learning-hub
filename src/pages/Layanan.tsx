import { ServicesSection } from '@/components/site/ServicesSection';
import { MethodsSection } from '@/components/site/MethodsSection';
import { AdvantagesSection } from '@/components/site/AdvantagesSection';
import { TrainerSection } from '@/components/site/TrainerSection';
import { ProductsSection } from '@/components/site/ProductsSection';

const Layanan = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <ServicesSection />
      <MethodsSection />
      <AdvantagesSection />
      <TrainerSection />
      <ProductsSection />
    </div>
  );
};

export default Layanan;
