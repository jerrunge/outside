/* ============================================================
   GET OUT — trip data layer
   Shared by index.html (hub) and trip.html (detail engine).
   Compact fields drive the calendar; d{} drives the trip page.
   s = [scenery, fish, wildlife, lowBugs, water] (1–5, priority order)
============================================================ */
window.TRIPS = [

/* ===================== SUMMER ALPINE — BACKPACK ===================== */
{id:'desolation',name:'Desolation — Dicks & Fontanillis',type:'backpack',region:'Tahoe · Eagle Falls',drive:3.5,len:'2–3 nts',miles:'~7/day',gain:'≤2,400/day',
 s:[5,4,3,2,5],wild:true,skinny:true,permit:'Zone quota ✦',fish:'Wild brook & rainbow',swim:'Alpine cirque lakes ~',
 season:[7,8,9],peak:[7,8],epic:false,status:'live',url:'https://jerrunge.github.io/desolation/',coord:[38.952,-120.115],
 blurb:'Granite cirque, glassy lakes, hike-in solitude a short drive from home. Your benchmark trip.',
 d:{tag:'Your benchmark cirque — already fully spec\'d on its own page.',
  over:['Granite-rimmed lakes stacked in a high cirque just off Highway 89, close enough to leave Pacifica after breakfast and be filtering lake water by mid-afternoon. Dicks and Fontanillis are the swim-and-fish core; Dicks Pass is the one snow crux early season.','You already have the complete plan for this one — three route options, permit mechanics, the Lake-Aloha-is-scenery-not-fishing note — on its dedicated page.'],
  why:{scenery:'Textbook Sierra granite and glass-still lakes.',fish:'Self-sustaining brook & rainbow in Dicks, Fontanillis, the Velmas.',wildlife:'Black bear, marmot, the occasional coyote; fewer snakes up high.',bugs:'Peak mosquito in July right after melt — September is the relief.',water:'Cold cirque lakes; private coves for a dawn dip.'},
  route:{mode:'backpack',options:[{name:'See the full page',stat:'3 route options',text:'This trip has its own complete build — 3-night, 2-night, and shuttle variants — at jerrunge.github.io/desolation.'}]},
  fish:{water:'Dicks, Fontanillis, the Velmas, Susie, Gilmore',species:'Wild brook & rainbow (self-sustaining)',method:'Small dries and a light nymph; Aloha is barren — fish the side lakes',season:'July–Sept, open water'},
  wild:['Black bear','Yellow-bellied marmot','Mule deer','Coyote','Clark\'s nutcracker'],
  water:{spots:['Fontanillis Lake','Dicks Lake','Upper Velma'],skinny:'Quiet coves on Fontanillis at dawn — skinny-dip grade.'},
  permit:{system:'Desolation Wilderness overnight quota by zone (recreation.gov). You held Zone 23 last time.',cost:'$5/person/night approx',where:'recreation.gov',when:'Releases rolling; popular zones go fast for weekends',notes:'Bear canister required. No campfires. Dicks Pass holds snow into early summer.'},
  drive:{time:'~3.5 hr',route:'I-80 / US-50 to South Lake Tahoe, Hwy 89 to Eagle Falls TH',flags:['Eagle Falls lot fills early — arrive before 8am or use overflow']},
  safety:['Dicks Pass snow — microspikes early season','Afternoon thunderstorms build fast','No cell service'],
  insider:['Camp the bench above Fontanillis for sunrise on the lake','Fish the inlet seams, not the open middle'],
  pack:['Microspikes (early season)','Bear canister','Permethrin-treated layers (July)'],
  verify:['Live zone quota for your dates','Dicks Pass snow status','Current fire restrictions']}},

{id:'twentylakes',name:'Twenty Lakes Basin',type:'backpack',region:'Hoover · Saddlebag',drive:4.5,len:'2 nts',miles:'~6/day',gain:'≤1,400/day',
 s:[5,4,3,3,5],wild:true,skinny:true,permit:'Hoover quota ✦',fish:'Wild brook, Steelhead Lk',swim:'Helen, Steelhead, Shamrock ~',
 season:[7,8,9],peak:[7,8],epic:false,status:'queued',url:null,coord:[37.966,-119.272],
 blurb:'A whole basin of cobalt lakes at 10k, gentle grades, water-taxi shortcut off Saddlebag.',
 d:{tag:'A whole basin of cobalt lakes at 10,000 ft — and a boat that skips the first two miles.',
  over:['Above Saddlebag Lake just outside Yosemite\'s Tioga gate, Twenty Lakes Basin is a near-flat granite shelf studded with lakes — Helen, Steelhead, Shamrock, Cascade — ringed by North Peak and the red metamorphic crest. The grades are gentle for the altitude, which makes it one of the best low-effort, high-payoff alpine trips in the range.','The Saddlebag Lake water taxi cuts roughly two miles each way off the loop, so you start the real scenery almost immediately. Short mileage, big water, easy to linger and fish.'],
  why:{scenery:'A basin of blue lakes under North Peak — relentless.',fish:'Wild brook throughout; Steelhead and Cascade are the reliable producers.',wildlife:'Marmot, pika, mule deer, the odd bear; bighorn on the high crest.',bugs:'Exposed and breezy at 10k — bugs ease earlier here than in timber.',water:'Lake after lake; several with private granite-slab entries.'},
  route:{mode:'backpack',options:[
   {name:'Full basin loop (on foot)',stat:'2 nts · 8.0 mi loop · 915 ft',text:'The complete Twenty Lakes Basin + Saddlebag Lake loop is 8.0 mi, 915 ft (4.8★) — both shores of Saddlebag past Greenstone, Wasco, Steelhead, Shamrock and Helen. This is the reliable plan if the water taxi isn\'t running (see below).'},
   {name:'Water-taxi loop (if running)',stat:'2 nts · ~4 mi on foot',text:'When the Saddlebag Lake Resort taxi operates it trims ~2 mi off each end, leaving roughly a 4-mile basin walk. For 2026 the resort has signaled the taxi may NOT run — confirm directly before you count on it.'},
   {name:'Conness & Greenstone side trip',stat:'+6.6 mi · 1,003 ft',text:'A worthy add-on day to the Conness Lakes under the glacier (6.6 mi, 1,003 ft, 4.8★).'}]},
  fish:{water:'Steelhead, Cascade, Shamrock, Helen, Greenstone',species:'Wild brook trout (some chunky)',method:'Dry-dropper off the inlets; small streamers in Steelhead',season:'July–Sept'},
  wild:['Yellow-bellied marmot','Pika','Mule deer','Sierra bighorn (high crest)','Black bear (uncommon)'],
  water:{spots:['Steelhead Lake','Shamrock Lake','Helen Lake'],skinny:'Shamrock\'s granite slabs are made for it — basin is quiet midweek.'},
  permit:{system:'Hoover Wilderness overnight permit (Humboldt-Toiyabe, via recreation.gov), Saddlebag/20 Lakes entry.',cost:'$6/permit + per-person fee',where:'recreation.gov',when:'Quota season; reserve ahead for weekends',notes:'Bear canister recommended/required by area. 2026 ACCESS: Tioga Pass and Saddlebag Lake Road are open; campgrounds opened on time in a low-snow year. WATER TAXI: the Saddlebag Lake Resort has signaled it may NOT operate the taxi/boat service in 2026 — confirm directly with the resort and default to the full 8-mi foot loop. Booking reality (late June 2026): the 6-month advance window for summer is gone; aim for the 40% release ~2 weeks out, 7am PT on the matching weekday, plus cancellations.'},
  drive:{time:'~4.5 hr',route:'Hwy 120 over Tioga Pass; Saddlebag Lake Rd just east of the park gate',flags:['Tioga Pass + Saddlebag Lake Rd OPEN for the 2026 season','Saddlebag Rd is rough gravel at the end']},
  safety:['10,000 ft start — acclimatize, watch for AMS','Afternoon storms on exposed granite','Cold nights even in August'],
  insider:['Take the taxi out, walk back — front-load the lakes','Steelhead at last light is the fishing move','Hang at Conness Lakes side-trip if you have a third day'],
  pack:['Bear canister','Warm layers (10k nights)','Taxi cash/booking'],
  verify:['Water taxi 2026 status — resort has signaled it may NOT run (confirm directly with Saddlebag Lake Resort)','Hoover/Inyo quota — for summer dates the 40% block releases ~2 weeks out','Bear-can requirement for entry']}},

{id:'emigrant',name:'Emigrant — Buck Lakes',type:'backpack',region:'Emigrant Wild · Crabtree',drive:4,len:'2–3 nts',miles:'~8/day',gain:'≤2,000/day',
 s:[4,5,3,3,4],wild:true,skinny:true,permit:'Free self-issue',fish:'Famous wild brook/rainbow',swim:'Granite lakes ~',
 season:[7,8,9],peak:[7,8],epic:false,status:'queued',url:null,coord:[38.30,-119.83],
 blurb:'No quota, no lottery — and some of the most reliable wild-trout water in the range.',
 d:{tag:'No quota, no lottery — just a free self-issue permit and some of the best wild-trout water in the Sierra.',
  over:['Emigrant Wilderness sits north of Yosemite with a fraction of the crowds and none of the permit anxiety — entry is a free self-issue at the Crabtree trailhead. The Buck Lakes and the surrounding granite basins hold dense, eager wild brook and rainbow.','Scenery here is good rather than jaw-dropping by Sierra standards — rolling granite, lodgepole, broad lake basins — which is exactly why it stays quiet. The trade is the fishing, which is as reliable as it gets.'],
  why:{scenery:'Handsome granite-and-lodgepole basins; a notch below the high cirques.',fish:'The headline — wild brook & rainbow, abundant and willing.',wildlife:'Bear, deer, coyote, abundant birdlife.',bugs:'Standard Sierra timing — better by late July.',water:'Plenty of swimmable granite-bottomed lakes.'},
  route:{mode:'backpack',options:[
   {name:'Camp & Bear Lakes basecamp',stat:'1–2 nts · ~6–8 mi RT',text:'Crabtree TH to the closer Camp and Bear Lakes — the low-effort, fish-forward option. Basecamp and work the chain; eager wild brook and rainbow throughout.'},
   {name:'Buck Lakes loop',stat:'3 nts · 26.2 mi · 3,946 ft',text:'The full Buck Lakes loop out of Crabtree runs 26.2 mi and 3,946 ft (4.7★) — a 3-night circuit stringing a dozen lakes at ~8–9 mi/day. The deeper objective, and the best fishing.'}]},
  fish:{water:'Buck Lakes, Gem, Deer, Camp, Bear',species:'Wild brook & rainbow (self-sustaining, dense)',method:'Almost anything — small dries, a Panther Martin, a hopper; numbers fishing',season:'July–Sept'},
  wild:['Black bear','Mule deer','Coyote','Osprey','Great gray owl (rare)'],
  water:{spots:['Buck Lakes','Gem Lake'],skinny:'Empty basins midweek — easy privacy on the far shore.'},
  permit:{system:'Emigrant Wilderness — FREE self-issue wilderness permit at the Crabtree trailhead.',cost:'Free',where:'Crabtree TH self-issue station (or Summit RS)',when:'No quota — walk up',notes:'Bear canister recommended. Campfire permit needed if fires allowed. Check fire restrictions.'},
  drive:{time:'~4 hr',route:'Hwy 108 toward Sonora Pass; Crabtree Rd to the trailhead',flags:['Crabtree Rd is graded dirt at the end','Sonora Pass area — confirm seasonal access']},
  safety:['Standard Sierra storms','No cell service','Bears habituated near popular lakes — store food right'],
  insider:['Walk past the first lakes to thin the crowd and find bigger fish','Gem Lake at dusk','A 5-weight is overkill; pack light'],
  pack:['Bear canister','Self-issue permit (fill at TH)','Fishing kit — this is the trip for it'],
  verify:['Fire restrictions','Sonora Pass / Crabtree Rd status','Whether fires are allowed']}},

{id:'carsonpass',name:'Carson Pass — Winnemucca & Round Top',type:'backpack',region:'Mokelumne · Carson Pass',drive:3.5,len:'1–2 nts',miles:'~6/day',gain:'≤1,800/day',
 s:[4,3,3,3,4],wild:false,skinny:true,permit:'Free quota ✦',fish:'Small brook lakes',swim:'Winnemucca, Round Top Lk ~',
 season:[7,8,9],peak:[7,8],epic:false,status:'queued',url:null,coord:[38.694,-119.989],
 blurb:'Peak wildflower theater under Round Top — short, scenic, close. The easy-yes alpine trip.',
 d:{tag:'The easiest yes on the list — peak wildflower theater under Round Top, 3.5 hours from home.',
  over:['Carson Pass is the highest-value-per-mile alpine trip within easy reach. A short climb from the Hwy 88 trailhead lands you at Winnemucca Lake under the dark volcanic mass of Round Top, in what is reliably one of the best wildflower displays in the Sierra at peak.','Mileage is gentle and the payoff is immediate, which makes it the perfect quick-overnight or shakedown trip — and a genuinely beautiful one.'],
  why:{scenery:'Round Top over a flower-rimmed lake; punches above its mileage.',fish:'Small brook in Winnemucca & Round Top Lake — fun, not trophy.',wildlife:'Marmot, deer, pika, raptors over the ridge.',bugs:'Early-mid summer is buggy at the lakes; breezier on the bench.',water:'Winnemucca and Round Top Lake both swimmable.'},
  route:{mode:'backpack',options:[
   {name:'Winnemucca Lake overnight',stat:'1 nt · 5.0 mi RT · 633 ft',text:'Climb to Winnemucca Lake (5.0 mi round trip, 633 ft, 4.8★ via the PCT), camp on the bench under Round Top, day-hike higher. The ideal first-night-of-the-season trip.'},
   {name:'Winnemucca–Round Top loop',stat:'2 nts · 6.9 mi · 1,131 ft',text:'Continue to Round Top Lake and Fourth of July Lake for the full 6.9-mi, 1,131-ft loop (4.8★) with more solitude on the back half.'},
   {name:'Round Top summit (optional)',stat:'8.4 mi · 2,119 ft · strenuous',text:'For a big day, the Round Top peak push runs 8.4 mi and 2,119 ft — over your usual gain cap, but the views are bonkers.'}]},
  fish:{water:'Winnemucca Lake, Round Top Lake, Fourth of July Lake',species:'Small wild/holdover brook',method:'Tiny dries; this is casual fishing',season:'July–Sept'},
  wild:['Yellow-bellied marmot','Mule deer','Pika','Golden-mantled ground squirrel','Raptors'],
  water:{spots:['Winnemucca Lake','Round Top Lake'],skinny:'Fourth of July Lake is the quiet one for a private dip.'},
  permit:{system:'Mokelumne Wilderness free overnight permit / Carson Pass Management Area quota.',cost:'Free (CPMA day-use parking fee applies)',where:'Carson Pass Information Station (self-register / staffed)',when:'Quota in peak season — arrive early or reserve where required',notes:'Verify current CPMA overnight quota process; it has shifted between self-issue and limited reservation.'},
  drive:{time:'~3.5 hr',route:'US-50 to Hwy 89 to Hwy 88 over Carson Pass',flags:['Hwy 88 plowed but high — confirm conditions early/late season']},
  safety:['Exposed ridge — lightning risk','Cold even in midsummer at the lakes'],
  insider:['Go for peak bloom (mid-July most years)','Sunrise on Round Top from the Winnemucca bench','Push to Fourth of July Lake to lose the crowd'],
  pack:['Head net (peak bug weeks)','Carson Pass parking fee','Layers'],
  verify:['Current CPMA overnight quota/reservation rules','Peak bloom timing','Hwy 88 conditions']}},

{id:'littlelakes',name:'Little Lakes Valley',type:'backpack',region:'E. Sierra · Rock Creek',drive:5.5,len:'2 nts',miles:'~6/day',gain:'≤1,200/day',
 s:[5,5,3,3,5],wild:true,skinny:true,permit:'Inyo quota ✦',fish:'Golden & brook, wild',swim:'A staircase of alpine lakes ~',
 season:[7,8,9],peak:[7,8,9],epic:false,status:'queued',url:null,coord:[37.435,-118.748],
 blurb:'Highest paved trailhead in the Sierra — you start at 10,300. Lakes for miles, goldens in them.',
 d:{tag:'Start at 10,300 ft — the highest paved trailhead in the Sierra — and walk a staircase of lakes into the high peaks.',
  over:['From Mosquito Flat at the end of Rock Creek Road you begin already in the alpine, which is why Little Lakes Valley delivers more scenery per mile of effort than almost anywhere in the range. The trail threads a chain of lakes — Mack, Marsh, Heart, Box, Long — under Bear Creek Spire, Mt Dade and Mt Abbot, with goldens and brook in the water and Sierra bighorn habitat on the slopes.','Gentle grades and a 25-person daily quota keep it civilized. It\'s the rare trip that\'s easy, gorgeous, and genuinely wild all at once.'],
  why:{scenery:'A lake staircase under 13,000-ft peaks, from the first step.',fish:'Wild golden and brook through the chain; goldens are the prize.',wildlife:'Sierra bighorn habitat, marmot, pika, bear, mule deer.',bugs:'High and open — bugs ease faster than in timbered basins.',water:'A dozen lakes; you\'re never far from a swim.'},
  route:{mode:'backpack',options:[
   {name:'Long Lake basecamp',stat:'2 nts · 4.1 mi RT to Long · 524 ft',text:'Easy walk in to Long Lake (4.1 mi round trip, 524 ft per AllTrails, 4.8★), camp two nights, day-trip the upper chain to Gem Lakes and Morgan Pass. Fish the whole staircase from one base.'},
   {name:'Gem Lakes via the valley',stat:'2 nts · 7.3 mi RT · 1,066 ft',text:'Continue past Long to the Gem Lakes (7.3 mi round trip, 1,066 ft, 4.9★ — the most-loved route here) for the highest, quietest water and the best golden fishing. Chickenfoot and Ruby Lakes make easy side trips.'}]},
  fish:{water:'Long, Box, Heart, the Gem Lakes',species:'Wild golden & brook (goldens up high)',method:'Small dries and a #16 nymph; goldens hold in the upper lakes',season:'July–Oct (quota season May 1–Nov 1)'},
  wild:['Sierra Nevada bighorn (recovering — do not disturb)','Yellow-bellied marmot','Pika','Black bear','Mule deer'],
  water:{spots:['Long Lake','Heart Lake','Gem Lakes'],skinny:'Upper Gem Lakes are quiet enough midweek for a private dip.'},
  permit:{system:'Inyo NF (John Muir Wilderness) overnight quota — Little Lakes Valley TH, recreation.gov.',cost:'$6/permit + $5/person',where:'recreation.gov; print at home up to 7 days out',when:'60% at 6 months (7am PT matching day); 40% walk-up online 2 weeks prior, 7am same weekday',notes:'25/day quota — popular, books instantly for weekends. BEAR CANISTER REQUIRED (Rock Creek is a mandatory-canister area). No campfires. Mosquito Flat backpacker campground (FCFS, one night) for the night before. BOOKING THIS SUMMER (late June 2026): the 6-month advance block for July–Aug dates is already gone — your realistic shot is the 40% online release 2 weeks before entry at 7am PT on the matching weekday (e.g., a Saturday entry releases the second-prior Saturday), plus watching cancellations.'},
  drive:{time:'~5.5 hr',route:'US-395 to Tom\'s Place, Rock Creek Rd to Mosquito Flat',flags:['Rock Creek Rd open; 2026 is a low-snow year (Eastern Sierra campgrounds opened on time, no snow delays)','No potable water at TH (creek to filter)','No food/trash left in car — bears; use lockers']},
  safety:['10,300 ft start — real altitude; acclimatize','Afternoon storms','Cold nights year-round'],
  insider:['Snag a Mosquito Flat backpacker site the night before to acclimatize','Fish the Gem Lakes for goldens','Sunrise on Bear Creek Spire from Long Lake'],
  pack:['Bear canister (required)','Warm layers (10k+)','Extra day to acclimatize'],
  verify:['Inyo quota for your dates (books fast)','Snow on Morgan Pass early season','Fire restrictions']}},

{id:'shadow',name:'Shadow & Ediza Lakes',type:'backpack',region:'Ansel Adams · Agnew Mdws',drive:5.5,len:'2–3 nts',miles:'~8/day',gain:'≤2,300/day',
 s:[5,4,3,2,5],wild:true,skinny:true,permit:'Inyo quota ✦ · Reds Mdw rd',fish:'Wild trout, Shadow Ck',swim:'Ediza under the Minarets ~',
 season:[7,8,9],peak:[8,9],epic:false,status:'queued',url:null,coord:[37.68,-119.08],
 blurb:'The Minarets reflected in Ediza is the postcard. Verify Reds Meadow Rd before booking.',
 d:{tag:'The Minarets mirrored in Ediza Lake — one of the most photographed scenes in the Sierra.',
  over:['From Agnew Meadows you climb past Shadow Lake and along Shadow Creek to Ediza, set directly beneath the sawtooth Minarets and Mts Ritter and Banner. It is, flatly, one of the great alpine amphitheaters in California.','One hard caveat for 2026: the Reds Meadow Road reconstruction limits access to Agnew Meadows. Inyo only issues these permits on days the road is expected to be fully open — so this trip is bookable, but you must track the road schedule.'],
  why:{scenery:'The Minarets over Ediza — top-five view in the range.',fish:'Wild trout in Shadow Creek and the lakes.',wildlife:'Bear, deer, marmot, raptors over the Minarets.',bugs:'Notoriously buggy early — late August and September are the move.',water:'Ediza and Shadow both swimmable; creek pools between.'},
  route:{mode:'backpack',options:[
   {name:'Ediza (+ Iceberg) basecamp',stat:'2 nts · 15.0 mi RT · 2,286 ft (4.8★)',text:'Agnew Meadows to Ediza (camp 1/8 mi off the south shore per regs), day-trip to Iceberg and Cecile Lakes under the Minarets. Shadow Lake alone is 8.1 mi round trip.'},
   {name:'Thousand Island extension',stat:'3 nts · 14.9 mi · 2,391 ft',text:'Loop out via Garnet and Thousand Island Lakes on the JMT/PCT for a bigger circuit.'}]},
  fish:{water:'Shadow Creek, Ediza, Garnet, Thousand Island',species:'Wild trout (rainbow/brook)',method:'Dry-dropper on the creek; lakes fish early and late',season:'July–Sept'},
  wild:['Black bear','Mule deer','Yellow-bellied marmot','Clark\'s nutcracker','Pika'],
  water:{spots:['Ediza Lake','Shadow Creek pools','Iceberg Lake'],skinny:'Iceberg Lake is a cold, private cirque dip under the Minarets.'},
  permit:{system:'Inyo NF (Ansel Adams Wilderness) overnight quota — Agnew Meadows / Shadow Creek, recreation.gov.',cost:'$6/permit + $5/person',where:'recreation.gov',when:'60% at 6 months; 40% two weeks prior — but ONLY released on days the Reds Meadow Rd is anticipated open',notes:'2026 Reds Meadow Road reconstruction restricts access — Reds Meadow is scheduled to open July 2, 2026, and a mandatory ESTA shuttle (board at Mammoth Mountain Main Lodge) is required through the peak season. Camping rules: none AT Shadow Lake; none within 1/8 mi of Ediza\'s south shore; 1/4 mi off Garnet & Thousand Island outlets. Bear canister required.'},
  drive:{time:'~5.5 hr',route:'US-395 to Mammoth, Minaret Vista; mandatory shuttle into Reds Meadow/Agnew when road open',flags:['Reds Meadow Rd reconstruction — confirm open & shuttle status','Day-use shuttle usually required in season']},
  safety:['Heavy bug pressure early — treat clothing','Storms on exposed passes','No cell service'],
  insider:['Go late August/September — fewer bugs, low light on the Minarets','Sunrise reflection at Ediza is the shot','Iceberg Lake side trip for the cirque'],
  pack:['Bear canister','Head net + permethrin (early season)','Shuttle fare'],
  verify:['Reds Meadow Road open + permits being issued for your dates','Shuttle operating','Camping setback rules']}},

{id:'cathedral',name:'Cathedral Lakes',type:'backpack',region:'Yosemite high · Tuolumne',drive:4.5,len:'1–2 nts',miles:'~7/day',gain:'≤1,000/day',
 s:[5,3,3,2,4],wild:false,skinny:true,permit:'Yosemite lottery ✦',fish:'Light',swim:'Lower Cathedral under the spire ~',
 season:[7,8,9],peak:[7,8],epic:false,status:'queued',url:null,coord:[37.85,-119.42],
 blurb:'Cathedral Peak over a quiet tarn, a few miles off Tioga. Lottery permit, huge payoff.',
 d:{tag:'Cathedral Peak rising straight out of a glassy tarn — a short walk off Tioga Road into the Yosemite high country.',
  over:['A few miles up the JMT from Tuolumne Meadows, Lower Cathedral Lake sits in a granite basin directly beneath the fin of Cathedral Peak. The mileage is modest and the grade gentle; the reward is one of the cleanest reflections in the Sierra.','It\'s in Yosemite, so a wilderness permit through the park lottery gates it — but Cathedral is far more attainable than the Half Dome trailheads.'],
  why:{scenery:'Cathedral Peak over a still tarn — pure Yosemite high country.',fish:'Light — go for the scenery, not the fishing.',wildlife:'Bear, deer, marmot, the Tuolumne basics.',bugs:'Meadowy basin holds bugs early; better in August.',water:'Lower Cathedral Lake — granite-rimmed and swimmable.'},
  route:{mode:'backpack',options:[
   {name:'Lower Cathedral overnight',stat:'1–2 nts · ~3.5 mi in',text:'JMT from Tuolumne to Lower Cathedral, camp the legal distance back from the lake, day-hike to Upper Cathedral and toward Cathedral Pass.'}]},
  fish:{water:'Cathedral Lakes',species:'Light trout presence',method:'Optional — a few small dries',season:'July–Sept'},
  wild:['Black bear','Mule deer','Marmot','Belding\'s ground squirrel'],
  water:{spots:['Lower Cathedral Lake'],skinny:'The far granite shore is quiet at dawn before day-hikers arrive.'},
  permit:{system:'Yosemite Wilderness permit via park lottery (recreation.gov), Cathedral Lakes TH.',cost:'$10 lottery + $5/person',where:'recreation.gov — Yosemite Wilderness',when:'24-week rolling lottery; weekdays far easier',notes:'Bear canister required. Camp at least the regulated distance from the lakes. This does NOT include Half Dome.'},
  drive:{time:'~4.5 hr',route:'Hwy 120 to Tioga Rd, Tuolumne Meadows / Cathedral Lakes TH',flags:['Tioga Rd seasonal — closed in winter','Park entry — no reservation needed in 2026 but confirm']},
  safety:['Storms build over the peaks by afternoon','Cold high-country nights','Bears very active in Tuolumne'],
  insider:['Day-hike to Upper Cathedral for the quieter lake','Sunrise reflection at Lower before the crowds','Weekday permits are gettable'],
  pack:['Bear canister','Layers','Park pass'],
  verify:['Yosemite lottery for your dates','Tioga Road open','Park entry rules for 2026']}},

{id:'laurel',name:'Laurel Lake & Lake Vernon',type:'backpack',region:'Yosemite · Hetch Hetchy',drive:3.5,len:'2–3 nts',miles:'~8/day',gain:'≤2,200/day',
 s:[4,3,4,3,4],wild:false,skinny:true,permit:'Yosemite quota ✦',fish:'Lake trout',swim:'Quiet lake, near-zero crowds ~',
 season:[7,8,9,10],peak:[7,8],epic:false,status:'queued',url:null,coord:[37.97,-119.79],
 blurb:'Yosemite without the people. Mid-elevation = bears and rattlers on the same trip.',
 d:{tag:'Yosemite without the people — a quiet lake basin out of Hetch Hetchy where you\'ll likely see no one.',
  over:['Hetch Hetchy is Yosemite\'s overlooked corner. From O\'Shaughnessy Dam the trail climbs to Laurel Lake and Lake Vernon through a mid-elevation mosaic of granite, forest and meadow — country quiet enough that solo days are normal. You found this one yourself last year for exactly that reason.','Mid-elevation means real biodiversity: black bear and rattlesnake on the same trip, plus an early-season waterfall show off the dam.'],
  why:{scenery:'Big granite, Hetch Hetchy reservoir below, genuine solitude.',fish:'Trout in Laurel & Vernon — modest but present.',wildlife:'Bear and rattlesnake together — mid-elevation variety.',bugs:'Meadows hold bugs early; fine by August.',water:'Laurel and Vernon both swimmable and private.'},
  route:{mode:'backpack',options:[
   {name:'Laurel Lake',stat:'2 nts · 14.7 mi RT · 3,448 ft (4.6★)',text:'O\'Shaughnessy Dam up to Laurel Lake; basecamp and explore. Steep early climb, then it eases. Wapama Falls (4.9 mi) makes a good warm-up day-hike.'},
   {name:'Laurel–Vernon loop',stat:'3 nts · ~17 mi',text:'Continue to Lake Vernon and loop back — bigger circuit, near-total solitude.'}]},
  fish:{water:'Laurel Lake, Lake Vernon',species:'Trout (rainbow/brook)',method:'Small dries from shore',season:'July–Oct'},
  wild:['Black bear','Western rattlesnake','Mule deer','Coyote','Pileated woodpecker'],
  water:{spots:['Laurel Lake','Lake Vernon'],skinny:'You\'ll often have the whole lake — skinny-dip grade by default.'},
  permit:{system:'Yosemite Wilderness permit (recreation.gov), Hetch Hetchy entry (Lake Vernon / Laurel Lake).',cost:'$10 + $5/person',where:'recreation.gov — Yosemite Wilderness',when:'24-week rolling lottery; this zone is far easier than the Valley trailheads',notes:'Bear canister required. Early-season waterfalls (Wapama, Tueeulala) off the dam are a bonus. Watch for rattlesnakes on the climb.'},
  drive:{time:'~3.5 hr',route:'Hwy 120 to Evergreen Rd to Hetch Hetchy entrance (O\'Shaughnessy Dam)',flags:['Hetch Hetchy gate has set hours — check open/close times','Lower elevation = hotter; carry water on the climb']},
  safety:['Rattlesnakes on the warm lower trail','Steep, exposed initial climb — start early','Bears active'],
  insider:['Go early summer for the dam waterfalls','Lake Vernon is the quieter camp','Lower elevation = swimmable earlier than the high country'],
  pack:['Bear canister','Extra water for the climb','Snake-aware footwear'],
  verify:['Yosemite permit (easy zone, still reserve)','Hetch Hetchy gate hours','Fire restrictions']}},

{id:'halfdome',name:'Half Dome — Happy Isles → Sunrise Creek',type:'backpack',region:'Yosemite · Valley',drive:4,len:'3 nts',miles:'~6/day',gain:'≤2,900/day',
 s:[5,2,3,4,3],wild:true,skinny:false,permit:'Wilderness quota ✦ + Half Dome add-on',fish:'Merced at LYV, light',swim:'Sunrise Creek (cold, low)',
 season:[6,7,8,9,10],peak:[9],epic:true,status:'queued',url:null,coord:[37.746,-119.533],
 blurb:'Happy Isles up the JMT by Clark Point to a camp on Sunrise Creek past LYV, then the cables from camp. Done: Sep 29 to Oct 2, 2026. EPIC.',
 d:{tag:'Up the JMT from Happy Isles to a camp on Sunrise Creek past Little Yosemite Valley, then the cables to the top of Half Dome from camp. Done, Sep 29 to Oct 2.',
  over:['The classic Yosemite climb from the Valley floor, done as an overnight with the tent pitched high. You walk up from Happy Isles on the John Muir Trail by Clark Point (the Mist Trail is closed Monday to Thursday until 3:30pm through October), pass Little Yosemite Valley, and camp on Sunrise Creek beyond the Half Dome turnoff, which puts the dome about two miles from the tent. The Happy Isles to Past LYV permit carries the Half Dome add-on, good on every date of the permit.','The car sits in the trailhead lot past Curry Village the whole time. Tuesday is the drive and the permit pickup at Big Oak Flat, then Backpackers Campground. Wednesday is the climb to Sunrise Creek. Thursday is the dome, then the night is decided on the mountain: the same camp, or down to Backpackers. Friday is home either way. The permit is confirmed for two, in 9/30, out 10/2. One thing is still open and printed in the plan below: a Tuesday-morning smoke check with the Dome Fire burning south of the Valley.'],
  why:{scenery:'Vernal and Nevada Fall from the JMT and Clark Point, Liberty Cap, a quiet camp on Sunrise Creek, then the summit of Half Dome.',fish:'Light: the Merced at LYV is a pass-through, not the plan. The rod rides only if it rides free.',wildlife:'Black-bear country (canister everywhere; the permit warns that bears have taken food from backpackers here), mule deer, and rattlesnakes, which NPS says are more and more common in LYV and east of it.',bugs:'Late September in a dry week: the bug season is behind you.',water:'Sunrise Creek at camp (still flowing but lower as the season goes, NPS) and the Merced at LYV: cold, filterable, a rinse rather than a swim.'},
  route:{mode:'backpack',options:[
   {name:'Wed 9/30 · Happy Isles → Sunrise Creek (JMT by Clark Point)',stat:'~6 mi · ~2,900 ft up',text:'Fill bottles at Happy Isles (shuttle stop 16) and the Vernal Fall footbridge (0.8 mi), the last taps. About 0.2 mi past the bridge the Mist Trail splits off; it is closed Mon to Thu 7am to 3:30pm, so take the JMT by Clark Point to the top of Nevada Fall (about 4 mi, NPS) and on to LYV (5.3 mi by AllTrails). This permit may not camp at LYV: go on past the Half Dome turnoff (about 1.5 mi) and camp on Sunrise Creek on an established site, 100 ft from water and trail.'},
   {name:'Thu 10/1 · Half Dome from camp',stat:'~4 mi RT · ~1,800 ft',text:'Tents stay up; go with day packs. About 2 mi and 1,800 ft to the subdome, where rangers check permits, then the cables (up through Oct 13). Dry rock only, off the summit if a storm is near, turnaround set before you leave camp. Back to camp, then choose: the same camp, or down to Backpackers (about 6.5 mi on the JMT, since the Mist is closed until 3:30pm).'},
   {name:'Fri 10/2 · Out to Happy Isles',stat:'~6.5 mi down · or only the drive',text:'From camp: down the JMT, or the Mist Trail, which is open Fridays. No parking at Happy Isles: walk the half mile to the trailhead lot or ride the East Valley shuttle (7am to 10pm). Return the canister at any station, 24 hours a day.'}]},
  maps:[
   {name:'Little Yosemite Valley via John Muir Trail',stat:'Day one, up · 10.6 mi out & back (5.3 up) · 2,641 ft · high point 6,190 ft · Hard · 4.8★',text:'Happy Isles to LYV by Clark Point: the Wednesday climb, stopping short of camp (Sunrise Creek is about 1.5 to 2 mi further).',url:'https://www.alltrails.com/trail/us/california/little-yosemite-valley-via-john-muir-trail'},
   {name:'Half Dome via Little Yosemite Valley',stat:'Summit day · 7.1 mi out & back · 2,667 ft · high point 8,805 ft · Strenuous · 4.9★ · 5 to 5.5 hr',text:'The dome from LYV. From the Sunrise Creek camp it is shorter: about 2 mi and 1,800 ft to the subdome.',url:'https://www.alltrails.com/trail/us/california/half-dome-via-little-yosemite-valley-campsite--2'},
   {name:'Half Dome via the John Muir Trail (JMT)',stat:'The whole line · 17.2 mi out & back from Happy Isles · 5,305 ft · Strenuous · 4.9★',text:'Happy Isles to the summit and back on one map. Download all three for offline in the AllTrails app before you lose signal at Curry Village.',url:'https://www.alltrails.com/trail/us/california/half-dome-via-the-john-muir-trail-jmt'}],
  fish:{water:'Merced River at Little Yosemite Valley',species:'Small trout (incidental)',method:'Optional: a few small dries if the rod comes along; CA license required',season:'Late Sept: low, clear water'},
  wild:['Black bear','Mule deer','Rattlesnake (more and more common around LYV)','Steller’s jay'],
  water:{spots:['Sunrise Creek','Merced River at LYV','Vernal Fall footbridge (the last tap)'],skinny:'Not a skinny-dip trip. A cold rinse in Sunrise Creek after the cables is the water moment.'},
  permit:{system:'Yosemite Wilderness permit (recreation.gov), Happy Isles → Past LYV (Donohue Pass eligible), with the Half Dome add-on. Quota 9 lottery / 6 first-come.',cost:'$10/permit + $5/person · Half Dome add-on $10/person, paid when the permit is issued',where:'recreation.gov; pick up in person at any open wilderness station (Big Oak Flat is the listed one; the Valley Wilderness Center works too)',when:'Pick up the day before or the day of entry, 8am to 5pm; by 11am on the entry date, or mark it for late pick-up on recreation.gov (open within a week of entry), or it is cancelled.',notes:'Not at LYV: the permit says camp up Sunrise Creek beyond the Half Dome turnoff or up the Merced beyond Moraine Dome. The Oct 2 exit covers a second night at the Sunrise Creek camp. The Half Dome add-on is valid on every date of the permit; rangers check at the base of the subdome. Vehicle or bus travel mid-trip, or passing through the Valley, invalidates the permit, so a Thursday night at Backpackers is the exit. Bear canister required throughout the Yosemite Wilderness: $5/week with a $95 deposit at any station, returnable 24 hours a day. Fires: no wood or charcoal, twig stoves included, below 8,000 ft; gas and alcohol stoves are fine. STATUS 9/24: confirmed for two, in 9/30, out 10/2.'},
  drive:{time:'~4 hr',route:'Pacifica to Big Oak Flat by Hwy 120 for the permit, then into the Valley; the car sits in the trailhead lot just past Curry Village for the trip',flags:['No parking at Happy Isles: the trailhead lot is just past Curry Village, about half a mile away (Curry Village parking if it is full; never The Ahwahnee)','Backpackers Campground: 15 minutes to unload at its entrance in North Pines, then park and walk back','All food and scented items out of the car for the whole trip; food lockers at trailhead parking','Road work: 15-minute delays on weekdays on Big Oak Flat Road between Foresta and Crane Flat']},
  safety:['Cables: never when the rock is wet; leave the summit if a storm is near; the summit runs 15 to 20° cooler than the Valley','Set a turnaround time and carry a headlamp with spare batteries (NPS); this plan sets noon on the dome','Rattlesnakes more and more common in LYV and east of it (NPS)','Dome Fire: 4,030 acres, 15% contained, north of Wawona Dome (InciWeb 9/24). Glacier Point Road closed since 6pm 9/23; Ostrander and south of it and Chilnualna Falls closed; the closed area widened 9/24. None of the listed closures touch this route','Smoke: InciWeb 9/24 has Valley air UNHEALTHY FOR SENSITIVE GROUPS in the mornings, clearing by afternoon; AllTrails flagged an air alert at the trailhead the same day','NWS 9/24: sunny Tue 9/29 and Wed 9/30; near the rim (about 6,300 ft) highs 69 to 72, lows 47 to 48; the Valley floor 78 to 81 and 54 to 55. Nights at Sunrise Creek run colder than the Valley','Water: taps only at Happy Isles and the Vernal Fall footbridge (May to Oct); treat Sunrise Creek (lower as the season goes) and the Merced; NPS says a gallon each for the dome','Cooper stays home: no dogs on these trails or anywhere in the wilderness'],
  insider:['Pick the permit up Tuesday at Big Oak Flat on the drive in (aim for 4pm) so Wednesday starts at Happy Isles','Install the Recreation.gov app before you lose signal: Backpackers is $8 each by Scan and Pay only','Download the three AllTrails maps for offline before Curry Village','Camp high on Sunrise Creek so the dome is about two miles from the tent','Grippy gloves for the cables, and pack them out','Friday the Mist Trail is open if the legs want the short way down'],
  pack:['Bear canister (rent $5/week, $95 deposit)','Grippy gloves for the cables (pack them out)','Headlamp + spare batteries','Gas or alcohol stove (no twig stoves)','Water filter (no tap past the Vernal Fall footbridge)','Warm layers: camp nights run colder than the Valley','Photo ID and the permit for the subdome check','Recreation.gov app for Scan and Pay (no cash)','The three AllTrails maps, offline'],
  verify:['Permit confirmed for two: in Wed 9/30 Happy Isles → Past LYV, out Fri 10/2; pick it up Tue at Big Oak Flat (8am to 5pm) or by 11am Wed','OPEN: Tuesday-morning smoke and road check before leaving Pacifica (fire.airnow.gov, the InciWeb Dome Fire page, NPS conditions)','Half Dome cables still up (down the day after the second Monday in October, Oct 13) and no new advisory','Mist Trail closure hours (Mon to Thu 7am to 3:30pm through October)','Sunrise Creek still flowing (NPS: lower as the season goes)','Fire restrictions and closures around the Dome Fire'],
  tidePlan:{status:'Done · Sep 29 to Oct 2, 2026',summary:'Four days, three nights, the car in the Valley trailhead lot the whole time. Tue: drive in by Hwy 120, pick up the permit and two Half Dome add-ons at Big Oak Flat, sleep at Backpackers Campground (or lodging). Wed: Happy Isles up the JMT by Clark Point to a camp on Sunrise Creek past LYV. Thu: Half Dome from camp, then decide on the mountain: the same camp or down to Backpackers. Fri: home either way. The permit is confirmed for two, in 9/30, out 10/2. One thing is still open, smoke: check Valley air Tuesday morning before you leave Pacifica (Dome Fire; InciWeb 9/24 had Valley mornings unhealthy for sensitive groups).',nights:[
   {label:'Night 1 · Tue Sep 29',camp:'Backpackers Campground',zone:'None yet. Yosemite Valley, the night before the wilderness permit starts',note:'Drive in by Hwy 120 and pick up the permit and two Half Dome add-ons at Big Oak Flat (8am to 5pm; aim for 4pm; the add-ons are $10 each, paid when the permit is issued). Missed 5pm: the Valley Wilderness Center opens 8am Wednesday, and the permit must be picked up by 11am Wednesday or marked for late pick-up on recreation.gov. Backpackers is behind North Pines across the footbridge: $8 per person per night by Scan and Pay in the Recreation.gov app only, no cash, no reservation, one night before and one after the trip. No drinking water (fill in North Pines). Unload 15 minutes at the entrance in North Pines, then park at the trailhead lot past Curry Village and walk back. Or lodging, if you book it.'},
   {label:'Night 2 · Wed Sep 30',camp:'Sunrise Creek',zone:'Happy Isles to Past LYV. Not at LYV: up Sunrise Creek beyond the Half Dome turnoff, or up the Merced beyond Moraine Dome',note:'Happy Isles (stop 16) up the JMT by Clark Point: the Mist Trail is closed Mon to Thu 7am to 3:30pm through October. Last taps at stop 16 and the Vernal Fall footbridge. The top of Nevada Fall at about 4 mi by the JMT (NPS), LYV at 5.3 by AllTrails, the Half Dome turnoff about 1.5 mi above it, then a camp on Sunrise Creek: about 6 mi and 2,900 ft from Happy Isles. Established site, 100 ft from water and trail. Treat the creek. Sunset 6:42pm.'},
   {label:'Night 3 · Thu Oct 1',camp:'Sunrise Creek or Backpackers',zone:'Decided on the mountain: the same Sunrise Creek camp (the Oct 2 exit covers it), or down to Backpackers Campground for the night after',note:'Half Dome from camp: about 2 mi and 1,800 ft to the subdome, where rangers check permits, then the cables. Tents stay up. Dry rock only, leave the summit if a storm is near, noon turnaround, a headlamp each. Then choose. The same camp keeps the tents up and makes Friday a 6.5 mile walk out, on the Mist Trail if you like (open Fridays). Down to Backpackers the same afternoon is about 6.5 mi on the JMT (the Mist is closed until 3:30pm); leave camp packed by about 2pm, sunset 6:41pm.'}
  ],exit:'Day 4 · Fri Oct 2: home either way. From camp, out to Happy Isles, about 6.5 mi, by the JMT or the Mist Trail (open Fridays); from Backpackers, only the drive. No parking at Happy Isles: walk the half mile to the trailhead lot or ride the East Valley shuttle (7am to 10pm, every 8 to 12 minutes). Return a rented bear canister at any station, 24 hours a day.'}}},

{id:'trinity',name:'Canyon Creek Lakes',type:'backpack',region:'Trinity Alps',drive:5,len:'2–3 nts',miles:'~8/day',gain:'≤2,800/day',
 s:[5,4,4,2,5],wild:true,skinny:true,permit:'Free self-issue',fish:'Wild trout',swim:'Falls, pools, granite lakes ~',
 season:[7,8,9],peak:[7,8],epic:false,status:'queued',url:null,coord:[40.86,-123.02],
 blurb:'Drama-first: a staircase of waterfalls into twin alpine lakes under Sawtooth granite.',
 d:{tag:'Drama first — a staircase of waterfalls climbing into twin alpine lakes under Sawtooth granite.',
  over:['The Trinity Alps are NorCal\'s answer to the High Sierra with a fraction of the traffic, and Canyon Creek is their showpiece: a relentless climb alongside cascade after cascade, topping out at Lower and Upper Canyon Creek Lakes beneath the white granite of Sawtooth Ridge.','Free self-issue permit, real waterfalls, swimmable pools the whole way up, and a wildlife mix richer than the Sierra — this is one of the best value trips on the list.'],
  why:{scenery:'Waterfall staircase into granite cirque lakes — top-tier.',fish:'Wild trout in the creek and lakes.',wildlife:'Black bear, more biodiversity than the Sierra — even rare carnivores.',bugs:'Buggy early at the lakes; better late summer.',water:'Cascades, pools, and two cirque lakes — endless swimming.'},
  route:{mode:'backpack',options:[
   {name:'Canyon Creek Lakes',stat:'2–3 nts · 15.6 mi RT · 2,942 ft',text:'Canyon Creek TH up past the cascades to the Lower Lake (15.6 mi round trip, 2,942 ft, 4.8★); basecamp and day-hike to the Upper Lake and "L" Lake. The waterfall staircase is the whole show.'},
   {name:'Plus Boulder Creek Lakes',stat:'3 nts · 18.7 mi · 3,815 ft',text:'Add the quieter Boulder Creek Lakes on the bench to the west for an 18.7-mi, 3,815-ft trip (4.7★).'}]},
  fish:{water:'Canyon Creek, Lower & Upper Canyon Creek Lakes',species:'Wild trout',method:'Dries on the creek pools; lakes early/late',season:'July–Sept'},
  wild:['Black bear','Mule deer','Pacific fisher / marten (rare)','Mountain lion (seldom seen)','Bald eagle'],
  water:{spots:['Canyon Creek Falls pools','Lower Canyon Creek Lake','Upper Lake'],skinny:'Creek pools below the lakes are private and warmer than the cirque.'},
  permit:{system:'Trinity Alps Wilderness — FREE self-issue permit at the trailhead.',cost:'Free',where:'Canyon Creek TH self-issue station',when:'No quota — walk up',notes:'Campfire permit required for stoves/fires. Bear canister recommended. Popular weekends fill the lake basin — push to Upper for space.'},
  drive:{time:'~5 hr',route:'I-5 to Hwy 299 to Junction City, Canyon Creek Rd to the TH',flags:['Canyon Creek Rd is paved-then-rough','Wildfire smoke possible late summer in NorCal']},
  safety:['Sustained climb — pace it','Afternoon storms','Black bears habituated at the lakes'],
  insider:['Camp at the Upper Lake to escape the day-trip crowd','The cascade pools are the best swimming, not the cold lakes','Sunset on Sawtooth from the Lower Lake'],
  pack:['Self-issue + campfire permit','Bear canister','Swim shoes for the pools'],
  verify:['Fire restrictions / smoke','Canyon Creek Rd condition','Trailhead parking']}},

{id:'marble',name:'Marble Mountains — Sky High Lakes',type:'backpack',region:'Marble Mtn Wild',drive:5.5,len:'2–3 nts',miles:'~8/day',gain:'≤2,400/day',
 s:[4,4,4,3,4],wild:true,skinny:true,permit:'Free self-issue',fish:'Wild brook',swim:'Sky High Lakes ~',
 season:[7,8,9],peak:[7,8],epic:false,status:'queued',url:null,coord:[41.50,-123.10],
 blurb:'Marble-banded peaks, big wildlife corridor (bear, deer, the occasional wolf track), few people.',
 d:{tag:'Marble-banded peaks and a basin of brook-trout lakes in one of California\'s great wildlife corridors.',
  over:['Far up near the Oregon border, the Marble Mountains are remote enough to stay genuinely quiet, with the namesake marble-and-granite peaks banding the skyline. The Sky High Lakes basin is the classic destination — a cluster of brook-trout lakes under Boulder Peak.','This is big-wildlife country: black bear and deer for certain, and a corridor that occasionally turns up wolf and wolverine sign. You go here for solitude and the sense of being somewhere genuinely wild.'],
  why:{scenery:'Banded marble peaks over a lake basin — distinctive and quiet.',fish:'Wild brook throughout the Sky High Lakes.',wildlife:'Bear, deer, and a corridor with wolf/wolverine sign — top biodiversity.',bugs:'Standard timing; breezy ridges help.',water:'Several swimmable basin lakes.'},
  route:{mode:'backpack',options:[
   {name:'Sky High Lakes loop',stat:'2–3 nts · 14.6 mi · 3,083 ft',text:'Lover\u2019s Camp TH to the Sky High Lakes basin via Shadow Lake — a 14.6-mi, 3,083-ft loop (4.7★). Basecamp and fish the brookies, day-hike the marble rim.'},
   {name:'Marble Valley extension',stat:'3 nts',text:'Add Marble Valley and a stretch of the PCT for the namesake marble formations, returning via Sky High.'}]},
  fish:{water:'Lower & Upper Sky High Lakes, Frying Pan Lake',species:'Wild brook trout',method:'Small dries; numbers fishing',season:'July–Sept'},
  wild:['Black bear','Black-tailed deer','Gray wolf (corridor — sign possible)','Pacific fisher','Bald eagle'],
  water:{spots:['Lower Sky High Lake','Frying Pan Lake'],skinny:'Remote and lightly used — privacy is easy midweek.'},
  permit:{system:'Marble Mountain Wilderness (Klamath NF) — FREE self-issue permit.',cost:'Free',where:'Lovers Camp TH self-issue',when:'No quota',notes:'Campfire permit for stoves. Bear-aware. Long, remote drive — fuel up. Smoke possible in late summer.'},
  drive:{time:'~5.5 hr',route:'I-5 to Yreka, Hwy 3 to Scott Valley, forest roads to Lovers Camp',flags:['Final forest roads are slow','Remote — no services near TH']},
  safety:['Remote — carry a satellite messenger','Late-summer wildfire smoke risk','Bears'],
  insider:['Walk the marble rim at the Sky High basin','Frying Pan Lake for the quietest camp','Go midweek and you may see no one'],
  pack:['Satellite messenger','Self-issue + campfire permit','Bear canister'],
  verify:['Fire/smoke status','Forest road conditions','Trailhead access']}},

{id:'lassenbc',name:'Lassen Backcountry — Cluster Lakes',type:'backpack',region:'Lassen NP',drive:4,len:'1–2 nts',miles:'~7/day',gain:'≤1,200/day',
 s:[4,3,4,3,3],wild:false,skinny:true,permit:'Free wilderness',fish:'Stocked/holdover',swim:'Warm-ish forest lakes ~',
 season:[7,8,9],peak:[7,8],epic:false,status:'queued',url:null,coord:[40.50,-121.36],
 blurb:'Volcanic weirdness, easy grades, lakes warm enough to actually want to swim.',
 d:{tag:'Volcanic weirdness, gentle grades, and forest lakes actually warm enough to want to swim.',
  over:['Lassen\'s backcountry is the rare alpine-ish trip where the lakes are swimmable in comfort — lower and more sheltered than the High Sierra, surrounded by lodgepole and the park\'s signature volcanic strangeness. The Cluster Lakes loop links a string of them on easy grades.','Add boardwalk thermal areas, cinder cones, and a healthy bear-and-deer population, and you get a relaxed, family-pace backpack with genuine character.'],
  why:{scenery:'Volcanic landscape, cinder cones, lake-dotted forest.',fish:'Stocked/holdover trout in several lakes.',wildlife:'Black bear, deer, abundant birds; volcanic geology bonus.',bugs:'Forest lakes hold bugs early — better by August.',water:'Warm-ish lakes — the best easy swimming on the list.'},
  route:{mode:'backpack',options:[
   {name:'Cluster Lakes loop',stat:'2 nts · ~7 mi/day · ≤1,200 ft',text:'From Summit Lake, loop the Cluster Lakes (Big Bear, Little Bear, Silver, Feather) — easy, swimmable, great for a relaxed pace.'},
   {name:'Add Cinder Cone',stat:'extra day',text:'Detour to the Cinder Cone / Painted Dunes from the Butte Lake side for the park\'s strangest terrain.'}]},
  fish:{water:'Cluster Lakes, Butte Lake, Manzanita',species:'Stocked/holdover trout',method:'Spinners or small dries from shore',season:'July–Sept'},
  wild:['Black bear','Mule deer','Steller\'s jay','Bald eagle','Beaver (some lakes)'],
  water:{spots:['Silver Lake','Big Bear Lake','Summit Lake'],skinny:'Lower forest lakes warm enough for a real swim; quiet weekday shores.'},
  permit:{system:'Lassen Volcanic NP — FREE wilderness permit for overnight backcountry.',cost:'Free (park entry fee applies)',where:'Park visitor centers / online',when:'No quota — register',notes:'Bear canister required. Stay on durable surfaces near thermal areas. Park entrance fee.'},
  drive:{time:'~4 hr',route:'I-5 to Red Bluff, Hwy 36/89 into the park',flags:['Park road over the pass is seasonal','Entrance fee']},
  safety:['Thermal areas — stay on trail/boardwalk','Bears','Afternoon storms'],
  insider:['Swim Silver Lake mid-afternoon','Pair with Bumpass Hell / Cinder Cone day hikes','Manzanita Lake fishing at dusk'],
  pack:['Bear canister','Park pass','Actual swim gear — you\'ll use it'],
  verify:['Park road open','Fire restrictions','Backcountry permit process']}},

{id:'skylakes',name:'Sky Lakes Wilderness',type:'backpack',region:'Oregon · S. of Crater Lk',drive:7.5,len:'2–3 nts',miles:'~9/day',gain:'≤1,800/day',
 s:[4,4,3,1,5],wild:true,skinny:true,permit:'Free self-issue',fish:'Wild & brook, many lakes',swim:'Hundreds of lakes ~',
 season:[7,8,9],peak:[8,9],epic:true,status:'queued',url:null,coord:[42.45,-122.20],
 blurb:'Lake after lake under Mt McLoughlin. EPIC — but legendarily buggy until late August.',
 d:{tag:'Hundreds of lakes under Mt McLoughlin — an EPIC Oregon detour, if you time the bugs.',
  over:['Just south of Crater Lake, the Sky Lakes Wilderness is exactly what it sounds like: a high forested plateau speckled with hundreds of lakes, many holding wild and brook trout, under the volcanic cone of Mt McLoughlin. The Seven Lakes Basin and Sky Lakes Basin are the cores.','The one catch is famous: Sky Lakes is one of the buggiest places in Oregon. Go before the lakes drop in late August and you\'ll be eaten alive. Time it right and it\'s paradise — endless swimming and fishing with near-total solitude.'],
  why:{scenery:'Lake-dotted plateau under a volcano — serene more than dramatic.',fish:'Wild and brook trout across dozens of lakes.',wildlife:'Bear, deer, elk, abundant birdlife.',bugs:'THE weakness — legendary until late August. Score reflects early-season.',water:'Hundreds of swimmable lakes — water everywhere.'},
  route:{mode:'backpack',options:[
   {name:'Seven Lakes Basin',stat:'2 nts · 12.2 mi · 1,263 ft (4.4★)',text:'Sevenmile or Seven Lakes TH into the basin; basecamp among the lakes, day-hike Devils Peak for the view.'},
   {name:'Sky Lakes Basin via PCT',stat:'3 nts · ~11.6 mi · 1,486 ft',text:'String the PCT south past Margurette, Trapper and the Heavenly Twin Lakes — maximum lakes.'}]},
  fish:{water:'Seven Lakes, Margurette, Trapper, Heavenly Twin',species:'Wild & brook trout',method:'Small dries; eager fish',season:'July–Sept'},
  wild:['Black bear','Roosevelt elk','Black-tailed deer','Bald eagle','Pine marten'],
  water:{spots:['Cliff Lake','Margurette Lake','Heavenly Twin Lakes'],skinny:'Empty basins — privacy is the norm once you\'re off the PCT.'},
  permit:{system:'Sky Lakes Wilderness (Fremont-Winema NF) — FREE self-issue permit at trailheads.',cost:'Free',where:'Trailhead self-issue',when:'No quota',notes:'BUG SEASON IS REAL — head net and treated clothing essential before late August. Campfire/stove rules apply.'},
  drive:{time:'~7.5 hr',route:'I-5 north to Medford/Klamath Falls area, forest roads to the trailheads',flags:['Long drive — make it a 3+ night trip','Confirm which TH road is open']},
  safety:['Extreme bugs early — plan around it','Remote — satellite messenger','Smoke possible'],
  insider:['Go late August / early September — bugs crash, water still warm','Cliff Lake under Devils Peak is the prettiest camp','Bring the fly rod — the fishing is the equal of the swimming'],
  pack:['Head net + permethrin (mandatory)','Satellite messenger','Fishing kit'],
  verify:['Bug status (late-Aug+ strongly preferred)','TH road access','Smoke/fire']}},

{id:'wallowas',name:'Eagle Cap — Lakes Basin',type:'backpack',region:'Oregon · Wallowas',drive:10.5,len:'3–4 nts',miles:'~9/day',gain:'≤2,600/day',
 s:[5,5,4,3,5],wild:true,skinny:true,permit:'Free self-issue',fish:'Golden & brook, wild',swim:'Granite-rimmed alpine lakes ~',
 season:[7,8,9],peak:[8,9],epic:true,status:'queued',url:null,coord:[45.20,-117.30],
 blurb:'"Oregon\'s Alps." A marquee, once-a-summer push — goldens, white granite, real remoteness.',
 d:{tag:'"Oregon\'s Alps" — white granite, golden trout, and the kind of remoteness California can\'t match. A marquee push.',
  over:['The Wallowas in northeast Oregon are the real deal: a compact range of white granite peaks, glacial lakes, and the Lakes Basin — a high granite bowl holding a dozen lakes under the Matterhorn and Eagle Cap itself. Goldens and brook in the water, marmots on the slabs, and a genuine sense of being far from anywhere.','This is a once-a-summer commitment given the 10+ hour drive, which is exactly what makes it special. Make it a four-day trip and it earns every mile.'],
  why:{scenery:'White-granite cirques and the Lakes Basin — Sierra-grade or better.',fish:'Wild golden and brook in the basin lakes.',wildlife:'Bear, elk, bighorn, mountain goat, deer — strong variety.',bugs:'Fine by August; high and breezy.',water:'A bowl of granite-rimmed alpine lakes — endless swimming.'},
  route:{mode:'backpack',options:[
   {name:'Lakes Basin loop',stat:'3 nts · 19.5 mi · 2,877 ft (4.8★)',text:'Two Pan TH up the West Fork Lostine to the Lakes Basin (Mirror, Moccasin, Douglas); basecamp, day-hike Eagle Cap summit.'},
   {name:'Grand loop',stat:'4 nts · 36.1 mi · 7,582 ft (4.8★)',text:'Add Glacier Lake and the high traverse for the range\'s best granite and water.'}]},
  fish:{water:'Mirror, Moccasin, Douglas, Glacier Lakes',species:'Wild golden & brook',method:'Small dries; goldens in the higher lakes',season:'July–Sept'},
  wild:['Black bear','Rocky Mountain elk','Bighorn sheep','Mountain goat','Mule deer'],
  water:{spots:['Mirror Lake','Glacier Lake','Moccasin Lake'],skinny:'Granite slabs at Mirror and Glacier — and far enough out that it\'s just you.'},
  permit:{system:'Eagle Cap Wilderness (Wallowa-Whitman NF) — FREE self-issue permit; NW Forest Pass for parking.',cost:'Free permit; parking pass',where:'Two Pan / Lostine TH self-issue',when:'No quota',notes:'Bear-aware (hang or canister). Long drive — plan 4+ days. Lostine River Rd is rough gravel at the end.'},
  drive:{time:'~10.5 hr',route:'I-80/I-84 to La Grande/Enterprise, Lostine River Rd to Two Pan',flags:['Lostine River Rd rough — high clearance helps','Make it a long trip — too far for a weekend']},
  safety:['Remote — satellite messenger','Storms on the high traverse','Smoke possible late summer'],
  insider:['Summit Eagle Cap for the whole basin at once','Glacier Lake under the Matterhorn is the alpine high point','Make it four nights — you drove a long way'],
  pack:['Satellite messenger','NW Forest Pass','Bear canister or hang kit'],
  verify:['Lostine River Rd condition','Fire/smoke in NE Oregon','Trailhead parking pass']}},

{id:'enchant',name:'The Enchantments',type:'backpack',region:'Washington · Cascades',drive:13,len:'2–3 nts',miles:'~9/day',gain:'≤2,900/day',
 s:[5,3,4,3,5],wild:false,skinny:true,permit:'Core lottery ✦',fish:'Light',swim:'Larch-rimmed granite lakes ~',
 season:[7,8,9],peak:[9],epic:true,status:'queued',url:null,coord:[47.49,-120.79],
 blurb:'The aspirational white whale. Core-zone lottery, golden larches late Sept. Bucket-list only.',
 d:{tag:'The white whale — a granite-and-larch basin so good it has its own lottery. Bucket-list only.',
  over:['The Enchantments core in Washington\'s Cascades is one of the most beautiful alpine basins in the country: glacier-polished granite, a chain of turquoise lakes, mountain goats on the slabs, and — for two weeks in late September — golden larches that turn the whole basin to fire.','It\'s gated by one of the hardest permit lotteries in America and a 13-hour drive, which makes this purely aspirational. Worth putting in the lottery every year on principle.'],
  why:{scenery:'Among the finest alpine basins in the U.S. — especially at larch turn.',fish:'Light — this is a scenery pilgrimage.',wildlife:'Mountain goats everywhere; bear, deer.',bugs:'Fine by late summer; September is ideal anyway.',water:'A chain of granite-rimmed turquoise lakes.'},
  route:{mode:'backpack',options:[
   {name:'Core Enchantments thru-hike',stat:'2–3 nts · ~18 mi pt-to-pt · ~4,500 ft',text:'Stuart Lake TH up Aasgard Pass into the Core, descend to Snow Lakes. Brutal climb, unmatched payoff. Requires a Core-zone permit.'},
   {name:'Colchuck Lake (no lottery)',stat:'9.1 mi RT · 2,352 ft (4.8★)',text:'If the lottery fails, Colchuck Lake under Dragontail is a stunning consolation and doesn\'t need a Core permit.'}]},
  fish:{water:'Core lakes',species:'Light trout presence',method:'Optional',season:'Summer'},
  wild:['Mountain goat','Black bear','Mule deer','Pika','Marmot'],
  water:{spots:['Inspiration Lake','Perfection Lake','Colchuck Lake'],skinny:'Cold glacial lakes; dawn dips before the day-hikers crest Aasgard.'},
  permit:{system:'Enchantment Permit Area lottery (recreation.gov) for the Core zone.',cost:'Lottery + per-person',where:'recreation.gov — late winter/early spring lottery',notes:'One of the toughest lotteries in the country. Aasgard Pass is a serious, exposed climb. Larch turn ~late Sept is the prize window. Bucket-list, not on-demand.'},
  drive:{time:'~13 hr',route:'I-5 north to Leavenworth, WA',flags:['Two-day drive each way','Core permit is the gate — apply in the spring lottery']},
  safety:['Aasgard Pass — steep, exposed, route-finding','Cold high nights','Goats habituated — store sweat/salt'],
  insider:['Apply the spring lottery annually; treat a hit as the trip of the year','Colchuck is the no-lottery backup and still world-class','Time it to the larches if you win'],
  pack:['Larch-season warm layers','Solid boots for Aasgard','Goat-proof food storage'],
  verify:['Core lottery result','Larch timing','Aasgard conditions']}},

/* ===================== SUMMER — CAR CAMPING ===================== */
{id:'lakesbasin',name:'Lakes Basin & Sierra Buttes',type:'car',region:'Tahoe Nat\'l Forest · Gold Lk',drive:4,len:'2–3 nts',miles:'day hikes',gain:'flexible',
 s:[5,4,3,3,5],wild:true,skinny:true,permit:'Reservable/FCFS',fish:'Wild & stocked, dozens of lakes',swim:'Sardine, Long, Gold ~',
 season:[7,8,9],peak:[7,8],epic:false,status:'queued',url:null,coord:[39.65,-120.65],
 blurb:'Sierra Buttes lookout, a basin full of swimmable lakes, hike-or-relax flexibility. Underrated.',
 d:{tag:'A basin packed with swimmable lakes under the Sierra Buttes — the most underrated car-camping zone in California.',
  over:['North of Truckee in the Lakes Basin Recreation Area, dozens of lakes sit within a short drive or hike of each other under the dramatic Sierra Buttes and its fire-lookout tower. Sardine, Sand Pond, Long, Gold and Salmon Lakes give you a different swim and a different fish every day.','It\'s the ideal flexible basecamp: real alpine scenery, hike-as-much-or-as-little-as-you-want, and the kind of place that stays under the radar despite being four hours away.'],
  why:{scenery:'Sierra Buttes over a lake-dense basin — punches way up.',fish:'Wild and stocked across dozens of lakes; trout everywhere.',wildlife:'Bear, deer, osprey, abundant birds.',bugs:'Open and breezy — manageable; better late summer.',water:'A swim a day — Sardine, Long, Gold, Sand Pond.'},
  route:{mode:'car',basecamp:'Sardine Lake, Salmon Creek, or Packsaddle campgrounds in the basin.',
   dayhikes:['Sierra Buttes Lookout — 5.1 mi, 1,571 ft, 4.9★ (stairs to the firetower, the view)','Sardine Lakes — 1.4 mi, easy lake stroll','Deer Lake — 3.6 mi, 823 ft to a swimmable gem','Frazier Falls — short, paved, scenic','Lakes Basin loop past Long, Silver, Round']},
  fish:{water:'Sardine, Gold, Salmon, Packer, Sand Pond',species:'Wild & stocked rainbow/brook',method:'Boat or float-tube the lakes; spinners and dries',season:'July–Sept (lakes open year-round)'},
  wild:['Black bear','Mule deer','Osprey','Bald eagle','Beaver'],
  water:{spots:['Sardine Lake','Sand Pond','Gold Lake','Long Lake'],skinny:'Quiet upper lakes (Upper Sardine, Long) for a private dip on a weekday.'},
  permit:{system:'Developed campgrounds (Sardine, Salmon Creek, Packsaddle) — reservable on recreation.gov + some FCFS.',cost:'Campground fees',where:'recreation.gov / FCFS',when:'Reserve summer weekends early',notes:'Sardine Lake Resort restaurant on-site. Sierra Buttes lookout stairs are exposed — not for vertigo.'},
  drive:{time:'~4 hr',route:'I-80 to Hwy 89 north to Hwy 49 / Gold Lake Hwy',flags:['Gold Lake Hwy seasonal at the top','Weekends busy — reserve']},
  safety:['Lookout stairs are airy','Bears in campgrounds — use lockers','Afternoon storms'],
  insider:['Do the Buttes lookout at sunrise to beat crowds and heat','Float-tube Gold Lake for the fishing','Sand Pond is the warm easy swim'],
  pack:['Float tube / inflatable','Bear locker discipline','Layers for cool nights'],
  verify:['Campground reservations','Gold Lake Hwy open','Fire restrictions']}},

{id:'junelake',name:'June Lake Loop',type:'car',region:'E. Sierra · Hwy 158',drive:5.5,len:'2–3 nts',miles:'day hikes',gain:'flexible',
 s:[4,4,2,3,4],wild:false,skinny:false,permit:'Reservable',fish:'Rush Ck + 4 lakes, holdover',swim:'Gull & Silver Lake',
 season:[7,8,9,10],peak:[9,10],epic:false,status:'queued',url:null,coord:[37.78,-119.07],
 blurb:'Four lakes on a loop, aspen blaze in October, Hot Creek wild-trout water 30 min south.',
 d:{tag:'Four lakes on a scenic loop, the best aspen blaze in California come October, and wild-trout creeks a short drive away.',
  over:['The June Lake Loop strings June, Gull, Silver and Grant Lakes along Highway 158 below the Sierra crest — an easy, comfortable Eastern Sierra basecamp with real services. It peaks in early October when the aspens light up gold against the granite.','The fishing is the draw: the four loop lakes plus Rush Creek hold stocked and holdover trout, and the famous wild-trout water of Hot Creek and the Owens is 30–45 minutes south.'],
  why:{scenery:'Lake loop under the crest; spectacular at aspen turn.',fish:'Four lakes + Rush Creek; wild Hot Creek/Owens nearby.',wildlife:'Deer, bear, waterfowl; less variety than wilder spots.',bugs:'Drier east side — moderate.',water:'Gull and Silver are the swims; lakes are coldish.'},
  route:{mode:'car',basecamp:'Silver Lake, Oh! Ridge, or Gull Lake campgrounds on the loop.',
   dayhikes:['Parker Lake · ~3.8 mi · 600 ft','Fern Lake / Yost Lake climbs','Rush Creek trail toward Agnew','Aspen drives in early October']},
  fish:{water:'June, Gull, Silver, Grant Lakes; Rush Creek; Hot Creek (30 min)',species:'Stocked + holdover; wild trout at Hot Creek/Owens',method:'Lakes from shore/boat; Hot Creek is a catch-and-release fly classic',season:'Lakes year-round; streams Apr 25–Nov 15 (Hot Creek special-reg, year-round)'},
  wild:['Mule deer','Black bear','Osprey','Waterfowl','Coyote'],
  water:{spots:['Gull Lake','Silver Lake'],skinny:'Not a skinny-dip spot — developed and busy; go for the fishing.'},
  permit:{system:'Developed campgrounds — reservable on recreation.gov.',cost:'Campground fees',where:'recreation.gov',when:'Reserve early, especially aspen season',notes:'Full services in June Lake village. Hot Creek nearby is fly-only, barbless, catch-and-release — and fishes all winter.'},
  drive:{time:'~5.5 hr',route:'US-395 to Hwy 158 (June Lake Loop)',flags:['Tioga shortcut seasonal — otherwise around via 395','Aspen-season weekends very busy']},
  safety:['Bears in campgrounds','Cold nights at altitude','395 is a long haul'],
  insider:['Time it to first week of October for aspens','Drive 30 min to fish Hot Creek for wild trout','Parker Lake is the best short hike'],
  pack:['Fly kit for Hot Creek','Warm layers','Camera for aspens'],
  verify:['Campground reservations','Aspen peak timing','Hot Creek access/regs']}},

{id:'bishopcreek',name:'Bishop Creek — Sabrina & South Lk',type:'car',region:'E. Sierra · Hwy 168',drive:6,len:'2–3 nts',miles:'day hikes',gain:'flexible',
 s:[5,5,3,3,4],wild:true,skinny:false,permit:'Reservable/FCFS',fish:'Wild + holdover, classic',swim:'Lake edges (cold)',
 season:[7,8,9,10],peak:[9,10],epic:false,status:'queued',url:null,coord:[37.21,-118.61],
 blurb:'13k peaks straight overhead, legendary trout creek, the best aspen color in California in early Oct.',
 d:{tag:'13,000-ft peaks straight overhead, a legendary trout creek, and arguably the best aspen color in the state.',
  over:['Bishop Creek climbs west out of Bishop into a wall of 13,000-ft peaks, splitting to Lake Sabrina and South Lake. The scenery is immediate and enormous; the trout fishing in the creek forks and lakes is some of the most storied in the Eastern Sierra.','Come the first two weeks of October, the canyon\'s aspens turn it into the best fall-color destination in California. Day-hike to the high lakes (Blue, Dingleberry, the Treasure Lakes) and fish your way back.'],
  why:{scenery:'A wall of high peaks over the creek; unreal at aspen turn.',fish:'Wild and holdover trout in the forks and high lakes — classic water.',wildlife:'Deer, bear, marmot, raptors.',bugs:'High and dry — manageable.',water:'High lakes are cold and stunning but more for fishing than swimming.'},
  route:{mode:'car',basecamp:'Sabrina, Bishop Park, or Four Jeffrey campgrounds in the canyon.',
   dayhikes:['Treasure Lakes (South Lake) · ~3.4 mi · 750 ft','Blue & Dingleberry Lakes (from Sabrina)','Lamarck Lakes · ~6 mi · 1,500 ft','Aspen color drive in early October']},
  fish:{water:'Bishop Creek (forks), Lake Sabrina, South Lake, high lakes',species:'Wild + stocked/holdover trout',method:'Creek dries and nymphs; lakes from shore/boat',season:'Streams Apr 25–Nov 15; lakes year-round'},
  wild:['Mule deer','Black bear','Yellow-bellied marmot','Clark\'s nutcracker','Golden eagle'],
  water:{spots:['Treasure Lakes','South Lake edges'],skinny:'Cold and somewhat trafficked — fish more than swim here.'},
  permit:{system:'Developed campgrounds — recreation.gov reservable + FCFS.',cost:'Campground fees',where:'recreation.gov / FCFS',when:'Aspen-season weekends fill — reserve',notes:'Day-hikes into John Muir Wilderness need no permit for day use. Bishop has full services 20 min down the hill.'},
  drive:{time:'~6 hr',route:'US-395 to Bishop, Hwy 168 (Line St) up the canyon',flags:['Long drive — make it 3 nights','Aspen weekends very busy']},
  safety:['Altitude on the day hikes','Bears','Cold nights'],
  insider:['First half of October for peak aspens','Treasure Lakes is the best day-hike','Fish the South Fork in the evening'],
  pack:['Fly/spin kit','Warm layers','Day pack for high-lake hikes'],
  verify:['Campground reservations','Aspen timing','Stream regs / closures']}},

{id:'lassencar',name:'Lassen — Summit & Butte Lake',type:'car',region:'Lassen NP',drive:4,len:'2–3 nts',miles:'day hikes',gain:'flexible',
 s:[4,3,4,3,4],wild:false,skinny:false,permit:'Reservable',fish:'Butte & Manzanita lakes',swim:'Summit Lake (swimmable!)',
 season:[7,8,9],peak:[7,8],epic:false,status:'queued',url:null,coord:[40.475,-121.42],
 blurb:'Cinder Cone, Bumpass Hell, bears everywhere, and a lake warm enough to swim laps in.',
 d:{tag:'Cinder cones, boiling mud, bears everywhere — and Summit Lake, warm enough to swim laps in.',
  over:['Lassen Volcanic packs a startling amount of variety into a small park: the boardwalk hydrothermal show at Bumpass Hell, the otherworldly Cinder Cone and Painted Dunes, a summit volcano you can hike, and Summit Lake — one of the few national-park lakes genuinely warm enough for comfortable swimming.','Wildlife is excellent (the park has a healthy bear population), the crowds are modest for an NP, and it\'s only four hours up I-5.'],
  why:{scenery:'Volcanic landscape — cinder cones, dunes, thermal basins.',fish:'Butte and Manzanita Lakes hold trout.',wildlife:'Strong bear/deer numbers; great birding; geology bonus.',bugs:'Forest lakes hold bugs early — fine by August.',water:'Summit Lake is the rare swimmable park lake.'},
  route:{mode:'car',basecamp:'Summit Lake (North/South) or Butte Lake campgrounds.',
   dayhikes:['Bumpass Hell · ~3.0 mi · 300 ft','Cinder Cone + Painted Dunes · ~4.0 mi · 800 ft','Lassen Peak summit (strenuous)','Kings Creek Falls · ~2.3 mi · 400 ft']},
  fish:{water:'Butte Lake, Manzanita Lake (C&R, barbless)',species:'Trout',method:'Float-tube Manzanita (fly, C&R); spinners at Butte',season:'July–Sept'},
  wild:['Black bear','Mule deer','Bald eagle','Steller\'s jay','Coyote'],
  water:{spots:['Summit Lake','Butte Lake'],skinny:'Developed park lakes — swim, but not a skinny-dip scene.'},
  permit:{system:'Developed NP campgrounds — reservable on recreation.gov; park entry fee.',cost:'Camp fee + park entry',where:'recreation.gov',when:'Reserve summer weekends',notes:'Manzanita Lake is fly-fishing, barbless, catch-and-release. Park road over the pass is seasonal.'},
  drive:{time:'~4 hr',route:'I-5 to Red Bluff, Hwy 36 to the south entrance (or 44 to north)',flags:['Main park road seasonal — confirm open','Entrance fee']},
  safety:['Stay on boardwalks at thermal areas','Bears — use lockers','Lassen Peak is exposed and strenuous'],
  insider:['Swim Summit Lake mid-day, hike Bumpass in the cool morning','Cinder Cone at sunrise for the Painted Dunes','Fly-fish Manzanita at dusk'],
  pack:['Swim gear','Park pass','Float tube for Manzanita'],
  verify:['Park road open','Campground reservations','Fire restrictions']}},

{id:'hatcreek',name:'Hat Creek & Burney Falls',type:'car',region:'Shasta-Cascade',drive:4.5,len:'2 nts',miles:'easy',gain:'flat',
 s:[3,5,3,3,3],wild:true,skinny:false,permit:'Reservable',fish:'Hat Ck wild-trout flyfishing mecca',swim:'Burney Falls pool',
 season:[6,7,8,9,10],peak:[6,7,9,10],epic:false,status:'queued',url:null,coord:[41.013,-121.652],
 blurb:'For the fly rod above all else — wild-trout riffles plus the "8th wonder," Burney Falls.',
 d:{tag:'A fly-fishing pilgrimage — California\'s most famous wild-trout riffle, plus the "eighth wonder," Burney Falls.',
  over:['Hat Creek\'s Wild Trout Section is hallowed ground for fly anglers: a spring-fed, glassy riffle holding wild rainbow and brown that have humbled better casters than us. Nearby Fall River and the Pit add more world-class water, and McArthur-Burney Falls — Teddy Roosevelt\'s "eighth wonder of the world" — is a 129-foot spring-fed cascade ten minutes away.','You come here primarily for the rod. Scenery is pretty rather than grand, but the fishing is unmatched, and Burney Falls is genuinely stunning.'],
  why:{scenery:'Pleasant forest/spring-creek country; Burney Falls is the showpiece.',fish:'The whole point — wild rainbow/brown on legendary spring water.',wildlife:'Deer, osprey, eagles, abundant birds.',bugs:'Moderate; spring-creek setting.',water:'Burney Falls pool; creeks more for fishing than swimming.'},
  route:{mode:'car',basecamp:'McArthur-Burney Falls Memorial SP campground, or Hat Creek campgrounds.',
   dayhikes:['Burney Falls loop · 1.3 mi · 150 ft','Pacific Crest Trail segments','Lake Britton shoreline','Subway Cave lava tube']},
  fish:{water:'Hat Creek Wild Trout Section, Fall River, Pit River, Lake Britton',species:'Wild rainbow & brown (Hat Creek); the gold standard',method:'Fly only on the Wild Trout Section — long leaders, small flies, technical',season:'Streams Apr 25–Nov 15; lakes year-round'},
  wild:['Mule deer','Osprey','Bald eagle','River otter','Great blue heron'],
  water:{spots:['Burney Falls pool','Lake Britton'],skinny:'Not a skinny-dip trip — Burney Falls is busy. This one\'s for the fishing.'},
  permit:{system:'State park / developed campgrounds — reservable (ReserveCalifornia / recreation.gov).',cost:'Camp fee',where:'reservecalifornia.com / recreation.gov',when:'Reserve summer weekends',notes:'Hat Creek Wild Trout Section: barbless, artificial flies/lures, special limits — read the regs. Fall River is largely private-access — research before you go.'},
  drive:{time:'~4.5 hr',route:'I-5 to Redding, Hwy 299 east to Burney',flags:['Straightforward paved access','Fall River access is limited/private']},
  safety:['Wading — felt soles/cleats and a staff','Smoke possible late summer'],
  insider:['Fish Hat Creek\'s riffle at the evening caddis hatch','Burney Falls at first light before the crowds','Lower Hat Creek is the technical, rewarding stretch'],
  pack:['Full fly kit + waders','Polarized glasses','Wading staff'],
  verify:['Hat Creek special regs','Fall River access','Camp reservations / smoke']}},

{id:'mccloud',name:'McCloud River Falls',type:'car',region:'Mt Shasta',drive:4.5,len:'3 nts',miles:'easy',gain:'flat',
 s:[4,5,3,3,5],wild:true,skinny:true,permit:'Reservable/FCFS',fish:'Wild trout, classic water',swim:'Three waterfalls, deep pools ~',
 season:[6,7,8,9,10],peak:[7,8],epic:false,status:'queued',url:null,coord:[41.20,-122.02],
 blurb:'Three waterfalls with swimming holes between them, Shasta looming, wild trout in the run. Booked: Oct 12 to 15, 2026.',
 d:{tag:'Three waterfalls with swimming holes strung between them, Mt Shasta looming, wild trout in the run. Booked, Oct 12 to 15.',
  over:['The McCloud River drops over Lower, Middle and Upper Falls in quick succession, each with deep emerald pools, connected by an easy riverside trail — the rare place where world-class fishing and genuinely great swimming sit side by side. Mt Shasta dominates the skyline above.','The lower McCloud below the falls is storied wild-trout water (the historic home of the McCloud River rainbow). Camp at Fowlers, swim the pools by day, fish the runs at dawn and dusk.'],
  why:{scenery:'Three waterfalls under Mt Shasta — and emerald pools throughout.',fish:'Wild trout in classic McCloud water below the falls.',wildlife:'Deer, osprey, eagle, river otter.',bugs:'River canyon — moderate.',water:'Deep swimming holes between three waterfalls — top-tier.'},
  route:{mode:'car',basecamp:'Fowlers Campground (on the river by Lower Falls).',
   dayhikes:['Falls Loop: Lower → Middle → Upper · ~3.8 mi','Lower McCloud River trail (fishing access)','Mt Shasta viewpoints','Squaw Valley Creek side trip']},
  fish:{water:'McCloud River (below the falls), Lower McCloud (Nature Conservancy access)',species:'Wild rainbow & brown (catch-and-release stretches)',method:'Fly — nymphs and dries; the Nature Conservancy reach is rotation-access C&R',season:'In October: general state rules on the upper river at Fowlers (five trout); below McCloud Dam it is catch and release, artificial lures with barbless hooks only'},
  wild:['Mule deer','Osprey','Bald eagle','River otter','American dipper'],
  water:{spots:['Middle Falls pool','Upper Falls pool','Lower Falls pool'],skinny:'Upstream of the busy Lower Falls — quieter pools work at dawn or on weekdays.'},
  permit:{system:'Fowlers Campground — recreation.gov reservable + FCFS.',cost:'Camp fee',where:'recreation.gov',when:'Season May 15 to Oct 15; reserve summer weekends',notes:'The Nature Conservancy\'s Lower McCloud Preserve has a limited daily-rod, catch-and-release access system — look it up if you want the legendary water. McCloud Ranger Station: 530-964-2184.'},
  drive:{time:'~4.5 hr',route:'I-5 to McCloud, Hwy 89 to the Fowlers / Falls access',flags:['Easy paved access','Lower McCloud access roads are rough']},
  safety:['Slippery rocks at the falls','Cold, strong currents — scout before jumping','Smoke possible late summer'],
  insider:['Middle Falls pool is the best swim','Fish the runs below Lower Falls early','Book the Nature Conservancy reach for the storied water'],
  pack:['Swim shoes','Fly kit','Camera (Shasta + falls)'],
  verify:['Campsite confirmation on the phone (recreation.gov)','Call the McCloud Ranger Station, 530-964-2184: is the piped water still on at Fowlers, and is a prescribed burn planned along Hwy 89 that week','Re-read the forecast Fri Oct 9','Nature Conservancy access process, before the drive down','The current CDFW regulations booklet before keeping a fish','Fishing license on the phone'],
  tidePlan:{status:'Booked · Oct 12 to 15, 2026',zoneLabel:'The day',summary:'Four days, three nights at Fowlers Campground on the upper McCloud, Mon Oct 12 to Thu Oct 15: the last nights of the campground season, which runs May 15 to Oct 15. Swim the pools, walk the falls, fish dawn and dusk. Conditions as read Sat Oct 3. The river is low and clear: 190 cfs at Ah-Di-Na on Oct 2 (the mid-October median there is about 223) and 252 cfs at 54 degrees above Shasta Lake (median about 320); water in the upper 40s below the dam. October Caddis are about to start and the browns are staging to spawn. Forest fire restrictions were reported lifted Oct 2, and prescribed burns are planned this fall along Hwy 89 east of McCloud, so smoke is possible. The forecast does not reach these dates yet: the week before is sunny, highs 86 to 90 and lows in the mid 40s, cooling Fri Oct 9 to 80 and 39; the Climate Prediction Center leans warmer than normal for Oct 11 to 17 with near-normal rain. Re-read it Fri Oct 9.',nights:[
   {label:'Night 1 · Mon Oct 12',camp:'Fowlers Campground',zone:'Drive up, set camp, Lower Falls at dusk',note:'About 4.5 hours by I-5 and Hwy 89 east from McCloud; fill the tank in Mount Shasta or McCloud. Fowlers sits on the river by Lower Falls, with piped drinking water in season: ask the ranger station whether it is still on this late. Food in the car or the site locker, never the tent: bears. Sunset 6:33pm; an evening walk down to Lower Falls and a first cast in the camp water.'},
   {label:'Night 2 · Tue Oct 13',camp:'Fowlers Campground',zone:'The three falls and the pools',note:'The riverside trail from camp reaches all three falls, about three miles round trip. Middle Falls in morning light, then the swim in the warm part of the day: the river runs cold and strong, so scout every pool before a jump. Dusk on the camp water: Blue Winged Olives, midges and small caddis in the evening, with October Caddis coming on. The upper river here carries no special gear rule.'},
   {label:'Night 3 · Wed Oct 14',camp:'Fowlers Campground',zone:'The lower river, if you want the storied water',note:'A day below McCloud Dam at Ah-Di-Na and the Nature Conservancy preserve. The access road is rough: drive slow, and confirm the Conservancy rod limit before the drive. In October it is catch and release, artificial lures with barbless hooks only, zero trout. Low clear water means a long leader, light tippet and a quiet approach; leave the browns on their redds alone. The shop picks (Ted Fay Oct 2, The Fly Shop Sep 29): a dry dropper, a Chubby Chernobyl over a small dark nymph; October Caddis adult and pupa; Pat\'s Rubberlegs; Parachute Adams 14 to 16; BWO 18.'}
  ],exit:'Day 4 · Thu Oct 15: a last morning on the water (sunrise 7:18am), break camp, home in about 4.5 hours. Oct 15 is the last reservable night of the Fowlers season, so the campground is closing behind you.'}}},

{id:'eastsierracar',name:'Rock Creek Lake',type:'car',region:'E. Sierra · Rock Ck Rd',drive:5.5,len:'2–3 nts',miles:'day hikes',gain:'flexible',
 s:[5,5,3,3,5],wild:true,skinny:false,permit:'Reservable',fish:'Wild brook & golden nearby',swim:'Rock Creek Lake',
 season:[7,8,9],peak:[7,8,9],epic:false,status:'queued',url:null,coord:[37.46,-118.74],
 blurb:'Drive-up basecamp at 9,700ft with Little Lakes Valley out the back door. Best of both worlds.',
 d:{tag:'A drive-up basecamp at 9,700 ft with Little Lakes Valley out the back door — the best of both worlds.',
  over:['Rock Creek Road climbs to one of the highest developed campgrounds in the Sierra, right on Rock Creek Lake, with the Mosquito Flat trailhead — and all of Little Lakes Valley — a few minutes up the road. You sleep at altitude with a car, then day-hike into genuinely world-class alpine.','It\'s the move when you want Little Lakes scenery and golden-trout fishing without the overnight permit, or when David wants a comfortable base. Full High Sierra at car-camping effort.'],
  why:{scenery:'9,700-ft basin with Little Lakes Valley next door.',fish:'Rock Creek + the wild brook/golden chain up the trail.',wildlife:'Bear, marmot, deer, bighorn habitat above.',bugs:'High and open — manageable.',water:'Rock Creek Lake plus the day-hike lakes up the valley.'},
  route:{mode:'car',basecamp:'Rock Creek Lake or East Fork campgrounds.',
   dayhikes:['Little Lakes Valley (no permit for day use)','Hilton Lakes','Mono Pass','Ruby Lake']},
  fish:{water:'Rock Creek, Rock Creek Lake, Little Lakes chain (day hike)',species:'Wild brook & golden (up high), stocked at the lake',method:'Creek dries; goldens in the upper Little Lakes',season:'Lakes year-round; streams Apr 25–Nov 15'},
  wild:['Black bear','Yellow-bellied marmot','Sierra bighorn (high)','Mule deer','Clark\'s nutcracker'],
  water:{spots:['Rock Creek Lake','Long Lake (day hike)'],skinny:'The lake is developed; for privacy, day-hike up to the quieter Little Lakes.'},
  permit:{system:'Developed campgrounds — recreation.gov reservable. Day hikes need no permit.',cost:'Camp fee',where:'recreation.gov',when:'Reserve summer weekends early — very popular',notes:'9,700 ft — acclimatize. Bear lockers; no food in cars. Rock Creek Lakes Resort café on-site.'},
  drive:{time:'~5.5 hr',route:'US-395 to Tom\'s Place, Rock Creek Rd up to the lake',flags:['High campground — cold nights','Books out fast for summer']},
  safety:['Altitude — ease in','Bears — use lockers','Afternoon storms on the day hikes'],
  insider:['Use it as a no-permit way to see Little Lakes Valley','Day-hike to the Gem Lakes for goldens','Café breakfast after a dawn fish'],
  pack:['Warm layers (9,700 ft)','Day pack + fishing kit','Bear-locker discipline'],
  verify:['Campground reservations (popular)','Snow early season','Fire restrictions']}},

{id:'steens',name:'Steens Mountain',type:'car',region:'Oregon · high desert',drive:9,len:'2–3 nts',miles:'day hikes',gain:'flexible',
 s:[5,4,4,3,4],wild:true,skinny:true,permit:'FCFS',fish:'Wild redband trout',swim:'Gorge streams ~',
 season:[7,8,9],peak:[7,8],epic:true,status:'queued',url:null,coord:[42.64,-118.58],
 blurb:'Mile-deep glacial gorges, wild horses, antelope, native redband trout. EPIC and empty.',
 d:{tag:'Mile-deep glacial gorges, wild horses, pronghorn, and native redband trout — EPIC, and almost entirely empty.',
  over:['Steens Mountain rises alone out of the southeast Oregon desert, a 50-mile fault block carved by glaciers into mile-deep gorges — Kiger, Big Indian, the Little Blitzen. A backcountry byway climbs nearly to the 9,700-ft summit, past wild-horse herds (the famous Kiger mustangs), pronghorn, and bighorn, with native redband trout in the gorge streams below.','It is one of the most spectacular and least-visited places in the West. The drive is long and the services nonexistent, which is exactly the point.'],
  why:{scenery:'Mile-deep glacial gorges and a desert sky-island — singular.',fish:'Native redband trout in the gorge creeks — wild and rare.',wildlife:'Wild horses, pronghorn, bighorn, raptors — exceptional variety.',bugs:'High desert — generally low.',water:'Gorge streams and the Donner und Blitzen below.'},
  route:{mode:'car',basecamp:'Page Springs, Fish Lake, or Jackman Park campgrounds (BLM).',
   dayhikes:['Kiger Gorge overlook','East Rim viewpoint (the big drop-off)','Wildhorse Lake · ~2.6 mi · 1,100 ft (steep)','Little Blitzen gorge']},
  fish:{water:'Donner und Blitzen River, Kiger/Little Blitzen creeks, Fish Lake',species:'Native redband trout (wild)',method:'Small dries and nymphs on the gorge creeks',season:'Check Oregon regs — generally summer'},
  wild:['Wild horses (Kiger mustangs)','Pronghorn antelope','Bighorn sheep','Golden eagle','Coyote'],
  water:{spots:['Wildhorse Lake','Donner und Blitzen River','Fish Lake'],skinny:'Wildhorse Lake below the summit is remote and rarely visited.'},
  permit:{system:'BLM campgrounds — mostly FCFS; the Steens Loop Road byway is free.',cost:'Camp fee (small)',where:'BLM Steens / FCFS',when:'No reservation needed — go midweek and it\'s empty',notes:'Steens Loop Road is high, rough gravel — high clearance recommended; closed by snow into summer. No services — carry everything, including fuel and water.'},
  drive:{time:'~9 hr',route:'US-395 north into Oregon to Burns, then Frenchglen / Steens Loop Rd',flags:['Loop road seasonal & rough','No fuel/services for many miles — fill up at Frenchglen']},
  safety:['Remote — satellite messenger, extra fuel/water','High, exposed summit road','Sudden weather'],
  insider:['Drive the loop top-down at dawn for the gorges in low light','Hike to Wildhorse Lake from near the summit','Watch for Kiger mustangs on the lower byway'],
  pack:['Extra fuel + water','Satellite messenger','High-clearance vehicle'],
  verify:['Steens Loop Road open (snow)','Oregon fishing regs','Fuel stops']}},

/* ===================== COAST — SHOULDER / YEAR-ROUND ===================== */
{id:'lostcoast',name:'Lost Coast — Mattole → Black Sands',type:'backpack',region:'King Range · BLM',drive:4,len:'3 nts',miles:'~8/day (sand)',gain:'1,522 ft total',
 s:[5,2,5,4,5],wild:false,skinny:true,permit:'King Range permit ✦',fish:'Surf only',swim:'Ocean + creeks, naked beach camp ~',
 season:[7,8,9,10,11],peak:[9,10],epic:true,status:'queued',url:null,coord:[40.293,-124.353],
 blurb:'Elephant seals, black bears, rattlers, whales — wildlife maxed. Tide-gated, best in low-bug fall. EPIC.',
 d:{tag:'The most undeveloped coast in the Lower 48 — mountains straight out of the surf, wildlife maxed, naked beach camping. EPIC.',
  over:['Too rugged for Highway 1, the King Range\'s Lost Coast Trail runs ~24.6 miles of wild shoreline from Mattole Beach to Black Sands, with King Peak rising 4,088 ft just three miles from the waves. You walk beaches and bluffs past an elephant-seal colony at Punta Gorda, find campsites by creek mouths, and most nights have a stretch of empty beach to yourself.','For your wildlife criterion it\'s the single best trip on the list — elephant seals, sea lions, black bears, bald eagles, rattlesnakes, and gray whales offshore. The whole thing is tide-gated: three sections are impassable at high tide, so the schedule is dictated by a tide chart, not your legs.'],
  why:{scenery:'Mountains rising straight from the surf — singular in the Lower 48.',fish:'Surf fishing only — no trout. The one low score.',wildlife:'Maxed — seals, sea lions, bears, eagles, rattlers, whales.',bugs:'Coastal breeze keeps it low; fall is best.',water:'Ocean + creek mouths; legendary naked beach camping.'},
  route:{mode:'backpack',options:[
   {name:'Mattole → Black Sands (N→S)',stat:'3 nts · 25.4 mi · 1,522 ft (4.9★)',text:'Classic one-way, north to south with the prevailing wind at your back. 25.4 mi point-to-point per AllTrails; plan ~8 mi/day on soft sand (roughly half your normal pace). Tides dictate when you move through the three impassable zones.'}]},
  fish:{water:'Surf zone',species:'Surfperch / rockfish (surf casting only)',method:'Surf rod — this is not a trout trip',season:'Year-round surf'},
  wild:['Northern elephant seal (Punta Gorda colony)','Black bear (tracks everywhere)','California sea lion','Bald eagle','Rattlesnake','Gray whale (offshore, migration)'],
  water:{spots:['Creek-mouth pools','Open beaches','The surf (cold)'],skinny:'Empty beaches between campsites — naked beach camping is the whole appeal. Privacy is easy.'},
  permit:{system:'King Range Wilderness Permit (BLM) via recreation.gov — required year-round for overnight.',cost:'$12/person special-area fee',where:'recreation.gov (advance) + limited walk-ups (3/day) at the King Range Visitor Center',when:'Advance reservations release ahead and sell out fast for May–Sept weekends; shoulder season (late Sept–Oct) is easier AND less foggy/buggy',notes:'CHECK THE TIDE TABLE BEFORE BOOKING — 3 zones (Punta Gorda–Sea Lion Gulch, Randall Ck, Miller Flat–Gitchell Ck) are impassable at high tide, and some dates have no passable window. Hard-sided bear canister required. Shuttle needed (~2 hr between trailheads) — park at Black Sands, shuttle to Mattole.'},
  drive:{time:'~4 hr to Shelter Cove',route:'US-101 to Garberville/Redway, Shelter Cove; shuttle to Mattole',flags:['Mattole Rd is one-lane, prone to washouts, no cell, car break-ins reported — park at Shelter Cove instead','Book a shuttle service in advance']},
  safety:['Tides can trap and drown — carry a tide chart, move on outgoing tides ≤3 ft','Sneaker waves — never turn your back on the surf','Seismically active (Mendocino Triple Junction) — if a strong quake hits on the beach, move to high ground','No BLM search & rescue — full self-sufficiency'],
  insider:['Go late September / October — fewer people, less fog, fewer bugs, easier permits','Camp at Big Flat for the iconic stretch','Time the impassable zones to the morning low tide and relax the rest of the day'],
  pack:['Hard-sided bear canister (required)','Printed tide chart for your dates','Broken-in waterproof boots','Gaiters, mid height, on all day','Sandals for creek crossings','Blister kit: Leukotape and hydrocolloid bandages','Satellite messenger','Surf rod (optional)'],
  verify:['Re-pull Shelter Cove (NOAA #9418024) tides for your exact dates before booking (deal-breaker)','King Range permit availability','Shuttle booking','Current impassable dates list'],
  tidePlan:{status:'Booked · Oct 24 to 27, 2026',summary:'Drive up Fri Oct 23 and sleep near Shelter Cove; the 7:00 AM shuttle Saturday from the Black Sands trailhead top lot (be there 6:45), at Mattole about 9:00. Mattole trailhead in, Black Sands Beach out. About 24.6 mi, 3 nights, north to south. Afternoon tide windows all four days, so each crossing day the rule is simple: reach the impassable zone as the tide opens it, not after.',nights:[
   {label:'Night 1 · Oct 24',camp:'Randall Creek',zone:'Randall-Spanish-Big Creeks',note:'Cross Zone 2 (Sea Lion Gulch to Randall, 4 mi, under 2.5 ft) in the afternoon window. Under 2.5 ft from about 2:05 PM, low +0.2 ft at 4:55 PM (NOAA, re-pulled Oct 4). Be walking from Mattole by 11:00 AM; entering the zone after 3:00 PM means camping up Cooskie Creek instead. Camp just past the cliffs.'},
   {label:'Night 2 · Oct 25',camp:'Big Flat',zone:'Big Flat-Miller Flat',note:'Tide-free day, about 8.5 mi from Randall (mile 8.5) to Big Flat (near mile 17) with no impassable zone between. Big Flat stages you at the mouth of Zone 3.'},
   {label:'Night 3 · Oct 26',camp:'Gitchell Creek',zone:'South Coast',note:'Cross Zone 3 (Miller Flat to Gitchell, about 4.5 mi, under 3 ft) in the afternoon window. Under 3 ft from about 2:50 PM, low -1.0 ft at 6:19 PM right at sunset (6:22 PM), so you cross on falling water and cannot be trapped by a rising tide. Be at Miller Flat by 2:30 PM and carry a headlamp for the last stretch.'}
  ],exit:'Day 4 · Oct 27: Gitchell to Black Sands Beach, about 3 mi, tide-free. Walk at first light: the tide climbs to 7.0 ft at 11:55 AM, the highest of the trip. If the light ran out Monday and camp was Shipman or Buck Creek, the zone reopens about 3:30 PM. There is no camping at the Black Sands trailhead itself.'},
  tideNote:'If the dates ever shift, these are the other passable windows for the Mattole to Black Sands traverse from Shelter Cove predictions (NOAA #9418024, MLLW). The rule never changes: cross the three impassable zones only when the tide is under its threshold (Zone 2 under 2.5 ft, Zone 3 under 3 ft), in daylight, on a falling tide. Dates are trip entry dates. Re-pull NOAA for your exact days before booking.',
  tideWindows:[
   {when:'Aug 12 to Aug 14 entry',tier:'Top pick',tide:'Deepest minus tides of the year: morning lows to -1.2 ft around 5:50 to 6:30 AM; sub-3 ft window from sunrise to about 10 AM',note:'The sooner option, and the biggest surf margin of any window. Wide morning windows let you clear both zones early and camp relaxed. Good run Aug 12 to 17.'},
   {when:'Oct 8 entry (Oct 8 to 11)',tier:'Best season',tide:'Afternoon windows about 2:00 to 6:45 PM; lows +0.9 down to 0 ft in late afternoon',note:'Shoulder-season sweet spot the Insider notes call for: fewer people, less fog, easier permits. Crossings are afternoon, so hit each zone early-to-mid afternoon and reach camp by dusk.'}
  ]}},

{id:'pointreyes',name:'Point Reyes — Wildcat & Coast Camp',type:'backpack',region:'Marin · National Seashore',drive:1.5,len:'1–2 nts',miles:'~6/day',gain:'≤1,200/day',
 s:[4,2,5,4,3],wild:false,skinny:true,permit:'Reservable ✦',fish:'None (ocean)',swim:'Alamere Falls, Bass Lk, ocean ~',
 season:[1,2,3,4,5,6,7,8,9,10,11,12],peak:[9,10,11,4,5],epic:false,status:'queued',url:null,coord:[38.04,-122.85],
 blurb:'Tule elk, bobcats, whales (winter), a waterfall onto the beach — and it\'s an hour and a half away.',
 d:{tag:'Tule elk, bobcats, whales, and a waterfall pouring onto the beach — backcountry camping 90 minutes from home.',
  over:['Point Reyes National Seashore is the closest real backcountry you have, and it\'s a year-round one. The hike-in camps — Wildcat, Coast, Sky, Glen — put you on bluffs and beaches with tule elk on the ridges, bobcats in the grasslands, and gray whales offshore in winter. Wildcat camp sits a short walk from Alamere Falls, a rare "tidefall" that drops straight onto the sand.','It\'s the perfect quick overnight: gettable permits, no altitude, real wildlife, and ocean swimming (cold) plus freshwater at Bass Lake.'],
  why:{scenery:'Bluffs, beaches, lagoons, a beachfront waterfall.',fish:'No trout — ocean only. Go for wildlife, not the rod.',wildlife:'Tule elk, bobcat, gray whale (winter), elephant seals, raptors — superb.',bugs:'Coastal breeze keeps it low most of the year.',water:'Alamere Falls, Bass Lake (freshwater swim), ocean (cold).'},
  route:{mode:'backpack',options:[
   {name:'Wildcat Camp + Alamere',stat:'1–2 nts · 15.0 mi RT · 2,316 ft (4.8★)',text:'Palomarin or Bear Valley to Wildcat; camp above the beach, walk to Alamere Falls and swim Bass Lake on the way.'},
   {name:'Coast/Sky loop',stat:'2 nts',text:'Link Coast and Sky camps for a bluff-and-forest loop with big ocean views.'}]},
  fish:{water:'Ocean (no freshwater trout)',species:'—',method:'—',season:'—'},
  wild:['Tule elk','Bobcat','Gray whale (Dec–Apr)','Northern elephant seal','Coyote','Raptors'],
  water:{spots:['Bass Lake (freshwater swim)','Alamere Falls','Ocean beaches'],skinny:'Bass Lake is the classic quiet freshwater dip; weekday beaches are empty.'},
  permit:{system:'Point Reyes backcountry camping permit (recreation.gov) — required, reservable.',cost:'$30 per night for a standard site (up to 6 people); $90 per night for a group site (7 to 25); half off standard sites with a Senior or Access pass.',where:'recreation.gov',when:'Reservable up to ~3 months ahead; weekends book early',notes:'Wood and charcoal fires are prohibited in all four hike-in camps; gas stoves or canned heat only. Each camp has a faucet, usually potable; treat it anyway. Keep distance from elk and seals.'},
  drive:{time:'~1.5 hr',route:'Hwy 1 to Olema / Bear Valley or Palomarin (Bolinas)',flags:['Palomarin road is rough dirt','Fog common — bring layers']},
  safety:['Cold ocean + rip currents — wade, don\'t swim out','Ticks in the grass (Lyme) — check yourself','Keep back from tule elk in rut (fall)'],
  insider:['Winter for whales and empty trails','Swim Bass Lake on the way to Wildcat','Time Alamere Falls for low tide to walk the beach'],
  pack:['Layers (fog/wind)','Tick check kit','Water/filter'],
  verify:['Backcountry permit for your dates','Palomarin road condition','Elk rut timing (fall)']}},

{id:'bigsur',name:'Big Sur — Ventana & the River',type:'car',region:'Los Padres · Hwy 1',drive:2.5,len:'2 nts',miles:'day hikes',gain:'flexible',
 s:[5,2,3,3,4],wild:false,skinny:true,permit:'Reservable',fish:'Light',swim:'Big Sur River gorge pools ~',
 season:[1,2,3,4,5,9,10,11,12],peak:[10,11,4,5],epic:false,status:'queued',url:null,coord:[36.25,-121.78],
 blurb:'Redwoods meeting surf, river pools in the gorge, off-season quiet. Skip the summer crush.',
 d:{tag:'Redwoods meeting the surf, river pools in the gorge, and blissful off-season quiet. Skip the summer crush.',
  over:['Big Sur is the iconic California coast — redwoods running down to the Pacific, the Santa Lucia range plunging into surf — and it\'s genuinely better in the off-season, when the Highway 1 crowds thin and the Big Sur River runs full through Pfeiffer\'s gorge pools.','Base at Pfeiffer Big Sur or a Los Padres campground, swim the river gorge, hike the redwood canyons and coastal bluffs, and watch for condors overhead. Two and a half hours from home for one of the most beautiful coastlines on earth.'],
  why:{scenery:'Redwoods, surf, and the Santa Lucia plunge — iconic.',fish:'Light — the river\'s steelhead run is closed; go for the place.',wildlife:'California condor, deer, sea otters offshore, bobcat.',bugs:'Coastal — low.',water:'Big Sur River gorge pools; cold but swimmable.'},
  route:{mode:'car',basecamp:'None of these is open as of Oct 4, 2026: Pfeiffer Big Sur is closed until further notice for the Timber and Plaskett Fires, Kirk Creek (and nearby Plaskett Creek) have been closed since August, and the Bottchers Gap road is closed by forest order through Jan 31, 2027. Confirm a reopened campground before booking this trip.',
   dayhikes:['Pfeiffer Falls / Valley View loop · ~2.0 mi · 650 ft','Big Sur River gorge pools','Andrew Molera bluff loop','Partington Cove']},
  fish:{water:'Big Sur River (limited)',species:'—',method:'—',season:'Steelhead closed — not a fishing trip'},
  wild:['California condor','Mule deer','Sea otter (offshore)','Bobcat','Gray whale (migration)'],
  water:{spots:['Big Sur River gorge pools','Pfeiffer Beach (surf)'],skinny:'Upstream gorge pools off-season and midweek can be private — that\'s the dip.'},
  permit:{system:'State park / Los Padres campgrounds — reservable (ReserveCalifornia / recreation.gov).',cost:'Camp fee',where:'reservecalifornia.com / recreation.gov',when:'Off-season midweek is easy; summer weekends are a scramble',notes:'Check Highway 1 status — slides periodically close sections. Pfeiffer Beach access road is narrow with a separate fee.'},
  drive:{time:'~2.5 hr',route:'Hwy 1 south through Carmel to Big Sur',flags:['Hwy 1 slide closures — check Caltrans before you go','Summer = gridlock; off-season = bliss']},
  safety:['Cold water + currents at the beaches','Poison oak in the canyons','Hwy 1 fog and cliffs — drive carefully'],
  insider:['Go October–November or April–May for quiet and full river','The gorge pools are in the closed state park this winter; swim only once Pfeiffer Big Sur reopens.','Andrew Molera at sunset for condors'],
  pack:['Swim shoes','Layers','Caltrans Hwy 1 check'],
  verify:['Highway 1 open (slides)','Campground reservations','River flow for pools']}},

{id:'mendocino',name:'Mendocino Coast — Russian Gulch',type:'car',region:'Mendocino',drive:3.5,len:'2 nts',miles:'easy',gain:'flat',
 s:[4,2,3,4,3],wild:false,skinny:false,permit:'Reservable',fish:'Light',swim:'Coves, waterfall, headlands',
 season:[3,4,5,6,9,10,11],peak:[5,10],epic:false,status:'queued',url:null,coord:[39.31,-123.80],
 blurb:'Sea-tunnel blowhole, fern canyons, dramatic headlands. A soft-landing coastal weekend.',
 d:{tag:'A sea-tunnel blowhole, fern canyons, and dramatic headlands — the soft-landing coastal weekend.',
  over:['The Mendocino coast trades drama for charm: wave-cut headlands, hidden coves, fern-filled canyons, and the famous Russian Gulch "Punch Bowl," a collapsed sea cave where surf surges through a tunnel into an inland blowhole. It\'s a relaxed, scenic basecamp two-plus hours up the coast.','Hike the headland trails, walk to the 36-foot waterfall in the fern canyon, explore the Victorian village of Mendocino, and watch for whales offshore. Low effort, high reward.'],
  why:{scenery:'Headlands, coves, the Punch Bowl blowhole, fern canyons.',fish:'Light — abalone/rock fishing historically; check current regs.',wildlife:'Gray whale (migration), harbor seals, ospreys, deer.',bugs:'Coastal — low.',water:'Coves and the ocean (cold); waterfall in the canyon.'},
  route:{mode:'car',basecamp:'Van Damme SP in winter: the Russian Gulch campground is closed for the winter and reservable only May through Labor Day.',
   dayhikes:['Russian Gulch headland + Punch Bowl','Part of the Russian Gulch Fern Canyon Trail is closed (the park does not say which section); confirm the waterfall is reachable before you count on it.','Van Damme Fern Canyon','Mendocino Headlands + village']},
  fish:{water:'Ocean / coves',species:'—',method:'Check current ocean regs',season:'—'},
  wild:['Gray whale (Dec–Apr)','Harbor seal','Osprey','Black-tailed deer','Pelicans'],
  water:{spots:['Russian Gulch cove','Van Damme beach'],skinny:'Cold and fairly public — this one\'s for the scenery, not the dip.'},
  permit:{system:'State park campgrounds — reservable (ReserveCalifornia).',cost:'Camp fee',where:'reservecalifornia.com',when:'Russian Gulch campground: May through Labor Day only. Van Damme: year-round, up to six months ahead, with a few first-come sites.',notes:'Mendocino village (food, coffee) is minutes away. Whale-watching peaks in the winter/spring migration.'},
  drive:{time:'~3.5 hr',route:'US-101 to Hwy 128 through Anderson Valley to Hwy 1',flags:['Hwy 128 is a winding 2-lane','Foggy summers — spring/fall are clearer']},
  safety:['Cold water, strong surf — stay off slick rocks','Fog','Poison oak in canyons'],
  insider:['Time the Punch Bowl for a big swell','Stop in Anderson Valley wineries on the 128 drive','Spring for wildflowers on the headlands'],
  pack:['Layers','Binoculars (whales)','Rain shell'],
  verify:['Campground reservations','Ocean fishing regs (if any)','Hwy 128/1 conditions']}},

/* ===================== INLAND GREEN-SEASON — FALL/WINTER/SPRING ===================== */
{id:'henrycoe',name:'Henry Coe — China Hole',type:'backpack',region:'Santa Clara foothills',drive:1.5,len:'1–2 nts',miles:'~8/day',gain:'≤2,500/day',
 s:[3,2,5,3,3],wild:false,skinny:true,permit:'Self-register',fish:'Pond bass/bluegill',swim:'China Hole swimming pools ~',
 season:[10,11,12,1,2,3,4,5],peak:[3,4],epic:false,status:'queued',url:null,coord:[37.19,-121.42],
 blurb:'Closest real wilderness you have. Wild pigs, bobcats, tarantulas, rattlers; green and flowing in winter/spring.',
 d:{tag:'The closest real wilderness you have — wild pigs, bobcats, tarantulas, rattlers — green and flowing in the cool months.',
  over:['Henry W. Coe is the largest state park in Northern California and, an hour and a half from home, your most accessible true backcountry. In summer it\'s a brutal oven; from late fall through spring it transforms — green hills, running creeks, and a wildlife roster (wild pigs, bobcats, golden eagles, tarantulas in fall, rattlesnakes) richer than most alpine trips.','China Hole, a series of deep swimming pools on the Middle Fork Coyote Creek, is the classic overnight destination — a steep down-and-back that rewards you with private green pools.'],
  why:{scenery:'Rolling oak-and-grass wilderness; green and wildflowered in spring.',fish:'Bass and bluegill in the ponds — not trout, but fun.',wildlife:'Wild pig, bobcat, golden eagle, tarantula, rattlesnake — top variety.',bugs:'Cool-season trips dodge the worst; ticks present.',water:'China Hole pools (seasonal) — your swimming-hole reward.'},
  route:{mode:'backpack',options:[
   {name:'China Hole loop',stat:'1 nt · 10.4 mi · 1,837 ft (4.6★)',text:'Headquarters down to China Hole via the Manzanita/Madrone Soda Springs route; camp by the pools, climb out the next day. The climb back is the work.'},
   {name:'Loop via Los Cruzeros',stat:'2 nts · 12.2 mi · 1,692 ft',text:'Extend to Los Cruzeros / the Narrows for more creek and solitude.'}]},
  fish:{water:'Coyote Creek pools, Coe ponds (Mississippi, Kelly)',species:'Largemouth bass, bluegill',method:'Light spinning / small poppers in the ponds',season:'Cool season; ponds best spring'},
  wild:['Wild pig','Bobcat','Golden eagle','Tarantula (fall)','Western rattlesnake','Tule elk (nearby)'],
  water:{spots:['China Hole','The Narrows'],skinny:'China Hole\'s deeper pools are secluded midweek — skinny-dip grade when the creek runs.'},
  permit:{system:'Henry Coe SP backcountry — self-register permit at park HQ.',cost:'$5 per person per night plus $8 per vehicle per night at Coe Ranch ($6 at Hunting Hollow).',where:'Park HQ self-register (Coe Ranch entrance)',when:'No quota — register on arrival',notes:'Carry/treat all water — sources are seasonal and can be dry by late spring. Brutal in summer; this is a Oct–May trip. Watch for ticks and rattlesnakes.'},
  drive:{time:'~1.5 hr',route:'US-101 to Morgan Hill, East Dunne Ave to Coe Ranch HQ',flags:['East Dunne Ave is a steep, winding climb','Summer heat is dangerous — avoid Jun–Sep']},
  safety:['Carry plenty of water — sources unreliable','Ticks (Lyme) — check often','Rattlesnakes on warm trails','The climb out of China Hole is steep in heat'],
  insider:['Go after the first good rains for running creeks and green hills','Spring for wildflowers; fall for tarantula migration','Camp at the pools, swim at dawn'],
  pack:['Extra water + filter','Tick kit','Sun protection (exposed ridges)'],
  verify:['Creek/pool water levels (seasonal)','Fire restrictions (fall)','HQ hours for self-register']}},

{id:'pinnacles',name:'Pinnacles — Talus Caves & Spires',type:'car',region:'Pinnacles NP',drive:2,len:'2 nts',miles:'day hikes',gain:'flexible',
 s:[4,1,4,3,1],wild:false,skinny:false,permit:'Reservable',fish:'None',swim:'Reservoir (no swim)',
 season:[10,11,12,1,2,3,4,5],peak:[3,4],epic:false,status:'queued',url:null,coord:[36.49,-121.18],
 blurb:'California condors overhead, talus caves below, volcanic spires to scramble. A cool-season gem.',
 d:{tag:'California condors overhead, talus caves below, volcanic spires to scramble — a cool-season gem two hours away.',
  over:['Pinnacles protects the eroded remnant of an ancient volcano: a maze of rock spires, scramble trails, and two talus caves formed by boulders wedged in narrow canyons. It\'s one of the best places in the world to see California condors, which roost on the High Peaks.','Like Coe, it\'s a cool-season park — summer is punishing — but from fall through spring it\'s superb: a comfortable campground, dramatic geology, and the thrill of a 9-foot-wingspan condor cruising overhead.'],
  why:{scenery:'Volcanic spires and talus caves — genuinely unusual.',fish:'None — the one true zero.',wildlife:'California condor (a headline sighting), bats in the caves, bobcat.',bugs:'Cool season is comfortable.',water:'Reservoir on the loop — no swimming. Bring your own fun.'},
  route:{mode:'car',basecamp:'Pinnacles Campground (east side).',
   dayhikes:['High Peaks loop · ~5.3 mi · 1,425 ft (condors)','Bear Gulch Cave + Reservoir · ~2.2 mi','Balconies Cave','Condor Gulch overlook']},
  fish:{water:'—',species:'—',method:'—',season:'—'},
  wild:['California condor','Townsend\'s big-eared bat (caves)','Bobcat','Prairie falcon','Tarantula (fall)'],
  water:{spots:['Bear Gulch Reservoir (no swim)'],skinny:'Not a water trip — come for rock and condors.'},
  permit:{system:'Pinnacles Campground — reservable on recreation.gov; park entry fee.',cost:'Tent site $44 a night through Mar 11, 2027 (plus $12 on weekend nights), $48 from Mar 12; entrance $30 per vehicle, good seven days.',where:'recreation.gov',when:'Reserve cool-season weekends',notes:'Bring a headlamp for the talus caves. Caves close seasonally for bat protection — check status. There is a campground pool (seasonal).'},
  drive:{time:'~2 hr',route:'US-101 to Hwy 25 to the east entrance',flags:['East and west entrances do NOT connect by road','Summer heat — avoid Jun–Sep']},
  safety:['Caves require a headlamp; can flood after rain','High Peaks cut steps are exposed','Heat in shoulder months'],
  insider:['Hike High Peaks early for condors on the morning thermals','Do Bear Gulch Cave when it\'s open','Spring for wildflowers among the spires'],
  pack:['Headlamp (caves)','Sturdy shoes for cut steps','Sun protection'],
  verify:['Cave open/closed status (bats)','Campground reservations','Entrance side (east for camping)']}},

{id:'carrizo',name:'Carrizo Plain — Soda Lake & Bloom',type:'car',region:'San Luis Obispo Co.',drive:4,len:'1–2 nts',miles:'easy',gain:'flat',
 s:[5,1,5,4,1],wild:false,skinny:false,permit:'Dispersed/FCFS',fish:'None',swim:'None (dry lakebed)',
 season:[12,1,2,3,4],peak:[2,3],epic:false,status:'queued',url:null,coord:[35.19,-119.79],
 blurb:'California\'s Serengeti — pronghorn, elk, kit fox, darkest skies in the state, super-bloom in spring.',
 d:{tag:'California\'s Serengeti — pronghorn, elk, kit fox, the darkest skies in the state, and the state\'s best super-bloom.',
  over:['Carrizo Plain National Monument is a vast, roadless grassland straddling the San Andreas Fault, with the alkali flat of Soda Lake at its center. It\'s the best place in California to see pronghorn and tule elk, kit fox and sandhill cranes, under some of the darkest night skies in the state.','In a good rain year, late February through March, the surrounding hills erupt into one of the most spectacular wildflower super-blooms anywhere. There\'s no water to swim and no trout — this is a scenery, wildlife, and stargazing trip, and an unforgettable one.'],
  why:{scenery:'Vast grassland, Soda Lake, San Andreas scarp, super-bloom hills.',fish:'None — bring it for the eyes, not the rod.',wildlife:'Pronghorn, tule elk, kit fox, sandhill crane — exceptional.',bugs:'Cool, dry, breezy — low.',water:'None — Soda Lake is a dry alkali flat.'},
  route:{mode:'car',basecamp:'Selby or KCL primitive campgrounds (BLM, FCFS), or dispersed.',
   dayhikes:['Soda Lake boardwalk + overlook','Painted Rock (guided/permit, seasonal closures)','Wildflower hills (Temblor & Caliente ranges in bloom)','Night-sky viewing']},
  fish:{water:'—',species:'—',method:'—',season:'—'},
  wild:['Pronghorn antelope','Tule elk','San Joaquin kit fox','Sandhill crane (winter)','Golden eagle'],
  water:{spots:['Soda Lake (dry — do not enter when wet)'],skinny:'No water. This is a stars-and-wildlife trip.'},
  permit:{system:'BLM primitive campgrounds (Selby, KCL) — FCFS; dispersed camping allowed.',cost:'Free / minimal',where:'BLM Carrizo Plain — FCFS',when:'No reservation; bloom-season weekends get busy',notes:'NO services, NO water, NO cell — carry everything. Roads turn to impassable mud when wet. Painted Rock has seasonal raptor-nesting closures.'},
  drive:{time:'~4 hr',route:'US-101 to Hwy 58 (Santa Margarita) or via Hwy 166 to Soda Lake Rd',flags:['Soda Lake Rd is dirt — impassable when wet','No fuel/water for many miles']},
  safety:['No water/services — full self-sufficiency','Mud after rain can strand vehicles','Extreme dark — navigate carefully at night'],
  insider:['Watch the bloom reports (Feb–Mar) and go when it pops','Stay for the stars — it\'s a certified dark-sky-grade plain','Dawn for pronghorn and elk on the flats'],
  pack:['All your water','Full fuel','Telescope/binoculars + star chart'],
  verify:['Bloom status (Feb–Mar)','Road conditions (dry)','Painted Rock closures']}},

{id:'alabamahills',name:'Alabama Hills & the Owens',type:'car',region:'Lone Pine · E. Sierra',drive:7.5,len:'2–3 nts',miles:'flexible',gain:'flexible',
 s:[5,4,3,4,3],wild:true,skinny:false,permit:'Free camping permit; designated sites only, first come',fish:'Lower Owens — year-round',swim:'Owens dips, Diaz Lake',
 season:[9,10,11,12,1,2,3,4,5],peak:[10,11,3,4],epic:false,status:'queued',url:null,coord:[36.61,-118.12],
 blurb:'Rock arches framing Mt Whitney, free camping at designated sites with a permit, and a tailwater an hour north that fishes all winter.',
 d:{tag:'Rock arches framing Mt Whitney, free dispersed camping under the Sierra crest, and a tailwater that fishes all winter.',
  over:['The Alabama Hills are a surreal jumble of rounded granite outcrops and natural arches at the foot of Lone Pine, with Mt Whitney and the entire Sierra crest as a backdrop — the most photogenic free dispersed camping in California. It\'s a year-round high-desert basecamp that comes into its own in fall, winter and spring when the high country is closed.','Crucially for the cold months: the Lower Owens wild trout tailwater runs about 13 miles from Pleasant Valley Dam to Five Bridges near Bishop, roughly 65 miles north of Lone Pine; it is a day trip from this camp, not the river below town, so this is one of the few trips that keeps wild-ish trout on the menu December through March.'],
  why:{scenery:'Granite arches framing Mt Whitney — iconic, and free to camp in.',fish:'Lower Owens tailwater fishes year-round — the winter trout option.',wildlife:'Deer, coyote, jackrabbit, raptors; bighorn on the crest.',bugs:'High desert — low.',water:'Owens River dips, Diaz Lake; not a swimming destination per se.'},
  route:{mode:'car',basecamp:'Signed designated sites in the Alabama Hills (free BLM camping permit required, first come, 14 days per calendar year) or Tuttle Creek Campground ($12, first come, open all year); Diaz Lake is an Inyo County campground nearby.',
   dayhikes:['Mobius Arch loop · 0.6 mi (Whitney through the arch)','Movie Road auto tour','Whitney Portal day hike (lower)','Lone Pine Lake (if open)']},
  fish:{water:'Lower Owens River (tailwater), Pleasant Valley Reservoir, Diaz Lake',species:'Wild & holdover brown/rainbow (Lower Owens year-round special-reg)',method:'Nymphing the Lower Owens; technical winter fishing',season:'Lower Owens fishes year-round under special regs; lakes year-round'},
  wild:['Mule deer','Coyote','Black-tailed jackrabbit','Golden eagle','Sierra bighorn (crest)'],
  water:{spots:['Owens River','Diaz Lake'],skinny:'Not the trip\'s strength — come for rock, fishing, and the crest.'},
  permit:{system:'Alabama Hills National Scenic Area: camping only at signed designated sites with the free camping permit (online, Eastern Sierra Visitor Center, or a ranger), or at Tuttle Creek Campground; open dispersed camping is no longer allowed.',cost:'Designated sites free with the permit; Tuttle Creek $12 a night',where:'BLM Alabama Hills / FCFS',when:'No reservations anywhere; get the free permit before you go (valid through the end of the calendar year per the agreement) and arrive early on weekends for a designated site',notes:'Pack it in/out — heavily used, stay on existing sites to protect the area. Whitney Portal Rd is seasonal up high. Lone Pine has full services.'},
  drive:{time:'~7 to 7.5 hr in winter (CA-99 or I-5, CA-58 Tehachapi, CA-14, US-395)',route:'US-395 to Lone Pine, Whitney Portal Rd / Movie Rd into the Hills',flags:['Dispersed sites fill on weekends','High-clearance helps on the spur roads']},
  safety:['Cold desert nights in winter','Flash-flood washes after rain','Sun exposure year-round'],
  insider:['Sunrise through Mobius Arch onto Whitney is the shot','Fish the Lower Owens in winter when nothing else is open','Lone Pine\'s Alabama Hills Café for breakfast'],
  pack:['Fly kit (Lower Owens)','Warm layers (desert nights)','Pack-out kit (LNT)'],
  verify:['Lower Owens flows/regs','Dispersed area rules','Whitney Portal Rd status']}},

{id:'deathvalley',name:'Death Valley — Saline & the Canyons',type:'car',region:'Death Valley NP',drive:8,len:'3 nts',miles:'flexible',gain:'flexible',
 s:[5,1,3,4,2],wild:false,skinny:true,permit:'Dispersed/FCFS',fish:'None',swim:'Saline Valley Warm Springs, Palm Spring area only this winter (Lower Springs closed after a Sept 2026 fire) ~ (4WD, remote)',
 season:[11,12,1,2,3],peak:[12,1,2],epic:true,status:'queued',url:null,coord:[36.51,-116.93],
 blurb:'Winter is the only season. Dunes, slot canyons, bighorn — and a remote clothing-optional soak. EPIC.',
 d:{tag:'Winter is the only season — dunes, slot canyons, painted hills, bighorn, and a remote clothing-optional soak. EPIC.',
  over:['Death Valley is enormous and otherworldly: the lowest point in North America at Badwater, sculpted badlands at Zabriskie, the Mesquite Flat dunes, slot canyons, and painted volcanic hills — best experienced November through March when temperatures are merely pleasant instead of lethal.','For your skinny-dip criterion, the legendary draw is Saline Valley Warm Springs — remote, lovingly maintained clothing-optional pools deep in the park, reached by a long, rough dirt road. It\'s a serious 4WD/high-clearance commitment with no services, which is exactly why it stays special.'],
  why:{scenery:'Dunes, badlands, slot canyons, painted hills — singular and vast.',fish:'None — it\'s a desert. The one zero on fishing.',wildlife:'Desert bighorn, kit fox, sidewinder, roadrunner.',bugs:'Dry — very low.',water:'Saline Valley hot springs (remote 4WD); otherwise dry.'},
  route:{mode:'car',basecamp:'Furnace Creek / Stovepipe Wells campgrounds; or dispersed/backcountry by permit; Saline Valley for the springs (advanced).',
   dayhikes:['Mesquite Flat Dunes at sunrise','Golden Canyon / Gower Gulch loop · ~4.3 mi · 700 ft','Mosaic Canyon slot · ~3.5 mi','Zabriskie Point + Badwater + Artists Palette drive','Saline Valley Warm Springs (long 4WD day/overnight)']},
  fish:{water:'—',species:'—',method:'—',season:'—'},
  wild:['Desert bighorn sheep','Kit fox','Sidewinder rattlesnake','Roadrunner','Coyote'],
  water:{spots:['Saline Valley Warm Springs'],skinny:'Saline\'s clothing-optional pools are the destination — but earn them via the rough road and full self-sufficiency.'},
  permit:{system:'Furnace Creek reservable Oct 15 to Apr 15, the rest first come; roadside camping permits are mandatory ($10 a night on Recreation.gov) in Cottonwood, Marble, Echo Canyon, Hole in the Wall and Greenwater Valley and voluntary elsewhere; $30 vehicle entry.',cost:'Camp fee + entry',where:'recreation.gov (Furnace Creek) / FCFS / backcountry register',when:'Winter weekends and holidays fill — reserve Furnace Creek',notes:'SALINE VALLEY: ~50 mi of rough dirt (Steel Pass / South Pass), high-clearance 4WD strongly advised, no services, no cell, road can be impassable when wet or snowy. Carry recovery gear, extra fuel, and all water. Respect the volunteer-maintained springs and their etiquette.'},
  drive:{time:'~8 hr to Furnace Creek',route:'US-395 to Hwy 190 via Olancha, or via Bishop/Big Pine',flags:['Saline access roads are a separate, serious 4WD undertaking','No fuel inside large stretches — fill up']},
  safety:['Extreme remoteness — satellite messenger, recovery gear, extra everything','Flash floods in canyons','Saline roads impassable when wet','Even winter midday can be hot'],
  insider:['Dunes at sunrise, canyons midday, Zabriskie at sunset','Only attempt Saline with the right vehicle, recovery gear, and a buddy plan','Stargazing here is world-class — it\'s a Dark Sky park'],
  pack:['Extra fuel + water + recovery gear (Saline)','Satellite messenger','Layers (cold nights)'],
  verify:['Saline Valley road status (deal-breaker)','Furnace Creek reservations','Park alerts / flood risk']}},

{id:'anzaborrego',name:'Anza-Borrego — Palms & Badlands',type:'car',region:'Colorado Desert',drive:9,len:'2–3 nts',miles:'flexible',gain:'flexible',
 s:[5,1,4,4,2],wild:false,skinny:false,permit:'Dispersed/FCFS',fish:'None',swim:'None open: the first Borrego Palm Canyon grove is closed and the trail ends at a viewpoint',
 season:[11,12,1,2,3,4],peak:[2,3],epic:true,status:'queued',url:null,coord:[33.26,-116.40],
 blurb:'Slot canyons, fan-palm oases, bighorn sheep, and the state\'s best super-bloom. Free dispersed camping.',
 d:{tag:'Slot canyons, fan-palm oases, bighorn sheep, and the state\'s most reliable super-bloom — with free dispersed camping anywhere. EPIC.',
  over:['Anza-Borrego is the largest state park in California, a Colorado Desert wonderland of slot canyons, native fan-palm oases, badlands, and metal-sculpture art on the plains. It\'s famous for its near-legendary roadside camping freedom — you can pull off and camp almost anywhere — and for super-blooms that, in a wet year, rival anything in the West.','Hike the Borrego Palm Canyon oasis (often with bighorn on the slopes), explore slot canyons like The Slot and Calcite Mine, and time a February–March trip to catch the desert in flower.'],
  why:{scenery:'Slot canyons, palm oases, badlands, bloom hills — endlessly varied.',fish:'None — desert park.',wildlife:'Desert bighorn (Borrego = "bighorn"), roadrunner, sidewinder, kit fox.',bugs:'Dry, cool winter — low.',water:'Palm-oasis pools (small); not a swimming destination.'},
  route:{mode:'car',basecamp:'Free dispersed roadside camping (park rules) or Borrego Palm Canyon / Tamarisk Grove campgrounds.',
   dayhikes:['Borrego Palm Canyon to the grove viewpoint · ~3 mi RT · ~470 ft (AllTrails); the first palm grove itself is closed for fire recovery','The Slot canyon · ~2.3 mi','Calcite Mine / wind caves','Font\'s Point badlands overlook','Galleta Meadows sculptures']},
  fish:{water:'—',species:'—',method:'—',season:'—'},
  wild:['Desert bighorn sheep','Roadrunner','Sidewinder rattlesnake','Kit fox','Golden eagle'],
  water:{spots:['None reachable this season: the first palm grove is closed to entry'],skinny:'Tiny oasis pools — this is a scenery/wildlife/bloom trip, not a swim.'},
  permit:{system:'Anza-Borrego SP — free dispersed roadside camping (with rules) + developed campgrounds.',cost:'Free dispersed / camp fee',where:'reservecalifornia.com (developed) / dispersed allowed',when:'Bloom-season (Feb–Mar) weekends get busy; dispersed always available',notes:'Dispersed camping is allowed off established dirt roads with restrictions — read park rules. No services in the backcountry; carry water. Some 4WD-only routes (verify before attempting).'},
  drive:{time:'~9 hr',route:'I-5 south, then inland via Temecula / Hwy 79 / S-22 to Borrego Springs',flags:['Long drive — make it 3 nights','Some named routes need 4WD']},
  safety:['Carry water — desert','Flash floods in slot canyons','Heat even in spring midday'],
  insider:['Watch bloom reports; February–March in a wet year is unreal','Font\'s Point at sunset over the badlands','Bighorn at Borrego Palm Canyon in the morning'],
  pack:['All your water','Sun protection','Bloom timing intel'],
  verify:['Bloom status (Feb–Mar)','Dispersed camping rules','4WD route conditions']}},

{id:'joshuatree',name:'Joshua Tree',type:'car',region:'Mojave/Colorado Desert',drive:8.5,len:'2–3 nts',miles:'flexible',gain:'flexible',
 s:[5,1,3,4,1],wild:false,skinny:false,permit:'Reservable',fish:'None',swim:'None',
 season:[10,11,12,1,2,3,4],peak:[11,12,3],epic:true,status:'queued',url:null,coord:[33.88,-115.90],
 blurb:'Monzogranite boulder gardens, alien trees, cold clear winter nights. A scenery-and-stars play.',
 d:{tag:'Monzogranite boulder gardens, alien trees, and the clearest winter stars in California — a scenery-and-stars pilgrimage. EPIC.',
  over:['Where the Mojave and Colorado deserts meet, Joshua Tree is a surreal landscape of piled monzogranite boulders, twisted Joshua trees, and fan-palm oases, with world-class rock scrambling and some of the darkest, clearest night skies within reach. It\'s a cold-season park — summer is brutal — and magical from fall through spring.','There\'s no fishing and no swimming; you come for the otherworldly scenery, the scrambling, and the stars. Camp among the boulders at Jumbo Rocks or Hidden Valley and watch the Milky Way come out.'],
  why:{scenery:'Boulder gardens, Joshua trees, desert vistas — utterly distinctive.',fish:'None.',wildlife:'Coyote, jackrabbit, desert tortoise, bighorn, roadrunner.',bugs:'Dry winter — low.',water:'None — bring everything.'},
  route:{mode:'car',basecamp:'Jumbo Rocks or Ryan, reservation required all year on Recreation.gov ($30); Hidden Valley cannot be booked, it is first come only ($25).',
   dayhikes:['Hidden Valley loop · 1.0 mi (4.8★)','Barker Dam · 1.3 mi (4.7★)','Ryan Mountain summit · 2.9 mi · 1,066 ft (4.8★)','Cholla Cactus Garden','Keys View at sunset','Stargazing anywhere']},
  fish:{water:'—',species:'—',method:'—',season:'—'},
  wild:['Coyote','Black-tailed jackrabbit','Desert tortoise (rare)','Bighorn sheep','Roadrunner'],
  water:{spots:['—'],skinny:'No water — this is rock and stars.'},
  permit:{system:'NP campgrounds — many reservable on recreation.gov (some FCFS); park entry fee.',cost:'Camp fee + entry',where:'recreation.gov',when:'Reserve cool-season weekends well ahead — very popular',notes:'No water in most campgrounds — bring all of it. Backcountry camping needs a $6 Recreation.gov permit; the Boy Scout Trail zone requires one of its 14 designated sites. Stargazing and bouldering are the headline activities.'},
  drive:{time:'~8.5 hr',route:'I-5 south to I-10/Hwy 62 to the park (west entrance, Joshua Tree town)',flags:['Long drive — make it 3 nights','Campgrounds book out months ahead in season']},
  safety:['No water — carry plenty','Cold nights, warm days','Scrambling falls — know your limits'],
  insider:['Jumbo Rocks for sunset glow on the boulders','Ryan Mountain for the big view','Keys View + a moonless night for the stars'],
  pack:['All your water','Headlamp + star chart','Warm layers (desert nights)'],
  verify:['Campground reservations (book early)','Park entry/road status','Water availability']}},

/* ===================== WINTER-VIABLE BACKPACKING ===================== */
{id:'dvbackpack',name:'Death Valley — Cottonwood/Marble Loop',type:'backpack',region:'Death Valley NP',drive:8,len:'2–3 nts',miles:'~9/day',gain:'≤1,800/day',
 s:[5,1,3,4,2],wild:false,skinny:false,permit:'Recreation.gov permit, $10',fish:'None',swim:'Cottonwood Spring (seasonal)',
 season:[11,12,1,2,3],peak:[12,1,2],epic:true,status:'queued',url:null,coord:[36.94,-117.30],
 blurb:'A slot-and-spring loop through total desert silence — bighorn, wild burros, sidewinders, zero crowds. Winter only.',
 d:{tag:'A canyon-and-spring loop through total desert silence — bighorn, burros, sidewinders, and not a soul. Winter only.',
  over:['The Cottonwood–Marble Canyon loop out of Stovepipe Wells is Death Valley\'s classic backpack: ~26 miles up Cottonwood Canyon to spring-fed cottonwood groves, over a divide, and down the narrows of Marble Canyon. It\'s a free-permit, no-quota route through some of the most profound silence and solitude in the park system.','This is winter-only country — comfortable November through March, deadly otherwise — and a genuinely different kind of backpacking: dry washes, hidden springs, desert bighorn and wild burros, and night skies that are among the darkest anywhere.'],
  why:{scenery:'Desert canyons, narrows, spring oases — austere and vast.',fish:'None.',wildlife:'Desert bighorn, wild burro, sidewinder, kit fox.',bugs:'Dry desert — very low.',water:'Spring sources only (Cottonwood/Dead Horse) — seasonal and critical.'},
  route:{mode:'backpack',options:[
   {name:'Cottonwood–Marble loop',stat:'3 nts · 30.8 mi · 4,429 ft (4.5★)',text:'Stovepipe Wells up Cottonwood Canyon to the springs (water!), over the divide, down Marble Canyon\'s narrows. Navigation and water-source knowledge are essential.'}]},
  fish:{water:'—',species:'—',method:'—',season:'—'},
  wild:['Desert bighorn sheep','Wild burro','Sidewinder rattlesnake','Kit fox','Coyote'],
  water:{spots:['Cottonwood Spring','Dead Horse Spring'],skinny:'Springs are small water sources, not swimming holes — this is a solitude trip.'},
  permit:{system:'Death Valley NP — Mandatory wilderness permit on Recreation.gov for any overnight on the Cottonwood-Marble loop; park entry fee too.',cost:'$10 per permit ($6 reservation plus $4 recreation fee) plus $30 vehicle entry',where:'Recreation.gov only; Furnace Creek Visitor Center staff can help you book',when:'Released 6 months before the start date; same-day online permits until 11:59 pm on the day you start',notes:'WATER IS THE CRUX — springs are the only sources; confirm they\'re flowing before you commit, and cache water at the road if needed. The first ~8 mi is a high-clearance dirt approach. Navigation skills required. Winter only.'},
  drive:{time:'~8 hr',route:'US-395 to Hwy 190 to Stovepipe Wells; dirt road to the Cottonwood Canyon trailhead',flags:['Cottonwood Canyon Rd needs high clearance','No services — carry/cache water']},
  safety:['Water sources can be dry — verify and cache','Flash floods in the narrows','Remote — satellite messenger','Navigation by map/GPS, not trail signs'],
  insider:['Cache water at the road end to lighten the climb','Camp near Cottonwood Spring for the cottonwood grove','Go on a new moon for the stars'],
  pack:['Extra water + caching plan','Map/GPS + nav skills','Satellite messenger'],
  verify:['Spring flow status (deal-breaker)','Cottonwood Rd condition','Flood/weather forecast']}},

{id:'ventana',name:'Ventana Wilderness — Big Sur River',type:'backpack',region:'Los Padres · Big Sur',drive:2.5,len:'1–2 nts',miles:'~7/day',gain:'≤2,200/day',
 s:[4,2,3,3,4],wild:false,skinny:true,permit:'No permit issued; free campfire permit for a stove; trail closed to Jan 31, 2027',fish:'Light (river)',swim:'Big Sur River gorge pools ~',
 season:[10,11,12,1,2,3,4,5],peak:[10,11,4,5],epic:false,status:'queued',url:null,coord:[36.25,-121.74],
 blurb:'Redwood canyons and river pools above Big Sur. Closed this winter: the Pine Ridge Trail is under a fire closure through Jan 31, 2027.',
 d:{tag:'Redwood canyons and river pools above Big Sur — green and running in the wet months, and just 2.5 hours away.',
  over:['The Ventana Wilderness rises behind Big Sur into the Santa Lucia range — steep redwood canyons, chaparral ridges, and the Big Sur River with its gorge pools. The Pine Ridge Trail from Big Sur Station is the classic corridor toward Sykes (the hot-spring stretch), best in the wet, green months when the creeks run.','Important caveat: this country burned hard in recent fires and trails open and close — so this trip is bookable but conditions-dependent. Confirm current Pine Ridge / Sykes trail status before you go.'],
  why:{scenery:'Redwood canyons and river country above the Big Sur coast.',fish:'Light — the river is more for swimming than fishing.',wildlife:'Deer, condor overhead, bobcat, wild pig.',bugs:'Cool wet season — moderate; ticks present.',water:'Big Sur River gorge pools (and historically Sykes hot springs).'},
  route:{mode:'backpack',options:[
   {name:'Pine Ridge toward Sykes',stat:'2 nts · 20.6 mi RT · 5,442 ft (4.7★)',text:'Big Sur Station up the Pine Ridge Trail to riverside camps and pools. Steep, hot-in-sun ridge sections then redwood shade. Distance/feasibility depend on current trail repair.'}]},
  fish:{water:'Big Sur River',species:'Light',method:'Optional small dries',season:'Closed in winter: above the gorge pool the Big Sur River opens only from the Saturday before Memorial Day through Sept 30, zero trout, artificial lures with barbless hooks; inside Pfeiffer Big Sur State Park it is closed to all fishing all year.'},
  wild:['Mule deer','California condor','Bobcat','Wild pig','Steelhead (river, protected)'],
  water:{spots:['Big Sur River gorge pools','Sykes vicinity pools'],skinny:'Riverside pools off-season are quiet and private — that\'s the draw.'},
  permit:{system:'Ventana Wilderness (Los Padres NF) — FREE self-issue permit; campfire permit for stoves.',cost:'Permits are free; parking at Big Sur Station is $10 per vehicle per calendar day, so one night is $20.',where:'Campfire permit online from CAL FIRE or at Forest Service offices; parking is self-pay at the Big Sur Station lot or a pass bought at the station.',when:'No quota',notes:'POST-FIRE TRAIL CONDITIONS VARY — the Pine Ridge/Sykes corridor has had long closures and reroutes. Confirm open status and water before you go. Ticks and poison oak are real here.'},
  drive:{time:'~2.5 hr',route:'Hwy 1 to Big Sur Station (just past Pfeiffer Big Sur SP)',flags:['Hwy 1 slide closures — check Caltrans','Pine Ridge trail repair status is the key variable']},
  safety:['Poison oak everywhere — long sleeves','Ticks (Lyme) — check often','Steep, sun-exposed climbs — carry water','Burn-area hazards (falling snags)'],
  insider:['Go after rains for full river pools and green canyons','Confirm trail status with the Ventana Wilderness Alliance','Riverside camps midweek are blissfully empty'],
  pack:['California Campfire Permit (there is no wilderness permit)','Tick + poison-oak kit','Water/filter'],
  verify:['Pine Ridge/Sykes trail open status (key)','Highway 1 conditions','River flow / water sources']}},

{id:'jtbackpack',name:'Joshua Tree — Boy Scout Trail',type:'backpack',region:'Joshua Tree NP',drive:8.5,len:'1–2 nts',miles:'~8/day',gain:'≤1,200/day',
 s:[5,1,3,4,1],wild:false,skinny:false,permit:'Recreation.gov permit, $6; 14 designated sites ✦',fish:'None',swim:'None (dry)',
 season:[10,11,12,1,2,3,4],peak:[11,12,3],epic:true,status:'queued',url:null,coord:[34.02,-116.16],
 blurb:'Sleep among monzogranite giants and Joshua trees, coyotes calling, the clearest winter stars in the state.',
 d:{tag:'Sleep among monzogranite giants and Joshua trees, coyotes calling, under the clearest winter stars in the state. EPIC.',
  over:['The Boy Scout Trail traverses the northwest corner of Joshua Tree from the high Mojave boulder country down toward the Wonderland of Rocks fringe — an ~8-mile point-to-point (or out-and-back) through classic monzogranite-and-Joshua-tree landscape, with 14 designated backcountry sites reserved through a $6 Recreation.gov permit.','It\'s the way to experience Joshua Tree\'s scenery and silence overnight: no water, no fishing, no swimming — just surreal rock, desert wildlife at dusk, and a sky full of stars in the cool months.'],
  why:{scenery:'Monzogranite and Joshua trees in every direction — distinctive.',fish:'None.',wildlife:'Coyote, jackrabbit, kangaroo rat, owls, bighorn.',bugs:'Dry winter — low.',water:'None — pack every drop.'},
  route:{mode:'backpack',options:[
   {name:'Boy Scout Trail',stat:'1–2 nts · 8.0 mi pt-to-pt · ~250 ft (4.7★)',text:'Keys West to Indian Cove (or out-and-back), camping in one of the zone\'s 14 designated sites, reserved on Recreation.gov. Carry all water.'}]},
  fish:{water:'—',species:'—',method:'—',season:'—'},
  wild:['Coyote','Black-tailed jackrabbit','Kangaroo rat','Great horned owl','Bighorn sheep'],
  water:{spots:['—'],skinny:'No water at all — plan and pack accordingly.'},
  permit:{system:'Joshua Tree NP — Joshua Tree NP backcountry permit, $6 on Recreation.gov (1 to 12 people, up to 14 nights); park entry fee too.',cost:'$6 permit plus $30 vehicle entry',where:'Recreation.gov, 1-877-444-6777, or in person at park headquarters in Twentynine Palms',when:'Up to 6 months ahead; the Boy Scout Trail zone has 14 designated sites, one party each, and fills on cool-season weekends',notes:'NO WATER on route — carry everything (plan ~1 gal/person/day). On the Boy Scout Trail you must camp in your reserved designated site; the at-large rules (1 mile from a backcountry trailhead, half a mile from roads, 200 feet from trails) apply only in the other 12 zones. Cold nights in winter.'},
  drive:{time:'~8.5 hr',route:'I-5 south to I-10/Hwy 62 to the park; Keys West / Indian Cove trailheads',flags:['Long drive — pair with car-camping days','Point-to-point needs a short shuttle/two cars']},
  safety:['No water — carry all of it','Cold nights, warm days','Navigation in open desert — mark your camp','Flash floods in washes after rain'],
  insider:['Camp on the high boulder benches for sunrise glow','Dusk is prime for desert wildlife','New moon for the full star show'],
  pack:['All your water (~1 gal/person/day)','Headlamp + nav','Warm layers'],
  verify:['Backcountry rules/zones','Park entry/road status','Weather (flood risk)']}}

];

/* ============================================================
   FISHING INTEL — proven catchability + gear/flies per water
   catch: 0–5 (how reliably you'll actually land fish — NOT the
   scenery-priority score). label = plain-English tier.
============================================================ */
const FISHING = {
  emigrant:{catch:5,label:'Lights out',gear:'4–5 wt, 8–9 ft, floating line, 9 ft 5x leader · or ultralight spin, 2–4 lb',flies:['Elk Hair Caddis #14–16','Parachute Adams #16','Royal Wulff #14','Copper John #16','Gold Panther Martin (spin)'],timing:'All day; dawn and the evening rise are best. Numbers fishing — push past the first lakes for size.'},
  skylakes:{catch:5,label:'Lights out (many lakes)',gear:'4–5 wt floating, 5x leader',flies:['Elk Hair Caddis #14–16','Parachute Adams #16','Griffith\u2019s Gnat #18','Black Ant #16','Small spinner'],timing:'Evening rise is excellent — but you\u2019ll pay in bug bites before late August.'},
  littlelakes:{catch:4,label:'Reliable; goldens up high',gear:'3–4 wt, 7.5–9 ft, 6x leader for goldens · or ultralight spin',flies:['Parachute Adams #16–18','Griffith\u2019s Gnat #18','Zebra Midge #18','Elk Hair Caddis #16','Tiny gold spinner'],timing:'Brookies anywhere; goldens hold in the upper Gem Lakes and favor midday.'},
  twentylakes:{catch:4,label:'Reliable (wild brook)',gear:'4–5 wt floating, 5x–6x leader',flies:['Parachute Adams #16','Griffith\u2019s Gnat #18','Elk Hair Caddis #16','Copper John #18','Black Kastmaster 1/12 oz (spin)'],timing:'Work the inlets at Steelhead and Shamrock, morning and last light.'},
  lakesbasin:{catch:4,label:'Reliable (dozens of lakes)',gear:'5 wt, or ultralight spin; a float tube unlocks the bigger lakes',flies:['Woolly Bugger, olive/black #10','Callibaetis Parachute #16','Elk Hair Caddis #16','Thomas Buoyant / Kastmaster (spin)'],timing:'Cast or troll the lakes; mornings best. Gold and Sardine are the producers.'},
  junelake:{catch:4,label:'Reliable (stocked + holdover)',gear:'5–6 wt or spin; stockers fall for PowerBait, holdovers want flies',flies:['Woolly Bugger #8–10','Callibaetis #16','Zebra Midge #18','Kastmaster 1/4 oz (spin)'],timing:'Rush Creek runs wild; the loop lakes are stocked — early morning.'},
  bishopcreek:{catch:4,label:'Reliable (wild + holdover)',gear:'4–5 wt, 5x; nymph the creek forks',flies:['Pheasant Tail #16','Hare\u2019s Ear #16','Elk Hair Caddis #14','Parachute Adams #16'],timing:'Creek forks at dawn; the high lakes (Treasure, Blue) midday.'},
  mccloud:{catch:4,label:'Reliable (wild, classic)',gear:'4–5 wt, 9 ft, 5x; nymph the runs below the falls',flies:['Golden Stone nymph #10','Pheasant Tail #16','Hare\u2019s Ear #14','Elk Hair Caddis #14','October Caddis (fall)'],timing:'Riffles below Lower Falls, morning and evening. Book the Nature Conservancy reach for the storied water.'},
  eastsierracar:{catch:4,label:'Reliable; goldens on the day-hike',gear:'4–5 wt or ultralight spin',flies:['Parachute Adams #16','Elk Hair Caddis #16','Pheasant Tail #16','Gold spinner'],timing:'Rock Creek at dawn; day-hike the Little Lakes chain for goldens.'},
  marble:{catch:4,label:'Reliable (wild brook)',gear:'3–4 wt, 5x–6x',flies:['Parachute Adams #16','Elk Hair Caddis #16','Griffith\u2019s Gnat #18','Renegade #16'],timing:'Sky High Lakes — numbers fishing, all day.'},
  wallowas:{catch:4,label:'Reliable (goldens & brook)',gear:'3–5 wt, 5x–6x',flies:['Parachute Adams #16','Elk Hair Caddis #16','Royal Wulff #14','Griffith\u2019s Gnat #18'],timing:'Goldens in the higher basin lakes, midday. Glacier and Mirror are the gems.'},
  alabamahills:{catch:4,label:'Reliable winter tailwater',gear:'4–5 wt, 9 ft, 5x; nymph rigs under an indicator — fishes ALL winter',flies:['Zebra Midge #18–20','Pheasant Tail #16–18','WD-40 #18','San Juan Worm','Baetis #18'],timing:'Lower Owens, midday in winter — the year-round trout option when everything alpine is shut.'},
  trinity:{catch:3,label:'Moderate (wild)',gear:'4–5 wt, 5x; dry-dropper on the creek',flies:['Elk Hair Caddis #14','Stimulator #14','Pheasant Tail #16','Copper John #16'],timing:'The creek pools below the lakes fish best; the cold cirque lakes are tougher.'},
  desolation:{catch:3,label:'Moderate (self-sustaining, pressured)',gear:'4–5 wt, 5x–6x; or ultralight spin',flies:['Parachute Adams #16','Griffith\u2019s Gnat #18','Elk Hair Caddis #16','Small Kastmaster (spin)'],timing:'Work the inlet seams of Dicks and Fontanillis at dawn and dusk. Aloha is barren.'},
  shadow:{catch:3,label:'Moderate (creek best)',gear:'4–5 wt, 5x; dry-dropper',flies:['Elk Hair Caddis #14–16','Parachute Adams #16','Pheasant Tail #16','Hare\u2019s Ear #16'],timing:'Shadow Creek pools out-fish the lakes; lakes early and late.'},
  lassenbc:{catch:3,label:'Moderate (stocked/holdover)',gear:'4–5 wt or ultralight spin',flies:['Woolly Bugger #10','Parachute Adams #16','Pheasant Tail #16','Thomas Buoyant 1/8 oz (spin)'],timing:'Cooler morning/evening on the Cluster Lakes.'},
  lassencar:{catch:3,label:'Moderate (Manzanita is C&R)',gear:'5 wt + float tube for Manzanita (fly-only, barbless, catch-and-release)',flies:['Callibaetis nymph #16','Woolly Bugger #10','Blood Midge #18','Hare\u2019s Ear #16'],timing:'Manzanita at dawn from a tube; Butte Lake will take spinners.'},
  steens:{catch:3,label:'Moderate (wild redband)',gear:'3–4 wt, 5x; small-stream tactics',flies:['Elk Hair Caddis #14','Parachute Adams #16','Stimulator #14','Pheasant Tail #16'],timing:'Gorge creeks and the Donner und Blitzen — confirm current Oregon regs.'},
  henrycoe:{catch:3,label:'Warmwater (bass/bluegill, not trout)',gear:'Light spin, 6 lb · or 6 wt for poppers',flies:['Foam popper #8','Woolly Bugger, black #8','Senko / soft plastic (spin)','Rooster Tail (spin)'],timing:'Pond margins in spring (Mississippi, Kelly Lake). Not a trout fishery — set expectations.'},
  hatcreek:{catch:3,label:'Technical — loaded but demanding',gear:'4–5 wt, 9 ft; LONG 12 ft 6x–7x leaders. This is spring-creek sight-fishing — the fish are everywhere and they\u2019ve seen it all',flies:['Pale Morning Dun #16–18','Trico spinner #20–22','Blue-Winged Olive #18','Tiny Pheasant Tail #18–20','Caddis emerger (evening)'],timing:'Match the hatch precisely; the evening caddis is when even mortals catch fish.'},
  cathedral:{catch:2,label:'Light',gear:'3–4 wt, 6x',flies:['Griffith\u2019s Gnat #18','Parachute Adams #18','Small midge'],timing:'Optional — this is a scenery pilgrimage, not a fishing trip.'},
  laurel:{catch:2,label:'Light–moderate',gear:'4–5 wt, 5x',flies:['Parachute Adams #16','Woolly Bugger, olive #10','Elk Hair Caddis #16'],timing:'Lake margins early and late; bring it as a bonus, not the plan.'},
  halfdome:{catch:1,label:'Light (incidental)',gear:'3–4 wt or ultralight spin, only if it rides free',flies:['Parachute Adams #16','Elk Hair Caddis #16','Griffith\u2019s Gnat #18'],timing:'The Merced at LYV on the way up or down, if the legs have anything left after the cables.'},
  carsonpass:{catch:2,label:'Small wild brookies',gear:'3–4 wt, 6x — light and fun',flies:['Griffith\u2019s Gnat #18','Parachute Adams #18','Small Elk Hair Caddis #16'],timing:'Round Top Lake and Fourth of July — casual pan-sized brookies.'},
  lostcoast:{catch:1,label:'Surf only (incidental)',gear:'9–10 ft surf rod, 3–4 oz pyramid sinker',flies:['Surf rig + sand crab / Gulp! sandworm','Small metal jig for surfperch'],timing:'Incoming tide on sandy stretches — a bonus, never the reason you came.'},
  ventana:{catch:1,label:'Marginal',gear:'3–4 wt if anything',flies:['Small Adams','Elk Hair Caddis'],timing:'The Big Sur River is light — go for the pools, not the rod.'},
  bigsur:{catch:1,label:'Marginal (steelhead closed)',gear:'—',flies:['—'],timing:'Not a fishing trip — it\u2019s a coastline.'},
  enchant:{catch:1,label:'Light (scenery trip)'},
  pointreyes:{catch:0,label:'No trout fishery (ocean)'},
  mendocino:{catch:0,label:'No trout fishery'},
  carrizo:{catch:0,label:'No fishery (dry plain)'},
  deathvalley:{catch:0,label:'No fishery (desert)'},
  dvbackpack:{catch:0,label:'No fishery (desert)'},
  anzaborrego:{catch:0,label:'No fishery (desert)'},
  joshuatree:{catch:0,label:'No fishery (desert)'},
  jtbackpack:{catch:0,label:'No fishery (desert)'}
};
window.TRIPS.forEach(t=>{ const f=FISHING[t.id]; if(f) Object.assign(t.d.fish, f); else if(!('catch' in t.d.fish)) t.d.fish.catch=0; });

/* ============================================================
   AllTrails links (all trips) + nearest airports (fly-in-worthy
   trips only; local Bay Area / Central Coast drives omitted).
   at = AllTrails URL · air = nearest commercial airports
============================================================ */
const AT='https://www.alltrails.com/trail/us/';
const ATS='https://www.alltrails.com/search?q=';
const LINKS={
  littlelakes:{at:ATS+'Little%20Lakes%20Valley',air:'Mammoth Yosemite (MMH, seasonal) ~40 min · Bishop (BIH) ~50 min · Reno (RNO) ~3 h'},
  twentylakes:{at:ATS+'Twenty%20Lakes%20Basin%20Saddlebag',air:'Mammoth (MMH) ~1 h · Reno (RNO) ~2.75 h'},
  emigrant:{at:ATS+'Buck%20Lakes%20Crabtree%20Emigrant'},
  carsonpass:{at:ATS+'Winnemucca%20Lake%20Carson%20Pass',air:'Reno–Tahoe (RNO) ~1.5 h · Sacramento (SMF) ~2 h'},
  shadow:{at:AT+'california/shadow-and-ediza-lakes-trail',air:'Mammoth Yosemite (MMH) ~25 min · Reno (RNO) ~3 h'},
  cathedral:{at:ATS+'Cathedral%20Lakes%20Yosemite'},
  laurel:{at:AT+'california/laurel-lake-trail'},
  halfdome:{at:AT+'california/half-dome-via-the-john-muir-trail-jmt'},
  trinity:{at:ATS+'Canyon%20Creek%20Lakes%20Trinity%20Alps',air:'Redding (RDD) ~1.5 h · Arcata/Eureka (ACV) ~2.5 h'},
  marble:{at:ATS+'Sky%20High%20Lakes%20Marble%20Mountains',air:'Medford, OR (MFR) ~2 h · Redding (RDD) ~2.5 h'},
  lassenbc:{at:ATS+'Cluster%20Lakes%20Lassen',air:'Redding (RDD) ~1.5 h · Reno (RNO) ~2.5 h'},
  skylakes:{at:AT+'oregon/seven-lakes-basin-and-sky-lakes-trail',air:'Klamath Falls (LMT) ~1 h · Medford (MFR) ~1.5 h'},
  wallowas:{at:AT+'oregon/lakes-basin-via-east-fork-lostine-trail',air:'Pendleton (PDT) ~2.5 h · Walla Walla (ALW) ~2.5 h · Boise, ID (BOI) ~3 h'},
  enchant:{at:AT+'washington/colchuck-lake-via-stuart-lake-trail',air:'Wenatchee (EAT) ~45 min · Seattle (SEA) ~2.5 h'},
  lakesbasin:{at:ATS+'Sierra%20Buttes%20Lakes%20Basin',air:'Reno–Tahoe (RNO) ~1.5 h · Sacramento (SMF) ~2.5 h'},
  junelake:{at:ATS+'Parker%20Lake%20June%20Lake',air:'Mammoth Yosemite (MMH) ~30 min · Reno (RNO) ~3 h'},
  bishopcreek:{at:ATS+'Treasure%20Lakes%20Bishop',air:'Bishop (BIH) ~30 min · Mammoth (MMH) ~1 h · Reno (RNO) ~3.5 h'},
  lassencar:{at:ATS+'Bumpass%20Hell%20Lassen',air:'Redding (RDD) ~1.5 h · Reno (RNO) ~2.5 h'},
  hatcreek:{at:ATS+'Burney%20Falls',air:'Redding (RDD) ~1 h'},
  mccloud:{at:ATS+'McCloud%20Falls',air:'Redding (RDD) ~1 h'},
  eastsierracar:{at:ATS+'Little%20Lakes%20Valley%20Rock%20Creek',air:'Mammoth Yosemite (MMH) ~40 min · Bishop (BIH) ~50 min · Reno (RNO) ~3 h'},
  steens:{at:ATS+'Wildhorse%20Lake%20Steens%20Mountain',air:'Boise, ID (BOI) ~3.5 h · Redmond/Bend (RDM) ~4 h (Burns has no commercial service)'},
  lostcoast:{at:ATS+'Lost%20Coast%20Trail%20Mattole',air:'Arcata/Eureka (ACV) ~1.5 h to the trailhead'},
  pointreyes:{at:AT+'california/wildcat-camp-trail-to-alamere-falls'},
  bigsur:{at:ATS+'Pfeiffer%20Falls%20Big%20Sur'},
  mendocino:{at:ATS+'Russian%20Gulch%20Falls%20Mendocino'},
  henrycoe:{at:AT+'california/china-hole-trail-loop'},
  pinnacles:{at:ATS+'High%20Peaks%20Pinnacles'},
  carrizo:{at:ATS+'Carrizo%20Plain'},
  alabamahills:{at:ATS+'Mobius%20Arch%20Alabama%20Hills',air:'Bishop (BIH) ~1 h · Mammoth (MMH) ~1.75 h · Las Vegas (LAS) ~3.5 h'},
  deathvalley:{at:ATS+'Golden%20Canyon%20Death%20Valley',air:'Las Vegas (LAS) ~2 h'},
  anzaborrego:{at:ATS+'Borrego%20Palm%20Canyon',air:'Palm Springs (PSP) ~1.5 h · San Diego (SAN) ~2 h'},
  joshuatree:{at:AT+'california/ryan-mountain-trail',air:'Palm Springs (PSP) ~45 min · Ontario (ONT) ~1.5 h'},
  dvbackpack:{at:AT+'california/cottonwood-marble-canyon-loop',air:'Las Vegas (LAS) ~2.5 h'},
  ventana:{at:AT+'california/sykes-hot-springs-via-pine-ridge-trail'},
  jtbackpack:{at:AT+'california/boy-scout-trail--8',air:'Palm Springs (PSP) ~1 h · Ontario (ONT) ~1.5 h'},
  desolation:{at:ATS+'Desolation%20Wilderness%20Lake%20Aloha',air:'Reno–Tahoe (RNO) ~1.25 h · Sacramento (SMF) ~2 h'}
};
window.TRIPS.forEach(t=>{ const l=LINKS[t.id]; if(l){ if(l.at) t.at=l.at; if(l.air) t.air=l.air; } });

/* ============================================================
   SPECIAL TRIP — Poopenaut Valley fly-fishing (fixed dates)
   Added after the merge passes, so it carries its own fish/at.
============================================================ */
window.TRIPS.push({
  id:'poopenaut', name:'Poopenaut Valley — Tuolumne Tailwater', type:'car',
  region:'Hetch Hetchy · Yosemite NP', drive:3.5, len:'2 nts · Evergreen Lodge',
  miles:'2.6 mi RT to the river', gain:'800 ft climb out',
  s:[5,4,3,3,4], wild:true, skinny:true, permit:'CA license + park entry',
  fish:'Wild rainbow & brown', swim:'Cold tailwater pools ~',
  season:[7], peak:[7], epic:false, status:'ready', url:null, coord:[37.9432,-119.8085],
  at:'https://www.alltrails.com/search?q=Poopenaut%20Valley%20Trail',
  blurb:'A cold bottom-release tailwater below O’Shaughnessy Dam that fishes when the little forks go warm and thin. Wild trout, a brutal 800-ft climb out, a hard sunset gate. Fixed dates: Jul 22–24, 2026.',
  d:{
    tag:'Fixed dates · Jul 22–24, 2026 · basecamp Evergreen Lodge',
    over:[
      'Below O’Shaughnessy Dam, the Tuolumne comes back to life as a cold, bottom-release tailwater. While the little Middle and South Forks warm up and shrink in late-July heat, the water pouring out of the base of Hetch Hetchy stays in the 50s and keeps its wild rainbows and browns honest and feeding. That is the whole case for fishing here on these dates — and it is a good one.',
      'The verdict: for July 22–24, this is the best close-by fly water, and I agree with the call. The tailwater logic is sound — cold, steady water beats warm, thin creeks every time in a heat wave. Three honest amendments, though. First, this is the hardest access on the shortlist: a steep 800-foot climb back out in afternoon heat, through poison oak and rattlesnake ground — a demanding first fly outing for two people on brand-new gear. Second, it is barbless-artificial-only water by law, with a 12-inch maximum size limit — fine for fly fishing, but know it. Third, the gate rewrites the day (below). So: best fishing, yes; easiest day, no. Pair it with an easy evening backup and you get both.',
      'The gate is the plot twist. Hetch Hetchy Road opens only at sunrise and locks at sunset, and Evergreen Lodge sits outside it — so you cannot start before it opens (~7 a.m.), and you must climb out and drive clear before it locks (~8:20 p.m. in late July). That quietly removes the classic evening rise from the menu here. The move: fish Poopenaut hard in the cool morning, beat the gate out, and — if you still want that last-light bite — throw at the easy roadside South Fork water near the Lodge, which has no gate.'
    ],
    why:{
      scenery:'The Tuolumne plunges out of the 430-foot O’Shaughnessy Dam into a granite gorge, then flattens into the quiet Poopenaut meadow. Big walls, loud water, almost nobody.',
      fish:'A cold bottom-release tailwater holds temperature all summer when the forks go warm — wild rainbows and browns, less pressured because the climb turns most people around. Catchability is moderate: eager fish in the right water, but it is low, clear, and technical.',
      wildlife:'Rattlesnakes on the warm rocky climb, black-bear country, mule deer in the meadow, American dippers working the riffles, peregrines on the walls.',
      bugs:'Some mosquitoes around the meadow morning and evening, but the canyon is drier and airier than the high country. Late July is manageable.',
      water:'Cold, clear pools and runs off the base of the reservoir — swimmable but genuinely bracing even in July. Remote enough for a private dip once you have earned the climb back up.'
    },
    route:{mode:'car', basecamp:'Evergreen Lodge — just outside the Hetch Hetchy gate near Camp Mather (cabins, restaurant, tavern; ~20–25 min from the trailhead).', dayhikes:[
      'Poopenaut Valley Trail to the Tuolumne · 2.6 mi RT · 800 ft (all on the climb out) · the fishing access',
      'Wapama Falls from O’Shaughnessy Dam · 5.6 mi RT · 900 ft · the classic non-fishing leg-stretcher',
      'Carlon Falls, South Fork Tuolumne · 4.0 mi RT · easy · roadside and outside the gate — the easy evening water',
      'O’Shaughnessy Dam & reservoir overlook · easy · cross the dam for the Tueeulala / Wapama view'
    ]},
    fish:{
      water:'Tuolumne River below O’Shaughnessy Dam (Poopenaut Valley)',
      species:'Wild rainbow & brown trout',
      method:'Barbless artificial only — fly or single-hook lure (bait is illegal here)',
      season:'Cold tailwater; fishes all summer. Year-round season as of 2026.',
      catch:3, label:'Moderate — cold wild tailwater, low & clear',
      gear:'9 ft 5-wt, floating line, 9 ft 5X leader (drop to 6X in low clear water)',
      flies:['Elk Hair Caddis #14–16','Parachute Adams #16','Pheasant Tail #16','Hare’s Ear #16','Zebra Midge #18','Foam hopper #12 (dropper rig)','Olive Woolly Bugger #10'],
      timing:'Morning through early afternoon — the cool, productive window before you must beat the gate out.'
    },
    wild:['Wild rainbow & brown trout','Rattlesnakes (watch the climb)','Black-bear country','Mule deer','American dipper (water ouzel)','Peregrine falcons on the walls'],
    water:{spots:['Poopenaut meadow pools, runs & pocket water','Cold bottom-release — low 50s°F even in July','Deep tailouts below the rapids'], skinny:'Remote enough for a bracing skinny-dip in the pools — but the water comes off the bottom of the reservoir, so it stays cold all summer. A quick, gasping plunge, then back up you go.'},
    permit:{
      system:'CA sport-fishing license (age 16+) + Yosemite park entry',
      cost:'License: 1-day ~$20, 2-day ~$31, or annual ~$62. Park entry per vehicle (or America the Beautiful pass).',
      where:'Buy the license online at CDFW before you leave signal; pay park entry at the Hetch Hetchy station.',
      when:'Year-round fishing season as of the 2026 rule change — no seasonal closure.',
      notes:'Tuolumne system, including below Hetch Hetchy: artificial lures with SINGLE BARBLESS hooks only, no bait. A 12-inch maximum size limit applies from O’Shaughnessy Dam down to Early Intake — release anything longer, and the daily limit is low. Treat it as catch-and-release wild water.'
    },
    drive:{
      time:'~3.5 h from Pacifica to Evergreen Lodge; then ~20–25 min from the Lodge to the Poopenaut trailhead (through the gate).',
      route:'I-580 / I-205 to Hwy 120 east through Groveland; Evergreen Rd to the Lodge and Mather; past the Hetch Hetchy entrance ~3.8 mi down Hetch Hetchy Rd to the marked Poopenaut trailhead pullout.',
      flags:[
        'THE GATE: Hetch Hetchy Rd is open sunrise-to-sunset only and locked overnight. Evergreen Lodge is outside it — you cannot reach the trailhead before it opens (~7 a.m.; confirm the recorded line 209-372-0200).',
        'You must clear the gate by sunset (~8:20 p.m. in late July). Budget the 45–60 min climb-out plus drive — this is why the evening rise is effectively off the table here.',
        'Vehicles / trailers over 25 ft are not allowed on Hetch Hetchy Rd.',
        'No cell signal past Groveland — download maps and buy licenses in advance.'
      ]
    },
    safety:[
      'The climb out is 800 ft of steep, exposed trail — start up with water in hand and plenty of time before the gate.',
      'Rattlesnake country: watch hands and feet on the warm rocky climb, especially in the afternoon.',
      'Poison oak lines the lower trail — leaves of three, let it be. Long pants help.',
      'Canyon heat is real by midday; carry 2 L each plus salty snacks.',
      'No treatment plan at the river? Pack all the water you need in and out.',
      'Barbless is the law here — and it makes unhooking a fish (or your own ear) far easier.'
    ],
    insider:[
      'Practice-cast on the Evergreen Lodge lawn the evening before — twenty minutes turns a frustrating morning into a fun one.',
      'Fish upstream and approach from below: the water is low and clear and the fish see everything.',
      'Start with a hopper-dropper — the dry floats as your indicator and the nymph does the catching.',
      'Foam is home: drift your flies through the foam lines and current seams, not the flat frog water.',
      'Save the evening rise for the roadside South Fork near the Lodge — no gate, no climb, dusk caddis.'
    ],
    pack:[
      'CA fishing license (on phone or printed)','Fly rod outfit + reel, spare leaders & tippet','Fly box (barbs pinched)','Nippers, forceps, floatant, split shot, indicators','Rubber landing net','Wading boots + neoprene socks (wet-wade)','Polarized sunglasses, hat, sun hoody, sunscreen','2 L water each + salty snacks','Small first-aid, offline map, headlamp','Dry clothes & towel in the car for after'
    ],
    verify:[
      'Recheck USGS gauge 11276500 (Tuolumne nr Hetch Hetchy) ~48 h out — you want cold temps and a fishable, not blown-out, flow.',
      'Confirm Hetch Hetchy gate hours (209-372-0200) — they track sunrise/sunset and shift week to week.',
      'Reconfirm Yosemite fishing regs (barbless + size limits can change).',
      'Buy both CA fishing licenses online (CDFW) before you lose signal in Groveland.',
      'Check park alerts, fire, and air quality for the dates.'
    ],
    kit:{
      intro:'Assume you own nothing. Here is exactly what to buy for the two of you, what it costs, and how to use it — tuned to a small, cold, clear tailwater where barbless flies are the law.',
      shopping:[
        {cat:'The outfit (buy 2 — one each)', items:[
          {name:'9-ft 5-weight fly rod + reel “outfit”, pre-spooled', note:'A 9-ft 5-wt is THE all-around trout rod — delicate enough for dries, enough backbone for hoppers, streamers, and wind. Buy a rigged combo so it arrives ready to fish: Orvis Clearwater (~$250), Redington Path/Crosswater (~$180), or Echo Base (~$150).', price:'$150–250 ea'},
          {name:'Weight-forward floating line (WF5F)', note:'Comes already loaded on the outfit with backing and a leader. Nothing to add.', price:'included'}
        ]},
        {cat:'Leaders & tippet', items:[
          {name:'9-ft 5X tapered leaders', note:'The clear tapered section connecting fly line to fly; loops on. Bring 3–4 — you will wreck a couple.', price:'~$5 ea'},
          {name:'Tippet spools: 5X nylon + 5X/6X fluorocarbon', note:'Tippet is the fine end you tie flies to and rebuild as it shortens. Nylon floats (dries); fluoro sinks and is nearly invisible (nymphs). 6X for spooky low water.', price:'~$8 ea'}
        ]},
        {cat:'Flies (pinch every barb)', items:[
          {name:'Dries', note:'Elk Hair Caddis #14–16, Parachute Adams #16, Royal Wulff #14, Griffith’s Gnat #18.', price:''},
          {name:'Nymphs', note:'Pheasant Tail #16, Hare’s Ear #16, Copper John #16, Zebra Midge #18.', price:''},
          {name:'Streamer & terrestrials', note:'Olive Woolly Bugger #10; a small foam hopper #12 and a black ant #16 for late July.', price:''},
          {name:'Or just buy a boxed trout assortment', note:'A 30–40-fly Sierra/tailwater assortment covers most of the above in one purchase.', price:'~$25–35'}
        ]},
        {cat:'On your body (late July = wet-wade)', items:[
          {name:'Wading boots + neoprene guard socks', note:'The water is cold but the day is hot — skip waders and wet-wade in quick-dry pants or shorts. Rubber-lug wading boots + 3 mm neoprene socks give grip and warmth. (Sturdy closed-toe water shoes work in a pinch.)', price:'boots ~$100 · socks ~$25'},
          {name:'Polarized sunglasses', note:'Non-negotiable: they let you SEE fish and holding water, and shield your eyes from a wind-blown barbless hook. Amber/copper lens.', price:'$25–150'},
          {name:'Sun hoody, wide-brim hat, sunscreen', note:'The canyon bakes by midday. Cover up.', price:'$20–60'}
        ]},
        {cat:'Tools & carry (one shared set is fine)', items:[
          {name:'Nippers', note:'Trim tippet and knot tags — a cheap pair or even nail clippers.', price:'~$10'},
          {name:'Forceps / hemostats', note:'Unhook fish and pinch down barbs. Essential.', price:'~$8'},
          {name:'Rubber-mesh landing net', note:'Fish-safe rubber bag lands and releases fast and protects the slime coat.', price:'~$30'},
          {name:'Floatant + split shot + strike indicators', note:'Floatant keeps dries riding high; a couple of tin (non-lead) shot sink a nymph; a small indicator (or a buoyant dry) signals the take.', price:'~$20 total'},
          {name:'Fly box + sling / chest pack', note:'The box holds the flies; a sling pack carries box, tippet, tools, and water on the hike.', price:'box ~$10 · pack ~$40–60'}
        ]},
        {cat:'Licenses & the hike', items:[
          {name:'CA fishing license (each, age 16+)', note:'Buy online at CDFW before you lose signal. A 2-day (~$31) covers the weekend; annual is ~$62.', price:'~$20–31'},
          {name:'Water, food, first-aid, offline map, headlamp', note:'2 L water each (no treatment plan at the river), salty snacks, small first-aid, a downloaded map, and a headlamp in case the climb runs long.', price:'—'}
        ]}
      ],
      rigs:[
        {name:'Hopper-dropper (start here)', how:'Tie a buoyant dry (foam hopper or Elk Hair Caddis) to your tippet with an improved clinch knot. Then tie 18–24″ of tippet to the BEND of that hook and add a Pheasant Tail nymph. The dry floats and doubles as your strike indicator; the nymph rides below. Highest-odds beginner rig.'},
        {name:'Single dry', how:'During a visible hatch or rising fish, fish just the dry (Parachute Adams / caddis). Watch it drift; set gently when a fish eats it.'},
        {name:'Nymph under indicator', how:'When nothing is rising: indicator up the leader about 1.5× the water’s depth, a weighted nymph plus one split shot, dead-drifted through the deeper runs.'}
      ],
      knots:['Loop-to-loop: fly-line loop ↔ leader loop, no knot to tie.','Leader → tippet: double surgeon’s knot (or a blood knot).','Tippet → fly: improved clinch knot. Wet it, seat it slowly.'],
      steps:[
        'Practice first. The evening before, string a rod and cast on the Evergreen Lodge lawn for twenty minutes. Ten-o’clock-to-two-o’clock, pause on the backcast to let the rod load, and keep it short — 20–30 ft is plenty here.',
        'Read the water. Trout hold where fast meets slow: seams beside the current, behind boulders, the heads and tails of pools, foam lines (“foam is home”), and shaded undercut banks.',
        'Approach like a heron. The water is low and gin-clear. Come from downstream, stay low, and keep your shadow and your feet quiet. The first cast to a spot is the best cast — do not line the fish.',
        'Get a drag-free drift. Cast up and across; let the flies drift at exactly the current’s speed. Flip a mend (a small upstream flick of line) so the current does not drag the fly unnaturally. The dead drift is the whole game.',
        'Set and land. On a dry, lift the rod gently when the fish eats; on the dropper or indicator, set at any pause or twitch. Rod tip up, let it run, net it quickly in the rubber mesh.',
        'Release it right (required over 12″, and just do it for all of them): barbless hook, wet hands, keep the fish in the water, minimal air, and face it upstream until it kicks off.'
      ],
      day:[
        {t:'Night before', what:'Buy both licenses online, rig both rods, pinch all barbs, practice-cast on the lawn, fill water bottles, set an alarm.'},
        {t:'~6:15 a.m.', what:'Leave Evergreen with coffee and breakfast — you want to be at the Hetch Hetchy gate as it opens.'},
        {t:'Gate open (~7 a.m.)', what:'Through the entrance, drive ~3.8 mi down Hetch Hetchy Rd to the marked Poopenaut trailhead (small pullout).'},
        {t:'~7:20–8 a.m.', what:'Hike down — ~1.3 mi, 800 ft, ~30–40 min — in the cool morning. Poison-oak and rattlesnake aware.'},
        {t:'Morning → early afternoon', what:'The window. Fish upstream through the meadow pools and seams while the water is cool and the light is soft. This is the productive stretch — make it count.'},
        {t:'Early–mid afternoon', what:'Start the climb out with margin. The 800-ft ascent plus drive must clear the gate before sunset — so you fish mornings here, not the last-light rise.'},
        {t:'Evening', what:'Want the evening rise without the gate clock? Fish the easy roadside South Fork Tuolumne / Carlon Falls water near Evergreen (outside the gate) at dusk — or take the win and have dinner at the Lodge.'}
      ]
    }
  }
});

/* ============================================================
   THREE GENUINE ALTERNATIVES to Poopenaut (same Jul 22–24
   weekend, based at Evergreen Lodge). Full-spec pages.
============================================================ */
window.TRIPS.push(
{
  id:'sftuolumne', name:'South Fork Tuolumne — Carlon & the Easy Water', type:'car',
  region:'Groveland · Stanislaus NF / Yosemite edge', drive:3.5, len:'2 nts · Evergreen Lodge',
  miles:'0–4 mi, your call', gain:'minimal',
  s:[4,3,3,3,4], wild:false, skinny:true, permit:'CA license (+ park entry if inside)',
  fish:'Stocked + wild rainbow', swim:'Carlon Falls pool ~',
  season:[7], peak:[7], epic:false, status:'ready', url:null, coord:[37.8113,-119.8637],
  at:'https://www.alltrails.com/search?q=Carlon%20Falls%20Trail',
  blurb:'The beginner-friendly counter-pick: roadside near the Lodge, no gate, no climb, stocked over wild, and the best evening rise of the bunch. Alt for Jul 22–24.',
  d:{ tag:'Alternative · Jul 22–24 · the easy win',
    over:[
      'This is the honest counter-pick to Poopenaut. If the real goal for two first-timers is to catch fish, groove the cast, and fish the evening rise with zero gate stress, the South Fork Tuolumne near the Lodge is the smart call. It runs right along Evergreen Road and Highway 120 — no entrance gate, no 800-foot climb — and it is stocked with rainbows on top of a resident wild population.',
      'The trade is quality for accessibility. This is warmer freestone water, not a cold tailwater, so by late July it runs lower and softer than Poopenaut and the fish average smaller. But your odds of a bent rod on day one are far higher, and because it sits outside the Hetch Hetchy gate you can fish the golden evening caddis until dark and still sleep at Evergreen. Carlon Falls is on this same water — a short, easy walk to a swim-hole pool that makes a perfect midday reset.',
      'Verdict: the beginner-friendly win, and the best evening water of the four options. Fish Poopenaut in the cool morning for the trophy water; come here at dusk to actually catch the rise.'
    ],
    why:{
      scenery:'Forested South Fork canyon, granite pools, and the mossy grotto of Carlon Falls. Pretty, easy, low-stakes.',
      fish:'Stocked rainbows over a resident wild population — the highest catch odds of the four, ideal for learning. Freestone, so it warms and thins by late July; fish morning and evening.',
      wildlife:'Deer, black bear, dippers on the riffles, and Sierra songbirds. Poison oak lower down.',
      bugs:'Some mosquitoes at dusk near the water, but manageable in late July.',
      water:'Clear pools and the Carlon Falls swim hole — warm enough to actually enjoy, unlike the tailwater. Quiet spots upstream for a private dip.'
    },
    route:{mode:'car', basecamp:'Evergreen Lodge (~10 min) — or just fish it on the way in and out.', dayhikes:[
      'Carlon Falls · 4.0 mi RT · easy · riverside walk to the falls pool (fish and swim)',
      'South Fork pullouts along Evergreen Rd / Hwy 120 · roadside · pick a pool and wade in',
      'Middle Fork Tuolumne (nearby) · roadside · a second freestone option if the South Fork is busy'
    ]},
    fish:{ water:'South Fork Tuolumne (Carlon / Evergreen Rd)', species:'Stocked rainbows + wild rainbow & brown',
      method:'Fly or lure; barbless artificial inside the park boundary, general CA regs on the NF stretch',
      season:'Best late spring–early summer; fishable mornings & evenings in late July',
      catch:4, label:'Reliable — the beginner-friendly win', gear:'9 ft 5-wt, floating line, 9 ft 5X leader',
      flies:['Elk Hair Caddis #14–16','Parachute Adams #16','Foam hopper #12','Copper John #16','Small Kastmaster / Panther Martin (spin)'],
      timing:'Evening caddis is the prize — no gate, so fish it till dark.' },
    wild:['Stocked & wild rainbow trout','Wild brown trout','Black bear & deer','American dipper','Poison oak (lower river)'],
    water:{spots:['Carlon Falls pool','South Fork pools & pocket water','Warm-enough swim holes'], skinny:'Walk a few minutes upstream of Carlon Falls and the pools go quiet — a warm, easy dip between sessions.'},
    permit:{ system:'CA sport-fishing license (16+); park entry only if you fish inside the boundary',
      cost:'License 1-day ~$20 / 2-day ~$31 / annual ~$62', where:'Buy online at CDFW; Groveland shops sell licenses and tackle too',
      when:'Year-round season', notes:'Inside Yosemite: barbless artificial only. On the Stanislaus NF stretch near Groveland: general CA regs (bait allowed, 5-trout limit) — but barbless catch-and-release keeps the wild fish healthy. Know which side of the line you are on.' },
    drive:{ time:'~3.5 h Pacifica→Evergreen; Carlon / South Fork is ~10 min from the Lodge',
      route:'Hwy 120 east to the Evergreen Rd junction; the Carlon day-use area and river pullouts are right there',
      flags:['No gate and no fixed hours — fish dawn to dark','Roadside pullouts fill on summer weekends; go early','Poison oak along the lower banks'] },
    safety:['Poison oak is common on the lower South Fork — long pants, watch what you grab.','Slick granite around the falls pool; wade deliberately.','Afternoon heat down low; the fishing is better cool anyway.'],
    insider:['Same starter kit as the Poopenaut page — nothing extra to buy.','Fish the hour before dark: the caddis come off and stockers and wild fish both look up.','If a pool has been hammered, walk five minutes; pressure drops off fast.','Use the hopper-dropper to search unfamiliar water quickly.'],
    pack:['CA fishing license','Fly rod outfit + tippet & flies','Polarized glasses, hat, sunscreen','Wet-wade shoes / sandals','Water & snacks','Towel & dry clothes in the car'],
    verify:['Check CDFW recent-plants list for the South Fork Tuolumne / Moccasin before you go.','Confirm which regs apply where you plan to fish (park vs NF boundary).','Buy licenses online before Groveland.']
  }
},
{
  id:'tuolumnemeadows', name:'Tuolumne Meadows — Lyell & Dana Forks', type:'car',
  region:'Tuolumne Meadows · Yosemite high country', drive:3.5, len:'2 nts · Evergreen (day-trip up)',
  miles:'1–5 mi meadow walking', gain:'gentle',
  s:[5,4,3,2,5], wild:true, skinny:true, permit:'CA license + park entry',
  fish:'Wild brook / rainbow / brown', swim:'Lyell Fork slabs ~',
  season:[7], peak:[7], epic:false, status:'ready', url:null, coord:[37.8730,-119.3350],
  at:'https://www.alltrails.com/search?q=Lyell%20Fork%20Tuolumne%20Meadows',
  blurb:'Cold at 8,600 ft even in a heat wave, gentle meadow banks, and eager wild trout rising to dries in the finest granite meadow in the Sierra. The tax is a ~2 h drive over Tioga. Alt for Jul 22–24.',
  d:{ tag:'Alternative · Jul 22–24 · the high-country classic',
    over:[
      'The alternative that arguably beats Poopenaut on pure experience. At 8,600 feet the Lyell and Dana Forks stay cold no matter what the valleys do in a heat wave, they wind through the most beautiful granite meadow in the Sierra, and the banks are flat and forgiving — no 800-foot climb, no gate. The wild brook, rainbow, and brown trout here are eager and they look up, which makes this a dream place to learn the dry fly.',
      'The tax is windshield time. From Evergreen it is roughly two hours each way over Tioga Road, so this is one big day, not a quick morning. But if you would trade the drive for gentle terrain, cold water, and rising fish in a cathedral of granite, this is the best all-around fly day of the four. Late July is prime: run-off has dropped, the water is clear, and the meadow is green.',
      'Verdict: best experience and most beginner-kind terrain of the alternatives — as long as you are willing to drive. Tioga Road is open (it reopened May 15 this year, the earliest in 16 years).'
    ],
    why:{
      scenery:'The Lyell Fork sliding over granite slabs beneath Cathedral and Mammoth Peaks — arguably the finest river-meadow scene in the range.',
      fish:'Cold high-country water full of eager wild brook, rainbow, and brown trout that rise freely to dries — high catch odds and the classic Sierra dry-fly experience.',
      wildlife:'Mule deer, marmots, Belding’s ground squirrels, the occasional bear, and Clark’s nutcrackers. Big open sightlines.',
      bugs:'The catch: Tuolumne Meadows mosquitoes can be fierce in July, morning and evening. A head net and repellent earn their place.',
      water:'Cold, clear pools and the famous Lyell Fork slabs — the best swimming-and-lounging river in the high country. Bracing but glorious.'
    },
    route:{mode:'car', basecamp:'Evergreen Lodge (long day-trip up over Tioga) — or relocate to Tuolumne for a night to get more water time.', dayhikes:[
      'Lyell Fork footbridges & meadow · 1–3 mi · flat · the classic dry-fly water',
      'Dana Fork along the highway · roadside · quick pocket-water sessions',
      'Gaylor Lakes (Tioga Pass) · 3 mi RT · 1,000 ft · alpine brook-trout lakes if you want to climb'
    ]},
    fish:{ water:'Lyell & Dana Forks of the Tuolumne, Tuolumne Meadows', species:'Wild brook, rainbow & brown trout',
      method:'Barbless artificial only (inside the park)', season:'Prime mid-July–September once run-off drops',
      catch:4, label:'Reliable — classic Sierra dry-fly', gear:'9 ft 5-wt (or a delicate 3–4 wt for the meadow); 9 ft 5X leader',
      flies:['Parachute Adams #16','Elk Hair Caddis #16','Royal Wulff #14','Griffith’s Gnat #18','Foam hopper #12'],
      timing:'All day in the meadow; evening caddis on the Lyell Fork is superb.' },
    wild:['Wild brook, rainbow & brown trout','Mule deer & marmots','Belding’s ground squirrels','Clark’s nutcracker','Black bear (store food properly)'],
    water:{spots:['Lyell Fork granite-slab pools','Dana Fork runs','Cold, clear high-country water'], skinny:'The Lyell Fork slabs are a rite of passage — sun-warmed granite, deep green pools, and enough space to find privacy. Cold, but worth every gasp.'},
    permit:{ system:'CA sport-fishing license (16+) + Yosemite park entry',
      cost:'License as above; park entry per vehicle (no day-use reservation required in 2026)', where:'Buy license online; pay entry at Big Oak Flat en route',
      when:'Year-round season; comfortable to fish once Tioga is open', notes:'Inside the park: artificial lures with single barbless hooks, no bait. Store all food in bear boxes — this is heavy bear country.' },
    drive:{ time:'~3.5 h Pacifica→Evergreen; then ~1.75–2 h Evergreen→Tuolumne Meadows over Tioga Rd',
      route:'Hwy 120 east through Big Oak Flat entrance, up Tioga Rd (120) to Tuolumne Meadows; park at the Lyell Fork / Wilderness Center area',
      flags:['Requires Tioga Road open — it is (reopened May 15, 2026); reconfirm before you go','A long day-trip from Evergreen; leave early','Afternoon thunderstorms are common at elevation — watch the sky','Fierce July mosquitoes — bring a head net and repellent'] },
    safety:['Afternoon thunderstorms build fast at 8,600 ft — be off open meadow and high ground if it turns.','Sun and altitude: hydrate, sunscreen, ease into the first hour.','Bear country: use the bear boxes, never leave food in the car cabin.','Mosquitoes are the real adversary here in July — cover up.'],
    insider:['Same starter kit as the Poopenaut page — a lighter 3–4 wt is a nice luxury here but not required.','Sight-fish: walk the bank slowly and look for rises and shapes before you cast.','Meadow fish spook easily — long leaders, soft presentations, approach low.','If the meadow is buggy, the Dana Fork along the road catches more breeze.'],
    pack:['CA fishing license','Fly rod outfit + tippet & flies','Head net + repellent (non-negotiable in July)','Polarized glasses, hat, sun hoody','Layers + rain shell (afternoon storms)','Water, food, bear-aware snacks'],
    verify:['Confirm Tioga Road open (nps.gov Yosemite road status) — reliable by late July.','Recheck flows/run-off; a big snow year pushes the prime window later.','Reconfirm park fishing regs and bear-storage rules.','Check the afternoon thunderstorm forecast.']
  }
},
{
  id:'cherrylake', name:'Cherry Lake — Stillwater Hedge', type:'car',
  region:'Stanislaus NF · west of Groveland', drive:3.5, len:'2 nts · Evergreen Lodge',
  miles:'shore or float-tube', gain:'minimal',
  s:[4,3,3,3,4], wild:false, skinny:true, permit:'CA license (NF — general regs)',
  fish:'Planted rainbow / brown / kokanee', swim:'Warm-surface coves ~',
  season:[7], peak:[7], epic:false, status:'ready', url:null, coord:[37.9750,-119.9150],
  at:'https://www.alltrails.com/search?q=Cherry%20Lake%20Stanislaus',
  blurb:'The hedge: a big granite reservoir with planted rainbows, holdover browns and kokanee, on general NF regs (keep a few). Weakest fishing, easiest day, best insurance if the rivers run warm. Alt for Jul 22–24.',
  d:{ tag:'Alternative · Jul 22–24 · the stillwater hedge',
    over:[
      'The hedge. If the rivers run warm and low, if two beginners just want a relaxed shore-or-float-tube day, or if you want a different discipline entirely, Cherry Lake is the genuine stillwater option — a big granite reservoir west of Groveland with planted rainbows, holdover browns, and kokanee salmon. It sits on Stanislaus National Forest land, so general California regulations apply and you can actually keep a few for the campfire.',
      'Be honest about what it is: the weakest fishing of the four, and a rough, slow road in. It is not a blue-ribbon fishery. But it fishes well at dawn and dusk near the inlets, it is easy and low-stakes, it swims beautifully on a hot afternoon, and it is your best insurance if a July heat wave has knocked the rivers back. Bring a float tube or fish the shoreline; a sink-tip line or a spinning rod opens up the deeper, cooler water.',
      'Verdict: not the best fishing, but a real, useful alternative — the weather-and-water hedge, the easy day, and the one place here where a fish can legally come home with you.'
    ],
    why:{
      scenery:'A large granite-rimmed reservoir with quiet coves and big Sierra sky. Less dramatic than the river canyons, but wide-open and peaceful.',
      fish:'Planted rainbows plus holdover browns and kokanee. Best at dawn and dusk near inlets and drop-offs; midday it goes deep and quiet. General NF regs — you may keep a limit.',
      wildlife:'Osprey and bald eagles working the lake, deer at the margins, and bear in the surrounding forest.',
      bugs:'Typical summer mosquitoes near shore at dusk; a breeze on the water usually keeps them down.',
      water:'A warm surface over cold depths — the best plain-fun swimming of the four on a hot day, with private coves if you paddle out.'
    },
    route:{mode:'car', basecamp:'Evergreen Lodge (~1 h, rough road) — Cherry Valley Campground sits at the lake if you want to be on the water.', dayhikes:[
      'Cherry Lake shoreline & dam · easy · cast the inlets and coves',
      'Float-tube or kayak the coves · on-water · reaches the cooler drop-offs',
      'Preston Falls (Tuolumne, nearby) · 8.6 mi RT · a wild-river leg-stretcher if you want moving water'
    ]},
    fish:{ water:'Cherry Lake (reservoir), Stanislaus NF', species:'Planted rainbow, holdover brown, kokanee',
      method:'Fly with sink-tip / streamers, or ultralight spin; general CA regs (bait allowed)',
      season:'Spring & early summer best; summer fishes dawn & dusk', catch:3, label:'Moderate — reservoir, best early & late',
      gear:'9 ft 5–6 wt with a sink-tip helps; or ultralight spin, 4 lb',
      flies:['Olive/black Woolly Bugger #8–10','Callibaetis nymph #16','Zebra Midge #18','Kastmaster / Thomas Buoyant (spin)'],
      timing:'Dawn and dusk near the inlets and drop-offs; go deep midday.' },
    wild:['Planted rainbow trout','Holdover brown trout','Kokanee salmon','Osprey & bald eagle','Black bear (forest margins)'],
    water:{spots:['Inlet & cove shorelines','Cold drop-offs (go deep midday)','Warm-surface swimming coves'], skinny:'Paddle to a far cove and the reservoir is all yours — the warmest, easiest swimming of the four on a hot afternoon.'},
    permit:{ system:'CA sport-fishing license (16+); no park entry (National Forest)',
      cost:'License as above; free NF access', where:'Buy online at CDFW or in Groveland',
      when:'Year-round; summer best at first and last light', notes:'General CA freshwater regs on the NF: bait is legal and you may keep a limit (typically 5 trout). Check current CDFW limits for this water.' },
    drive:{ time:'~3.5 h Pacifica→Evergreen; then ~1 h Evergreen→Cherry Lake on a slow, rough forest road',
      route:'Hwy 120 west toward Groveland, then Cherry Lake Rd (Forest Rd 1N07) north to the lake and dam',
      flags:['Cherry Lake Rd is long, narrow, and rough — allow more time than the mileage suggests','Remote: no services, no reliable signal — fuel up and download maps','Fire-season road/area closures are possible — check Stanislaus NF alerts'] },
    safety:['Rough, remote road — carry a spare, water, and a paper/offline map.','Cold deep water under a warm surface — wear a PFD in a tube or kayak.','Afternoon wind can build on the open lake; watch small craft.','Fire season: check Stanislaus NF closures before you commit.'],
    insider:['Same starter kit as the Poopenaut page; add a cheap sink-tip line, or just bring a spinning rod for the lake.','Fish the inlets where the creek brings cool, oxygenated water — that is where fish stack in summer.','A float tube doubles your water and reaches the cool drop-offs the shore can’t.','Dawn is worth the early alarm here more than anywhere else on this list.'],
    pack:['CA fishing license','Fly rod (sink-tip) and/or spinning rod','Float tube or kayak + PFD (optional but great)','Polarized glasses, hat, sunscreen','Plenty of water & food (remote)','Offline map; check the spare tire'],
    verify:['Check Stanislaus NF alerts for fire/road closures on Cherry Lake Rd.','Confirm current CDFW limits and any low-water access issues.','Check the reservoir level — a very low year shrinks access and warms the lake.']
  }
});

/* Cross-link the four Jul 22–24 fishing options as alternatives */
const FISHWKND=['poopenaut','sftuolumne','tuolumnemeadows','cherrylake'];
const ALT_NOTE={
  poopenaut:'Best fishing, hardest access — cold tailwater, gated, 800-ft climb',
  sftuolumne:'The easy win — roadside, stocked + wild, fish the evening rise',
  tuolumnemeadows:'Best experience — cold high-country dry-fly (long drive over Tioga)',
  cherrylake:'The hedge — stillwater, keep a few, insurance if rivers run warm'
};
window.TRIPS.forEach(t=>{ if(FISHWKND.includes(t.id)){
  t.d.alts=FISHWKND.filter(x=>x!==t.id).map(id=>({id,name:window.TRIPS.find(y=>y.id===id).name,note:ALT_NOTE[id]}));
}});

/* ============================================================
   SOLO EXPEDITIONS — separate section of Get Out. 5-7 day solo
   (Jeremy + Cooper where noted) trips. Reprioritized: scenery >
   streams/alpine lakes to swim+fish > solitude (safe). Mosquitoes
   = hard blocker, solved mainly by September timing. No off-trail.
============================================================ */
window.TRIPS.push(
{
  id:'stuartfork', name:'Stuart Fork — Emerald & Sapphire Lakes', type:'backpack',
  region:'Trinity Alps Wilderness · NorCal', drive:5, len:'5–7 days · solo',
  miles:'~4/day avg (27.2 mi total)', gain:'~650/day avg (4,583 ft total)',
  s:[5,4,4,3,5], wild:true, skinny:true, permit:'Free self-issue', fish:'Wild trout',
  swim:'Warm granite-basin lakes ~', season:[8,9], peak:[9], epic:true, status:'ready', url:null,
  coord:[40.8733585,-122.9180423],
  at:'https://www.alltrails.com/trail/us/california/stuart-fork-trail-to-emerald-and-sapphire-lakes',
  blurb:'The current #1: dramatic granite under Sawtooth Ridge, the warmest and most swimmable lakes on the list, real fishing, zero permit friction, and the cleanest solitude-but-safe route of anything here.',
  d:{
    tag:'Solo expedition · 5–7 days · Cooper welcome · free self-issue permit',
    dog:{ok:true,agency:'Trinity Alps Wilderness · Shasta-Trinity/Klamath National Forest',note:'Leashed dogs allowed throughout — no restricted zones on this route.'},
    solo:{altitude:'Gentle by comparison — trailhead at 2,900 ft, high point around 7,500 ft near Sapphire Lake. No acclimation needed.',
      comms:'No cell service once you’re past Trinity Center. The trail is well-maintained and well-marked, so navigation risk is low even solo.',
      avoidOffTrail:[],
      mosquito:{status:'Real but typically milder than the Sierra — one guide notes Trinity mosquitoes are "never anywhere near as bad as Lassen."',timing:'Peaks July–early August; mid-August through September is the recommended window for fewer bugs and fewer people.'}},
    over:[
      'This is the trip that wins on the reordered priorities. Stuart Fork climbs gradually through Morris Meadows into a basin of granite peaks under Sawtooth Ridge, and because Emerald and Sapphire Lakes sit at 5,500 to 6,000 feet rather than 10,000-plus, they are genuinely warm enough to actually enjoy swimming in — a real differentiator from the high alpine picks on this list, where "swimmable" usually means a bracing dip, not a lounge.',
      'The route stays on a well-maintained, well-marked trail the entire way — no cross-country routefinding required, which matters more solo than with company. Multiple recent trip reports describe passing only two or three other groups in a full day, and the permit system removes all booking anxiety: no quota, no lottery, no advance reservation. You show up, self-issue at the ranger station, and go.',
      'Plan on 5 to 7 days at an easy 4 miles a day, which leaves enormous room to basecamp at Sapphire Lake and day-hike further — to Portuguese Lake, up toward Caribou Pass, or just fish and swim and read in camp. This is the low-stress, high-payoff pick on the list.'
    ],
    why:{
      scenery:'Sawtooth Ridge and the granite basin around Emerald and Sapphire Lakes are dramatic in a totally different register than the Sierra — "California\u2019s Alps," genuinely.',
      fish:'Wild trout throughout Stuart Fork and both lakes. Reports describe good luck at Sapphire specifically; less pressured than anything in the main Sierra.',
      wildlife:'Black bear, mule deer regularly seen in Morris Meadows, dippers on the creek, occasional bald eagle over the lakes.',
      bugs:'Real but typically milder than the Sierra — one guide notes Trinity mosquitoes are "never anywhere near as bad as Lassen." Worse July, much better by September.',
      water:'The best swimming on this whole list. Warm enough to actually want to get in, with private coves at both lakes once you are a few days deep.'
    },
    route:{mode:'backpack',options:[
      {name:'Stuart Fork to Sapphire Lake',stat:'5–7 days · 27.2 mi RT · 4,583 ft (4.7★)',text:'Stuart Fork TH through Morris Meadows (9.2 mi, gradual) to a basecamp near Sapphire or Emerald Lake. From there, day-hike with no pack: Portuguese Lake, the Caribou Pass overlook, or simply fish and swim for two or three full days before heading back the way you came.'},
      {name:'Add Caribou Lakes overlook',stat:'+1 day, day-hike from basecamp',text:'A steep but on-trail push up toward Caribou Pass gives a sweeping view down into the Caribou Lakes basin — a worthy stretch-goal day if you have the extra time.'}
    ]},
    fish:{water:'Stuart Fork, Emerald Lake, Sapphire Lake',species:'Wild rainbow & brown trout',
      method:'Fly or lure, general CA regs apply on this water',season:'Best July–September once flows drop',
      catch:3,label:'Moderate — wild, unpressured',gear:'4–5 wt, 5x leader; dry-dropper on the creek',
      flies:['Elk Hair Caddis #14','Stimulator #14','Pheasant Tail #16','Copper John #16'],
      timing:'Creek pools below the lakes fish best; work the lake inlets morning and evening.'},
    wild:['Wild rainbow & brown trout','Black bear','Mule deer','American dipper','Bald eagle (occasional)'],
    water:{spots:['Emerald Lake','Sapphire Lake','Stuart Fork pools'],skinny:'Both lakes are warm enough for real, unhurried swimming — the standout on this list. Private coves are easy to find a few days in.'},
    permit:{system:'Free wilderness permit + free campfire permit, self-issue',
      cost:'$0',where:'Weaverville Ranger Station (360 Main St) or the closer Coffee Creek/Big Bar fire stations on Hwy 3',
      when:'No quota, no advance reservation — self-issue any day, including weekends via the kiosk',
      notes:'Pick up both permits before you drive to the trailhead. If arriving after hours, call the Weaverville station up to three days ahead to have a permit left in the after-hours box.'},
    drive:{time:'~5 h from Pacifica to the Stuart Fork Trailhead',
      route:'I-505/I-5 to Hwy 20 to Hwy 3 north through Weaverville; turn off at Trinity Alps Resort onto the dirt road to Bridge Camp and the trailhead',
      flags:['2026 is trending toward an above-normal fire season, and far-NorCal specifically has had exceptionally dry fuels — check InciWeb and Shasta-Trinity NF alerts close to your date','Trailhead parking (Bridge Camp, ~50 spaces) fills on summer weekends — arrive early or go midweek','No cell service past Weaverville']},
    safety:['Fire season is the real risk factor here in 2026 — have a backup plan and check conditions the week you leave.','Creek crossings on the way to Morris Meadows can be tricky in early season; by August/September they are straightforward.','No cell service — carry a satellite communicator solo.','Standard bear-aware food storage; canister or proper hang.'],
    insider:['Fish Sapphire Lake specifically — it has the best recent reports of the two.','Camp a night or two extra and just explore without the pack — the terrain rewards it.','Weekday entries see meaningfully fewer people than the Fourth of July / Labor Day weekends.','September gives you both the best bugs and the best solitude of the whole season.'],
    pack:['Free wilderness + campfire permit (printed or in hand)','Bear canister or hang kit','Fly rod + basic kit (see the Kit page)','Swim clothes — you will actually use them here','Satellite communicator','Layers — Trinity nights get cold even when days are warm'],
    verify:['Check Shasta-Trinity NF fire restrictions and InciWeb before you leave.','Call Weaverville Ranger Station (530-623-2121) for current trail conditions.','Confirm Bridge Camp trailhead parking status if going on a weekend.']
  }
},
{
  id:'humphreysbasin', name:'Humphreys Basin — Piute Canyon Loop', type:'backpack',
  region:'John Muir Wilderness · Eastern Sierra', drive:4, len:'6–7 days · solo',
  miles:'~5/day avg (30.1 mi total)', gain:'~730/day avg (5,127 ft total)',
  s:[5,4,4,2,5], wild:true, skinny:true, permit:'Inyo NF quota ✦', fish:'Golden & brook trout',
  swim:'Dozens of alpine lakes ~', season:[8,9], peak:[9], epic:true, status:'ready', url:null,
  coord:[37.2273822,-118.6275569],
  at:'https://www.alltrails.com/trail/us/california/piute-canyon-puppet-lake-and-desolation-lake-loop',
  blurb:'The biggest lake basin in the Sierra — dozens of swimmable alpine lakes under Mt. Humphreys, real golden trout, and genuine solitude once you crest the pass. Stay on-trail per your call; the maintained loop still delivers.',
  d:{
    tag:'Solo expedition · 6–7 days · Cooper welcome · Inyo NF quota permit',
    dog:{ok:true,agency:'John Muir Wilderness · Inyo National Forest',note:'Leashed dogs explicitly allowed on the Piute Pass Trail and throughout Humphreys Basin.'},
    solo:{altitude:'Trailhead at 9,300 ft, Piute Pass tops out at 11,423 ft — real elevation from sea-level Pacifica. A night near Bishop to acclimate is worth it.',
      comms:'No cell service past Bishop. A satellite communicator is worth carrying.',
      avoidOffTrail:['Puppet Pass and the Elba Lake cross-country connector are explicitly flagged in trip reports as requiring real routefinding — skip both solo and stay on the maintained Piute Pass Trail loop through Desolation and Muriel Lakes.'],
      mosquito:{status:'Historically the worst mosquitoes on this list — lower Piute Canyon gets bad most Augusts.',timing:'September is the clear call here. 2026’s low snowpack means bugs are already tracking early and light.'}},
    over:[
      'Piute Pass Trail climbs out of North Lake and crests into the biggest, most lake-dense alpine basin in the entire Sierra Nevada — Humphreys Basin, named for the peak that dominates the skyline. Trip reports describe camping with "not another person in sight, even on a holiday weekend" once you are a few miles past the pass, which is real solitude for country this spectacular.',
      'Per your call, this route stays entirely on the maintained Piute Pass Trail loop through Piute Canyon, Puppet Lake, and Desolation Lake — the off-trail scrambles some parties add (Puppet Pass shortcuts, the Elba Lake cross-country connector) are explicitly flagged in trip reports as requiring real routefinding, which is a different risk calculus solo than with a partner. You do not need them; the maintained loop alone strings together dozens of lakes.',
      'The honest catch is mosquitoes — historically the worst on this whole list, concentrated in lower Piute Canyon before the trail breaks into the open basin. This is squarely a timing problem, not a place problem, and September mostly solves it.'
    ],
    why:{
      scenery:'The single biggest, most open alpine basin in the Sierra — Mt. Humphreys standing over a tundra plain scattered with dozens of lakes. Genuinely epic.',
      fish:'Golden trout in Elba Lake and the Golden Trout Lakes, brook trout throughout. Honest reports: "not blazingly fast, but a handful of brilliantly colored goldens" — real but moderate.',
      wildlife:'Marmots, mule deer, occasional black bear, and if you are lucky, bighorn sheep on the surrounding ridgelines.',
      bugs:'The worst on this list historically — lower Piute Canyon is notorious in a normal July/August. Clears fast once you are up in the open basin, and clears earlier in a low-snow year like 2026.',
      water:'Dozens of alpine lakes to choose from — cold, but the sheer number means you can always find a private one for a real swim.'
    },
    route:{mode:'backpack',options:[
      {name:'Piute Canyon / Puppet / Desolation Loop',stat:'6–7 days · 30.1 mi loop · 5,127 ft (5.0★)',text:'North Lake TH over Piute Pass (11,423 ft) into Humphreys Basin, looping through Piute Canyon past Puppet Lake and Desolation Lake before returning over the pass. Entirely on maintained trail. At 30 miles over a week, this is unhurried — basecamp two or three nights in the basin itself and day-hike without a pack to Muriel Lake, Square Lake, or the Golden Trout Lakes.'}
    ]},
    fish:{water:'Humphreys Basin lakes: Elba, Golden Trout Lakes, Muriel, Desolation',species:'Golden trout, brook trout',
      method:'Fly or ultralight spin',season:'July–September once ice-out is complete',
      catch:3,label:'Moderate — real goldens, not a lock',gear:'3–4 wt, 6x leader for spooky goldens',
      flies:['Parachute Adams #16–18','Griffith\u2019s Gnat #18','Zebra Midge #18','Small gold spinner'],
      timing:'Midday for goldens in the higher lakes; morning/evening for brook trout throughout.'},
    wild:['Golden trout','Brook trout','Marmots','Mule deer','Bighorn sheep (occasional, ridgelines)','Black bear'],
    water:{spots:['Humphreys Basin lakes (dozens)','Desolation Lake','Muriel Lake'],skinny:'Cold, but the sheer density of lakes means a private one is always close — pick a wind-sheltered cove for the least brutal entry.'},
    permit:{system:'Inyo NF wilderness permit — Piute Pass trailhead quota (recreation.gov)',
      cost:'$6 permit + $5/person',where:'recreation.gov, "Inyo National Forest — Wilderness Permits"',
      when:'30/day cap. 60% released 6 months in advance, 40% released 2 weeks in advance, both at 7am PT.',
      notes:'Bear canister is REQUIRED above 10,000 ft and no campfires are allowed above 10,000 ft north of Glacier Divide — most of this route qualifies, so plan to be canister-only.'},
    drive:{time:'~4 h from Pacifica to the North Lake/Piute Pass Trailhead near Bishop',
      route:'US-395 to Bishop, then North Lake Rd off Hwy 168 to the trailhead',
      flags:['No cell service past Bishop','North Lake Rd is narrow and unpaved in sections near the trailhead — take it slow','Quota season runs May 1–Nov 1; outside that window permits are unlimited walk-up']},
    safety:['Piute Pass tops 11,423 ft — real elevation from sea-level Pacifica. Consider a night near Bishop to acclimate.','Bear canister required above 10,000 ft — no exceptions, no hangs.','No cell service; a satellite communicator is genuinely worth carrying solo.','Afternoon thunderstorms build fast at this elevation in summer — be off exposed terrain by early afternoon.'],
    insider:['September is the single biggest lever on this trip — bugs down, crowds down, water still fishable.','Push past the first lakes past the pass; pressure and mosquitoes both drop the deeper you go.','Square Lake has tree cover and less wind than Desolation Lake if you want a calmer camp.','A wind-exposed campsite is a real mosquito-avoidance strategy, not just a view choice.'],
    pack:['Inyo NF wilderness permit (printed)','Bear canister (required above 10,000 ft)','Fly rod + basic kit','Warm layers — nights are genuinely cold at 10,500+ ft','Satellite communicator','Sun protection — exposure is intense at this elevation'],
    verify:['Reconfirm Piute Pass quota availability close to your date on recreation.gov.','Check current bear-activity notices for the basin.','Watch the 2026 mosquito reports on High Sierra Topix in the weeks before you go.']
  }
},
{
  id:'grandcanyontuolumne', name:'Grand Canyon of the Tuolumne — Waterwheel Falls', type:'backpack',
  region:'Yosemite High Country', drive:4, len:'5–7 days · solo',
  miles:'flexible — turn around anytime (up to 29.5 mi one-way)', gain:'4,826 ft to the far end',
  s:[5,4,3,3,5], wild:true, skinny:true, permit:'Yosemite lottery ✦', fish:'Wild trout',
  swim:'Massive granite river pools ~', season:[8,9], peak:[9], epic:true, status:'ready', url:null,
  coord:[37.8768893,-119.3457162],
  at:'https://www.alltrails.com/trail/us/california/waterwheel-falls-and-the-grand-canyon-of-the-tuolumne-trail',
  blurb:'The single most jaw-dropping feature on this whole list: the Tuolumne River drops through a granite canyon in a chain of huge waterfalls, with swimming pools the entire way down. No dog on this one — worth it anyway.',
  d:{
    tag:'Solo expedition · 5–7 days, flexible turnaround · Cooper stays home · NPS wilderness permit',
    dog:{ok:false,agency:'Yosemite National Park Wilderness · National Park Service',note:'Dogs are prohibited on all Yosemite backcountry trails, including this one — Cooper stays home for this one.'},
    solo:{altitude:'Trailhead at Tuolumne Meadows sits at 8,600 ft; the route mostly descends from there, so altitude is a lesser concern once you’ve acclimated at the trailhead for a day.',
      comms:'No cell service in the canyon. A communicator is worth it given how few people you’ll see past Waterwheel Falls.',
      avoidOffTrail:[],
      mosquito:{status:'2026 reports from Glen Aulin itself have been mild even in late June.',timing:'Any time August onward should be comfortable; September for the safest margin.'}},
    over:[
      'Below Tuolumne Meadows, the river drops off the edge of the high country and spends the next fifteen miles carving through a massive granite gorge in a chain of huge cascading waterfalls — Waterwheel Falls is the famous one, but the whole descent is a continuous sequence of slides, pools, and falls that most Yosemite visitors never see. This is the best single piece of scenery on this entire list.',
      'It quiets down fast. Glen Aulin, a few miles in, sees real day-hiker and High Sierra Camp traffic, but past Waterwheel Falls the crowds fall away almost completely — a genuinely different feel from the Half Dome corridor or the High Sierra Camps loop. The huge granite slab pools along the river are the best swimming of anything on this list, and the river holds real wild trout.',
      'There is no fixed loop closure required here — this is an out-and-back from Tuolumne Meadows, and the honest move for a solo trip is to push as far down the canyon as your week allows, then turn around. Further is quieter; there is no wrong amount.'
    ],
    why:{
      scenery:'The single most epic feature on this list — a massive granite canyon carved by a chain of huge waterfalls. Genuinely without equal in California.',
      fish:'Wild trout in the Tuolumne River itself — real fishing, not an afterthought, in water most people only see from a photo.',
      wildlife:'Mule deer, black bear (real bear country — hang or canister without exception), peregrine falcons on the canyon walls.',
      bugs:'2026 reports from Glen Aulin itself have been mild even in late June. Improves further into summer.',
      water:'The best swimming of the whole list — huge sun-warmed granite slabs and deep pools the entire length of the canyon.'
    },
    route:{mode:'backpack',options:[
      {name:'Waterwheel Falls out-and-back',stat:'3–4 days · ~18–20 mi RT · ~2,400 ft',text:'Tuolumne Meadows through Glen Aulin to Waterwheel Falls and back — the classic, still spectacular, still quiet past Glen Aulin itself.'},
      {name:'Push to Pate Valley',stat:'5–7 days · up to 29.5 mi one-way · 4,826 ft',text:'Continue past Waterwheel Falls deeper into the canyon toward Pate Valley and the Return Creek confluence for real solitude and the best fishing — turn around whenever the week runs out. No shuttle, no fixed loop; just go as deep as you want and come back.'}
    ]},
    fish:{water:'Tuolumne River, Grand Canyon of the Tuolumne',species:'Wild rainbow trout',
      method:'Barbless artificial only (Yosemite NP regs)',season:'Best once flows drop, typically August onward',
      catch:3,label:'Moderate — real, unpressured river fishing',gear:'4–5 wt, 9 ft, 5x leader',
      flies:['Elk Hair Caddis #14–16','Parachute Adams #16','Pheasant Tail #16','Golden Stone nymph #10'],
      timing:'Riffles and pool tailouts, morning and evening.'},
    wild:['Wild rainbow trout','Mule deer','Black bear','Peregrine falcon','Belding\u2019s ground squirrel'],
    water:{spots:['Waterwheel Falls pools','Slab pools the length of the canyon','Quiet beaches near Pate Valley'],skinny:'The best swimming on this entire list — huge warm granite slabs and deep green pools, more private the further down canyon you go.'},
    permit:{system:'Yosemite wilderness permit (NPS, recreation.gov)',
      cost:'$10 lottery/reservation fee + $5/person confirmed',
      where:'recreation.gov — Yosemite wilderness permits',
      when:'24-week rolling lottery. To start Aug 9–15, 2026, for example, the lottery window is Feb 15–21; remaining 40% releases 7 days ahead of any date.',
      notes:'Do not count on a walk-up permit — Yosemite explicitly warns few if any unreserved permits are available in person. Book the lottery.'},
    drive:{time:'~4 h from Pacifica to Tuolumne Meadows',
      route:'Hwy 120 east through Big Oak Flat entrance, Tioga Rd to Tuolumne Meadows',
      flags:['Tioga Road opened May 15, 2026 (earliest in 16 years) — reconfirm it is still open, though by August/September this is essentially guaranteed','No day-use reservations required in Yosemite for 2026','Bear canister required — this is serious bear country']},
    safety:['Real bear country the entire route — canister without exception, no hangs.','Afternoon thunderstorms build fast at 8,600+ ft — be aware of exposed granite sections.','No cell service in the canyon; carry a satellite communicator given how few people you will see past Waterwheel Falls.','The trail loses and regains real elevation on the way back out — pace your turnaround day accordingly.'],
    insider:['Push past Waterwheel Falls if you have the days — the crowd drop-off is dramatic and the fishing improves.','The slab pools just below Waterwheel Falls are the single best swimming stop on the whole route.','Fill water and filter often; the canyon is hot and exposed by midday in August.','A partial trip (Waterwheel and back) is a completely legitimate 3-4 day version if you would rather stack this with something else.'],
    pack:['Yosemite wilderness permit (printed)','Bear canister (required)','Fly rod + basic kit','Sun protection — the granite reflects hard','Satellite communicator','Water filter/treatment — you will refill constantly'],
    verify:['Confirm your lottery result and print the permit within the window.','Check current Tioga Road and Yosemite alerts before you leave.','Reconfirm bear activity notices for the Tuolumne backcountry.']
  }
},
{
  id:'lostcoastloop', name:'Lost Coast & King Crest — the Full Loop', type:'backpack',
  region:'King Range NCA · North Coast', drive:4, len:'6–7 days · solo',
  miles:'~6/day avg (42.4 mi total)', gain:'8,195 ft total', s:[5,1,5,4,5],
  wild:false, skinny:true, permit:'King Range permit ✦', fish:'Surf only',
  swim:'Ocean + creeks, naked beach camp ~', season:[7,8,9,10,11], peak:[9,10],
  epic:true, status:'ready', url:null, coord:[40.293,-124.353],
  at:'https://www.alltrails.com/trail/us/california/lost-coast-king-range-loop',
  blurb:'Restored per your call. The wildest, most solitary trip on the list and the only one that is genuinely bug-free — but structurally the weakest match to the swim/fish priority, since there are no alpine lakes and the fishing is surf-only.',
  d:{
    tag:'Solo expedition · 6–7 days · Cooper welcome · King Range BLM permit, tide-gated',
    dog:{ok:true,agency:'King Range National Conservation Area · Bureau of Land Management',note:'Leashed dogs allowed throughout — BLM land, not a national park.'},
    solo:{altitude:'Sea level — no altitude concern at all, the only trip on this list where that’s true.',
      comms:'No cell service anywhere on the King Range. BLM has no dedicated search-and-rescue team out here — a satellite communicator is genuinely important, not optional, on this one.',
      avoidOffTrail:['The three tide-gated beach sections are the real hazard, not routefinding — time your daily starts against the tide tables, not your own schedule.'],
      mosquito:{status:'Essentially bug-free — coastal, breezy, no alpine meadow breeding grounds.',timing:'The one trip on this list where timing is driven entirely by tides and fire season, not bugs.'}},
    over:[
      'This extends the Mattole-to-Black-Sands trip into a full week: walk the wild coast — elephant seals, black bears, whales, tide pools, the works — then climb inland and return along the King Crest ridgeline with sweeping ocean-to-peak views. It is a genuinely different biome from everything else on this list, and the wildlife here is maxed out compared to anywhere else you are considering.',
      'Where it is honest about ranking lower under your current priorities: there are no alpine lakes at all, and the fishing is surf-only and weak. If priority #2 is specifically "streams and alpine lakes to swim and fish," this trip does not deliver that the way Stuart Fork or Humphreys Basin do. What it delivers instead is the best solitude and the best wildlife of the six, plus a real, practical bonus — it is essentially the only trip on this list where mosquitoes are simply not a consideration. Coastal, breezy, no alpine meadow breeding grounds.',
      'The real hazard here is not bugs or routefinding, it is tides. Three sections of beach are genuinely impassable at the wrong window, and BLM has no dedicated search-and-rescue presence out here. Plan your daily starts against the tide table, not your own schedule, and this is a completely safe, spectacular week.'
    ],
    why:{
      scenery:'Wild, undeveloped coastline backed by the steep King Range — one of the last stretches of California coast with no road access at all.',
      fish:'Honest weakness here: surf fishing only, and it is a bonus at best, never the reason to come.',
      wildlife:'The best on this list by a wide margin — Roosevelt elk, elephant seals, black bears, whales offshore, tide pools.',
      bugs:'Essentially bug-free — the one trip on this list where the mosquito blocker is simply not in play.',
      water:'Ocean swimming plus freshwater creek crossings; the naked beach camping you loved on the original Mattole trip is still very much available here.'
    },
    route:{mode:'backpack',options:[
      {name:'Full Lost Coast & King Range Loop',stat:'6–7 days · 42.4 mi loop · 8,195 ft',text:'Walk the beach from Mattole south, tide-gated through the three impassable zones, to Black Sands Beach — then climb inland via the King Crest Trail and return along the ridge, closing the loop with no shuttle required. Beach days are short and tide-paced; ridge days can run longer.'}
    ]},
    fish:{water:'Surf, tide pools, and small coastal creeks',species:'Surfperch (incidental)',
      method:'Surf spinning rig',season:'Incoming tide, any time of year',
      catch:1,label:'Weak — a bonus, never the plan',gear:'9–10 ft surf rod, 3–4 oz pyramid sinker',
      flies:['Surf rig + sand crab or Gulp! sandworm','Small metal jig'],
      timing:'Incoming tide on sandy stretches only.'},
    wild:['Roosevelt elk','Elephant seals','Black bear','Whales (offshore, seasonal)','Tide pool life','Peregrine falcon'],
    water:{spots:['Ocean beach the full length','Coastal creek crossings','Tide pools at low water'],skinny:'The naked beach camping that hooked you on this trip originally is still here — remote stretches with nobody around for miles.'},
    permit:{system:'King Range Wilderness Permit (BLM, recreation.gov)',
      cost:'$6 permit + $12/person (17+)',where:'recreation.gov — King Range Wilderness Permits',
      when:'Rolling release ~3 months in advance at 7am PT. 3 in-person walk-up permits available daily via lottery at the King Range Visitor Center if you strike out online.',
      notes:'CHECK THE TIDES before booking dates — three sections are genuinely impassable at the wrong window. BLM has no dedicated search-and-rescue out here; proper planning is not optional.'},
    drive:{time:'~4 h from Pacifica to the Mattole trailhead',
      route:'Hwy 101 to Ferndale/Petrolia, then Lighthouse Rd to the Mattole trailhead',
      flags:['No cell service anywhere on the King Range','2026 fire-season outlook is above-normal for far-NorCal — check current conditions close to your date','Last few miles of access road are rough — allow extra time']},
    safety:['Tides are the real hazard, not routefinding — carry a current tide table and plan daily mileage around it, not the reverse.','No BLM search-and-rescue presence — a satellite communicator is not optional here.','Sneaker waves are real; never turn your back on the ocean on the beach sections.','Standard bear-aware food storage.'],
    insider:['September/October is the sweet spot — best weather window, fewest bugs anywhere, good wildlife activity.','Time the tide-gated sections for early morning departure so you are never racing the incoming tide.','The King Crest ridge return gives you the ocean-to-peak view the pure beach walk does not.','This remains the trip to bring nothing but a book and a rod for — it is not about the fishing.'],
    pack:['King Range wilderness permit (printed)','Current tide table for your exact dates','Satellite communicator (important here specifically)','Bear-aware food storage','Surf rod if you want the bonus fishing','Layers — coastal fog and wind are real even in warm months'],
    verify:['Check tide tables for your exact dates before booking — this is the single most important pre-trip step.','Check Shasta-Trinity/King Range fire and smoke conditions close to departure.','Reconfirm the King Range Visitor Center walk-up lottery schedule if you did not book online.']
  }
},
{
  id:'emigrantsolo', name:'Emigrant Wilderness — Grouse, Bear & Gem Lakes', type:'backpack',
  region:'Emigrant Wilderness · West Sierra', drive:4, len:'5–7 days · solo',
  miles:'~4/day avg (20.4 mi total, extendable)', gain:'~630/day avg (3,149 ft total)',
  s:[5,5,3,3,4], wild:true, skinny:true, permit:'Free self-issue', fish:'Wild brook & rainbow',
  swim:'Granite lakes ~', season:[8,9], peak:[9], epic:true, status:'ready', url:null,
  coord:[38.30,-119.83],
  at:'https://www.alltrails.com/trail/us/california/crabtree-bear-lake-gem-lake-grouse-lake-loop',
  blurb:'Genuinely tied for #1: your own site already rates this fishing "lights out" — the best catchability of anything on Get Out — under classic granite-dome Sierra scenery, right next to Yosemite without the crowds or the permit lottery.',
  d:{
    tag:'Solo expedition · 5–7 days · Cooper welcome · free self-issue permit',
    dog:{ok:true,agency:'Emigrant Wilderness · Stanislaus National Forest',note:'Leashed dogs allowed throughout.'},
    solo:{altitude:'Trailhead around 6,000 ft, high points near 9,000 ft — moderate, no special acclimation needed.',
      comms:'Spotty to no cell service once you’re in past Bell Meadow.',
      avoidOffTrail:[],
      mosquito:{status:'West-slope Sierra meadows can be buggy in a normal July.',timing:'Improves through August, best by September — same logic as the rest of the Sierra picks.'}},
    over:[
      'Emigrant sits directly against Yosemite\u2019s northwest border and shares the same granite-dome, glacier-polished High Sierra character — without the lottery, the crowds, or the entrance gate. This loop strings together Grouse, Bear, and Gem Lakes from the Crabtree Trailhead on fully maintained trail, and the fishing here already carries the best catchability rating anywhere on your whole site: lights out.',
      'It is also the lowest-friction booking of anything on this list alongside Stuart Fork — free, self-issue, no quota, no advance reservation required. Combined with the Buck Lakes basin explored on the Jeremy-and-David version of this trip, there is enough terrain here for a full week without repeating ground, if you want to extend past the core loop.',
      'This genuinely ties Stuart Fork for the top spot on your reordered priorities. Stuart Fork wins on warmest swimmable water; Emigrant wins on the single best fishing rating you have ever assigned. Hard to go wrong with either.'
    ],
    why:{
      scenery:'Classic High Sierra granite domes and polished slabs, essentially Yosemite\u2019s backcountry character without Yosemite\u2019s crowds or permit system.',
      fish:'The best catchability rating on your entire site — lights out. Wild brook and rainbow throughout the lake chain.',
      wildlife:'Mule deer, black bear, marmots on the granite, and reliable dawn/dusk wildlife activity around the lake margins.',
      bugs:'West-slope Sierra meadows can be buggy in a normal July. Improves through August, best by September — same pattern as the rest of the Sierra picks.',
      water:'Clear granite-basin lakes, cold but genuinely swimmable, with plenty of private shoreline once you are a couple of lakes in.'
    },
    route:{mode:'backpack',options:[
      {name:'Grouse, Bear & Gem Lakes Loop',stat:'5–6 days · 20.4 mi loop · 3,149 ft (4.5★)',text:'Crabtree TH looping through Grouse Lake, Bear Lake, and Gem Lake on maintained trail — an easy pace with real time to fish each lake rather than just pass through.'},
      {name:'Extend into Buck Lakes basin',stat:'+1–2 days',text:'From the same Crabtree TH, the Buck Lakes basin (26.2 mi as its own loop) shares access — link a portion of it on for a fuller week without repeating the core loop.'}
    ]},
    fish:{water:'Grouse Lake, Bear Lake, Gem Lake, and the connecting streams',species:'Wild brook & rainbow trout',
      method:'Fly or ultralight spin',season:'Best late June through September',
      catch:5,label:'Lights out — the best rating on your site',
      gear:'4–5 wt, 8–9 ft, floating line, 9 ft 5x leader, or ultralight spin',
      flies:['Elk Hair Caddis #14–16','Parachute Adams #16','Royal Wulff #14','Copper John #16','Gold Panther Martin (spin)'],
      timing:'All day; dawn and the evening rise are best. Numbers fishing throughout the chain.'},
    wild:['Wild brook trout','Wild rainbow trout','Mule deer','Black bear','Marmots'],
    water:{spots:['Grouse Lake','Bear Lake','Gem Lake'],skinny:'Clear, cold granite-basin water — very swimmable by midday once the sun has been on it a few hours.'},
    permit:{system:'Free wilderness permit, self-issue',cost:'$0',
      where:'Any Stanislaus National Forest ranger station (Groveland or Mi-Wok)',
      when:'No quota, no advance reservation needed',
      notes:'Call ahead up to three days in advance for after-hours pickup if arriving outside business hours.'},
    drive:{time:'~4 h from Pacifica to the Crabtree Trailhead',
      route:'Hwy 108 east through Sonora and Pinecrest to the Crabtree trailhead',
      flags:['No cell service past Pinecrest','Trailhead parking can fill on summer weekends']},
    safety:['Standard bear-aware food storage.','No cell service; carry a satellite communicator solo.','Afternoon thunderstorms possible in summer — plan exposed sections for morning.'],
    insider:['This is the fishing pick if you had to choose one — the catchability rating speaks for itself.','September gives the best combination of low bugs and low crowds.','The Buck Lakes extension is worth it if you want a fuller week without backtracking the same lakes.'],
    pack:['Free wilderness permit (printed)','Bear canister or hang kit','Fly rod + basic kit (see the Kit page)','Satellite communicator','Layers for cold nights'],
    verify:['Confirm current Stanislaus NF fire restrictions before you go.','Check Crabtree trailhead road and parking status if going on a weekend.']
  }
},
{
  id:'goldentrout', name:'Golden Trout Wilderness — Cottonwood Pass', type:'backpack',
  region:'Golden Trout Wilderness · South Sierra', drive:4.5, len:'5–7 days · solo',
  miles:'up to ~40 mi RT, flexible turnaround', gain:'3,028 ft to Big Whitney Meadow alone',
  s:[5,4,3,3,4], wild:true, skinny:true, permit:'Inyo NF quota ✦', fish:'Native golden trout',
  swim:'Golden Trout Creek ~', season:[8,9], peak:[9], epic:true, status:'ready', url:null,
  coord:[36.447678,-118.169739],
  at:'https://www.alltrails.com/trail/us/california/big-whitney-meadow-trail',
  blurb:'The actual namesake wilderness for the fish — native golden trout in their home water, big-sky South Sierra plateau country, and the most serious altitude and remoteness on the list. Route around the dog-restricted Cottonwood Lakes basin entirely.',
  d:{
    tag:'Solo expedition · 5–7 days, flexible turnaround · Cooper welcome (Cottonwood Pass route only) · Inyo NF quota permit',
    dog:{ok:true,agency:'Golden Trout Wilderness · Inyo/Sequoia National Forest',note:'Confirmed dog-friendly specifically on the Cottonwood Pass Trail. The adjacent Cottonwood Lakes Trail (a different trailhead area) prohibits dogs — likely a Sierra bighorn sheep habitat closure — so stay on the Pass route and you’re clear.'},
    solo:{altitude:'The most serious altitude on this list: trailhead at 10,000 ft, the pass itself at 11,200 ft. Spend a night at the Horseshoe Meadow campground before you head in.',
      comms:'Very remote, south of the main Whitney corridor. A satellite communicator is strongly recommended.',
      avoidOffTrail:[],
      mosquito:{status:'High, dry plateau country — generally lighter bug pressure than lake-dense basins.',timing:'August onward is fine; the real driver here is the quota window (late June–mid-September) more than bugs.'}},
    over:[
      'This is the actual namesake wilderness for California\u2019s state fish — Golden Trout Creek and the Rocky Basin Lakes hold native golden trout in their home water, not a stocked or transplanted population like most of the other options on this list. From Horseshoe Meadow, the trail climbs over 11,200-foot Cottonwood Pass onto the Kern Plateau, a vast, open, big-sky landscape that feels nothing like the granite-basin character of the other Sierra picks.',
      'One important routing note: the adjacent Cottonwood Lakes Trail — a different trail from a nearby trailhead area — prohibits dogs, almost certainly a Sierra bighorn sheep habitat closure. This route stays entirely on Cottonwood Pass Trail instead, which is explicitly confirmed dog-friendly, so Cooper is welcome the whole way as long as you take the right trail out of Horseshoe Meadow.',
      'This is also the most serious trip on the list in two honest ways: the trailhead itself sits at 10,000 feet and the pass at 11,200 feet, real altitude to respect solo, and it is genuinely remote — south of the main Whitney/JMT corridor, quieter than almost anywhere else here. A night at the trailhead campground to acclimate and a satellite communicator both earn their keep on this one.'
    ],
    why:{
      scenery:'Big-sky Kern Plateau country — open, high, and different from every granite-basin pick on this list. A real change of register.',
      fish:'Native golden trout in their actual home water — the most authentic version of the fishing story anywhere on this site.',
      wildlife:'Mule deer, marmots, and real potential for Sierra bighorn sheep on the surrounding slopes (the reason the neighboring basin is dog-restricted).',
      bugs:'High, dry plateau country generally runs lighter on bugs than lake-dense basins. The real constraint here is the trailhead quota window, not mosquitoes.',
      water:'Golden Trout Creek meanders through open meadows — good swimming holes, if colder and shallower than the granite lakes elsewhere on this list.'
    },
    route:{mode:'backpack',options:[
      {name:'Cottonwood Pass to Big Whitney Meadow',stat:'5–6 days · ~40 mi RT · 3,028 ft to the meadow (4.7★)',text:'Horseshoe Meadow TH over Cottonwood Pass (11,200 ft) and down onto the plateau to Big Whitney Meadow, an out-and-back with a basecamp at the meadow and day-hikes without a pack from there.'},
      {name:'Push to Golden Trout Creek & Rocky Basin Lakes',stat:'+1–2 days',text:'Continue past Big Whitney Meadow to the creek itself and the Rocky Basin Lakes for the real native golden trout water and deeper solitude — turn around whenever the week runs out.'}
    ]},
    fish:{water:'Golden Trout Creek, Rocky Basin Lakes',species:'Native California golden trout',
      method:'Fly, barbless recommended for the native population',season:'Best July–September',
      catch:3,label:'Moderate — the real, native thing',gear:'3–4 wt, 6x leader — small stream, spooky fish',
      flies:['Parachute Adams #16–18','Elk Hair Caddis #16','Small Royal Wulff #16'],
      timing:'Morning and evening on the meadow stretches; midday in the shaded pools.'},
    wild:['Native golden trout','Mule deer','Marmots','Sierra bighorn sheep (possible, on surrounding slopes)'],
    water:{spots:['Golden Trout Creek meadows','Rocky Basin Lakes'],skinny:'Open meadow swimming holes on the creek — colder and shallower than the granite lakes elsewhere, but with real solitude.'},
    permit:{system:'Inyo NF wilderness permit — Cottonwood Pass trailhead quota (recreation.gov)',
      cost:'$5 to book ahead, or free day-of at the Lone Pine ranger station',
      where:'recreation.gov — Inyo National Forest Wilderness Permits',
      when:'40 backpackers/day cap, late June through mid-September, via the same 60%-at-6-months / 40%-at-2-weeks system as the rest of Inyo NF.',
      notes:'IMPORTANT: stay on Cottonwood PASS Trail, not Cottonwood LAKES Trail — the Lakes basin prohibits dogs.'},
    drive:{time:'~4.5 h from Pacifica to Horseshoe Meadow (via Lone Pine)',
      route:'US-395 to Lone Pine, west on Whitney Portal Rd, then Horseshoe Meadow Rd — 20 miles of mountain switchbacks to road\u2019s end',
      flags:['No cell service past Lone Pine','The switchback drive up to Horseshoe Meadow is slow — budget real time','Horseshoe Meadow Campground makes a good acclimation night before you start']},
    safety:['10,000 ft trailhead, 11,200 ft pass — real altitude. Spend a night at the trailhead campground first.','Genuinely remote and south of the main travel corridor — a satellite communicator is strongly recommended.','Standard bear-aware food storage.','Afternoon thunderstorms build fast on the exposed plateau — plan pass crossings for morning.'],
    insider:['This is the most authentic fishing story on the whole site — native fish in native water, not a transplant.','Quota fills up for popular summer weekends; a weekday entry meaningfully improves your odds.','The open plateau character here is a real change of pace if the other picks start to feel similar.','Stay strictly on Cottonwood Pass Trail out of Horseshoe Meadow — do not follow signs toward Cottonwood Lakes.'],
    pack:['Inyo NF wilderness permit (printed)','Bear canister or hang kit','Fly rod + basic kit','Satellite communicator (important here specifically)','Warm layers — nights are cold at 10,000+ ft','Altitude acclimation plan — a rest night at the trailhead'],
    verify:['Reconfirm Cottonwood Pass quota availability on recreation.gov close to your date.','Confirm you are routed via Cottonwood Pass, not Cottonwood Lakes, before you leave the trailhead.','Check current Inyo NF fire restrictions and bear activity notices.']
  }
});

/* Cross-link the six solo expeditions to each other */
const SOLO_IDS=['stuartfork','humphreysbasin','grandcanyontuolumne','lostcoastloop','emigrantsolo','goldentrout'];
const SOLO_NOTE={
  stuartfork:'Tied for #1 — warmest swimmable lakes, zero permit friction, cleanest solo safety',
  humphreysbasin:'Biggest lake basin in the Sierra — real goldens, maintained-trail-only per your call',
  grandcanyontuolumne:'The most epic single feature on the list — best river swimming, no dog',
  lostcoastloop:'Wildest and most solitary — but the weakest fishing/lakes match',
  emigrantsolo:'Tied for #1 — the best fishing rating on the whole site',
  goldentrout:'Native golden trout in home water — the most remote and highest-altitude pick'
};
window.TRIPS.forEach(t=>{ if(SOLO_IDS.includes(t.id)){
  t.d.alts=SOLO_IDS.filter(x=>x!==t.id).map(id=>({id,name:window.TRIPS.find(y=>y.id===id).name,note:SOLO_NOTE[id]}));
}});

/* ============================================================
   WINTER 2026 TO 2027: new destinations, and this season's read on the trips
   that are in season November through January. Researched Oct 4, 2026.
   Each carries its own fish kit and links, and a dogs field (yes, limited, no).
============================================================ */
window.TRIPS.push(...
[
 {
  "id": "pyramid",
  "name": "Pyramid Lake: winter cutthroat from the ladder",
  "type": "car",
  "region": "Pyramid Lake · NV",
  "drive": 4.75,
  "len": "3 nts",
  "miles": "easy",
  "gain": "flat",
  "s": [
   4,
   4,
   3,
   5,
   2
  ],
  "wild": false,
  "skinny": false,
  "permit": "Tribal fishing + camping permits, buy online",
  "fish": "Trophy Lahontan cutthroat from shore",
  "swim": "Summer swim lake; too cold in winter",
  "season": [
   10,
   11,
   12,
   1,
   2,
   3,
   4,
   5
  ],
  "peak": [
   11,
   3,
   4
  ],
  "epic": true,
  "coord": [
   39.97,
   -119.63
  ],
  "blurb": "Trophy Lahontan cutthroat from a stepladder on a turquoise desert lake, camped on the beach on Paiute land.",
  "dogs": "yes",
  "dogNote": "Dogs are allowed on the open west and south shore beaches, but the Tribe's rule 1.7.4 says dogs must be on a leash at all times, and the Tribal Council can post areas closed to animals.",
  "d": {
   "tag": "Big cutthroat, cold wind and a ladder in the shallows: the strangest and best winter stillwater within a day's drive.",
   "over": [
    "Pyramid Lake is a desert terminal lake on the Pyramid Lake Paiute Reservation northeast of Reno, ringed by tufa and bare ranges, and the home of the Lahontan cutthroat: the 1925 record from this lake was 41 pounds. From October into spring the big trout cruise the shallow shelf along the west and south shore, so the winter method is to wade out or stand on a stepladder, cast a sinking line and strip a beetle or bugger, or hang midges under an indicator.",
    "Everything here runs on Tribal land and Tribal rules: a fishing permit for each angler, a camping permit for each vehicle, primitive beach camps, no trash service. The trout are raised by the Tribe's own hatcheries, which release 600,000 to 1,000,000 young cutthroat a year, and they grow large in the alkaline water. Expect wind, cold hands and slow hours broken by a fish that can be the biggest trout of your life."
   ],
   "why": {
    "scenery": "Turquoise desert lake ringed by tufa and bare ranges, the Pyramid and the Needles on the skyline.",
    "fish": "Trophy Lahontan cutthroat cruising the shelf in winter: slow fishing, real size.",
    "wildlife": "Waterbirds, coyotes and raptors; the Anaho Island pelican colony is a spring and summer sight.",
    "bugs": "Winter: nothing that bites.",
    "water": "Clear, alkaline and swimmable in summer; far too cold to get in from November to January."
   },
   "route": {
    "mode": "car",
    "basecamp": "A primitive beach camp on the open west shore near Sutcliffe, such as Pelican Point, a few minutes from the Ranger Station and its permit desk. The camping permit is per vehicle: $32 to $35 a night, or $82 to $90 for three nights, depending on which posted price is current. Camp at least 100 ft back from the water, no drinking water, pack out every scrap of trash.",
    "dayhikes": [
     "Shoreline walk along the open beaches north of Sutcliffe · easy, flat",
     "Pyramid Lake Museum and Visitor Center, Nixon · weekdays 10am to 4:30pm",
     "Pyramid Lake Scenic Drive · 49.3 mi out and back by car (AllTrails)"
    ]
   },
   "fish": {
    "water": "Pyramid Lake, the open beaches of the west and south shore from Monument Rock to Popcorn Rock",
    "species": "Lahontan cutthroat trout (raised by the Tribe), plus Sacramento perch and tui chub",
    "method": "Fly from shore or a tagged stepladder: a sinking line stripped with beetles, boobies and buggers, or midges under an indicator on a floating line",
    "season": "Trout season runs Oct 1, 2026 to Jun 30, 2027. The rule that bites: barbless hooks and no bait at all, and only fish 17 to 20 in or 24 in and longer may be kept, two a day with only one over 24 in.",
    "catch": 3,
    "label": "Slow, big fish; blank days are normal",
    "gear": "7 to 8 wt, 9 to 10 ft; an intermediate or sinking line or shooting head for stripping beetles and buggers, plus a floating line with an indicator for midges; 1X to 3X fluorocarbon; stripping basket. A 4 to 5 wt is too light for the wind and the fish.",
    "flies": [
     "Foam beetle, black with red or chartreuse #6 to 8",
     "Booby, black or white #8",
     "Woolly Bugger, black or olive #6 to 8",
     "Midge or chironomid #10 to 14 under an indicator",
     "Tui chub streamer"
    ],
    "timing": "Honest read: the casting and stripping are learnable in a day, but this is a low-numbers lake. A competent trout angler new to it should count one to three fish over three days as a good trip and a fishless day as normal. First and last light, overcast skies and a light chop fish best."
   },
   "wild": [
    "Coyote",
    "Black-tailed jackrabbit",
    "Western grebe",
    "Common merganser",
    "American white pelican (Anaho Island, spring to fall)"
   ],
   "water": {
    "spots": [
     "Pyramid Lake shallows off the open beaches (summer)",
     "Sutcliffe Marina beach (a family beach, no alcohol)"
    ],
    "skinny": "Not realistic in winter: the water is cold and the beaches are open and shared."
   },
   "permit": {
    "system": "Pyramid Lake Paiute Tribe permits: a fishing permit for each angler 12 and up and a camping permit for each vehicle. No Nevada fishing license is needed.",
    "cost": "Fishing $27 a day or $70 for three days (second rod the same); camping $35 a night or $90 for three nights per vehicle; day use $25 for a non-fishing companion. Vendors may add up to $1.",
    "where": "Online at plpt.nagfa.net/online, or the Ranger Station at 2500 Lakeview Drive, Sutcliffe (listed daily 6am to 6pm), or the Pyramid Lake Museum and Visitor Center, 709 State Street, Nixon (weekdays 10am to 4:30pm). No American Express.",
    "when": "No reservations and no quota; buy before you drive. No seasonal permit is sold after Sep 30.",
    "notes": "Permits are nontransferable and not replaced if lost. A camping permit runs from sunrise on the first day to 11am after the last night. Ranger Station: 775-476-1155."
   },
   "drive": {
    "time": "~4.75 hr",
    "route": "I-80 east over Donner Summit to Sparks, then Pyramid Way (NV 445) north to Sutcliffe on the west shore.",
    "flags": [
     "I-80 over Donner Summit: chain controls in storms, check Caltrans QuickMap",
     "Fill up on fuel, food and water in Sparks",
     "Beach access roads are dirt, with soft sand in places"
    ]
   },
   "safety": [
    "Wind can build whitecaps in minutes: get off the ladder and out of the water when it comes up",
    "Cold water and a ladder: cinch a wading belt, carry a staff, and do not stand in breaking waves",
    "Park on firm ground; soft sand can trap a two-wheel-drive car",
    "Hard freezes at night: a winter bag, and keep water jugs inside the car"
   ],
   "insider": [
    "Any ladder, crate or box in the water must carry a permanent tag with the owner's name, address and phone, stay attended, and come out by the end of legal hours",
    "Overcast days with a light chop usually fish better than flat bluebird calm",
    "Stop at the Ranger Station in Sutcliffe for the week's beach and wind news; rangers check permits on the beach",
    "Measure fork length with the fish in the water: 17 to 20 in or 24 in and up can be kept, everything else goes back, and filleting on the reservation is not allowed"
   ],
   "pack": [
    "7 to 8 wt rod, sinking and floating lines, stripping basket",
    "Tagged stepladder (name, address, phone)",
    "Insulated waders, wind shell, gloves and a warm hat",
    "All your water, firewood and trash bags: there is no trash service on the reservation"
   ],
   "verify": [
    "Call the Ranger Station, 775-476-1155: open beaches, closures, recent wind",
    "NWS Reno lake wind forecast for Pyramid",
    "I-80 chain controls over Donner Summit",
    "Current prices on pyramidlake.us/permits",
    "Whether the 2026 brochure changes posted in September are final"
   ],
   "now": {
    "read": "Oct 4, 2026",
    "lines": [
     "Trout season opened Oct 1, 2026 and runs to Jun 30, 2027. Under the 2026 brochure changes, all fishing then closes Jul 1 to Sep 30.",
     "Prices: the 2026 brochure lists fishing at $27 a day or $70 for three days and camping at $35 per vehicle per night or $90 for three nights. The Tribe's ranger station page still shows $24, $62, $32 and $82, so expect one or the other at checkout. The $750 seasonal permit was sold only Sep 8 to 30.",
     "Buy online at plpt.nagfa.net/online or at the Sutcliffe Ranger Station (listed every day 6am to 6pm); the Nixon visitor center sells on weekdays. No American Express.",
     "Rules: barbless hooks, no bait or scent of any kind, two trout a day of 17 to 20 in or 24 in and up (one over 24 in), legal hours one hour before sunrise to one hour after sunset, no fishing within 250 ft of boat docks.",
     "Closed to the public: the Needles, Anaho Island, the Marble Bluff area, the Beehives, the Pyramid and Stone Mother area, the east shore beaches (closed on the Tribe's map) and the Truckee River and delta. Popcorn Rock has been closed to boat launching since Dec 2024 over the golden mussel threat.",
     "Camping rules: camps and vehicles at least 100 ft from the shoreline, fires no taller than 4 ft and at least 50 ft from the water, no glass or pallets on beaches, no drones, and no portable toilets with removable waste bags.",
     "Weather: expect hard freezes most nights in December and January; wind decides the fishing, so read the Reno lake wind forecast daily."
    ],
    "sources": [
     "https://pyramidlake.us/fishing",
     "https://pyramidlake.us/permits",
     "https://pyramidlake.us/wp-content/uploads/2025/11/111945-Pyramid-Lake-Regulations-Book.pdf",
     "https://pyramidlake.us/wp-content/uploads/2026/09/RegulationsChange2026s.pdf",
     "https://pyramidlake.us/wp-content/uploads/2020/01/2019_Open_Beaches_Map.pdf",
     "https://pyramidlake.us/wp-content/uploads/2024/12/Press-Release-POCORN-Rock-Dec-20242024_08_13-17_08_42-UTC.pdf",
     "https://plpt.nagfa.net/online/",
     "https://pyramidlakefisheries.org/hatcheries/"
    ]
   }
  },
  "status": "queued",
  "url": null,
  "at": "https://www.alltrails.com/trail/us/nevada/pyramid-lake-scenic-drive",
  "air": "Reno-Tahoe (RNO) ~50 min"
 },
 {
  "id": "trinitysteel",
  "name": "Trinity River: winter steelhead on the wade water",
  "type": "car",
  "region": "Trinity River · Lewiston to Junction City",
  "drive": 4.75,
  "len": "3 nts",
  "miles": "easy",
  "gain": "flat",
  "s": [
   4,
   4,
   4,
   5,
   2
  ],
  "wild": true,
  "skinny": false,
  "permit": "CA license + steelhead card; first-come camp",
  "fish": "Fall and winter steelhead, walk-in water",
  "swim": "Cold river; a summer swim, not a winter one",
  "season": [
   10,
   11,
   12,
   1,
   2,
   3
  ],
  "peak": [
   11,
   12
  ],
  "epic": false,
  "coord": [
   40.7,
   -122.97
  ],
  "blurb": "Wade the upper Trinity for fall and winter steelhead, from a Forest Service camp that stays open all year.",
  "dogs": "yes",
  "dogNote": "Dogs are welcome on a leash of 6 ft or shorter in Forest Service campgrounds such as Pigeon Point, Big Flat and Ackerman, and BLM requires leashes in its campgrounds.",
  "d": {
   "tag": "Steelhead on trout tactics in a pine and oak canyon, with the river nearly to yourself on a weekday.",
   "over": [
    "The upper Trinity below Lewiston Dam is one of the most approachable steelhead rivers in California for a wading angler: a clear, cold, medium-size tailwater through a canyon of pine, fir, oak and madrone, with public walk-in water from Lewiston down past Douglas City and Junction City along Hwy 299. Fall-run steelhead push up from the Klamath from September and hold here into winter, joined by adipose-clipped hatchery fish bound for the Trinity River Hatchery at Lewiston.",
    "Winter camping is the catch: BLM's riverside camps close for the season, so the base is a Forest Service camp that stays open all year. Nymph an indicator through tailouts and riffle seams, the same game as trout with heavier tippet, keep a hatchery fish if you want one and release every wild one. Brown trout are a legal keeper too."
   ],
   "why": {
    "scenery": "Forested canyon of pine, fir, oak and madrone, with snow on the Trinity Alps above.",
    "fish": "Wild and hatchery steelhead plus resident browns on public wade water.",
    "wildlife": "Bald eagles, river otters, deer, dippers and mergansers along the river.",
    "bugs": "Winter: none.",
    "water": "Clear, cold river; a summer swim, not a winter one."
   },
   "route": {
    "mode": "car",
    "basecamp": "Pigeon Point Campground (Shasta-Trinity National Forest) on Hwy 299, about 4 miles west of Junction City, above the river: open all year, $12 a night, self-register, first come, no drinking water. Big Flat, about 4 miles further west, is also open all year at $12 and has vault toilets. For the Lewiston end, Ackerman's north loop on Lewiston Lake, 8 miles above Lewiston, is open all year for walk-ins. BLM's Douglas City, Junction City and Steel Bridge camps close for winter.",
    "dayhikes": [
     "Lewiston Lake Trail · 3.2 mi out and back, 341 ft (AllTrails)",
     "Day Ranch Spur and East Weaver Creek Loop, Weaverville · 2.4 mi, 321 ft (AllTrails)",
     "Canyon Creek Trail, the lower miles only, snow permitting · full route 15.6 mi out and back, 2,864 ft (AllTrails)"
    ]
   },
   "fish": {
    "water": "Trinity River from the Old Lewiston Bridge down through Douglas City and Junction City",
    "species": "Steelhead (wild, plus adipose-clipped hatchery fish), brown trout, resident rainbows; fall Chinook through Dec 31",
    "method": "Indicator nymphing with egg patterns and stoneflies through riffles and tailouts, or swinging flies on a switch rod",
    "season": "Below the Old Lewiston Bridge to the Hwy 299 bridge at Cedar Flat: open all year, 2 hatchery trout or steelhead a day (4 in possession), 10 brown trout, wild fish released, barbless hooks only. The rule that bites: the water from 250 ft below Lewiston Dam to the Old Lewiston Bridge is open only Apr 1 to Sep 15, so it is closed all winter.",
    "catch": 3,
    "label": "Moderate; nymphing makes it trout-like",
    "gear": "6 to 7 wt, 9.5 to 10 ft, floating line, indicator with split shot, 2X to 3X fluorocarbon; a switch rod if you want to swing. A 5 wt can handle half-pounders but is light for a 6 lb adult in current.",
    "flies": [
     "Egg pattern, peach or orange #10 to 12",
     "Pat's Rubberlegs #6 to 8",
     "Copper John #12 to 14",
     "Prince or Hare's Ear nymph #10 to 14",
     "Silver Hilton or Brindle Bug #6 (swing)"
    ],
    "timing": "Honest read: indicator nymphing here is trout fishing with heavier tippet, so the learning curve is short, but the run is modest. Expect a few hookups over three days in good water, more half-pounders than big adults, and possible zeros right after a storm or a big release. Mid-morning to late afternoon in winter."
   },
   "wild": [
    "Bald eagle",
    "River otter",
    "Black-tailed deer",
    "American dipper",
    "Common merganser"
   ],
   "water": {
    "spots": [
     "River pools around Douglas City (summer)",
     "Lewiston Lake (summer)"
    ],
    "skinny": "No winter swimming: the river at Lewiston ran about 46 to 48 F last winter."
   },
   "permit": {
    "system": "No camping permit: Forest Service camps are first come with a self-pay station. California fishing license plus a Steelhead Report Card; a North Coast Salmon Report Card if you fish for salmon.",
    "cost": "$12 a night at Pigeon Point or Big Flat. 2026 resident license $64.54 (one day $21.09, two days $32.40); Steelhead Report Card $10.29; North Coast Salmon Report Card $9.21.",
    "where": "Licenses and report cards online from CDFW or at local license agents; pay for camp at the fee station on site.",
    "when": "Licenses and cards are calendar year: a trip that crosses Jan 1 needs 2027 versions, and the 2026 steelhead card must be reported by Jan 31, 2027.",
    "notes": "Weaverville Ranger Station: 530-623-2121. BLM Redding Field Office: 530-224-2100. Klamath and Trinity hotline for rules and quotas: 1-800-564-6479."
   },
   "drive": {
    "time": "~4.75 hr",
    "route": "I-80 and I-505 to I-5 north to Redding, then Hwy 299 west over Buckhorn Summit to Douglas City and Junction City; Lewiston is a short detour north of Hwy 299.",
    "flags": [
     "Hwy 299 over Buckhorn Summit can need chains in storms",
     "One-way traffic control for roadwork is common on Hwy 299: check Caltrans QuickMap"
    ]
   },
   "safety": [
    "Cold, strong current: cleated boots, a wading staff, and no deep crossings",
    "Storm-timed releases from Lewiston Dam can raise the river fast: check release notices daily",
    "Food in a bear box or the car, even in winter",
    "Short days in a deep canyon: plan to be off the water and back at the car before dark"
   ],
   "insider": [
    "Use the BLM Trinity River public access map to find walk-in water between Lewiston and Junction City",
    "Fish the days after a small rise in flow, when fresh fish move, and skip the day the river is up and colored",
    "Weekdays beat weekends, when drift boats work the popular runs",
    "If CDFW's Junction City weir is still in, no fishing within 750 ft of it"
   ],
   "pack": [
    "6 to 7 wt rod, 9.5 to 10 ft, indicator kit, split shot, 2X to 3X fluorocarbon",
    "Cleated wading boots and a staff",
    "Water for the whole stay: no drinking water at Pigeon Point or Big Flat",
    "2027 license and steelhead card if any day falls after Jan 1"
   ],
   "verify": [
    "Lewiston Dam release and any planned storm pulse: the Trinity Releases notice group and USGS gauge 11525500",
    "Pigeon Point or Big Flat open: Weaverville Ranger Station, 530-623-2121",
    "Klamath and Trinity hotline, 1-800-564-6479, for in-season rule or quota changes",
    "Hwy 299 chain controls and roadwork",
    "Whether the Junction City weir is in",
    "For a January trip, the 2027 CDFW regulations booklet"
   ],
   "now": {
    "read": "Oct 4, 2026",
    "lines": [
     "Lewiston Dam is releasing 450 cfs until Oct 15, then drops to the 300 cfs winter base flow under the restoration program's water year 2027 plan. The Winter Flow Project continues, so expect occasional big releases: Lewiston hit about 5,800 to 6,000 cfs in Dec 2024 and Dec 2025, and ran near 1,500 cfs for weeks in Jan 2025 and Jan 2026.",
     "Closed all winter: 250 ft below Lewiston Dam to the Old Lewiston Bridge (open Apr 1 to Sep 15 only). Open all year from the Old Lewiston Bridge to the Hwy 299 bridge at Cedar Flat: 2 hatchery trout or steelhead a day, 4 in possession, 10 brown trout, barbless hooks only.",
     "Fall Chinook are open through Dec 31 below the Old Lewiston Bridge on a 536-fish quota for this reach: 2 a day, only one over 23 in until the quota fills, then only fish 23 in or shorter. Salmon need the North Coast Salmon Report Card ($9.21).",
     "2026 resident license $64.54 and Steelhead Report Card $10.29. Both expire Dec 31, so a trip past New Year needs 2027 versions.",
     "Camps: BLM's Douglas City, Junction City and Steel Bridge close for winter (Recreation.gov shows the first two reservable only through Oct 31), and BLM posts Steiner Flat as closed for maintenance. Forest Service Pigeon Point and Big Flat are open all year at $12, first come, with no drinking water; Ackerman's north loop on Lewiston Lake is open all year for walk-ins.",
     "Run size is modest: the Junction City weir counted 425 steelhead, 145 of them hatchery fish, through Dec 16, 2025, before the weirs were pulled.",
     "Trinity Lake held about 1.68 million acre-feet on Oct 3, down from about 1.81 million a year earlier."
    ],
    "sources": [
     "https://nrm.dfg.ca.gov/FileHandler.ashx?DocumentID=209090&inline",
     "https://nrm.dfg.ca.gov/FileHandler.ashx?DocumentID=245278&inline",
     "https://trrp.net/restoration/flows/current",
     "https://waterdata.usgs.gov/monitoring-location/11525500/",
     "https://www.fs.usda.gov/r05/shasta-trinity/recreation/pigeon-point-campground",
     "https://www.fs.usda.gov/r05/shasta-trinity/recreation/big-flat-campground",
     "https://www.fs.usda.gov/r05/shasta-trinity/recreation/ackerman-campground",
     "https://www.recreation.gov/camping/campgrounds/233346"
    ]
   }
  },
  "status": "queued",
  "url": null,
  "at": "https://www.alltrails.com/trail/us/california/lewiston-lake-trail",
  "air": "Redding (RDD) ~1 h · Sacramento (SMF) ~3.25 h"
 },
 {
  "id": "lowersac",
  "name": "Lower Sacramento: the Redding tailwater on foot",
  "type": "car",
  "region": "Redding · Lower Sac",
  "drive": 4,
  "len": "3 nts",
  "miles": "easy",
  "gain": "flat",
  "s": [
   3,
   4,
   3,
   5,
   2
  ],
  "wild": true,
  "skinny": false,
  "permit": "CA license; Peltier reservation, park pass",
  "fish": "Wild rainbows, salmon-egg bite",
  "swim": "Cold tailwater; no winter swim",
  "season": [
   10,
   11,
   12,
   1,
   2,
   3
  ],
  "peak": [
   11,
   12
  ],
  "epic": false,
  "coord": [
   40.59,
   -122.38
  ],
  "blurb": "Redding's big tailwater on foot: wild rainbows on the salmon-egg bite, a tent on Clear Creek, about four hours away.",
  "dogs": "yes",
  "dogNote": "Whiskeytown, including Peltier Bridge camp, requires a leash of 6 ft or shorter and bars dogs from its swim beaches and buildings; the Sacramento River Trail and Turtle Bay in Redding are leashed-dog areas.",
  "d": {
   "tag": "The year-round trout river closest to home, best on foot when Keswick runs low.",
   "over": [
    "Below Keswick Dam the Sacramento runs cold and clear through Redding: a big tailwater full of wild rainbows that gorge on salmon eggs in late fall and eat caddis, mayfly and stonefly nymphs the rest of the winter. Most anglers fish it from drift boats, but when Keswick releases sit in the low winter range of about 3,000 to 5,000 cfs, the riffles at the Posse Grounds by the Sundial Bridge, Girvan Road, Knighton Road and Anderson River Park open up to a careful wader.",
    "This is the easy one: about four hours from Pacifica, a tent site on Clear Creek at Whiskeytown's Peltier Bridge camp 25 minutes from the river, town for a rainy night, and a fishery that does not depend on a run showing up. The catch is flow: when a wet January sends flood releases past 10,000 cfs, wading ends and only a guided boat makes sense."
   ],
   "why": {
    "scenery": "A big clear river through Redding's riparian corridor and under the Sundial Bridge; forested Whiskeytown hills at camp.",
    "fish": "A dense population of wild rainbows on public wade water when flows are low.",
    "wildlife": "Bald eagles, river otters, herons and mergansers, with fall Chinook spawning into December.",
    "bugs": "Winter: none.",
    "water": "No winter swim; Clear Creek runs past camp."
   },
   "route": {
    "mode": "car",
    "basecamp": "Peltier Bridge Campground in Whiskeytown National Recreation Area, 13.5 miles west of Redding on Clear Creek: open all year, 9 tent-only sites, $20 a night, reservations required on Recreation.gov, vault toilets, bear lockers, no drinking water (fill at the visitor center), no towing. Whiskeytown requires a $25 vehicle pass good for 7 days.",
    "dayhikes": [
     "Sacramento River Trail loop, Redding · 5.6 mi, 173 ft (AllTrails)",
     "Sacramento River Trail, Keswick Dam to Spring Creek · 5.8 mi out and back, 643 ft (AllTrails)",
     "Whiskeytown Falls Trail · 3.0 mi out and back, 725 ft (AllTrails)",
     "Boulder Creek Falls · 5.5 mi out and back, 1,036 ft (AllTrails)"
    ]
   },
   "fish": {
    "water": "Sacramento River from the Posse Grounds in Redding down to Anderson River Park, with Reading Island below the Deschutes Road bridge",
    "species": "Wild rainbow trout, some steelhead, a few browns; fall Chinook spawning",
    "method": "Indicator nymphing from riffles and gravel bars: egg patterns in November and December, caddis, mayfly and stonefly nymphs after",
    "season": "650 ft below Keswick Dam to the Hwy 44 bridge: open Aug 1 to Mar 31; Hwy 44 to the Deschutes Road bridge: open all year. Both barbless only, 2 hatchery trout or steelhead and 5 brown trout a day, wild rainbows released. The rule that bites: everything above the Hwy 44 bridge closes Apr 1 to Jul 31.",
    "catch": 4,
    "label": "Good on foot at low flows; poor above ~5,000 cfs",
    "gear": "6 wt, 9 to 10 ft, floating line, indicator, split shot, 3X to 4X fluorocarbon; long drag-free drifts. A 5 wt works, but big fish in heavy current test it.",
    "flies": [
     "Egg or bead pattern, peach #10 to 14 (Nov and Dec)",
     "Pat's Rubberlegs, brown #4 to 6",
     "Caddis pupa #14 to 16",
     "Zebra midge or small mayfly nymph #16 to 18",
     "S&M nymph"
    ],
    "timing": "Honest read: this is trout fishing, not steelhead fishing, and the fish are many. A competent nymph angler who gets long drifts through the Posse Grounds riffle should hook fish most days at low winter flows; above about 5,000 cfs, walk-in water shrinks and the odds drop hard. The November and December egg bite is the peak, and midday is fine in winter."
   },
   "wild": [
    "Bald eagle",
    "River otter",
    "Great blue heron",
    "Common merganser",
    "Fall-run Chinook salmon"
   ],
   "water": {
    "spots": [
     "Clear Creek at Peltier Bridge (summer)",
     "Whiskeytown Lake beaches (summer; no dogs on the swim beaches)"
    ],
    "skinny": "No winter swimming."
   },
   "permit": {
    "system": "Peltier Bridge campsite reserved on Recreation.gov; Whiskeytown vehicle entrance pass; California fishing license, plus a Steelhead Report Card if you fish for steelhead in anadromous water.",
    "cost": "$20 a night; $25 Whiskeytown vehicle pass for 7 days; 2026 resident license $64.54 (one day $21.09, two days $32.40); Steelhead Report Card $10.29.",
    "where": "Recreation.gov for the site and the park pass (or the Whiskeytown visitor center); CDFW online or a Redding license agent for the license.",
    "when": "Reservations are required: book on Recreation.gov before you go. Every site showed open on the winter nights sampled.",
    "notes": "Maximum 6 people and 2 vehicles per site, tents only. Whiskeytown visitor center: 530-246-1225. Licenses are calendar year: a trip past Jan 1 needs a 2027 license."
   },
   "drive": {
    "time": "~4 hr",
    "route": "I-80 and I-505 to I-5 north to Redding; Hwy 299 west 10 miles, then Kennedy Memorial Drive, Paige Bar Road and Peltier Valley Road to camp.",
    "flags": [
     "Tule fog on I-5 in the valley on winter mornings",
     "Narrow gravel road into Peltier Bridge: no trailers or motorhomes"
    ]
   },
   "safety": [
    "A big, powerful river: wade only near the low end of the winter range, with a staff, cleats and a PFD",
    "Stay off salmon redds, the clean pale gravel patches in November and December",
    "Post-Carr Fire hazard trees remain in Whiskeytown: pitch away from dead snags",
    "Lock the car and keep gear out of sight at in-town access points"
   ],
   "insider": [
    "The Posse Grounds riffle off Auditorium Drive is the classic walk-in and fishes best at low winter flows",
    "A guided drift boat day early in the trip teaches the river fast and shows you where the wade water is",
    "Fish the drift below spawning salmon with an egg pattern, never over the redds",
    "Below the Deschutes Road bridge, Reading Island has a riffle by the parking area, and salmon season there runs through Dec 31"
   ],
   "pack": [
    "6 wt rod, 9 to 10 ft, indicator kit, split shot, 3X to 4X fluorocarbon",
    "PFD, wading staff, cleated boots",
    "Water jugs (no water at camp)",
    "Whiskeytown pass and the Peltier reservation saved on the phone"
   ],
   "verify": [
    "Keswick release (USGS gauge 11370500): plan to wade only near the low end of the winter range",
    "Peltier Bridge reservation on Recreation.gov",
    "Whiskeytown entrance pass",
    "Any CDFW emergency closure on the upper Sacramento",
    "For a January trip, the 2027 CDFW regulations booklet"
   ],
   "now": {
    "read": "Oct 4, 2026",
    "lines": [
     "Keswick is releasing about 6,060 cfs (Oct 4). Over the last four winters the November and December medians ran about 3,000 to 5,000 cfs, while January medians jumped past 10,000 cfs in 2025 and 2026 with flood releases.",
     "Open this winter: 650 ft below Keswick Dam to the Hwy 44 bridge (Aug 1 to Mar 31) and Hwy 44 to the Deschutes Road bridge (all year). Both are barbless only: 2 hatchery trout or steelhead a day (4 in possession) and 5 brown trout; wild rainbows go back. Keswick Dam to 650 ft below is closed all year.",
     "No salmon fishing above the Deschutes Road bridge; below it, Chinook are open Nov 1 to Dec 31, 2 a day.",
     "2026 resident license $64.54; Steelhead Report Card $10.29 to fish for steelhead in anadromous water; both expire Dec 31.",
     "Peltier Bridge, Whiskeytown: open all year, 9 tent sites on Clear Creek, $20 a night, reservations required; all 9 sites showed open on the winter nights sampled. Vault toilets, no water, no towing. Whiskeytown vehicle pass $25 for 7 days.",
     "Shasta Lake held about 2.43 million acre-feet on Oct 3, about 53 percent of its 4.55 million capacity and down from about 2.67 million a year earlier."
    ],
    "sources": [
     "https://nrm.dfg.ca.gov/FileHandler.ashx?DocumentID=209090&inline",
     "https://waterdata.usgs.gov/monitoring-location/11370500/",
     "https://calflyfisher.com/destinations/wading-the-lower-sacramento/",
     "https://www.recreation.gov/camping/campgrounds/272248",
     "https://www.nps.gov/whis/planyourvisit/peltier-bridge.htm",
     "https://www.nps.gov/whis/planyourvisit/fees.htm",
     "https://www.nps.gov/whis/planyourvisit/pets.htm",
     "https://cdec.water.ca.gov/dynamicapp/QueryDaily?s=SHA"
    ]
   }
  },
  "status": "queued",
  "url": null,
  "at": "https://www.alltrails.com/trail/us/california/sacramento-river-trail",
  "air": "Redding (RDD) ~15 min · Sacramento (SMF) ~2.5 h"
 },
 {
  "id": "sespe",
  "name": "Sespe Wilderness: Willett Hot Springs",
  "type": "backpack",
  "region": "Los Padres · Ojai",
  "drive": 6,
  "len": "3 nts",
  "miles": "~10/day",
  "gain": "≤1,500/day",
  "s": [
   4,
   2,
   3,
   4,
   5
  ],
  "wild": true,
  "skinny": true,
  "permit": "No wilderness permit · Adventure Pass to park · campfire permit for stoves",
  "fish": "Small wild rainbows, catch and release",
  "swim": "Willett hot tub, Sespe Hot Springs, creek pools ~",
  "season": [
   10,
   11,
   12,
   1,
   2,
   3,
   4,
   5
  ],
  "peak": [
   11,
   3,
   4
  ],
  "epic": false,
  "coord": [
   34.56,
   -119.16
  ],
  "blurb": "Ten miles down a sandstone creek canyon to a 100 degree hot spring tub, with wild trout in the riffles and condors overhead.",
  "dogs": "yes",
  "dogNote": "Dogs are allowed on the Sespe River Trail and in the Sespe Wilderness on a leash no longer than six feet, the Los Padres rule on trails and in camps; the nearby Sespe Condor Sanctuary is closed to everyone.",
  "d": {
   "tag": "A creek-bottom walk through sandstone country to a hot spring tub at an old homestead, cold-season country when the rest of the map is snowed in.",
   "over": [
    "The Sespe River Trail leaves Piedra Blanca trailhead at the end of Rose Valley Road and follows Sespe Creek downstream past Bear Creek, Oak Flat and Thacher camps to Willett, about 9.8 miles in. Willett is a cluster of camps around the ruins of an early 1900s homestead, and a short, brushy climb above camp is a rock tub that holds about 99 to 100 degrees. The canyon is sandstone, chaparral, oak and sycamore, with the white Piedra Blanca formations right at the start.",
    "The longer play keeps going downstream past Coltrell Flat and up a side canyon to Sespe Hot Springs, a desert-feeling canyon of much hotter springs and soaking pools about 15 miles from the car. Winter is the season: summer runs over 100 degrees, and November through April the creek runs, the bugs are gone and a hot soak on a cold night is the point. The catch is the creek itself, which can turn waist deep and dangerous after a storm."
   ],
   "why": {
    "scenery": "Sandstone cliffs, the Piedra Blanca formations and a long creek canyon; big and quiet, not alpine.",
    "fish": "Sespe Creek is a CDFW designated Wild Trout Water, but the rainbows are small and it is catch and release only.",
    "wildlife": "California condors fly this country; black bear, deer, and bighorn near Sespe Hot Springs.",
    "bugs": "No mosquitoes to speak of in winter, but ticks are active by February and poison oak lines the trail.",
    "water": "A 100 degree tub at Willett, hotter pools at Sespe Hot Springs, and creek swimming holes between them."
   },
   "route": {
    "mode": "backpack",
    "options": [
     {
      "name": "Piedra Blanca to Willett Hot Springs",
      "stat": "3 nts · 20.1 mi · 2,509 ft",
      "text": "Day 1: ford Sespe Creek at the trailhead and walk the old road and trail downstream past Bear Creek (4.3 mi) and Oak Flat (7.4 mi) to Willett (9.8 mi); fill water at Kerr Spring, 0.8 mi past Bear Creek. Day 2: soak, fish the riffles around camp, and explore downstream toward Hartman Camp. Day 3: walk back upstream and split the return with a night at Oak Flat or Bear Creek. Day 4: out to the car by midday. Mileage and gain from AllTrails; camp mileages from Hike Los Padres."
     },
     {
      "name": "On to Sespe Hot Springs",
      "stat": "3 nts · 30.4 mi · 3,612 ft",
      "text": "Day 1: Piedra Blanca to Willett, 9.8 mi. Day 2: downstream past Coltrell Flat (about mile 14), then north up the side trail roughly 2 miles to Sespe Hot Springs and its pools, which run far hotter than Willett, so find the pool that has cooled enough. Day 3: back to Willett for a second soak. Day 4: out. Past Willett the trail gets brushy, harder to follow and has more fords, so allow extra time. Mileage and gain from AllTrails."
     }
    ]
   },
   "fish": {
    "water": "Sespe Creek, from Piedra Blanca downstream through Willett",
    "species": "Wild coastal rainbow trout (small); the creek is a CDFW designated Wild Trout Water",
    "method": "Light fly gear, small dries and nymphs in the riffles and pocket water; barbless only",
    "season": "Above the Alder Creek confluence: open all year, artificial lures with barbless hooks only, zero trout (Title 14, section 7.50, operative Jan 1, 2025). Endangered southern steelhead share the system, so handle fish wet and quick.",
    "catch": 2,
    "label": "Light (small wild rainbows, C&R)",
    "gear": "3 to 4 weight, 7.5 to 8 ft, 6x tippet; barbless hooks required",
    "flies": [
     "Parachute Adams #16 to 18",
     "Elk Hair Caddis #16",
     "Pheasant Tail #16 to 18",
     "Zebra Midge #18 to 20",
     "Small olive Woolly Bugger #12"
    ],
    "timing": "Midday in winter, once the water warms, in the riffles and pocket water around Bear Creek, Oak Flat and Willett; let the creek clear for a few days after a storm."
   },
   "wild": [
    "California condor",
    "Black bear",
    "Mule deer",
    "Desert bighorn (near Sespe Hot Springs)",
    "Wild rainbow trout",
    "Red-tailed hawk"
   ],
   "water": {
    "spots": [
     "Willett Hot Springs tub, about 99 to 100 F",
     "Sespe Hot Springs pools (longer option, much hotter)",
     "Creek pools near Bear Creek and Oak Flat"
    ],
    "skinny": "Midweek, the Willett tub and the Sespe Hot Springs pools are often empty, and Sespe Hot Springs is known as clothing optional."
   },
   "permit": {
    "system": "No wilderness permit for any Los Padres wilderness. An Adventure Pass or America the Beautiful pass to park at Piedra Blanca. A free California Campfire Permit to run a stove (required year round in Ventura County).",
    "cost": "Adventure Pass $5 a day or $30 a year; the campfire permit is free.",
    "where": "Adventure Pass by card at the trailhead, at the Ojai Ranger Station, or online at MyScenicDrives; campfire permit from any Forest Service office or online at readyforwildfire.org.",
    "when": "No quota; the trail camps are first come, first served.",
    "notes": "Forest fire order 05-07-00-26-05 runs Jun 4, 2026 to Jan 31, 2027: no wood or charcoal fires anywhere outside 69 designated campgrounds (Middle Lion and Rose Valley are on the list, the wilderness camps are not); gas stoves with a shutoff are allowed with the campfire permit. Ojai Ranger District: 805-646-4348, open weekday afternoons. A daily pass covers one day, so four days parked means four day passes or the annual."
   },
   "drive": {
    "time": "~6 hr",
    "route": "US-101 south to Ventura, Hwy 33 north through Ojai 14.7 mi to Rose Valley Road, about 5 mi of pavement, then left about 1 mi to the trailhead lot. Or I-5 and Hwy 166 to Hwy 33 south over Pine Mountain.",
    "flags": [
     "Hwy 33 above Ojai is narrow and has closed for slides in big storms; check Caltrans QuickMap",
     "The Pine Mountain route can see snow in winter",
     "Rose Valley Road has rough sections; the trailhead lot is paved"
    ]
   },
   "safety": [
    "The creek is the hazard: a February 2026 report had waist to chest deep, fast crossings after storms. Do not go in or out during or right after heavy rain.",
    "Cold water and wet feet in winter: dry layers and a warm camp setup matter.",
    "Poison oak and brush are heavy past Willett and on the climb to the tub; wear long pants.",
    "Ticks were active between Willett and Bear Creek in February 2026; check daily.",
    "Keep your head out of hot spring water."
   ],
   "insider": [
    "If the first ford at the trailhead looks bad, it only gets worse downstream; turn around there.",
    "Kerr Spring, 0.8 mi past Bear Creek, is the first year-round water source.",
    "Willett can draw 50 or more people on a weekend; go midweek for the tub to yourself.",
    "Middle Lion Campground, 1 mi before the trailhead, is reservable at $30 and is one of the few places a wood fire is legal under this winter's order: a good night-before base.",
    "Walk the first mile up to the Piedra Blanca sandstone formations on the way in or out."
   ],
   "pack": [
    "Sandals or water shoes and trekking poles for the fords",
    "Long pants for brush and poison oak",
    "Water filter",
    "Adventure Pass and campfire permit",
    "Tick kit",
    "Warm sleep system for frosty canyon nights"
   ],
   "verify": [
    "Los Padres alerts page for any new Ojai district, Rose Valley Road or Sespe closure",
    "The USGS gauge Sespe Creek near Wheeler Springs and the storm forecast; skip the trip if a storm is due",
    "Caltrans QuickMap for Hwy 33",
    "Whether the forest fire order is extended or lifted (it runs to Jan 31, 2027)",
    "The current CDFW special regulations for Sespe Creek",
    "Adventure Pass in the windshield and the campfire permit on the phone"
   ],
   "now": {
    "read": "Oct 4, 2026",
    "lines": [
     "No closure order on the Los Padres alerts page for Rose Valley Road, Piedra Blanca or the Sespe River Trail as of Oct 4; Caltrans finished its Hwy 33 tunnel repairs above Ojai in September.",
     "Fire order 05-07-00-26-05 is in force through Jan 31, 2027: no wood or charcoal fires at the trail camps; stoves with a free California Campfire Permit only.",
     "Parking at Piedra Blanca needs an Adventure Pass ($5 a day, $30 a year) or an America the Beautiful pass; no wilderness permit is required.",
     "Sespe Creek near Wheeler Springs was running 0.64 cfs on Oct 4: very low, so expect pools rather than flow until the first winter rains.",
     "A September 2026 trail report: clear and easy to Bear Creek, overgrown below, plenty of water at Bear Creek and intermittent after, and the Willett tub in excellent condition.",
     "Fishing above the Alder Creek confluence is open all year, catch and release, artificial lures with barbless hooks only.",
     "After storms the fords can run waist to chest deep, as one hiker found in February 2026; time the trip for a dry spell."
    ],
    "sources": [
     "https://www.fs.usda.gov/r05/lospadres/alerts",
     "https://www.fs.usda.gov/r05/lospadres/alerts/los-padres-fire-use-and-firearm-restrictions",
     "https://www.fs.usda.gov/r05/lospadres/wilderness",
     "https://fs.usda.gov/r05/lospadres/recreation/ojai-ranger-district-0",
     "https://www.fs.usda.gov/r05/lospadres/offices/ojai-ranger-district",
     "https://www.fs.usda.gov/r05/lospadres/recreation/middle-lion-campground",
     "https://www.fs.usda.gov/r05/lospadres/recreation/camping-cabins",
     "https://fs.usda.gov/r05/passes/adventure-pass"
    ]
   }
  },
  "status": "queued",
  "url": null,
  "at": "https://www.alltrails.com/trail/us/california/sespe-river-trail-to-willett-hot-springs",
  "air": "Santa Barbara (SBA) ~1.5 h · Burbank (BUR) ~2 h"
 },
 {
  "id": "santacruzisland",
  "name": "Santa Cruz Island: Scorpion to Prisoners",
  "type": "backpack",
  "region": "Channel Islands NP",
  "drive": 5.5,
  "len": "3 nts",
  "miles": "~5/day",
  "gain": "≤2,500/day",
  "s": [
   5,
   1,
   5,
   5,
   3
  ],
  "wild": false,
  "skinny": false,
  "permit": "Recreation.gov site + Island Packers boat ✦",
  "fish": "Ocean only; none at Scorpion",
  "swim": "Scorpion Beach kelp, cold winter water ~",
  "season": [
   1,
   2,
   3,
   4,
   5,
   6,
   9,
   10,
   11,
   12
  ],
  "peak": [
   10,
   11,
   3,
   4
  ],
  "epic": true,
  "coord": [
   34.05,
   -119.56
  ],
  "blurb": "An hour by boat to sea cliffs, endemic island foxes and gray whales, with a new point-to-point backpack between Scorpion and Prisoners.",
  "dogs": "no",
  "dogNote": "Pets are not allowed on any Channel Islands park island or on Island Packers boats; only pre-screened service dogs may travel, so the dog stays home.",
  "d": {
   "tag": "California's Galapagos, an hour off Ventura: sea cliffs, island foxes, gray whales on the crossing, and a new camp that makes the island a point-to-point walk.",
   "over": [
    "Santa Cruz is the biggest of the Channel Islands, and the national park's eastern end is reached by Island Packers boats from Ventura in about an hour. Scorpion Anchorage has the main campground, potable water and the classic bluff walks to Cavern Point and Potato Harbor. Prisoners Harbor, on the north shore, leads up the Del Norte Trail to a four-site backcountry camp in an oak grove with views down the coast.",
    "The news this year: the park opened a six-site Prisoners Harbor Campground on Aug 27, 2026, and now pitches Scorpion to Prisoners as a point-to-point backpack. Winter brings gray whales on the crossing from December to mid-February and quiet camps, but also rough seas that cancel boats. Everything rides on the boat and on carrying water, since only Scorpion has a tap."
   ],
   "why": {
    "scenery": "Volcanic sea cliffs, Potato Harbor from above, the Montañon ridge and an empty coastline in every direction.",
    "fish": "Not a fishing trip: no trout, and Scorpion sits inside a no-take marine reserve.",
    "wildlife": "The endemic island fox and island scrub-jay, plus gray whales, dolphins and sea lions on the crossing.",
    "bugs": "Winter means no bugs; yellow jackets at the water spigots are a summer and early fall problem.",
    "water": "Snorkel or kayak the kelp and sea caves off Scorpion, but winter ocean water is cold."
   },
   "route": {
    "mode": "backpack",
    "options": [
     {
      "name": "Scorpion to Del Norte to Prisoners",
      "stat": "3 nts · ~14 mi · ~2,700 ft",
      "text": "Day 1: boat to Scorpion, set up at Scorpion Canyon campground (half a mile to a mile from the pier), and walk the Cavern Point and Potato Harbor bluffs. Day 2: fill every bottle at Scorpion and hike about 10 miles over the Montañon country to Del Norte camp, the hard day, with an unmaintained, overgrown stretch and some scrambling at the high point. Day 3: drop 3.5 miles to the new Prisoners Harbor Campground near the pier, then walk out to Eagle Canyon Overlook. Day 4: boat home from Prisoners. Distances from NPS; gain from the AllTrails point-to-point route run the other way. This only works if Island Packers will land you at Scorpion and take you off at Prisoners on your days, so ask first; it also runs fine in reverse."
     },
     {
      "name": "Scorpion basecamp",
      "stat": "3 nts · ~22 mi of day hikes · ≤1,300/day",
      "text": "Camp three nights at Scorpion with water on tap and a food box. Day 1: Cavern Point Loop and the North Bluff Trail to Potato Harbor, 5 mi. Day 2: Smugglers Road to the cobble beach at Smugglers Cove, 7.5 mi, carrying water. Day 3: the 10 mi Montañon Ridge Loop for experienced hikers, or Scorpion Canyon Loop (4.5 mi) for the island scrub-jay. The simple version when boats to Prisoners do not line up. Distances from the NPS hiking guide."
     }
    ]
   },
   "fish": {
    "water": "Pacific shoreline outside the marine reserves, such as around Prisoners Harbor; none at Scorpion",
    "species": "Nearshore ocean fish (surfperch, kelp bass, rockfish)",
    "method": "Light spin gear from shore with a California license and ocean validation",
    "season": "Scorpion Anchorage is inside Scorpion State Marine Reserve: no take at all. Elsewhere ocean regulations apply; check the CDFW groundfish season before keeping anything.",
    "catch": 1,
    "label": "Ocean only (incidental)",
    "gear": "Leave the 4 to 5 weight home; a light spinning rod if anything",
    "flies": [
     "Small metal jig (spin)",
     "Soft plastic swimbait (spin)"
    ],
    "timing": "Only outside the marine reserves, from the rocks near Prisoners Harbor; a bonus, never the reason you came."
   },
   "wild": [
    "Island fox (endemic)",
    "Island scrub-jay (endemic)",
    "Gray whale (Dec to mid-Feb)",
    "California sea lion",
    "Common dolphin",
    "Bald eagle"
   ],
   "water": {
    "spots": [
     "Scorpion Beach, kelp at the east end",
     "Sea caves toward Cavern Point (kayak)",
     "Smugglers Cove cobble beach",
     "Prisoners Harbor cobble beach"
    ],
    "skinny": "Smugglers Cove on a quiet winter weekday is the most private beach in reach, but the water is cold and the camps are shared."
   },
   "permit": {
    "system": "Campsite reservation on Recreation.gov (Scorpion, Del Norte or Prisoners Harbor) plus an Island Packers boat ticket, booked first; Recreation.gov requires the boat before the site.",
    "cost": "$15 per site per night at all three camps (Scorpion group sites $40); Island Packers camper round trip $96 adult, $91 senior, $71 child; no park entrance fee.",
    "where": "recreation.gov; islandpackers.com or (805) 642-1393; park info (805) 658-5730.",
    "when": "Scorpion books on a six-month rolling window; Del Norte has four sites and Prisoners Harbor six, so those go first. No walk-ups at any camp.",
    "notes": "No campfires or charcoal; enclosed gas stoves only. Island Packers will not carry 5-gallon propane tanks, wagons or carts, coolers over 45 lb or Yeti-style coolers, and no single item may weigh over 45 lb. November through May, check the morning of departure for weather changes."
   },
   "drive": {
    "time": "~5.5 hr",
    "route": "US-101 south to Ventura, then Harbor Boulevard and Spinnaker Drive to Island Packers in Ventura Harbor (1691 Spinnaker Dr).",
    "flags": [
     "Campers check in a full hour before departure",
     "Winter swell and wind cancel boats; build in a spare day"
    ]
   },
   "safety": [
    "Boats cancel and can fail to pick up in winter; carry an extra day of food and water.",
    "Wind comes up hard and fast; stake and guy the tent.",
    "Hantavirus is present in island deer mice; do not touch mice or nests, and keep food sealed.",
    "In winter, Prisoners campers may wade Cañada del Puerto up to 2 ft deep and fast.",
    "Cliff edges on the bluff trails are unfenced and crumbly."
   ],
   "insider": [
    "Book Del Norte and Prisoners Harbor the day the window opens; they are tiny.",
    "Hike Cavern Point clockwise from near campsite 22 to skip the steep climb (NPS guide).",
    "Watch for gray whales on the crossing and from Cavern Point, December to mid-February.",
    "Ravens and foxes open zippers: clip tent and pack zippers with safety pins or small carabiners.",
    "Look for island scrub-jays up Scorpion Canyon and on the walk up from Prisoners."
   ],
   "pack": [
    "About a gallon of water per person per day for the dry camps",
    "Zipper clips for ravens and foxes",
    "Stove with small canisters (no 5-gallon tanks)",
    "Wind-solid tent",
    "Sandals for the Prisoners creek crossing",
    "Spare day of food"
   ],
   "verify": [
    "The Island Packers schedule for your exact days, to Scorpion and from Prisoners",
    "That your camper ticket allows in at Scorpion and out at Prisoners",
    "Marine forecast and Island Packers service alerts the morning before",
    "Recreation.gov confirmation for each night",
    "Whether Cañada del Puerto is flowing, for a filter refill at Prisoners"
   ],
   "now": {
    "read": "Oct 4, 2026",
    "lines": [
     "The new Prisoners Harbor Campground opened Aug 27, 2026: six sites, four people each, $15 a night, no water, about 0.3 mi from the pier.",
     "Scorpion and Del Norte are also $15 a night per site on Recreation.gov; reserve only after the boat is booked, with no walk-ups.",
     "Island Packers camper fares to Santa Cruz are $96 adult, $91 senior and $71 child round trip.",
     "Water: potable at Scorpion only; none at Del Norte or Prisoners Harbor, so carry about a gallon per person per day.",
     "Island Packers posts that it will not transport 5-gallon propane tanks, wagons or carts, coolers over 45 lb or Yeti-style coolers.",
     "No pets on the islands or the boats; no campfires; no fishing at Scorpion, which is a marine reserve.",
     "November to May, boat schedules change with wind and swell; recheck the morning of the trip."
    ],
    "sources": [
     "https://www.nps.gov/chis/planyourvisit/camping.htm",
     "https://www.nps.gov/chis/learn/news/2026-08-17-prisoners-harbor-campground-open.htm",
     "https://www.nps.gov/chis/planyourvisit/backcountry-beach-camping-on-santa-cruz-island.htm",
     "https://www.nps.gov/chis/planyourvisit/conditions.htm",
     "https://www.nps.gov/chis/planyourvisit/fees.htm",
     "https://www.nps.gov/chis/planyourvisit/santa-cruz-things-to-do.htm",
     "https://www.nps.gov/chis/planyourvisit/upload/sci-hiking-2022-ADA.pdf",
     "https://www.recreation.gov/camping/campgrounds/232498"
    ]
   }
  },
  "status": "queued",
  "url": null,
  "at": "https://www.alltrails.com/trail/us/california/del-norte-and-scorpion-campground-via-del-norte-and-montanon-trail",
  "air": "Santa Barbara (SBA) ~45 min to Ventura Harbor · Burbank (BUR) ~1.25 h"
 },
 {
  "id": "mojave",
  "name": "Mojave National Preserve: Hole-in-the-Wall and Kelso Dunes",
  "type": "car",
  "region": "Mojave Natl Preserve",
  "drive": 8.5,
  "len": "3 nts",
  "miles": "day hikes",
  "gain": "flexible",
  "s": [
   4,
   1,
   3,
   5,
   1
  ],
  "wild": false,
  "skinny": false,
  "permit": "Recreation.gov, reservation only ✦",
  "fish": "None",
  "swim": "None (dry)",
  "season": [
   10,
   11,
   12,
   1,
   2,
   3,
   4,
   5
  ],
  "peak": [
   11,
   3,
   4
  ],
  "epic": false,
  "coord": [
   35.05,
   -115.39
  ],
  "blurb": "Volcanic walls and a ring-ladder canyon, 600 foot singing dunes, a lava tube with light beams, and almost nobody else.",
  "dogs": "yes",
  "dogNote": "Pets are allowed on all trails in the preserve on a leash no longer than six feet and are barred only inside buildings, though the ring climb in Banshee Canyon is not passable for most dogs.",
  "d": {
   "tag": "The empty desert between Barstow and Las Vegas: volcanic walls, singing dunes, a lava tube and Joshua tree country, with no entrance fee and no crowds.",
   "over": [
    "Mojave National Preserve fills the triangle between I-15 and I-40, and Hole-in-the-Wall Campground sits at 4,400 feet among pocked volcanic walls, with water, vault toilets and the Rings Loop starting a short walk away. From there the preserve opens in every direction: Kelso Dunes rising some 600 feet off the valley floor, a lava tube with sunbeams through its roof, and Teutonia Peak above the Cima Dome Joshua tree forest, part of which burned in August 2020.",
    "Winter is the season, with days in the 40s to 60s at camp and nights often below freezing; Mid Hills, at 5,600 feet in pinyon and juniper, runs colder still. Both campgrounds are now reservation only. There is no gas, no food and almost no cell service in the preserve, and the paved roads are potholed and washed out at the shoulders, so drive it like the backcountry it is."
   ],
   "why": {
    "scenery": "Volcanic tuff walls, tall dunes, cinder cones and Joshua trees; strange and wide open more than grand.",
    "fish": "None. It is the desert.",
    "wildlife": "Desert bighorn, coyote, kit fox, golden eagle; tortoises sleep through winter.",
    "bugs": "Cold and dry in winter: no bugs.",
    "water": "None to swim; only the spigots at Hole-in-the-Wall and Kelso Depot."
   },
   "route": {
    "mode": "car",
    "basecamp": "Hole-in-the-Wall Campground: 38 sites at 4,400 ft among volcanic walls, water spigots, vault toilets, a dump station and Wi-Fi at the information center next door, $25 a night by reservation only. The Rings Loop and Barber Peak start from camp. Mid Hills (5,600 ft, $20, no water, 9 miles of unpaved road) is the colder, piney alternative, and free dispersed sites on previously used ground are the backup if both are full.",
    "dayhikes": [
     "Rings Loop up Banshee Canyon · 1.4 mi (AllTrails; NPS says 1.5)",
     "Barber Peak Loop from camp · 5.7 mi · 761 ft",
     "Kelso Dunes to the crest · 3.0 mi · 511 ft",
     "Teutonia Peak through the Cima Dome Joshua trees · 3.2 mi · 633 ft",
     "Lava Tube · 0.5 mi (4WD road in)",
     "Hole-in-the-Wall to Mid Hills · 7.9 mi one way · 2,500 ft round trip"
    ]
   },
   "fish": {
    "water": "None",
    "species": "None",
    "method": "None",
    "season": "No fishable water in the preserve.",
    "catch": 0,
    "label": "No fishery (desert)",
    "gear": "Leave the rods home",
    "flies": [],
    "timing": "No fishable water in the preserve."
   },
   "wild": [
    "Desert bighorn sheep",
    "Coyote",
    "Kit fox",
    "Golden eagle",
    "Black-tailed jackrabbit",
    "Desert tortoise (dormant in winter)"
   ],
   "water": {
    "spots": [
     "No swimming water: fill jugs at Hole-in-the-Wall or the Kelso Depot spigot"
    ],
    "skinny": "There is no water to get into anywhere in the preserve."
   },
   "permit": {
    "system": "Hole-in-the-Wall and Mid Hills are reservation only on Recreation.gov; dispersed roadside camping is free and needs no permit.",
    "cost": "$25 a night at Hole-in-the-Wall, $20 at Mid Hills; no entrance fee.",
    "where": "recreation.gov; preserve information (760) 252-6100.",
    "when": "Book ahead for winter weekends and holidays.",
    "notes": "Dispersed camping only in previously used sites, at least a quarter mile from paved roads, 200 yards from water, not along the Kelso Dunes road or within half a mile of Kelso Depot, 14-day limit. Fires only in existing rings or a fire pan when restrictions are lifted; bring your own wood, gathering is banned. Tell the preserve before leaving a car overnight for a backpack."
   },
   "drive": {
    "time": "~8.5 hr",
    "route": "I-5 south, Hwy 58 over Tehachapi to Barstow, I-40 east to Essex Road, north 10 mi to Black Canyon Road, then 10 mi north to Hole-in-the-Wall. Or I-15 to Baker and Kelbaker Road south to Kelso.",
    "flags": [
     "No gas in the preserve or at the I-40 Kelbaker exit; fill in Barstow",
     "Kelbaker Road can hold you up to an hour at the Kelso rail crossing",
     "Navigate to Kelso or Hole-in-the-Wall, never to Mojave, California"
    ]
   },
   "safety": [
    "Nights drop to the 20s at Hole-in-the-Wall and the teens at Mid Hills; bring a real winter bag.",
    "No cell service and no services: carry extra water, a spare tire and a paper map.",
    "Watch for potholes, shoulder drop-offs and tortoises on the paved roads.",
    "The lava tube has loose rock and very low ceilings; bring a light and enter at your own risk.",
    "Never enter old mines; stay out of washes when storms threaten."
   ],
   "insider": [
    "Climb Kelso Dunes in late light and slide down the slip face to hear the sand boom.",
    "Hit the lava tube near midday, when the sunbeams through the roof are strongest.",
    "Teutonia Peak walks through both a living Joshua tree forest and a burned one from the 2020 Dome Fire.",
    "Fill water at Hole-in-the-Wall before heading to Mid Hills, which has none.",
    "The dog can do Barber Peak and the dunes; skip the rings section of the Rings Loop with him."
   ],
   "pack": [
    "Water jugs",
    "Winter sleeping bag and down layers",
    "Firewood from outside the preserve, if fires are allowed",
    "Headlamp for the lava tube",
    "Paper map",
    "Full-size spare tire"
   ],
   "verify": [
    "The NPS road conditions page (go.nps.gov/MojaveRoads), especially Kelso Dunes Road and the Aiken Mine Road to the lava tube",
    "Whether the summer no-open-fires restriction has been lifted",
    "Recreation.gov confirmation",
    "Forecast for wind, cold and snow at Mid Hills",
    "Kelso Depot status, in case the indoor visitor center has reopened"
   ],
   "now": {
    "read": "Oct 4, 2026",
    "lines": [
     "Hole-in-the-Wall ($25) and Mid Hills ($20) campgrounds are open and reservation only on Recreation.gov; water at Hole-in-the-Wall, none at Mid Hills.",
     "There is no entrance fee for the preserve.",
     "All primary paved roads are open per the Sept 22, 2026 update, with potholes and washed-out shoulders; Kelbaker Road can delay you up to an hour at the Kelso rail crossing, and Hart Mine Road is closed.",
     "Kelso Depot's indoor visitor center is closed; its outdoor areas, restrooms, parking and water filling are open.",
     "Kelso Dunes Road is open but rough with deep potholes, high clearance advised; the Aiken Mine Road to the lava tube is 4WD only with soft sand and mudholes after a storm.",
     "As of June 12, 2026 the preserve banned all open fires; check whether that has been lifted before bringing wood.",
     "Winter averages at Hole-in-the-Wall: days 40 to 60 F, nights 20 to 40 F; Mid Hills nights 10 to 30 F."
    ],
    "sources": [
     "https://www.nps.gov/moja/planyourvisit/conditions.htm",
     "https://www.nps.gov/moja/planyourvisit/camping.htm",
     "https://www.nps.gov/moja/planyourvisit/pets.htm",
     "https://www.nps.gov/moja/planyourvisit/lava-tube.htm",
     "https://www.nps.gov/moja/planyourvisit/fire-restrictions.htm",
     "https://www.nps.gov/moja/planyourvisit/fees.htm",
     "https://www.recreation.gov/camping/campgrounds/10332664",
     "https://www.recreation.gov/camping/campgrounds/10332703"
    ]
   }
  },
  "status": "queued",
  "url": null,
  "at": "https://www.alltrails.com/trail/us/california/hole-in-the-wall-rings-trail",
  "air": "Las Vegas (LAS) ~2 h"
 },
 {
  "id": "ohlone",
  "name": "Ohlone Wilderness: Del Valle to Sunol over Rose Peak",
  "type": "backpack",
  "region": "East Bay · Diablo Range",
  "drive": 1.5,
  "len": "3 nts",
  "miles": "~6/day",
  "gain": "≤2,750/day",
  "s": [
   4,
   1,
   4,
   4,
   2
  ],
  "wild": false,
  "skinny": false,
  "permit": "Trail camp reservation by phone, 2 business days ahead",
  "fish": "None on trail; stocked Lake Del Valle at the start",
  "swim": "No swimming in Alameda Creek; Murietta Falls to look at",
  "season": [
   11,
   12,
   1,
   2,
   3,
   4
  ],
  "peak": [
   2,
   3,
   4
  ],
  "epic": false,
  "coord": [
   37.5,
   -121.74
  ],
  "blurb": "A green-season traverse of the East Bay backcountry: Murietta Falls, Rose Peak and three quiet trail camps, and no trail permit needed anymore.",
  "dogs": "no",
  "dogNote": "Dogs are allowed on the Ohlone Wilderness Trail in daytime only and are not allowed on overnight backpacking trips or at the trail camps, so the dog sits this one out (day hikes at Sunol and Del Valle are fine).",
  "d": {
   "tag": "Three short nights across the green winter Diablo Range, Del Valle to Sunol over Rose Peak, ninety minutes from home.",
   "over": [
    "The Ohlone Wilderness Trail runs about 28 miles across the Diablo Range from Lake Del Valle in Livermore to Mission Peak in Fremont, through the Ohlone and Sunol wildernesses and over Rose Peak, 3,817 feet and one of the high points of the East Bay. In summer it is a shadeless oven. After the first rains the grass goes green, the springs and troughs at the trail camps run, Murietta Falls comes alive, and the whole thing is closer than any trailhead in the Sierra.",
    "Walk the Del Valle to Sunol section, about 19 miles, as three short nights with a car at each end: Stewart's Camp, Maggie's Half Acre under Rose Peak, the Sunol backpack camps, then out past the Little Yosemite gorge. The day permit is gone as of 2026; what you need is a trail camp reservation by phone at least two business days ahead. Dogs are day use only, so this is a people trip."
   ],
   "why": {
    "scenery": "Green rolling Diablo Range ridges, Rose Peak at 3,817 ft with long views on a clear winter day, and the rocky Little Yosemite gorge.",
    "fish": "None on the trail; Lake Del Valle at the trailhead gets winter trout plants, and Alameda Creek is closed to fishing.",
    "wildlife": "Golden eagles and hawks on the ridges, deer, coyote, wild pig, newts in the creeks after rain, and cattle everywhere.",
    "bugs": "No mosquitoes in winter, but ticks ride the grass: check every evening.",
    "water": "Not a swim trip: the draw is Murietta Falls when it runs and creeks after storms."
   },
   "route": {
    "mode": "backpack",
    "options": [
     {
      "name": "Del Valle to Sunol over Rose Peak",
      "stat": "3 nts · 19.2 mi · 4,931 ft (AllTrails, 4.7★)",
      "text": "Day 1: from the Lichen Bark trailhead at Del Valle, the steep first climb, a drop into Williams Gulch and another climb to Stewart's Camp, about 6 to 6.6 mi and roughly 2,750 ft, with the short side trail to Murietta Falls if it has rained. Day 2 is short: across the high country past Rose Peak to Maggie's Half Acre, about 4.5 mi, with sunset on the summit. Day 3 drops about 6 mi to the Sunol backpack camps above Alameda Creek. Day 4 is a short walk out to the Sunol visitor center and the second car, with a detour to the Little Yosemite gorge."
     },
     {
      "name": "Full traverse, Del Valle to Mission Peak",
      "stat": "3 nts · 28.3 mi · 7,444 ft (AllTrails, 4.8★)",
      "text": "Stewart's Camp the first night, then the long day over Rose Peak to the Sunol backpack camps (about 10 mi by trail guides), then about 8 mi to Eagle Springs below Mission Peak. Day 4 goes over the top of Mission Peak and down to the Stanford Avenue staging area in Fremont, about 4.4 mi. Eagle Springs had water on Oct 4; arrange a pickup at the Fremont end, where guides warn of car break-ins."
     },
     {
      "name": "No shuttle: Del Valle out and back to Rose Peak",
      "stat": "2 to 3 nts · 19.3 mi RT · 5,518 ft (AllTrails, 4.7★)",
      "text": "Base at Stewart's Camp or Maggie's Half Acre and take Rose Peak and Murietta Falls as day trips from camp, then walk back down to the car at Del Valle. Simplest logistics, the same best scenery, and every night near a listed water source."
     }
    ]
   },
   "fish": {
    "water": "None on the trail; Lake Del Valle at the trailhead",
    "species": "Stocked rainbow trout in the cool months, plus bass, striped bass, catfish and panfish",
    "method": "A few casts from the Del Valle shore the morning you start, if at all",
    "season": "Del Valle is open all year and needs a $5 daily district fishing permit plus a California license (16 and over); the district plants trout fall through spring. Alameda Creek through Sunol is closed to fishing in winter under the 2026 CDFW regulations.",
    "catch": 1,
    "label": "Stocked lake only (Del Valle)",
    "gear": "Light spin, or a 5 wt with a sinking line, from the Lake Del Valle shore; $5 district permit plus a CA license",
    "flies": [
     "Woolly Bugger, olive or black #10",
     "Thin Mint #10",
     "Kastmaster 1/8 oz (spin)"
    ],
    "timing": "Only for a cast at the trailhead the morning you start; Del Valle is put-and-take trout water in winter, and nothing on the trail is fishable."
   },
   "wild": [
    "Golden eagle",
    "Red-tailed hawk",
    "Black-tailed deer",
    "Coyote",
    "Wild pig",
    "California newt (wet season)"
   ],
   "water": {
    "spots": [
     "Murietta Falls (only after rain)",
     "Little Yosemite gorge on Alameda Creek (look only)"
    ],
    "skinny": "No: swimming and wading are not allowed in Alameda Creek, and the trail has nothing else to get into."
   },
   "permit": {
    "system": "East Bay Regional Park District backpack camp reservation. The Ohlone trail permit was discontinued: sales ended Nov 19, 2025, and none is required from Jan 1, 2026.",
    "cost": "$15 per site per night plus an $8 non-refundable reservation fee (2026 district rate); parking $5 at the Del Valle and Sunol kiosks, with the overnight pass included in the reservation",
    "where": "By phone: 1-888-327-2757, option 2, Monday to Friday 9am to 4pm",
    "when": "At least two business days ahead; winter weekdays are wide open, spring weekends fill",
    "notes": "Ohlone and Sunol camps: Eagle Springs, the Sunol backpack area (Sky, Cathedral, Hawk's Nest, Oak View, Sycamore, Eagle's Eyrie, Star's Rest), Maggie's Half Acre, Doe Camp, Stewart's Camp and Boyd Camp. Backpack stoves only, no campfires, no alcohol, quiet hours 10pm to 7am, no refunds for rain. The trail map is now free at the Sunol, Del Valle and Coyote Hills visitor centers."
   },
   "drive": {
    "time": "~1.5 hr",
    "route": "Across the San Mateo Bridge, I-880 and I-680 to I-580 in Livermore, then Mines Rd and Del Valle Rd to the park; the Sunol end is off I-680 at Calaveras Rd and Geary Rd",
    "flags": [
     "Two-car shuttle, or a drop-off and pickup; Del Valle to Sunol is roughly 45 minutes by car",
     "Del Valle Rd is narrow and winding for the last miles",
     "Drive in midday to miss the 580 and 680 commute"
    ]
   },
   "safety": [
    "Cattle graze the whole route: give cows with calves a wide berth and close every gate",
    "Wet adobe clay turns the steep fire roads to grease after storms; trekking poles help",
    "Exposed ridges: cold wind and the odd dusting of snow on Rose Peak in winter storms, with no shade or shelter",
    "Ticks in the grass: check daily",
    "Short days: sunset is around 5pm in December, so start early"
   ],
   "insider": [
    "Go a few dry days after a good storm: Murietta Falls runs and the troughs are full, but the clay has firmed up",
    "Rose Peak at sunset from Maggie's Half Acre, then back to camp by headlamp",
    "Pick up the free trail map at the Del Valle or Sunol visitor center; there is no permit to buy anymore",
    "Midweek, the trail camps are usually yours alone"
   ],
   "pack": [
    "Water filter or treatment: every camp source is non-potable",
    "Trekking poles for the steep pitches",
    "Warm layers and a real rain shell",
    "Tick check kit"
   ],
   "verify": [
    "Camp reservation confirmed (1-888-327-2757, option 2)",
    "The water list on the district's Ohlone page, updated as springs change",
    "Storm forecast: plan around a dry window, the clay roads are miserable wet",
    "That no fire-season stove restriction is still posted for Sunol",
    "Shuttle: the second car at Sunol, or a ride"
   ],
   "now": {
    "read": "Oct 4, 2026",
    "lines": [
     "No Ohlone trail permit is needed in 2026: the district stopped selling them on Nov 19, 2025, and the trail map is now free at the Sunol, Del Valle and Coyote Hills visitor centers.",
     "Overnight still needs a trail camp reservation, by phone at 1-888-327-2757 option 2 (Monday to Friday, 9am to 4pm), at least two business days ahead: $15 per site per night plus an $8 non-refundable reservation fee in 2026.",
     "Water was listed as available on Oct 4, 2026 at Eagle Springs, Backpack Camp, Doe Camp, Maggie's Half Acre, Boyd Camp, Stromer Springs and Stewart's Camp; all of it must be filtered, treated or boiled.",
     "Dogs: daytime only on the Ohlone, never on overnight backpacking trips.",
     "Winter hours Nov 2 to Jan 31 are 8am to 5pm; parking is $5 at the Del Valle kiosk and $5 at Sunol on weekends and holidays.",
     "Closures as of Oct 4: the Shady Glen Trail at Sunol (off this route); Lake Del Valle carries a blue-green algae caution at East Swim Beach and golden mussels with a mandatory boat quarantine.",
     "No campfires or barbecues anywhere on the trail; backpack stoves only at the camps."
    ],
    "sources": [
     "https://www.ebparks.org/about-us/whats-new/news/permit-requirement-discontinued-ohlone-wilderness-trail",
     "https://ebparks.org/permits/ohlone-wilderness",
     "https://ebparks.org/parks/ohlone",
     "https://ebparks.org/recreation/camping/backpack-camping-faqs",
     "https://ebparks.org/parks/sunol",
     "https://www.ebparks.org/parks/del-valle",
     "https://www.ebparks.org/alerts-closures",
     "https://www.ebparks.org/permits/fishing-permit"
    ]
   }
  },
  "status": "queued",
  "url": null,
  "at": "https://www.alltrails.com/trail/us/california/sunol-wilderness-via-sailor-camp-rocky-ridge-and-canyonview-trail",
  "air": "Oakland (OAK) ~45 min · San Jose (SJC) ~40 min"
 },
 {
  "id": "yosemitewinter",
  "name": "Yosemite Valley in Winter: Upper Pines and Dewey Point",
  "type": "car",
  "region": "Yosemite · Valley",
  "drive": 4.5,
  "len": "3 nts",
  "miles": "~5/day",
  "gain": "≤1,100/day",
  "s": [
   5,
   2,
   4,
   5,
   2
  ],
  "wild": true,
  "skinny": false,
  "permit": "Upper Pines reservation + $35 entry ✦",
  "fish": "Wild trout, Merced now open all year (C&R rainbows)",
  "swim": "None in winter",
  "season": [
   11,
   12,
   1,
   2,
   3,
   4
  ],
  "peak": [
   1,
   2
  ],
  "epic": true,
  "coord": [
   37.736,
   -119.563
  ],
  "blurb": "Yosemite Valley under snow with the crowds gone: camp at Upper Pines, walk Mirror Lake and Columbia Rock, snowshoe to Dewey Point.",
  "dogs": "limited",
  "dogNote": "Leashed dogs (6 ft max) are allowed at Upper Pines and on paved roads, sidewalks and bike paths, including the paved road to Mirror Lake, Lower Yosemite Fall and Cook's Meadow, but not at Camp 4, on unpaved trails like Columbia Rock and the Mirror Lake loop, or on snow-covered unplowed roads like the Dewey Point route.",
  "d": {
   "tag": "Yosemite Valley in snow and near silence: Upper Pines, Mirror Lake, Columbia Rock and a snowshoe to Dewey Point.",
   "over": [
    "Winter is the quiet Yosemite. The Valley floor at 4,000 feet takes snow a few times a season and usually clears between storms, so the walks stay open while the walls go white above them. Upper Pines is the one Valley campground on reservations all year and it takes dogs; Camp 4 goes first-come, first-served after Nov 29. The days are short and full: the loop to Mirror Lake under Half Dome, the Yosemite Falls trail to Columbia Rock for the Valley view, a piece of the Valley Loop, and the Merced at midday with a fly rod, open all year as of 2026.",
    "Once the road to Badger Pass is plowed, from about mid-December, drive up to the ski area and snowshoe the marked winter route to Dewey Point, about seven miles round trip to the rim straight across from El Capitan. Two things to watch this year: the Dome Fire, which closed Glacier Point Road in late September, and chains, which every vehicle must carry whenever controls are up, four-wheel drive included."
   ],
   "why": {
    "scenery": "Half Dome, El Capitan and Yosemite Falls with snow on the rim and frost on the meadows; Dewey Point looks straight across the Valley.",
    "fish": "Wild trout in the Merced, now open all year, but winter fish are slow and every rainbow goes back.",
    "wildlife": "Mule deer and coyotes in the meadows, bobcats hunting voles in the snow, dippers on the river; most bears den, some stay active.",
    "bugs": "None in winter.",
    "water": "Not a swim trip: the Merced runs near freezing and Mirror Lake fills after storms."
   },
   "route": {
    "mode": "car",
    "basecamp": "Upper Pines Campground (4,000 ft, open all year, reservation only, $36 a night, flush toilets, drinking water, a food locker at every site, dogs allowed), walking distance to Happy Isles and the Mirror Lake road. Fallback: Camp 4, by Recreation.gov reservation one week ahead through Nov 29, then first-come, first-served at $10 a night, no pets.",
    "dayhikes": [
     "Mirror Lake Loop · 5.1 mi · 341 ft (AllTrails); dogs only on the paved first mile",
     "Yosemite Falls Trail to Columbia Rock · 2.3 mi RT · 1,036 ft (AllTrails); icy above in cold snaps",
     "Middle Valley Loop from Camp 4 past El Capitan Meadow · 5.8 mi · 249 ft (AllTrails); the El Capitan Bridge crossing is closed weekdays through December",
     "Dewey Point winter route from Badger Pass on snowshoes · 7.2 mi RT · 702 ft (AllTrails); only once the road is plowed and any Dome Fire closure lifts",
     "Lower Yosemite Fall loop and Cook's Meadow · 1.2 mi · 59 ft (AllTrails); paved, dogs on leash OK",
     "Full Valley Loop · 20.6 mi · 1,318 ft (AllTrails), in sections"
    ]
   },
   "fish": {
    "water": "Merced River through Yosemite Valley",
    "species": "Wild rainbow (catch and release) and brown trout",
    "method": "Barbless flies or artificial lures only, no bait or scent; nymph the deep slow runs in the warm middle of the day",
    "season": "Open all year (new in 2026). Only artificial lures or flies with barbless hooks; rainbow trout catch and release only; brown and brook trout 5 per day, 10 in possession. No fishing from any bridge. California license for 16 and over.",
    "catch": 2,
    "label": "Slow (wild, winter river)",
    "gear": "4 to 5 wt, 9 ft, 5x to 6x tippet, barbless only; indicator nymph rigs in the slow runs",
    "flies": [
     "Zebra Midge #18 to 20",
     "Pheasant Tail #16 to 18",
     "Blue Winged Olive #18 to 20",
     "Woolly Bugger, olive #10"
    ],
    "timing": "11am to 2pm on sunny days, in the deep tailouts and slow runs; cast from the bank, never from a bridge."
   },
   "wild": [
    "Mule deer",
    "Coyote",
    "Bobcat",
    "American dipper",
    "Steller's jay",
    "Black bear (mostly denning)"
   ],
   "water": {
    "spots": [
     "Merced River below Sentinel Bridge (to look at in winter)",
     "Mirror Lake (fills after storms)"
    ],
    "skinny": "Not a swim trip: the Merced runs near freezing in winter."
   },
   "permit": {
    "system": "Upper Pines on Recreation.gov (reservation only, all year) plus the park entrance fee. Yosemite ended timed entry reservations for 2026.",
    "cost": "Upper Pines $36 a night; entrance $35 per vehicle for 7 days ($70 Yosemite annual pass); Camp 4 $10 a night in the winter first-come season",
    "where": "recreation.gov (Upper Pines, and Camp 4 through Nov 29); entrance stations for the entry pass",
    "when": "Upper Pines dates release five months ahead on the 15th at 7am Pacific and sell out in minutes; every Nov to Jan date is already released, so watch for cancellations",
    "notes": "Winter first-come campgrounds are Camp 4 (after Nov 29), Wawona and Hodgdon Meadow, and they can fill on holidays and weekends. A day snowshoe to Dewey Point needs no permit; camping on the rim would need a wilderness permit, and camping is not allowed at Dewey Point itself. Food and scented items go in the site locker: bears."
   },
   "drive": {
    "time": "~4.5 hr",
    "route": "Across the bay to I-580 and I-205, Hwy 99 to Merced, then Hwy 140 through Mariposa and El Portal, the lowest and least-chained entrance in winter; Hwy 120 through Groveland is shorter but higher",
    "flags": [
     "Carry chains: whenever controls are up, every vehicle must have them, including four-wheel drive and rentals; Hwy 41, Hwy 120 and the Badger Pass road get controls more often than Hwy 140",
     "Hwy 140 runs one lane on temporary bridges around the Ferguson slide; Caltrans began the rock shed build in summer 2026 (about five years of work)",
     "El Capitan Bridge stabilization: 15 minute delays Monday to Friday, 7am to 7pm, through December 2026",
     "The road to Badger Pass is plowed only from about mid-December to early April; Tioga and Glacier Point roads beyond close with the first big storm"
    ]
   },
   "safety": [
    "Chains in the car and know how to fit them; storms can close roads for hours",
    "Ice above Columbia Rock and on shaded switchbacks: microspikes, and turn around where it glazes",
    "Dewey Point ends at a sheer drop that can carry a snow cornice: stay well back from the edge",
    "Rockfall in the Valley after freeze-thaw and heavy rain",
    "Nights in the 20s: wet snow and short days make hypothermia the real risk"
   ],
   "insider": [
    "Midweek in December and early January is the emptiest the Valley gets; Upper Pines cancellations show up on Recreation.gov",
    "After a storm clears, go to Tunnel View and Valley View early",
    "On the Dewey Point route wear snowshoes and stay off the set ski tracks: the park asks hikers not to boot or microspike the trail",
    "Fish the Merced from the bank between about 11am and 2pm, when the sun is on the water"
   ],
   "pack": [
    "Tire chains, practiced once at home",
    "Microspikes",
    "Snowshoes, or rent at Badger Pass once the ski area opens",
    "A 15 degree bag and an insulated pad",
    "Barbless flies and a California fishing license"
   ],
   "verify": [
    "Upper Pines reservation on Recreation.gov, or Camp 4 first-come rules after Nov 29",
    "Road and chain status: 209-372-0200, then 1, 1",
    "Glacier Point Road plowed to Badger Pass, and the Dewey Point route outside any Dome Fire closure",
    "Badger Pass opening date and snowshoe rentals",
    "El Capitan Bridge weekday trail closure if the Valley Loop is on the list"
   ],
   "now": {
    "read": "Oct 4, 2026",
    "lines": [
     "Upper Pines is open all year by reservation only, $36 a night; Camp 4 is by Recreation.gov reservation through November (sources give Nov 9 and Nov 29 as the last reserved night, so confirm), then first-come, first-served at $10 a night, no pets. Wawona and Hodgdon Meadow are also first-come in winter.",
     "No entry reservation: Yosemite dropped timed entry for 2026. Entrance is $35 per vehicle for 7 days, and Nov 11 (Veterans Day) is listed as a fee-free day.",
     "Chains: whenever controls are in effect, every vehicle must carry them, four-wheel drive and rentals included. Road info: 209-372-0200.",
     "The Dome Fire, reported Sept 15 near Chilnualna Falls, was 40 percent contained on Oct 1; it has Glacier Point Road closed and the Ostrander Lake Trail and the country south of it closed. NPS normally plows the road to Badger Pass from about mid-December to early April.",
     "Valley Loop: the trail over El Capitan Bridge is closed weekdays through December for bridge work, with 15 minute road delays weekdays 7am to 7pm through December 2026.",
     "Merced River: open all year as of 2026, barbless artificial lures and flies only, rainbows catch and release, browns and brook trout 5 a day.",
     "Mariposa Grove Road closes about Nov 30; Tioga Road and Glacier Point Road close with the first big storm."
    ],
    "sources": [
     "https://www.nps.gov/yose/planyourvisit/camping.htm",
     "https://www.nps.gov/yose/planyourvisit/campgrounds.htm",
     "https://www.nps.gov/yose/planyourvisit/camp4.htm",
     "https://www.recreation.gov/camping/campgrounds/232447",
     "https://www.nps.gov/yose/planyourvisit/fees.htm",
     "https://www.nps.gov/yose/planyourvisit/reservations.htm",
     "https://www.nps.gov/yose/planyourvisit/pets.htm",
     "https://www.nps.gov/yose/planyourvisit/tirechains.htm"
    ]
   }
  },
  "status": "queued",
  "url": null,
  "at": "https://www.alltrails.com/trail/us/california/dewey-point-trail--4",
  "air": "Fresno (FAT) ~2.5 hr · Merced (MCE) ~2 hr"
 },
 {
  "id": "saltpoint",
  "name": "Sonoma Coast: Salt Point and Gualala Point storm camp",
  "type": "car",
  "region": "Sonoma Coast",
  "drive": 3,
  "len": "3 nts",
  "miles": "~4/day",
  "gain": "≤1,300/day",
  "s": [
   5,
   3,
   4,
   5,
   2
  ],
  "wild": true,
  "skinny": false,
  "permit": "Reservable (ReserveCalifornia / Sonoma County Parks)",
  "fish": "Wild Gualala steelhead (flows permitting), shore rockfish",
  "swim": "Storm surf and tidepools, no swim",
  "season": [
   10,
   11,
   12,
   1,
   2,
   3,
   4,
   5
  ],
  "peak": [
   1,
   2
  ],
  "epic": false,
  "coord": [
   38.567,
   -123.33
  ],
  "blurb": "Storm-watching camp on the Sonoma coast: Salt Point's honeycomb bluffs and coves, gray whales offshore, and a dog-friendly fallback on the Gualala River.",
  "dogs": "limited",
  "dogNote": "At Salt Point dogs are allowed on leash in the campground, on paved areas and on the trails from the campground to the cove, but not on hiking trails, beaches or the Kruse reserve trails; at Gualala Point Regional Park leashed dogs are allowed throughout the park, bluff trail and beach included.",
  "d": {
   "tag": "Storm-season camping on the wildest stretch of the Sonoma coast: Salt Point's tafoni bluffs, Gerstle Cove, whales offshore, and a steelhead river at Gualala Point.",
   "over": [
    "North of Jenner the Sonoma coast turns wild: sandstone headlands weathered into honeycomb tafoni, kelp coves, and bishop pine and redwood running down to the bluffs. Salt Point State Park holds a long run of that shoreline, with Stump Beach, Gerstle Cove and Fisk Mill Cove along the bluff trail and a prairie and pygmy forest above the highway, and the Kruse rhododendron reserve sits next door. In winter Gerstle Cove is the campground that stays open, and storm days are the show: big surf exploding on the points and gray whales heading south offshore.",
    "Gualala Point Regional Park, about 20 miles north at the Sonoma and Mendocino line, is the alternate and the dog camp: a small campground in the trees on the Gualala River, leashed dogs allowed everywhere including the bluff trail and beach, and a wild steelhead river at the door when winter flows allow. Split the three nights between them or pick one."
   ],
   "why": {
    "scenery": "Sculpted sandstone, kelp coves and storm surf at Stump Beach and Fisk Mill; redwood and bishop pine down to the bluffs.",
    "fish": "Wild winter steelhead in the Gualala when flows allow (release them all), plus shore rockfish outside Gerstle Cove.",
    "wildlife": "Gray whales southbound, harbor seals and river otters at the Gualala mouth, sea lions, deer.",
    "bugs": "Winter coast: none to speak of.",
    "water": "Not swimming weather: tidepools and a calm-day look into Gerstle Cove."
   },
   "route": {
    "mode": "car",
    "basecamp": "Gerstle Cove Campground at Salt Point (30 sites in the pines above the cove, open all year, $35 a night, food lockers), walking distance to the cove and the bluff trail. For the dog, or for steelhead: Gualala Point Regional Park (19 sites on the Gualala River, open all year, reservation only, $41 a night plus tax), about 20 miles north.",
    "dayhikes": [
     "Salt Point Trail to Stump Beach along the bluffs · 3.4 mi RT · 141 ft (AllTrails)",
     "Salt Point and North Trail loop: prairie, pygmy forest, Stump Beach · 8.6 mi · 1,295 ft (AllTrails)",
     "South Gerstle and the southern bluffs, tafoni country · 1.1 mi RT · 36 ft (AllTrails)",
     "Bluff Trail to Fisk Mill Cove and Sentinel Rock · 1.2 mi RT · 98 ft (AllTrails)",
     "Kruse Rhododendron reserve, Chinese Gulch and Phillips Gulch loop · 2.2 mi · 406 ft (AllTrails); blooms mid-April to mid-June",
     "Gualala Point Bluff Top Trail, dogs on leash · 5.8 mi RT · 252 ft (AllTrails)"
    ]
   },
   "fish": {
    "water": "Gualala River from Gualala Point Regional Park for steelhead; Salt Point rocks and Stump Beach for shore rockfish",
    "species": "Wild winter steelhead (catch and release); rockfish, cabezon, greenling, lingcod and surfperch",
    "method": "Swing a sink tip on a 7 to 8 wt for steelhead when the river is open and in shape; rockfish from the rocks only on calm low tides",
    "season": "Gualala main stem: fourth Saturday in May through Mar 31, barbless hooks only from Nov 1, 2 hatchery steelhead a day with every wild fish released, no fishing from a float tube or boat Nov 15 to Feb 28 from the North Fork down to the Hwy 1 bridge, and closed by low-flow rule whenever the South Fork gauge near Sea Ranch is under 150 cfs (Sept 1 to Apr 30). Steelhead Report Card required. Ocean: Gerstle Cove is no take; the Salt Point marine area allows finfish only; shore anglers are exempt from groundfish seasons and depths; 10 rockfish, cabezon and greenling combined (1 copper), lingcod 2 at 22 in, no quillback or yelloweye.",
    "catch": 2,
    "label": "Hard but wild (steelhead) + shore rockfish",
    "gear": "7 to 8 wt, 10 ft, with a sink tip for the Gualala (heavier than the 4 to 5 wt kit); a 9 to 10 ft spinning rod for rockfish off the rocks; barbless on the river",
    "flies": [
     "Egg-sucking leech, black or purple #4 to 6",
     "Single egg or Glo Bug, barbless",
     "Intruder-style, purple and black",
     "Clouser Minnow (rockfish, calm days)"
    ],
    "timing": "Gualala on the drop after a storm, gauge above 150 cfs and the mouth open; rockfish only at low tide on a calm day."
   },
   "wild": [
    "Gray whale (southbound in winter)",
    "Harbor seal",
    "River otter",
    "California sea lion",
    "Black-tailed deer",
    "Steelhead (Gualala River)"
   ],
   "water": {
    "spots": [
     "Gerstle Cove tidepools and calm-day snorkel (look, never take)",
     "Gualala River estuary (flat water for a paddle)"
    ],
    "skinny": "Not realistic in storm season: cold, dangerous surf and public coves."
   },
   "permit": {
    "system": "ReserveCalifornia for Gerstle Cove (Salt Point State Park); Sonoma County Regional Parks for Gualala Point",
    "cost": "Gerstle Cove $35 a night plus an $8.25 reservation fee, extra vehicle $10, day use $10; Gualala Point $41 a night plus tax and a $10 reservation fee, extra vehicle $10, day use $8",
    "where": "reservecalifornia.com or 1-800-444-7275; socoparks.org/camping or 707-565-2267 (Monday to Friday, 10am to 3pm)",
    "when": "Both open six months ahead (ReserveCalifornia at 8am Pacific); winter weekdays are easy",
    "notes": "State Parks rules: cancel 7 or more days out for a refund less the $8.25 fee, 2 to 6 days out forfeits the first night, inside 2 days or a no-show forfeits everything, and three no-shows in a calendar year bring a 365-day booking ban; the site is held until noon the day after arrival. Gualala Point campsites are reservation only (hike and bike sites are first-come). Max RV length 31 ft at Gerstle Cove, 24 ft at Gualala Point."
   },
   "drive": {
    "time": "~3 hr",
    "route": "US-101 north to Hwy 116 at Cotati, through Sebastopol and Guerneville to Jenner, then Hwy 1 north about 18 to 20 miles to Salt Point; Gualala Point is about 20 miles further",
    "flags": [
     "Hwy 1 north of Jenner is narrow, winding and exposed; winter storms bring slides and closures, so check QuickMap",
     "Weekday one-way signals on Hwy 116 near Monte Rio (7am to 3:30pm) through January 2027, and on Hwy 1 in Bodega Bay (7am to 3pm) through about December",
     "Fuel is scarce: fill up in Guerneville or Gualala"
    ]
   },
   "safety": [
    "Sneaker waves and storm surf: never turn your back on the ocean, and stay off wet rocks at Stump Beach and the points",
    "Undercut, crumbling bluff edges",
    "Wind storms drop limbs and trees in the campground forest",
    "Hwy 1 at night in rain: slides, rockfall, no shoulders"
   ],
   "insider": [
    "Time the storm-watching for a big swell, then walk Stump Beach and Fisk Mill as it eases",
    "The tafoni honeycomb is best on the south Gerstle bluffs and around Fisk Mill Cove",
    "Watch for gray whales from Whale Watch Point at Gualala Point",
    "Gualala steelhead move after storms open the river mouth: check the gauge and the low-flow status before rigging"
   ],
   "pack": [
    "Full rain kit and a tarp for a dry kitchen",
    "Binoculars",
    "Headlamp: sunset is around 5pm",
    "Fishing license and Steelhead Report Card if the rod comes"
   ],
   "verify": [
    "Gerstle Cove reservation, and that Woodside is closed for the season",
    "Hwy 1 and Hwy 116 on Caltrans QuickMap",
    "Storm, wind and high surf advisories",
    "Gualala low-flow status (CDFW updates it Monday, Wednesday and Friday)",
    "CDPH shellfish advisories before eating anything gathered outside the marine protected areas"
   ],
   "now": {
    "read": "Oct 4, 2026",
    "lines": [
     "Gerstle Cove is the Salt Point campground open in winter: 30 sites at $35 a night plus an $8.25 ReserveCalifornia fee, $10 day use; Woodside closes for the season (last winter it reopened May 1).",
     "ReserveCalifornia opens dates six months ahead at 8am Pacific. Cancel 7 or more days out for a refund less the $8.25 fee; 2 to 6 days out forfeits the first night; inside 2 days or a no-show forfeits everything, and three no-shows in a calendar year bring a 365-day booking ban.",
     "Gualala Point Regional Park camps all year, reservation only: $41 a night plus tax and a $10 reservation fee, $8 day use, leashed dogs allowed throughout the park.",
     "Highway 1: Caltrans listed no restrictions in Sonoma County on Oct 4; expect weekday one-way signals on Hwy 1 in Bodega Bay through about December and on Hwy 116 near Monte Rio through January 2027, and one-way control in Gualala on the Mendocino side through Oct 30.",
     "The late-July Woodside Fire (about 152 acres near Timber Cove, south of the park) is out; the Salt Point campgrounds reopened in August.",
     "Gerstle Cove is a no-take marine reserve and the rest of the Salt Point marine area allows finfish only (abalone is closed until at least 2036), so no mussels, crabs or seaweed. The sport mussel quarantine ran May 1 to Oct 31.",
     "Gualala River: open to Mar 31 with barbless hooks from Nov 1 and all wild steelhead released, but closed whenever the South Fork gauge near Sea Ranch reads under 150 cfs."
    ],
    "sources": [
     "https://www.parks.ca.gov/?page_id=453",
     "https://www.parks.ca.gov/?page_id=448",
     "https://www.parks.ca.gov/29676",
     "https://www.parks.ca.gov/1029",
     "https://campflare.com/campground/rc-703-648",
     "https://parks.sonomacounty.ca.gov/visit/find-a-park/gualala-point-regional-park",
     "https://parks.sonomacounty.ca.gov/play/camping/tent-trailer-and-rv-campsites",
     "https://wildlife.ca.gov/Conservation/Marine/MPAs/Salt-Point-Gerstle-Cove"
    ]
   }
  },
  "status": "queued",
  "url": null,
  "at": "https://www.alltrails.com/trail/us/california/salt-point-and-north-trail-loop",
  "air": "Sonoma County (STS) ~1.5 hr · SFO ~3 hr"
 }
]
);
const WINTER_NOW = {
 "pointreyes": {
  "dogs": "no",
  "dogNote": "Pets are prohibited in all four hike-in camps and on almost all Point Reyes trails, including every route to Wildcat and Coast Camp; leashed dogs (6 foot leash) are allowed only on a few trails such as the Kehoe Beach Trail and on set beach stretches at Kehoe, Limantour (southeast of the lot toward Coast Camp) and Point Reyes Beach.",
  "now": {
   "read": "Oct 4, 2026",
   "lines": [
    "Permits: Recreation.gov only, $30 a night for a standard site (up to 6 people) and $90 for a group site (7 to 25); Senior and Access passes take half off standard sites. There are no walk-up or same-day sites: do not arrive without a reservation.",
    "Release: most sites open three months to the day ahead and the rest 14 days ahead, both at 7am Pacific, so a mid-January weekend opens in mid-October. At Wildcat, sites 1, 2, 3, 5 and 7 are on the three-month window and 4, 6 and 8 on the 14-day window.",
    "Fire: wood and charcoal fires are prohibited in all four hike-in camps; cook on a gas stove or canned heat. Driftwood fires on sandy beaches need a free daily permit printed from the park site, void on high fire danger, winds over 30 mph or Spare the Air days.",
    "Water: faucets at Wildcat, Coast, Sky and Glen, usually potable; bring a filter anyway. There is no water at the Palomarin or Five Brooks trailheads.",
    "Closures: the Palomarin Beach Trail has been closed since 2020 for failing cliffs; no other trail or camp closures were posted today. The cliff-top Alamere Falls Trail is unmaintained and the park warns against it: reach the falls by walking 1.1 miles south from Wildcat on the beach at low tide, and since winter beaches hold less sand, turn back if waves reach the bluffs.",
    "Limits: four nights per visit and 30 a year. Print the confirmation for the ranger and leave a copy face up on the dash of each car parked overnight at the trailhead."
   ],
   "sources": [
    "https://www.nps.gov/pore/planyourvisit/camping.htm",
    "https://www.recreation.gov/camping/campgrounds/233359",
    "https://www.nps.gov/pore/planyourvisit/pets.htm",
    "https://www.nps.gov/pore/planyourvisit/beachfires.htm",
    "https://home.nps.gov/pore/planyourvisit/alamere_falls.htm",
    "https://home.nps.gov/pore/learn/management/lawsandpolicies.htm"
   ]
  }
 },
 "bigsur": {
  "dogs": "limited",
  "dogNote": "Pfeiffer Big Sur allows dogs only on the Warden's Path and River Path and in its day-use lots and campground; Julia Pfeiffer Burns and Andrew Molera allow no dogs at all; Limekiln allows leashed dogs in the campground and on the beach but not on trails; Forest Service campgrounds require a leash no longer than 6 feet.",
  "now": {
   "read": "Oct 4, 2026",
   "lines": [
    "Highway 1 is open end to end, Carmel to Cambria, since Regent's Slide reopened Jan 14, 2026. As of Oct 4 there is 24-hour one-way signal control at Rocky Creek Bridge through Nov 30, plus overnight full closures (11pm to 5am) Oct 8 near Nepenthe and Oct 12 to 15 near Point Sur. Winter storms can still close it: check Caltrans the morning you drive.",
    "Fires: the Timber Fire (started Aug 8 southeast of Big Sur, 25,352 acres) was 88 percent contained on Oct 4; the Plaskett Fire (30,124 acres) was fully contained Oct 1. Repair work continues in both.",
    "Pfeiffer Big Sur State Park, campground and river gorge included, is closed until further notice, and State Parks says all backcountry trails east of Highway 1 stay closed indefinitely. When it reopens, reservations are on ReserveCalifornia up to six months ahead.",
    "Forest Service camps are out too: Kirk Creek and Plaskett Creek have been closed since August for the fires, and the Bottchers Gap road is closed under Forest Order 05-07-51-26-11 through Jan 31, 2027. Pfeiffer Beach and Sycamore Canyon Road are exempt from that order; on the road you must stay in a vehicle.",
    "Open now: Julia Pfeiffer Burns day use and the Partington Cove trail ($10 per vehicle; the McWay Falls beach and Saddle Rock area are off limits), Andrew Molera on a limited basis (the old coast road and East Molera Trail are closed), and Limekiln day use (its campground is closed for a bridge study). None of these has winter camping today.",
    "Fire rules: a Los Padres order in force June 4, 2026 to Jan 31, 2027 bans any fire, campfire or stove fire outside designated campfire sites; a gas or pressurized liquid fuel stove is legal only with a free California Campfire Permit.",
    "Fishing: the 2026 CDFW booklet (updated July 10, 2026) closes the Big Sur River to all fishing all year inside Pfeiffer Big Sur State Park, and above the gorge pool it opens only from the Saturday before Memorial Day through Sept 30 (zero trout, barbless artificial lures), so there is no legal winter fishing on this reach."
   ],
   "sources": [
    "https://www.parks.ca.gov/?page_id=570",
    "https://www.parks.ca.gov/?page_id=21284",
    "https://www.parks.ca.gov/post/128",
    "https://www.parks.ca.gov/?page_id=578",
    "https://www.parks.ca.gov/?page_id=582",
    "https://www.parks.ca.gov/?page_id=577",
    "https://www.fs.usda.gov/r05/lospadres/recreation/kirk-creek-campground",
    "https://www.fs.usda.gov/r05/lospadres/recreation/plaskett-creek-campground"
   ]
  },
  "fix": [
   {
    "path": "d.route.dayhikes",
    "was": "Pfeiffer Falls / Valley View loop · ~2.0 mi · 650 ft; Big Sur River gorge pools",
    "now": "Both are inside Pfeiffer Big Sur State Park, closed until further notice. Partington Cove (Julia Pfeiffer Burns) is open, and Andrew Molera is open on a limited basis with the old coast road and East Molera Trail closed."
   }
  ],
  "closedUntil": "2027-01-31",
  "closedNote": "No campground this trip relies on is open: Pfeiffer Big Sur State Park, Kirk Creek and Plaskett Creek are closed after the Timber and Plaskett Fires. Recheck in February."
 },
 "ventana": {
  "dogs": "yes",
  "dogNote": "The Forest Service rule on the Pine Ridge Trail is a leash no longer than 6 feet or other physical restraint, but the trail is closed to everyone, dogs included, through Jan 31, 2027.",
  "now": {
   "read": "Oct 4, 2026",
   "lines": [
    "Closed: Forest Order 05-07-51-26-11 closes the Pine Ridge Trail (with Pine Ridge and Divide camps), the Big Sur and Mt. Manuel trails and about 60 more Monterey District trails from Sept 26, 2026 to Jan 31, 2027, unless lifted sooner; violations carry fines up to $5,000. Sykes sits on the Pine Ridge Trail, so it is closed with it.",
    "The Timber Fire started Aug 8 about 4 miles southeast of Big Sur and burned portions of the Pine Ridge Trail; it was 88 percent contained on Oct 4 with repair work ongoing.",
    "Permits: the Los Padres does not issue wilderness or backcountry permits. A free California Campfire Permit is required to run a stove. Parking at Big Sur Station is $10 per vehicle per calendar day (one night costs $20), 55 spaces.",
    "Fire: Los Padres order 05-07-00-26-05 (June 4, 2026 to Jan 31, 2027) bans any fire, campfire or stove fire outside designated campfire sites, and none is on this route; campfire permit holders may use gas or pressurized liquid fuel stoves.",
    "Below the trailhead, Pfeiffer Big Sur State Park is closed until further notice, and State Parks has closed all backcountry trails east of Highway 1 indefinitely.",
    "Highway 1 is open Carmel to Cambria, with one-way signal control at Rocky Creek Bridge through Nov 30. Big Sur Station visitor center: daily 9am to 4pm, 831-667-2315.",
    "Fishing: the 2026 CDFW booklet (updated July 10, 2026) closes the Big Sur River to all fishing all year inside Pfeiffer Big Sur State Park, and above the gorge pool it opens only from the Saturday before Memorial Day through Sept 30 (zero trout, barbless artificial lures), so there is no legal winter fishing on this reach."
   ],
   "sources": [
    "https://www.fs.usda.gov/r05/lospadres/recreation/trails/pine-ridge-trail-3e06",
    "https://www.fs.usda.gov/r05/lospadres/alerts/monterey-ranger-district-emergency-closure-order-exceptions",
    "https://www.fs.usda.gov/sites/nfs/files/r05/lospadres/publication/alerts/Order%2005%2007%2051%2026%2011%20Monterey%20Ranger%20District%20Emergency%20Closure%20With%20Exceptions%2009252026signed.pdf",
    "https://www.fs.usda.gov/r05/lospadres/alerts/los-padres-fire-use-and-firearm-restrictions",
    "https://www.fs.usda.gov/r05/lospadres/conditions",
    "https://lpforest.org/timber-fire-closures-trail-work-ahead/",
    "https://www.fire.ca.gov/incidents/2026/8/8/timber-fire",
    "https://www.parks.ca.gov/?page_id=570"
   ]
  },
  "fix": [
   {
    "path": "d.permit.system",
    "was": "Ventana Wilderness (Los Padres NF): FREE self-issue permit; campfire permit for stoves.",
    "now": "The Los Padres does not issue wilderness or backcountry permits; a free California Campfire Permit is required to operate a stove."
   },
   {
    "path": "d.permit.notes",
    "was": "POST-FIRE TRAIL CONDITIONS VARY: the Pine Ridge/Sykes corridor has had long closures and reroutes. Confirm open status and water before you go. Ticks and poison oak are real here.",
    "now": "Closed this winter: Forest Order 05-07-51-26-11 closes the Pine Ridge Trail from Sept 26, 2026 to Jan 31, 2027 after the Timber and Plaskett Fires, and the Timber Fire burned portions of the trail. No fires outside designated sites through Jan 31, 2027. Ticks and poison oak are real here."
   }
  ],
  "closedUntil": "2027-01-31",
  "closedNote": "Closed this winter: the Pine Ridge Trail, the way to Sykes, is under a Forest Service fire closure through Jan 31, 2027."
 },
 "mendocino": {
  "dogs": "limited",
  "dogNote": "Russian Gulch allows dogs on a leash no longer than 6 feet in the campground, picnic area, beach, paved roads and Headlands Trail but not on the Fern Canyon Trail or any other trail; Van Damme allows them in the campground, on the beach and at Spring Ranch but not on the Fern Canyon, Old Logging Road or Pygmy Forest trails; at night dogs stay in a tent or vehicle.",
  "now": {
   "read": "Oct 4, 2026",
   "lines": [
    "Russian Gulch campground is closed for the winter: State Parks takes reservations only May through Labor Day. Day use stays open at $10 per vehicle.",
    "Base at Van Damme instead: open year-round on ReserveCalifornia (up to six months ahead) with a limited number of first-come sites. A temporary 10-foot single-lane bridge serves the sites east of Little River, and the hike-in environmental camps are closed for maintenance.",
    "Trails: a portion of the Russian Gulch Fern Canyon Trail is closed and the park does not say which, so the 36-foot waterfall may be cut off. Van Damme's Cabbage Patch trail is closed for budget reasons.",
    "Firewood: do not gather dead or downed wood in either park; buy it at the campground.",
    "Ocean: the red abalone sport fishery stays closed until April 1, 2036; check CDFW ocean rules before any rock fishing.",
    "Drive: Highway 128 had no restrictions in Mendocino County on Oct 4. Highway 1 has one-way control near Westport through Dec 31 and at a rock slide north of Point Arena, both off the 128 route."
   ],
   "sources": [
    "https://www.parks.ca.gov/?page_id=432",
    "https://www.parks.ca.gov/?page_id=433",
    "https://wildlife.ca.gov/News/Archive/california-fish-and-game-commission-extends-red-abalone-recreational-fishery-closure-finds-cesa-listing-of-bear-lake-buckwheat-warranted",
    "https://roads.dot.ca.gov/roadscell.php?roadnumber=128",
    "https://roads.dot.ca.gov/roadscell.php?roadnumber=1"
   ]
  }
 },
 "henrycoe": {
  "dogs": "no",
  "dogNote": "Dogs are allowed only at the Coe Ranch entrance, in its campground, on paved areas and on the half-mile Live Oak Trail; they are not allowed anywhere else in the park, so not on the China Hole route or at any backcountry camp.",
  "now": {
   "read": "Oct 4, 2026",
   "lines": [
    "Backpacking permits are first-come, first-served and cannot be reserved: register at the Coe Ranch entrance in Morgan Hill or at Hunting Hollow. Both entrances are open 365 days a year; the Dowdy Ranch entrance is seasonal and can close with rain.",
    "Fees: $5 per person per night plus $8 per vehicle per night at Coe Ranch ($6 at Hunting Hollow, cash or check only). Bring exact change; cards work when the Coe Ranch visitor center is open. Annual day-use passes do not cover overnight parking.",
    "Fire: wood or charcoal fires are never allowed in the backcountry; cook on a gas stove. Since June 12, 2026 wood and charcoal are also banned at the drive-in campground for the rest of fire season.",
    "Trail reports (Pine Ridge Association): China Hole Trail open with plenty of avoidable poison oak (Jul 11); Madrone Soda Springs open and clear (Mar 29); Mile Trail open (Jun 21); Manzanita Point Road and Poverty Flat Road open and clear (Sep 26); the Narrows clear from China Hole to Los Cruzeros (Jul 23).",
    "Water: creeks mostly stop flowing by summer, so the China Hole pools and creek water depend on the first real rains; check the coepark.net water map and purify everything.",
    "A car night first: Coe Ranch Campground drive-in sites are $20 a night on ReserveCalifornia, with potable water spigots and no showers."
   ],
   "sources": [
    "https://www.parks.ca.gov/?page_id=561",
    "https://coepark.net/planning-your-visit/trail-conditions/",
    "https://coepark.net/planning-your-visit/water-resources/"
   ]
  }
 },
 "pinnacles": {
  "dogs": "limited",
  "dogNote": "Leashed dogs (6 foot leash) are allowed only in the campground, picnic areas, parking lots and on paved roads; they are banned from every park trail, the shuttle and park buildings.",
  "now": {
   "read": "Oct 4, 2026",
   "lines": [
    "Camping: Pinnacles Campground on the east side is open year-round, by reservation only on Recreation.gov with no first-come sites. Tent and RV sites open six months ahead, group sites twelve.",
    "Fees: tent sites $44 a night through Mar 11, 2027, plus $12 on weekend nights, rising to $48 from Mar 12; RV electric $62. Entrance is $30 per vehicle for seven days, or the $55 annual pass.",
    "Caves on Oct 4: both sections of Bear Gulch Cave and Balconies Cave were open, the October full-cave window. From Nov 1 to the end of February only the lower Bear Gulch section may stay open, for the hibernating bats; the whole cave usually reopens the last week of March. Either cave can close after heavy rain.",
    "Fire: the park's last posted level (Jul 16) was Very High, with wood and charcoal fires banned and gas stoves allowed for cooking in designated areas. Campfires in the campground rings return only when conditions allow, so check before you pack wood.",
    "The campground pool runs Apr 1 to Oct 31, weather permitting, so it is closed for this trip.",
    "Cliffs and crags carry raptor advisories or closures January to July for nesting falcons; that matters for scrambling and climbing, not the main trails."
   ],
   "sources": [
    "https://www.nps.gov/pinn/planyourvisit/cavestatus.htm",
    "https://www.nps.gov/pinn/planyourvisit/pets.htm",
    "https://www.nps.gov/pinn/planyourvisit/conditions.htm",
    "https://www.nps.gov/pinn/planyourvisit/camp.htm",
    "https://www.nps.gov/pinn/planyourvisit/fees.htm",
    "https://www.recreation.gov/camping/campgrounds/234015"
   ]
  }
 },
 "carrizo": {
  "dogs": "yes",
  "dogNote": "Pets must be under control at all times and leashed or caged at developed sites (the visitor center, overlooks, trailheads and both campgrounds), and no pets are allowed in the Painted Rock exclusion zone.",
  "now": {
   "read": "Oct 4, 2026",
   "lines": [
    "Camping: Selby (13 sites) and KCL (12 sites) are first-come, first-served with no reservations; KCL charges no fee. Both have spigots that may not run and there is no garbage service, so bring all your water and pack out trash.",
    "Fire: BLM lists Bakersfield Field Office seasonal fire restrictions in effect as of Oct 4: no campfires or wood or charcoal barbecues, even in campground rings; pressurized gas stoves only with a California Campfire Permit. They stay until BLM lifts them, usually after the rains, so check before you go.",
    "Roads: every vehicle must be street legal and stay on roads. BLM's road note lists Soda Lake, Elkhorn, Simmler and Panorama Roads open and recommends high clearance in muddy areas; the dirt sections turn impassable after rain. Highways 58 and 166 had no restrictions on Oct 4.",
    "Painted Rock needs a Recreation.gov reservation (no admission fee, but a reservation fee); self-guided visits need the gate code it sends. It closes March 1 to July 15 except for BLM guided tours, so winter is self-guided season.",
    "The Goodwin Education Center opens Dec 1 to May 31, Thursday to Sunday, 9am to 4pm; its restrooms are open around the clock all year.",
    "Target shooting is banned monument-wide, and the land within a quarter mile of Sulphur Springs is closed to entry."
   ],
   "sources": [
    "https://www.blm.gov/visit/carrizo-plain-national-monument",
    "https://www.blm.gov/visit/kcl-campground",
    "https://www.blm.gov/visit/selby-campground",
    "https://www.blm.gov/visit/painted-rock",
    "https://www.blm.gov/nlcs_web/sites/ca/st/en/prog/nlcs/Carrizo_Plain_NM/recreation/camping.html",
    "https://www.blm.gov/programs/fire/regional-info/california/fire-restrictions",
    "https://roads.dot.ca.gov/roadscell.php?roadnumber=58",
    "https://roads.dot.ca.gov/roadscell.php?roadnumber=166"
   ]
  }
 },
 "alabamahills": {
  "dogs": "yes",
  "dogNote": "BLM land, so dogs may come on the roads, trails and signed designated campsites of the Alabama Hills and at Tuttle Creek; the camping agreement requires packing out dog waste, and the BLM pages state no leash rule, so keep the dog leashed around other camps.",
  "now": {
   "read": "Oct 4, 2026",
   "lines": [
    "Camping outside Tuttle Creek is allowed only at the signed designated sites (tent symbol), first come, and every camper needs the free Alabama Hills camping permit: fill it out online through Sierra Forever, or pick it up at the Eastern Sierra Visitor Center in Lone Pine or from a BLM ranger. The online agreement says it is valid through the end of the calendar year, so a trip that runs into January needs a fresh one.",
    "Designated-site stay limit is 14 days per calendar year (Recreation.gov adds no more than 7 days in any 28). Use the six porta potties (Mobius Arch trailhead, across from Shark Fin parking) or pack out solid waste and toilet paper in a wag bag or portable toilet; no new sites, no moving rocks.",
    "Tuttle Creek Campground (BLM): 83 sites, $12 a night, no reservations, open all year; potable water is seasonal and the dump station closes in winter, so arrive with water.",
    "Fire: BLM Bishop seasonal fire restrictions took effect June 22, 2026 until further notice, which allows campfires only in agency fire rings in developed campgrounds such as Tuttle Creek; that was still the latest BLM notice found on Oct 4. In past years they lifted Oct 10 (2023) and Nov 22 (2024); once lifted, fires are allowed only in existing rings at designated sites with a free California campfire permit, and never against the rock outcrops.",
    "Roads: Inyo County's Aug 11, 2026 report lists Whitney Portal Road open with falling rock in the road; Movie Road is maintained dirt fine for cars, while most spur roads are unpaved and the BLM map says most need 4WD.",
    "Winter drive from Pacifica with Tioga and Sonora shut: CA-99 or I-5 to Bakersfield, CA-58 over Tehachapi Pass to Mojave, CA-14 and US-395 north to Lone Pine, about 450 miles and 7 to 7.5 hours without stops; CA-178 over Walker Pass is a little shorter when dry. Storms can bring chain controls or closures on Tehachapi and Walker passes, so check Caltrans QuickMap.",
    "Fishing (2026 CDFW regulations, section 7.50(b)(104)): the Lower Owens wild trout water near Bishop, about 65 miles north of Lone Pine, stays open all winter. From Pleasant Valley Dam to the footbridge at the lower end of Pleasant Valley Campground it is 0 trout with barbless artificial lures only from Nov 16 to the Friday before the last Saturday in April; from that footbridge down to Five Bridges Road it is 0 trout, barbless artificials, all year. The rest of the Owens is open all year with a 5 trout limit."
   ],
   "sources": [
    "https://www.blm.gov/alabamahills",
    "https://www.blm.gov/site-page/programs-national-conservation-lands-california-alabama-hills-national-scenic-area",
    "https://sierraforever.org/alabama-hills-camping-agreement/",
    "https://www.recreation.gov/gateways/607",
    "https://www.recreation.gov/camping/campgrounds/10004620",
    "https://www.blm.gov/announcement/blm-announces-seasonal-fire-restrictions-eastern-sierra-0",
    "https://www.blm.gov/announcement/blm-bishop-field-office-eases-seasonal-fire-restrictions",
    "https://www.blm.gov/press-release/blm-bishop-field-office-eases-seasonal-fire-restrictions-effective-today"
   ]
  }
 },
 "deathvalley": {
  "dogs": "limited",
  "dogNote": "Leashed dogs (6 ft max, four per campsite) may go on paved and dirt roads, in campgrounds and parking lots, and no more than 50 feet from roads or developed areas; never on trails, in wilderness, or within 50 feet of the Saline Valley pools and springs.",
  "now": {
   "read": "Oct 4, 2026",
   "lines": [
    "Saline Valley: a fire on Sept 15, 2026 burned the Lower Springs area, which is closed to all entry by superintendent order. Camping around Palm Spring and between Lower Springs and Palm Spring reopened Sept 17. Park rules already close the Palm Spring and lower source pools to bathing, and the fire destroyed the volunteer host site and melted the pool piping, so confirm what is soakable before committing to the drive.",
    "Saline access: Inyo County's Aug 11, 2026 report lists both North and South Saline Valley Road open, and the county was grading North Pass for fire cleanup in September; Hunter Mountain Road is closed for mud. The springs sit about 40 miles from pavement, with no services, and the high passes can hold snow and ice in winter.",
    "Still closed from flood damage: Bonnie Clare Road and Scotty's Castle (no reopening date), Darwin Falls road (likely summer 2027), and Titus Canyon's one-way section (repairs through about May 2027); Titus's two-way western section from North Highway to Fall Canyon closes Oct 27 through December 2026. North Highway and southern Badwater Road carry loose-gravel and soft-shoulder cautions.",
    "Campgrounds: Furnace Creek is the only reservable one (Recreation.gov, Oct 15 to Apr 15, from 6 months to 2 days ahead, $30 dry site, check in at the kiosk). First come: Mesquite Spring $20, Texas Spring $20, Sunset $18, Stovepipe Wells $18; on Oct 4 the park still listed Texas Spring, Sunset, Stovepipe Wells and Emigrant closed for the season.",
    "Roadside backcountry camping needs a mandatory Recreation.gov permit ($10 a night, up to 6 months ahead) along Cottonwood and Marble canyons, Echo Canyon, Hole in the Wall and Greenwater Valley; elsewhere the permit is voluntary. Backcountry camps must be more than 1 mile from paved roads and developed areas and 100 feet from springs.",
    "Fees and fire: $30 per vehicle for 7 days. Wood fires only in NPS metal fire rings and grates or on a fire pan that keeps the fire off the ground; gathering any wood in the park is banned, so bring all firewood.",
    "Winter drive from Pacifica: CA-99 or I-5 to Bakersfield, CA-58 to Mojave, CA-14 and US-395 to Olancha, then CA-190 over Towne Pass to Stovepipe Wells, about 485 miles and 8 hours, about 8.5 to Furnace Creek. For Saline's North Pass, stay on US-395 to Big Pine (about 8 hours) before the long dirt road."
   ],
   "sources": [
    "https://www.nps.gov/deva/planyourvisit/conditions.htm",
    "https://www.nps.gov/deva/learn/news/fire_9-15-2026.htm",
    "https://www.nps.gov/deva/learn/news/saline-fire-9-18-2026.htm",
    "https://www.nps.gov/deva/learn/management/rules-and-regulations.htm",
    "https://www.nps.gov/deva/planyourvisit/pets.htm",
    "https://www.nps.gov/deva/planyourvisit/wilderness-permits.htm",
    "https://www.nps.gov/deva/learn/news/death-valley-national-park-to-launch-online-backcountry-permits-system-on-recreation-gov.htm",
    "https://www.nps.gov/deva/planyourvisit/developed-campgrounds.htm"
   ]
  },
  "fix": [
   {
    "path": "d.water.spots",
    "was": "Saline Valley Warm Springs",
    "now": "Saline Valley Warm Springs: Palm Spring area open; Lower Springs closed to all entry since Sept 16, 2026 after the fire"
   },
   {
    "path": "d.water.skinny",
    "was": "Saline's clothing-optional pools are the destination",
    "now": "Saline's pools were the destination, but the Lower Springs are closed after the Sept 15, 2026 fire and the host site is gone; confirm what is open before the drive"
   }
  ]
 },
 "dvbackpack": {
  "dogs": "no",
  "dogNote": "No dogs: the Cottonwood-Marble loop is trail and designated wilderness, where pets are banned; leashed dogs are allowed only on roads, in campgrounds, and within 50 feet of roads or developed areas.",
  "now": {
   "read": "Oct 4, 2026",
   "lines": [
    "A wilderness permit is mandatory for every overnight on the loop: Recreation.gov only, $10 per permit ($6 reservation plus $4 recreation fee), 1 to 12 people and no more than 4 vehicles, released 6 months before the start date, with same-day online permits until 11:59 pm. Recreation.gov says in-person permits are no longer issued for this route; Furnace Creek Visitor Center staff (8 am to 5 pm) can help you book.",
    "Roadside camping along Cottonwood and Marble Canyon roads also needs a mandatory Recreation.gov permit ($10 a night), and camping is banned on the first 8 miles of Cottonwood Canyon Road.",
    "Access: Cottonwood Canyon Road starts at Stovepipe Wells; NPS says high clearance to the canyon mouth and 4x4 beyond, with the trailhead 8 to 10 miles in. It was not on the park's road closure list on Oct 4, 2026. NPS gives the loop as 26 miles, longer with any road walk.",
    "Water: the only sources are seasonal springs in upper Cottonwood Canyon and Deadhorse Canyon, which NPS warns can be dry or contaminated; treat everything and carry a margin.",
    "Fire and fees: no campfires in the backcountry, stove only; $30 per vehicle for 7 days.",
    "Nearby closures that do not touch the loop: Titus Canyon (one-way section closed through about May 2027, western section Oct 27 through December 2026), Scotty's Castle and Bonnie Clare Road, and the Darwin Falls road.",
    "Winter drive from Pacifica: CA-99 or I-5 to Bakersfield, CA-58 to Mojave, CA-14 and US-395 to Olancha, then CA-190 over Towne Pass to Stovepipe Wells, about 485 miles and 8 hours, then the slow dirt of Cottonwood Canyon Road."
   ],
   "sources": [
    "https://www.nps.gov/deva/planyourvisit/wilderness-permits.htm",
    "https://www.recreation.gov/permits/4675343",
    "https://www.nps.gov/deva/planyourvisit/backpacking.htm",
    "https://www.nps.gov/deva/learn/news/death-valley-national-park-to-launch-online-backcountry-permits-system-on-recreation-gov.htm",
    "https://www.nps.gov/deva/learn/management/rules-and-regulations.htm",
    "https://www.nps.gov/deva/planyourvisit/pets.htm",
    "https://www.nps.gov/deva/planyourvisit/conditions.htm",
    "https://www.nps.gov/deva/learn/news/titus-canyon-closing-oct-2-2026.htm"
   ]
  },
  "fix": [
   {
    "path": "d.over[0]",
    "was": "It's a free-permit, no-quota route through some of the most profound silence and solitude in the park system.",
    "now": "It takes a mandatory $10 Recreation.gov wilderness permit, and it runs through some of the most profound silence and solitude in the park system."
   }
  ]
 },
 "anzaborrego": {
  "dogs": "limited",
  "dogNote": "Leashed dogs (6 ft max) may go in the campgrounds, on park roads open to vehicles, dirt roads included, and on the Visitor Center to campground trail; never on other trails, in the backcountry or in wildflower fields, and overnight they must be in your tent or vehicle.",
  "now": {
   "read": "Oct 4, 2026",
   "lines": [
    "Borrego Palm Canyon Trail is open sunrise to sunset ($10 day-use parking), but the first palm grove is closed for fire recovery and the trail now ends at a viewpoint above it, about 1.5 miles in.",
    "Campgrounds on ReserveCalifornia, bookable 6 months ahead with reservations taken Oct 1 to Apr 30: Borrego Palm Canyon (tent $35, full hookup $45) and Tamarisk Grove (tent $35, cabin $70, RVs to 21 ft; open Oct 1 to May 31). The primitive camps at Fish Creek, Bow Willow, Mountain Palm Springs and Sheep Canyon now list $20 a night.",
    "Open camping along designated dirt roads is still allowed: park no more than one car length off the road without disturbing natural features, 30 days per calendar year in the whole park; the park fee schedule lists no charge for it.",
    "Fire: no ground fires; campfires only in a camp stove or a metal container with a bottom and sides, and nothing natural may be removed, so bring firewood. During extreme heat or fire danger warnings, open fires are banned at Blair Valley, Culp Valley, all backcountry sites and day-use lots; the Colorado Desert District office (760-767-4037) has the current status.",
    "Dirt roads (park report dated Feb 5, 2026): Font's Point Wash is deep sand, hard even in 4x4 at the S-curves; Coyote Canyon is closed at the 3rd Crossing gate and Collins Valley is closed; most dirt roads want AWD or 4x4 and some need high clearance. Day-use parking at The Slot and Hellhole Canyon is $10.",
    "The Visitor Center is open daily Oct 1 to May 31; Coyote Canyon beyond Lower Willows, Tamarisk Grove and Vern Whitaker close every June 1 to Sept 30, so all are open for a winter trip.",
    "Winter drive from Pacifica: I-5 over the Grapevine, through the LA basin to I-15 at Temecula, then CA-79 and S-2 or S-22 into Borrego Springs, about 530 miles and 8.75 hours without traffic; storms can close the Grapevine (Tejon Pass)."
   ],
   "sources": [
    "https://www.parks.ca.gov/?page_id=638",
    "https://www.parks.ca.gov/?page_id=30308",
    "https://www.parks.ca.gov/?page_id=29292",
    "https://www.alltrails.com/trail/us/california/borrego-palm-canyon--5",
    "https://quickmap.dot.ca.gov/"
   ]
  }
 },
 "joshuatree": {
  "dogs": "limited",
  "dogNote": "Leashed dogs (6 ft max) may go in campgrounds and picnic areas, on paved and dirt roads, within 100 feet of roads, parking areas and campgrounds, and on the paved Oasis of Mara and Keys View trails; never on other trails or in the backcountry, even carried.",
  "now": {
   "read": "Oct 4, 2026",
   "lines": [
    "Reservation required all year on Recreation.gov, same day to 6 months ahead: Jumbo Rocks (124 sites, $30), Ryan (31, $30), Indian Cove (101, $35), Black Rock (99, $35), Cottonwood (62, $35). First come only: Hidden Valley (44 sites, $25), Belle and White Tank ($25, seasonal); claim a site, then pay at an entrance station within an hour.",
    "Water and flush toilets only at Black Rock and Cottonwood; Jumbo Rocks, Ryan, Hidden Valley, Indian Cove, Belle and White Tank are pit toilets and no water.",
    "Fire: the annual campfire ban ran June 15 to Oct 1, 2026, so this winter wood and charcoal fires are allowed only in campground fire grates; buy firewood near the park and burn it there. No fires in the backcountry.",
    "Entrance: $30 per vehicle for 7 days or $55 for the Joshua Tree annual pass; digital passes on Recreation.gov at no extra cost.",
    "Closures: the Oasis of Mara Trail is closed past the oasis after flood damage, and the west entrance and Park Boulevard have had short construction closures (Dec 3 to 5, 2025 and Jan 12 to 17, 2026); check the park's closure map before you go.",
    "Backcountry overnights need a $6 Recreation.gov permit; the Boy Scout Trail zone has only 14 designated sites.",
    "Winter drive from Pacifica: I-5 over the Grapevine through Los Angeles to I-10 and CA-62 (about 490 miles, 8 hours without traffic), or CA-58 over Tehachapi to Barstow and CA-247 to Yucca Valley (about 500 miles, 8.3 hours) to skip LA traffic; storms can close the Grapevine and Tehachapi."
   ],
   "sources": [
    "https://www.nps.gov/jotr/planyourvisit/campgrounds.htm",
    "https://www.recreation.gov/camping/campgrounds/272300",
    "https://www.nps.gov/jotr/planyourvisit/pets.htm",
    "https://www.nps.gov/jotr/planyourvisit/fees.htm",
    "https://www.nps.gov/jotr/planyourvisit/backpacking.htm",
    "https://www.nps.gov/jotr/planyourvisit/conditions.htm",
    "https://home.nps.gov/feeds/getnewsrss.htm?id=jotr",
    "https://www.nps.gov/jotr/learn/news/2026-01-08-west-entrance-closure.htm"
   ]
  }
 },
 "jtbackpack": {
  "dogs": "no",
  "dogNote": "No dogs: pets are banned on all Joshua Tree trails and in the backcountry, even carried; leashed dogs (6 ft max) are allowed only in campgrounds, picnic areas, on roads and within 100 feet of roads, parking areas and campgrounds.",
  "now": {
   "read": "Oct 4, 2026",
   "lines": [
    "A backcountry permit is required for every overnight: Recreation.gov (or 1-877-444-6777, or park headquarters in Twentynine Palms, 8 am to 4 pm daily), $6 per permit for 1 to 12 people, up to 6 months ahead, same day online until 11:59 pm. It replaced the old self-registration boards in 2023.",
    "The Boy Scout Trail zone is the only zone with designated camping: 14 sites, one party each, sized for 1 to 4, 5 to 8 or 9 to 12 people, and Recreation.gov calls it limited and likely competitive, so book cool-season weekends as soon as dates open.",
    "Limits: 3 consecutive nights per zone, 14 nights per season, and a park entrance pass ($30 per vehicle for 7 days) is required.",
    "No campfires anywhere in the backcountry; stoves only. No water on the route: NPS says carry at least a gallon per person per day.",
    "Trail: 7.8 miles (NPS) from the Boy Scout trailhead at about 4,000 ft down to Indian Cove at about 2,800 ft; AllTrails lists 8.0 miles point to point with about 230 ft of gain in that direction. No closure on the route was posted on Oct 4, 2026.",
    "The west entrance and Park Boulevard have had short construction closures (Dec 3 to 5, 2025 and Jan 12 to 17, 2026); check alerts and use the north entrance at Twentynine Palms if one hits your dates.",
    "Winter drive from Pacifica: I-5 over the Grapevine through Los Angeles to I-10 and CA-62 (about 490 miles, 8 hours without traffic), or CA-58 over Tehachapi to Barstow and CA-247 to Yucca Valley (about 500 miles, 8.3 hours) to skip LA traffic; storms can close the Grapevine and Tehachapi."
   ],
   "sources": [
    "https://www.nps.gov/jotr/planyourvisit/backpacking.htm",
    "https://www.recreation.gov/permits/4675329",
    "https://www.nps.gov/thingstodo/boy-scout-trail-zone-backpacking.htm",
    "https://www.nps.gov/jotr/planyourvisit/pets.htm",
    "https://www.nps.gov/jotr/planyourvisit/fees.htm",
    "https://www.nps.gov/jotr/planyourvisit/conditions.htm",
    "https://home.nps.gov/feeds/getnewsrss.htm?id=jotr",
    "https://www.nps.gov/jotr/learn/news/2026-01-08-west-entrance-closure.htm"
   ]
  }
 }
};
const _wget=(o,p)=>p.replace(/\[(\d+)\]/g,'.$1').split('.').reduce((x,k)=>x==null?x:x[k],o);
const _wset=(o,p,v)=>{ const ks=p.replace(/\[(\d+)\]/g,'.$1').split('.'); const last=ks.pop(); const tgt=ks.reduce((x,k)=>x==null?x:x[k],o); if(tgt!=null) tgt[last]=v; };
window.TRIPS.forEach(t=>{ const o=WINTER_NOW[t.id]; if(!o) return;
  t.dogs=o.dogs; t.dogNote=o.dogNote; t.d.now=o.now;
  if(o.closedUntil){ t.closedUntil=o.closedUntil; t.closedNote=o.closedNote; }
  (o.fix||[]).forEach(f=>{ const cur=_wget(t,f.path);
    if(Array.isArray(cur)){ const i=cur.findIndex(x=>typeof x==='string' && f.was && x.includes(f.was)); if(i>=0) cur[i]=f.now; else cur.push(f.now); }
    else if(typeof cur==='string' || cur==null){ _wset(t,f.path,f.now); } });
});
