import type { SiteContent } from "@/content/site-content";

export default function HeroArt({ ui }: { ui: SiteContent["ui"] }) {
  const { heroArt } = ui;

  return (
    <figure className="hero__art" aria-labelledby="hero-art-caption">
      <div className="hero-art__topbar" aria-hidden="true">
        <span className="hero-art__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="hero-art__path">{heroArt.path}</span>
        <span className="hero-art__version">{heroArt.version}</span>
      </div>

      <div className="hero-art__body">
        <div className="hero-art__heading">
          <div>
            <p className="hero-art__kicker">{heroArt.kicker}</p>
            <h2>{heroArt.title}</h2>
          </div>
          <span className="hero-art__status">{heroArt.status}</span>
        </div>

        <div className="hero-art__workspace">
          <div className="hero-art__flow" aria-label={heroArt.flowLabel}>
            <svg className="hero-art__connectors" viewBox="0 0 600 96" preserveAspectRatio="none" aria-hidden="true">
              <path d="M96 48h112M288 48h112M480 48h24" />
              <path d="M202 44l8 4-8 4M394 44l8 4-8 4M496 44l8 4-8 4" />
            </svg>
            <ol className="hero-art__nodes">
              {heroArt.steps.map((step, index) => (
                <li className={`hero-art__node${index === 1 ? " hero-art__node--active" : ""}`} key={step.title}>
                  <span className="hero-art__node-number">{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step.title}</strong>
                  <small>{step.detail}</small>
                </li>
              ))}
            </ol>
          </div>

          <dl className="hero-art__metrics" aria-label={heroArt.flowLabel}>
            <div>
              <dt>{heroArt.metrics.stackLabel}</dt>
              <dd>{heroArt.metrics.stackValue}</dd>
            </div>
            <div>
              <dt>{heroArt.metrics.languagesLabel}</dt>
              <dd>{heroArt.metrics.languagesValue}</dd>
            </div>
            <div>
              <dt>{heroArt.metrics.baseLabel}</dt>
              <dd>{heroArt.metrics.baseValue}</dd>
            </div>
          </dl>
        </div>

        <div className="hero-art__footer">
          <span className="hero-art__signal"><i /> {heroArt.onlineLabel}</span>
          <span>{heroArt.footerNote}</span>
        </div>
      </div>

      <figcaption id="hero-art-caption" className="hero-art__caption">
        {heroArt.caption}
      </figcaption>
    </figure>
  );
}
