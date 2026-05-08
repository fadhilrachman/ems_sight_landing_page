import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { ProductWalkthroughSection } from "@/components/landing/ProductWalkthroughSection";
import { SecuritySection } from "@/components/landing/SecuritySection";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductWalkthroughSection />
        <SecuritySection />
        {/* UseCasesSection, FAQSection, CTASection, Footer — dikerjakan tim lain */}
      </main>
    </>
  );
}
