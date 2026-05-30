import { ContactSection } from "@/components/landing/contact-section";
import { HeroSection } from "@/components/landing/hero-section";
import { PrincessmelClubSection } from "@/components/landing/princessmel-club-section";
import { WeeklyCollectionSection } from "@/components/landing/weekly-collection-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ProductsSection } from "@/components/products/products-section";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas text-ink">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-90" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[460px] bg-[linear-gradient(180deg,rgba(255,255,255,0.45),transparent)]" />
      <div className="relative">
        <Header />
        <main>
          <HeroSection />
          <WeeklyCollectionSection />
          <ProductsSection />
          <PrincessmelClubSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
