import type { SiteContent } from "@/content/site-content";
import type { Locale } from "@/lib/i18n";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Hero from "./Hero";
import ShowcaseGallery from "./ShowcaseGallery";
import PricingTiers from "./PricingTiers";
import ProjectEstimator from "./ProjectEstimator";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import TechStack from "./TechStack";
import ProcessSteps from "./ProcessSteps";
import FaqSection from "./FaqSection";
import TestimonialCard from "./TestimonialCard";
import ContactPanel from "./ContactPanel";
import FloatingQuickContact from "./FloatingQuickContact";
import Reveal from "./Reveal";
import JsonLd from "./JsonLd";

export default function HomePage({
  content,
  current,
}: {
  content: SiteContent;
  current: Locale;
}) {
  const c = content;
  return (
    <>
      <JsonLd content={c} />
      <SiteHeader content={c} current={current} />
      <main id="main">
        {/* 01 — Editorial Hero with Physics Value Playground */}
        <Hero content={c} />

        {/* 02 — Studio & Philosophy */}
        <section className="section" id="studio">
          <div className="container studio__grid">
            <Reveal>
              <SectionHeading eyebrow={c.studio.eyebrow} title={c.studio.title} />
              <div className="studio__body">
                {c.studio.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="stats">
                {c.studio.stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <div className="stat__value">{s.value}</div>
                    <div className="stat__label">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 03 — Core Services */}
        <section className="section section--tint" id="services">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow={c.services.eyebrow}
                title={c.services.title}
                intro={c.services.intro}
              />
            </Reveal>
            <Reveal>
              <div className="cards">
                {c.services.items.map((s) => (
                  <ServiceCard key={s.id} service={s} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 04 — Architecture & Tech Stack */}
        <section className="section" id="stack">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow={c.techStack.eyebrow}
                title={c.techStack.title}
                intro={c.techStack.intro}
              />
            </Reveal>
            <Reveal>
              <TechStack section={c.techStack} />
            </Reveal>
          </div>
        </section>

        {/* 05 — Monos-Inspired Showcase Gallery (Flagship Works) */}
        <Reveal>
          <ShowcaseGallery showcase={c.showcase} />
        </Reveal>

        {/* 06 — Engineering Discipline & Guarantees */}
        <section className="section" id="advantages">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow={c.advantages.eyebrow}
                title={c.advantages.title}
                intro={c.advantages.intro}
              />
            </Reveal>
            <Reveal>
              <div className="adv-grid">
                {c.advantages.items.map((a, i) => (
                  <div className="adv" key={a.title}>
                    <div className="adv__num">{String(i + 1).padStart(2, "0")}</div>
                    <h3>{a.title}</h3>
                    <p>{a.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 07 — 3-Phase Process & Delivery */}
        <section className="section section--tint" id="process">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow={c.process.eyebrow}
                title={c.process.title}
                intro={c.process.intro}
              />
            </Reveal>
            <Reveal>
              <ProcessSteps steps={c.process.steps} />
            </Reveal>
          </div>
        </section>

        {/* 08 — Transparent Pricing Benchmarks */}
        <Reveal>
          <PricingTiers pricing={c.pricing} contact={c.contact.info} />
        </Reveal>

        {/* 09 — Interactive Scope & Project Estimator */}
        <div id="estimator">
          <Reveal>
            <ProjectEstimator estimator={c.estimator} contact={c.contact.info} />
          </Reveal>
        </div>

        {/* 10 — FAQ */}
        <section className="section" id="faq">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow={c.faq.eyebrow}
                title={c.faq.title}
                intro={c.faq.intro}
              />
            </Reveal>
            <Reveal>
              <FaqSection faq={c.faq} />
            </Reveal>
          </div>
        </section>

        {/* 11 — Testimonials (optional) */}
        {c.visibility.testimonials && (
          <section className="section section--tint" id="testimonials">
            <div className="container">
              <Reveal>
                <SectionHeading
                  eyebrow={c.testimonials.eyebrow}
                  title={c.testimonials.title}
                  intro={c.testimonials.intro}
                />
                <span className="testi__note">{c.testimonials.note}</span>
              </Reveal>
              <Reveal>
                <div className="testi-grid">
                  {c.testimonials.items.map((t, i) => (
                    <TestimonialCard key={i} item={t} />
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* 12 — Contact & Discovery Call */}
        <section className="section section--ink" id="contact">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow={c.contact.eyebrow}
                title={c.contact.title}
                intro={c.contact.intro}
              />
            </Reveal>
            <Reveal>
              <ContactPanel
                recipientEmail={c.contact.info.email}
                contactInfo={c.contact.info}
                labels={c.ui.contact}
                formNote={c.contact.formNote}
                ctaLabel={c.ctaLabel}
              />
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter content={c} current={current} />
      <FloatingQuickContact contact={c.contact.info} locale={current} />
    </>
  );
}
