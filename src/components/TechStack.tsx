import type { TechStackSection } from "@/content/site-content";

export default function TechStack({ section }: { section: TechStackSection }) {
  return (
    <div className="tech-stack">
      <div className="tech-grid">
        {section.groups.map((group) => (
          <div className="tech-card" key={group.category}>
            <h3 className="tech-card__title">{group.category}</h3>
            <ul className="tech-card__list">
              {group.items.map((item) => (
                <li className="tech-pill" key={item.name}>
                  <strong className="tech-pill__name">{item.name}</strong>
                  {item.desc && <span className="tech-pill__desc">{item.desc}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
