import LandingNavbar from "@/app/components/LandingNavbar";
import HeroSection from "@/app/components/HeroSection";
import StatsSection from "@/app/components/StatsSection";
import FeaturesSection from "@/app/components/FeaturesSection";
import TrustedSection from "@/app/components/TrustedSection";
import HowItWorksSection from "@/app/components/HowItWorksSection";
import LiveDemoSection from "@/app/components/LiveDemoSection";
import PricingSection from "@/app/components/PricingSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import FAQSection from "@/app/components/FAQSection";
import FooterSection from "@/app/components/FooterSection";
import GuestAnalysisSection from "./components/GuestAnalysisSection";
import SectionWrapper from "@/app/components/SectionWrapper";
export default function Home() {
  return (
    <>
      <LandingNavbar />
      <HeroSection />


        <SectionWrapper>
    <StatsSection />
  </SectionWrapper>

        <SectionWrapper>
    <FeaturesSection />
  </SectionWrapper>

           <SectionWrapper>
    <TrustedSection />
  </SectionWrapper>
          <SectionWrapper>
    <HowItWorksSection />
  </SectionWrapper>

           <SectionWrapper>
    <LiveDemoSection />
  </SectionWrapper>
            <SectionWrapper>
    <GuestAnalysisSection />
  </SectionWrapper>
          <SectionWrapper>
    <PricingSection />
  </SectionWrapper>
          <SectionWrapper>
    <TestimonialsSection />
  </SectionWrapper>
           <SectionWrapper>
    <FAQSection />
  </SectionWrapper>

            <SectionWrapper>
    <FooterSection />
  </SectionWrapper>
    </>
  );
}