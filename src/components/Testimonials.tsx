import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Add Your First Review",
      rating: 5,
      text: "Upload your testimonials and I'll add them here with proper formatting and styling.",
      location: "Denver, CO"
    },
    {
      id: 2,
      name: "Sample Review",
      rating: 5,
      text: "This is where your customer testimonials will appear. Each review will show the customer's name, rating, and their feedback.",
      location: "Commerce City, CO"
    },
    {
      id: 3,
      name: "Another Happy Customer",
      rating: 5,
      text: "Upload your real testimonials and I'll replace these placeholder reviews with your actual customer feedback.",
      location: "Aurora, CO"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? "fill-primary text-primary" 
            : "fill-muted text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers 
              have to say about their detailing experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 bg-background border border-border">
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;