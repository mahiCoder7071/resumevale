import { motion } from "framer-motion";
import { ShieldCheck, Zap, FileText, Clock, Users, Award } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "ATS-Optimized", desc: "Beat applicant tracking systems with perfectly structured formatting." },
  { icon: Zap, title: "Fast Delivery", desc: "Get your professional resume within 24 hours of placing your order." },
  { icon: FileText, title: "Cover Letters", desc: "Matching cover letters tailored to your target role and industry." },
  { icon: Users, title: "Expert Writers", desc: "Industry-specific writers with 10+ years of HR and recruitment experience." },
  { icon: Clock, title: "Free Revisions", desc: "Unlimited revisions until you're 100% satisfied with the result." },
  { icon: Award, title: "Proven Results", desc: "95% of our clients report getting interview calls within 2 weeks." },
];

const FeaturesSection = () => (
  <section className="py-20 bg-background" id="features">
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Why Choose <span className="text-primary">RESUMEVALE?</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          We don't just write resumes — we engineer career documents that open doors.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <f.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
