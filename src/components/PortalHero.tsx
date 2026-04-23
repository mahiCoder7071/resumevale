import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PortalHero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background relative overflow-hidden">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow Effect */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-8">
            <Sparkles size={14} /> Career Accelerator
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="font-heading text-5xl sm:text-6xl md:text-[5rem] font-bold text-foreground leading-[1.05] tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Don't just apply.
          <br />
          <span className="text-primary sm:text-4xl drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]">
            Get Noticed, Get hired.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Your resume has seconds to make an impact.
          We build ATS-optimized, recruiter-approved resumes
          that turn applications into interviews.
        </motion.p>

        {/* Trust Line */}
        <p className="text-sm text-muted-foreground mb-10">
          Trusted by 1,000+ job seekers • 4.9★ rating
        </p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Button
            variant="hero"
            size="xl"
            className="shadow-lg hover:scale-105 transition-transform"
            onClick={() => navigate("/order")}
          >
            Build My CV <ArrowRight size={18} />
          </Button>

          <Button
            variant="heroOutline"
            size="xl"
            className="hover:scale-105 transition-transform"
            onClick={() =>
              document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Plans
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortalHero;