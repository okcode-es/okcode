import type { Service } from "@/content/site-content";
import { serviceIcons, IconArrow } from "./Icons";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];
  return (
    <article className="card">
      <span className="card__icon">
        <Icon />
      </span>
      <h3>{service.title}</h3>
      <p className="card__summary">{service.summary}</p>
      <ul className="card__points">
        {service.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <a className="card__cta" href="#contact">
        {service.cta}
        <IconArrow className="arrow" width={15} height={15} />
      </a>
    </article>
  );
}
