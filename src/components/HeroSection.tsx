import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Zap } from "lucide-react";
import medicineBottleHero from "@/assets/medicine-bottle-hero.png";

export const HeroSection = () => {
  const [isShaking, setIsShaking] = useState(false);

  const handleOrderClick = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-gentle rounded-full float-gentle opacity-60"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-secondary-light rounded-full float-gentle opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-accent-light rounded-full float-gentle opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-10 w-8 h-8 bg-primary-light rounded-full float-gentle opacity-70" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Hero Content */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-primary-dark font-medium">Medicine Delivered with Love!</span>
              <Heart className="w-5 h-5 text-accent animate-pulse" />
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black mb-6 text-primary-dark">
              Your Health,
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Delivered with Joy!
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-dark/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get your medicines delivered to your doorstep with a sprinkle of fun and a dose of happiness! 
              🏠💊✨
            </p>
          </div>

          {/* Hero Medicine Bottle */}
          <div className="relative mb-8">
            <img 
              src={medicineBottleHero} 
              alt="Friendly cartoon medicine bottle" 
              className="w-80 h-60 mx-auto object-contain medicine-3d bounce-medicine"
            />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isShaking ? 'shake-excitement' : ''}`}>
            <Button 
              variant="medicine" 
              size="medicine"
              onClick={handleOrderClick}
              className="group"
            >
              <Zap className="w-6 h-6 group-hover:animate-bounce" />
              Order Medicine Now!
            </Button>
            
            <Button 
              variant="prescription" 
              size="lg"
              className="group"
            >
              <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              See Daily Prescription
            </Button>
          </div>

          {/* Fun Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-bouncy">
              <div className="text-3xl font-bold text-primary-dark">500+</div>
              <div className="text-primary-dark/70">Happy Patients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-bouncy">
              <div className="text-3xl font-bold text-primary-dark">24/7</div>
              <div className="text-primary-dark/70">Delivery Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-bouncy">
              <div className="text-3xl font-bold text-primary-dark">100%</div>
              <div className="text-primary-dark/70">Fun Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};