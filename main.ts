import { copyFileSync, statSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");
copyFileSync(src, dst);

const { size } = statSync(dst);
console.log(`copied entry.png -> ${dst} (${size} bytes)`);
