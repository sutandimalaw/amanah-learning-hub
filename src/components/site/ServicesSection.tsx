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
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="badge-primary mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Layanan Kami
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
            Program Pelatihan
            <span className="text-primary block">Profesional</span>
          </h2>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Solusi pelatihan yang terpersonalisasi untuk mengembangkan kompetensi dan performa tim Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-10 ">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-premium hover-lift h-full group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-6">
                  <div className="w-12 h-12 rounded-3xl bg-primary flex items-center justify-center mb-6 shadow-brand group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-6 h- text-white" />
                  </div>
                  <CardTitle className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg  leading-relaxed">
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
                          <span className="leading-relaxed group-hover/item:text-foreground transition-colors">
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
      </div>
    </section>
  );
}
