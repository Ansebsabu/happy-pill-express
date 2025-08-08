import { Button } from "@/components/ui/button";
import { Heart, Pill, Truck, Sparkles } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Pill className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-black text-primary-dark">
              MedDelivery
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="sm" className="gap-2">
              <Sparkles className="w-4 h-4" />
              Daily Prescription
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Pill className="w-4 h-4" />
              Medicine Shelf
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Truck className="w-4 h-4" />
              Track Delivery
            </Button>
          </div>

          {/* CTA */}
          <Button variant="medicine" size="sm" className="gap-2">
            <Heart className="w-4 h-4 animate-pulse" />
            Order Now
          </Button>
        </div>
      </div>
    </nav>
  );
};