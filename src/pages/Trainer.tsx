import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  BookOpen, 
  Star, 
  Briefcase, 
  GraduationCap, 
  Phone,
  Mail,
  Sparkles,
  CheckCircle
} from 'lucide-react';

const trainers = [
  {
    id: 1,
    name: 'Yayan Hendrayana, S.AB, MA',
    role: 'Founder & Master Trainer',
    avatar: '/placeholder.svg?height=300&width=300',
    experience: '15+ Tahun',
    certifications: ['Certified Assessor BNSP', 'Certified Trainer BNSP', 'Coaching Practitionaire'],
    specializations: [
      'Personal Branding',
      'Master Public Speaking',
      'Leadership Development',
      'Sales Excellence',
      'Corporate Training'
    ],
    bio: 'Dengan pengalaman lebih dari 15 tahun di bidang pengembangan SDM, Yayan telah melatih ribuan profesional dari berbagai industri. Beliau memiliki keahlian khusus dalam mengembangkan program pelatihan yang aplikatif dan sesuai dengan kebutuhan bisnis.',
    achievements: ['1000+ Peserta Terlatih', '50+ Perusahaan Klien', '25+ Program Dikembangkan'],
    contact: {
      phone: '+62 812 8228 5805',
      email: 'yayan180785@gmail.com'
    }
  },
  {
    id: 2,
    name: 'Coach Ewink',
    role: 'Senior Trainer',
    avatar: '/placeholder.svg?height=300&width=300',
    experience: '10+ Tahun',
    certifications: ['Certified Public Speaker', 'Sales Excellence Trainer'],
    specializations: [
      'Public Speaking',
      'Presentation Skills',
      'Motivation Training',
      'Selling Techniques',
      'Leadership Coaching'
    ],
    bio: 'Coach Ewink adalah seorang trainer berpengalaman dengan keahlian khusus dalam public speaking dan sales training. Metode pelatihan yang interaktif dan engaging membuatnya menjadi salah satu trainer favorit klien.',
    achievements: ['800+ Peserta Terlatih', '40+ Workshop', '95% Rating Kepuasan'],
    contact: {
      phone: '+62 812 0000 0001',
      email: 'ewink@yanconsulting.com'
    }
  },
  {
    id: 3,
    name: 'Coach Mukti',
    role: 'HR Development Specialist',
    avatar: '/placeholder.svg?height=300&width=300',
    experience: '12+ Tahun',
    certifications: ['MSDM Expert', 'Leadership Coach', 'Training for Trainer'],
    specializations: [
      'MSDM (Manajemen Sumber Daya Manusia)',
      'Public Speaking',
      'Leadership Development',
      'Training for Trainer',
      'Performance Management'
    ],
    bio: 'Dengan latar belakang yang kuat di bidang MSDM, Coach Mukti memiliki keahlian dalam merancang program pengembangan karyawan yang komprehensif dan sesuai dengan kebutuhan organisasi.',
    achievements: ['600+ Peserta Terlatih', '30+ Perusahaan', 'HR Excellence Award'],
    contact: {
      phone: '+62 812 0000 0002',
      email: 'mukti@yanconsulting.com'
    }
  },
  {
    id: 4,
    name: 'Coach Norachmat',
    role: 'Leadership & Communication Expert',
    avatar: '/placeholder.svg?height=300&width=300',
    experience: '8+ Tahun',
    certifications: ['Leadership Excellence', 'Communication Specialist', 'Curriculum Designer'],
    specializations: [
      'Leadership Training',
      'Effective Communication',
      'Critical Thinking',
      'Curriculum Design',
      'Strategic Planning'
    ],
    bio: 'Coach Norachmat adalah ahli dalam pengembangan kepemimpinan dan komunikasi efektif. Pendekatan yang sistematis dan terstruktur membuatnya mampu menghasilkan program pelatihan yang berkualitas tinggi.',
    achievements: ['500+ Peserta Terlatih', '20+ Kurikulum Dirancang', 'Excellence Trainer Award'],
    contact: {
      phone: '+62 812 0000 0003',
      email: 'norachmat@yanconsulting.com'
    }
  },
  {
    id: 5,
    name: 'Coach Fauzan',
    role: 'Sales & Motivation Trainer',
    avatar: '/placeholder.svg?height=300&width=300',
    experience: '7+ Tahun',
    certifications: ['Sales Excellence Certified', 'Motivational Speaker'],
    specializations: [
      'Public Speaking',
      'Presentation Excellence',
      'Motivation Training',
      'Selling Skills',
      'Team Leadership'
    ],
    bio: 'Coach Fauzan dikenal dengan kemampuannya dalam memotivasi dan mengembangkan tim sales. Pengalaman di berbagai industri membuatnya memahami tantangan nyata dalam dunia penjualan.',
    achievements: ['400+ Peserta Terlatih', '15+ Sales Team Dikembangkan', 'Top Trainer Award'],
    contact: {
      phone: '+62 812 0000 0004',
      email: 'fauzan@yanconsulting.com'
    }
  },
  {
    id: 6,
    name: 'Coach Shinta',
    role: 'Communication & Presentation Specialist',
    avatar: '/placeholder.svg?height=300&width=300',
    experience: '6+ Tahun',
    certifications: ['Communication Expert', 'Presentation Master'],
    specializations: [
      'Public Speaking',
      'Presentation Skills',
      'Motivation Training',
      'Customer Service',
      'Team Building'
    ],
    bio: 'Coach Shinta memiliki keahlian khusus dalam mengembangkan kemampuan komunikasi dan presentasi. Metode pelatihan yang kreatif dan interaktif membuatnya sangat diminati klien.',
    achievements: ['350+ Peserta Terlatih', '25+ Workshop', 'Best Female Trainer'],
    contact: {
      phone: '+62 812 0000 0005',
      email: 'shinta@yanconsulting.com'
    }
  },
  {
    id: 7,
    name: 'Coach Yunus',
    role: 'Leadership & Coaching Specialist',
    avatar: '/placeholder.svg?height=300&width=300',
    experience: '9+ Tahun',
    certifications: ['Leadership Coach', 'Graphology Expert', 'Professional Coach'],
    specializations: [
      'Leadership Development',
      'Effective Communication',
      'Public Speaking',
      'Graphology Analysis',
      'Professional Coaching'
    ],
    bio: 'Coach Yunus adalah trainer yang unik dengan keahlian graphology. Kombinasi leadership coaching dan analisis kepribadian membuatnya mampu memberikan insight yang mendalam untuk pengembangan individu.',
    achievements: ['450+ Peserta Terlatih', '100+ Analisis Kepribadian', 'Innovation Award'],
    contact: {
      phone: '+62 812 0000 0006',
      email: 'yunus@yanconsulting.com'
    }
  }
];

const Trainer = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Header Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="badge-primary mb-6">
              <Users className="w-4 h-4 mr-2" />
              Tim Trainer Profesional
            </div>
            <h1 className="text-3xl lg:text-5xl font-[Impact] tracking-widest text-foreground mb-8 leading-tight">
              TRAINER &
              <span className="text-primary block">ASSOCIATE</span>
            </h1>
            <p className="text-xl lg:text-1xl max-w-3xl mx-auto leading-relaxed font-sans">
              BERTEMU DENGAN TIM TRAINER PROFESIONAL KAMI YANG BERPENGALAMAN DAN BERSERTIFIKAT 
              UNTUK MEMBERIKAN PELATIHAN TERBAIK BAGI ORGANISASI ANDA
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Users, number: '7+', label: 'Trainer Profesional' },
              { icon: Award, number: '20+', label: 'Sertifikasi' },
              { icon: BookOpen, number: '100+', label: 'Program Pelatihan' },
              { icon: Star, number: '4.9/5', label: 'Rating Kepuasan' }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="card-premium text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-brand">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {trainers.map((trainer, index) => (
              <Card key={trainer.id} className="card-premium hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-6">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="relative">
                      {/* <img
                        src={trainer.avatar}
                        alt={trainer.name}
                        className="w-32 h-32 rounded-3xl object-cover shadow-brand"
                      /> */}
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                        {trainer.name}
                      </h3>
                      <p className="text-primary font-semibold mb-4">{trainer.role}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="border-primary/20 text-primary">
                          <Briefcase className="w-3 h-3 mr-1" />
                          {trainer.experience}
                        </Badge>
                        {trainer.certifications.slice(0, 2).map((cert, certIndex) => (
                          <Badge key={certIndex} variant="secondary" className="text-xs">
                            <GraduationCap className="w-3 h-3 mr-1" />
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="leading-relaxed">
                    {trainer.bio}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-primary" />
                      Spesialisasi:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {trainer.specializations.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-3 h-3 mr-2 text-primary flex-shrink-0" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-primary" />
                      Pencapaian:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {trainer.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center text-sm">
                          <Star className="w-3 h-3 mr-2 text-primary flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <Card className="card-premium bg-gradient-accent border-primary/20 shadow-brand">
            <CardContent className="p-12 text-center">
              <div className="max-w-4xl mx-auto">
                <div className="w-12 h-12 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-glow">
                  <Users className="w-6 h-6 text-white" />
                </div>
              <h3 className="text-3xl font-[impact] tracking-widest  text-foreground mb-6">
                  BUTUH TRAINER UNTUK PROGRAM KHUSUS?
                </h3>
                <p className="text-xl mb-10 leading-relaxed font-sans">
                  TIM TRAINER KAMI SIAP MEMBANTU MERANCANG DAN MELAKSANAKAN PROGRAM PELATIHAN 
                  YANG SESUAI DENGAN KEBUTUHAN SPESIFIK ORGANISASI ANDA.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button className=" text-lg px-10 py-4 rounded-2xl shadow-brand hover:shadow-glow">
                    <Phone className="w-5 h-5 mr-3" />
                    KONSULTASI SEKARANG
                  </Button>
                  <Button 
                    variant="outline" 
                    className="btn-outline-hero text-lg px-10 py-4 rounded-2xl"
                    onClick={() => window.location.href = '/kontak'}
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    HUBUNGI TIM
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Trainer;