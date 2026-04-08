import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import PageHero from "@/components/PageHero";
import PremiumCard from "@/components/PremiumCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, softReveal } from "@/lib/motion";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast.success(
      t("Mesazhi u dërgua me sukses!", "Message sent successfully!")
    );
    setForm({ name: "", email: "", business: "", message: "" });
  };

  return (
    <main className="pb-24">
      <PageHero
        label={t("Kontakt", "Contact")}
        title={t(
          "Le të flasim për mënyrën si mund ta ngrisim markën tuaj në një nivel më premium.",
          "Let's talk about how we can elevate your brand to a more premium level."
        )}
        subtitle={t(
          "Na shkruani dhe ne do t'ju përgjigjemi me qartësi, ide konkrete dhe drejtim profesional për hapin e radhës.",
          "Write to us and we will respond with clarity, concrete ideas, and professional direction for the next step."
        )}
        stats={[
          {
            label: t("Përgjigje", "Reply"),
            value: t("Brenda 24 orëve", "Within 24 hours"),
          },
          {
            label: t("Kanale", "Channels"),
            value: "Email + Instagram",
          },
          {
            label: t("Fokus", "Focus"),
            value: t("Strategji", "Strategy"),
          },
        ]}
      />

      <section className="section-padding pt-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={softReveal}
              onSubmit={handleSubmit}
            >
              <PremiumCard interactive={false} className="px-6 py-6 md:px-8 md:py-8">
                <span className="premium-badge">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_rgba(212,177,61,0.8)]" />
                  {t("Project intake", "Project intake")}
                </span>
                <h2 className="mt-6 text-[2rem] font-bold tracking-[-0.045em] text-white md:text-[2.2rem]">
                  {t("Na tregoni çfarë po ndërtoni.", "Tell us what you are building.")}
                </h2>

                <div className="mt-8 grid gap-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white">
                      {t("Emri", "Name")}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(event) =>
                        setForm({ ...form, name: event.target.value })
                      }
                      className="w-full rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none"
                      placeholder={t("Emri juaj", "Your name")}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(event) =>
                        setForm({ ...form, email: event.target.value })
                      }
                      className="w-full rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none"
                      placeholder={t("Email juaj", "Your email")}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white">
                      {t("Biznesi", "Business")}
                    </label>
                    <input
                      type="text"
                      value={form.business}
                      onChange={(event) =>
                        setForm({ ...form, business: event.target.value })
                      }
                      className="w-full rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none"
                      placeholder={t("Emri i biznesit", "Business name")}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white">
                      {t("Mesazhi", "Message")}
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(event) =>
                        setForm({ ...form, message: event.target.value })
                      }
                      className="w-full resize-none rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none"
                      placeholder={t(
                        "Na përshkruani projektin ose qëllimin tuaj.",
                        "Describe your project or goal."
                      )}
                    />
                  </div>

                  <button type="submit" className="btn-primary mt-2 w-full">
                    <Send size={16} />
                    {t("Dërgo mesazhin", "Send message")}
                  </button>
                </div>
              </PremiumCard>
            </motion.form>

            <div className="space-y-6">
              <PremiumCard
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="px-6 py-6"
              >
                <h3 className="text-2xl font-bold tracking-[-0.04em] text-white">
                  {t("Na kontaktoni", "Get in touch")}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {t(
                    "Na shkruani për branding, website, përmbajtje ose reklamim. Ne do ta trajtojmë kërkesën tuaj me qartësi dhe seriozitet.",
                    "Reach out for branding, website, content, or advertising support. We will handle your request with clarity and seriousness."
                  )}
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="mailto:info@emormarketing.com"
                    className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-muted-foreground transition hover:border-primary/30 hover:text-white"
                  >
                    <Mail size={18} className="text-primary" />
                    info@emormarketing.com
                  </a>
                  <a
                    href="https://instagram.com/emormarketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-muted-foreground transition hover:border-primary/30 hover:text-white"
                  >
                    <Instagram size={18} className="text-primary" />
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
                className="px-6 py-6"
              >
                <p className="text-[0.72rem] uppercase tracking-[0.24em] text-primary/90">
                  {t("Availability", "Availability")}
                </p>
                <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-white">
                  {t("E hënë - e premte", "Monday - Friday")}
                </h3>
                <p className="mt-2 text-lg text-muted-foreground">09:00 - 18:00</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {t(
                    "Nëse na dërgoni mesazh jashtë orarit, ne kthehemi sa më shpejt ditën e ardhshme të punës.",
                    "If you message us outside working hours, we will get back to you as soon as possible on the next business day."
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
