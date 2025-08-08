import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PrescriberOfTheDay } from "@/components/PrescriberOfTheDay";
import { MedicineCatalog } from "@/components/MedicineCatalog";
import { DeliveryAnimation } from "@/components/DeliveryAnimation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <PrescriberOfTheDay />
        <MedicineCatalog />
        <DeliveryAnimation />
      </main>
    </div>
  );
};

export default Index;
