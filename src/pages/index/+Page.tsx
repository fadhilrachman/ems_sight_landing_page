import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { ProductWalkthroughSection } from "@/components/landing/ProductWalkthroughSection";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { ModalProvider } from "@/components/landing/ModalProvider";

export default function Page() {
  return (
    <ModalProvider>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductWalkthroughSection />
        <SecuritySection />
        <UseCasesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </ModalProvider>
  );
}
