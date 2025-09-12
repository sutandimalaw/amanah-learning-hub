import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Heart, Star, Award, TrendingUp } from 'lucide-react';

const coreValues = [
  { letter: 'A', value: 'Aspiratif', description: 'Melayani sepenuh hati dengan semangat tinggi' },
  { letter: 'M', value: 'Aktual', description: 'Materi dan metode yang relevan dengan kebutuhan masa kini' },
  { letter: 'A', value: 'Nilai Tambah', description: 'Memberikan manfaat nyata bagi pengembangan SDM' },
  { letter: 'N', value: 'Amanah', description: 'Dapat dipercaya dalam setiap komitmen dan layanan' },
  { letter: 'A', value: 'Hasil', description: 'Fokus pada pencapaian hasil yang terukur dan berkelanjutan' },
  { letter: 'H', value: 'Humanis', description: 'Pendekatan yang mengutamakan nilai-nilai kemanusiaan' },
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
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">Profil Perusahaan</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tentang Yan Consulting
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Perusahaan training dan consulting yang berkomitmen menjadi mitra terbaik dalam pengembangan SDM di Indonesia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Company Description */}
          <Card className="card-elegant">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Sejak 2023</h3>
                    <p className="text-muted-foreground">Amanah Learning Partner</p>
                  </div>
                </div>
                
                <p className="text-foreground leading-relaxed">
                  Yan Consulting adalah perusahaan training dan consulting hadir sejak tahun 2023 yang berkomitmen 
                  menjadi mitra terbaik dalam pengembangan Sumber Daya Manusia di Indonesia.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  Dengan tagline "AMANAH LEARNING PARTNER", kami hadir memberikan solusi pelatihan yang terpercaya, 
                  praktis, dan berdampak langsung terhadap performa individu dan tim.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  Kami percaya bahwa kunci kesuksesan organisasi terletak pada kualitas manusianya. Oleh karena itu, 
                  kami mengembangkan program-program pelatihan yang fokus pada peningkatan penjualan, pemasaran, 
                  pelayanan prima, kepemimpinan, dan coaching skill.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Director Info */}
          <Card className="card-elegant">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">YH</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Yayan Hendrayana, S.AB, MA</h3>
                  <p className="text-primary font-semibold">Direktur YAN Consulting</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Certified Assessor BNSP</Badge>
                  <Badge variant="secondary">Master Trainer</Badge>
                  <Badge variant="secondary">Coaching Practitioner</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vision */}
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

        {/* Mission */}
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

        {/* Core Values */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-4">Core Value "AMANAH"</h3>
          <p className="text-muted-foreground">Nilai-nilai fundamental yang menjadi landasan setiap layanan kami</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((item, index) => (
            <Card key={index} className="card-elegant scale-on-hover">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.letter}</span>
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