import { Award, GraduationCap, Clock, MapPin } from "lucide-react"

const stats = [
  { icon: Award, value: "15+", label: "Jaar ervaring" },
  { icon: GraduationCap, value: "Erkend", label: "Kinesitherapeut" },
  { icon: Clock, value: "Flexibel", label: "Openingsuren" },
  { icon: MapPin, value: "Centraal", label: "Gelegen" },
]

export function About() {
  return (
    <section id="over-ons" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-40 h-40 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-serif text-6xl font-bold text-primary">L</span>
                  </div>
                  <p className="mt-6 font-serif text-xl text-foreground">Praktijk Lombaerts</p>
                </div>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="absolute -bottom-8 left-4 right-4 lg:-right-8 lg:left-auto lg:w-72">
              <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <stat.icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-8 mt-12 lg:mt-0">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Over Ons
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Passie voor beweging en gezondheid
            </h2>
            
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Welkom bij Praktijk Lombaerts, uw vertrouwde partner voor kinesitherapie en osteopathie. 
                Met meer dan 15 jaar ervaring in de gezondheidszorg, streven wij ernaar om elke patiënt 
                de beste zorg te bieden.
              </p>
              <p>
                Onze aanpak is persoonlijk en gericht op uw specifieke behoeften. We nemen de tijd om 
                naar u te luisteren, een grondige evaluatie uit te voeren en een behandelplan op maat 
                te ontwikkelen.
              </p>
              <p>
                Of u nu last heeft van chronische pijn, herstelt van een blessure, of gewoon uw 
                algemene welzijn wilt verbeteren - wij helpen u graag op weg naar een gezonder leven.
              </p>
            </div>

            {/* Qualifications */}
            <div className="mt-8 p-6 bg-secondary/50 rounded-xl border border-border">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Kwalificaties</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  Master in de Kinesitherapie en Revalidatiewetenschappen
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  Geregistreerd Osteopaat (D.O.)
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  Erkend door het RIZIV
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  Continue bijscholing en professionele ontwikkeling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
