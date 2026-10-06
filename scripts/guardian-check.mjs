import fs from "node:fs";
import path from "node:path";
const cfgPath=".orvia/guardian.json";
const cfg=fs.existsSync(cfgPath)?JSON.parse(fs.readFileSync(cfgPath,"utf8")):{};
const includeExt=new Set([".html",".htm",".js",".mjs",".cjs",".ts",".tsx",".jsx",".md",".json",".css"]);
const skip=new Set([".git","node_modules",".next","dist","build","coverage",".vercel"]);
let corpus="";
function walk(dir){for(const ent of fs.readdirSync(dir,{withFileTypes:true})){if(skip.has(ent.name))continue;const p=path.join(dir,ent.name);if(ent.isDirectory())walk(p);else if(includeExt.has(path.extname(ent.name).toLowerCase())){try{corpus+="\n"+fs.readFileSync(p,"utf8")}catch{}}}}
walk(".");
const holds=[];const warns=[];
const hold=(t,m)=>{if(t)holds.push(m)};const warn=(t,m)=>{if(t)warns.push(m)};
hold(/OBSERVE\s*(?:→|->|>|&rarr;|&#8594;)\s*REVIEW\s*(?:→|->|>|&rarr;|&#8594;)\s*VERIFY\s*(?:→|->|>|&rarr;|&#8594;)\s*INTERPRET\s*(?:→|->|>|&rarr;|&#8594;)\s*ACT\b/i.test(corpus),"Retired ORVIA method ending in ACT detected.");
hold(/(?:>|\bA\s*[—-]\s*)ACT(?:<|\b)/i.test(corpus),"Retired ACT stage label detected.");
warn(!/ACCOUNTABLE/i.test(corpus),"ACCOUNTABLE is not visible in this codebase; confirm the current ORVIA method is represented where relevant.");
warn(!/Human First|Human first/i.test(corpus),"Human First principle not detected.");
warn(/robot|hologram|glowing ai brain|neon ai|matrix code/i.test(corpus),"Potential gimmicky AI language detected; review visual/brand treatment.");
if(cfg.publicSite){if(cfg.requireTrust)warn(!/(Companies House|Company\s+16123685|Armed Forces Covenant|Trust A Veteran|ICO)/i.test(corpus),"Public-site trust signals not detected.");if(cfg.requireCommercial)warn(!/(buy|start|pricing|quote|discovery|contact|enquir|book)/i.test(corpus),"Clear commercial/contact next-step language not detected.");}
console.log("\nORVIA GUARDIAN — "+(cfg.product||"SITE"));console.log("================================");for(const w of warns)console.log("WARN:",w);if(holds.length){for(const h of holds)console.error("HOLD:",h);console.error("\nGUARDIAN STATUS: HOLD");process.exit(1)}console.log("\nGUARDIAN STATUS:",warns.length?"WARN":"PASS");
