import { AboutSection } from '@/components/site/AboutSection';
import { ServicesSection } from '@/components/site/ServicesSection';
import { MethodsSection } from '@/components/site/MethodsSection';
import { AdvantagesSection } from '@/components/site/AdvantagesSection';
import { ProductsSection } from '@/components/site/ProductsSection';

const Layanan = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* <AboutSection /> */}
      <ServicesSection />
      <MethodsSection />
      <AdvantagesSection />
      <ProductsSection />
    </div>
  );
};

export default Layanan;
