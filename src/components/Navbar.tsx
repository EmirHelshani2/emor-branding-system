import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/emor-logo.png";

const navLinks = [
  { path: "/", al: "Ballina", en: "Home" },
  { path: "/services", al: "Shërbimet", en: "Services" },
  { path: "/portfolio", al: "Demo", en: "Portfolio" },
  { path: "/about", al: "Rreth Nesh", en: "About" },
  { path: "/pricing", al: "Çmimet", en: "Pricing" },
  { path: "/contact", al: "Kontakt", en: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggle, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="EMOR Marketing" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {t(link.al, link.en)}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggle}
            className="text-sm font-semibold tracking-wider px-3 py-1.5 rounded border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
          >
            {lang === "al" ? "EN" : "AL"}
          </button>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gold-light transition-colors duration-200"
          >
            {t("Fillo Tani", "Get Started")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border/30 mt-2">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium py-2 border-b border-border/20 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                {t(link.al, link.en)}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={toggle}
                className="text-sm font-semibold px-4 py-2 rounded border border-border/50 text-muted-foreground"
              >
                {lang === "al" ? "EN" : "AL"}
              </button>
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold flex-1 text-center"
              >
                {t("Fillo Tani", "Get Started")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
