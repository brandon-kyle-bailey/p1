"use cleint";
import React from "react";
import { useState } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      content:
        "Lumino has completely changed how we showcase developer impact. Automatic tracking from GitHub and Linear means we finally have a clear, real-time view of our team’s contributions.",
      author: "Sarah Chen",
      role: "Engineering Director, TechCorp",
      avatar: "SC",
    },
    {
      content:
        "Our remote engineers feel more connected than ever. Lumino highlights each person’s work across projects, which has been a huge boost for recognition and morale.",
      author: "Michael Rodriguez",
      role: "Team Lead, StartupXYZ",
      avatar: "MR",
    },
    {
      content:
        "The contribution analytics are a game changer. We can pinpoint bottlenecks, measure output, and celebrate wins without manually digging through commits or tickets.",
      author: "Emily Johnson",
      role: "Operations Director, GrowthCo",
      avatar: "EJ",
    },
    {
      content:
        "Setup was effortless, and the Lumino team guided us through every step. Within days, we were seeing data that helped us improve delivery times and collaboration.",
      author: "David Park",
      role: "Engineering Manager, DevCorp",
      avatar: "DP",
    },
    {
      content:
        "The integrations with our existing tools made adoption painless. Lumino slides right into our workflow and starts delivering insights immediately.",
      author: "Lisa Thompson",
      role: "Product Manager, InnovateCo",
      avatar: "LT",
    },
  ];

  // Auto-play functionality
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
              <Card className="mx-auto max-w-3xl transform transition-all duration-300">
                <CardHeader className="pb-4 sm:pb-6">
                  <div className="flex items-center space-x-1 mb-4 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <CardDescription className="text-base sm:text-lg lg:text-xl text-center leading-relaxed px-2 sm:px-4">
                    &quot;{testimonial.content}&quot;
                  </CardDescription>
                </CardHeader>
                <CardFooter className="justify-center pt-2 sm:pt-4">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage
                        src={`../../public/placeholder.png`}
                        alt={testimonial.author}
                      />
                      <AvatarFallback>{testimonial.author}</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <p className="font-semibold text-sm sm:text-base">
                        {testimonial.author}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-1 sm:space-x-2 mt-6 sm:mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary scale-125 shadow-lg"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
