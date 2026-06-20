import { existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const NEXT_DIR = ".next";
const buildId = join(NEXT_DIR, "BUILD_ID");
const devDir = join(NEXT_DIR, "static", "development");

/**
 * Dev va production build bir xil `.next` papkasini buzadi (Windows'da ENOENT).
 * Production qoldiqlari yoki aralash cache topilsa — dev boshlanishidan oldin tozalaymiz.
 */
function shouldCleanDevCache() {
  if (!existsSync(NEXT_DIR)) return false;

  const hasProductionBuild = existsSync(buildId);
  const hasDevCache = existsSync(devDir);

  // Production build qoldiqlari
  if (hasProductionBuild) return true;

  // Production + dev aralash holat (BUILD_ID yo'q, lekin server cache buzilgan)
  const serverAppDir = join(NEXT_DIR, "server", "app");
  if (existsSync(serverAppDir) && !hasDevCache) return true;

  return false;
}

if (shouldCleanDevCache()) {
  console.log("[dev] .next cache tozalanmoqda (production/build qoldiqlari)...");
  rmSync(NEXT_DIR, { recursive: true, force: true });
}
