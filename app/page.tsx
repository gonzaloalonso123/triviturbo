import HeroSection from "@/components/hero-section";
import PricingSection from "@/components/pricing-section";
import ProcessSection from "@/components/process-section";
import ReviewsSection from "@/components/reviews-section";
import PortfolioSection from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import RobotAssistant from "@/components/robot-assistant";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PricingSection />
      <ProcessSection />
      <PortfolioSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <RobotAssistant />
    </main>
  );
}
