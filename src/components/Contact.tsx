import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
              Contact Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Feel free to reach out with any questions.
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            <Card className="p-12 bg-gradient-card border-border shadow-luxury">
              <Phone className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-foreground mb-4 font-display">
                CALL OR TEXT
              </h3>
              <a 
                href="tel:+13038104626" 
                className="inline-block bg-gradient-accent text-white px-8 py-4 rounded-lg text-2xl font-bold hover:scale-105 transition-smooth shadow-luxury font-display"
              >
                (303) 810-4626
              </a>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 bg-gradient-card border-border shadow-card">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2 font-display">
                  SERVICE AREA
                </h4>
                <p className="text-muted-foreground">
                  Denver Metro Area<br/>
                  Commerce City & Surrounding Areas
                </p>
              </Card>

              <Card className="p-8 bg-gradient-card border-border shadow-card">
                <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2 font-display">
                  HOURS
                </h4>
                <p className="text-muted-foreground">
                  Appointment Only<br/>
                  Mon - Sun
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-primary/5 border-primary/20">
              <Instagram className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-2 font-display">
                FOLLOW OUR WORK
              </h4>
              <a 
                href="https://www.instagram.com/your.favorite.detailer/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline text-lg"
              >
                @your.favorite.detailer
              </a>
            </Card>
          </div>

            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <p className="text-muted-foreground text-sm">
                <strong>Mobile Service Available:</strong> We come to you throughout the Denver Metro area. 
                Additional mobile fee may apply based on location. Drop-off service always preferred for best results.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;