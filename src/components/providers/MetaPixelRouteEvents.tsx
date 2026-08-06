"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Meta Pixel SPA-navigatsiya kuzatuvi.
 *
 * Birinchi PageView'ni layout'dagi init skripti otadi; Next.js router orqali
 * sahifa almashganda esa to'liq reload bo'lmaydi — shu sabab har pathname
 * o'zgarishida qo'lda PageView yuboramiz. Bu Facebook'da URL asosidagi
 * konversiyalar (masalan, "/lead/.../thanks" sahifalari) ishlashi uchun zarur.
 */
export function MetaPixelRouteEvents() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const fbq = (window as { fbq?: (...args: unknown[]) => void }).fbq;
    fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
