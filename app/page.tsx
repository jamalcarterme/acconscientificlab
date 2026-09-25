import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Slider from "@/components/Slider";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="pb-16 lg:pb-0">
      <Header />
      <Hero />
      <TrustBar />
      <Products />
      <WhyUs />
      <Slider />
      <CTASection />
      <Contact />
      <Footer />
      <FloatingContact />
    </main>
  );
}
