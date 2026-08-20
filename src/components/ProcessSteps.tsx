import type { ProcessStep } from "@/content/site-content";

export default function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="steps">
      {steps.map((s) => (
        <div className="step" key={s.step}>
          <div className="step__num">{s.step}</div>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
        </div>
      ))}
    </div>
  );
}
