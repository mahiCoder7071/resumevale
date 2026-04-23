import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ComparisonSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Choose Your <span className="text-primary">Outcome</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Old Way */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-destructive/20 bg-destructive/5"
        >
          <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 text-2xl">❌</div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-3">The Old Way</h3>
          <p className="text-muted-foreground leading-relaxed">
            Using free templates leads to the trash bin. <strong className="text-foreground">80% of resumes</strong> are never 
            seen by a human because of bad formatting and missing ATS keywords.
          </p>
        </motion.div>

        {/* Smart Way */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-primary/30 bg-primary/5"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-2xl">✅</div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-3">The Smart Way</h3>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Our <strong className="text-foreground">ATS-Optimized</strong> structure ensures you pass the bot filters 
            and land straight on the HR's desk. Professional formatting that stands out.
          </p>
          <Button variant="hero" size="default">
            Secure Interview <ArrowRight size={16} />
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
