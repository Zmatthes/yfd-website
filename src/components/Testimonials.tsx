import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Phu P",
      rating: 5,
      text: "Zach's a Pro's Pro. I have had my car detailed by him for the last 2 years, over 3 services done, each time always exceeding my expectations. Zach's meticulous with the work he does and he clearly takes pride in it, you can see it in the attention to detail when you receive your car back. It looks like a brand new car, inside out.",
      location: "Denver Metro"
    },
    {
      id: 2,
      name: "Jennette A",
      rating: 5,
      text: "I had my sons car that had been sitting for two years. It was dusty and very dirty inside. I was shocked when I seen it! It looked brand new! Not a single stain was found on the seats or carpet. He removed the seats completely! I was able to sell the car immediately after posting its sale.",
      location: "Denver Metro"
    },
    {
      id: 3,
      name: "William H",
      rating: 5,
      text: "Outstanding service, highly recommend! We have a jeep that was covered in dog hair (husky), dirt, food, spilt drinks, etc. Zach did an amazing job on the interior and our jeep looks brand new again. Trustworthy, affordable, and results exceeded expectations.",
      location: "Denver Metro"
    },
    {
      id: 4,
      name: "Carly B",
      rating: 5,
      text: "Zach did an amazing job for us! He spent a whole day on making our car look brand new! If you are looking to have your car detailed he is the guy to call!",
      location: "Denver Metro"
    },
    {
      id: 5,
      name: "Brad M",
      rating: 5,
      text: "Zach does an amazing job! We have used him for both vehicles every six months. His attention to detail is amazing. A true professional.",
      location: "Denver Metro"
    },
    {
      id: 6,
      name: "Cody M",
      rating: 5,
      text: "Zach is extremely detail oriented and always does a fantastic job on my vehicles. You won't find anyone that does a better job. He also uses the best chemicals available which really gives me peace of mind.",
      location: "Denver Metro"
    },
    {
      id: 7,
      name: "Jessica H",
      rating: 5,
      text: "Zach did a fantastic job! My 4 runner looks brand new! He is so nice and really takes pride in his work. I will definitely be seeing him again.",
      location: "Denver Metro"
    },
    {
      id: 8,
      name: "Brittany M",
      rating: 5,
      text: "Zach is an absolute magician! Not only did he get a decade worth of grease out of my husbands beige interior he also got my SUV looking brand new (and I have three kiddos!!!) You can see how much pride he takes in his work and his attention to detail is truly impressive. We will be customers for life!",
      location: "Denver Metro"
    },
    {
      id: 9,
      name: "Annie B",
      rating: 5,
      text: "Zach puts his heart and soul into every detail! He does an incredible job.",
      location: "Denver Metro"
    },
    {
      id: 10,
      name: "Angelica B",
      rating: 5,
      text: "We have worked with Zach for both personal and work vehicles. He leaves them looking brand new. He put his heart into his work and it shows. He is also very friendly and very professional. Hands down recommend!!!",
      location: "Denver Metro"
    },
    {
      id: 11,
      name: "Elijah C",
      rating: 5,
      text: "Cannot explain how life changing this detail was. Zach is by far the most professional and most detailed worker I've seen in the industry. Took my vehicle from an off road mud ball to looking brand new in the matter of a few hours. Thank you again Your Favorite Detailer for the amazing service.",
      location: "Denver Metro"
    },
    {
      id: 12,
      name: "Tyler K",
      rating: 5,
      text: "Your favorite detailer is exactly what he will become if you give him a shot. Friendly, Outstanding attention to detail, MOBILE, all the good equipment/supplies and not afraid to take some extra time to make it look brand new. Just got my 05 Tacoma done and it looks and smells brand new.",
      location: "Denver Metro"
    },
    {
      id: 13,
      name: "Rebecca C",
      rating: 5,
      text: "I have had my car detailed regularly for almost two years now by Zach. I have dogs that shed a lot and other detailers have had trouble removing all of the fur. Not Zach. I don't think there has ever been any fur left after he has completed the details. My car always looks brand new!",
      location: "Denver Metro"
    },
    {
      id: 14,
      name: "Joseph C",
      rating: 5,
      text: "Zach's the best in the west! Never thought my whip would look as new as it does! Turned my 02 to a 2!!!!! My go to detailer for life!",
      location: "Denver Metro"
    },
    {
      id: 15,
      name: "Joe C",
      rating: 5,
      text: "Wow! Talk about attention to detail... This truck has never been cleaner! At least since leaving the lot in 2001! Every nook and cranny was dust and debris free! From my vents and dash console to my gas/brake and under my seats! Thank you for putting more love into my truck than I do!",
      location: "Denver Metro"
    },
    {
      id: 16,
      name: "Kristen W",
      rating: 5,
      text: "I took my 4runner to Zach & let him work his magic on it & got it back like it was right off the dealership floor. After a 7 year old & a rottweiler & a lot of spilled drinks in it, I couldn't believe how brand new it looked. He is definitely My favorite detailer :)",
      location: "Denver Metro"
    },
    {
      id: 17,
      name: "Tim K",
      rating: 5,
      text: "Amazing job. Very thorough detailing. Car looked brand new, like it just rolled from dealer parking lot. Will be doing ceramic coating with Zach when my 2024 Tundra arrives.",
      location: "Denver Metro"
    },
    {
      id: 18,
      name: "Madeline G",
      rating: 5,
      text: "Zach did such an amazing job on my car! Genuinely it hasn't looked this clean since I first bought it. I used to live in Portland and got it detailed at this one place a couple times and they charged more and did a lesser job. Will definitely be coming back!",
      location: "Denver Metro"
    },
    {
      id: 19,
      name: "Jorge C",
      rating: 5,
      text: "Zach's detailing business is professionalism through and through. I'm in the process of selling my 2008 Jeep and she looks like she's a 16 year old vehicle no doubt. Zach cleaned up the car, got the interiors looking spot free and clean, detailed the front engine, and removed tons of dog hair. If I have any complaints--it's that he got me to fall in love with my car all over again. It literally looked the first day I bought it. Zach's prices are unbeatable and for the services he provides to your car, I have no doubt he'll be my detail guy from here on out.",
      location: "Denver Metro"
    },
    {
      id: 20,
      name: "Bill Gray",
      rating: 5,
      text: "Unfortunately for Zack, he got the business (referred to me by a friend) to detail my 21 year old 330xi BMW that has been used as a daily, family hauler, and weekend warrior track car. Needless to say, it needed TONS of attention. He spent about 11 hours on that car, and when I picked it up, I felt guilty driving it. It hasn't looked that good in the 10 years that I've owned it. The black leather seats look and feel amazing. The black paint has depth and most importantly, no swirl marks. Very happy with the end result for the money paid, and can confidently refer him to my friends, and to my clients. Well done Zack, and thanks again!",
      location: "Denver Metro"
    },
    {
      id: 21,
      name: "Bob Tunnell",
      rating: 5,
      text: "Zach did an amazing job on both my F25 X3 and F87 M2 and his prices are very reasonable. (too cheap actually, but don't tell him! :) I've had good detailing from a number of companies before, but Zach's attention to detail, use of quality products, and thoroughness is second to none!",
      location: "Denver Metro"
    },
    {
      id: 22,
      name: "Colin Pratt",
      rating: 5,
      text: "Extremely detailed oriented and makes sure his customers are happy with their vehicle. The car had not been detailed in over 6 years and after the detailing it looked like a brand new car being driven off a dealerships lot. The time efficiency was remarkable with taking less than a day. Every crevice of the car was spotless. Even got the smoothie that was spelt 3 years ago between the door and seat. Will definitely recommend and use again!",
      location: "Denver Metro"
    },
    {
      id: 23,
      name: "Satisfied Customer",
      rating: 5,
      text: "My daughter and her husband both used Zach the last year or two. They also had new interiors and exteriors once Zach was done. It had been on my radar to get this done. The Grandkids are in my car quite a bit and it showed. Now stricter rules are being enforced as to what they eat and drink in my vehicle. Same holds true for me also. No longer a reason to not take others in my car- it looks that good!! Zach took most of the day to complete my interior detail. And I got the same results as my family got with their cars. Need a new car (kinda). Your Favorite Detailer is the service to use to get to that look. Thanks Zach!",
      location: "Denver Metro"
    },
    {
      id: 24,
      name: "Alex M",
      rating: 5,
      text: "zach at your favorite detailer is by far the best in the business! Very professional and takes pride in what he does. If you want your car looking,feeling, and smelling brand new I definitely recommend this business you will not be disappointed!",
      location: "Denver Metro"
    },
    {
      id: 25,
      name: "Elizabeth Balderas",
      rating: 5,
      text: "Excellent service and attention to detail. Highly recommend Zach for any detailing needs!",
      location: "Denver Metro"
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