import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shuffle, Star, Smile } from "lucide-react";
import doctorCharacter from "@/assets/doctor-character.png";

const funnyPrescriptions = [
  "Take two gummy bears and dance for 5 minutes! 💃🕺",
  "Drink a whole glass of water, then call your best friend and tell them a joke! 😄💧",
  "Give yourself three big hugs and say 'I'm awesome!' out loud! 🤗✨",
  "Watch a funny cat video for instant mood boost! 🐱📱",
  "Take a 10-minute walk while humming your favorite song! 🎵🚶‍♀️",
  "Eat a piece of chocolate mindfully and savor every bite! 🍫😌",
  "Write down 3 things you're grateful for today! 📝💖",
  "Do 5 jumping jacks and shout 'I feel great!' 🏃‍♂️💪",
  "Send a silly selfie to someone who makes you smile! 🤳😊",
  "Take 5 deep breaths and imagine you're on a tropical beach! 🏖️🌴"
];

const doctorNames = [
  "Dr. Anseb.A"
];

export const PrescriberOfTheDay = () => {
  const [currentPrescription, setCurrentPrescription] = useState(funnyPrescriptions[0]);
  const [currentDoctor, setCurrentDoctor] = useState(doctorNames[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const getPrescription = () => {
    setIsAnimating(true);
    
    setTimeout(() => {
      const randomPrescription = funnyPrescriptions[Math.floor(Math.random() * funnyPrescriptions.length)];
      const randomDoctor = doctorNames[Math.floor(Math.random() * doctorNames.length)];
      
      setCurrentPrescription(randomPrescription);
      setCurrentDoctor(randomDoctor);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-medium">Daily Dose of Fun</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-primary-dark mb-4">
            Prescriber of the Day
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your daily dose of happiness with our certified fun prescriptions!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="prescription-card p-8 md:p-12 text-center">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Doctor Character */}
              <div className="flex-shrink-0">
                <div className={`relative ${isAnimating ? 'animate-bounce' : ''}`}>
                  <img 
                    src={doctorCharacter} 
                    alt="Friendly cartoon doctor" 
                    className="w-48 h-48 object-contain medicine-3d"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Prescription Content */}
              <div className="flex-1 text-left">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">
                    {currentDoctor}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-secondary">
                    <Smile className="w-4 h-4" />
                    <span className="text-sm font-medium">Certified Happiness Specialist</span>
                  </div>
                </div>

                <div className="bg-gradient-card rounded-2xl p-6 mb-6 border-2 border-primary-light/20">
                  <h4 className="text-lg font-semibold text-primary-dark mb-3">
                    Today's Prescription:
                  </h4>
                  <p className={`text-xl text-primary-dark font-medium leading-relaxed ${isAnimating ? 'opacity-50' : 'opacity-100'} transition-smooth`}>
                    {currentPrescription}
                  </p>
                </div>

                <Button 
                  variant="delivery" 
                  size="lg"
                  onClick={getPrescription}
                  disabled={isAnimating}
                  className="group"
                >
                  <Shuffle className={`w-5 h-5 ${isAnimating ? 'animate-spin' : 'group-hover:animate-spin'}`} />
                  Get New Prescription!
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};