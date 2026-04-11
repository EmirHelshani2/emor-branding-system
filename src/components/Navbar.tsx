import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/emor-logo.png";

const navLinks = [
  { path: "/", al: "Ballina", en: "Home" },
  { path: "/services", al: "Shërbimet", en: "Services" },
  { path: "/pricing", al: "Çmimet", en: "Pricing" },
  { path: "/clients", al: "Klientët", en: "Clients" },
  { path: "/about", al: "Rreth nesh", en: "About" },
  { path: "/contact", al: "Kontakt", en: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggle, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-[1440px] px-3 py-1 sm:px-5 sm:py-2">
        <nav
          className={`rounded-[18px] border backdrop-blur-2xl transition-all duration-300 ${
            scrolled || mobileOpen
              ? "border-white/10 bg-background/95 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.88)]"
              : "border-white/8 bg-background/75 shadow-[0_12px_32px_-24px_rgba(0,0,0,0.72)]"
          }`}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-5 lg:px-6">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="EMOR Marketing"
                className="h-11 w-auto object-contain sm:h-12"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`rounded-full px-3.5 py-1.5 text-[0.875rem] font-medium tracking-wide transition ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/65 hover:text-foreground"
                    }`}
                  >
                    {t(link.al, link.en)}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-2.5">
              <button
                onClick={toggle}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.75rem] font-semibold tracking-[0.16em] text-muted-foreground transition hover:border-primary/30 hover:text-primary"
              >
                {lang === "al" ? "EN" : "AL"}
              </button>
              <Link
                to="/contact"
                className="btn-primary !px-4 !py-2 !text-[0.875rem]"
              >
                {t("Fillo tani", "Get started")}
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-foreground transition hover:border-primary/25 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
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
                <div className="border-t border-white/8 px-4 pb-4 pt-3 sm:px-5">
                  <div className="grid grid-cols-2 gap-1.5">
                    {navLinks.map((link) => {
                      const active = location.pathname === link.path;
                      return (
                        <Link
                          key={link.path}
                          to={link.path}
                          className={`rounded-xl px-3 py-2 text-[0.875rem] font-medium transition ${
                            active
                              ? "border border-primary/20 bg-primary/10 text-primary"
                              : "border border-white/6 bg-white/[0.02] text-foreground/75"
                          }`}
                        >
                          {t(link.al, link.en)}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-3 flex items-center gap-2.5">
                    <button
                      onClick={toggle}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.75rem] font-semibold tracking-[0.16em] text-muted-foreground"
                    >
                      {lang === "al" ? "EN" : "AL"}
                    </button>
                    <Link to="/contact" className="btn-primary flex-1 !text-[0.875rem]">
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
