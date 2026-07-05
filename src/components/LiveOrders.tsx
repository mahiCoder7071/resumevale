import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, User, UserRound } from "lucide-react";

type Gender = "m" | "f";

const names: { name: string; gender: Gender }[] = [
  { name: "Rishabh Pant", gender: "m" }, { name: "Kritika Kamra", gender: "f" },
  { name: "Zoya Khan", gender: "f" }, { name: "Aman Verma", gender: "m" },
  { name: "Priya Sharma", gender: "f" }, { name: "Arjun Mehta", gender: "m" },
  { name: "Sneha Reddy", gender: "f" }, { name: "Vikram Nair", gender: "m" },
  { name: "Ananya Iyer", gender: "f" }, { name: "Rohit Das", gender: "m" },
  { name: "Neha Kapoor", gender: "f" }, { name: "Karan Malhotra", gender: "m" },
  { name: "Isha Gupta", gender: "f" }, { name: "Deepak Yadav", gender: "m" },
  { name: "Pooja Rao", gender: "f" }, { name: "Siddharth Jain", gender: "m" },
  { name: "Meera Pillai", gender: "f" }, { name: "Nikhil Chopra", gender: "m" },
  { name: "Tanvi Desai", gender: "f" }, { name: "Rahul Bose", gender: "m" },
  { name: "Aditi Menon", gender: "f" }, { name: "Sameer Khanna", gender: "m" },
  { name: "Divya Nambiar", gender: "f" }, { name: "Manish Tiwari", gender: "m" },
  { name: "Ritu Saxena", gender: "f" }, { name: "Aakash Bhatt", gender: "m" },
  { name: "Shreya Ghosh", gender: "f" }, { name: "Varun Sethi", gender: "m" },
  { name: "Kavya Hegde", gender: "f" }, { name: "Yash Agarwal", gender: "m" },
  { name: "Nisha Bansal", gender: "f" }, { name: "Gaurav Shetty", gender: "m" },
  { name: "Simran Kaur", gender: "f" }, { name: "Harsh Vardhan", gender: "m" },
  { name: "Preeti Mishra", gender: "f" }, { name: "Aryan Kulkarni", gender: "m" },
  { name: "Sanya Chauhan", gender: "f" }, { name: "Devendra Rana", gender: "m" },
  { name: "Pallavi Joshi", gender: "f" }, { name: "Kabir Sinha", gender: "m" },
  { name: "Ayesha Sheikh", gender: "f" }, { name: "Rohan Kulkarni", gender: "m" },
  { name: "Diya Krishnan", gender: "f" }, { name: "Aditya Roy", gender: "m" },
  { name: "Nandini Verma", gender: "f" }, { name: "Vivek Anand", gender: "m" },
  { name: "Riya Malhotra", gender: "f" }, { name: "Kunal Bajaj", gender: "m" },
  { name: "Aarohi Deshmukh", gender: "f" }, { name: "Saurabh Pandey", gender: "m" },
  { name: "Ishita Roy", gender: "f" }, { name: "Nitin Bhardwaj", gender: "m" },
  { name: "Tara Dutta", gender: "f" }, { name: "Abhishek Rana", gender: "m" },
  { name: "Mahima Sethi", gender: "f" }, { name: "Rajat Khurana", gender: "m" },
  { name: "Anushka Pillai", gender: "f" }, { name: "Vishal Kapoor", gender: "m" },
  { name: "Sakshi Agarwal", gender: "f" }, { name: "Dev Malhotra", gender: "m" },
  { name: "Nikita Sharma", gender: "f" }, { name: "Aditya Bhatt", gender: "m" },
  { name: "Payal Gupta", gender: "f" }, { name: "Rohan Nair", gender: "m" },
  { name: "Trisha Menon", gender: "f" }, { name: "Ishaan Verma", gender: "m" },
  { name: "Bhavya Reddy", gender: "f" }, { name: "Om Prakash", gender: "m" },
  { name: "Charvi Jain", gender: "f" }, { name: "Parth Shah", gender: "m" },
  { name: "Lavanya Iyer", gender: "f" }, { name: "Tushar Mehta", gender: "m" },
  { name: "Aisha Qureshi", gender: "f" }, { name: "Naveen Kumar", gender: "m" },
  { name: "Ridhima Kapoor", gender: "f" }, { name: "Sahil Chawla", gender: "m" },
  { name: "Myra D'Souza", gender: "f" }, { name: "Akhil Menon", gender: "m" },
  { name: "Sara Ali", gender: "f" }, { name: "Raghav Bansal", gender: "m" },
  { name: "Anvi Kulkarni", gender: "f" }, { name: "Vedant Joshi", gender: "m" },
  { name: "Khushi Agarwal", gender: "f" }, { name: "Manav Grover", gender: "m" },
  { name: "Prisha Nair", gender: "f" }, { name: "Kartik Sood", gender: "m" },
  { name: "Ira Sharma", gender: "f" }, { name: "Dhruv Malhotra", gender: "m" },
  { name: "Avni Deshpande", gender: "f" }, { name: "Yuvraj Singh", gender: "m" },
  { name: "Suhana Khan", gender: "f" }, { name: "Aniket Rao", gender: "m" },
  { name: "Mira Kapadia", gender: "f" }, { name: "Rudra Pratap", gender: "m" },
  { name: "Zara Sheikh", gender: "f" }, { name: "Harshit Jain", gender: "m" },
  { name: "Naina Sethi", gender: "f" }, { name: "Aryan Khanna", gender: "m" },
  { name: "Pihu Verma", gender: "f" }, { name: "Shivam Dubey", gender: "m" },
  { name: "Kiara Advani", gender: "f" }, { name: "Rehan Ansari", gender: "m" },
  { name: "Anaya Reddy", gender: "f" }, { name: "Jai Malhotra", gender: "m" },
  { name: "Saanvi Gupta", gender: "f" }, { name: "Nikhil Rawat", gender: "m" },
  { name: "Aadhya Nair", gender: "f" }, { name: "Rithvik Menon", gender: "m" },
  { name: "Tanya Bhatia", gender: "f" }, { name: "Karthik Iyer", gender: "m" },
];

const cities = [
  "Pune, MH", "Bhopal, MP", "Hyderabad, TS", "Delhi, DL", "Lucknow, UP",
  "Mumbai, MH", "Bengaluru, KA", "Chennai, TN", "Kolkata, WB", "Jaipur, RJ",
  "Ahmedabad, GJ", "Surat, GJ", "Indore, MP", "Nagpur, MH", "Chandigarh, CH",
  "Kochi, KL", "Patna, BR", "Noida, UP", "Gurugram, HR", "Bhubaneswar, OD",
  "Guwahati, AS", "Coimbatore, TN", "Visakhapatnam, AP", "Ranchi, JH", "Nashik, MH",
];

const items = [
  "professional CV", "ATS resume", "LinkedIn profile", "cover letter",
  "resume redesign", "SOP draft", "resume + LinkedIn combo", "fresher resume",
];

type Notif = { id: number; name: string; gender: Gender; city: string; item: string };

const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

const LiveOrders = () => {
  const [visible, setVisible] = useState<Notif[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    let mode: "add" | "remove" = "add";
    let lastName = "";

    const tick = () => {
      setVisible((current) => {
        if (mode === "add") {
          let person = pick(names);
          // avoid the same name twice in a row
          while (person.name === lastName) person = pick(names);
          lastName = person.name;

          const notif: Notif = {
            id: idRef.current++,
            name: person.name,
            gender: person.gender,
            city: pick(cities),
            item: pick(items),
          };

          // newest on top; once we reach 3, switch to reverse mode
          const next = [notif, ...current].slice(0, 3);
          if (next.length >= 3) mode = "remove";
          return next;
        }

        // reverse: remove the newest (top) one by one until all are gone
        const next = current.slice(1);
        if (next.length === 0) mode = "add";
        return next;
      });
    };

    const first = window.setTimeout(tick, 700);
    const timer = window.setInterval(tick, 2200);

    return () => {
      window.clearTimeout(first);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-3 left-3 right-3 z-40 flex flex-col gap-2 sm:bottom-5 sm:left-auto sm:right-4 sm:w-[min(360px,calc(100vw-2rem))] sm:gap-3">
      <AnimatePresence mode="popLayout">
        {visible.map((order) => {
          const isFemale = order.gender === "f";
          return (
            <motion.div
              key={order.id}
              layout
              initial={{ opacity: 0, x: 30, y: 14, scale: 0.94 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 28, scale: 0.94 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="relative overflow-hidden rounded-xl p-[1.5px] shadow-xl shadow-black/30"
            >
              {/* running light wave around the whole box */}
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                <span
                  className="absolute left-1/2 top-1/2 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg 250deg, rgba(66,165,245,0.15) 300deg, #42A5F5 335deg, #00E5FF 350deg, #ffffff 360deg)",
                  }}
                />
              </span>

              {/* inner card */}
              <div className="relative overflow-hidden rounded-[10px] bg-card/95 p-3 backdrop-blur-xl sm:p-4">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border sm:h-11 sm:w-11 ${
                      isFemale
                        ? "border-pink-400/30 bg-pink-500/10 text-pink-400"
                        : "border-sky-400/30 bg-sky-500/10 text-sky-400"
                    }`}
                  >
                    {isFemale ? (
                      <UserRound className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px]" />
                    ) : (
                      <User className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px]" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold leading-snug text-foreground sm:text-sm">
                      <span className="text-primary">{order.name}</span> just ordered their {order.item}.
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground sm:text-[11px]">
                      <MapPin className="h-3 w-3" />
                      {order.city}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default LiveOrders;
