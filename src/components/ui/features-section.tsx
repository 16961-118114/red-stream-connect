import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  MapPin, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  Mic, 
  Trophy,
  Heart,
  Globe
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Smart algorithm matches donors and recipients based on blood type, location, urgency, and availability in real-time.",
      gradient: "from-primary to-primary-glow",
      delay: "0"
    },
    {
      icon: MapPin,
      title: "Live Location Tracking",
      description: "Real-time geofencing technology finds the nearest donors and provides optimal routing for fastest response.",
      gradient: "from-success to-emerald-400",
      delay: "100"
    },
    {
      icon: Zap,
      title: "Emergency Alerts",
      description: "Instant push notifications to all compatible donors within proximity during critical situations.",
      gradient: "from-emergency to-accent",
      delay: "200"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Anonymized matching system ensures donor privacy while maintaining trust through verified profiles.",
      gradient: "from-purple-500 to-purple-400",
      delay: "300"
    },
    {
      icon: Mic,
      title: "Voice Requests",
      description: "Submit blood requests using voice commands for hands-free operation during emergencies.",
      gradient: "from-blue-500 to-cyan-400",
      delay: "400"
    },
    {
      icon: Trophy,
      title: "Gamification System",
      description: "Earn badges, climb leaderboards, and track your impact to encourage regular donations.",
      gradient: "from-amber-500 to-yellow-400",
      delay: "500"
    }
  ];

  const stats = [
    {
      icon: Clock,
      label: "Average Response Time",
      value: "< 2 mins",
      description: "From request to donor match"
    },
    {
      icon: Users,
      label: "Active Donors",
      value: "25,000+",
      description: "Verified blood donors"
    },
    {
      icon: Heart,
      label: "Lives Saved",
      value: "50,000+",
      description: "Successful donations"
    },
    {
      icon: Globe,
      label: "Cities Covered",
      value: "150+",
      description: "Across multiple countries"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Brain className="mr-2 h-4 w-4" />
            Advanced Technology
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powered by
            <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Intelligent Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our AI-driven platform revolutionizes blood donation with smart matching, 
            real-time coordination, and seamless user experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medical transition-all duration-500 border-primary/10 animate-fade-in"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 bg-gradient-to-r ${feature.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Platform Impact</h3>
            <p className="text-muted-foreground">Real-time statistics from our global network</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}