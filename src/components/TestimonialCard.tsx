import type { Testimonial } from "@/content/site-content";

export default function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="testi">
      <blockquote className="testi__quote">“{item.quote}”</blockquote>
      <figcaption className="testi__by">
        <div className="testi__author">{item.author}</div>
        <div className="testi__role">
          {item.role} · {item.company}
        </div>
      </figcaption>
    </figure>
  );
}
