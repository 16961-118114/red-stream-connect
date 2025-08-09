import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Heart, User, Phone, MapPin, Calendar, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "donor" | "recipient" | null;
}

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export function RegistrationModal({ isOpen, onClose, type }: RegistrationModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodType: "",
    age: "",
    location: "",
    urgencyLevel: "normal"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate registration
    toast({
      title: "Registration Successful!",
      description: `Welcome to LifeConnect, ${formData.name}. You're now registered as a ${type}.`,
    });
    
    // Reset form and close
    setFormData({
      name: "",
      email: "",
      phone: "",
      bloodType: "",
      age: "",
      location: "",
      urgencyLevel: "normal"
    });
    onClose();
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!type) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-card border-primary/20 shadow-medical">
        <DialogHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              {type === "donor" ? (
                <Heart className="h-8 w-8 text-primary" />
              ) : (
                <User className="h-8 w-8 text-primary" />
              )}
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {type === "donor" ? "Become a Donor" : "Find Blood"}
          </DialogTitle>
          <Badge className="mx-auto bg-primary/10 text-primary border-primary/20">
            <Shield className="mr-2 h-3 w-3" />
            Verified & Secure
          </Badge>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => updateFormData("name", e.target.value)}
              placeholder="Enter your full name"
              required
              className="border-primary/20 focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                placeholder="your@email.com"
                required
                className="border-primary/20 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age" className="text-sm font-medium">Age</Label>
              <Input
                id="age"
                type="number"
                value={formData.age}
                onChange={(e) => updateFormData("age", e.target.value)}
                placeholder="25"
                required
                min="18"
                max="65"
                className="border-primary/20 focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              Phone Number
            </Label>
            <Input
              value={formData.phone}
              onChange={(e) => updateFormData("phone", e.target.value)}
              placeholder="+1 (555) 123-4567"
              required
              className="border-primary/20 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center">
              <Heart className="mr-2 h-4 w-4 text-primary" />
              Blood Type
            </Label>
            <Select value={formData.bloodType} onValueChange={(value) => updateFormData("bloodType", value)}>
              <SelectTrigger className="border-primary/20 focus:border-primary">
                <SelectValue placeholder="Select blood type" />
              </SelectTrigger>
              <SelectContent>
                {bloodTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    <span className="font-semibold text-primary">{type}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              Location
            </Label>
            <Input
              value={formData.location}
              onChange={(e) => updateFormData("location", e.target.value)}
              placeholder="City, State"
              required
              className="border-primary/20 focus:border-primary"
            />
          </div>

          {type === "recipient" && (
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Urgency Level
              </Label>
              <Select value={formData.urgencyLevel} onValueChange={(value) => updateFormData("urgencyLevel", value)}>
                <SelectTrigger className="border-primary/20 focus:border-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal (Within a week)</SelectItem>
                  <SelectItem value="urgent">Urgent (Within 24 hours)</SelectItem>
                  <SelectItem value="emergency">Emergency (Immediate)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" className="flex-1" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              type="submit" 
              variant={type === "donor" ? "hero" : "success"} 
              className="flex-1"
            >
              {type === "donor" ? "Join as Donor" : "Find Blood"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}