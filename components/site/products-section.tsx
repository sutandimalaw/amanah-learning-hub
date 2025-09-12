import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Heart, TrendingUp, Users, Zap, MessageSquare, Settings } from 'lucide-react';

const products = [
  {
    icon: Award,
    title: 'Training The Trainer',
    subtitle: 'Certification Program',
    description: 'Program sertifikasi untuk mengembangkan trainer internal yang kompeten dan profesional',
    features: ['Metodologi Training', 'Desain Kurikulum', 'Facilitation Skills', 'Assessment & Evaluation'],
    certification: true
  },
  {
    icon: Heart,
    title: 'Service Excellence',
    subtitle: 'Certification Program',
    description: 'Sertifikasi pelayanan prima untuk menciptakan pengalaman pelanggan yang luar biasa',
    features: ['Customer Experience', 'Service Recovery', 'Communication Skills', 'Quality Standards'],
    certification: true
  },
  {
    icon: TrendingUp,
    title: 'Sales Cycle/Process',
    subtitle: 'Certification Program',
    description: 'Program sertifikasi untuk menguasai seluruh proses penjualan yang efektif',
    features: ['Sales Pipeline', 'Lead Generation', 'Closing Techniques', 'Account Management'],
    certification: true
  },
  {
    icon: Users,
    title: 'Leadership Development',
    subtitle: 'Comprehensive Program',
    description: 'Program pengembangan kepemimpinan yang komprehensif untuk semua level manajemen',
    features: ['Strategic Leadership', 'Team Management', 'Change Leadership', 'Performance Management']
  },
  {
    icon: Zap,
    title: 'Coaching Skills',
    subtitle: 'Professional Program',
    description: 'Mengembangkan kemampuan coaching untuk memberdayakan dan mengembangkan tim',
    features: ['Coaching Methodology', 'Active Listening', 'Powerful Questions', 'Goal Setting']
  },
  {
    icon: MessageSquare,
    title: 'Public Speaking & Communication',
    subtitle: 'Excellence Program',
    description: 'Program untuk menguasai seni berbicara di depan umum dan komunikasi yang persuasif',
    features: ['Presentation Skills', 'Persuasive Communication', 'Body Language', 'Audience Engagement']
  },
  {
    icon: Settings,
    title: 'Custom Material Request',
    subtitle: 'Tailored Solution',
    description: 'Pengembangan materi pelatihan khusus sesuai dengan kebutuhan spesifik organisasi Anda',
    features: ['Needs Analysis', 'Custom Content', 'Industry Specific', 'Flexible Delivery']
  }
];

export function ProductsSection() {
  return (
    <section id="produk" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">Produk Pelatihan</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Program & Sertifikasi
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Portofolio lengkap program pelatihan dan sertifikasi untuk mengembangkan kompetensi 
            SDM secara berkelanjutan
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card key={index} className="card-elegant scale-on-hover h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {product.certification && (
                      <Badge className="bg-yellow-100 text-yellow-800">
                        Sertifikasi
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-foreground">{product.title}</CardTitle>
                  <p className="text-primary font-semibold text-sm">{product.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {product.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-xs uppercase tracking-wide">
                      Komponen Utama:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certification Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="card-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Program Sertifikasi Profesional
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Sertifikat Resmi</p>
                    <p className="text-sm text-muted-foreground">
                      Sertifikat yang diakui industri dan dapat digunakan untuk pengembangan karir
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Trainer Tersertifikasi</p>
                    <p className="text-sm text-muted-foreground">
                      Dipandu oleh trainer dengan sertifikasi BNSP dan pengalaman internasional
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Standar Kompetensi</p>
                    <p className="text-sm text-muted-foreground">
                      Mengacu pada standar kompetensi nasional dan internasional
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant bg-gradient-subtle border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Konsultasi Program Khusus
              </h3>
              <p className="text-muted-foreground mb-6">
                Tidak menemukan program yang sesuai? Kami dapat mengembangkan program pelatihan 
                khusus yang disesuaikan dengan kebutuhan spesifik organisasi Anda.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <span className="text-sm text-foreground">Analisis kebutuhan mendalam</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <span className="text-sm text-foreground">Desain program kustomisasi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <span className="text-sm text-foreground">Implementasi dan evaluasi</span>
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href="https://wa.me/6281282285805" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-hero inline-flex items-center justify-center w-full text-decoration-none"
                >
                  Konsultasi Program Khusus
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}