import type { SiteContent } from "@/content/site-content";
import type { Locale } from "@/lib/i18n";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Hero from "./Hero";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import ProjectCard from "./ProjectCard";
import ProcessSteps from "./ProcessSteps";
import TestimonialCard from "./TestimonialCard";
import ContactPanel from "./ContactPanel";
import Reveal from "./Reveal";

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
      <SiteHeader content={c} current={current} />
      <main id="main">
        <Hero content={c} />

        {/* 01 — Studio */}
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

        {/* 02 — Services */}
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

        {/* 03 — Projects */}
        <section className="section" id="projects">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow={c.projects.eyebrow}
                title={c.projects.title}
                intro={c.projects.intro}
              />
              <span className="projects__note">{c.projects.note}</span>
            </Reveal>
            <Reveal>
              <div>
                {c.projects.items.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 04 — Advantages */}
        <section className="section section--tint" id="advantages">
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

        {/* 05 — Process */}
        <section className="section" id="process">
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

        {/* 06 — Client voices: keep the data ready for a later relaunch. */}
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

        {/* 07 — Contact */}
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
                labels={c.ui.contact}
                formNote={c.contact.formNote}
                ctaLabel={c.ctaLabel}
              />
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter content={c} current={current} />
    </>
  );
}
