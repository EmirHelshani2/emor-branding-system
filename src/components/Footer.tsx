import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/emor-logo.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/6 bg-secondary/25">
      <div className="container mx-auto px-4 pb-8 pt-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <img
              src={logo}
              alt="EMOR Marketing"
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-sm text-[0.875rem] leading-relaxed text-muted-foreground">
              {t(
                "Menaxhim rrjetesh sociale, website dhe chatbot AI për biznese në Kosovë dhe rajon.",
                "Social media management, website development, and AI chatbots for businesses in Kosovo and beyond."
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
                { path: "/services", al: "Shërbime", en: "Services" },
                { path: "/pricing", al: "Çmimet", en: "Pricing" },
                { path: "/clients", al: "Klientët", en: "Clients" },
                { path: "/about", al: "Rreth nesh", en: "About" },
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
              <span>{t("Social Media Management", "Social Media Management")}</span>
              <span>{t("Website Development", "Website Development")}</span>
              <span>{t("AI Chatbots", "AI Chatbots")}</span>
              <span>{t("Paketa Combo", "Combo Packages")}</span>
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
