import { Link } from "react-router-dom";
import { Instagram, Mail, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import PremiumCard from "@/components/PremiumCard";
import logo from "@/assets/emor-logo.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/6 bg-secondary/20">
      <div className="container mx-auto px-4 pb-6 pt-10 lg:px-8">
        <PremiumCard
          interactive={false}
          className="mb-6 px-4 py-4 md:px-6 md:py-5"
        >
          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="premium-badge">
                <Sparkles size={10} />
                {t("EMOR Marketing", "EMOR Marketing")}
              </span>
              <h2 className="mt-3 max-w-xl text-[1.3rem] font-bold tracking-[-0.04em] text-white md:text-[1.5rem]">
                {t(
                  "Një prezencë më premium fillon me strukturë më të fortë.",
                  "A more premium presence starts with stronger structure."
                )}
              </h2>
              <p className="mt-2.5 max-w-xl text-[0.82rem] leading-relaxed text-muted-foreground">
                {t(
                  "Nëse doni që biznesi juaj të duket më i besueshëm, më modern dhe më bindës online, le ta ndërtojmë bashkë.",
                  "If you want your business to feel more trustworthy, modern, and persuasive online, let's build it together."
                )}
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
              <Link to="/contact" className="btn-primary">
                {t("Kontakto tani", "Contact now")}
              </Link>
              <Link to="/services" className="btn-secondary">
                {t("Shiko shërbimet", "View services")}
              </Link>
            </div>
          </div>
        </PremiumCard>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="inline-block rounded-xl border border-white/6 bg-white/[0.02] p-2.5">
              <img
                src={logo}
                alt="EMOR Marketing"
                className="h-10 w-auto sm:h-12"
              />
            </div>
            <p className="mt-3 max-w-sm text-[0.82rem] leading-relaxed text-muted-foreground">
              {t(
                "Agjenci digjitale premium që ndërton prezencë më të fortë për markat që duan të duken serioze dhe moderne.",
                "Premium digital agency building stronger presence for brands that want to feel serious and modern."
              )}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
              {t("Lidhje", "Links")}
            </h3>
            <div className="mt-2.5 flex flex-col gap-2">
              {[
                { path: "/", al: "Ballina", en: "Home" },
                { path: "/about", al: "Rreth nesh", en: "About" },
                { path: "/portfolio", al: "Punët", en: "Portfolio" },
                { path: "/contact", al: "Kontakt", en: "Contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[0.8rem] text-muted-foreground transition hover:text-white"
                >
                  {t(item.al, item.en)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
              {t("Shërbime", "Services")}
            </h3>
            <div className="mt-2.5 flex flex-col gap-2 text-[0.8rem] text-muted-foreground">
              <span>{t("Menaxhim i rrjeteve sociale", "Social media management")}</span>
              <span>{t("Zhvillim websitesh", "Website development")}</span>
              <span>{t("Branding vizual", "Visual branding")}</span>
              <span>{t("Reklama digjitale", "Digital advertising")}</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
              {t("Kontakt", "Contact")}
            </h3>
            <div className="mt-2.5 flex flex-col gap-2">
              <a
                href="mailto:info@emormarketing.com"
                className="flex items-center gap-2 text-[0.8rem] text-muted-foreground transition hover:text-white"
              >
                <Mail size={13} className="text-primary" />
                info@emormarketing.com
              </a>
              <a
                href="https://instagram.com/emormarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[0.8rem] text-muted-foreground transition hover:text-white"
              >
                <Instagram size={13} className="text-primary" />
                @emormarketing
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/6 pt-4 text-center">
          <p className="text-[0.68rem] tracking-[0.16em] text-muted-foreground">
            © {new Date().getFullYear()} EMOR Marketing.{" "}
            {t("Të gjitha të drejtat e rezervuara.", "All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
