import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Send, Instagram, Mail } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("Mesazhi u dërgua me sukses!", "Message sent successfully!"));
    setForm({ name: "", email: "", business: "", message: "" });
  };

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            label={t("Kontakt", "Contact")}
            title={t("Le të flasim për biznesin tuaj.", "Let's talk about your business.")}
            subtitle={t(
              "Na shkruani dhe do t'ju përgjigjemi brenda 24 orëve.",
              "Write to us and we'll respond within 24 hours."
            )}
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="lg:col-span-3 card-glass rounded-2xl p-8 gold-border-hover space-y-5"
            >
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t("Emri", "Name")}</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder={t("Emri juaj", "Your name")}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder={t("Email juaj", "Your email")}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t("Biznesi", "Business")}</label>
                <input
                  type="text"
                  value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                  className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder={t("Emri i biznesit", "Business name")}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t("Mesazhi", "Message")}</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder={t("Si mund t'ju ndihmojmë?", "How can we help you?")}
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gold-light transition-colors duration-200 flex items-center gap-2 w-full justify-center"
              >
                <Send size={16} /> {t("Dërgo Mesazhin", "Send Message")}
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="card-glass rounded-2xl p-8 gold-border-hover">
                <h3 className="font-semibold mb-4">{t("Na Kontaktoni", "Get In Touch")}</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:info@emormarketing.com"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail size={18} className="text-primary" />
                    info@emormarketing.com
                  </a>
                  <a
                    href="https://instagram.com/emormarketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Instagram size={18} className="text-primary" />
                    @emormarketing
                  </a>
                </div>
              </div>

              <div className="card-glass rounded-2xl p-8 gold-border-hover">
                <h3 className="font-semibold mb-3">{t("Orari", "Hours")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("E Hënë – E Premte", "Monday – Friday")}<br />
                  09:00 – 18:00
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
