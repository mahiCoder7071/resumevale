import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "#" },
  { label: "Plans",    href: "#pricing" },
  { label: "Features", href: "#features" },
  { label: "Support",  href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-heading text-xl font-bold tracking-tight text-foreground">
          RESUMEVALE<span className="text-primary"></span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => navigate("/order")}
            className="px-5 py-2 text-sm font-bold tracking-widest uppercase bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity"
          >
            START
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); navigate("/order"); }}
            className="w-full px-5 py-2 text-sm font-bold tracking-widest uppercase bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity"
          >
            START
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
