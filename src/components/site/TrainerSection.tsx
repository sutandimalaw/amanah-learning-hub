import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

const trainers = [
  { name: 'Yayan Hendrayana, MA', role: 'Founder & Master Trainer', avatar: 'YH', specialties: ['Certified Assessor/Trainer BNSP', 'Coaching Practitioner', 'Personal Branding', 'Master Public Speaking', 'Leadership Development', 'Strategic Training Design'], highlight: true },
  { name: 'Coach Ewink', role: 'Senior Trainer', avatar: 'EW', specialties: ['Public Speaking', 'Presentation Skills', 'Motivation & Mindset', 'Selling Techniques', 'Leadership Training'] },
  { name: 'Coach Mukti', role: 'HR & Leadership Specialist', avatar: 'MK', specialties: ['Manajemen SDM', 'Public Speaking', 'Leadership Development', 'Training For Trainer', 'Organizational Development'] },
  { name: 'Coach Norachmat', role: 'Leadership & Communication Expert', avatar: 'NR', specialties: ['Leadership Excellence', 'Strategic Communication', 'Critical Thinking', 'Curriculum Design', 'Team Building'] },
  { name: 'Coach Fauzan', role: 'Sales & Leadership Trainer', avatar: 'FZ', specialties: ['Public Speaking', 'Presentation Excellence', 'Motivation & Inspiration', 'Sales Leadership', 'Team Leadership'] },
  { name: 'Coach Shinta', role: 'Communication & Sales Specialist', avatar: 'SH', specialties: ['Public Speaking', 'Presentation Skills', 'Sales Motivation', 'Customer Service', 'Professional Communication'] },
  { name: 'Coach Yunus', role: 'Leadership & Coaching Expert', avatar: 'YN', specialties: ['Leadership Development', 'Strategic Communication', 'Public Speaking', 'Graphology Analysis', 'Coaching Skills'] },
];

export function TrainerSection() {
  return (
    <section id="trainer" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">Tim Trainer</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Trainer & Associate Profesional</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Tim trainer berpengalaman dengan keahlian khusus di berbagai bidang pengembangan SDM</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <Card key={index} className={`card-elegant scale-on-hover ${trainer.highlight ? 'border-primary/50 shadow-glow' : ''}`}>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 ${trainer.highlight ? 'bg-gradient-primary' : 'bg-primary/20'}`}>
                    <span className={`text-2xl font-bold ${trainer.highlight ? 'text-white' : 'text-primary'}`}>{trainer.avatar}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{trainer.name}</h3>
                  <p className="text-primary font-semibold text-sm">{trainer.role}</p>
                  {trainer.highlight && (
                    <div className="flex justify-center mt-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-xs uppercase tracking-wide">Keahlian:</h4>
                  <div className="flex flex-wrap gap-1">
                    {trainer.specialties.map((specialty, i) => (
                      <span key={i} className="bg-secondary text-foreground/80 text-xs py-1 px-2 rounded-md">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
