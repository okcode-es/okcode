import type { SiteContent } from "@/content/site-content";
import { IconArrow } from "./Icons";
import HeroArt from "./HeroArt";

export default function Hero({ content }: { content: SiteContent }) {
  const { hero } = content;
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="hero__sub">{hero.subtitle}</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#contact">
              {hero.primaryCta}
              <IconArrow className="arrow" width={16} height={16} />
            </a>
            <a className="btn btn--ghost" href="#projects">
              {hero.secondaryCta}
            </a>
          </div>
          <p className="hero__trust">{hero.trust}</p>
        </div>

        <HeroArt ui={content.ui} />
      </div>
    </section>
  );
}
