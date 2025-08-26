import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink, Camera } from "lucide-react";

const Gallery = () => {
  const openInstagram = () => {
    window.open('https://www.instagram.com/your.favorite.detailer/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Work Speaks for Itself
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              See the dramatic transformations and attention to detail that make us Denver's 
              favorite automotive detailing service.
            </p>
            
            {/* Instagram Link */}
            <Button 
              variant="hero"
              onClick={openInstagram}
              className="group"
            >
              <Instagram className="h-5 w-5" />
              Follow @your.favorite.detailer
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Gallery Grid - All Transformation Photos */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {[
                { src: '/lovable-uploads/9efe2697-fc17-4dad-9e42-85ecb959afd9.png', alt: 'Professional car transformation before and after Denver mobile detailing service' },
                { src: '/lovable-uploads/b27f11cd-e924-4747-a35e-f4c8f1d03195.png', alt: 'Luxury vehicle interior and exterior detailing Commerce City professional results' },
                { src: '/lovable-uploads/e038490e-e179-4949-9ecf-f05ed59d82f4.png', alt: 'Premium auto detailing transformation Your Favorite Detailer Denver Metro' },
                { src: '/lovable-uploads/78eee3c6-b987-4d73-abe0-027c68842b3e.png', alt: 'Professional vehicle restoration detailing work Denver automotive care' },
                { src: '/lovable-uploads/54387e23-2161-4189-aaae-449d2bdeda26.png', alt: 'Expert car cleaning and detailing transformation Commerce City mobile service' },
                { src: '/lovable-uploads/84408e06-20d5-4323-85f8-690a274489a2.png', alt: 'High-end vehicle detailing before and after Denver Metro professional results' },
                { src: '/lovable-uploads/a4721bde-4e71-41e3-836f-7f23bdc64318.png', alt: 'Comprehensive auto detailing transformation Your Favorite Detailer showcase' },
                { src: '/lovable-uploads/1c325991-263e-41c9-9670-4f8aecb105cb.png', alt: 'Professional automotive detailing excellence Denver mobile car care service' },
                { src: '/lovable-uploads/de98b512-b6cc-4163-9dbd-f027cfebc2a8.png', alt: 'Premium vehicle transformation detailing Commerce City professional quality work' },
                { src: '/lovable-uploads/c1dfd628-32fa-443f-bbd5-833d9a400951.png', alt: 'Expert automotive detailing transformation Denver mobile service results' },
                { src: '/lovable-uploads/6763c307-adf8-4383-bdce-92d99720bdfc.png', alt: 'Professional car care detailing before and after Commerce City service' },
                { src: '/lovable-uploads/19702e00-7ef4-41b5-8d55-d4d8f3933bb6.png', alt: 'Premium vehicle restoration Your Favorite Detailer Denver transformation' },
                { src: '/lovable-uploads/ddeabaf0-3ef9-42fe-8a91-08aaadcc1f13.png', alt: 'High-quality automotive detailing results Denver Metro professional service' },
                { src: '/lovable-uploads/6d91d324-3fc1-468f-be7f-e00f473b9879.png', alt: 'Expert car detailing transformation Commerce City mobile professional results' },
                { src: '/lovable-uploads/64d8407b-7d86-4f44-b27c-25164cf89363.png', alt: 'Comprehensive vehicle detailing before after Denver automotive care excellence' },
                { src: '/lovable-uploads/72b986d9-0299-4c2e-8950-077f36b9e534.png', alt: 'Professional auto detailing transformation Your Favorite Detailer showcase work' },
                { src: '/lovable-uploads/da9a4062-23f4-4a28-8275-9f3af9f2b233.png', alt: 'Premium car care detailing results Denver Metro mobile service quality' },
                { src: '/lovable-uploads/c4a62878-854e-47d0-8f45-5d85832f0f70.png', alt: 'Expert vehicle restoration detailing Commerce City professional transformation' },
                { src: '/lovable-uploads/4e87b7e2-c6f2-40de-9103-a81eb34cfe12.png', alt: 'High-end automotive detailing before after Denver mobile car care' },
                { src: '/lovable-uploads/2947a2f9-0114-4f8b-8328-90defdfaa615.png', alt: 'Professional car detailing excellence Your Favorite Detailer transformation results' },
                { src: '/lovable-uploads/ce9d2ea1-ab36-4092-a38e-a06122769006.png', alt: 'Premium vehicle care detailing Commerce City professional quality service' },
                { src: '/lovable-uploads/6ee1bb36-5ada-4e81-acc8-b8a6b4d37687.png', alt: 'Expert auto detailing transformation Denver Metro mobile service showcase' },
                { src: '/lovable-uploads/56496434-2531-4ca6-8a8c-ef162dde4f1b.png', alt: 'Comprehensive car care detailing before after professional results Denver' },
                { src: '/lovable-uploads/4f3fc79b-9a51-4225-81a9-bfc7f3b0feb9.png', alt: 'High-quality vehicle detailing Your Favorite Detailer Commerce City excellence' },
                { src: '/lovable-uploads/e47b845d-e6f0-439d-b5d2-e4ec406a1b59.png', alt: 'Professional automotive care detailing transformation Denver mobile service' },
                { src: '/lovable-uploads/254ddb32-2a46-4cf0-b8ed-251abcd109c3.png', alt: 'Premium car detailing results Commerce City professional quality transformation' },
                { src: '/lovable-uploads/065f0a56-5345-4df8-b680-8d20947446a9.png', alt: 'Expert vehicle restoration detailing Denver Metro mobile service excellence' },
                { src: '/lovable-uploads/be8ba91a-95ad-4b7b-b75c-7004a72370b4.png', alt: 'High-end auto detailing before after Your Favorite Detailer showcase' },
                { src: '/lovable-uploads/42983910-9c3d-4af2-9640-79fa6841ca85.png', alt: 'Professional car care detailing transformation Commerce City quality results' },
                { src: '/lovable-uploads/2d4da362-1900-4dd7-aa13-b5d1bce1f751.png', alt: 'Comprehensive vehicle detailing Denver professional mobile service excellence' },
                { src: '/lovable-uploads/1dee44ec-18e0-40dd-a213-fd82464a4206.png', alt: 'Premium automotive detailing transformation Your Favorite Detailer Metro results' },
                { src: '/lovable-uploads/a8d2e74e-4d17-452d-ac10-c40625c794af.png', alt: 'Expert car detailing before after Commerce City professional quality service' },
                { src: '/lovable-uploads/80689d22-9a42-4cdf-9d88-e362735ea462.png', alt: 'High-quality vehicle care detailing Denver mobile transformation excellence' },
                { src: '/lovable-uploads/ff1cf1be-2e26-4635-97d9-12fc816dfec1.png', alt: 'Professional auto detailing results Your Favorite Detailer showcase work' },
                { src: '/lovable-uploads/475fd47e-ae04-4437-981e-c385e7723791.png', alt: 'Premium car restoration detailing Commerce City professional quality transformation' },
                { src: '/lovable-uploads/b0fbff2f-7732-4bb8-8dfe-644476bc422c.png', alt: 'Expert automotive care detailing Denver Metro mobile service results' },
                { src: '/lovable-uploads/41e84014-de8f-48c6-899b-889c012a2c14.png', alt: 'Comprehensive vehicle detailing before after professional excellence Commerce City' },
                { src: '/lovable-uploads/3300c18b-599e-473e-b173-f9832690f626.png', alt: 'High-end car care detailing Your Favorite Detailer Denver transformation showcase' },
                { src: '/lovable-uploads/367e242d-3174-4725-a363-95da1535aada.png', alt: 'Professional vehicle restoration detailing Metro professional quality service' },
                { src: '/lovable-uploads/3d321eca-bb73-442b-b36d-4599afcaa1a7.png', alt: 'Premium auto detailing transformation Commerce City mobile excellence results' },
                { src: '/lovable-uploads/281f810c-9383-4f71-865c-87b7f0c75a91.png', alt: 'Expert car detailing before after Denver professional quality transformation' },
                { src: '/lovable-uploads/10e0c89e-3dbf-4ab2-ab1e-e15dd315c3a9.png', alt: 'Comprehensive automotive detailing Your Favorite Detailer Metro showcase work' },
                { src: '/lovable-uploads/55de000b-9398-4de3-a167-332e88c75bda.png', alt: 'High-quality vehicle care detailing Commerce City professional service excellence' },
                { src: '/lovable-uploads/5b02c5ab-56c0-4076-ab2b-582d0394eefa.png', alt: 'Professional car restoration detailing Denver mobile transformation results' },
                { src: '/lovable-uploads/5d3ffd2a-9347-4ac5-8c2a-03a788cc1396.png', alt: 'Premium automotive care detailing Your Favorite Detailer quality excellence' },
                { src: '/lovable-uploads/603f8367-0344-4f70-a24e-395c0a11d4fb.png', alt: 'Expert vehicle detailing before after Metro professional service showcase' },
                { src: '/lovable-uploads/9626f2b6-a2d6-433d-bae5-b75502ea32cc.png', alt: 'Comprehensive car care detailing Commerce City transformation quality results' },
                { src: '/lovable-uploads/d34ba8a6-ed4b-4664-b442-513875ab6db2.png', alt: 'High-end auto detailing Denver mobile professional excellence transformation' },
                { src: '/lovable-uploads/d6f938e6-fa9e-41ec-b29b-65c1759c5109.png', alt: 'Professional vehicle care detailing Your Favorite Detailer quality showcase' },
                { src: '/lovable-uploads/ec46778a-ac4e-4ab3-bf68-f3e889e970ec.png', alt: 'Premium car detailing results Metro professional service excellence transformation' },
                { src: '/lovable-uploads/ee308bcf-7014-42ad-8fa4-5a0fbbaeff49.png', alt: 'Expert automotive detailing before after Commerce City quality professional work' },
                { src: '/lovable-uploads/f5e6d722-ea01-4b5d-a2dc-5c18c8b24d49.png', alt: 'Comprehensive vehicle restoration detailing Denver mobile service excellence showcase' }
              ].map((image, i) => (
                <div 
                  key={i}
                  className="aspect-square bg-muted/50 rounded-lg hover:scale-105 transition-transform cursor-pointer group overflow-hidden"
                  onClick={openInstagram}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={openInstagram}
                className="group"
              >
                See More on Instagram
                <ExternalLink className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to see your vehicle transformed? Book your appointment today!
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Schedule Your Detail
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;