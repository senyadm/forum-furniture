import StatsSection from "@/components/StatsSection";
import Hero from "../components/Hero";
import ServicesCarousel from "@/components/ServicesCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactCTA from "@/components/ContactCTA";
import StepsSection from "@/components/StepsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsSection />
      <ServicesCarousel />
      <WhyChooseUs />
      <ContactCTA />
      <StepsSection />
      <TestimonialsSection />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
