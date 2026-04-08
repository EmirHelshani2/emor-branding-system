import { Link } from "react-router-dom";
import { Instagram, Mail, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import PremiumCard from "@/components/PremiumCard";
import logo from "@/assets/emor-logo.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/6 bg-secondary/25">
      <div className="container mx-auto px-4 pb-8 pt-14 lg:px-8">
        <PremiumCard
          interactive={false}
          className="mb-8 px-5 py-5 md:px-7 md:py-7"
        >
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="premium-badge">
                <Sparkles size={12} />
                {t("EMOR Marketing", "EMOR Marketing")}
              </span>
              <h2 className="mt-5 max-w-2xl text-[1.75rem] font-bold tracking-[-0.045em] text-white md:text-[2.1rem]">
                {t(
                  "Një prezencë më premium fillon me strukturë më të fortë.",
                  "A more premium presence starts with stronger structure."
                )}
              </h2>
              <p className="mt-4 max-w-2xl text-[0.94rem] leading-relaxed text-muted-foreground md:text-[0.98rem]">
                {t(
                  "Nëse doni që biznesi juaj të duket më i besueshëm, më modern dhe më bindës online, le ta ndërtojmë bashkë.",
                  "If you want your business to feel more trustworthy, modern, and persuasive online, let's build it together."
                )}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Link to="/contact" className="btn-primary">
                {t("Kontakto tani", "Contact now")}
              </Link>
              <Link to="/services" className="btn-secondary">
                {t("Shiko shërbimet", "View services")}
              </Link>
            </div>
          </div>
        </PremiumCard>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="inline-block rounded-[1.15rem] border border-white/8 bg-white/[0.02] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <img
                src={logo}
                alt="EMOR Marketing"
                className="h-14 w-auto sm:h-16"
              />
            </div>
            <p className="mt-4 max-w-sm text-[0.92rem] leading-relaxed text-muted-foreground">
              {t(
                "Agjenci digjitale premium që ndërton prezencë më të fortë për markat që duan të duken serioze dhe moderne.",
                "Premium digital agency building stronger presence for brands that want to feel serious and modern."
              )}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/90">
              {t("Lidhje", "Links")}
            </h3>
            <div className="mt-3 flex flex-col gap-2.5">
              {[
                { path: "/", al: "Ballina", en: "Home" },
                { path: "/about", al: "Rreth nesh", en: "About" },
                { path: "/portfolio", al: "Punët", en: "Portfolio" },
                { path: "/contact", al: "Kontakt", en: "Contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-muted-foreground transition hover:text-white"
                >
                  {t(item.al, item.en)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/90">
              {t("Shërbime", "Services")}
            </h3>
            <div className="mt-3 flex flex-col gap-2.5 text-sm text-muted-foreground">
              <span>{t("Menaxhim i rrjeteve sociale", "Social media management")}</span>
              <span>{t("Zhvillim websitesh", "Website development")}</span>
              <span>{t("Branding vizual", "Visual branding")}</span>
              <span>{t("Reklama digjitale", "Digital advertising")}</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/90">
              {t("Kontakt", "Contact")}
            </h3>
            <div className="mt-3 flex flex-col gap-2.5">
              <a
                href="mailto:info@emormarketing.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition hover:text-white"
              >
                <Mail size={14} className="text-primary" />
                info@emormarketing.com
              </a>
              <a
                href="https://instagram.com/emormarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition hover:text-white"
              >
                <Instagram size={14} className="text-primary" />
                @emormarketing
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/8 pt-5 text-center">
          <p className="text-xs tracking-[0.18em] text-muted-foreground">
            © {new Date().getFullYear()} EMOR Marketing.{" "}
            {t("Të gjitha të drejtat e rezervuara.", "All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
