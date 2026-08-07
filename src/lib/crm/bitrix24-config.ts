import type { BranchSlug } from "@/lib/i18n/landing-sections";

/** Bitrix24 filial enum ID lari */
export const CRM_BRANCH_IDS: Record<BranchSlug, number> = {
  andijon: 141,
  samarqand: 143,
  tashkent: 145,
  fargona: 1553,
  xorazm: 2115,
};

/** Saytdagi kurs ID → Bitrix24 kurs enum ID */
export const CRM_COURSE_IDS = {
  "young-designer": 189,
  professional: 185,
} as const;

export type CrmCourseId = keyof typeof CRM_COURSE_IDS;

/** Bitrix24 `UF_CRM_KURS` (matn) uchun kurs nomlari — AYNAN formadagidek.
    Locale'dan qat'i nazar doim shu ikki qiymatdan biri yuboriladi
    (Bitrix tarafdagi kelishuv shu). */
export const CRM_COURSE_NAMES: Record<CrmCourseId, string> = {
  "young-designer": "Men — yosh dizaynerman",
  professional: "Professional ta'lim dasturi",
};

/** Asosiy landing contact formasi */
export const CRM_MAIN_SOURCE = {
  sourceId: "WEB",
  landingCode: 805,
} as const;

export function isCrmCourseId(value: string): value is CrmCourseId {
  return value in CRM_COURSE_IDS;
}

export function isBranchSlug(value: string): value is BranchSlug {
  return value in CRM_BRANCH_IDS;
}
