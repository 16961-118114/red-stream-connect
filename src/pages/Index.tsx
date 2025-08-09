import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { HowItWorksSection } from "@/components/ui/how-it-works";
import { FeaturesSection } from "@/components/ui/features-section";
import { RegistrationModal } from "@/components/ui/registration-modal";
import { EmergencyRequest } from "@/components/ui/emergency-request";

const Index = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [registrationType, setRegistrationType] = useState<"donor" | "recipient" | null>(null);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  const handleDonorSignup = () => {
    setRegistrationType("donor");
    setIsRegistrationOpen(true);
  };

  const handleRecipientSignup = () => {
    setRegistrationType("recipient");
    setIsRegistrationOpen(true);
  };

  const handleEmergencyRequest = () => {
    setIsEmergencyOpen(true);
  };

  const closeRegistration = () => {
    setIsRegistrationOpen(false);
    setRegistrationType(null);
  };

  const closeEmergency = () => {
    setIsEmergencyOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onEmergencyRequest={handleEmergencyRequest} />
      
      <main className="pt-24">
        <HeroSection 
          onDonorSignup={handleDonorSignup}
          onRecipientSignup={handleRecipientSignup}
          onEmergencyRequest={handleEmergencyRequest}
        />
        <HowItWorksSection />
        <FeaturesSection />
      </main>

      <RegistrationModal 
        isOpen={isRegistrationOpen}
        onClose={closeRegistration}
        type={registrationType}
      />

      <EmergencyRequest 
        isOpen={isEmergencyOpen}
        onClose={closeEmergency}
      />
    </div>
  );
};

export default Index;
