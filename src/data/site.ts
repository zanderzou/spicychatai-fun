export const site = {
  name: "SpicyChat AI Guide",
  domain: "spicychatai.fun",
  url: "https://spicychatai.fun",
  description: "An independent SpicyChat AI guide to uncensored AI roleplay, characters, models, context memory, personas, pricing, safety, and alternatives.",
  author: "SpicyChat AI Guide editorial team",
  officialUrl: "https://spicychat.ai/",
};
export const formatDate = (date: Date) => new Intl.DateTimeFormat("en-US", { year:"numeric", month:"long", day:"numeric", timeZone:"UTC" }).format(date);
export const toIsoDate = (date: Date) => date.toISOString().slice(0,10);
