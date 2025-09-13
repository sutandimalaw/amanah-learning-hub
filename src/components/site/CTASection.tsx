import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-accent">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            {/* Main CTA Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-white">
                Siap Meningkatkan
                <br />
                <span className="text-white/90">Kapabilitas Tim Anda?</span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Bergabunglah dengan 100+ perusahaan yang telah merasakan transformasi 
                nyata melalui program pelatihan berkualitas tinggi dari Yan Consulting.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/kontak">
                <Button className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 rounded-2xl shadow-brand group">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Konsultasi Gratis
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              
              <a href="tel:+6281234567890">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white text-lg px-10 py-6 rounded-2xl">
                  <Phone className="w-6 h-6 mr-3" />
                  Hubungi Sekarang
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-white/70">Klien Terpuaskan</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">7+</div>
                <div className="text-white/70">Trainer Berpengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">2+</div>
                <div className="text-white/70">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}