import CTA from "@/components/pages/home/CTA";
import Hero from "@/components/pages/home/Hero";
import HowItWorks from "@/components/pages/home/HowItWorks";
import PricingSection from "@/components/pages/home/PricingSection";
import WhatToAsk from "@/components/pages/home/WhatToAsk";

export default function HomePage() {
  return (
    <div className="flex flex-col  gap-20">
      <Hero />
      <HowItWorks />
      <WhatToAsk />
      <PricingSection />
      <CTA />
    </div>
  );
}
