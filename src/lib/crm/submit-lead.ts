import {
  CRM_BRANCH_IDS,
  CRM_COURSE_IDS,
  CRM_COURSE_NAMES,
  CRM_MAIN_SOURCE,
  isBranchSlug,
  isCrmCourseId,
  type CrmCourseId,
} from "@/lib/crm/bitrix24-config";
import type { UtmParams } from "@/lib/crm/utm";
import { postJsonHttps } from "@/lib/crm/https-json";
import { getLeadSourcePage } from "@/lib/crm/lead-sources";
import { isValidAge, normalizeUzPhone } from "@/lib/crm/validate-lead";
import type { BranchSlug } from "@/lib/i18n/landing-sections";

export type LeadPayload = {
  name: string;
  phone: string;
  age: number;
  branch: BranchSlug;
  course: CrmCourseId;
  source?: string;
  utm?: UtmParams;
};

export type SubmitLeadResult =
  | { ok: true; leadId: number }
  | { ok: false; error: string; details?: string };

function getWebhookBaseUrl(): string | null {
  const url = process.env.BITRIX24_WEBHOOK_URL?.trim();
  if (!url) return null;
  return url.endsWith("/") ? url : `${url}/`;
}

function resolveSource(sourceSlug?: string) {
  if (!sourceSlug || sourceSlug === "web") {
    return CRM_MAIN_SOURCE;
  }

  const page = getLeadSourcePage(sourceSlug);
  if (!page) {
    return CRM_MAIN_SOURCE;
  }

  return {
    sourceId: page.sourceId,
    landingCode: page.landingCode,
  };
}

export async function submitLeadToBitrix24(
  payload: LeadPayload,
): Promise<SubmitLeadResult> {
  const webhookBase = getWebhookBaseUrl();
  if (!webhookBase) {
    return {
      ok: false,
      error: "CRM sozlanmagan",
      details: "BITRIX24_WEBHOOK_URL muhit o'zgaruvchisi topilmadi",
    };
  }

  const name = payload.name.trim();
  const phone = normalizeUzPhone(payload.phone);

  if (!name) {
    return { ok: false, error: "Ism kiritilmagan" };
  }

  if (!phone) {
    return { ok: false, error: "Telefon raqam noto'g'ri" };
  }

  if (!isValidAge(payload.age)) {
    return { ok: false, error: "Yosh noto'g'ri" };
  }

  if (!isBranchSlug(payload.branch)) {
    return { ok: false, error: "Filial tanlanmagan" };
  }

  if (!isCrmCourseId(payload.course)) {
    return { ok: false, error: "Kurs tanlanmagan" };
  }

  const source = resolveSource(payload.source);
  const branchId = CRM_BRANCH_IDS[payload.branch];
  const courseId = CRM_COURSE_IDS[payload.course];

  const fields: Record<string, unknown> = {
    TITLE: `Ariza — ${name}`,
    NAME: name,
    PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
    SOURCE_ID: source.sourceId,
    UF_CRM_LEAD_1768371454496: [branchId],
    UF_CRM_1774606308760: payload.age,
    UF_CRM_1769179376: [courseId],
    UF_CRM_LANDING_CODE: [source.landingCode],
    // Kurs nomi matn sifatida — Bitrix tarafdagi kelishuv (2 qiymatdan biri)
    UF_CRM_KURS: CRM_COURSE_NAMES[payload.course],
    // Bitrix standart UTM maydonlari — reklama linkidan, bo'lmasa bo'sh
    UTM_SOURCE: payload.utm?.source ?? "",
    UTM_MEDIUM: payload.utm?.medium ?? "",
    UTM_CAMPAIGN: payload.utm?.campaign ?? "",
    UTM_CONTENT: payload.utm?.content ?? "",
    UTM_TERM: payload.utm?.term ?? "",
  };

  try {
    const endpoint = "crm.lead.add";
    const response = await postJsonHttps(`${webhookBase}${endpoint}`, { fields });

    const raw = response.raw;
    const data = response.data as {
      result?: number;
      error?: string;
      error_description?: string;
    } | null;

    if (!data) {
      return {
        ok: false,
        error: "CRM javob bermadi",
        details:
          response.status === 403
            ? "403 Forbidden — webhook token noto'g'ri yoki ruxsat yo'q. Bitrix24 da webhook ni tekshiring."
            : `HTTP ${response.status}: ${raw.slice(0, 200)}`,
      };
    }

    if (response.status < 200 || response.status >= 300 || data.error) {
      return {
        ok: false,
        error: "CRM ga yuborishda xatolik",
        details: data.error_description ?? data.error ?? `HTTP ${response.status}`,
      };
    }

    if (typeof data.result !== "number") {
      return {
        ok: false,
        error: "CRM javobi noto'g'ri",
        details: JSON.stringify(data),
      };
    }

    return { ok: true, leadId: data.result };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Noma'lum xatolik";
    return { ok: false, error: "Tarmoq xatoligi", details: message };
  }
}
