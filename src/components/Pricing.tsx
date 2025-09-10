import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Basic Detail",
      price: "$80",
      description: "Perfect for regular maintenance",
      features: [
        "Exterior hand wash & dry",
        "Interior vacuum",
        "Window cleaning",
        "Tire cleaning",
        "Dashboard wipe down"
      ],
      popular: false,
      duration: "2-3 hours"
    },
    {
      name: "Premium Detail",
      price: "$150",
      description: "Our most popular package",
      features: [
        "Everything in Basic Detail",
        "Clay bar treatment",
        "Paint wax application",
        "Leather conditioning",
        "Fabric protection",
        "Engine bay cleaning"
      ],
      popular: true,
      duration: "4-5 hours"
    },
    {
      name: "Ultimate Detail",
      price: "$250",
      description: "The complete luxury experience",
      features: [
        "Everything in Premium Detail",
        "Paint correction (light)",
        "Ceramic coating prep",
        "Headlight restoration",
        "Trim restoration",
        "Interior deep cleaning",
        "6-month protection"
      ],
      popular: false,
      duration: "6-8 hours"
    },
    {
      name: "Restore & Protect Detail",
      price: "$800-1,200",
      description: "The most in-depth exterior service we offer",
      features: [
        "Multi-stage paint correction",
        "Swirl mark & scratch removal",
        "Oxidation removal",
        "Professional ceramic coating",
        "Headlight restoration",
        "Trim restoration",
        "Paint depth & gloss restoration",
        "Years of protection",
        "50% off Interior Detail"
      ],
      popular: false,
      duration: "1-3 days",
      isRestoreProtect: true
    }
  ];

  const addOns = [
    { service: "Ceramic Coating", price: "$400-800" },
    { service: "Paint Correction", price: "$200-600" },
    { service: "Engine Detail", price: "$75" },
    { service: "Headlight Restoration", price: "$60" },
    { service: "Pet Hair Removal", price: "$50" },
    { service: "Odor Elimination", price: "$75" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return null;
};

export default Pricing;