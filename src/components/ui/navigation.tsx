import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Menu, X, Bell, User, MapPin } from "lucide-react";
import appIcon from "@/assets/app-icon.png";

interface NavigationProps {
  onEmergencyRequest: () => void;
}

export function Navigation({ onEmergencyRequest }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={appIcon} alt="LifeConnect" className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                LifeConnect
              </h1>
              <p className="text-xs text-muted-foreground">by Afifa Khan</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>
              <Button variant="emergency" size="sm" onClick={onEmergencyRequest}>
                <Bell className="mr-2 h-4 w-4" />
                Emergency
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors py-2">
                How It Works
              </a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors py-2">
                Features
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">
                About
              </a>
              
              <div className="flex flex-col space-y-2 pt-3">
                <Button variant="outline" size="sm">
                  <User className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
                <Button variant="emergency" size="sm" onClick={onEmergencyRequest}>
                  <Bell className="mr-2 h-4 w-4" />
                  Emergency Alert
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Live Status Bar */}
      <div className="bg-primary/5 border-t border-primary/10 px-6 py-2">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-muted-foreground">245 donors online</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">12 blood banks nearby</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-emergency" />
              <span className="text-muted-foreground">3 active requests</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}