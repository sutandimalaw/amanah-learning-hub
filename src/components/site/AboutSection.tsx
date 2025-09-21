import React, { useEffect, useRef, useState } from "react";
import { Star, BarChart3, Radio } from "lucide-react";
import founder from '@/assets/founder.png';

export function AboutSection() {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const [leftInView, setLeftInView] = useState(false);
  const [rightInView, setRightInView] = useState(false);

  useEffect(() => {
    const makeObserver = (el: Element | null, onVisible: () => void) => {
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              onVisible();
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      io.observe(el);
    };

    makeObserver(leftRef.current, () => setLeftInView(true));
    makeObserver(rightRef.current, () => setRightInView(true));
  }, []);

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left column with overlapping images */}
        <div
          ref={leftRef}
          className={`relative w-full md:w-1/2 h-80 md:h-96 transform transition-all duration-700 ease-out ${leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <img
            src={founder}
            height={100}
            alt="About 1"
            className="mx-auto top-0  left-0 h-[120%] object-cover rounded-xl shadow-lg transition-transform duration-500 will-change-transform hover:scale-[1.03]"
          />
        </div>

        {/* Right column with content */}
        <div
          ref={rightRef}
          className={`w-full md:w-1/2 transform transition-all duration-700 ease-out delay-150 ${rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
            About Us
          </span>
         
          <p className="mb-2 text-gray-700">
           Yan Consulting adalah perusahaan training dan consulting hadir sejak tahun 2023 yang berkomitmen menjadi mitra terbaik dalam pengembangan Sumber Daya Manusia di Indonesia.
          </p>
          <p className="mb-4 text-gray-700">
             Dengan tagline “AMANAH LEARNING PARTNER”, kami hadir memberikan solusi pelatihan yang terpercaya, praktis, dan berdampak langsung terhadap performa individu dan tim
          </p>
          <p className="mb-4 text-gray-700">
              Kami percaya bahwa kunci kesuksesan organisasi terletak pada kualitas manusianya. Oleh karena itu, kami mengembangkan program-program pelatihan yang fokus pada peningkatan
              penjualan, pemasaran, pelayanan prima, kepemimpinan, dan coaching skill, agar perusahaan mampu bersaing di era bisnis yang terus berubah.
          </p>

          {/* Rating block */}

          {/* Bullet points */}
          <ul className="space-y-6">
            <li className="group flex items-center gap-4">
              <BarChart3 className="text-primary" size={24} />
              <span className="text-gray-800 font-semibold transition-colors duration-300 group-hover:text-primary">Data-driven insights to optimize your business.</span>
            </li>
            <li className="group flex items-center gap-4">
              <Radio className="text-primary" size={24} />
              <span className="text-gray-800 font-semibold transition-colors duration-300 group-hover:text-primary">Customized strategies that fit your unique goals.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
