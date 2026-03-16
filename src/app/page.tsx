import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { MetricsShowcase } from "@/components/MetricsShowcase";
import { GamificationSection } from "@/components/GamificationSection";
import { AppPreview } from "@/components/AppPreview";
import { CommunitySection } from "@/components/CommunitySection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <MetricsShowcase />
        <GamificationSection />
        <AppPreview />
        <CommunitySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
