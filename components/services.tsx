import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Brain, Heart, Dumbbell, Baby, Users } from "lucide-react"

const services = [
  {
    icon: Activity,
    title: "Algemene Kinesitherapie",
    description: "Behandeling van bewegingsstoornissen, spier- en gewrichtsproblemen door middel van oefentherapie en manuele technieken.",
  },
  {
    icon: Brain,
    title: "Osteopathie",
    description: "Holistische benadering voor het behandelen van functionele stoornissen in het lichaam met zachte manuele technieken.",
  },
  {
    icon: Heart,
    title: "Revalidatie",
    description: "Begeleiding bij herstel na operaties, blessures of langdurige aandoeningen om uw mobiliteit te herstellen.",
  },
  {
    icon: Dumbbell,
    title: "Sportblessures",
    description: "Gespecialiseerde behandeling en preventie van sportgerelateerde blessures voor recreatieve en professionele sporters.",
  },
  {
    icon: Baby,
    title: "Pediatrische Kinesitherapie",
    description: "Aangepaste behandelingen voor baby&apos;s, kinderen en adolescenten met motorische of ontwikkelingsproblemen.",
  },
  {
    icon: Users,
    title: "Geriatrische Kinesitherapie",
    description: "Zorg voor ouderen gericht op behoud en verbetering van mobiliteit, evenwicht en levenskwaliteit.",
  },
]

export function Services() {
  return (
    <section id="behandelingen" className="py-20 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Onze Diensten
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Behandelingen op maat
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Wij bieden een breed scala aan behandelingen, afgestemd op uw persoonlijke behoeften en doelstellingen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-shadow duration-300 border-border bg-card">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Niet zeker welke behandeling bij u past?{" "}
            <a href="#contact" className="text-primary hover:underline font-medium">
              Neem contact met ons op
            </a>{" "}
            voor een vrijblijvend adviesgesprek.
          </p>
        </div>
      </div>
    </section>
  )
}
