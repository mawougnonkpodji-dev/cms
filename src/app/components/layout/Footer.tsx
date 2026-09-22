import { Link } from "react-router-dom";
import { Facebook, Mail, MapPin, Youtube } from "lucide-react";
import { footerColumns } from "@/app/data/home";
import { CrossMotif } from "@/app/components/shared/CrossMotif";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-14 pb-8">
      <div className="tricolor-bar mb-12" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <CrossMotif className="w-8 h-8 text-accent" />
              <div>
                <div className="font-serif font-semibold">CSM</div>
                <div className="label-caps text-[10px] text-white/70">Mission de Banamè</div>
              </div>
            </div>
            <p className="text-white/60 text-xs leading-relaxed mb-5">
              Communauté des Servants de Messe — Très Sainte Église de Jésus-Christ, Bénin.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-accent/80 rounded-md flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-accent/80 rounded-md flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="label-caps text-accent text-[10px] mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-white/60 hover:text-white text-xs transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/15 pt-8 flex flex-wrap gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-6">
            <span className="text-white/50 text-xs flex items-center gap-2">
              <MapPin className="w-3 h-3 text-accent" aria-hidden="true" /> Mission de Banamè, Bénin
            </span>
            <a
              href="mailto:contact@csm-banname.org"
              className="text-white/50 hover:text-white text-xs flex items-center gap-2 transition-colors"
            >
              <Mail className="w-3 h-3 text-accent" aria-hidden="true" /> contact@csm-banname.org
            </a>
          </div>
          <div className="text-[10px] text-white/40">© 2026 CSM Mission de Banamè</div>
        </div>
      </div>
    </footer>
  );
}
