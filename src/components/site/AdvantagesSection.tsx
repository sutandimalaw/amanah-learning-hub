import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Wrench, Star, Building, Laptop } from 'lucide-react';

const advantages = [
  { icon: Target, title: 'Materi Berbasis Kebutuhan Industri', description: 'Kurikulum yang dirancang sesuai dengan tantangan dan kebutuhan nyata di dunia kerja' },
  { icon: Wrench, title: 'Pendekatan Praktis & Aplikatif', description: 'Metode pembelajaran yang mengutamakan praktik langsung dan implementasi nyata' },
  { icon: Star, title: 'Fasilitator Berpengalaman', description: 'Trainer profesional dengan track record dan pengalaman industri yang terbukti' },
  { icon: Building, title: 'Modul Sesuai Budaya Perusahaan', description: 'Materi yang disesuaikan dengan nilai-nilai dan budaya organisasi Anda' },
  { icon: Laptop, title: 'Format Pembelajaran Fleksibel', description: 'Pilihan format onsite, online, atau blended learning sesuai kebutuhan' },
];

export function AdvantagesSection() {
  return (
    <section id="keunggulan" className="py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">Keunggulan Kami</Badge>
          <h2 className="text-4xl lg:text-5xl font-[Impact] tracking-widest  text-foreground mb-6">MENGAPA MEMILIH YAN CONSULTING?</h2>
          <p className="text-lg max-w-3xl mx-auto font-sans">
            KOMITMEN KAMI TERHADAP KUALITAS DAN HASIL YANG TERUKUR MENJADIKAN KAMI PARTNER TERPERCAYA DALAM PENGEMBANGAN SDM
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <Card key={index} className="card-elegant scale-on-hover">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{advantage.title}</h3>
                  <p className="leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
