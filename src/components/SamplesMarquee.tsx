import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

// s9–s30 and s40 (s31–s39 don't exist in the images folder)
const sampleImages = [
  "/images/s9.jpeg",
  "/images/s10.jpeg",
  "/images/s11.jpeg",
  "/images/s12.jpeg",
  "/images/s13.jpeg",
  "/images/s14.jpeg",
  "/images/s15.jpeg",
  "/images/s16.jpeg",
  "/images/s17.jpeg",
  "/images/s18.jpeg",
  "/images/s19.jpeg",
  "/images/s20.jpeg",
];

const sampleImages2 = [
  "/images/s21.jpeg",
  "/images/s22.jpeg",
  "/images/s23.jpeg",
  "/images/s24.jpeg",
  "/images/s25.jpeg",
  "/images/s26.jpeg",
  "/images/s27.jpeg",
  "/images/s28.jpeg",
  "/images/s29.jpeg",
  "/images/s30.jpeg",
  "/images/s40.jpeg",
];

const MarqueeRow = ({
  images,
  reverse = false,
  onSelect,
}: {
  images: string[];
  reverse?: boolean;
  onSelect: (src: string) => void;
}) => {
  const doubled = [...images, ...images, ...images];
  return (
    <div className="overflow-hidden">
      <div className={`flex gap-5 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`} style={{ width: 'max-content' }}>
        {doubled.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(src)}
            className="w-52 h-72 md:w-60 md:h-80 rounded-xl overflow-hidden shadow-lg shadow-black/5 flex-shrink-0 border border-border/50 bg-white hover:scale-[1.03] hover:shadow-xl transition-transform duration-300 cursor-pointer"
          >
            <img src={src} alt={`Resume sample ${i + 1}`} className="w-full h-full object-contain" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
};

const SamplesMarquee = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-16 bg-secondary/50 overflow-hidden" id="samples">
      <div className="container mx-auto px-6 mb-10 text-center">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our <span className="text-primary">Best Work</span>
        </motion.h2>
        <p className="text-muted-foreground mt-3">Resumes that actually land interviews</p>
      </div>
      <div className="space-y-5">
        <MarqueeRow images={sampleImages} onSelect={setSelected} />
        <MarqueeRow images={sampleImages2} reverse onSelect={setSelected} />
      </div>

      {/* Lightbox: click a sample to view it enlarged */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X size={22} />
            </button>
            <motion.img
              src={selected}
              alt="Resume sample enlarged"
              onClick={(e) => e.stopPropagation()}
              className="min-h-0 max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SamplesMarquee;
