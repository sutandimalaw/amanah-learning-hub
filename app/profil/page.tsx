import { ProfileSection } from '@/components/site/profile-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profil Perusahaan - Yan Consulting',
  description: 'Tentang Yan Consulting: Perusahaan training dan consulting yang hadir sejak 2023 dengan komitmen menjadi mitra terbaik dalam pengembangan SDM di Indonesia.',
};

export default function ProfilPage() {
  return (
    <div className="pt-20">
      <ProfileSection />
    </div>
  );
}