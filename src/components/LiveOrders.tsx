import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileCheck2, MapPin } from "lucide-react";

const orders = [
  { name: "Rishabh Pant", city: "Pune, MH", item: "professional CV" },
  { name: "Kritika Kamra", city: "Bhopal, MP", item: "ATS resume" },
  { name: "Zoya Khan", city: "Hyderabad, TS", item: "LinkedIn profile" },
  { name: "Aman Verma", city: "Delhi, DL", item: "cover letter" },
  { name: "Priya Sharma", city: "Lucknow, UP", item: "professional CV" },
  { name: "Arjun Mehta", city: "Mumbai, MH", item: "ATS resume" },
];

const LiveOrders = () => {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStart((current) => (current + 1) % orders.length);
    }, 3800);

    return () => window.clearInterval(timer);
  }, []);

  const visibleOrders = useMemo(
    () => [0, 1, 2].map((offset) => orders[(start + offset) % orders.length]),
    [start],
  );

  return (
    <div className="pointer-events-none fixed bottom-4 left-3 right-3 z-40 flex flex-col gap-3 md:bottom-5 md:left-auto md:right-4 md:w-[min(380px,calc(100vw-2rem))]">
      <AnimatePresence mode="popLayout">
        {visibleOrders.map((order, index) => (
          <motion.div
            key={`${order.name}-${start}`}
            layout
            initial={{ opacity: 0, x: 40, y: 18, scale: 0.96 }}
            animate={{ opacity: index === 2 ? 0.78 : 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 35, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative overflow-hidden rounded-lg border border-primary/25 bg-card/95 p-4 shadow-2xl shadow-black/35 backdrop-blur-xl"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary via-[#42A5F5] to-[#00B4D8]" />
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                <FileCheck2 size={22} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-snug text-foreground">
                  <span className="text-primary">{order.name}</span> just ordered their {order.item}.
                </p>
                <p className="mt-1 flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                  <MapPin size={12} />
                  {order.city}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default LiveOrders;
