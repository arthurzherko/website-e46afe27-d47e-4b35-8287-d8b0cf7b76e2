import { HeroSection } from '@/components/hero/HeroSection';
import { GamingSetups } from '@/components/features/GamingSetups';
import { PricingSection } from '@/components/pricing/PricingSection';
import { ContactSection } from '@/components/contact/ContactSection';

const Home = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <GamingSetups />
      <PricingSection />
      <ContactSection />
    </main>
  );
};

export default Home;