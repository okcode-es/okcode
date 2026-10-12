import type { SiteContent } from './schema';

export const zhContent: SiteContent = {
  meta: {
    title: 'OKCODE | 高品质企业建站与 iOS / Android 移动 App 定制开发 · 马德里',
    description:
      '西班牙马德里全栈开发工作室。专为出海企业、海外商家及初创团队提供高端官网与移动 App 定制开发。资深工程师 1 对 1 直连，透明一口价，100% 源码交付。',
    keywords: [
      '企业建站',
      '移动App开发',
      'iOS开发',
      'Android开发',
      '独立站开发',
      '出海独立站',
      '马德里华人程序员',
      '西班牙软件外包',
      'OKCODE',
    ],
  },
  nav: {
    services: '核心服务',
    projects: '精选案例',
    whyUs: '为什么选我们',
    process: '合作流程',
    pricing: '预算参考',
    faq: '常见问题',
    contactCta: '免费获取报价',
  },
  hero: {
    eyebrow: '承接全球项目 · 中 / 西 / 英三语直联',
    title: '高品质定制建站 · 移动 App 开发\n把你的商业想法，变成带来真金白银的数字化产品',
    subtitle:
      '专为出海企业、海外商家及初创团队提供定制开发服务。没有销售套路，没有中介转包。资深工程师直接对接，透明一口价，最快 2 周交付上线，100% 源码与产权完全归你所有。',
    badges: [
      { icon: 'Zap', text: '最快 2 周快速交付' },
      { icon: 'ShieldCheck', text: '固定透明一口价，0 隐形消费' },
      { icon: 'PackageCheck', text: '100% 源码与产权交付归你' },
      { icon: 'Smartphone', text: '包上架与包 Google SEO 收录' },
    ],
    primaryCta: '立即免费获取项目方案与报价',
    secondaryCta: '查看客户案例与功能演示',
    microCopy:
      '无需准备复杂的专业技术文档，只需告诉我们你的初步想法，24 小时内免费为你梳理功能清单与预算建议。',
  },
  showcase: {
    heading: '商业标杆场景与精选案例',
    subheading: '以真实业务转化为导向，为餐饮、出海独立站和本地企业打造落地数字产品',
    items: [
      {
        id: 'restaurant-ordering',
        title: '双语官方网站与手机点餐系统',
        client: '西班牙知名连锁餐饮品牌',
        category: 'Web & Mobile App',
        impactMetric: '0 → 40k € 自营点单流水，免去 25% 平台抽成',
        summary:
          '摆脱第三方外卖平台高额抽成，沉淀私域会员，实现后厨自动出票与本地聚合支付。',
        image: '/images/showcase/restaurant.webp',
        tags: ['企业官网', '移动应用', '餐饮点单', '本地支付'],
        drawerDetails: {
          clientProblem:
            '第三方外卖平台佣金高达 25%，且无法沉淀自己的会员，高峰期网络抖动频繁漏单。',
          solutionDelivered:
            '打造高颜值品牌双语官网与响应式扫码点餐系统，打通 Bizum、信用卡与现金支付，并与后厨打印机无缝对接。',
          keyDeliverables: [
            '品牌官网响应式前端',
            '扫码自营点餐系统',
            'Bizum 与 Stripe 支付接口',
            '后厨自动打印网关',
          ],
          timeline: '3 周交付上线',
          testimonial: {
            quote:
              '摆脱了平台 25% 的高昂抽成，我们终于拥有了自己的核心会员数据，顾客点单体验非常顺畅。',
            author: 'Carlos M.',
            role: '连锁餐饮运营总监',
          },
        },
      },
      {
        id: 'crossborder-fashion',
        title: '高转化出海多语言独立站',
        client: '欧美跨境时尚服饰品牌',
        category: 'E-Commerce',
        impactMetric: '首屏秒开，跳出率降低 42%，结账转化率翻倍',
        summary:
          '极速响应式独立站，支持多语言多币种自适应结算与海外本地支付，深度符合 GDPR 规范。',
        image: '/images/showcase/fashion.webp',
        tags: ['独立站搭建', 'Shopify / 自研', '多币种支付', '海外获客'],
        drawerDetails: {
          clientProblem:
            '旧网站打开速度超过 4 秒，移动端跳出率高达 70%，在欧洲部分地区由于支付合规问题频遭拒付。',
          solutionDelivered:
            '采用现代架构重新构建独立站，全球秒级极速打开，接入 Stripe 全球支付与 PayPal，适配欧元/美元/英镑多币种结算。',
          keyDeliverables: [
            '极速独立站电商前台',
            '全球多币种多语言系统',
            'Stripe 与 PayPal 支付链路',
            'GDPR 合规及 Google SEO 深度配置',
          ],
          timeline: '4 周交付上线',
          testimonial: {
            quote:
              '网站速度有了质的飞跃，欧洲本地客户结账转化率翻倍，彻底解决了支付丢单的痛点。',
            author: 'Elena R.',
            role: '品牌创始人 & 出海业务负责人',
          },
        },
      },
      {
        id: 'field-service-app',
        title: '跨平台工单与客户预约调度 App',
        client: '欧洲外勤安装与维修团队',
        category: 'iOS & Android App',
        impactMetric: '减少 80% 人工文书核对，调度效率提升 120%',
        summary:
          '离线优先设计的师傅端移动应用与网页调度中台，支持现场电子签名与实时工单追踪。',
        image: '/images/showcase/service.webp',
        tags: ['iOS / Android App', 'React Native', '离线同步', '管理中台'],
        drawerDetails: {
          clientProblem:
            '师傅在地下室或偏远区域常无网络信号，传统纸质单据容易遗失，总部无法实时跟踪进度与调度人员。',
          solutionDelivered:
            '研发支持离线优先的 iOS / Android 双端 App 与桌面管理调度中台，现场拍照与电子签名，恢复网络后毫秒级静默同步。',
          keyDeliverables: [
            'iOS / Android 师傅端 App',
            'Web 管理调度看板',
            '离线存储与同步机制',
            '电子签名与工单 PDF 导出',
          ],
          timeline: '6 周交付上线',
          testimonial: {
            quote:
              '师傅在地下室也能流畅开单，回到地面自动同步，调度效率提升了一倍以上。',
            author: 'Mateo S.',
            role: '技术服务与运营主管',
          },
        },
      },
    ],
  },
  services: {
    heading: '核心服务',
    subheading: '不做华而不实的概念包装，只交付为业务带来实际增长与转化的高质量数字产品',
    items: [
      {
        id: 'web-development',
        title: '高端企业官网与品牌落地页',
        subtitle: '品牌形象、外贸出海与获客转化的第一门面',
        forWho: '外贸出海企业、实体门店、商务咨询、律师事务所及需要专业形象获客的团队',
        deliverables: [
          '全尺寸响应式排版设计（手机/平板/电脑自适应）',
          '秒级加载体验（国际 Core Web Vitals 性能标准）',
          'Google SEO 搜索引擎收录与社交媒体分享优化',
          '易上手后台管理系统（自主更新文案与产品图片）',
        ],
        turnaround: '1 – 3 周',
        ctaText: '咨询企业建站',
      },
      {
        id: 'mobile-app',
        title: 'iOS & Android 移动 App 定制开发',
        subtitle: '一套高质量原生体验代码，双端覆盖，降低 40% 成本',
        forWho: '商户会员系统、预约挂号、电商购物、上门外勤、外卖点餐等需要移动端产品的团队',
        deliverables: [
          'React Native 跨平台开发，一套代码覆盖 iOS & Android',
          '原生级丝滑手感，支持离线运行与消息推送',
          '集成快捷登录、地图定位、多语言与移动支付',
          '全程协助完成 Apple App Store 与 Google Play 官方市场上架',
        ],
        turnaround: '4 – 8 周',
        ctaText: '咨询 App 开发',
      },
      {
        id: 'ecommerce',
        title: '出海电商独立站与多语言商城',
        subtitle: '打通海外本地主流支付，让全球客户顺畅下单',
        forWho: '跨境电商卖家、DTC 出海品牌、海外本地零售与批发商',
        deliverables: [
          'Shopify / WooCommerce 或自研极速滑出式结账独立站',
          '集成 Stripe、PayPal、Apple Pay、Bizum 及信用卡收款',
          '多语言多币种自动汇率切换与欧洲 GDPR 隐私合规',
          '商品库存自动化同步与物流运单实时跟踪',
        ],
        turnaround: '2 – 4 周',
        ctaText: '打造出海商城',
      },
      {
        id: 'business-software',
        title: '企业定制业务管理系统与后台开发',
        subtitle: '告别混乱的 Excel 与低效流程，打造数字化业务中枢',
        forWho: '业务流程复杂、订单与客户繁杂，需要专属 ERP、CRM 或客户门户的企业',
        deliverables: [
          '定制专属数据管理看板（订单、客户、库存一目了然）',
          '基于角色的权限分级管理（RBAC，安全合规）',
          '打通现有数据库、系统与第三方 API，告别重复搬运',
          '银行级数据加密与每日自动化云备份',
        ],
        turnaround: '3 – 6 周',
        ctaText: '定制管理系统',
      },
    ],
  },
  whyUs: {
    heading: '为什么选择我们',
    subheading: '直击外包行业潜规则与痛点，给你省心、可靠的交付保障',
    items: [
      {
        number: '01',
        title: '资深技术直联，绝无“二道贩子”转包',
        description:
          '从需求评估到上线，直接与编写代码的资深全栈工程师沟通。没有不懂技术的业务员传话，没有多层转包剥削，沟通成本减半，理解 100% 到位。',
      },
      {
        number: '02',
        title: '一口价透明合同，承诺 0 隐形加价',
        description:
          '签合同前明确全部功能细节与交付时间表。中途不找借口加收费用，绝不搞“低价引诱、进场加价”的行业不良套路。',
      },
      {
        number: '03',
        title: '100% 完整交付源码，无任何技术锁死',
        description:
          '交付完整源代码、设计源文件及服务器最高管理权限。你的资产 100% 属于你，绝不通过扣押代码收取高额年费，支持自由移交或维护。',
      },
      {
        number: '04',
        title: '懂出海、懂本地：中西英三语无障碍',
        description:
          '团队扎根西班牙马德里，兼具欧洲合规意识（GDPR、合规支付）与高效拼搏精神。无时差沟通，深刻理解海外华人和跨境商家的真实痛点。',
      },
      {
        number: '05',
        title: '不仅帮你做好，更协助你成功上线',
        description:
          '做 App 全程协助上架苹果 App Store 和 Google Play；做网站包基础 SEO 优化和 Google 收录提交。拒绝半成品交付，确保业务真正跑通。',
      },
      {
        number: '06',
        title: '完善的免费质保与长期陪伴',
        description:
          '项目交付后提供 30 - 60 天免费技术维护与 Bug 修复期，并附赠录屏使用教程。后期功能升级按需迭代，稳定可靠。',
      },
    ],
  },
  process: {
    heading: '透明合作流程',
    subheading: '4 个严谨透明的合作闭环，按阶段里程碑推进，保障资金与交付安全',
    steps: [
      {
        step: '01',
        title: '免费沟通与方案梳理',
        duration: '1 – 2 天',
        description:
          '加微信或 WhatsApp 直接梳理业务诉求。我们会为你整理一份清晰的《功能需求清单与技术建议》，并给出精准预算建议。完全免费，无任何签约压力。',
      },
      {
        step: '02',
        title: '原型确认与一口价签约',
        duration: '3 – 5 天',
        description:
          '正式编码前提供页面架构和关键界面设计供你确认。双方签订正规合作合同，明确交付清单、上线日期与分期付款节点（按里程碑付款，保障资金安全）。',
      },
      {
        step: '03',
        title: '敏捷开发与每周进度演示',
        duration: '2 – 6 周',
        description:
          '开发过程中每周向你同步进度并提供测试版试用，随时可以在手机或电脑上看到真实的半成品，及时调整反馈，拒绝闭门造车。',
      },
      {
        step: '04',
        title: '验收上线、交付源码与质保',
        duration: '交付阶段',
        description:
          '协助配置服务器域名、部署上线并提交应用市场审核。验收满意后完整交接 100% 源代码与最高管理权限，开启 30-60 天免费质保期。',
      },
    ],
  },
  pricing: {
    heading: '透明预算与交付周期参考',
    subheading: '拒绝模糊报价与隐形消费，所有项目按功能清单提供固定透明一口价',
    tiers: [
      {
        name: '标准品牌展示官网',
        target: '外贸公司、本地餐饮、门店、律所及个人工作室',
        includes: [
          '5-8 个核心页面定制设计',
          '手机/平板/电脑全尺寸自适应',
          '中西英多语言架构支持',
          'Google SEO 基础优化与收录',
          '轻量易用后台内容管理系统',
          '30 天免费售后质保与操作培训',
        ],
        turnaround: '1 – 2 周',
        startingPrice: '100 € 起',
        highlighted: false,
      },
      {
        name: '高转化电商 / 出海独立站',
        target: '跨境电商卖家、DTC 出海品牌、实体批发零售商',
        includes: [
          '商品分类与库存管理系统',
          '多货币自适应结算（EUR / USD / GBP 等）',
          'Stripe / PayPal / Bizum / 信用卡集成',
          '欧洲 GDPR 隐私政策合规配置',
          '物流运单与订单自动化邮件通知',
          '30 天售后质保与运营技术指导',
        ],
        turnaround: '2 – 4 周',
        startingPrice: '800 € 起',
        highlighted: true,
      },
      {
        name: '定制移动 App (iOS + Android)',
        target: '需双端 App 的初创团队、商户会员、预约/点单应用',
        includes: [
          '一套代码同时覆盖 iOS 与 Android',
          '会员系统、离线支持与消息推送',
          '本地及国际移动支付对接',
          '协助上架 Apple App Store 与 Google Play',
          '配套管理员 Web 运营后台',
          '60 天免费技术维护与 Bug 修复',
        ],
        turnaround: '4 – 8 周',
        startingPrice: '3,500 € 起',
        highlighted: false,
      },
      {
        name: '企业管理系统 / 业务中台',
        target: '业务流程复杂、需告别 Excel、管理订单与库存的企业',
        includes: [
          '基于角色的分级权限管理 (RBAC)',
          '业务数据可视化看板与报表导出',
          '对接企业现有系统与第三方 API',
          '高并发架构与每日自动化云备份',
          '企业专属定制业务工作流',
          '长期技术支持与灵活敏捷迭代',
        ],
        turnaround: '敏捷 Sprint',
        startingPrice: '根据需求专属定制',
        highlighted: false,
      },
    ],
    guaranteeText:
      '💡 付款方式保障：采用首付款 + 阶段验收 + 尾款的里程碑模式，验收满意再付阶段款项，无后顾之忧。',
  },
  faq: {
    heading: '消除疑虑的常见问题',
    subheading: '解答你在外包开发中最关心的核心问题，透明坦诚，打消顾虑',
    items: [
      {
        question: '我没有懂技术的人，也没有现成的技术文档，可以找你们吗？',
        answer:
          '完全可以！事实上我们 80% 的客户都是非技术背景的创业者或传统企业主。你只需要告诉我们你想做一个什么样的产品、参考哪家竞品，或者想解决什么业务问题，我们会用大白话帮您梳理出详尽的功能清单和原型设计。',
      },
      {
        question: '你们会中途加价吗？如果做出来的东西和我想的不一样怎么办？',
        answer:
          '绝对不会中途加价。我们在签约前会明确每一项交付功能并写入合同附件，实行“一口价”制。在正式编码前，我们会先输出界面原型供你确认；开发期间每周提供测试链接供你试用，确保每一步都在你的预期轨道上。',
      },
      {
        question: '项目交付后，源代码归谁所有？明年会不会收我高昂的年费？',
        answer:
          '100% 完整交付给您，代码所有权、设计文件、数据库以及服务器全部归您所有。我们绝不强制捆绑。上线后您只需自行向云厂商（如阿里云、AWS、Cloudflare 等）支付基本的服务器与域名工本费，没有任何强制绑定的年费陷阱。',
      },
      {
        question: '开发好的 App 能顺利上架苹果 App Store 和 Google Play 吗？',
        answer:
          '能！移动 App 开发服务包含全程上架支持。我们会严格按照苹果 Human Interface Guidelines 和谷歌审核政策进行开发与配置，协助准备隐私协议、上架截图，并处理可能的审核反馈，直到顺利上线。',
      },
      {
        question: '做好的网站在 Google 搜得到吗？包含 SEO 吗？',
        answer:
          '包含基础的搜索引擎优化（Technical SEO）。我们开发的所有网站均采用 Google 官方推荐的代码结构、配置 Schema.org 结构化数据、多语言标签（hreflang）与秒级极速打开性能，上线后直接提交 Google Search Console 收录。',
      },
      {
        question: '人在国内或者欧洲其他国家，远程协作靠谱吗？',
        answer:
          '我们长期服务中国出海企业、北美客户及欧洲本地华人商家。现代软件开发全部基于云端与版本管理，通过微信/WhatsApp、视频会议和每周在线演示，沟通甚至比本地同城外包更紧密、更高效。',
      },
    ],
  },
  contact: {
    heading: '准备好启动你的新网站或 App 了吗？',
    subheading: '今天就告诉我们你的想法，24 小时内免费获取方案梳理与详细报价。',
    email: 'info@okcode.es',
    whatsappText: '+34684 252 130',
    wechatLabel: '微信咨询: okcode_ (扫码快速沟通)',
    locationText: '西班牙马德里（Madrid, Spain） · 承接全球项目',
    copyPromptLabel: '快捷复制咨询模板',
    copyPromptText:
      '你好 OKCODE，我想咨询一下 [网站建设 / 移动App / 独立站开发]。我们的主要需求是 [简述一两句话，例如：做一家连锁餐厅的品牌官网和点餐系统]，希望在 [期望周期，例如：1个月内] 上线，想了解一下大概的实现方案和预算参考。',
    form: {
      namePlaceholder: '您的姓名 / 称呼',
      messagePlaceholder: '请简单描述您的项目想法、预期功能或竞品参考...',
      contactPlaceholder: '微信号 / WhatsApp / 电子邮箱',
      submitButton: '免费获取方案与报价',
      successMessage: '信息已发送！我们将在 24 小时内与您取得联系并提供初步方案。',
    },
  },
  footer: {
    editorialSignoff: 'OKCODE · 专注于高转化企业建站与 iOS / Android 移动开发',
    statusBadge: '🟢 当前可承接新项目排期',
    rights: '© 2026 OKCODE. 保留所有权利。',
  },
};
