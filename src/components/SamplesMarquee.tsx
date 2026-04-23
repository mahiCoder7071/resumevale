import { motion } from "framer-motion";

const sampleImages = [
  "https://resumewale.com/images/s1.jpg",
  "https://resumewale.com/images/s2.jpg",
  "https://resumewale.com/images/s3.jpg",
  "https://resumewale.com/images/s4.jpg",
];

const sampleImages2 = [
  "https://resumewale.com/images/s5.jpg",
  "https://resumewale.com/images/s6.jpg",
  "https://resumewale.com/images/s7.jpg",
  "https://resumewale.com/images/s8.jpg",
];

const MarqueeRow = ({ images, reverse = false }: { images: string[]; reverse?: boolean }) => {
  const doubled = [...images, ...images, ...images];
  return (
    <div className="overflow-hidden">
      <div className={`flex gap-5 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`} style={{ width: 'max-content' }}>
        {doubled.map((src, i) => (
          <div key={i} className="w-52 h-72 md:w-60 md:h-80 rounded-xl overflow-hidden shadow-lg shadow-black/5 flex-shrink-0 border border-border/50 hover:scale-[1.02] transition-transform duration-300">
            <img src={src} alt={`Resume sample ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

const SamplesMarquee = () => (
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
      <MarqueeRow images={sampleImages} />
      <MarqueeRow images={sampleImages2} reverse />
    </div>
  </section>
);

export default SamplesMarquee;
