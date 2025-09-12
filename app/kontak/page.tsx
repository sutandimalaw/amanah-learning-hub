import { ContactSection } from '@/components/site/contact-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontak - Yan Consulting',
  description: 'Hubungi Yan Consulting untuk konsultasi dan informasi layanan pelatihan. WhatsApp: +62 812 8228 5805, Email: yayan180785@gmail.com',
};

export default function KontakPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}