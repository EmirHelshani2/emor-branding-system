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
  const [query, setQuery] = useState("");
  const { t } = useLanguage();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Focus input when panel opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      setQuery("");
    }
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

  const filtered = query.trim()
    ? pages.filter((p) => {
        const needle = query.toLowerCase();
        return (
          p.al.toLowerCase().includes(needle) ||
          p.en.toLowerCase().includes(needle)
        );
      })
    : pages;

  const handleClose = () => {
    setOpen(false);
    setQuery("");
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t("Kërko", "Search")}
        aria-expanded={open}
        className={`flex h-8 w-8 items-center justify-center rounded-full border transition ${
          open
            ? "border-primary/40 bg-primary/10 text-primary"
            : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-primary/30 hover:text-primary"
        }`}
      >
        <Search size={15} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Click-outside backdrop */}
            <div
              className="fixed inset-0 z-[198]"
              onClick={handleClose}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-1/2 top-[88px] z-[199] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[hsl(222,51%,6%)] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-2xl sm:top-[106px]"
              style={{ width: "min(calc(100vw - 24px), 420px)" }}
            >
              {/* Search input row */}
              <div className="flex items-center gap-2 border-b border-white/8 px-3 py-2">
                <Search size={13} className="shrink-0 text-primary/60" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t("Kërko faqe…", "Search pages…")}
                  className="flex-1 bg-transparent text-[0.82rem] text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                />
                <div className="flex items-center gap-1.5">
                  <kbd className="hidden rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[0.58rem] text-white/25 sm:block">
                    Ctrl+K
                  </kbd>
                  <button
                    onClick={handleClose}
                    aria-label="Close"
                    className="flex h-7 w-7 items-center justify-center rounded-md border border-white/8 text-muted-foreground transition hover:border-primary/25 hover:text-white active:scale-95"
                  >
                    <X size={12} />
                  </button>
                </div>
              </div>

              {/* Pages list */}
              <div className="px-1.5 py-1.5">
                {filtered.length > 0 ? (
                  <>
                    <p className="px-2 pb-1 pt-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-primary/50">
                      {t("Faqet", "Pages")}
                    </p>
                    {filtered.map((page) => {
                      const Icon = serviceIcons[page.path];
                      return (
                        <Link
                          key={page.path}
                          to={page.path}
                          onClick={handleClose}
                          className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[0.82rem] text-foreground/70 transition hover:bg-white/[0.05] hover:text-white active:bg-white/[0.08]"
                        >
                          {Icon ? (
                            <Icon size={13} className="shrink-0 text-primary/60" />
                          ) : (
                            <ArrowRight size={12} className="shrink-0 text-white/15" />
                          )}
                          <span className="flex-1">{t(page.al, page.en)}</span>
                        </Link>
                      );
                    })}
                  </>
                ) : (
                  <p className="px-3 py-3 text-[0.8rem] text-muted-foreground">
                    {t("Nuk u gjet asnjë faqe.", "No pages found.")}
                  </p>
                )}
              </div>

              {/* Quick contact */}
              <div className="border-t border-white/8 px-1.5 pb-2 pt-1.5">
                <p className="px-2 pb-1 pt-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-primary/50">
                  {t("Kontaktoni direkt", "Contact directly")}
                </p>
                <div className="grid grid-cols-2 gap-1 px-0.5">
                  {CONTACT_PHONES.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      onClick={handleClose}
                      className="flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/[0.025] px-2.5 py-2 text-[0.72rem] text-muted-foreground transition hover:border-primary/25 hover:text-white active:bg-white/[0.05]"
                    >
                      <Phone size={11} className="shrink-0 text-primary" />
                      <span className="truncate">{phone}</span>
                    </a>
                  ))}
                  <a
                    href="https://instagram.com/emor_marketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                    className="flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/[0.025] px-2.5 py-2 text-[0.72rem] text-muted-foreground transition hover:border-primary/25 hover:text-white active:bg-white/[0.05]"
                  >
                    <Instagram size={11} className="shrink-0 text-primary" />
                    @emor_marketing
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    onClick={handleClose}
                    className="flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/[0.025] px-2.5 py-2 text-[0.72rem] text-muted-foreground transition hover:border-primary/25 hover:text-white active:bg-white/[0.05]"
                  >
                    <Mail size={11} className="shrink-0 text-primary" />
                    Email
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default QuickNav;
