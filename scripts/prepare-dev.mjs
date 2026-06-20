import { existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const NEXT_DIR = ".next";
const buildId = join(NEXT_DIR, "BUILD_ID");
const devDir = join(NEXT_DIR, "static", "development");

/**
 * Dev va build bir xil `.next` papkasini buzadi (Windows'da tez-tez ENOENT).
 * Production build qoldiqlari yoki buzilgan cache topilsa — dev boshlanishidan oldin tozalaymiz.
 */
function shouldCleanDevCache() {
  if (!existsSync(NEXT_DIR)) return false;

  const hasProductionBuild = existsSync(buildId);
  const hasDevCache = existsSync(devDir);

  if (hasProductionBuild && !hasDevCache) {
    return true;
  }

  return false;
}

if (shouldCleanDevCache()) {
  console.log("[dev] Buzilgan yoki production .next cache tozalanmoqda...");
  rmSync(NEXT_DIR, { recursive: true, force: true });
}
