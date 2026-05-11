import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { Instagram, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import PageHero from "@/components/PageHero";
import PremiumCard from "@/components/PremiumCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, softReveal } from "@/lib/motion";

const CONTACT_EMAIL = "emormarketing1@gmail.com";
const CONTACT_PHONES = ["+383 49 569 626", "+383 45 224 443"];

const Contact = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const { hash } = useLocation();

  // Scroll to the form when navigated with #contact-form hash, accounting for sticky navbar
  useEffect(() => {
    if (hash === "#contact-form") {
      const el = document.getElementById("contact-form");
      if (el) {
        setTimeout(() => {
          const navbarHeight = 100; // safe offset for sticky navbar
          const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({ top, behavior: "smooth" });
        }, 120);
      }
    }
  }, [hash]);
  const selectedPackage = searchParams.get("package") || "";

  const initialMessage = selectedPackage
    ? t(
        `Jam i interesuar për paketën "${selectedPackage}".`,
        `I am interested in the "${selectedPackage}" package.`
      )
    : "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: initialMessage,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const subject = selectedPackage
      ? `EMOR Package Inquiry — ${selectedPackage}`
      : "EMOR Website Inquiry";

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Business: ${form.business}`,
      ``,
      `Message:`,
      form.message,
    ].join("\n");

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      if (document.hasFocus()) {
        window.open(gmailUrl, "_blank", "noopener,noreferrer");
      }
    }, 1000);

    toast.success(t("Po hapim klientin tuaj të emailit…", "Opening your email client…"));
    setForm({ name: "", email: "", business: "", message: "" });
  };

  const inputClass =
    "w-full rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 text-[0.82rem] text-foreground placeholder:text-muted-foreground focus:border-primary/35 focus:outline-none";

  return (
    <main className="pb-14 md:pb-16">
      <PageHero
        label={t("Kontakt", "Contact")}
        title={t(
          "Le të flasim. Ju ndihmojmë të rritni biznesin tuaj.",
          "Let's talk. We'll help you grow your business."
        )}
        subtitle={t(
          "Telefononi, shkruani në DM ose plotësoni formularin. Ju përgjigjemi shpejt.",
          "Call, DM us, or fill the form. We respond fast."
        )}
        stats={[
          { label: t("Përgjigje", "Reply time"), value: "< 24h" },
          { label: t("Konsultim", "Consultation"), value: t("Falas", "Free") },
        ]}
      />

      <section id="contact-form" className="section-padding pt-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">

            {/* ── FORM ─────────────────────────────────────────────────── */}
            <form onSubmit={handleSubmit}>
              <PremiumCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={softReveal}
                interactive={false}
                className="px-4 py-4 md:px-5 md:py-5"
              >
                <span className="premium-badge">
                  <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_10px_rgba(212,177,61,0.8)]" />
                  {t("Dërgoni mesazh", "Send a message")}
                </span>
                <h2 className="mt-3 text-[1.2rem] font-bold tracking-[-0.04em] text-white md:text-[1.35rem]">
                  {t("Na tregoni çfarë po ndërtoni.", "Tell us what you are building.")}
                </h2>

                <div className="mt-4 grid gap-3">
                  {/* Name */}
                  <div>
                    <label className="mb-1.5 block text-[0.8rem] font-medium text-white">
                      {t("Emri", "Name")} <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      placeholder={t("Emri juaj", "Your name")}
                    />
                  </div>

                  {/* Business name — required */}
                  <div>
                    <label className="mb-1.5 block text-[0.8rem] font-medium text-white">
                      {t("Emri i biznesit", "Business name")} <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      className={inputClass}
                      placeholder={t("p.sh. Kafeja Iliri", "e.g. Iliri Cafe")}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-1.5 block text-[0.8rem] font-medium text-white">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      placeholder={t("Email juaj", "Your email")}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-1.5 block text-[0.8rem] font-medium text-white">
                      {t("Mesazhi", "Message")} <span className="text-primary">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                      placeholder={t(
                        "Na tregoni çfarë ju nevojitet — social media, website, AI chatbot ose diçka tjetër.",
                        "Tell us what you need — social media, website, AI chatbot, or something else."
                      )}
                    />
                  </div>

                  <button type="submit" className="btn-primary mt-1 w-full">
                    <Send size={14} />
                    {t("Dërgo mesazhin", "Send message")}
                  </button>
                </div>
              </PremiumCard>
            </form>

            {/* ── RIGHT SIDE ───────────────────────────────────────────── */}
            <div className="space-y-3">

              {/* Direct contact — interactive */}
              <PremiumCard
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="px-4 py-4"
              >
                <h3 className="text-[1.05rem] font-bold tracking-[-0.03em] text-white">
                  {t("Bisedoni me ne tani", "Talk to us now")}
                </h3>
                <p className="mt-1 text-[0.78rem] text-muted-foreground">
                  {t(
                    "Zgjidhni mënyrën më të lehtë për ju.",
                    "Choose the easiest way for you."
                  )}
                </p>

                <div className="mt-3 space-y-2">
                  {CONTACT_PHONES.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2.5 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2.5 text-[0.8rem] text-muted-foreground transition hover:border-primary/30 hover:bg-primary/[0.05] hover:text-white"
                    >
                      <Phone size={14} className="shrink-0 text-primary" />
                      <span className="flex-1">{phone}</span>
                      <span className="text-[0.68rem] text-primary/60">{t("Telefono", "Call")}</span>
                    </a>
                  ))}

                  <a
                    href="https://instagram.com/emor_marketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2.5 text-[0.8rem] text-muted-foreground transition hover:border-primary/30 hover:bg-primary/[0.05] hover:text-white"
                  >
                    <Instagram size={14} className="shrink-0 text-primary" />
                    <span className="flex-1">@emor_marketing</span>
                    <span className="text-[0.68rem] text-primary/60">DM</span>
                  </a>

                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-2.5 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2.5 text-[0.8rem] text-muted-foreground transition hover:border-primary/30 hover:bg-primary/[0.05] hover:text-white"
                  >
                    <Mail size={14} className="shrink-0 text-primary" />
                    <span className="flex-1 truncate">{CONTACT_EMAIL}</span>
                    <span className="text-[0.68rem] text-primary/60">Email</span>
                  </a>
                </div>
              </PremiumCard>

              {/* Free consultation note */}
              <PremiumCard
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="px-4 py-3"
              >
                <p className="text-[0.8rem] text-muted-foreground">
                  💬{" "}
                  <span className="font-medium text-white">
                    {t("Konsultim falas", "Free consultation")}
                  </span>{" "}
                  {t(
                    "— na tregoni situatën tuaj dhe ne propozojmë zgjidhjen e duhur pa asnjë detyrim.",
                    "— tell us your situation and we will suggest the right solution with no obligation."
                  )}
                </p>
              </PremiumCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
