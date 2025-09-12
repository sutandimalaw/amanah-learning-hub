'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'WhatsApp',
    detail: '+62 812 8228 5805',
    link: 'https://wa.me/6281282285805',
    description: 'Hubungi kami langsung untuk konsultasi cepat'
  },
  {
    icon: Mail,
    title: 'Email',
    detail: 'yayan180785@gmail.com',
    link: 'mailto:yayan180785@gmail.com',
    description: 'Kirim pertanyaan detail melalui email'
  },
  {
    icon: MapPin,
    title: 'Lokasi',
    detail: 'Bekasi, Indonesia',
    description: 'Melayani pelatihan di seluruh Indonesia'
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Formulir Belum Lengkap",
        description: "Mohon lengkapi semua field yang diperlukan.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email Tidak Valid",
        description: "Mohon masukkan alamat email yang valid.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Pesan Berhasil Dikirim!",
        description: "Terima kasih! Kami akan segera menghubungi Anda.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Gagal Mengirim Pesan",
        description: "Terjadi kesalahan. Mohon coba lagi atau hubungi kami langsung.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">Hubungi Kami</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Mari Berkolaborasi
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Siap untuk mengembangkan SDM organisasi Anda? Hubungi tim ahli kami untuk konsultasi 
            dan solusi pelatihan yang tepat sasaran.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Informasi Kontak</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="card-elegant">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                            {info.link ? (
                              <a 
                                href={info.link}
                                target={info.link.startsWith('http') ? '_blank' : '_self'}
                                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                className="text-primary hover:text-primary-dark font-medium transition-colors"
                              >
                                {info.detail}
                              </a>
                            ) : (
                              <p className="text-primary font-medium">{info.detail}</p>
                            )}
                            <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="card-elegant bg-gradient-subtle border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Jam Operasional</h3>
                    <div className="space-y-1 text-sm">
                      <p className="text-foreground">Senin - Jumat: 08:00 - 17:00 WIB</p>
                      <p className="text-foreground">Sabtu: 08:00 - 12:00 WIB</p>
                      <p className="text-muted-foreground">Minggu & Hari Libur: Tutup</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      *WhatsApp tersedia 24/7 untuk konsultasi darurat
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Kirim Pesan</CardTitle>
              <p className="text-muted-foreground">
                Ceritakan kebutuhan pelatihan Anda, dan kami akan memberikan solusi terbaik.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Nama Lengkap *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Masukkan nama lengkap Anda"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="nama@perusahaan.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Pesan *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Ceritakan kebutuhan pelatihan atau pertanyaan Anda..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-hero w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Kirim Pesan
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Dengan mengirim pesan, Anda menyetujui bahwa kami akan menghubungi Anda 
                  untuk memberikan informasi mengenai layanan pelatihan kami.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="card-elegant bg-background border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Butuh Konsultasi Segera?
              </h3>
              <p className="text-muted-foreground mb-6">
                Tim ahli kami siap membantu Anda menemukan solusi pelatihan yang tepat. 
                Konsultasi gratis tersedia melalui WhatsApp.
              </p>
              <a 
                href="https://wa.me/6281282285805?text=Halo%20Yan%20Consulting,%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20program%20pelatihan." 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-hero inline-flex items-center justify-center text-decoration-none"
              >
                <Phone className="w-5 h-5 mr-2" />
                Konsultasi via WhatsApp
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}