// app/remont/page.tsx
import BeforeAfterSection from "@/components/BeforeAfterSection";
import BrandsMarquee from "@/components/BrandsMarquee";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import QualityControlSection from "@/components/QualityControlSection";
import RemontHero from "@/components/RemontHero";
import RemontScopeAccordion from "@/components/RemontScopeAccordion";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustBar from "@/components/TrustBar";

export default function RemontPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      <RemontHero />
      <TrustBar />
      <RemontScopeAccordion />
      <BeforeAfterSection />
      <QualityControlSection />
      <BrandsMarquee />
      <TestimonialsSection />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
