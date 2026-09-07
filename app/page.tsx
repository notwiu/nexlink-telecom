import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { SolutionsSection } from "@/components/solutions-section";
import { FaqSection } from "@/components/faq-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <HeroSection />
        <SolutionsSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
