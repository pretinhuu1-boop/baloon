import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ScrollVideoSection } from "@/components/ScrollVideoSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { MetricsShowcase } from "@/components/MetricsShowcase";
import { GamificationSection } from "@/components/GamificationSection";
import { AppPreview } from "@/components/AppPreview";
import { CommunitySection } from "@/components/CommunitySection";
import { FutureSection } from "@/components/FutureSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/ui/page-loader";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <SmoothScroll>
      <main>
        <HeroSection />
        <ScrollVideoSection />
        <FeaturesSection />
        <MetricsShowcase />
        <GamificationSection />
        <AppPreview />
        <CommunitySection />
        <FutureSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      </SmoothScroll>
    </>
  );
}
