import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Truck, Home, Gift, Sparkles } from "lucide-react";
import deliveryTruck from "@/assets/delivery-truck.png";

export const DeliveryAnimation = () => {
  const [isDelivering, setIsDelivering] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [deliveryComplete, setDeliveryComplete] = useState(false);

  const startDelivery = () => {
    setIsDelivering(true);
    setDeliveryComplete(false);
    
    // Simulate delivery process
    setTimeout(() => {
      setIsDelivering(false);
      setDeliveryComplete(true);
      setShowConfetti(true);
      
      // Hide confetti after animation
      setTimeout(() => {
        setShowConfetti(false);
      }, 2000);
    }, 3000);
  };

  const resetDelivery = () => {
    setDeliveryComplete(false);
    setShowConfetti(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-light/20 to-accent-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary-dark mb-4">
            Watch Your Medicine Arrive!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the most fun delivery process ever! 🚚✨
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-card overflow-hidden relative">
            {/* Confetti Animation */}
            {showConfetti && (
              <div className="absolute inset-0 pointer-events-none z-20">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 confetti-burst"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      backgroundColor: ['#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6'][i % 5],
                      animationDelay: `${Math.random() * 0.5}s`
                    }}
                  ></div>
                ))}
              </div>
            )}

            {/* Delivery Animation Area */}
            <div className="relative h-64 mb-8 bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl overflow-hidden">
              {/* Road */}
              <div className="absolute bottom-0 w-full h-8 bg-gray-400 opacity-50"></div>
              <div className="absolute bottom-2 w-full h-1 bg-white opacity-60 border-dashed border-t-2 border-gray-600"></div>

              {/* Delivery Truck */}
              <div className={`absolute bottom-8 transition-all duration-3000 ease-out ${
                isDelivering ? 'delivery-zoom' : deliveryComplete ? 'left-1/2 transform -translate-x-1/2' : 'left-4'
              }`}>
                <img 
                  src={deliveryTruck} 
                  alt="Delivery truck" 
                  className={`w-32 h-24 object-contain ${isDelivering ? 'animate-bounce' : ''}`}
                />
              </div>

              {/* House */}
              <div className="absolute bottom-8 right-8 flex flex-col items-center">
                <Home className={`w-16 h-16 text-primary-dark ${deliveryComplete ? 'animate-bounce' : ''}`} />
                {deliveryComplete && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse">
                    <Gift className="w-4 h-4 text-white m-0.5" />
                  </div>
                )}
              </div>

              {/* Delivery Status */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                {isDelivering && (
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 flex items-center gap-2 animate-bounce">
                    <Truck className="w-4 h-4 text-primary" />
                    <span className="text-primary font-medium">Delivering...</span>
                  </div>
                )}
                {deliveryComplete && (
                  <div className="bg-secondary/90 backdrop-blur-sm rounded-full px-6 py-2 flex items-center gap-2">
                    <Gift className="w-4 h-4 text-white" />
                    <span className="text-white font-medium">Delivered! 🎉</span>
                  </div>
                )}
              </div>
            </div>

            {/* Controls */}
            <div className="text-center space-y-4">
              {!deliveryComplete ? (
                <Button 
                  variant="delivery" 
                  size="medicine"
                  onClick={startDelivery}
                  disabled={isDelivering}
                  className="group"
                >
                  {isDelivering ? (
                    <>
                      <Truck className="w-6 h-6 animate-bounce" />
                      Delivering Your Medicine...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-6 h-6 group-hover:animate-spin" />
                      Start Magical Delivery!
                    </>
                  )}
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="bg-secondary/10 rounded-2xl p-6 text-center">
                    <h3 className="text-2xl font-bold text-secondary mb-2">
                      🎉 Delivery Complete! 🎉
                    </h3>
                    <p className="text-secondary/80">
                      Your happiness has been delivered safely to your door!
                    </p>
                  </div>
                  
                  <Button 
                    variant="medicine" 
                    size="lg"
                    onClick={resetDelivery}
                    className="group"
                  >
                    <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                    Order Again!
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};