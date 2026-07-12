import type { Locale } from "@/lib/i18n/translations";

export type LeadSourceSlug =
  | "telegram-academy"
  | "telegram-chat"
  | "telegram-design"
  | "instagram-bio"
  | "instagram-design"
  | "instagram-direct"
  | "youtube"
  | "jajji"
  | "illustratsiya"
  | "webform"
  | "facebook";

type LeadSourceCopy = {
  badge: string;
  title: string;
  titleEm: string;
  description: string;
};

export type LeadSourcePage = {
  slug: LeadSourceSlug;
  sourceId: string;
  landingCode: number;
  copy: Record<Locale, LeadSourceCopy>;
};

/** Link orqali ochiladigan alohida lead sahifalari */
export const LEAD_SOURCE_PAGES: LeadSourcePage[] = [
  {
    slug: "telegram-academy",
    sourceId: "UC_Q5O0SN",
    landingCode: 817,
    copy: {
      uz: {
        badge: "Telegram",
        title: "GIGU Academy",
        titleEm: "Telegram orqali",
        description: "Formani to'ldiring — administratorlar tez orada bog'lanadi.",
      },
      ru: {
        badge: "Telegram",
        title: "GIGU Academy",
        titleEm: "через Telegram",
        description: "Заполните форму — администраторы свяжутся с вами.",
      },
      en: {
        badge: "Telegram",
        title: "GIGU Academy",
        titleEm: "via Telegram",
        description: "Fill out the form — our team will contact you shortly.",
      },
    },
  },
  {
    slug: "telegram-chat",
    sourceId: "3|TELEGRAM_WHATCRM_NET_71183544",
    landingCode: 817,
    copy: {
      uz: {
        badge: "Telegram",
        title: "Telegram chat",
        titleEm: "orqali ariza",
        description: "Formani to'ldiring — administratorlar tez orada bog'lanadi.",
      },
      ru: {
        badge: "Telegram",
        title: "Заявка через",
        titleEm: "Telegram chat",
        description: "Заполните форму — администраторы свяжутся с вами.",
      },
      en: {
        badge: "Telegram",
        title: "Apply via",
        titleEm: "Telegram chat",
        description: "Fill out the form — our team will contact you shortly.",
      },
    },
  },
  {
    slug: "telegram-design",
    sourceId: "UC_Y7LCX6",
    landingCode: 817,
    copy: {
      uz: {
        badge: "Telegram",
        title: "GiGu Design",
        titleEm: "Telegram",
        description: "Formani to'ldiring — administratorlar tez orada bog'lanadi.",
      },
      ru: {
        badge: "Telegram",
        title: "GiGu Design",
        titleEm: "Telegram",
        description: "Заполните форму — администраторы свяжутся с вами.",
      },
      en: {
        badge: "Telegram",
        title: "GiGu Design",
        titleEm: "Telegram",
        description: "Fill out the form — our team will contact you shortly.",
      },
    },
  },
  {
    slug: "instagram-bio",
    sourceId: "UC_B7EMO6",
    landingCode: 817,
    copy: {
      uz: {
        badge: "Instagram",
        title: "Instagram bio",
        titleEm: "orqali ariza",
        description: "Formani to'ldiring — administratorlar tez orada bog'lanadi.",
      },
      ru: {
        badge: "Instagram",
        title: "Заявка через",
        titleEm: "Instagram bio",
        description: "Заполните форму — администраторы свяжутся с вами.",
      },
      en: {
        badge: "Instagram",
        title: "Apply via",
        titleEm: "Instagram bio",
        description: "Fill out the form — our team will contact you shortly.",
      },
    },
  },
  {
    slug: "instagram-design",
    sourceId: "UC_O1CBLA",
    landingCode: 817,
    copy: {
      uz: {
        badge: "Instagram",
        title: "GIGU Design",
        titleEm: "Instagram",
        description: "Formani to'ldiring — administratorlar tez orada bog'lanadi.",
      },
      ru: {
        badge: "Instagram",
        title: "GIGU Design",
        titleEm: "Instagram",
        description: "Заполните форму — администраторы свяжутся с вами.",
      },
      en: {
        badge: "Instagram",
        title: "GIGU Design",
        titleEm: "Instagram",
        description: "Fill out the form — our team will contact you shortly.",
      },
    },
  },
  {
    slug: "instagram-direct",
    sourceId: "UC_C419XW",
    landingCode: 817,
    copy: {
      uz: {
        badge: "Instagram",
        title: "Instagram Direct",
        titleEm: "orqali ariza",
        description: "Formani to'ldiring — administratorlar tez orada bog'lanadi.",
      },
      ru: {
        badge: "Instagram",
        title: "Заявка через",
        titleEm: "Instagram Direct",
        description: "Заполните форму — администраторы свяжутся с вами.",
      },
      en: {
        badge: "Instagram",
        title: "Apply via",
        titleEm: "Instagram Direct",
        description: "Fill out the form — our team will contact you shortly.",
      },
    },
  },
  {
    slug: "youtube",
    sourceId: "UC_JAZA2I",
    landingCode: 817,
    copy: {
      uz: {
        badge: "YouTube",
        title: "YouTube orqali",
        titleEm: "ariza qoldiring",
        description: "Formani to'ldiring — administratorlar tez orada bog'lanadi.",
      },
      ru: {
        badge: "YouTube",
        title: "Оставьте заявку",
        titleEm: "через YouTube",
        description: "Заполните форму — администраторы свяжутся с вами.",
      },
      en: {
        badge: "YouTube",
        title: "Apply via",
        titleEm: "YouTube",
        description: "Fill out the form — our team will contact you shortly.",
      },
    },
  },
  {
    slug: "jajji",
    sourceId: "UC_10NMOG",
    landingCode: 769,
    copy: {
      uz: {
        badge: "7–11 yosh",
        title: "Jajji qizlar",
        titleEm: "uchun ariza",
        description: "Formani to'ldiring — administratorlar tez orada bog'lanadi.",
      },
      ru: {
        badge: "7–11 лет",
        title: "Заявка для",
        titleEm: "малышек",
        description: "Заполните форму — администраторы свяжутся с вами.",
      },
      en: {
        badge: "Ages 7–11",
        title: "Apply for",
        titleEm: "young designers",
        description: "Fill out the form — our team will contact you shortly.",
      },
    },
  },
  {
    slug: "illustratsiya",
    sourceId: "UC_SDBSBY",
    landingCode: 817,
    copy: {
      uz: {
        badge: "Kurs",
        title: "Illustratsiya kursi",
        titleEm: "uchun ariza",
        description: "Formani to'ldiring — administratorlar tez orada bog'lanadi.",
      },
      ru: {
        badge: "Курс",
        title: "Заявка на курс",
        titleEm: "иллюстрации",
        description: "Заполните форму — администраторы свяжутся с вами.",
      },
      en: {
        badge: "Course",
        title: "Illustration course",
        titleEm: "application",
        description: "Fill out the form — our team will contact you shortly.",
      },
    },
  },
  {
    slug: "webform",
    sourceId: "WEBFORM",
    landingCode: 817,
    copy: {
      uz: {
        badge: "Ro'yxatdan o'tish",
        title: "Onlayn ariza",
        titleEm: "formasi",
        description: "Formani to'ldiring — administratorlar tez orada bog'lanadi.",
      },
      ru: {
        badge: "Запись",
        title: "Онлайн форма",
        titleEm: "заявки",
        description: "Заполните форму — администраторы свяжутся с вами.",
      },
      en: {
        badge: "Enroll",
        title: "Online",
        titleEm: "application form",
        description: "Fill out the form — our team will contact you shortly.",
      },
    },
  },
  {
    slug: "facebook",
    sourceId: "OTHER",
    landingCode: 817,
    copy: {
      uz: {
        badge: "Facebook",
        title: "Facebook orqali",
        titleEm: "ariza qoldiring",
        description: "Formani to'ldiring — administratorlar tez orada bog'lanadi.",
      },
      ru: {
        badge: "Facebook",
        title: "Оставьте заявку",
        titleEm: "через Facebook",
        description: "Заполните форму — администраторы свяжутся с вами.",
      },
      en: {
        badge: "Facebook",
        title: "Apply via",
        titleEm: "Facebook",
        description: "Fill out the form — our team will contact you shortly.",
      },
    },
  },
];

const LEAD_SOURCE_BY_SLUG = new Map(
  LEAD_SOURCE_PAGES.map((page) => [page.slug, page]),
);

export function getLeadSourcePage(slug: string): LeadSourcePage | undefined {
  return LEAD_SOURCE_BY_SLUG.get(slug as LeadSourceSlug);
}

export function getAllLeadSourceSlugs(): LeadSourceSlug[] {
  return LEAD_SOURCE_PAGES.map((page) => page.slug);
}

/** Linklar ro'yxati (admin/marketing uchun) */
export function getLeadPageUrl(locale: Locale, slug: LeadSourceSlug): string {
  return `/${locale}/lead/${slug}`;
}
