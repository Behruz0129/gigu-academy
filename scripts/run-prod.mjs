import { spawnSync } from "node:child_process";

const command = process.argv[2];

if (!command || !["build", "start"].includes(command)) {
  console.error("Usage: node scripts/run-prod.mjs <build|start>");
  process.exit(1);
}

const result = spawnSync("next", [command], {
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    NEXT_DIST_DIR: ".next-build",
  },
});

process.exit(result.status ?? 1);
