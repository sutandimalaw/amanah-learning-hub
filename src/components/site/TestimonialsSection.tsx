import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "PT Maju Sejahtera",
    position: "HR Manager",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Program pelatihan dari Yan Consulting sangat membantu meningkatkan produktivitas tim kami. Materi yang diberikan sangat aplikatif dan mudah dipahami."
  },
  {
    id: 2,
    name: "Ahmad Rizki",
    company: "CV Berkah Jaya",
    position: "Operations Director",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Trainer yang profesional dan berpengalaman. Metode pembelajaran yang interaktif membuat karyawan kami lebih antusias dalam mengikuti pelatihan."
  },
  {
    id: 3,
    name: "Maria Santi",
    company: "Tech Solutions Indo",
    position: "CEO",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "ROI yang sangat jelas setelah mengikuti program pelatihan. Tim menjadi lebih terorganisir dan efisien dalam menjalankan tugas-tugas mereka."
  },
  {
    id: 4,
    name: "Budi Hartono",
    company: "Manufacturing Plus",
    position: "Plant Manager",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Konsultasi yang diberikan sangat membantu kami dalam mengidentifikasi area yang perlu diperbaiki. Hasilnya sangat memuaskan dan terukur."
  }
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 fill-current" />
            Testimoni Klien
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Apa Kata
            <span className="gradient-text"> Klien Kami</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lebih dari 100 perusahaan telah merasakan manfaat nyata dari program pelatihan dan konsultasi kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-elegant p-8 relative group">
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg text-foreground mb-8 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Tingkat Kepuasan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Perusahaan Klien</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Repeat Customer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}