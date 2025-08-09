import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-blood-donation.jpg";

interface HeroSectionProps {
  onDonorSignup: () => void;
  onRecipientSignup: () => void;
  onEmergencyRequest: () => void;
}

export function HeroSection({ onDonorSignup, onRecipientSignup, onEmergencyRequest }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Blood donation healthcare" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center">
        <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-fade-in">
          <Heart className="mr-2 h-4 w-4 animate-pulse text-primary" />
          AI-Powered Blood Donation Platform
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-slide-up max-w-4xl">
          Save Lives with
          <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Smart Blood Matching
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl leading-relaxed animate-fade-in">
          Connect donors and recipients instantly with AI-powered matching, real-time location tracking, 
          and emergency alerts. Making blood donation faster, smarter, and more accessible.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up">
          <Button 
            variant="hero" 
            size="xl" 
            onClick={onDonorSignup}
            className="min-w-[200px]"
          >
            <Heart className="mr-2 h-5 w-5" />
            Become a Donor
          </Button>
          <Button 
            variant="outline" 
            size="xl" 
            onClick={onRecipientSignup}
            className="min-w-[200px]"
          >
            <Users className="mr-2 h-5 w-5" />
            Find Blood
          </Button>
          <Button 
            variant="emergency" 
            size="xl" 
            onClick={onEmergencyRequest}
            className="min-w-[200px]"
          >
            <Clock className="mr-2 h-5 w-5" />
            Emergency Request
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full animate-fade-in">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-card hover:shadow-medical transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Heart className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">50,000+</h3>
            <p className="text-muted-foreground">Lives Saved</p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-success/20 shadow-card hover:shadow-medical transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-success/10 rounded-full">
                <MapPin className="h-8 w-8 text-success" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">2 Min</h3>
            <p className="text-muted-foreground">Average Response</p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-accent/20 shadow-card hover:shadow-medical transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-accent/10 rounded-full">
                <Users className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">25,000+</h3>
            <p className="text-muted-foreground">Active Donors</p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-bounce-gentle" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse-slow" />
    </section>
  );
}