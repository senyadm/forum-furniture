import BrandsMarquee from "@/components/BrandsMarquee";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import MebelCategoriesSection from "@/components/MebelCategoriesSection";
import MebelHero from "@/components/MebelHero";
import MebelMaterialsSection from "@/components/MebelMaterialsSection";
import MebelOrderProcessSection from "@/components/MebelOrderProcessSection";
import MebelServicePromiseSection from "@/components/MebelServicePromiseSection";
import MebelSourcingOptions from "@/components/MebelSourcingOptions";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function MebelPage() {
  return (
    <>
      <MebelHero />
      <MebelCategoriesSection />
      <MebelSourcingOptions />
      <MebelOrderProcessSection />
      <MebelMaterialsSection />
      <MebelServicePromiseSection />
      <BrandsMarquee />
      <TestimonialsSection />
      <ContactFormSection />
      <Footer />
    </>
  );
}
