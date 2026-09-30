import { draftReadyLocales, locales, publishedLocales } from "./locales";

declare const process: { env: Record<string, string | undefined> };

// A local QA build may render complete drafts. Production emits no translated
// routes until the publication gate is explicitly opened after all nine pass.
export const activeLocales = () => {
  const ready = new Set<string>(publishedLocales);
  if (process.env.LOCALIZED_DRAFT_PREVIEW === "1") for (const slug of draftReadyLocales) ready.add(slug);
  return locales.filter(({ slug }) => ready.has(slug));
};
