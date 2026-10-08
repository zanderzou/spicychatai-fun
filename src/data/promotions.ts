import type { Locale } from "./locales";

// Promotions are not source citations. Keep article sources and legal links direct.
export const promotionUrl = "https://spicy-box.com/?utm_ref=c546b6e92223b411";
export const promotionCopy: Record<Locale, { label: string; disclosure: string }> = {
  ja: { label: "Playbox の紹介リンク", disclosure: "広告・紹介リンク：上部のボタンは Playbox に移動します。SpicyChat の機能ではありません。" },
  ko: { label: "Playbox 제휴 링크", disclosure: "광고·제휴 안내: 상단 버튼은 Playbox로 연결됩니다. SpicyChat의 기능이 아닙니다." },
  "zh-hant": { label: "Playbox 推廣連結", disclosure: "廣告與推廣：頁首按鈕前往 Playbox，並非 SpicyChat 的功能。" },
  es: { label: "Enlace promocional a Playbox", disclosure: "Publicidad: los botones de cabecera llevan a Playbox, no a una función de SpicyChat." },
  "pt-br": { label: "Link promocional do Playbox", disclosure: "Publicidade: os botões no início da página levam ao Playbox, não a um recurso do SpicyChat." },
  ru: { label: "Рекламная ссылка на Playbox", disclosure: "Реклама: кнопки в начале страницы ведут на Playbox, а не к функции SpicyChat." },
  de: { label: "Werbelink zu Playbox", disclosure: "Werbung: Die Schaltflächen oben führen zu Playbox, nicht zu einer SpicyChat-Funktion." },
  fr: { label: "Lien promotionnel vers Playbox", disclosure: "Publicité : les boutons en tête de page mènent à Playbox, pas à une fonction de SpicyChat." },
  ar: { label: "رابط ترويجي إلى Playbox", disclosure: "إعلان: تنقلك الأزرار في بداية الصفحة إلى Playbox، وليس إلى ميزة في SpicyChat." },
};
