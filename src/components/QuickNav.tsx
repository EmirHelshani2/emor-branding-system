import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Globe,
  Instagram,
  Mail,
  Package,
  Phone,
  Search,
  Share2,
  X,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CONTACT_EMAIL = "emormarketing1@gmail.com";
const CONTACT_PHONES = ["+383 49 569 626", "+383 45 224 443"];

const QuickNav = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const pages = [
    { path: "/", al: "Ballina", en: "Home" },
    { path: "/services", al: "Shërbimet", en: "Services" },
    { path: "/pricing?tab=social", al: "Social Media — Çmimet", en: "Social Media — Pricing" },
    { path: "/pricing?tab=website", al: "Website — Çmimet", en: "Website — Pricing" },
    { path: "/pricing?tab=chatbot", al: "AI Chatbot — Çmimet", en: "AI Chatbot — Pricing" },
    { path: "/pricing?tab=combos", al: "Paketa Combo", en: "Combo Packages" },
    { path: "/clients", al: "Klientët tanë", en: "Our Clients" },
    { path: "/about", al: "Rreth EMOR", en: "About EMOR" },
    { path: "/contact", al: "Kontakt", en: "Contact" },
  ];

  const serviceIcons: Record<string, React.ElementType> = {
    "/services": Share2,
    "/pricing?tab=social": Share2,
    "/pricing?tab=website": Globe,
    "/pricing?tab=chatbot": Bot,
    "/pricing?tab=combos": Package,
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        aria-label={t("Kërko", "Search")}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground transition hover:border-primary/30 hover:text-primary"
      >
        <Search size={15} />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => { if (e.target === overlayRef.current) setOpen(false); }}
            className="fixed inset-0 z-[200] flex items-start justify-center bg-black/70 backdrop-blur-sm pt-[10vh] px-4"
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-lg rounded-2xl border border-white/10 bg-background/98 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.9)] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-white/8 px-4 py-3">
                <Search size={15} className="shrink-0 text-primary/70" />
                <span className="flex-1 text-[0.875rem] text-muted-foreground">
                  {t("Navigim i shpejtë", "Quick navigation")}
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-6 w-6 items-center justify-center rounded-md border border-white/8 text-muted-foreground transition hover:text-white"
                >
                  <X size={12} />
                </button>
              </div>

              {/* Pages */}
              <div className="px-2 py-2">
                <p className="px-2 pb-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-primary/60">
                  {t("Faqet", "Pages")}
                </p>
                {pages.map((page) => {
                  const Icon = serviceIcons[page.path];
                  return (
                    <Link
                      key={page.path}
                      to={page.path}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-[0.875rem] text-foreground/80 transition hover:bg-white/[0.04] hover:text-white"
                    >
                      {Icon ? (
                        <Icon size={14} className="shrink-0 text-primary/70" />
                      ) : (
                        <ArrowRight size={14} className="shrink-0 text-white/20" />
                      )}
                      {t(page.al, page.en)}
                    </Link>
                  );
                })}
              </div>

              {/* Quick contact */}
              <div className="border-t border-white/8 px-2 pb-3 pt-2">
                <p className="px-2 pb-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-primary/60">
                  {t("Kontaktoni direkt", "Contact directly")}
                </p>
                <div className="grid grid-cols-2 gap-1.5 px-1">
                  {CONTACT_PHONES.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 text-[0.78rem] text-muted-foreground transition hover:border-primary/25 hover:text-white"
                    >
                      <Phone size={13} className="shrink-0 text-primary" />
                      {phone}
                    </a>
                  ))}
                  <a
                    href="https://instagram.com/emor_marketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 text-[0.78rem] text-muted-foreground transition hover:border-primary/25 hover:text-white"
                  >
                    <Instagram size={13} className="shrink-0 text-primary" />
                    @emor_marketing
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 text-[0.78rem] text-muted-foreground transition hover:border-primary/25 hover:text-white"
                  >
                    <Mail size={13} className="shrink-0 text-primary" />
                    Email
                  </a>
                </div>
              </div>

              <div className="border-t border-white/6 px-4 py-2">
                <p className="text-[0.6rem] text-white/20 text-center">
                  {t("Shtype Esc për të mbyllur", "Press Esc to close")} · Ctrl+K
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QuickNav;
