import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, MapPin, Phone, Heart, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EmergencyRequestProps {
  isOpen: boolean;
  onClose: () => void;
}

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export function EmergencyRequest({ isOpen, onClose }: EmergencyRequestProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    bloodType: "",
    unitsNeeded: "",
    hospitalName: "",
    contactPerson: "",
    contactPhone: "",
    location: "",
    urgencyDetails: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate emergency request processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Emergency Alert Sent!",
      description: "Nearby donors have been notified. Expected response within 5 minutes.",
    });
    
    setIsSubmitting(false);
    onClose();
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg mx-auto bg-card border-emergency/30 shadow-emergency">
        <DialogHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-emergency/10 rounded-full animate-pulse">
              <AlertTriangle className="h-8 w-8 text-emergency" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Emergency Blood Request
          </DialogTitle>
          <Badge className="mx-auto bg-emergency/10 text-emergency border-emergency/30 animate-pulse">
            <Zap className="mr-2 h-3 w-3" />
            Priority Alert System
          </Badge>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center">
                <Heart className="mr-2 h-4 w-4 text-emergency" />
                Blood Type Needed
              </Label>
              <Select value={formData.bloodType} onValueChange={(value) => updateFormData("bloodType", value)}>
                <SelectTrigger className="border-emergency/20 focus:border-emergency">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {bloodTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      <span className="font-semibold text-emergency">{type}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium">Units Required</Label>
              <Input
                value={formData.unitsNeeded}
                onChange={(e) => updateFormData("unitsNeeded", e.target.value)}
                placeholder="e.g., 2"
                required
                type="number"
                min="1"
                max="10"
                className="border-emergency/20 focus:border-emergency"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Hospital/Medical Facility</Label>
            <Input
              value={formData.hospitalName}
              onChange={(e) => updateFormData("hospitalName", e.target.value)}
              placeholder="Enter hospital name"
              required
              className="border-emergency/20 focus:border-emergency"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Contact Person</Label>
              <Input
                value={formData.contactPerson}
                onChange={(e) => updateFormData("contactPerson", e.target.value)}
                placeholder="Doctor/Nurse name"
                required
                className="border-emergency/20 focus:border-emergency"
              />
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                Contact Phone
              </Label>
              <Input
                value={formData.contactPhone}
                onChange={(e) => updateFormData("contactPhone", e.target.value)}
                placeholder="+1 (555) 123-4567"
                required
                className="border-emergency/20 focus:border-emergency"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              Hospital Location
            </Label>
            <Input
              value={formData.location}
              onChange={(e) => updateFormData("location", e.target.value)}
              placeholder="Address or closest landmark"
              required
              className="border-emergency/20 focus:border-emergency"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              Additional Details
            </Label>
            <Textarea
              value={formData.urgencyDetails}
              onChange={(e) => updateFormData("urgencyDetails", e.target.value)}
              placeholder="Patient condition, time sensitivity, any special requirements..."
              rows={3}
              className="border-emergency/20 focus:border-emergency resize-none"
            />
          </div>

          <div className="bg-emergency/5 border border-emergency/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-emergency mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">Emergency Protocol</p>
                <p className="text-muted-foreground">
                  This will immediately alert all compatible donors within a 10km radius. 
                  Only use for genuine medical emergencies.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" className="flex-1" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              type="submit" 
              variant="emergency" 
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Sending Alert...
                </>
              ) : (
                <>
                  <Zap className="mr-2 h-4 w-4" />
                  Send Emergency Alert
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}