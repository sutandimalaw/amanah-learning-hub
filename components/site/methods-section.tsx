import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, Users, Zap, Award } from 'lucide-react';

const methods = [
  {
    icon: Users,
    title: 'Offline Training',
    description: 'Pelatihan tatap muka langsung dengan interaksi maksimal dan praktik intensif'
  },
  {
    icon: Monitor,
    title: 'Online Training',
    description: 'Pembelajaran virtual yang fleksibel dengan teknologi terdepan dan materi interaktif'
  },
  {
    icon: Zap,
    title: 'Hybrid Learning',
    description: 'Kombinasi metode offline dan online untuk pengalaman belajar yang optimal'
  },
  {
    icon: Award,
    title: 'Uji Kompetensi',
    description: 'Evaluasi dan sertifikasi kemampuan peserta dengan standar industri'
  }
];

export function MethodsSection() {
  return (
    <section id="metode" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">Metode Pelatihan</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Fleksibilitas Metode Pembelajaran
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami menyediakan berbagai metode pelatihan yang dapat disesuaikan dengan kebutuhan dan preferensi organisasi Anda
          </p>
        </div>

        {/* Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={index} className="card-elegant scale-on-hover text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{method.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="card-elegant bg-background border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Metode yang Disesuaikan dengan Kebutuhan Anda
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Setiap organisasi memiliki karakteristik dan kebutuhan yang unik. Tim kami akan membantu Anda 
                menentukan metode pelatihan yang paling efektif, baik itu format onsite di lokasi Anda, 
                online untuk jangkauan yang lebih luas, atau kombinasi keduanya untuk hasil yang optimal.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}