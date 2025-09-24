import brandsImage from '@/assets/brands.png';
import yanImage from '@/assets/inhouseImage.png';

type TrainingCardProps = {
  title: string;
  items: string[];
};

const TrainingCard = ({ title, items }: TrainingCardProps) => (
  <div className="rounded-2xl border border-border bg-background/80 p-6 shadow-sm backdrop-blur-sm">
    <div className='flex'>
      <div className="badge-primary mb-6 mx-auto rounded-full ">
          {title}
        </div>
    </div>  
    <ul className="list-disc space-y-2 pl-5 ">
      {items.map((item) => (
        <li key={item} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const inhouseLeft: string[] = [
  "Training Of Trainer",
  "Trainers Development Program",
  "Effective Presentation Skill",
  "Time Management",
  "Leadership Framework",
  "Leader As A Coach",
  "Becoming a Sales Coach",
  "Coaching Skill In Motivational Leadership",
];

const inhouseRight: string[] = [
  "Recharging Your Sales Potential",
  "Negotiation Skill For Win-win Solution",
  "Customer Service Excellence",
  "Building Relationship for Business",
  "Corporate Culture & Motivation",
  "Perencanaan Keuangan Berbasis Syariah",
  "Literasi Keuangan Syariah",
  "The Art Of Sales Syariah",
];

const lspBnsp: string[] = [
  "Train Of Trainer (TOT)",
  "Tenaga Pemasar dan Operasional Pemasaran",
  "Staf Administrasi SDM",
  "Pemasaran Digital",
];

// Util: build Clearbit logo URL from domain
const clearbit = (domain: string) => `https://logo.clearbit.com/${domain}`;

// Small logo component with graceful fallback
function LogoImg({ src, alt }: { src: string; alt: string }) {
  const fallback = `https://placehold.co/160x40/png?text=${encodeURIComponent(alt)}`;
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        if (target.src !== fallback) target.src = fallback;
      }}
      className="h-10 w-auto object-contain grayscale transition hover:grayscale-0"
      loading="lazy"
    />
  );
}

const trainingLogos: { src: string; alt: string }[] = [
  { src: clearbit("auto2000.co.id"), alt: "Auto2000" },
  { src: clearbit("astrido.co.id"), alt: "Astrido" },
  { src: clearbit("daihatsu.co.id"), alt: "Daihatsu" },
  { src: clearbit("toyota.astra.co.id"), alt: "Toyota" },
  { src: clearbit("sunmotor.com"), alt: "Sun Motor" },
  { src: clearbit("hasnurgroup.com"), alt: "Hasnur Group" },
  { src: clearbit("jasamarga.co.id"), alt: "Jasamarga" },
  { src: clearbit("sefas.co.id"), alt: "Sefas" },
  { src: clearbit("tmi.co.id"), alt: "TMI" },
  { src: clearbit("nestle.com"), alt: "Nestlé" },
  { src: clearbit("frisianflag.com"), alt: "Frisian Flag" },
  { src: clearbit("coca-cola.com"), alt: "Coca-Cola" },
  { src: clearbit("herminahospitals.com"), alt: "Hermina" },
  { src: clearbit("rscendana.com"), alt: "RS Cendana" },
  { src: clearbit("bpjsketenagakerjaan.go.id"), alt: "BPJS Ketenagakerjaan" },
  { src: clearbit("ocbdbsd.id"), alt: "OCBD" },
  { src: clearbit("garudafood.com"), alt: "Garudafood" },
  { src: clearbit("oppo.com"), alt: "OPPO" },
  { src: clearbit("bestpongs.com"), alt: "Best Pongs" },
  { src: clearbit("vivo.com"), alt: "Vivo" },
  { src: clearbit("tcl.com"), alt: "TCL" },
  { src: clearbit("himax.co.id"), alt: "Himax" },
  { src: clearbit("advance.id"), alt: "Advance" },
  { src: clearbit("stieniba.ac.id"), alt: "STIE NIBA" },
  { src: clearbit("trisakti.ac.id"), alt: "Universitas Trisakti" },
];

const LogoWall = () => (
  <div className="mt-10 rounded-2xl border border-border bg-background/70 p-6 shadow-sm">
    <h3 className="mb-6 text-center text-sm font-semibold tracking-wide text-muted-foreground">
      Telah dipercaya oleh berbagai perusahaan
    </h3>
    <img
      src={brandsImage}
      alt="Brands"
      className="w-full h-auto rounded-2xl object-cover"
    />
  </div>
);

export function InHouseTraining() {
  return (
    <section id="training" className="relative py-16 sm:py-20">
      <div className="container-custom animate-fade-in-up">
        <div className="mb-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-[impact] tracking-wider sm:text-3xl">THEMA PELATIHAN</h2>
          <p className="mt-2 text-xl lg:text-1xl max-w-2xl font-sans mx-auto leading-relaxed">
            PILIHAN PROGRAM IN-HOUSE TRAINING SERTA SERTIFIKASI LSP (BNSP).
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <TrainingCard title="INHOUSE TRAINING" items={inhouseLeft} />
          <TrainingCard title="INHOUSE TRAINING" items={inhouseRight} />
          <TrainingCard title="LSP (BNSP)" items={lspBnsp} /> 
        </div>

        <LogoWall />
        <div className="mt-10">
          <img
            src={yanImage}
            alt="Yan Consulting Inhouse"
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* Decorative corners ala referensi */}
      <div className="pointer-events-none absolute left-0 top-0 h-20 w-20 bg-gradient-to-br from-primary/30 to-transparent opacity-70 sm:h-28 sm:w-28" />
      <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-primary/30 to-transparent opacity-70 sm:h-28 sm:w-28" />
    </section>
  );
}