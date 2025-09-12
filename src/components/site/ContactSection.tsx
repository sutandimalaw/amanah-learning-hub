import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';

const contactInfo = [
  { icon: Phone, title: 'WhatsApp', detail: '+62 812 8228 5805', link: 'https://wa.me/6281282285805', description: 'Hubungi kami langsung untuk konsultasi cepat' },
  { icon: Mail, title: 'Email', detail: 'yayan180785@gmail.com', link: 'mailto:yayan180785@gmail.com', description: 'Kirim pertanyaan detail melalui email' },
  { icon: MapPin, title: 'Lokasi', detail: 'Bekasi, Indonesia', description: 'Melayani pelatihan di seluruh Indonesia' },
];

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: 'Formulir Belum Lengkap', description: 'Mohon lengkapi semua field yang diperlukan.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({ title: 'Email Tidak Valid', description: 'Mohon masukkan alamat email yang valid.' });
      return;
    }

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: 'Pesan Berhasil Dikirim!', description: 'Terima kasih! Kami akan segera menghubungi Anda.' });
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">Hubungi Kami</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Mari Berkolaborasi</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Siap mengembangkan SDM organisasi Anda? Hubungi tim kami untuk konsultasi.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <Card key={i} className="card-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="text-primary hover:text-primary/80 font-medium">
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

            <Card className="card-elegant bg-gradient-subtle border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Jam Operasional</h3>
                    <div className="space-y-1 text-sm">
                      <p className="text-foreground">Senin - Jumat: 08:00 - 17:00 WIB</p>
                      <p className="text-foreground">Sabtu: 08:00 - 12:00 WIB</p>
                      <p className="text-muted-foreground">Minggu & Hari Libur: Tutup</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Kirim Pesan</CardTitle>
              <p className="text-muted-foreground">Ceritakan kebutuhan pelatihan Anda, kami akan memberi solusi terbaik.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Nama Lengkap *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Nama Anda" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="nama@perusahaan.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Pesan *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Ceritakan kebutuhan Anda..." required />
                </div>
                <Button type="submit" className="btn-hero w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Mengirim...' : (<><Send className="w-5 h-5 mr-2" /> Kirim Pesan</>)}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
