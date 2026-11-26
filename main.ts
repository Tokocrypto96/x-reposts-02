// main.ts — makefun-x-reposts-02 entrypoint (Node 22, TypeScript run as-is).
// Copies POSTS.json from the repository root into the output directory.
// The house reads the posts named in POSTS.json itself; nothing this
// program writes about the posts counts.
import { copyFile, mkdir, readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = process.env.MAKEFUN_BOT_DIR
  ? resolve(process.env.MAKEFUN_BOT_DIR)
  : dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";

const source = join(repoRoot, "POSTS.json");
const target = join(outputDir, "POSTS.json");

await mkdir(outputDir, { recursive: true });

// Read first so a missing or broken POSTS.json fails loudly instead of
// silently shipping an empty output.
const contents = await readFile(source, "utf8");
const parsed = JSON.parse(contents);
if (!parsed || !Array.isArray(parsed.posts)) {
  throw new Error("POSTS.json must be an object with a \"posts\" array");
}
if (parsed.posts.length < 1 || parsed.posts.length > 15) {
  throw new Error(
    `POSTS.json must name 1 to 15 posts, got ${parsed.posts.length}`,
  );
}
if (!parsed.posts.every((p) => typeof p === "string" && p.length > 0)) {
  throw new Error("POSTS.json: every post entry must be a non-empty string");
}

await copyFile(source, target);
console.log(
  `Copied POSTS.json (${parsed.posts.length} post(s)) to ${target}`,
);
