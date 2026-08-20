interface Props {
  eyebrow: string;
  title: string;
  intro?: string;
}

export default function SectionHeading({ eyebrow, title, intro }: Props) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}
