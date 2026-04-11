import { motion } from "framer-motion";
import { Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import PremiumCard from "@/components/PremiumCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp } from "@/lib/motion";

const testimonials = [
  {
    logo: "/logos/mobishopdoni.png",
    name: "MobiShop Doni",
    handle: "@mobishopdoni.prishtine",
    text: "qikjo e fundit pom pelqen, qeshtu grahi kejt se fort po rrika, faleminderit",
  },
  {
    logo: "/logos/englishworld-school.jpg",
    name: "English World School",
    handle: "@englishworld_school",
    text: "keni qene korrekt, kemi pare permiresime te medha ne faqe dhe faleminderit shume per bashkepunim.",
  },
  {
    logo: "/logos/mobishopamigos.png",
    name: "MobiShop Amigos",
    handle: "@mobishopamigos",
    text: "modelet e dizajnit par shume mire",
  },
  {
    logo: "/logos/neo-mobile-store.png",
    name: "Neo Mobile Store",
    handle: "@neomobilestore_",
    text: "Punojnë perfekt, shumë të mprehta, film i ke bo. I ke bo jashtëzakonisht mirë.",
  },
  {
    logo: "/logos/dritonbublaku.png",
    name: "Driton Bublaku",
    handle: "@dritonbublakuphotographer",
    text: "Faleminderit për bashkëpunimin! Ishte kënaqësi të punoja me ju. Ajo që e kisha imagjinuar prej kohësh, ju e realizuat saktësisht ashtu siç e desha, pa komplikime. Edhe një herë faleminderit, dhe ju uroj shumë sukses juve dhe ekipit tuaj!",
  },
  {
    logo: "/logos/mondimobishop.png",
    name: "Mondimobi Shop",
    handle: "@mondimobishop",
    text: "Faleminderit shumë, është perfekt. E ke goditur për mrekulli, sinqerisht je më i miri. E vlerësoj shumë këtë.",
  },
  {
    logo: "/logos/techdropks.png",
    name: "TechDrop.ks",
    handle: "@techdrop.ks",
    text: "Very satisfied with the result. The design looks modern, sharp, and professionally done.",
  },
];

const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <main className="pb-16 md:pb-20">
      <PageHero
        label={t("Klientët tanë", "Our clients")}
        title={t(
          "Besuar nga klientët.",
          "Trusted by clients."
        )}
        subtitle={t(
          "Fjalë reale nga biznese reale. Kjo është arsyeja pse klientët tanë vazhdojnë të punojnë me ne.",
          "Real words from real businesses. This is why our clients keep working with us."
        )}
        stats={[
          {
            label: t("Klientë", "Clients"),
            value: "7+",
          },
          {
            label: t("Vlerësim", "Rating"),
            value: "5.0 ★",
          },
          {
            label: t("Shërbime", "Services"),
            value: t("Social, Web, AI", "Social, Web, AI"),
          },
        ]}
      />

      <section className="section-padding pt-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((client, index) => (
              <PremiumCard
                key={client.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="flex flex-col gap-4 px-5 py-5"
              >
                {/* Logo + name */}
                <div className="flex items-center gap-3.5">
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/[0.04]">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-full w-full object-contain p-1.5"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.display = "flex";
                          parent.style.alignItems = "center";
                          parent.style.justifyContent = "center";
                          parent.style.fontSize = "1.1rem";
                          parent.style.fontWeight = "700";
                          parent.style.color = "hsl(44 71% 58%)";
                          parent.innerText = client.name[0];
                        }
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-[0.92rem] font-semibold text-white leading-tight">
                      {client.name}
                    </p>
                    <p className="text-[0.75rem] text-muted-foreground mt-0.5">
                      {client.handle}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} className="fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[0.875rem] leading-relaxed text-muted-foreground italic flex-1">
                  "{client.text}"
                </p>
              </PremiumCard>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <PremiumCard
              interactive={false}
              className="px-6 py-7 text-center md:px-10"
            >
              <div className="panel-grid absolute inset-0 opacity-[0.12]" />
              <div className="relative">
                <p className="text-[0.82rem] uppercase tracking-[0.2em] text-primary/80">
                  {t("Bëhuni klient i radhës", "Become our next client")}
                </p>
                <h3 className="mt-3 text-[1.35rem] font-bold tracking-[-0.03em] text-white">
                  {t(
                    "Gati të ndërtojmë diçka të mirë bashkë?",
                    "Ready to build something great together?"
                  )}
                </h3>
                <p className="mx-auto mt-2 max-w-md text-[0.875rem] text-muted-foreground">
                  {t(
                    "Na kontaktoni sot. Ju përgjigjemi brenda 24 orëve.",
                    "Contact us today. We will reply within 24 hours."
                  )}
                </p>
                <a
                  href="/contact"
                  className="btn-primary mt-5 inline-flex"
                >
                  {t("Fillo tani", "Get started")}
                </a>
              </div>
            </PremiumCard>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
