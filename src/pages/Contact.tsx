import { useState } from "react";
import { Instagram, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import PageHero from "@/components/PageHero";
import PremiumCard from "@/components/PremiumCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, softReveal } from "@/lib/motion";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast.success(t("Mesazhi u dërgua me sukses!", "Message sent successfully!"));
    setForm({ name: "", email: "", business: "", message: "" });
  };

  const inputClass = "w-full rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 text-[0.82rem] text-foreground placeholder:text-muted-foreground focus:border-primary/35 focus:outline-none";

  return (
    <main className="pb-14 md:pb-16">
      <PageHero
        label={t("Kontakt", "Contact")}
        title={t(
          "Le të flasim për mënyrën si mund ta ngrisim markën tuaj.",
          "Let's talk about how we can elevate your brand."
        )}
        subtitle={t(
          "Na shkruani dhe ne do t'ju përgjigjemi me qartësi dhe drejtim profesional.",
          "Write to us and we will respond with clarity and professional direction."
        )}
        stats={[
          { label: t("Përgjigje", "Reply"), value: t("Brenda 24 orëve", "Within 24 hours") },
          { label: t("Kanale", "Channels"), value: "Email + Instagram" },
          { label: t("Fokus", "Focus"), value: t("Strategji", "Strategy") },
        ]}
      />

      <section className="section-padding pt-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
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
                  {t("Project intake", "Project intake")}
                </span>
                <h2 className="mt-3 text-[1.2rem] font-bold tracking-[-0.04em] text-white md:text-[1.35rem]">
                  {t("Na tregoni çfarë po ndërtoni.", "Tell us what you are building.")}
                </h2>

                <div className="mt-4 grid gap-3">
                  <div>
                    <label className="mb-1.5 block text-[0.8rem] font-medium text-white">
                      {t("Emri", "Name")}
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
                  <div>
                    <label className="mb-1.5 block text-[0.8rem] font-medium text-white">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      placeholder={t("Email juaj", "Your email")}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[0.8rem] font-medium text-white">
                      {t("Biznesi", "Business")}
                    </label>
                    <input
                      type="text"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      className={inputClass}
                      placeholder={t("Emri i biznesit", "Business name")}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[0.8rem] font-medium text-white">
                      {t("Mesazhi", "Message")}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                      placeholder={t("Na përshkruani projektin.", "Describe your project.")}
                    />
                  </div>
                  <button type="submit" className="btn-primary mt-1 w-full">
                    <Send size={14} />
                    {t("Dërgo mesazhin", "Send message")}
                  </button>
                </div>
              </PremiumCard>
            </form>

            <div className="space-y-3">
              <PremiumCard
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="px-4 py-4"
              >
                <h3 className="text-[1.05rem] font-bold tracking-[-0.03em] text-white">
                  {t("Na kontaktoni", "Get in touch")}
                </h3>
                <p className="mt-2 text-[0.78rem] leading-relaxed text-muted-foreground">
                  {t(
                    "Na shkruani për branding, website, përmbajtje ose reklamim.",
                    "Reach out for branding, website, content, or advertising support."
                  )}
                </p>

                <div className="mt-4 space-y-2">
                  <a
                    href="mailto:info@emormarketing.com"
                    className="flex items-center gap-2.5 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2.5 text-[0.8rem] text-muted-foreground transition hover:border-primary/25 hover:text-white"
                  >
                    <Mail size={14} className="text-primary" />
                    info@emormarketing.com
                  </a>
                  <a
                    href="https://instagram.com/emormarketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2.5 text-[0.8rem] text-muted-foreground transition hover:border-primary/25 hover:text-white"
                  >
                    <Instagram size={14} className="text-primary" />
                    @emormarketing
                  </a>
                </div>
              </PremiumCard>

              <PremiumCard
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="px-4 py-4"
              >
                <p className="text-[0.58rem] uppercase tracking-[0.18em] text-primary/90">
                  {t("Availability", "Availability")}
                </p>
                <h3 className="mt-2 text-[1.05rem] font-bold tracking-[-0.03em] text-white">
                  {t("E hënë - e premte", "Monday - Friday")}
                </h3>
                <p className="mt-1 text-[0.84rem] text-muted-foreground">09:00 - 18:00</p>
                <p className="mt-2.5 text-[0.78rem] leading-relaxed text-muted-foreground">
                  {t(
                    "Nëse na dërgoni mesazh jashtë orarit, kthehemi sa më shpejt ditën e ardhshme.",
                    "If you message us outside hours, we'll reply on the next business day."
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
