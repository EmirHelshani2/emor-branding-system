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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-5">
        <nav className="flex items-center justify-between gap-4 py-2.5 sm:py-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="overflow-hidden rounded-xl border border-primary/10 bg-white/[0.03] px-2 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <img
                src={logo}
                alt="EMOR Marketing"
                className="h-[2.8rem] w-auto object-contain drop-shadow-[0_0_14px_rgba(212,177,61,0.14)] sm:h-[3rem]"
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5 rounded-full border border-white/6 bg-white/[0.02] px-2 py-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-full px-3 py-1 text-[0.8rem] font-medium tracking-wide transition ${
                    active
                      ? "bg-primary/12 text-primary"
                      : "text-foreground/60 hover:text-foreground"
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
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.7rem] font-semibold tracking-[0.18em] text-muted-foreground transition hover:border-primary/25 hover:text-primary"
            >
              {lang === "al" ? "EN" : "AL"}
            </button>
            <Link
              to="/contact"
              className="btn-primary px-4 py-1.5 text-[0.8rem] sm:px-4 sm:py-1.5"
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
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <div className="border-t border-white/6 pb-4 pt-3">
                <div className="grid gap-1.5">
                  {navLinks.map((link) => {
                    const active = location.pathname === link.path;

                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`rounded-lg px-3 py-2 text-[0.84rem] font-medium transition ${
                          active
                            ? "bg-primary/10 text-primary"
                            : "text-foreground/70"
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
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.7rem] font-semibold tracking-[0.18em] text-muted-foreground"
                  >
                    {lang === "al" ? "EN" : "AL"}
                  </button>
                  <Link to="/contact" className="btn-primary flex-1 py-2 text-[0.82rem]">
                    {t("Fillo tani", "Get started")}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
