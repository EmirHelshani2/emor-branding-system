import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/emor-logo.png";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary border-t border-border/30">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="EMOR Marketing" className="h-10 mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {t(
                "Agjenci premium digjitale që ndihmon bizneset të rriten online.",
                "Premium digital agency helping businesses grow online."
              )}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              {t("Lidhje të Shpejta", "Quick Links")}
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { path: "/", al: "Ballina", en: "Home" },
                { path: "/about", al: "Rreth Nesh", en: "About" },
                { path: "/portfolio", al: "Demo", en: "Portfolio" },
                { path: "/contact", al: "Kontakt", en: "Contact" },
              ].map((l) => (
                <Link key={l.path} to={l.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t(l.al, l.en)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              {t("Shërbimet", "Services")}
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { al: "Menaxhimi i Rrjeteve Sociale", en: "Social Media Management" },
                { al: "Zhvillimi i Uebsajteve", en: "Website Development" },
                { al: "Dizajn Grafik", en: "Graphic Design" },
                { al: "Chatbot AI", en: "AI Chatbots" },
                { al: "Reklama Digjitale", en: "Digital Ads" },
              ].map((s, i) => (
                <span key={i} className="text-sm text-muted-foreground">
                  {t(s.al, s.en)}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              {t("Kontakt", "Contact")}
            </h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@emormarketing.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <Mail size={14} /> info@emormarketing.com
              </a>
              <a href="https://instagram.com/emormarketing" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <Instagram size={14} /> @emormarketing
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} EMOR Marketing. {t("Të gjitha të drejtat e rezervuara.", "All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
