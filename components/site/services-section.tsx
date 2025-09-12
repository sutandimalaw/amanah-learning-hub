import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Heart } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Salesmanship',
    description: 'Program pelatihan komprehensif untuk meningkatkan kemampuan penjualan tim Anda',
    topics: [
      'Non-Sales (Technical & Functional Sales)',
      'Strategic Selling',
      'Sales Process & Pipeline Management',
      'Negotiation & Closing Techniques',
      'Handling Objections',
      'Sales Motivation & Mindset'
    ]
  },
  {
    icon: Users,
    title: 'Leadership',
    description: 'Mengembangkan pemimpin yang efektif dan inspiratif untuk organisasi yang lebih kuat',
    topics: [
      'Supervisor & Manager Development',
      'Leading with Values',
      'Transformational Leadership',
      'Managing Change & Conflict',
      'Leader as a Coach',
      'Building Impactful Leadership'
    ]
  },
  {
    icon: Heart,
    title: 'Service Excellence',
    description: 'Membangun budaya pelayanan prima yang memberikan pengalaman luar biasa kepada pelanggan',
    topics: [
      'Service Culture Building',
      'Handling Customer Complaints',
      'Frontliner Professionalism',
      'Customer Delight Strategy',
      'Persuasive Communication',
      'Service Recovery Excellence'
    ]
  }
];

export function ServicesSection() {
  return (
    <section id="layanan" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">Layanan Kami</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Program Pelatihan Profesional
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Solusi pelatihan yang terpersonalisasi untuk mengembangkan kompetensi dan performa tim Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-elegant scale-on-hover h-full">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                      Topik Pelatihan:
                    </h4>
                    <ul className="space-y-2">
                      {service.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-sm text-muted-foreground leading-relaxed">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="card-elegant bg-gradient-subtle border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Siap Meningkatkan Performa Tim Anda?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Konsultasikan kebutuhan pelatihan Anda dengan tim ahli kami. Dapatkan program yang disesuaikan 
                dengan tantangan dan tujuan spesifik organisasi Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/6281282285805" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-hero inline-flex items-center justify-center text-decoration-none"
                >
                  Konsultasi Gratis
                </a>
                <a 
                  href="/kontak"
                  className="btn-outline-hero inline-flex items-center justify-center text-decoration-none"
                >
                  Hubungi Kami
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}