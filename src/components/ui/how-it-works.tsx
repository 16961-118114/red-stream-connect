import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  UserPlus, 
  Search, 
  MapPin, 
  Heart,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: UserPlus,
      title: "Quick Registration",
      description: "Sign up as a donor or recipient with verified medical information and location preferences.",
      color: "from-primary to-primary-glow"
    },
    {
      step: "02", 
      icon: Search,
      title: "AI Smart Matching",
      description: "Our intelligent system instantly matches blood requests with compatible donors based on multiple factors.",
      color: "from-success to-emerald-400"
    },
    {
      step: "03",
      icon: MapPin,
      title: "Real-Time Coordination",
      description: "Get live location updates, optimal routing, and instant communication between all parties.",
      color: "from-accent to-orange-400"
    },
    {
      step: "04",
      icon: Heart,
      title: "Life-Saving Impact",
      description: "Complete the donation process and track your contribution to saving lives in your community.",
      color: "from-emergency to-red-400"
    }
  ];

  const benefits = [
    "Instant donor notifications within 5km radius",
    "AI-powered compatibility matching",
    "Real-time location tracking and navigation",
    "Secure medical record verification",
    "24/7 emergency response system",
    "Gamified donation tracking and rewards"
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-success/10 text-success border-success/20">
            <CheckCircle className="mr-2 h-4 w-4" />
            Simple Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How LifeConnect
            <span className="block bg-gradient-to-r from-success to-emerald-400 bg-clip-text text-transparent">
              Saves Lives
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our streamlined 4-step process ensures rapid response times and 
            seamless coordination between donors, recipients, and medical facilities.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines - Desktop Only */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-success via-accent to-emergency opacity-20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="group hover:shadow-medical transition-all duration-500 border-primary/10 h-full">
                  <CardContent className="p-6 text-center">
                    {/* Step Number */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-card border-2 border-primary rounded-full flex items-center justify-center text-xs font-bold text-primary">
                        {step.step}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Arrow - Desktop Only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 z-10">
                    <div className="w-8 h-8 bg-card border border-primary/20 rounded-full flex items-center justify-center shadow-sm">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary/5 via-success/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Why Choose LifeConnect?</h3>
              <p className="text-muted-foreground">Advanced features that make blood donation faster and more reliable</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg border border-primary/5">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}