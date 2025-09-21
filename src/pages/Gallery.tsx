import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Camera, Users, Award, BookOpen, Sparkles, X } from 'lucide-react';

// Sample gallery data - in a real app, this would come from a CMS or API
const galleryItems = [
  {
    id: 1,
    title: 'Workshop Leadership Excellence',
    category: 'Leadership',
    description: 'Pelatihan kepemimpinan untuk para manager dan supervisor',
    image: '/placeholder.svg?height=400&width=600',
    date: '2024-01-15'
  },
  {
    id: 2,
    title: 'Sales Training Program',
    category: 'Sales',
    description: 'Program pelatihan penjualan intensif untuk tim sales',
    image: '/placeholder.svg?height=400&width=600',
    date: '2024-01-20'
  },
  {
    id: 3,
    title: 'Service Excellence Workshop',
    category: 'Service',
    description: 'Pelatihan pelayanan prima untuk frontliner',
    image: '/placeholder.svg?height=400&width=600',
    date: '2024-02-05'
  },
  {
    id: 4,
    title: 'Public Speaking Masterclass',
    category: 'Communication',
    description: 'Masterclass berbicara di depan umum',
    image: '/placeholder.svg?height=400&width=600',
    date: '2024-02-12'
  },
  {
    id: 5,
    title: 'Team Building Event',
    category: 'Team Building',
    description: 'Acara team building untuk meningkatkan kekompakan tim',
    image: '/placeholder.svg?height=400&width=600',
    date: '2024-02-20'
  },
  {
    id: 6,
    title: 'Corporate Training Session',
    category: 'Corporate',
    description: 'Sesi pelatihan korporat untuk pengembangan SDM',
    image: '/placeholder.svg?height=400&width=600',
    date: '2024-03-01'
  },
  {
    id: 7,
    title: 'Coaching Skills Development',
    category: 'Coaching',
    description: 'Pengembangan keterampilan coaching untuk leader',
    image: '/placeholder.svg?height=400&width=600',
    date: '2024-03-10'
  },
  {
    id: 8,
    title: 'Online Training Platform',
    category: 'Digital',
    description: 'Platform pelatihan online interaktif',
    image: '/placeholder.svg?height=400&width=600',
    date: '2024-03-15'
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

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
            <h1 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
              Dokumentasi
              <span className="text-primary block">Pelatihan & Event</span>
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Lihat momen-momen berharga dari berbagai program pelatihan dan kegiatan yang telah kami selenggarakan
            </p>
          </div>    

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="card-premium hover-lift group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(item)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs">
                        <Award className="w-4 h-4 mr-2" />
                        {new Date(item.date).toLocaleDateString('id-ID')}
                      </div>
                      <div className="w-2 h-2 bg-gradient-primary rounded-full group-hover:scale-150 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in-up">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-12 right-0 text-white hover:bg-white/20 rounded-full p-3"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-8">
                  <Badge className="mb-4">{selectedImage.category}</Badge>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    {selectedImage.title}
                  </h3>
                  <p className="leading-relaxed mb-4">
                    {selectedImage.description}
                  </p>
                  <div className="text-sm">
                    {new Date(selectedImage.date).toLocaleDateString('id-ID')}
                  </div>
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