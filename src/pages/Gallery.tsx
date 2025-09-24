import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Camera, Users, Award, BookOpen, Sparkles, X } from 'lucide-react';

const env = import.meta.env
const cloudName = (env.VITE_CLOUDINARY_CLOUD_NAME as string | undefined) ?? undefined;
const baseUrl = (env.VITE_CLOUDINARY_BASE_URL as string | undefined) ?? (cloudName ? `https://res.cloudinary.com/${cloudName}/image/upload` : undefined);
const cldUrl = (publicId: string, w = 800) => {
  if (!baseUrl) {
    console.warn('Cloudinary BASE URL tidak ditemukan. Pastikan .env memiliki VITE_CLOUDINARY_BASE_URL atau VITE_CLOUDINARY_CLOUD_NAME.');
    return '';
  }
  return `${baseUrl}/f_auto,q_auto,w_${w}/${publicId}`;
};
// Sample gallery data - in a real app, this would come from a CMS or API
const galleryItems = [
  {
    id: 1,
    title: 'Workshop Leadership Excellence',
    category: 'Leadership',
    description: 'Pelatihan kepemimpinan untuk para manager dan supervisor',
    publicId: 'WhatsApp_Image_2025-03-28_at_13.51.41_acstap',
  },
  {
    id: 2,
    title: 'Sales Training Program',
    category: 'Sales',
    description: 'Program pelatihan penjualan intensif untuk tim sales',
    publicId: 'IMG_1632_jctjq5',
  },
  {
    id: 3,
    title: 'Service Excellence Workshop',
    category: 'Service',
    description: 'Pelatihan pelayanan prima untuk frontliner',
    publicId: '20230507_131903_qhgynt',
  },
  {
    id: 4,
    title: 'Public Speaking Masterclass',
    category: 'Communication',
    description: 'Masterclass berbicara di depan umum',
    publicId: 'WhatsApp_Image_2025-04-11_at_04.09.24_bjiqpu',
  },
  {
    id: 5,
    title: 'Team Building Event',
    category: 'Team Building',
    description: 'Acara team building untuk meningkatkan kekompakan tim',
    publicId: 'IMG_1649_ouw5k9',
  },
  {
    id: 6,
    title: 'Corporate Training Session',
    category: 'Corporate',
    description: 'Sesi pelatihan korporat untuk pengembangan SDM',
    publicId: 'IMG_1632_jctjq5',
  },
  {
    id: 7,
    title: 'Coaching Skills Development',
    category: 'Coaching',
    description: 'Pengembangan keterampilan coaching untuk leader',
    publicId: 'WhatsApp_Image_2024-11-28_at_16.10.21_1_yjdp9e',
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const [modalSrc, setModalSrc] = useState<string>('');
  const [isModalLoading, setIsModalLoading] = useState<boolean>(false);

  const handlePreload = (publicId: string) => {
    // Preload high-res image so it appears instantly when modal opens
    const img = new Image();
    img.src = cldUrl(publicId, 1200);
  };

  const openModal = (item: typeof galleryItems[0]) => {
    // Show an already-cached medium image first, then swap to high-res when ready
    setSelectedImage(item);
    const medium = cldUrl(item.publicId, 800);
    setModalSrc(medium);
    setIsModalLoading(true);

    const hi = new Image();
    hi.src = cldUrl(item.publicId, 1200);
    hi.onload = () => {
      setModalSrc(hi.src);
      setIsModalLoading(false);
    };
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { 
        setSelectedImage(null);
      }
    };   
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const filteredItems = selectedCategory === 'All'  
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="badge-primary mb-6">
              <Camera className="w-4 h-4 mr-2" />
              Gallery Kegiatan
            </div>
          <h1 className="text-3xl lg:text-5xl font-[Impact] tracking-widest text-foreground mb-8 ">
              DOKUMENTASI
              <span className="text-primary block">PELATIHAN & EVENT</span>
            </h1>
            <p className="text-xl lg:text-1xl max-w-3xl mx-auto leading-relaxed font-sans">
              LIHAT MOMEN-MOMEN BERHARGA DARI BERBAGAI PROGRAM PELATIHAN DAN KEGIATAN YANG TELAH KAMI SELENGGARAKAN
            </p>
          </div>    

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="card-premium hover-lift group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(item)}
                onMouseEnter={() => handlePreload(item.publicId)}
                onTouchStart={() => handlePreload(item.publicId)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={cldUrl(item.publicId, 800)}
                      alt={item.title}
                      loading="lazy"
                      onError={(e) => {
                        console.warn('Gagal load gambar:', cldUrl(item.publicId, 800), { baseUrl, cloudName, publicId: item.publicId });
                      }}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className=" text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                   
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in-up"
          role="dialog"
          aria-modal="true"
          onClick={() => { setSelectedImage(null); setModalSrc(''); setIsModalLoading(false); }}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="sm"
              aria-label="Tutup galeri"
              className="absolute -top-12 right-0 text-white hover:bg-white/20 rounded-full p-3"
              onClick={() => { setSelectedImage(null); setModalSrc(''); setIsModalLoading(false); }}
            >
              <X className="w-6 h-6" />
            </Button>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={modalSrc}
                  alt={selectedImage.title}
                  fetchPriority="high"
                  decoding="async"
                  onError={() => {
                    console.warn('Gagal load gambar (modal):', modalSrc, { baseUrl, cloudName, publicId: selectedImage.publicId });
                  }}
                  className={`w-full h-auto max-h-[70vh] object-contain transition duration-300 ${isModalLoading ? 'blur-sm' : ''}`}
                />
                <div className="p-8">
                  <Badge className="mb-4">{selectedImage.category}</Badge>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    {selectedImage.title}
                  </h3>
                  <p className="leading-relaxed mb-4">
                    {selectedImage.description}
                  </p>
                  {/* <div className="text-sm">
                    {new Date(selectedImage.date).toLocaleDateString('id-ID')}
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;