import Footer from "./Footer";
import Hero from "./Hero";
import ImpactGrid from "./ImpactGrid";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import PurposeSection from "./PurposeSection";
import Gallery from "./Gallery";
import CTABanner from "./CTABanner";
import SocialMediaFeed from "./SocialMediaFeed";

/**
 * Premium Home Page - Waste Wise Humanitarian Initiative (WHI)
 *
 * Design System: Eco-Tech Premium
 * - Hero: Bold typography, gradient text, responsive layout
 * - Sections: Glassmorphism cards, smooth fade-in animations
 * - Motion: Staggered entrance, hover lift effects
 * - Colors: Sage Green, Slate Blue, Warm White accents
 */

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-background text-foreground'>
      {/* Hero Section */}
      <Hero />

      {/* Impact Grid Section */}
      <ImpactGrid />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Purpose & Target Beneficiaries Section */}
      <PurposeSection />

      {/* Gallery Section */}
      <Gallery />

      {/* CTA Banner Section */}
      <CTABanner />

      {/* Social Media Feed Section */}
      <SocialMediaFeed />

      {/* Footer */}
      <Footer />
    </div>
  );
}
