import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#behandelingen", label: "Behandelingen" },
  { href: "#over-ons", label: "Over Ons" },
  { href: "#getuigenissen", label: "Getuigenissen" },
  { href: "#praktisch", label: "Praktische Info" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "Kinesitherapie",
  "Osteopathie",
  "Revalidatie",
  "Sportblessures",
  "Pediatrie",
  "Geriatrie",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">PL</span>
              </div>
              <span className="font-serif text-lg font-semibold">Praktijk Lombaerts</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Professionele kinesitherapie en osteopathie in een persoonlijke omgeving. 
              Uw gezondheid is onze prioriteit.
            </p>
            <div className="space-y-2">
              <a href="tel:+32123456789" className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +32 123 45 67 89
              </a>
              <a href="mailto:info@praktijklombaerts.be" className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                info@praktijklombaerts.be
              </a>
              <div className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Voorbeeldstraat 123<br />2000 Antwerpen</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Behandelingen</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#behandelingen"
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-semibold mb-4">Openingsuren</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex justify-between">
                <span>Maandag - Vrijdag</span>
                <span>8:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Zaterdag</span>
                <span>9:00 - 13:00</span>
              </li>
              <li className="flex justify-between">
                <span>Zondag</span>
                <span>Gesloten</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-background/50">
              Op afspraak zijn ook andere tijdstippen mogelijk.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} Praktijk Lombaerts. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-background/50 hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-background/50 hover:text-primary transition-colors">
                Voorwaarden
              </Link>
              <Link href="#" className="text-sm text-background/50 hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
