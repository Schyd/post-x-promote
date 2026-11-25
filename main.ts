import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Copy POST.json (the handed-in X post address) into the output directory.
// The entry's only job: hand in the post. The house reads the post itself.
const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
