import Navbar from "@/components/Navbar";
import PortalHero from "@/components/PortalHero";
import SamplesMarquee from "@/components/SamplesMarquee";
import ComparisonSection from "@/components/ComparisonSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import PricingSection from "@/components/PricingSection";
import PortalFooter from "@/components/PortalFooter";
import LiveOrders from "@/components/LiveOrders";

const Index = () => (
  <main className="min-h-screen">
    <Navbar />
    <PortalHero />
    <SamplesMarquee />
    <ComparisonSection />
    <FeaturesSection />
    <ServicesSection />
    <StatsSection />
    <PricingSection />
    <PortalFooter />
    <LiveOrders />
  </main>
);

export default Index;
