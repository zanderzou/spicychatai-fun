export const site = {
  name: "Spicy Chat AI",
  domain: "spicychatai.fun",
  url: "https://spicychatai.fun",
  description: "Independent research on Spicy Chat AI character roleplay, models, context, personas, memory, current plan differences, safety rules, and alternatives.",
  author: "Spicy Chat AI editorial team",
  officialUrl: "https://spicychat.ai/",
};
export const formatDate = (date: Date) => new Intl.DateTimeFormat("en-US", { year:"numeric", month:"long", day:"numeric", timeZone:"UTC" }).format(date);
export const toIsoDate = (date: Date) => date.toISOString().slice(0,10);
