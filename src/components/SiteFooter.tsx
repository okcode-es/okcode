import type { SiteContent } from "@/content/site-content";
import { localeHome, type Locale } from "@/lib/i18n";
import { BrandMark } from "./Icons";

interface Props {
  content: SiteContent;
  current: Locale;
}

export default function SiteFooter({ content, current }: Props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div>
            <a className="brand site-footer__brand" href={localeHome[current]}>
              <BrandMark className="brand__mark" />
              <span>OKCODE</span>
            </a>
            <p className="site-footer__about">{content.footer.about}</p>
          </div>

          <div>
            <h4>{content.ui.footer.menuLabel}</h4>
            <nav className="site-footer__links" aria-label={content.ui.footer.menuLabel}>
              {content.nav.map((item) => (
                <a key={item.anchor} href={`#${item.anchor}`}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4>{content.ui.footer.contactLabel}</h4>
            <div className="site-footer__links">
              <a href={`mailto:${content.contact.info.email}`}>{content.contact.info.email}</a>
              <a href={`tel:${content.contact.info.phone.replace(/\s+/g, "")}`}>
                {content.contact.info.phone}
              </a>
              {content.contact.info.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>{content.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
