import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Run after building with LOCALIZED_DRAFT_PREVIEW=1. A normal production build
// deliberately contains no translated routes until their scheduled release.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "dist", "client");
const origin = "https://spicychatai.fun";
const languages = {
  ja: { lang: "ja", dir: "ltr", verdict: "結論", minArticleChars: 1200 },
  ko: { lang: "ko", dir: "ltr", verdict: "결론", minArticleChars: 1200 },
  "zh-hant": { lang: "zh-Hant", dir: "ltr", verdict: "結論", minArticleChars: 1200 },
  es: { lang: "es", dir: "ltr", verdict: "Conclusión", minArticleChars: 2500 },
  "pt-br": { lang: "pt-BR", dir: "ltr", verdict: "Conclusão", minArticleChars: 2500 },
  ru: { lang: "ru", dir: "ltr", verdict: "Вывод", minArticleChars: 2500 },
  de: { lang: "de", dir: "ltr", verdict: "Fazit", minArticleChars: 2500 },
  fr: { lang: "fr", dir: "ltr", verdict: "À retenir", minArticleChars: 2500 },
  ar: { lang: "ar", dir: "rtl", verdict: "الخلاصة", minArticleChars: 2500 },
};
const articleSlugs = [
  "spicychat-vs-character-ai",
  "spicychat-vs-janitor-ai",
  "spicy-chat-ai-vs-crushon-ai",
  "spicy-chat-ai-vs-polybuzz",
  "spicy-chat-ai-vs-girlfriendgpt",
];
const routes = [
  "", "blog", ...articleSlugs.map((slug) => `blog/${slug}`),
  "about", "contact", "editorial-policy", "privacy", "terms",
];
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const attr = (tag, key) => tag?.match(new RegExp(`\\b${key}="([^"]*)"`, "i"))?.[1];
const plain = (html) => html.replace(/<[^>]*>/g, " ").replace(/&(?:#\d+|#x[\da-f]+|[a-z]+);/gi, " ").replace(/\s+/g, " ").trim();
let checked = 0;

for (const [slug, expected] of Object.entries(languages)) {
  const articleTitles = new Set();
  for (const route of routes) {
    const pathname = `/${slug}/${route ? `${route}/` : ""}`;
    const file = path.join(out, slug, ...route.split("/").filter(Boolean), "index.html");
    if (!existsSync(file)) { failures.push(`${pathname}: missing draft route`); continue; }
    const html = readFileSync(file, "utf8");
    const htmlTag = html.match(/<html\b[^>]*>/i)?.[0];
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
    const robots = html.match(/<meta name="robots" content="([^"]+)"/i)?.[1];
    const title = plain(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? "");
    const h1Matches = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
    check(attr(htmlTag, "lang") === expected.lang, `${pathname}: wrong html lang`);
    check(attr(htmlTag, "dir") === expected.dir, `${pathname}: wrong text direction`);
    check(canonical === `${origin}${pathname}`, `${pathname}: wrong self-canonical`);
    check(robots === "noindex,follow", `${pathname}: unpublished route must be noindex`);
    check(!/<link\b[^>]*hreflang=/i.test(html), `${pathname}: unpublished route must not advertise hreflang`);
    check(Boolean(title), `${pathname}: missing title`);
    check(h1Matches.length === 1, `${pathname}: expected exactly one H1`);
    check(!/DIRECT ANSWER/i.test(html), `${pathname}: retired direct-answer label returned`);

    if (route.startsWith("blog/")) {
      const article = html.match(/<article class="article-shell localized-article">([\s\S]*?)<\/article>/)?.[1] ?? "";
      const articleTitle = plain(h1Matches[0]?.[1] ?? "");
      const verdict = plain(html.match(/<section class="article-verdict"><h2>([\s\S]*?)<\/h2>/)?.[1] ?? "");
      check(!articleTitles.has(articleTitle), `${pathname}: duplicate comparison title`);
      articleTitles.add(articleTitle);
      check(plain(article).length >= expected.minArticleChars, `${pathname}: article appears thin`);
      check((article.match(/<tr>/g) ?? []).length >= 5, `${pathname}: incomplete comparison table`);
      check((article.match(/<section id="section-/g) ?? []).length >= 4, `${pathname}: incomplete analysis sections`);
      check((html.match(/<li><a href="https?:\/\//g) ?? []).length >= 3, `${pathname}: too few primary-source links`);
      check(verdict === expected.verdict, `${pathname}: incorrect conclusion heading`);
      check(html.includes(`\\"inLanguage\\":\\"${expected.lang}\\"`) || html.includes(`"inLanguage":"${expected.lang}"`), `${pathname}: wrong article schema language`);
    }
    checked++;
  }
  check(articleTitles.size === 5, `${slug}: expected five distinct article titles`);
}

const sitemap = readFileSync(path.join(out, "sitemap-0.xml"), "utf8");
for (const slug of Object.keys(languages)) {
  check(!sitemap.includes(`${origin}/${slug}/`), `${slug}: unpublished locale leaked into sitemap`);
}
if (failures.length) {
  console.error(`Localized draft audit failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}
console.log(`Localized draft audit passed: ${checked}/108 pages, 45 distinct source-linked comparisons, no public sitemap/hreflang leakage.`);
