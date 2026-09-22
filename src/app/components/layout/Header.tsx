import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Heart, Menu, Search, X } from "lucide-react";
import { navLinks } from "@/app/data/home";
import { LazyLiquidLogo } from "@/app/components/effects/LazyLiquidLogo";

export function Header() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const onHero = onHome && !scrolled;
  const linkClass = onHero
    ? "text-white/85 hover:text-white"
    : "text-foreground/80 hover:text-primary";
  const iconClass = onHero ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-primary";
  const logoTitleClass = onHero ? "text-white" : "text-primary";
  const logoSubClass = onHero ? "text-white/80" : "text-accent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !onHome ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="tricolor-bar" aria-hidden="true" />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
      >
        Aller au contenu principal
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
          <Link to="/" className="flex items-center gap-3" aria-label="CSM Mission de Banamè — Accueil">
            <LazyLiquidLogo className="w-9 h-9" />
            <div className="leading-tight">
              <div className={`font-serif font-semibold text-base tracking-wide ${logoTitleClass}`}>CSM</div>
              <div className={`label-caps text-[10px] ${logoSubClass}`}>Mission de Banamè</div>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-1" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => "sub" in link && link.sub && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm transition-colors duration-150 font-medium ${linkClass}`}
                >
                  {link.label}
                  {"sub" in link && link.sub && <ChevronDown className="w-3 h-3 opacity-60" aria-hidden="true" />}
                </Link>
                {"sub" in link && link.sub && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                    {link.sub.map((item) => (
                      <Link
                        key={item}
                        to={link.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen((open) => !open)}
              className={`p-2 transition-colors ${iconClass}`}
              aria-label="Rechercher"
              aria-expanded={searchOpen}
            >
              <Search className="w-4 h-4" />
            </button>
            <Link
              to="/don"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-accent-foreground bg-accent hover:bg-accent/90 transition-colors rounded-md"
            >
              <Heart className="w-3.5 h-3.5" aria-hidden="true" /> Faire un don
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className={`xl:hidden p-2 ${onHero ? "text-white" : "text-primary"}`}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className={`py-3 border-t anim-fadeSlide ${onHero ? "border-white/15" : "border-border"}`}>
            <form role="search" className="relative max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <Search
                className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${onHero ? "text-white/40" : "text-muted-foreground"}`}
                aria-hidden="true"
              />
              <input
                autoFocus
                type="search"
                name="q"
                autoComplete="off"
                placeholder="Rechercher actualités, événements, prières…"
                className={`w-full rounded-md pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                  onHero
                    ? "bg-white/10 text-white placeholder-white/40 border border-white/20 focus:border-white/40"
                    : "bg-input-background text-foreground placeholder-muted-foreground border border-border"
                }`}
              />
            </form>
          </div>
        )}
      </div>

      {menuOpen && (
        <nav
          className="xl:hidden bg-background border-t border-border px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto"
          aria-label="Navigation mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="block py-2.5 text-foreground/80 hover:text-primary border-b border-border text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/don"
            className="mt-3 flex items-center justify-center gap-2 py-3 text-sm font-semibold text-accent-foreground bg-accent rounded-md"
          >
            <Heart className="w-4 h-4" aria-hidden="true" /> Faire un don
          </Link>
        </nav>
      )}
    </header>
  );
}
