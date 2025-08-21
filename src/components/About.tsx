import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Clock, Shield } from "lucide-react";

const About = () => {

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  About Your Favorite Detailer
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Located in Commerce City and serving the entire Denver Metro area, I specialize in 
                  both location-based and mobile detailing services. My commitment to excellence and 
                  customer satisfaction has made me the go-to choice for automotive enthusiasts and 
                  everyday drivers alike.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I pride myself on honest communication, transparent pricing, and delivering 
                  results that exceed expectations. Every vehicle receives my full attention and 
                  professional care, ensuring your car looks better than the day you bought it.
                </p>
              </div>

              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('https://www.google.com/search?q=your+favorite+detailer&sca_esv=5e55e5ee976bdccc&sxsrf=AE3TifMn2vxkGia18IG44y5VSmJ7toFs1A%3A1755758349116&source=hp&ei=Db-maKnzBJ2fkPIPpJ_6oAo&iflsig=AOw8s4IAAAAAaKbNHdTSNZ88i3o3lDQ1MwzlaZmjPw05&oq=your+favorite+det&gs_lp=Egdnd3Mtd2l6IhF5b3VyIGZhdm9yaXRlIGRldCoCCAAyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIIEAAYFhgKGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSNYrUABY3RdwAHgAkAEAmAGrAaABxg-qAQQ0LjEzuAEByAEA-AEBmAIRoAKjEMICBBAjGCfCAhAQIxjwBRiABBgnGMkCGIoFwgIKECMYgAQYJxiKBcICCxAuGIAEGLEDGIMBwgIREC4YgAQYsQMY0QMYgwEYxwHCAgsQABiABBixAxiDAcICDhAAGIAEGLEDGIMBGIoFwgIIEAAYgAQYsQPCAgUQLhiABMICBRAAGIAEwgIOEC4YgAQYsQMYgwEYigXCAg0QLhiABBixAxiDARgKwgIOEC4YgAQYxwEYjgUYrwHCAg0QABiABBixAxiDARgKwgILEC4YgAQYxwEYrwHCAggQLhiABBixA5gDAJIHBDIuMTWgB-XoAbIHBDIuMTW4B6MQwgcGMC4xLjE2yAdS&sclient=gws-wiz#lrd=0x261db19847dbd8ff:0x7a226e5c0ed7cf92,1,,,,', '_blank')}
                className="group"
              >
                See Testimonials
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;