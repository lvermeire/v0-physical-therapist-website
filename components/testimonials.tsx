"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Marie V.",
    location: "Antwerpen",
    rating: 5,
    text: "Na maanden van rugklachten vond ik eindelijk verlichting bij Praktijk Lombaerts. De persoonlijke aanpak en professionele behandeling hebben mijn leven veranderd. Ik kan nu weer zonder pijn sporten!",
  },
  {
    name: "Jan D.",
    location: "Mechelen",
    rating: 5,
    text: "Uitstekende zorg na mijn knieoperatie. Het revalidatieprogramma was perfect op mijn behoeften afgestemd. De therapeut nam altijd de tijd om alles uit te leggen en mijn vragen te beantwoorden.",
  },
  {
    name: "Sophie M.",
    location: "Lier",
    rating: 5,
    text: "Als sportster heb ik vaak te maken met blessures. De expertise in sportrevalidatie is hier top. Snelle afspraken mogelijk en altijd flexibel met de openingsuren.",
  },
  {
    name: "Thomas B.",
    location: "Kontich",
    rating: 5,
    text: "Mijn chronische nekpijn is dankzij de osteopathische behandelingen sterk verminderd. Een holistische benadering die echt werkt. Zeer aan te raden!",
  },
  {
    name: "Lisa K.",
    location: "Edegem",
    rating: 5,
    text: "Onze zoon had motorische problemen en dankzij de pediatrische kinesitherapie heeft hij enorme vooruitgang geboekt. De therapeut is geduldig en kind-vriendelijk.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="getuigenissen" className="py-20 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Getuigenissen
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Wat onze patiënten zeggen
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            De tevredenheid van onze patiënten staat centraal in alles wat we doen.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {testimonials[currentIndex].text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={prevTestimonial}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-primary/20"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextTestimonial}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 lg:gap-16">
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-primary">500+</p>
            <p className="text-sm text-muted-foreground">Tevreden patiënten</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-primary">4.9/5</p>
            <p className="text-sm text-muted-foreground">Gemiddelde beoordeling</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-primary">15+</p>
            <p className="text-sm text-muted-foreground">Jaar ervaring</p>
          </div>
        </div>
      </div>
    </section>
  )
}
