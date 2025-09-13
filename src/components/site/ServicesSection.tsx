import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Heart, Sparkles } from 'lucide-react';

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
      'Sales Motivation & Mindset',
    ],
    gradient: 'from-blue-500 to-indigo-600'
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
      'Building Impactful Leadership',
    ],
    gradient: 'from-purple-500 to-pink-600'
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
      'Service Recovery Excellence',
    ],
    gradient: 'from-green-500 to-teal-600'
  },
];

export function ServicesSection() {
  return (
    <section id="layanan" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Premium Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="badge-primary mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Layanan Kami
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
            Program Pelatihan
            <span className="gradient-text block">Profesional</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Solusi pelatihan yang terpersonalisasi untuk mengembangkan kompetensi dan performa tim Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-premium hover-lift h-full group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-primary flex items-center justify-center mb-6 shadow-brand group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider flex items-center">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3" />
                      Topik Pelatihan:
                    </h4>
                    <ul className="space-y-3">
                      {service.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start space-x-3 group/item">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2.5 group-hover/item:scale-150 transition-transform" />
                          <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                            {topic}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Premium CTA Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Card className="card-premium bg-gradient-accent border-primary/20 shadow-brand">
            <CardContent className="p-12">
              <div className="max-w-4xl mx-auto">
                <div className="w-16 h-16 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-glow">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-display font-bold text-foreground mb-6">
                  Siap Meningkatkan Performa Tim Anda?
                </h3>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  Konsultasikan kebutuhan pelatihan Anda dengan tim ahli kami. Dapatkan program yang disesuaikan 
                  dengan tantangan dan tujuan spesifik organisasi Anda.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="https://wa.me/6281282285805" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-hero inline-flex items-center justify-center text-lg px-10 py-4 rounded-2xl shadow-brand hover:shadow-glow"
                  >
                    Konsultasi Gratis
                  </a>
                  <a 
                    href="/kontak"
                    className="btn-outline-hero inline-flex items-center justify-center text-lg px-10 py-4 rounded-2xl"
                  >
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
