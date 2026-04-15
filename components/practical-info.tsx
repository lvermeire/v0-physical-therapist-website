import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, CreditCard, FileText, Shield } from "lucide-react"

const infoCards = [
  {
    icon: Clock,
    title: "Openingsuren",
    content: [
      "Maandag - Vrijdag: 8:00 - 19:00",
      "Zaterdag: 9:00 - 13:00",
      "Zondag: Gesloten",
      "Op afspraak ook andere tijdstippen mogelijk",
    ],
  },
  {
    icon: CreditCard,
    title: "Tarieven",
    content: [
      "Kinesitherapie: Conventietarief",
      "Osteopathie: Op aanvraag",
      "Terugbetaling via mutualiteit",
      "Betaling: Cash, Bancontact, overschrijving",
    ],
  },
  {
    icon: FileText,
    title: "Voorschrift",
    content: [
      "Voor kinesitherapie is een voorschrift van uw arts nodig",
      "Breng uw identiteitskaart mee",
      "Vergeet uw klevertjes niet",
      "Osteopathie: geen voorschrift nodig",
    ],
  },
  {
    icon: Shield,
    title: "Terugbetaling",
    content: [
      "Geconventioneerd kinesitherapeut",
      "Terugbetaling via uw ziekenfonds",
      "Aanvullende verzekering mogelijk",
      "Wij regelen de administratie voor u",
    ],
  },
]

export function PracticalInfo() {
  return (
    <section id="praktisch" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Praktische Informatie
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Alles wat u moet weten
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Praktische informatie over afspraken, tarieven en terugbetaling.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {infoCards.map((info) => (
            <Card key={info.title} className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif">{info.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {info.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/10 text-center">
          <p className="text-foreground font-medium">
            Afspraak annuleren of verplaatsen?
          </p>
          <p className="mt-2 text-muted-foreground text-sm">
            Gelieve dit minimum 24 uur op voorhand te melden. Niet-nagekomen afspraken 
            zonder tijdige annulering kunnen aangerekend worden.
          </p>
        </div>
      </div>
    </section>
  )
}
