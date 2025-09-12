import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-consulting.jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Amanah Learning Partner
              </div>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                Partner Strategis
                <span className="text-primary block">Pengembangan SDM</span>
                yang Amanah & Terpercaya
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Yan Consulting hadir sejak 2023 memberikan solusi pelatihan yang terpercaya, praktis,
                dan berdampak langsung terhadap performa individu dan tim Anda.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/layanan">
                <Button className="btn-hero group">
                  Jelajahi Layanan
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/profil">
                <Button className="outline-hero btn-outline-hero">Profil Perusahaan</Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/20">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Klien Terpuaskan</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">7+</div>
                <div className="text-sm text-muted-foreground">Trainer Profesional</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Ilustrasi profesional konsultasi bisnis"
                className="rounded-2xl shadow-glow scale-on-hover w-full h-auto"
                loading="eager"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-20" />
    </section>
  );
}
