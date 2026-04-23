import { motion } from "framer-motion";

const stats = [
  { value: "12,000+", label: "Resumes Delivered" },
  { value: "95%", label: "Interview Rate" },
  { value: "24hrs", label: "Avg Delivery" },
  { value: "4.9★", label: "Client Rating" },
];

const StatsSection = () => (
  <section className="py-16 bg-[hsl(0,0%,8%)]">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
            <div className="text-white/60 text-sm font-body">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
