"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Copy, Check, QrCode, Sparkles, Clock } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { SITE_CONFIG } from "@/lib/constants";
import type { Language } from "@/content/schema";
import { cn } from "@/lib/utils";

export interface WeChatModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  lang?: Language;
  wechatId?: string;
}

const MODAL_LABELS: Record<
  Language,
  {
    title: string;
    description: string;
    idLabel: string;
    copyButton: string;
    copiedButton: string;
    step1: string;
    step2: string;
    step3: string;
    slaBadge: string;
    scanHint: string;
  }
> = {
  es: {
    title: "Conectar por WeChat",
    description:
      "Escanea el código QR con tu aplicación WeChat o copia el ID para contactar directamente con nuestro equipo de ingenieros.",
    idLabel: "ID de WeChat",
    copyButton: "Copiar ID",
    copiedButton: "¡ID Copiado!",
    step1: "1. Abre la app de WeChat",
    step2: "2. Escanea este código o busca el ID",
    step3: "3. Añádenos y cuéntanos tu proyecto",
    slaBadge: "Respuesta habitual en menos de 24 horas",
    scanHint: "Abre WeChat → Escanear código QR",
  },
  en: {
    title: "Connect via WeChat",
    description:
      "Scan the QR code with your WeChat app or copy our WeChat ID to connect directly with our engineering team.",
    idLabel: "WeChat ID",
    copyButton: "Copy ID",
    copiedButton: "ID Copied!",
    step1: "1. Open the WeChat app",
    step2: "2. Scan QR or search by ID",
    step3: "3. Add us and describe your project",
    slaBadge: "Average response within 24 hours",
    scanHint: "Open WeChat → Scan QR Code",
  },
  zh: {
    title: "微信扫码或添加好友",
    description:
      "使用微信扫描下方二维码，或复制微信号添加好友，我们将为您安排一对一技术咨询与项目可行性评估。",
    idLabel: "微信号",
    copyButton: "复制微信号",
    copiedButton: "已复制微信号！",
    step1: "1. 打开微信应用",
    step2: "2. 点击右上角「扫一扫」或搜索微信号",
    step3: "3. 添加好友并发送您的项目需求",
    slaBadge: "承诺 24 小时内工程师亲自回复",
    scanHint: "打开微信 → 扫一扫",
  },
};

/**
 * Clean SVG WeChat Icon
 */
export function WeChatIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M8.691 2.188C3.891 2.188 0 5.478 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.536 1.996c-.053.197.168.361.341.252l2.365-1.48a.72.72 0 0 1 .494-.092c.896.223 1.838.345 2.812.345.228 0 .452-.008.675-.022a6.99 6.99 0 0 1-.366-2.214c0-4.148 4.02-7.51 8.98-7.51.352 0 .697.02 1.036.052C17.72 5.105 13.563 2.188 8.691 2.188zm-2.4 4.542c.637 0 1.153.517 1.153 1.154 0 .638-.516 1.154-1.153 1.154-.638 0-1.154-.516-1.154-1.154 0-.637.516-1.154 1.154-1.154zm5.02 0c.638 0 1.154.517 1.154 1.154 0 .638-.516 1.154-1.154 1.154-.637 0-1.153-.516-1.153-1.154 0-.637.516-1.154 1.153-1.154zm6.657 3.32c-4.137 0-7.49 2.803-7.49 6.26 0 1.884.996 3.58 2.556 4.726a.5.5 0 0 1 .181.566l-.456 1.701c-.045.168.143.308.291.215l2.013-1.26a.61.61 0 0 1 .421-.078c.763.19 1.565.294 2.394.294 4.137 0 7.49-2.803 7.49-6.26 0-3.457-3.353-6.26-7.49-6.26zm-2.043 3.869c.542 0 .98.44.98.981 0 .542-.438.98-.98.98-.542 0-.98-.438-.98-.98 0-.541.438-.981.98-.981zm4.27 0c.542 0 .981.44.981.981 0 .542-.439.98-.981.98-.541 0-.98-.438-.98-.98 0-.541.439-.981.98-.981z" />
    </svg>
  );
}

/**
 * Official WeChat QR Code for okcode.es
 */
function WeChatQrGraphic({ id }: { id: string }) {
  return (
    <div className="relative mx-auto flex flex-col items-center justify-center">
      {/* Outer decorative card */}
      <div className="relative rounded-2xl border-2 border-emerald-500/30 bg-white p-3 sm:p-4 shadow-lg shadow-emerald-500/5">
        {/* QR Image Display */}
        <div className="relative w-56 sm:w-64 rounded-xl bg-white p-2 flex items-center justify-center overflow-hidden border border-slate-100 shadow-2xs">
          <Image
            src="/wechatqrcode.jpg"
            alt={`Código QR WeChat oficial de OKCODE (${id})`}
            width={1086}
            height={1164}
            className="w-full h-auto object-contain rounded-lg"
            priority
          />
        </div>

        {/* Small Scan Hint Below QR */}
        <div className="mt-3 text-center">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-500 font-medium">
            <QrCode className="h-3.5 w-3.5 text-emerald-600" />
            <span>ID: {id}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function WeChatModal({
  open,
  onOpenChange,
  trigger,
  lang = "es",
  wechatId = SITE_CONFIG.wechatId,
}: WeChatModalProps) {
  const [copied, setCopied] = useState(false);
  const labels = MODAL_LABELS[lang] ?? MODAL_LABELS.es;

  async function handleCopy() {
    try {
      if (typeof navigator !== "undefined" && navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(wechatId);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = wechatId;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      trigger={trigger}
      title={
        <span className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
            <WeChatIcon className="h-4.5 w-4.5" />
          </span>
          <span>{labels.title}</span>
        </span>
      }
      description={labels.description}
      className="max-w-md sm:max-w-lg"
    >
      <div className="mt-4 flex flex-col space-y-6">
        {/* QR Code Graphic Display */}
        <WeChatQrGraphic id={wechatId} />

        {/* WeChat ID Copy Card */}
        <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-3.5 sm:p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                {labels.idLabel}
              </span>
              <span className="font-mono text-base sm:text-lg font-bold text-slate-900 select-all tracking-tight">
                {wechatId}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer shadow-2xs select-none",
                copied
                  ? "bg-emerald-600 text-white"
                  : "bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 active:scale-95"
              )}
              aria-label={copied ? labels.copiedButton : labels.copyButton}
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-white" />
                  <span>{labels.copiedButton}</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-slate-600" />
                  <span>{labels.copyButton}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Fast Action Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-600 bg-white rounded-lg border border-slate-100 p-3">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="leading-tight">{labels.step1}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="leading-tight">{labels.step2}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="leading-tight">{labels.step3}</span>
          </div>
        </div>

        {/* SLA Guarantee Note */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-200/70 rounded-lg py-2 px-3">
          <Clock className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
          <span>{labels.slaBadge}</span>
        </div>
      </div>
    </Modal>
  );
}
