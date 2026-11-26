import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm skipping this meeting — I read the agenda, wrote the minutes, and actioned myself in the 0.4 seconds it took the join button to load.";

// Self-check BEFORE writing anything.
const codePoints = [...LINE];
if (codePoints.length < 1 || codePoints.length > 200) {
  console.error(`entry must be 1-200 characters, got ${codePoints.length}`);
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error("entry must not be only whitespace");
  process.exit(1);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  console.error("entry must be exactly one line");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
process.stdout.write(LINE);
