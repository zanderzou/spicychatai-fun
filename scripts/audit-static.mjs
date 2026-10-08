import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");const out=path.join(root,"dist","client");const failures=[];const files=[];
const walk=(dir)=>{for(const entry of readdirSync(dir,{withFileTypes:true})){const full=path.join(dir,entry.name);if(entry.isDirectory())walk(full);else if(entry.name.endsWith(".html"))files.push(full);}};
const check=(ok,message)=>{if(!ok)failures.push(message);};
const target=(href)=>{const clean=href.split("#")[0].split("?")[0];if(!clean||!clean.startsWith("/"))return null;if(clean==="/")return path.join(out,"index.html");if(path.extname(clean))return path.join(out,clean);return path.join(out,clean,"index.html");};
walk(out);const canonicals=new Map();for(const file of files){const rel=path.relative(out,file).replaceAll("\\","/");const html=readFileSync(file,"utf8");const title=html.match(/<title>(.*?)<\/title>/i)?.[1]?.trim();const desc=html.match(/<meta name="description" content="([^"]+)"/i)?.[1]?.trim();const lang=html.match(/<html\s+lang="([^"]+)"/i)?.[1]??"en";const minDesc=/^(ja|ko|zh)/i.test(lang)?35:70;const canonical=html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];const h1=(html.match(/<h1(?:\s|>)/gi)??[]).length;check(Boolean(title),`${rel}: missing title`);check(Boolean(desc)&&desc.length>=minDesc&&desc.length<=180,`${rel}: description length`);check(Boolean(canonical?.startsWith("https://spicychatai.fun/")),`${rel}: canonical`);check(h1===1,`${rel}: expected one h1, got ${h1}`);check(/<meta name="robots"/i.test(html),`${rel}: robots`);check(/<meta property="og:image"/i.test(html),`${rel}: Open Graph`);if(canonical){check(!canonicals.has(canonical),`${rel}: duplicate canonical`);canonicals.set(canonical,rel);}for(const img of html.match(/<img\b[^>]*>/gi)??[])check(/\salt="[^"]+"/i.test(img),`${rel}: image alt`);for(const match of html.matchAll(/href="([^"]+)"/gi)){const item=target(match[1]);if(item)check(existsSync(item),`${rel}: broken ${match[1]}`);}}
check(existsSync(path.join(out,"robots.txt")),"missing robots.txt");check(existsSync(path.join(out,"sitemap-index.xml")),"missing sitemap");check(existsSync(path.join(out,"rss.xml")),"missing rss");check(existsSync(path.join(out,"29e6685c404b4754b70a6c97242af8be.txt")),"missing IndexNow key");
const referral="https://spicy-box.com/?utm_ref=c546b6e92223b411";
// Retain the accepted homepage and header CTA copy; citations remain direct below.
const acceptedPromotionLabels=new Set(['Open official SpicyChat','Get Started','Compare privacy approaches','Browse all comparisons','Visit official SpicyChat','Sponsored referral: Playbox']);
const englishArticles=files.filter((file)=>path.relative(out,file).replaceAll("\\","/").startsWith("blog/spicychat-")||path.relative(out,file).replaceAll("\\","/").startsWith("blog/spicy-chat-ai-"));
const editorial=JSON.parse(readFileSync(path.join(root,'src/data/editorialSchedule.json'),'utf8'));
const additional=editorial.articles.filter(a=>existsSync(path.join(root,'src/content/blog',a.slug+'.md'))).length;
check(englishArticles.length===5+additional,`expected ${5+additional} English comparisons, got ${englishArticles.length}`);
for(const file of englishArticles){
  const rel=path.relative(out,file).replaceAll("\\","/");
  const html=readFileSync(file,"utf8");
  const section=html.match(/<section class="sources" id="sources">([\s\S]*?)<\/section>/i)?.[1]??"";
  const sourceUrls=[...section.matchAll(/<a\b[^>]*href="([^"]+)"/gi)].map((item)=>item[1]);
  check(sourceUrls.length>=2,`${rel}: missing linked primary sources`);
  for(const url of sourceUrls)check(url.startsWith("https://")&&url!==referral,`${rel}: source redirected to ${url}`);
}
for(const file of files){
  const html=readFileSync(file,"utf8");
  for(const link of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)){
    if(!link[1].includes(`href="${referral}"`))continue;
    const label=link[2].replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();
    // Preserve the existing mobile header entrance; this request changes its URL only.
    if(label==='Official SpicyChat'&&link.index<html.indexOf('</header>')){
      check(/\brel="noopener"/.test(link[1])&&/\btarget="_blank"/.test(link[1]),`${path.relative(out,file)}: mobile header attributes changed`);
      continue;
    }
    check(label.includes('Playbox')||acceptedPromotionLabels.has(label),`${path.relative(out,file)}: unexpected promotion label`);
    check(/rel="[^"]*sponsored[^"]*nofollow/.test(link[1]),`${path.relative(out,file)}: referral missing sponsored/nofollow`);
  }
}
check(readFileSync(path.join(out,"privacy","index.html"),"utf8").includes('href="https://policies.google.com/privacy"'),"privacy: Google policy link redirected");
check(readFileSync(path.join(out,"index.html"),"utf8").includes('href="https://spicychat.ai/"'),"home: official SpicyChat link redirected");
if(failures.length){console.error(`SEO audit failed:\n- ${failures.join("\n- ")}`);process.exit(1);}console.log(`SEO audit passed for ${files.length} HTML pages.`);
