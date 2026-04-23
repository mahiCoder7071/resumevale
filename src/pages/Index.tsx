import Navbar from "@/components/Navbar";
import PortalHero from "@/components/PortalHero";
import SamplesMarquee from "@/components/SamplesMarquee";
import ComparisonSection from "@/components/ComparisonSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import PricingSection from "@/components/PricingSection";
import PortalFooter from "@/components/PortalFooter";

const Index = () => (
  <main className="min-h-screen">
    <Navbar />
    <PortalHero />
    <SamplesMarquee />
    <ComparisonSection />
    <FeaturesSection />
    <StatsSection />
    <PricingSection />
    <PortalFooter />
  </main>
);

export default Index;
