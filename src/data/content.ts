import { sanitizeContentCard } from "../utils/publicCopy";

export const goalCards = [
  { slug: "digestive-traditions", title: "Digestive Traditions" },
  { slug: "evening-teas", title: "Evening Teas" },
  { slug: "seasonal-kitchen-ideas", title: "Seasonal Kitchen Ideas" },
  { slug: "warming-foods", title: "Warming Foods" },
  { slug: "beauty-foods", title: "Beauty Foods" },
  { slug: "balanced-pantry-habits", title: "Balanced Pantry Habits" },
];

const rawBasicsCards = [
  {
    slug: "what-is-traditional-herb-theory",
    title: "What Is Traditional Herb Theory?",
    text: "A kitchen reader's guide to warming, cooling, nature, flavor, movement, and pairing vocabulary in traditional herb writing.",
  },
  {
    slug: "what-does-qi-mean",
    title: "What Does Qi Mean?",
    text: "A kitchen reader's guide to qi—how it describes movement, warmth, direction, and flow in recipes and herb notes.",
  },
  {
    slug: "warming-vs-cooling-foods",
    title: "Warming vs Cooling Foods",
    text: "A plain-English guide to warming and cooling foods, with ingredient examples, cooking-method cues, and seasonal menu notes.",
  },
  {
    slug: "what-is-dampness",
    title: "What Is Dampness?",
    text: "A plain-English guide to Dampness in traditional food writing—heaviness, stickiness, and the aromatics and methods that balance it.",
  },
  {
    slug: "what-is-yin-and-yang",
    title: "What Is Yin and Yang?",
    text: "A kitchen reading of Yin and Yang as paired qualities—cool and warm, soft and crisp, still and lively—in traditional food writing.",
  },
  {
    slug: "what-does-blood-mean",
    title: "What Does Blood Mean in Traditional Herb Writing?",
    text: "A plain-English guide to \"blood\" (xue) as traditional kitchen language: nourishment, moisture, movement, and containment.",
  },
  {
    slug: "what-is-qi-stagnation",
    title: "What Is Qi Stagnation?",
    text: "A plain-English guide to \"qi stagnation\"—stuck flow, and the aromatic peels, mints, and preparations that express movement.",
  },
  {
    slug: "fresh-ginger-vs-dried-ginger",
    title: "Fresh Ginger vs Dried Ginger",
    text: "A kitchen comparison of fresh and dried ginger: flavor, aroma, heat, texture, and when each form works best.",
  },
  {
    slug: "what-are-the-five-flavors",
    title: "What Are the Five Flavors?",
    text: "A plain-English guide to the Five Flavors—pungent, sweet, sour, bitter, salty—as a cook's map for contrast and balance.",
  },
  {
    slug: "ginseng-vs-american-ginseng",
    title: "Asian Ginseng vs American Ginseng",
    text: "A cook's comparison of Asian ginseng (warm) and American ginseng (cool): flavor, forms, and kitchen uses.",
  },
  {
    slug: "goji-berry-vs-jujube",
    title: "Goji Berry vs Jujube",
    text: "A clear kitchen comparison of goji berries (wolfberries) and jujubes (red dates): flavor, texture, timing, and how each shapes soups, congee, and tea infusions.",
  },
  {
    slug: "what-does-clear-heat-mean",
    title: "What Does Clear Heat Mean?",
    text: "A plain-English guide to \"clear heat\" in traditional Chinese food writing: cooling, clarifying ingredients, flavor cues, and the techniques that express it.",
  },
  {
    slug: "what-does-tonify-mean",
    title: "What Does Tonify Mean?",
    text: "A kitchen-language guide to \"tonify\" (补, bǔ): how it signals building, replenishing dishes, the four tonify phrases, and the forms and textures they point to.",
  },
  {
    slug: "four-natures-of-food",
    title: "The Four Natures of Food",
    text: "A plain-English guide to the \"four natures\" (temperature) of food in Chinese food writing: cold, cool, neutral, warm, and hot—and how cooks use them.",
  },
  {
    slug: "what-does-moisten-dryness-mean",
    title: "What Does Moisten Dryness Mean?",
    text: "A plain-English guide to \"moisten dryness\" in traditional food writing: juicy, tender ingredients and soft, humid cooking to balance dry air and dry-heat techniques.",
  },
  {
    slug: "what-is-spleen-qi",
    title: "What Is Spleen Qi?",
    text: "A plain-English guide to \"Spleen Qi\" in traditional food writing: the transforming, distributing, and steadying \"engine\" behind everyday nourishment.",
  },
  {
    slug: "what-does-spleen-mean",
    title: "What Does Spleen Mean in Traditional Herb Writing?",
    text: "A plain-English guide to \"Spleen\" as kitchen language: the cook-and-carry rhythm of transforming meals, moving moisture, and the flavors and methods that support it.",
  },
  {
    slug: "what-does-liver-mean",
    title: "What Does Liver Mean in Traditional Herb Writing?",
    text: "A food-writing guide to \"Liver\" in traditional herb language: movement, smooth flow, stored blood, spring energy, and the moderating edge of sour flavor.",
  },
  {
    slug: "what-does-yin-deficiency-mean",
    title: "What Does Yin Deficiency Mean?",
    text: "A food-writing guide to \"Yin Deficiency\": the cooling, moistening, substantial side running low, and the moist, gentle cooking that replenishes it.",
  },
  {
    slug: "what-does-shen-mean",
    title: "What Does Shen Mean in Traditional Herb Writing?",
    text: "A plain-English guide to \"shen\" in traditional herb and tea writing: presence, composure, and the settled brightness framed by gentle ingredients and evening preparations.",
  },
  {
    slug: "what-does-jing-mean",
    title: "What Does Jing Mean in Traditional Herb Writing?",
        text: "A plain-English guide to jing (essence) in traditional herb writing: deep reserve, density, and the long, gentle cooking that evokes it.",
  },
  {
    slug: "what-does-channel-entry-mean",
    title: "What Does Channel Entry Mean?",
        text: "A plain-English guide to channel entry in traditional herb writing: a map label for pairing, flavor, and preparation logic—not a literal organ claim.",
  },
  {
    slug: "what-is-food-stagnation",
    title: "What Is Food Stagnation?",
        text: "A plain-English guide to food stagnation in traditional food writing: the post-meal, overfull feeling described with kitchen metaphors.",
  },
  {
    slug: "what-does-nourish-blood-mean",
    title: "What Does Nourish Blood Mean?",
        text: "A plain-English guide to nourish blood in traditional food writing: the soft, building, moistening style signaled by dark, gently simmered dishes.",
  },
  {
    slug: "what-is-damp-heat",
    title: "What Is Damp Heat?",
        text: "A plain-English guide to damp-heat (shi re): the compound flavor-and-weather idea of sticky heaviness plus active warmth.",
  },
  {
    slug: "chen-pi-vs-hawthorn-berry",
    title: "Chen Pi vs Hawthorn Berry",
        text: "A kitchen-focused comparison of chen pi (aged tangerine peel) and hawthorn berry—one lifts and perfumes, the other refreshes and rounds.",
  },
  {
    slug: "reishi-vs-cordyceps",
    title: "Reishi vs Cordyceps",
        text: "A cook's guide comparing reishi and cordyceps: one anchors with bitter backbone, the other lifts with delicate savory sweetness.",
  },
  {
    slug: "chen-pi-tea-recipe-faq",
    title: "Chen Pi Tea Recipe FAQ",
        text: "A question-led guide to making chen pi tea at home: ratios, simmer time, flavor map, and the optional ginger or hawthorn add-ins.",
  },
  {
    slug: "poria-vs-jobs-tears",
    title: "Poria vs Job's Tears",
        text: "A kitchen-side comparison of poria (fu ling) and job's tears (yi yi ren): fungus versus grain, and how each sits in a bowl.",
  },
  {
    slug: "chrysanthemum-vs-mint",
    title: "Chrysanthemum vs Mint",
        text: "How two cooling tea herbs differ: chrysanthemum reads floral and round; mint lands brisk and aromatic.",
  },
  {
    slug: "goji-berry-tea-vs-goji-berry-porridge",
    title: "Goji Berry Tea vs Goji Berry Porridge",
    text: "A kitchen-first comparison that helps readers understand how the same ingredient reads differently in a cup and in a bowl.",
  },
  {
    slug: "what-does-astringent-mean",
    title: "What Does Astringent Mean?",
    text: "A plain-English explanation of one of the most confusing traditional quality words on many herb pages.",
  },
  {
    slug: "what-does-harmonizing-mean",
    title: "What Does Harmonizing Mean?",
    text: "A plain-English guide to one of the most common but least explained role words on herb and formula pages.",
  },
  {
    slug: "mulberry-fruit-vs-goji-berry",
    title: "Mulberry Fruit vs Goji Berry",
    text: "A pantry-friendly comparison that helps readers separate two popular pantry berries in tea and gentle nourishment content.",
  },
  {
    slug: "chinese-pantry-starter-kit",
    title: "The Chinese Pantry Starter Kit",
    text: "A friendly, opinionated list of 10 traditional ingredients every curious cook should know.",
  },
  {
    slug: "simple-herbal-tea-routine",
    title: "How to Build a Simple Herbal Tea Routine",
    text: "Practical, seasonal, no-pressure guidance for people who want a traditional tea ritual, not a strict medical regimen.",
  },
  {
    slug: "what-is-blood-deficiency",
    title: "What Is Blood Deficiency?",
    text: "A comprehensive guide to the traditional concept of Blood Deficiency — what it means, signs, and practical ways to nourish Blood through diet and lifestyle.",
  },
  {
    slug: "what-is-phlegm",
    title: "What Is Phlegm in Traditional Wellness?",
    text: "A comprehensive guide to the traditional concept of Phlegm — the difference between visible and invisible Phlegm, signs of accumulation, and kitchen approaches to resolving it.",
  },
  {
    slug: "what-is-liver-qi-stagnation",
    title: "What Is Liver Qi Stagnation?",
    text: "A comprehensive guide to the traditional concept of Liver Qi Stagnation — how stress manifests physically, signs of stagnation, and traditional approaches to moving Liver Qi through diet and lifestyle.",
  },
  {
    slug: "what-is-kidney-essence",
    title: "What Is Kidney Essence (Jing)?",
    text: "A comprehensive guide to the traditional concept of Kidney Essence — the body's deepest constitutional reserve, the difference between pre-natal and post-natal Jing, and how to conserve it through diet and lifestyle.",
  },
  {
    slug: "what-is-lung-qi",
    title: "What Is Lung Qi?",
    text: "A comprehensive guide to the traditional concept of Lung Qi — the functional energy of the respiratory system, how the Lungs govern the body's defensive Wei Qi, and traditional approaches to supporting Lung Qi through diet and lifestyle.",
  },
  {
    slug: "what-is-heart-fire",
    title: "What Is Heart Fire?",
    text: "A comprehensive guide to the traditional concept of Heart Fire — how excess heat in the Heart system manifests physically and emotionally, signs to recognize, and traditional approaches to clearing Heart Fire through diet and lifestyle.",
  },
  {
    slug: "what-is-yang-deficiency",
    title: "What Is Yang Deficiency?",
    text: "A comprehensive guide to the traditional concept of Yang Deficiency — what Yang represents, signs of internal coldness and sluggishness, causes, and traditional approaches to warming Yang through diet and lifestyle.",
  },
  {
    slug: "what-is-blood-stasis",
    title: "What Is Blood Stasis?",
    text: "A comprehensive guide to the traditional concept of Blood Stasis — what Blood represents, how stasis differs from stagnation, signs of localized blood obstruction, causes, and traditional approaches to moving Blood through diet and lifestyle.",
  },
  {
    slug: "what-is-spleen-qi-deficiency",
    title: "What Is Spleen Qi Deficiency?",
    text: "A comprehensive guide to the traditional concept of Spleen Qi Deficiency — what the Spleen represents, signs of digestive sluggishness and fatigue, causes, and traditional approaches to tonifying Spleen Qi through diet and lifestyle.",
  },
  {
    slug: "what-is-heart-blood-deficiency",
    title: "What Is Heart Blood Deficiency?",
    text: "A comprehensive guide to the traditional concept of Heart Blood Deficiency — what Heart Blood represents, signs of sleep issues and restlessness, causes, and traditional approaches to nourishing Heart Blood through diet and lifestyle.",
  },
  {
    slug: "what-is-qi-deficiency",
    title: "What Is Qi Deficiency?",
    text: "A comprehensive guide to the traditional concept of Qi Deficiency — what Qi represents, signs of systemic depletion and profound fatigue, causes, and traditional approaches to tonifying Qi through diet and lifestyle.",
  },
  {
    slug: "what-is-wind-cold",
    title: "What Is Wind-Cold?",
    text: "A comprehensive guide to the traditional concept of Wind-Cold — what Wind represents, how it combines with Cold to cause acute respiratory challenges, signs, traditional approaches to dispersing Wind-Cold, and lifestyle and kitchen notes.",
  },
  {
    slug: "what-is-wind-heat",
    title: "What Is Wind-Heat?",
    text: "A comprehensive guide to the traditional concept of Wind-Heat — what Wind represents, how it combines with Heat to cause inflammation and sore throat, signs, traditional approaches to dispersing Wind-Heat, and cooling lifestyle and kitchen notes.",
  },
  {
    slug: "what-is-liver-blood-deficiency",
    title: "What Is Liver Blood Deficiency?",
    text: "A comprehensive guide to the traditional concept of Liver Blood Deficiency — what the Liver represents, how Blood Deficiency manifests in eyes, tendons, sleep, and women's health, signs, causes, traditional approaches, and lifestyle and kitchen notes.",
  },

  {
    slug: "what-is-stomach-yin-deficiency",
    title: "What Is Stomach Yin Deficiency?",
    text: "A comprehensive guide to the traditional concept of Stomach Yin Deficiency — what Stomach Yin represents, how its deficiency causes digestive dryness and Empty Heat, signs, causes, traditional approaches, and lifestyle and kitchen notes.",
  },
  {
    slug: "what-is-lung-yin-deficiency",
    title: "What Is Lung Yin Deficiency?",
    text: "A comprehensive guide to the traditional concept of Lung Yin Deficiency — what Lung Yin represents, how its deficiency causes respiratory dryness and dry cough, signs, causes, traditional approaches, and lifestyle and kitchen notes.",
  },


  {
    slug: "what-is-kidney-yang-deficiency",
    title: "What Is Kidney Yang Deficiency?",
    text: "A comprehensive guide to the traditional concept of Kidney Yang Deficiency — what Kidney Yang represents, how its deficiency causes systemic coldness and fluid issues, signs, causes, traditional approaches, and lifestyle and kitchen notes.",
  },

  {
    slug: "what-is-liver-qi-stagnation",
    title: "What Is Liver Qi Stagnation?",
    text: "A comprehensive guide to the traditional concept of Liver Qi Stagnation — what the Liver represents, how Qi stagnation causes physical tension, emotional stress, and digestive upset, signs, causes, traditional approaches, and lifestyle and kitchen notes.",
  },

  {
    slug: "what-is-heart-yin-deficiency",
    title: "What Is Heart Yin Deficiency?",
    text: "A comprehensive guide to the traditional concept of Heart Yin Deficiency — what Heart Yin represents, how its deficiency causes insomnia, anxiety, and Empty Heat, signs, causes, traditional approaches, and lifestyle and kitchen notes.",
  },

  {
    slug: "what-is-lung-qi-deficiency",
    title: "What Is Lung Qi Deficiency?",
    text: "A comprehensive guide to the traditional concept of Lung Qi Deficiency — what Lung Qi represents, how its deficiency causes respiratory weakness, weak immunity, and frequent colds, signs, causes, traditional approaches, and lifestyle and kitchen notes.",
  },

  {
    slug: "what-is-kidney-yin-deficiency",
    title: "What Is Kidney Yin Deficiency?",
    text: "A comprehensive guide to the traditional concept of Kidney Yin Deficiency — what Kidney Yin represents, how its deficiency causes dryness, night sweats, and Empty Heat, signs, causes, traditional approaches, and lifestyle and kitchen notes.",
  },

];

export const basicsCards = rawBasicsCards.map((card) => sanitizeContentCard(card));

export const classicsCards = [
  {
    slug: "huangdi-neijing",
    title: "Huangdi Neijing",
    text: "Why this foundational classic still shapes traditional herb language today.",
  },
  {
    slug: "bencao-gangmu",
    title: "Bencao Gangmu",
    text: "A beginner's entry point into China's great herbal encyclopedia.",
  },
  {
    slug: "shanghan-lun",
    title: "Shanghan Lun",
    text: "How classical formula thinking continues to influence traditional practice.",
  },
  {
    slug: "shen-nong-ben-cao-jing",
    title: "Shen Nong Ben Cao Jing",
    text: "An early classical herb text that helps readers understand where herb categories began.",
  },
  {
    slug: "jin-gui-yao-lue",
    title: "Jin Gui Yao Lue",
    text: "A key classic for formula thinking, practical patterns, and educational depth.",
  },
  {
    slug: "wen-bing-xue",
    title: "Wen Bing Xue",
    text: "A simple introduction to the warm-season tradition behind later heat-language.",
  },
];

const rawRecipeCards = [
  {
    slug: "a-simple-warming-soup-guide-for-cold-weather",
    title: "A Simple Warming Soup Guide for Cold Weather",
    text: "A gentle introduction to seasonal kitchen traditions built around warming ingredients.",
  },
  {
    slug: "jujube-and-ginger-tea-for-busy-weeks",
    title: "Jujube and Ginger Tea for Busy Weeks",
    text: "A short, practical jujube tea article built around Chinese red dates and fresh ginger.",
  },
  {
    slug: "pear-and-lily-bulb-soup-for-dry-days",
    title: "Pear and Lily Bulb Soup for Dry Days",
    text: "A gentle seasonal kitchen article built around an easy dryness-related pairing.",
  },
  {
    slug: "black-sesame-breakfast-ideas-for-beginners",
    title: "Black Sesame Breakfast Ideas for Beginners",
    text: "A pantry-friendly article that turns black sesame into an everyday-use kitchen guide.",
  },
  {
    slug: "chrysanthemum-and-mint-cooling-tea-basics",
    title: "Chrysanthemum and Mint Tea",
    text: "A bright, cooling two-ingredient tea pairing chrysanthemum flower with peppermint to soothe tired eyes and clear the head on hot days.",
  },
  {
    slug: "chrysanthemum-tea-basics",
    title: "Chrysanthemum Tea Basics",
    text: "A simple floral tea page that gives readers a direct chrysanthemum tea entry point with clear steeping steps.",
  },
  {
    slug: "goji-berry-porridge-for-gentle-mornings",
    title: "Goji Berry Porridge for Gentle Mornings",
    text: "A soft breakfast-style page built around one of the easiest pantry herbs for beginners.",
  },
  {
    slug: "5-easy-traditional-kitchen-ingredients-for-beginners",
    title: "5 Easy Traditional Kitchen Ingredients for Beginners",
    text: "Five easy-to-find pantry ingredients — ginger, jujube, goji, chrysanthemum, and black sesame — with a simple brewed cup method.",
  },
  {
    slug: "lotus-seed-and-longan-sweet-soup-basics",
    title: "Lotus Seed and Longan Sweet Soup Basics",
    text: "A gentle sweet-soup article that connects lotus seed and dried longan through one classic pantry bowl.",
  },
  {
    slug: "chen-pi-tea-for-heavy-meal-days",
    title: "Chen Pi Tea for Heavy Meal Days",
    text: "A pantry-style aged tangerine peel tea with steeping and simmering options, optional ginger or hawthorn, and storage notes.",
  },
  {
    slug: "hawthorn-berry-tea-for-rich-meals",
    title: "Hawthorn Berry Tea for Rich Meals",
    text: "A tart dried hawthorn berry tea for after richer meals, with optional chen pi or ginger, iced prep, and safety notes.",
  },
  {
    slug: "black-sesame-and-jujube-breakfast-bowl",
    title: "Black Sesame and Jujube Breakfast Bowl",
    text: "A toasted black sesame and jujube breakfast bowl over oats or congee, with texture, sweetness, and allergy notes.",
  },
  {
    slug: "jobs-tears-porridge-for-heavy-days",
    title: "Job's Tears Porridge for Heavy Days",
    text: "A stovetop or pressure-cooker job's tears porridge with soak and water-ratio tips plus sweet and savory finishes.",
  },
  {
    slug: "pear-and-chrysanthemum-tea-for-warm-afternoons",
    title: "Pear and Chrysanthemum Tea for Warm Afternoons",
    text: "A light pear and chrysanthemum tea with a stovetop method and cold-brew option, plus serving and storage notes.",
  },
  {
    slug: "mulberry-and-goji-tea-basics",
    title: "Mulberry and Goji Tea Basics",
    text: "A pantry mulberry and goji tea with a gentle steep or stronger simmer, plus iced and concentrate options.",
  },
  {
    slug: "goji-and-chrysanthemum-tea-basics",
    title: "Goji and Chrysanthemum Tea for Eye Health",
    text: "A classic East Asian tea pairing — Goji Berry and Chrysanthemum for eye support, backed by zeaxanthin, lutein, and anti-inflammatory flavonoids.",
  },
  {
    slug: "jujube-and-lotus-seed-congee-for-quiet-evenings",
    title: "Jujube and Lotus Seed Congee for Quiet Evenings",
    text: "A soft pantry congee page that deepens jujube and lotus seed reading with a very approachable rice bowl.",
  },
  {
    slug: "tremella-and-pear-sweet-soup-basics",
    title: "Tremella and Pear Sweet Soup Basics",
    text: "A soft tremella and snow pear sweet soup with rehydration notes, a low simmer, and optional jujube and goji.",
  },
  {
    slug: "adzuki-bean-and-jobs-tears-soup-basics",
    title: "Red Bean and Job's Tears Soup",
    text: "A classic two-ingredient damp-clearing soup pairing adzuki bean with Job's Tears — simple, nourishing, and gentle on digestion.",
  },
  {
    slug: "chinese-yam-and-carrot-soup-basics",
    title: "Chinese Yam and Carrot Soup Basics",
    text: "A mild Chinese yam and carrot soup with a low simmer, ginger, and simple finishing and storage notes.",
  },
  {
    slug: "perilla-and-ginger-soup-for-cool-days",
    title: "Perilla and Ginger Soup for Cool Days",
    text: "A fragrant perilla leaf and ginger soup with fresh leaves added at the end and a clear, light broth.",
  },
  {
    slug: "tremella-and-lotus-seed-sweet-soup-basics",
    title: "Tremella and Lotus Seed Sweet Soup Basics",
    text: "A tremella and lotus seed sweet soup with rehydration and trimming steps, texture cues, and storage notes.",
  },
  {
    slug: "schisandra-and-jujube-tea-basics",
    title: "Schisandra and Jujube Tea Basics",
    text: "A simple schisandra and jujube tea balancing tart, resinous berries with mellow red dates, plus cold-steep and concentrate options.",
  },
  {
    slug: "monk-fruit-and-pear-tea-basics",
    title: "Monk Fruit and Pear Tea Basics",
    text: "A quietly sweet whole monk fruit and pear tea with a short simmer and pear added late for texture.",
  },
  {
    slug: "walnut-and-black-sesame-paste-basics",
    title: "Walnut and Black Sesame Paste Basics",
    text: "A toasted walnut and black sesame paste with a gentle thickening slurry for a smooth, spoonable breakfast bowl.",
  },
  {
    slug: "barley-sprout-and-chen-pi-tea-basics",
    title: "Barley Sprout and Chen Pi Tea Basics",
    text: "A toasty barley sprout and chen pi tea with bright citrus aroma and a short simmer for a low-acidity cup.",
  },
  {
    slug: "chinese-yam-and-jujube-porridge-basics",
    title: "Chinese Yam and Jujube Porridge Basics",
    text: "A gentle Chinese yam and jujube porridge with rice or oats, a silky texture, and simple serving and storage notes.",
  },
  {
    slug: "tangerine-peel-and-pear-warm-tea-basics",
    title: "Tangerine Peel and Pear Warm Tea Basics",
    text: "A light tangerine (chen pi) peel and pear warm tea with citrus perfume and a short, low simmer.",
  },
  {
    slug: "osmanthus-and-pear-tea-basics",
    title: "Osmanthus and Pear Tea",
    text: "A fragrant autumn tea pairing sweet osmanthus flower with moistening pear to gently soothe dry throats.",
  },
  {
    slug: "jasmine-and-pear-tea-basics",
    title: "Jasmine and Pear Tea Basics",
    text: "A fragrant jasmine and pear tea with a late jasmine steep to keep the floral aroma bright.",
  },
  {
    slug: "rose-bud-and-mulberry-leaf-tea-basics",
    title: "Rose Bud and Mulberry Leaf Tea Basics",
    text: "A light rose bud and mulberry leaf tea with floral perfume over a clean, green base and a gentle steep.",
  },
  {
    slug: "lotus-leaf-and-burdock-root-tea-basics",
    title: "Lotus Leaf and Burdock Root Tea Basics",
    text: "An earthy lotus leaf and burdock root tea with a steep or gentle simmer and pantry-friendly notes.",
  },
  {
    slug: "cassia-seed-and-corn-silk-tea-basics",
    title: "Cassia Seed and Corn Silk Tea",
    text: "A classic two-ingredient summer tea pairing roasted cassia seed with corn silk to gently support the eyes, liver, and kidneys.",
  },
  {
    slug: "lotus-root-soup-basics",
    title: "Lotus Root and Pork Rib Soup",
    text: "A deeply nourishing Cantonese classic pairing lotus root with pork ribs, red dates, and ginger for a warming autumn broth.",
  },
  {
    slug: "astragalus-and-jujube-chicken-broth",
    title: "Astragalus and Jujube Chicken Broth",
    text: "A comforting astragalus and jujube chicken broth with a slow simmer, clear-stock tips, and food-safety guidance.",
  },
  {
    slug: "poria-and-coix-seed-congee",
    title: "Poria and Coix Seed Congee",
    text: "A quietly mild poria and coix seed rice congee with a single-pot method, texture checkpoints, and storage notes.",
  },
  {
    slug: "ginger-and-brown-sugar-tea-for-cold-days",
    title: "Ginger and Brown Sugar Tea for Cold Days",
    text: "A classic traditional remedy for dispelling cold — fresh ginger paired with unrefined brown sugar for winter chills.",
  },
  {
    slug: "mung-bean-soup-for-summer-heat",
    title: "Mung Bean Soup for Summer Heat",
    text: "The quintessential summer beverage in East Asian traditions — a cooling mung bean soup for hot weather.",
  },
  {
    slug: "black-sesame-walnut-porridge-for-healthy-aging",
    title: "Black Sesame and Walnut Porridge for Healthy Aging",
    text: "A classic traditional recipe — black sesame seed and walnut combined in a warming porridge for sustained energy and healthy aging support.",
  },
  {
    slug: "chestnut-chicken-soup-for-stamina",
    title: "Chestnut and Chicken Soup for Stamina",
    text: "A classic autumn and winter comfort soup — chestnut and chicken paired for building energy and warming the body, with clear steps and traditional kitchen context.",
  },
  {
    slug: "white-wood-ear-and-pear-soup-for-autumn-dryness",
    title: "White Wood Ear and Pear Soup for Autumn Dryness",
    text: "A gentle, deeply hydrating dessert soup for autumn — White Wood Ear mushroom and Asian Pear combine to nourish Yin and moisten the Lungs.",
  },
  {
    slug: "four-gentlemen-soup-si-jun-zi-tang",
    title: "Four Gentlemen Soup (Si Jun Zi Tang)",
    text: "The most famous and foundational recipe in traditional Chinese wellness — a harmonious blend of four gentle herbs for tonifying Qi and supporting the digestive system.",
  },
  {
    slug: "longan-and-red-date-tea-for-restful-sleep",
    title: "Longan and Red Date Tea for Restful Sleep",
    text: "A beloved, naturally sweet infusion used throughout East Asia — Longan and Red Date pair as the ultimate remedy for Heart Blood Deficiency, calming a restless mind and encouraging deep sleep.",
  },
  {
    slug: "ginger-brown-sugar-tea-for-cold-relief",
    title: "Ginger and Brown Sugar Tea for Cold Relief",
    text: "The immediate traditional response for cold and chills — fresh ginger and brown sugar promote a light sweat to push out Wind-Cold before it settles deeper into the body.",
  },
];

export const recipeCards = rawRecipeCards.map((card) => sanitizeContentCard(card));

