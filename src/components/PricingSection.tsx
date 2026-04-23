import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ ADD THIS

const plans = [
  {
    name: "Starter",
    price: "₹399",
    badge: null,
    features: ["Bot-Beating Resume", "Clean Layout Design", "24 Hour Delivery", "1 Revision"],
    variant: "heroOutline",
    popular: false,
  },
  {
    name: "Professional",
    price: "₹999",
    badge: "Best Value",
    features: ["Full ATS Optimization", "Premium Cover Letter", "LinkedIn Optimization", "Unlimited Revisions", "Priority Support"],
    variant: "hero",
    popular: true,
  },
  {
    name: "Executive",
    price: "₹1,999",
    badge: null,
    features: ["Everything in Professional", "Personal Brand Strategy", "Interview Prep Guide", "Portfolio Website", "60-Day Support"],
    variant: "heroOutline",
    popular: false,
  },
];

const PricingSection = () => {
  const navigate = useNavigate(); // ✅ DEFINE HERE

  return (
    <section className="py-20 bg-secondary/50" id="pricing">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Small Cost. <span className="text-primary">Big Upgrade.</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Invest in your career. Get results that pay for themselves.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "bg-foreground text-background border-foreground shadow-2xl shadow-black/20 scale-[1.03]"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Star size={12} /> {plan.badge}
                </span>
              )}

              <h3 className={`font-heading text-lg font-semibold mb-1 ${plan.popular ? 'text-background' : 'text-foreground'}`}>
                {plan.name}
              </h3>

              <div className="mb-6">
                <span className={`font-heading text-4xl font-bold ${plan.popular ? 'text-primary' : 'text-foreground'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-1 ${plan.popular ? 'text-background/60' : 'text-muted-foreground'}`}>
                  one-time
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feat, j) => (
                  <li
                    key={j}
                    className={`flex items-center gap-3 text-sm ${plan.popular ? 'text-background/80' : 'text-muted-foreground'}`}
                  >
                    <Check size={16} className="text-primary" />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* ✅ BUTTON FIXED */}
              <Button
                variant={plan.popular ? "hero" : "heroOutline"}
                className="w-full"
                size="lg"
                type="button"
                onClick={() => navigate("/order")}
              >
                Choose Plan <ArrowRight size={16} />
              </Button>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;