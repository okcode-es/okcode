import type { SiteContent } from "@/content/site-content";
import { IconArrow } from "./Icons";
import HeroExplorer from "./HeroExplorer";

export default function Hero({ content }: { content: SiteContent }) {
  const { hero } = content;

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__status-pill">
            <span className="hero__status-pulse" />
            <span>{hero.eyebrow}</span>
          </div>

          <h1 className="hero__headline">
            {hero.title}{" "}
            {hero.titleHighlight && (
              <span className="text-gradient">{hero.titleHighlight}</span>
            )}
          </h1>

          <p className="hero__sub">{hero.subtitle}</p>

          {/* Key Value Propositions */}
          {hero.badges && hero.badges.length > 0 && (
            <ul className="hero__badges" aria-label="Key guarantees">
              {hero.badges.map((badge) => (
                <li className="hero__badge" key={badge}>
                  <svg
                    className="hero__badge-check"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{badge}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="hero__cta">
            <a className="btn btn--primary btn--hero" href="#contact">
              {hero.primaryCta}
              <IconArrow className="arrow" width={16} height={16} />
            </a>
            <a className="btn btn--ghost" href="#projects">
              {hero.secondaryCta}
            </a>
          </div>

          <p className="hero__trust">{hero.trust}</p>
        </div>

        <div className="hero__interactive-wrap">
          <HeroExplorer interactive={hero.interactive} />
        </div>
      </div>
    </section>
  );
}
