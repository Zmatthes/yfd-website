import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Instagram, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    vehicle: '',
    preferredDate: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    toast({
      title: "Quote Request Sent!",
      description: "We'll contact you within 24 hours to schedule your appointment.",
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      vehicle: '',
      preferredDate: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(303) 555-0123",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@yourfavoritedetailer.com",
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Denver Metro Area",
      action: "View Coverage"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "By Appointment Only",
      action: "Schedule"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get Your Free Quote
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to give your vehicle the care it deserves? Contact us today for a 
              personalized quote and let's schedule your appointment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-gradient-card border-border shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Request Your Quote
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="bg-input border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="bg-input border-border"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="bg-input border-border">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic Detail - $80</SelectItem>
                        <SelectItem value="premium">Premium Detail - $150</SelectItem>
                        <SelectItem value="ultimate">Ultimate Detail - $250</SelectItem>
                        <SelectItem value="ceramic">Ceramic Coating</SelectItem>
                        <SelectItem value="correction">Paint Correction</SelectItem>
                        <SelectItem value="mobile">Mobile Service</SelectItem>
                        <SelectItem value="custom">Custom Package</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle">Vehicle Details</Label>
                    <Input
                      id="vehicle"
                      placeholder="Year, Make, Model"
                      value={formData.vehicle}
                      onChange={(e) => handleInputChange('vehicle', e.target.value)}
                      className="bg-input border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred Date/Time</Label>
                  <Input
                    id="preferredDate"
                    placeholder="e.g., Next week, weekends only, flexible"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                    className="bg-input border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your vehicle's condition, special requests, or any questions you have..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-input border-border min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                >
                  <Calendar className="h-5 w-5" />
                  Send Quote Request
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6 bg-gradient-card border-border hover:shadow-card transition-smooth">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{info.title}</h4>
                          <p className="text-muted-foreground">{info.details}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <Card className="p-6 bg-gradient-card border-border">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Follow Our Work
                </h4>
                <p className="text-muted-foreground mb-4">
                  Stay updated with our latest projects and get detailing tips on Instagram.
                </p>
                <Button 
                  variant="luxury" 
                  onClick={() => window.open('https://instagram.com/your.favorite.detailer', '_blank')}
                  className="w-full"
                >
                  <Instagram className="h-5 w-5" />
                  @your.favorite.detailer
                </Button>
              </Card>

              {/* Business Hours */}
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Appointment Only Service
                </h4>
                <p className="text-muted-foreground">
                  We operate by appointment only to ensure each vehicle receives our complete 
                  attention and care. Contact us to schedule your preferred time slot.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;