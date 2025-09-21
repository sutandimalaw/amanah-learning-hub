import { ProfileSection } from '@/components/site/ProfileSection';
import { AboutSection } from '@/components/site/AboutSection';

const Profil = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <AboutSection/>
      <ProfileSection />
    </div>
  );
};

export default Profil;
