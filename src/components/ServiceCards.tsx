import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, FileVideo, Award, Radio } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  ctaText?: string;
  onCtaClick?: () => void;
}

const ServiceCard = ({
  title,
  description,
  icon,
  ctaText = "Learn More",
  onCtaClick = () => {},
}: ServiceCardProps) => {
  return (
    <Card className="bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onCtaClick}
          className="w-full bg-primary hover:bg-primary/90"
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

interface ServiceCardsProps {
  services?: ServiceCardProps[];
}

const ServiceCards = ({ services }: ServiceCardsProps) => {
  const defaultServices: ServiceCardProps[] = [
    {
      title: "Music Distribution",
      description:
        "Get your music on all major platforms including Instagram, Facebook, TikTok, WhatsApp, TV and YouTube. Reach millions of listeners worldwide.",
      icon: <Music className="h-6 w-6 text-primary" />,
      ctaText: "Distribute Now",
    },
    {
      title: "Music Licensing",
      description:
        "License your music for use in films, TV shows, commercials, and other media. Maximize your revenue potential through strategic licensing deals.",
      icon: <FileVideo className="h-6 w-6 text-primary" />,
      ctaText: "License Music",
    },
    {
      title: "Music Publishing",
      description:
        "Protect your compositions and collect royalties worldwide. Our publishing services ensure you get paid for every use of your music.",
      icon: <Award className="h-6 w-6 text-primary" />,
      ctaText: "Publish Music",
    },
    {
      title: "Performance & Appearances",
      description:
        "Book performances, appearances, and connect with event organizers. Expand your reach and grow your audience through live events.",
      icon: <Radio className="h-6 w-6 text-primary" />,
      ctaText: "Book Now",
    },
  ];

  const displayServices = services || defaultServices;

  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services(coming soon - 2026) </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive music solutions to help artists thrive in today's
            digital landscape. From distribution to licensing, we've got you
            covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              ctaText={service.ctaText}
              onCtaClick={service.onCtaClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
