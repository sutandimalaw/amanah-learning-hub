import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Award, Lightbulb, BookOpen, TrendingUp, ShieldCheck, Heart } from 'lucide-react';
import founder from '@/assets/founder.png';

const coreValues = [
  { icon: Lightbulb, value: 'Aspiratif', description: 'Melayani sepenuh hati dengan semangat tinggi' },
  { icon: BookOpen, value: 'Aktual', description: 'Materi dan metode yang relevan dengan kebutuhan masa kini' },
  { icon: TrendingUp, value: 'Nilai Tambah', description: 'Memberikan manfaat nyata bagi pengembangan SDM' },
  { icon: ShieldCheck, value: 'Amanah', description: 'Dapat dipercaya dalam setiap komitmen dan layanan' },
  { icon: Target, value: 'Hasil', description: 'Fokus pada pencapaian hasil yang terukur dan berkelanjutan' },
  { icon: Heart, value: 'Humanis', description: 'Pendekatan yang mengutamakan nilai-nilai kemanusiaan' },
];

const missionPoints = [
  'Menyediakan program pelatihan dan konsultasi yang aplikatif dan relevan dengan kebutuhan industri',
  'Mengedepankan nilai amanah, integritas, dan hasil nyata dalam setiap layanan kami',
  'Mendorong pertumbuhan profesionalisme individu melalui pelatihan berbasis kompetensi',
  'Mendukung organisasi menciptakan budaya kerja yang produktif dan customer-oriented',
];

export function ProfileSection() {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <Card className="card-elegant mb-12">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Visi</h3>
                <p className="text-lg text-foreground leading-relaxed">
                  Menjadi mitra strategis pengembangan SDM yang amanah dan terpercaya di Indonesia dalam
                  membangun organisasi pembelajar dan berdaya saing.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="card-elegant mb-12">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-6">Misi</h3>
                <div className="grid gap-4">
                  {missionPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-primary">{index + 1}</span>
                      </div>
                      <p className="text-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mb-8">
          <h3 className="text-3xl font-[impact] tracking-wider text-foreground mb-4">CORE VALUE 
           <br/><span className='text-primary'>AMANAH</span></h3>
          
          <p className="text-muted-foreground">Nilai-nilai fundamental yang menjadi landasan setiap layanan kami</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((item, index) => (
            <Card key={index} className="card-elegant scale-on-hover">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{item.value}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
