import { AppPromoSection } from "@/components/sections/AppPromoSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturedMoviesSection } from "@/components/sections/FeaturedMoviesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ShowtimesSection } from "@/components/sections/ShowtimesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Index() {
  return (
    <div className="space-y-24 pb-24">
      <HeroSection />
      <ShowtimesSection />
      <FeaturedMoviesSection />
      <ExperienceSection />
      <TestimonialsSection />
      <AppPromoSection />
    </div>
  );
}
