"use client";

import { useState } from "react";
import type { SiteContent } from "@/content/site-content";
import { IconArrow } from "./Icons";

interface Props {
  recipientEmail: string;
  labels: SiteContent["ui"]["contact"];
  formNote: string;
  ctaLabel: string;
}

export default function ContactPanel({ recipientEmail, labels, formNote, ctaLabel }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const subject = encodeURIComponent(`New project enquiry — ${name || "OKCODE"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    // The recipient stays in the content model but is not rendered as contact information.
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="contact__grid">
      <form className="form" onSubmit={submit}>
        <p className="form__note">{formNote}</p>
        <div className="field">
          <label htmlFor="cf-name">{labels.nameLabel}</label>
          <input
            id="cf-name"
            name="name"
            autoComplete="name"
            placeholder={labels.namePlaceholder}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-email">{labels.emailFieldLabel}</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={labels.emailPlaceholder}
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-msg">{labels.projectLabel}</label>
          <textarea
            id="cf-msg"
            name="message"
            placeholder={labels.projectPlaceholder}
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn--primary">
          {ctaLabel}
          <IconArrow className="arrow" width={16} height={16} />
        </button>
      </form>
    </div>
  );
}
