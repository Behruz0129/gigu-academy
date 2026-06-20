import { spawnSync } from "node:child_process";

const command = process.argv[2];

if (!command || !["build", "start"].includes(command)) {
  console.error("Usage: node scripts/run-prod.mjs <build|start>");
  process.exit(1);
}

// Vercel `.next` kutadi; mahalliy dev/build ziddiyatini `.next-build` bilan chetlab o'tamiz
const distDir = process.env.VERCEL ? ".next" : ".next-build";

const result = spawnSync("next", [command], {
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    NEXT_DIST_DIR: distDir,
  },
});

process.exit(result.status ?? 1);
