import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, ShoppingCart, Sparkles } from "lucide-react";

interface Medicine {
  id: string;
  name: string;
  description: string;
  emoji: string;
  color: string;
  effect: string;
  price: string;
}

const medicines: Medicine[] = [
  {
    id: "1",
    name: "Happy Pills",
    description: "Instant mood booster with rainbow sprinkles",
    emoji: "😊",
    color: "bg-gradient-to-br from-accent-light to-accent",
    effect: "Guaranteed smiles for 24 hours!",
    price: "₹799"
  },
  {
    id: "2",
    name: "Energy Capsules",
    description: "Bouncy energy with zero side effects",
    emoji: "⚡",
    color: "bg-gradient-to-br from-secondary-light to-secondary",
    effect: "Feel like a superhero!",
    price: "₹1,049"
  },
  {
    id: "3",
    name: "Calm Drops",
    description: "Peaceful vibes in a tiny bottle",
    emoji: "🧘‍♀️",
    color: "bg-gradient-to-br from-gentle to-primary-light",
    effect: "Zen mode activated!",
    price: "₹719"
  },
  {
    id: "4",
    name: "Giggle Gummies",
    description: "Delicious bears that make you laugh",
    emoji: "🐻",
    color: "bg-gradient-to-br from-primary-light to-primary",
    effect: "Uncontrollable giggles!",
    price: "₹639"
  },
  {
    id: "5",
    name: "Sweet Dreams Syrup",
    description: "Magical sleep potion with starlight",
    emoji: "🌙",
    color: "bg-gradient-to-br from-accent to-secondary",
    effect: "Dream of unicorns!",
    price: "₹959"
  },
  {
    id: "6",
    name: "Confidence Tablets",
    description: "Instant courage boost in tablet form",
    emoji: "💪",
    color: "bg-gradient-to-br from-secondary to-accent-light",
    effect: "Feel unstoppable!",
    price: "₹879"
  },
  {
    id: "7",
    name: "DOLO",
    description: "Gentle pain relief in convenient slips",
    emoji: "🌟",
    color: "bg-gradient-to-br from-primary to-accent",
    effect: "Say goodbye to aches and pains!",
    price: "₹40"
  }
];

export const MedicineCatalog = () => {
  const [cart, setCart] = useState<string[]>([]);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const addToCart = (medicineId: string) => {
    if (!cart.includes(medicineId)) {
      setCart([...cart, medicineId]);
    }
  };

  const handleDragStart = (e: React.DragEvent, medicineId: string) => {
    setDraggedItem(medicineId);
    e.dataTransfer.setData("text/plain", medicineId);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Virtual Medicine Shelf</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-primary-dark mb-4">
            Choose Your Medicine
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pick from our magical collection of happiness-inducing medicines!
          </p>
        </div>

        {/* Medicine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {medicines.map((medicine) => (
            <Card 
              key={medicine.id}
              className={`p-6 cursor-pointer transition-bouncy hover:scale-105 shadow-medicine draggable ${
                draggedItem === medicine.id ? 'scale-110 rotate-3' : ''
              } ${cart.includes(medicine.id) ? 'ring-2 ring-accent ring-offset-2' : ''}`}
              draggable
              onDragStart={(e) => handleDragStart(e, medicine.id)}
              onDragEnd={handleDragEnd}
            >
              <div className={`w-full h-32 rounded-2xl ${medicine.color} flex items-center justify-center mb-4 medicine-3d`}>
                <span className="text-6xl">{medicine.emoji}</span>
              </div>
              
              <h3 className="text-xl font-bold text-primary-dark mb-2">
                {medicine.name}
              </h3>
              
              <p className="text-muted-foreground mb-3">
                {medicine.description}
              </p>
              
              <div className="bg-gradient-card rounded-lg p-3 mb-4">
                <p className="text-sm font-medium text-accent">
                  ✨ {medicine.effect}
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary-dark">
                  {medicine.price}
                </span>
                
                <Button 
                  variant={cart.includes(medicine.id) ? "gentle" : "medicine"}
                  size="sm"
                  onClick={() => addToCart(medicine.id)}
                  disabled={cart.includes(medicine.id)}
                  className="group"
                >
                  {cart.includes(medicine.id) ? (
                    "Added! ✅"
                  ) : (
                    <>
                      <Plus className="w-4 h-4 group-hover:animate-bounce" />
                      Add to Cart
                    </>
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Shopping Cart Summary */}
        {cart.length > 0 && (
          <div className="max-w-2xl mx-auto">
            <Card className="p-6 bg-gradient-card border-2 border-accent/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-primary-dark flex items-center gap-2">
                  <ShoppingCart className="w-6 h-6" />
                  Your Cart ({cart.length} items)
                </h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {cart.map((medicineId) => {
                  const medicine = medicines.find(m => m.id === medicineId);
                  return medicine ? (
                    <div key={medicineId} className="bg-white/50 rounded-lg p-3 text-center">
                      <span className="text-2xl">{medicine.emoji}</span>
                      <p className="text-xs font-medium text-primary-dark mt-1">
                        {medicine.name}
                      </p>
                    </div>
                  ) : null;
                })}
              </div>
              
              <Button 
                variant="delivery" 
                size="lg" 
                className="w-full group"
              >
                <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
                Checkout & Start Delivery!
              </Button>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};