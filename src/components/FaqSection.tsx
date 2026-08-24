import type { FaqSection as FaqSectionType } from "@/content/site-content";

export default function FaqSection({ faq }: { faq: FaqSectionType }) {
  return (
    <div className="faq-list">
      {faq.items.map((item, index) => (
        <details className="faq-item" key={index} open={index === 0}>
          <summary className="faq-summary">
            <h3 className="faq-question">{item.question}</h3>
            <span className="faq-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <div className="faq-content">
            <p className="faq-answer">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
