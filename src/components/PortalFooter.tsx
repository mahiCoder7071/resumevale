import { Mail, Phone, MapPin } from "lucide-react";

const PortalFooter = () => (
  <footer className="bg-[hsl(0,0%,8%)] pt-16 pb-8" id="contact">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <h3 className="font-heading text-2xl font-bold text-white mb-4">
            RESUMEVALE<span className="text-primary"></span>
          </h3>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm">
            India's most trusted resume writing service. We help professionals land their dream jobs 
            with ATS-optimized, recruiter-approved resumes.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="#samples" className="hover:text-primary transition-colors">Samples</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> </li>
            <li className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +91 79059 54971</li>
            <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> New Delhi, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 text-center">
        <p className="text-white/30 text-xs">
          © 2022 RESUMEVALE All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default PortalFooter;
