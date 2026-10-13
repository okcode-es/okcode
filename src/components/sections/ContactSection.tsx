"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  Send,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Loader2,
} from "lucide-react";
import type { Language, SiteContent } from "@/content/schema";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { WeChatModal, WeChatIcon } from "./WeChatModal";
import { cn } from "@/lib/utils";

export interface ContactSectionProps {
  contact: SiteContent["contact"];
  lang: Language;
  className?: string;
}

const LABELS: Record<
  Language,
  {
    eyebrow: string;
    waTitle: string;
    waSubtitle: string;
    waCta: string;
    wechatTitle: string;
    wechatSubtitle: string;
    wechatCta: string;
    emailTitle: string;
    emailSubtitle: string;
    emailCta: string;
    emailCopy: string;
    emailCopied: string;
    formTitle: string;
    formSubtitle: string;
    labelName: string;
    labelContact: string;
    labelMessage: string;
    errName: string;
    errContact: string;
    errMessage: string;
    errSendFailed: string;
    btnSubmitting: string;
    formSuccessTitle: string;
    formSuccessOpenEmail: string;
    formReset: string;
    promptCardTitle: string;
    promptCardSubtitle: string;
    promptCopyBtn: string;
    promptCopiedBtn: string;
    promptInstruction: string;
    confidentialityBadge: string;
    slaBadge: string;
  }
> = {
  es: {
    eyebrow: "Contacto Directo",
    waTitle: "WhatsApp Directo",
    waSubtitle: "Respuesta rápida para resolver dudas o solicitar un presupuesto preliminar.",
    waCta: "Abrir WhatsApp",
    wechatTitle: "WeChat / 微信",
    wechatSubtitle: "Escanea el código QR o añade @okcode_es para soporte directo en español o chino.",
    wechatCta: "Ver Código QR",
    emailTitle: "Email Corporativo",
    emailSubtitle: "Para especificaciones técnicas, pliegos formales (RFP) y contratos.",
    emailCta: "Enviar Email",
    emailCopy: "Copiar",
    emailCopied: "¡Copiado!",
    formTitle: "Envío Rápido de Proyecto",
    formSubtitle:
      "Rellena estos 3 datos básicos y te responderemos con una propuesta técnica en menos de 24 horas.",
    labelName: "Tu nombre o empresa",
    labelContact: "Medio de contacto (Email, WhatsApp o Teléfono)",
    labelMessage: "Describe brevemente tu idea de proyecto",
    errName: "Por favor, introduce tu nombre o empresa.",
    errContact: "Por favor, introduce tu email o número de teléfono.",
    errMessage: "Por favor, cuéntanos brevemente sobre tu proyecto.",
    errSendFailed:
      "No se pudo enviar el mensaje automáticamente. Por favor, inténtalo de nuevo o contáctanos por WhatsApp o Email.",
    btnSubmitting: "Enviando propuesta...",
    formSuccessTitle: "¡Mensaje recibido con éxito!",
    formSuccessOpenEmail: "Abrir cliente de correo con estos datos",
    formReset: "Enviar otra consulta",
    promptCardTitle: "Plantilla de Consulta Rápida",
    promptCardSubtitle:
      "¿No estás seguro de cómo estructurar tu mensaje? Copia esta plantilla prediseñada con 1 clic y pégala en cualquier canal:",
    promptCopyBtn: "Copiar plantilla al portapapeles",
    promptCopiedBtn: "¡Plantilla copiada!",
    promptInstruction: "Sustituye los campos entre corchetes [ ] con los detalles de tu idea.",
    confidentialityBadge: "Confidencialidad garantizada · Presupuesto cerrado sin compromiso",
    slaBadge: "Propuesta técnica en menos de 24 horas",
  },
  en: {
    eyebrow: "Direct Channels",
    waTitle: "WhatsApp Direct",
    waSubtitle: "Rapid response for clarifying questions and preliminary cost estimates.",
    waCta: "Open WhatsApp",
    wechatTitle: "WeChat / 微信",
    wechatSubtitle: "Scan the QR code or add @okcode_es for direct bilingual support.",
    wechatCta: "View QR Code",
    emailTitle: "Corporate Email",
    emailSubtitle: "For detailed specifications, formal RFPs, and master service agreements.",
    emailCta: "Send Email",
    emailCopy: "Copy",
    emailCopied: "Copied!",
    formTitle: "Quick Project Brief",
    formSubtitle:
      "Submit these 3 simple fields to receive a structured technical breakdown within 24 hours.",
    labelName: "Your name or company",
    labelContact: "Contact method (Email, WhatsApp, or Phone)",
    labelMessage: "Briefly outline your project idea",
    errName: "Please provide your name or company.",
    errContact: "Please provide your email or phone number.",
    errMessage: "Please provide a brief summary of your project.",
    errSendFailed:
      "Failed to send message automatically. Please try again or reach out directly via WhatsApp or Email.",
    btnSubmitting: "Sending inquiry...",
    formSuccessTitle: "Message received successfully!",
    formSuccessOpenEmail: "Open email client with these details",
    formReset: "Send another inquiry",
    promptCardTitle: "Quick Brief Template",
    promptCardSubtitle:
      "Not sure how to phrase your inquiry? Copy this battle-tested brief template with 1 click and paste it anywhere:",
    promptCopyBtn: "Copy brief template",
    promptCopiedBtn: "Template copied!",
    promptInstruction: "Replace the bracketed [ ] placeholders with your project details.",
    confidentialityBadge: "Guaranteed Confidentiality · Fixed-price estimate with zero obligation",
    slaBadge: "Technical proposal within 24 hours",
  },
  zh: {
    eyebrow: "直达沟通渠道",
    waTitle: "WhatsApp 在线咨询",
    waSubtitle: "实时在线沟通，快速解答业务疑问与初步预算评估。",
    waCta: "打开 WhatsApp",
    wechatTitle: "微信咨询（WeChat）",
    wechatSubtitle: "扫码添加工程师微信，支持中西英三语，随时一对一咨询。",
    wechatCta: "扫码添加微信",
    emailTitle: "官方商务邮箱",
    emailSubtitle: "适用于正式需求书（RFP）、详细规格说明或企业采购提案。",
    emailCta: "发送企业邮件",
    emailCopy: "复制",
    emailCopied: "已复制！",
    formTitle: "30 秒快速提交需求",
    formSubtitle:
      "填写以下 3 项基础信息，工程师将在 24 小时内为您出具初步技术方案与报价。",
    labelName: "您的姓名 / 公司名称",
    labelContact: "联系方式（微信 / WhatsApp / 电子邮箱）",
    labelMessage: "项目想法或功能需求描述",
    errName: "请填写您的称呼或公司名称。",
    errContact: "请填写至少一种联系方式（微信号、电话或邮箱）。",
    errMessage: "请简要描述您的项目想法或预期功能。",
    errSendFailed:
      "提交失败，请检查网络或直接通过微信 / WhatsApp / 邮件与我们联系。",
    btnSubmitting: "正在提交需求...",
    formSuccessTitle: "需求已成功提交！",
    formSuccessOpenEmail: "在邮件客户端中打开此需求",
    formReset: "提交另一条咨询",
    promptCardTitle: "快捷咨询模板",
    promptCardSubtitle:
      "不知道如何组织沟通语言？一键复制下方标准化咨询模板，直接发送给工程师：",
    promptCopyBtn: "一键复制咨询模板",
    promptCopiedBtn: "模板已复制！",
    promptInstruction: "复制后直接粘贴至微信、WhatsApp 或邮件，替换方括号 [ ] 内容即可。",
    confidentialityBadge: "商业与技术保密承诺 · 明确一口价清单 · 无任何签约压力",
    slaBadge: "承诺 24 小时内工程师亲自出具方案",
  },
};

/**
 * Clean SVG WhatsApp Icon
 */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

async function copyText(text: string): Promise<boolean> {
  try {
    if (typeof navigator !== "undefined" && navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textarea);
    return success;
  } catch {
    return false;
  }
}

export function ContactSection({
  contact,
  lang,
  className,
}: ContactSectionProps) {
  const currentLabels = LABELS[lang] ?? LABELS.es;

  // WeChat Modal state
  const [wechatModalOpen, setWechatModalOpen] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState<{
    name?: string;
    contactMethod?: string;
    message?: string;
  }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Copy states
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  async function handleCopyEmail() {
    const success = await copyText(contact.email || SITE_CONFIG.email);
    if (success) {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  }

  async function handleCopyPrompt() {
    const success = await copyText(contact.copyPromptText);
    if (success) {
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2500);
    }
  }

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errors: typeof formErrors = {};

    if (!name.trim()) {
      errors.name = currentLabels.errName;
    }
    if (!contactMethod.trim()) {
      errors.contactMethod = currentLabels.errContact;
    }
    if (!message.trim()) {
      errors.message = currentLabels.errMessage;
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: SITE_CONFIG.web3formsAccessKey,
          subject: `Nuevo proyecto OKCODE (${lang.toUpperCase()}) — ${name.trim()}`,
          from_name: "OKCODE Web Inquiry",
          name: name.trim(),
          contact_method: contactMethod.trim(),
          message: message.trim(),
          language: lang,
          page_url: typeof window !== "undefined" ? window.location.href : "https://okcode.es",
          botcheck: "",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(data.message || currentLabels.errSendFailed);
      }
    } catch {
      setSubmitError(currentLabels.errSendFailed);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleResetForm() {
    setName("");
    setContactMethod("");
    setMessage("");
    setFormErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
  }

  // Pre-formatted mailto link for direct sending
  const mailSubject = encodeURIComponent(
    `Nuevo proyecto — ${name.trim() || SITE_CONFIG.name}`
  );
  const mailBody = encodeURIComponent(
    `Nombre / Empresa: ${name.trim()}\nContacto: ${contactMethod.trim()}\n\nDescripción del proyecto:\n${message.trim()}`
  );
  const mailtoPrefilledUrl = `mailto:${contact.email || SITE_CONFIG.email}?subject=${mailSubject}&body=${mailBody}`;

  return (
    <section
      id="contacto"
      className={cn(
        "scroll-mt-20 py-20 sm:py-28 lg:py-32 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-white text-slate-800 border border-slate-200/80 font-mono shadow-2xs mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{currentLabels.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            {contact.heading}
          </h2>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {contact.subheading}
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-500">
            <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span>{contact.locationText}</span>
          </div>
        </div>

        {/* 3 Direct 1-Click Cards (WhatsApp, WeChat, Email) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: WhatsApp */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-600 shadow-2xs group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors">
                  <WhatsAppIcon className="h-5 w-5" />
                </div>
                
              </div>

              <div className="mt-5">
                <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-slate-950 transition-colors">
                  {currentLabels.waTitle}
                </h3>
                <p className="mt-1 font-mono text-sm font-semibold text-emerald-700">
                  {contact.whatsappText}
                </p>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentLabels.waSubtitle}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <Button
                variant="primary"
                size="md"
                href={SITE_CONFIG.whatsappUrl}
                className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-medium shadow-xs"
              >
                <span>{currentLabels.waCta}</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Card 2: WeChat */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-600 shadow-2xs group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors">
                  <WeChatIcon className="h-5 w-5" />
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-slate-700 bg-slate-100 border border-slate-200/70 rounded px-2 py-0.5">
                  ID: {SITE_CONFIG.wechatId}
                </span>
              </div>

              <div className="mt-5">
                <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-slate-950 transition-colors">
                  {currentLabels.wechatTitle}
                </h3>
                <p className="mt-1 font-mono text-sm font-semibold text-slate-800">
                  {contact.wechatLabel}
                </p>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentLabels.wechatSubtitle}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <Button
                variant="outline"
                size="md"
                onClick={() => setWechatModalOpen(true)}
                className="w-full font-medium hover:border-emerald-500 hover:text-emerald-700 transition-colors"
              >
                <span>{currentLabels.wechatCta}</span>
                <ExternalLink className="h-3.5 w-3.5 ml-1" />
              </Button>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-200/80 text-blue-600 shadow-2xs group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200/70 rounded px-2 py-0.5 transition-colors cursor-pointer"
                  title="Copiar email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">
                        {currentLabels.emailCopied}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>{currentLabels.emailCopy}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-5">
                <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-slate-950 transition-colors">
                  {currentLabels.emailTitle}
                </h3>
                <p className="mt-1 font-mono text-sm font-semibold text-slate-800">
                  {contact.email || SITE_CONFIG.email}
                </p>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentLabels.emailSubtitle}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
              <Button
                variant="outline"
                size="md"
                href={`mailto:${contact.email || SITE_CONFIG.email}?subject=Consulta%20Proyecto%20OKCODE`}
                className="w-full font-medium"
              >
                <span>{currentLabels.emailCta}</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Left (Quick Form) + Right (1-Click Prompt Template) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Column 1: 3-Field Quick Form (lg:col-span-7) */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-9 shadow-xs">
            <div className="border-b border-slate-100 pb-5 mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-700 bg-blue-50 border border-blue-200/60 rounded px-2.5 py-0.5 mb-2">
                <Sparkles className="h-3 w-3" />
                <span>24h SLA</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                {currentLabels.formTitle}
              </h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                {currentLabels.formSubtitle}
              </p>
            </div>

            {isSubmitted ? (
              <div
                className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-7 text-left space-y-4 animate-in fade-in-50 duration-300"
                role="status"
                aria-live="polite"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">
                      {currentLabels.formSuccessTitle}
                    </h4>
                    <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                      {contact.form.successMessage}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-emerald-200/60 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    href={mailtoPrefilledUrl}
                    className="font-medium text-xs sm:text-sm bg-slate-900 hover:bg-slate-800"
                  >
                    <Mail className="h-4 w-4 mr-1.5" />
                    <span>{currentLabels.formSuccessOpenEmail}</span>
                  </Button>

                  <Button
                    variant="ghost"
                    size="md"
                    onClick={handleResetForm}
                    className="font-medium text-xs sm:text-sm text-slate-600 hover:text-slate-900"
                  >
                    <span>{currentLabels.formReset}</span>
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} noValidate className="space-y-5">
                {/* Web3Forms Honeypot spam protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Field 1: Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono font-medium text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    {currentLabels.labelName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (formErrors.name) {
                        setFormErrors((prev) => ({ ...prev, name: undefined }));
                      }
                    }}
                    placeholder={contact.form.namePlaceholder}
                    className={cn(
                      "w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-2xs placeholder:text-slate-400 focus:outline-none transition-colors",
                      formErrors.name
                        ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-slate-200/90 focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                    )}
                  />
                  {formErrors.name && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-600 font-mono">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{formErrors.name}</span>
                    </p>
                  )}
                </div>

                {/* Field 2: Contact Method */}
                <div>
                  <label
                    htmlFor="contact-method"
                    className="block text-xs font-mono font-medium text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    {currentLabels.labelContact} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-method"
                    name="contactMethod"
                    type="text"
                    autoComplete="email"
                    value={contactMethod}
                    onChange={(e) => {
                      setContactMethod(e.target.value);
                      if (formErrors.contactMethod) {
                        setFormErrors((prev) => ({
                          ...prev,
                          contactMethod: undefined,
                        }));
                      }
                    }}
                    placeholder={contact.form.contactPlaceholder}
                    className={cn(
                      "w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-2xs placeholder:text-slate-400 focus:outline-none transition-colors",
                      formErrors.contactMethod
                        ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-slate-200/90 focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                    )}
                  />
                  {formErrors.contactMethod && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-600 font-mono">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{formErrors.contactMethod}</span>
                    </p>
                  )}
                </div>

                {/* Field 3: Project message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    {currentLabels.labelMessage} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (formErrors.message) {
                        setFormErrors((prev) => ({
                          ...prev,
                          message: undefined,
                        }));
                      }
                    }}
                    placeholder={contact.form.messagePlaceholder}
                    className={cn(
                      "w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-2xs placeholder:text-slate-400 focus:outline-none transition-colors resize-y leading-relaxed",
                      formErrors.message
                        ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-slate-200/90 focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                    )}
                  />
                  {formErrors.message && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-600 font-mono">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{formErrors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button & Microcopy */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto font-medium"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        <span>{currentLabels.btnSubmitting}</span>
                      </>
                    ) : (
                      <>
                        <span>{contact.form.submitButton}</span>
                        <Send className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>

                {submitError && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5">
                    <AlertCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-medium">{submitError}</p>
                      <p className="text-slate-600">
                        <a
                          href={mailtoPrefilledUrl}
                          className="underline hover:text-slate-900 font-semibold"
                        >
                          {currentLabels.formSuccessOpenEmail}
                        </a>
                      </p>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Column 2: 1-Click Copy Inquiry Prompt Template (lg:col-span-5) */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-slate-100 text-slate-800 border border-slate-200/70 shadow-2xs">
                  <Sparkles className="h-3 w-3 text-blue-600" />
                  <span>{contact.copyPromptLabel}</span>
                </span>

                <button
                  type="button"
                  onClick={handleCopyPrompt}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all duration-200 cursor-pointer shadow-2xs select-none",
                    copiedPrompt
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-900 hover:bg-slate-800 text-white active:scale-95"
                  )}
                  aria-label={
                    copiedPrompt
                      ? currentLabels.promptCopiedBtn
                      : currentLabels.promptCopyBtn
                  }
                >
                  {copiedPrompt ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-white" />
                      <span>{currentLabels.promptCopiedBtn}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-slate-300" />
                      <span>{currentLabels.promptCopyBtn}</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 leading-snug">
                {currentLabels.promptCardTitle}
              </h3>

              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentLabels.promptCardSubtitle}
              </p>

              {/* Prompt Text Preview Box */}
              <div className="mt-4 rounded-xl border border-slate-200/90 bg-slate-50/90 p-4 font-mono text-xs sm:text-sm text-slate-800 leading-relaxed shadow-inner select-all relative group">
                <p className="whitespace-pre-wrap">{contact.copyPromptText}</p>
              </div>

              <p className="mt-3 text-[11px] font-mono text-slate-500">
                💡 {currentLabels.promptInstruction}
              </p>
            </div>

            {/* Prompt Action Card Footer */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <Button
                variant="outline"
                size="md"
                onClick={handleCopyPrompt}
                className={cn(
                  "w-full font-medium transition-all",
                  copiedPrompt
                    ? "border-emerald-500 text-emerald-700 bg-emerald-50/50"
                    : "hover:bg-slate-50"
                )}
              >
                {copiedPrompt ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>{currentLabels.promptCopiedBtn}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-slate-600" />
                    <span>{currentLabels.promptCopyBtn}</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom SLA & Confidentiality Banner */}
        <div className="mt-12 sm:mt-16 rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>{currentLabels.confidentialityBadge}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <Clock className="h-4 w-4 text-blue-600 shrink-0" />
            <span>{currentLabels.slaBadge}</span>
          </div>
        </div>
      </div>

      {/* Accessible WeChat Modal */}
      <WeChatModal
        open={wechatModalOpen}
        onOpenChange={setWechatModalOpen}
        lang={lang}
        wechatId={SITE_CONFIG.wechatId}
      />
    </section>
  );
}
