import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Wrench, Star, Building, Laptop } from 'lucide-react';

const advantages = [
  {
    icon: Target,
    title: 'Materi Berbasis Kebutuhan Industri',
    description: 'Kurikulum yang dirancang sesuai dengan tantangan dan kebutuhan nyata di dunia kerja'
  },
  {
    icon: Wrench,
    title: 'Pendekatan Praktis & Aplikatif',
    description: 'Metode pembelajaran yang mengutamakan praktik langsung dan implementasi nyata'
  },
  {
    icon: Star,
    title: 'Fasilitator Berpengalaman',
    description: 'Trainer profesional dengan track record dan pengalaman industri yang terbukti'
  },
  {
    icon: Building,
    title: 'Modul Sesuai Budaya Perusahaan',
    description: 'Materi yang disesuaikan dengan nilai-nilai dan budaya organisasi Anda'
  },
  {
    icon: Laptop,
    title: 'Format Pembelajaran Fleksibel',
    description: 'Pilihan format onsite, online, atau blended learning sesuai kebutuhan'
  }
];

export function AdvantagesSection() {
  return (
    <section id="keunggulan" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">Keunggulan Kami</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Mengapa Memilih Yan Consulting?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Komitmen kami terhadap kualitas dan hasil yang terukur menjadikan kami partner terpercaya 
            dalam pengembangan SDM
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <Card key={index} className="card-elegant scale-on-hover">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Highlight Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="card-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Pendekatan yang Berpusat pada Hasil
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Analisis Kebutuhan:</strong> Kami melakukan assessment mendalam 
                    untuk memahami tantangan spesifik organisasi Anda
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Desain Kustomisasi:</strong> Program dirancang khusus sesuai 
                    dengan profil peserta dan tujuan bisnis
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Evaluasi Berkelanjutan:</strong> Monitoring dan evaluasi 
                    pasca pelatihan untuk memastikan implementasi yang efektif
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant bg-gradient-subtle border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Komitmen Kualitas
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">100%</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Kepuasan Klien</p>
                    <p className="text-sm text-muted-foreground">Berdasarkan feedback peserta</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">24/7</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Support</p>
                    <p className="text-sm text-muted-foreground">Konsultasi pasca pelatihan</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">2+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Tahun Pengalaman</p>
                    <p className="text-sm text-muted-foreground">Melayani berbagai industri</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}