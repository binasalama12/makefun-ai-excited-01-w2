import { copyFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(here, "entry.png");
const dest = join(outDir, "entry.png");

copyFileSync(src, dest);
const { size } = statSync(dest);
console.log(`Copied entry.png -> ${dest} (${size} bytes)`);
