import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/emor-logo.png";

const navLinks = [
  { path: "/", al: "Ballina", en: "Home" },
  { path: "/services", al: "Shërbimet", en: "Services" },
  { path: "/portfolio", al: "Punët", en: "Portfolio" },
  { path: "/about", al: "Rreth nesh", en: "About" },
  { path: "/pricing", al: "Çmimet", en: "Pricing" },
  { path: "/contact", al: "Kontakt", en: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggle, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-[1440px] px-3 py-1 sm:px-5 sm:py-2">
        <nav
          className={`rounded-[22px] border backdrop-blur-2xl transition-all duration-300 ${
            scrolled || mobileOpen
              ? "border-white/10 bg-background/92 shadow-[0_24px_52px_-34px_rgba(0,0,0,0.88)]"
              : "border-white/8 bg-background/72 shadow-[0_18px_42px_-34px_rgba(0,0,0,0.82)]"
          }`}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-1.5 sm:px-5 lg:px-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="overflow-hidden rounded-[1.1rem] border border-primary/12 bg-white/[0.04] px-2.5 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:px-3 sm:py-1.5">
                <img
                  src={logo}
                  alt="EMOR Marketing"
                  className="h-[3.55rem] w-auto scale-[1.05] object-contain drop-shadow-[0_0_18px_rgba(212,177,61,0.18)] sm:h-[3.95rem] lg:h-[4.25rem]"
                />
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.02] px-2.5 py-1.5">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`rounded-full px-3.5 py-1.5 text-[0.9rem] font-medium tracking-wide transition ${
                      active
                        ? "bg-primary/12 text-primary"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {t(link.al, link.en)}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggle}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[0.78rem] font-semibold tracking-[0.18em] text-muted-foreground transition hover:border-primary/25 hover:text-primary"
              >
                {lang === "al" ? "EN" : "AL"}
              </button>
              <Link
                to="/contact"
                className="btn-primary px-4.5 py-2 text-[0.9rem] sm:px-4.5 sm:py-2 sm:text-[0.9rem]"
              >
                {t("Fillo tani", "Get started")}
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-foreground transition hover:border-primary/25 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden lg:hidden"
              >
                <div className="border-t border-white/8 px-4 pb-5 pt-4 sm:px-5">
                  <div className="grid gap-2">
                    {navLinks.map((link) => {
                      const active = location.pathname === link.path;

                      return (
                        <Link
                          key={link.path}
                          to={link.path}
                          className={`rounded-[1rem] px-3.5 py-2.5 text-[0.92rem] font-medium transition ${
                            active
                              ? "border border-primary/20 bg-primary/10 text-primary"
                              : "border border-white/8 bg-white/[0.02] text-foreground/80"
                          }`}
                        >
                          {t(link.al, link.en)}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={toggle}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[0.78rem] font-semibold tracking-[0.18em] text-muted-foreground"
                    >
                      {lang === "al" ? "EN" : "AL"}
                    </button>
                    <Link to="/contact" className="btn-primary flex-1">
                      {t("Fillo tani", "Get started")}
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
