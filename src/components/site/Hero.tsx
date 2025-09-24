import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles, Users, Target, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import yanImage from '@/assets/logo_yc.png';


export function Hero() {
  return (
    <>
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10 text-center lg:text-left animate-fade-in-up">
            <div className="space-y-6">
              <div className="badge-primary">
                <Sparkles className="w-4 h-4 mr-2" />
                Amanah Learning Partner
              </div>
              
            <h1 className="text-4xl lg:text-5xl xl:text-5xl font-[Impact] tracking-widest " >
                <span className="text-foreground">PARTNER STATEGIS</span>
                <br />
                <span className="">PENGEMBAHAN SDM</span>
                <br />
                  YANG<span className="text-primary"> AMANAH</span> & TERPERCAYA
              </h1>
              
  <p className=" lg:text-1xl  max-w-1xl mx-auto lg:mx-0 leading-relaxed font-sans" >
                YAN CONSULTING HADIR SEJAK 2023 MEMBERIKAN SOLUSI PELATIHAN YANG TERPERCAYA, PRAKTIS,
                DAN BERDAMPAK LANGSUNG TERHADAP PERFORMA INDIVIDU DAN TIM ANDA.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link to="/layanan">
                <Button className="btn-primary group text-lg px-10 py-6 rounded-2xl">
                  Jelajahi Layanan
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/profil">
                <Button className="bg-white text-primary hover:bg-red-800 hover:text-white text-lg px-10 py-6 rounded-2xl shadow-brand group">
                  Profil Perusahaan
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/30">
              <div className="text-center lg:text-left group">
                <div className="text-2xl lg:text-4xl font-bold group-hover:scale-110 transition-transform duration-300">2+</div>
                <div className="text-base text-muted-foreground font-medium">Tahun Pengalaman</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-4xl lg:text-4xl font-bold  group-hover:scale-110 transition-transform duration-300">100+</div>
                <div className="text-base text-muted-foreground font-medium">Klien Terpuaskan</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-4xl lg:text-4xl font-bold  group-hover:scale-110 transition-transform duration-300">7+</div>
                <div className="text-base text-muted-foreground font-medium">Trainer Profesional</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:pl-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-20">
              <div className="relative group">
                <div>
                <img
                  src={yanImage}
                  alt="Ilustrasi profesional konsultasi bisnis"
                  className="rounded-3xl shadow-brand hover-glow w-full h-auto transition-all duration-500 group-hover:scale-105"
                  loading="eager"
                />
                </div>
               
                <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-accent rounded-3xl -z-10 animate-float" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-3xl -z-10 animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 -right-4 w-24 h-24 bg-primary-100 rounded-2xl -z-10 animate-float" style={{ animationDelay: '4s' }} />
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/3 to-transparent -z-10" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-20" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl -z-20" />
    </section>
  </>
);
}
