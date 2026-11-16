// ai-excited-01 — w2 entry: "Rainbow Fountain"
// A baby elephant at golden hour sprays a fountain of rainbow-glittering
// water straight up from its trunk. This program is intentionally tiny:
// it delivers the single entry image to the judge's output directory,
// byte for byte, with no transformation.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.png");
copyFileSync(source, target);

// Report exactly what was delivered so a run log proves the copy happened.
const { size } = statSync(target);
console.log(`rainbow-fountain: copied ${size} bytes -> ${target}`);
