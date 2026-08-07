import { postJsonHttps } from "@/lib/crm/https-json";
import { NextResponse } from "next/server";
import type { CrmCourseId } from "@/lib/crm/bitrix24-config";
import { submitLeadToBitrix24 } from "@/lib/crm/submit-lead";
import type { BranchSlug } from "@/lib/i18n/landing-sections";

import { UTM_KEYS, type UtmParams } from "@/lib/crm/utm";

type LeadRequestBody = {
  name?: string;
  phone?: string;
  age?: number | string;
  branch?: string;
  course?: string;
  source?: string;
  utm?: Record<string, unknown>;
};

/** Clientdan kelgan UTM obyektini tozalash — faqat ma'lum kalitlar, matn, 250 belgi */
function sanitizeUtm(raw: Record<string, unknown> | undefined): UtmParams {
  const utm: UtmParams = {};
  if (!raw || typeof raw !== "object") return utm;
  for (const key of UTM_KEYS) {
    const value = raw[key];
    if (typeof value === "string" && value.trim()) {
      utm[key] = value.trim().slice(0, 250);
    }
  }
  return utm;
}

export async function POST(request: Request) {
  let body: LeadRequestBody;

  try {
    body = (await request.json()) as LeadRequestBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Noto'g'ri so'rov" },
      { status: 400 },
    );
  }

  const age =
    typeof body.age === "string" ? parseInt(body.age, 10) : (body.age ?? NaN);

  const result = await submitLeadToBitrix24({
    name: body.name ?? "",
    phone: body.phone ?? "",
    age,
    branch: body.branch as BranchSlug,
    course: body.course as CrmCourseId,
    source: body.source,
    utm: sanitizeUtm(body.utm),
  });

  if (!result.ok) {
    return NextResponse.json(result, { status: 422 });
  }

  return NextResponse.json(result);
}

/** Dev: webhook ulanishini tekshirish — productionda o'chirish mumkin */
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ ok: false }, { status: 404 });
  }

  const base = process.env.BITRIX24_WEBHOOK_URL?.trim();
  if (!base) {
    return NextResponse.json({ ok: false, error: "BITRIX24_WEBHOOK_URL yo'q" });
  }

  const webhook = base.endsWith("/") ? base : `${base}/`;
  const response = await postJsonHttps(`${webhook}crm.lead.add`, {
    fields: {
      TITLE: "Ping",
      NAME: "Ping",
      PHONE: [{ VALUE: "+998900000001", VALUE_TYPE: "WORK" }],
      SOURCE_ID: "WEB",
    },
  });

  return NextResponse.json({
    webhookEndsWith: webhook.slice(-24),
    status: response.status,
    body: response.raw.slice(0, 300),
  });
}
