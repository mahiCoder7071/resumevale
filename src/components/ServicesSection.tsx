import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Briefcase, Search, Globe, Check, ArrowRight, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Linkedin,
    title: "LinkedIn",
    desc: "Keyword-rich, recruiter-ready LinkedIn profile optimization that boosts your visibility.",
    color: "#0A66C2",
  },
  {
    icon: Briefcase,
    title: "Naukri",
    desc: "Complete Naukri profile setup & optimization so recruiters find you first.",
    color: "#4A90D9",
  },
  {
    icon: Search,
    title: "Indeed",
    desc: "Indeed profile crafted to rank higher and attract more interview calls.",
    color: "#2557A7",
  },
  {
    icon: Globe,
    title: "Naukri Gulf",
    desc: "Gulf-focused profile tailored for Middle East recruiters and job markets.",
    color: "#E4572E",
  },
];

// Profile service samples
const profileSamples = [
  "/images/l1.png",
  "/images/l2.png",
  "/images/l3.png",
  "/images/l4.png",
  "/images/l5.png",
  "/images/l6.png",
];

// 👉 Change this price to your actual combo price
const comboPrice = "₹3,999";
const comboFeatures = [
  "LinkedIn Profile Optimization",
  "Naukri Profile Setup & Optimization",
  "Indeed Profile Optimization",
  "Naukri Gulf Profile Setup",
  "Recruiter-friendly keywords on all",
  "Delivered within 48 hours",
];

const ServicesSection = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-20 bg-secondary/40" id="services">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Profiles We <span className="text-primary">Optimize</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Beyond resumes — we build standout profiles across every major job platform.
          </p>
        </motion.div>

        {/* Platform cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${s.color}1A`, color: s.color }}
              >
                <s.icon size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Combo pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-20 max-w-4xl mx-auto"
        >
          {/* Floating badge */}
          <span className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-primary/30 whitespace-nowrap">
            <Star size={12} className="fill-current" /> All-in-One Package
          </span>

          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/10">
            {/* soft glow accents */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative grid md:grid-cols-[1fr_auto]">
              {/* Left: details */}
              <div className="p-8 md:p-10">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Complete Profile Package
                </h3>
                <p className="text-muted-foreground text-sm mb-7 max-w-md">
                  Get all four job-platform profiles professionally optimized in one bundle.
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  {comboFeatures.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                        <Check size={13} className="text-primary" />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: price panel */}
              <div className="flex flex-col items-center justify-center gap-4 border-t md:border-t-0 md:border-l border-border bg-secondary/40 p-8 md:p-10 md:min-w-[240px] text-center">
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                    All 4 profiles
                  </span>
                  <span className="font-heading text-5xl font-bold text-primary">{comboPrice}</span>
                  <span className="block text-xs text-muted-foreground mt-1">one-time payment</span>
                </div>
                <Button
                  variant="hero"
                  size="lg"
                  type="button"
                  className="w-full"
                  onClick={() => navigate("/order?package=profiles")}
                >
                  Get Started <ArrowRight size={16} />
                </Button>
                <p className="text-[11px] text-muted-foreground">Delivered within 48 hours</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Profile samples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="font-heading text-xl md:text-2xl font-bold text-center text-foreground mb-8">
            Profile <span className="text-primary">Samples</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto items-start">
            {profileSamples.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelected(src)}
                className="rounded-xl overflow-hidden border border-border/50 bg-white shadow-sm hover:scale-[1.03] hover:shadow-lg transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Profile sample ${i + 1}`}
                  className="w-full h-auto object-contain block"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
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
              alt="Profile sample enlarged"
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

export default ServicesSection;
