import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Heart, TrendingUp, Users, Zap, MessageSquare, Settings } from 'lucide-react';

const products = [
  { icon: Award, title: 'Training The Trainer', subtitle: 'Certification Program', description: 'Program sertifikasi untuk mengembangkan trainer internal yang kompeten dan profesional', features: ['Metodologi Training', 'Desain Kurikulum', 'Facilitation Skills', 'Assessment & Evaluation'], certification: true },
  { icon: Heart, title: 'Service Excellence', subtitle: 'Certification Program', description: 'Sertifikasi pelayanan prima untuk menciptakan pengalaman pelanggan yang luar biasa', features: ['Customer Experience', 'Service Recovery', 'Communication Skills', 'Quality Standards'], certification: true },
  { icon: TrendingUp, title: 'Sales Cycle/Process', subtitle: 'Certification Program', description: 'Program sertifikasi untuk menguasai seluruh proses penjualan yang efektif', features: ['Sales Pipeline', 'Lead Generation', 'Closing Techniques', 'Account Management'], certification: true },
  { icon: Users, title: 'Leadership Development', subtitle: 'Comprehensive Program', description: 'Program pengembangan kepemimpinan yang komprehensif untuk semua level manajemen', features: ['Strategic Leadership', 'Team Management', 'Change Leadership', 'Performance Management'] },
  { icon: Zap, title: 'Coaching Skills', subtitle: 'Professional Program', description: 'Mengembangkan kemampuan coaching untuk memberdayakan dan mengembangkan tim', features: ['Coaching Methodology', 'Active Listening', 'Powerful Questions', 'Goal Setting'] },
  { icon: MessageSquare, title: 'Public Speaking & Communication', subtitle: 'Excellence Program', description: 'Program untuk menguasai seni berbicara di depan umum dan komunikasi yang persuasif', features: ['Presentation Skills', 'Persuasive Communication', 'Body Language', 'Audience Engagement'] },
  { icon: Settings, title: 'Custom Material Request', subtitle: 'Tailored Solution', description: 'Pengembangan materi pelatihan khusus sesuai dengan kebutuhan spesifik organisasi Anda', features: ['Needs Analysis', 'Custom Content', 'Industry Specific', 'Flexible Delivery'] },
];

export function ProductsSection() {
  return (
    <section id="produk" className="mb-8">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">Produk Pelatihan</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Program & Sertifikasi</h2>
          <p className="text-lg max-w-3xl mx-auto">Portofolio lengkap program pelatihan dan sertifikasi untuk mengembangkan kompetensi SDM secara berkelanjutan</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card key={index} className="card-elegant scale-on-hover h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    {product.certification && <Badge className="bg-yellow-100 text-yellow-800">Sertifikasi</Badge>}
                  </div>
                  <CardTitle className="text-xl text-foreground">{product.title}</CardTitle>
                  <p className="text-primary font-semibold text-sm">{product.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed text-sm">{product.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-xs uppercase tracking-wide">Komponen Utama:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
