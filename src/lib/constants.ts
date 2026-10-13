export const SITE_CONFIG = {
  name: "OKCODE",
  domain: "okcode.es",
  url: "https://okcode.es",
  email: "info@okcode.es",
  whatsappNumber: "+34684252130",
  whatsappUrl: "https://wa.me/34684252130?text=Hola%20OKCODE%2C%20quisiera%20consultar%20un%20proyecto",
  wechatId: "okcode_",
  location: "Madrid, España",
  foundingYear: 2020,
  web3formsAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
} as const;

export type SiteConfig = typeof SITE_CONFIG;
