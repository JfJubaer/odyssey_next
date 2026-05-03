import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedItemsSection from "@/components/home/FeaturedItemsSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import CtaSection from "@/components/home/CtaSection";
import BlogPreviewSection from "@/components/home/BlogPreviewSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedItemsSection />
      <CategoriesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <FaqSection />
      <NewsletterSection />
      <CtaSection />
    </>
  );
}

