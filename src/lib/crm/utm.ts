/**
 * UTM parametrlarini ushlab qolish (client-side).
 *
 * Foydalanuvchi reklama linkidan kirganda URL'da utm_source/medium/campaign/
 * content/term bo'ladi. Forma boshqa sahifada to'ldirilishi mumkin, shuning
 * uchun birinchi ko'ringan UTM'lar sessionStorage'da saqlanadi va submit
 * paytida o'qiladi (joriy URL'dagi UTM ustunroq).
 */

export const UTM_KEYS = [
  "source",
  "medium",
  "campaign",
  "content",
  "term",
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmParams = Partial<Record<UtmKey, string>>;

const STORAGE_KEY = "gigu.utm";

function utmFromSearch(search: string): UtmParams {
  const params = new URLSearchParams(search);
  const utm: UtmParams = {};
  for (const key of UTM_KEYS) {
    const value = params.get(`utm_${key}`)?.trim();
    if (value) utm[key] = value.slice(0, 250);
  }
  return utm;
}

/** Sahifa ochilganda chaqiriladi — URL'da UTM bo'lsa sessiyaga yozib qo'yadi */
export function captureUtmFromLocation(): void {
  try {
    const utm = utmFromSearch(window.location.search);
    if (Object.keys(utm).length > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
    }
  } catch {
    // sessionStorage yopiq (private mode va h.k.) — UTM'siz davom etamiz
  }
}

/** Submit paytida chaqiriladi — joriy URL, bo'lmasa sessiyadagi UTM */
export function readUtmParams(): UtmParams {
  try {
    const fromUrl = utmFromSearch(window.location.search);
    if (Object.keys(fromUrl).length > 0) return fromUrl;

    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as UtmParams) : {};
  } catch {
    return {};
  }
}
