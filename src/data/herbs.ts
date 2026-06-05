export type Herb = {
  slug: string;
  name: string;
  pinyin: string;
  chinese: string;
  latin: string;
  partUsed: string;
  category: string;
  summary: string;
  whatItIs: string;
  nature: string;
  flavor: string;
  channels: string;
  traditionalUses: string[];
  foodUses: string[];
  caution: string;
  tags: string[];
};

export type HerbDisplayNames = {
  primary: string;
  secondary: string[];
  searchText: string;
};

export const herbs: Herb[] = [
  {
    slug: "goji-berry",
    name: "Goji Berry",
    pinyin: "Gou Qi Zi",
        chinese: "Gou Qi Zi",
    latin: "Lycii Fructus",
    partUsed: "Fruit",
    category: "Nourishing herbs",
    summary: "A well-known berry often used in teas, soups, porridge, and simple everyday kitchen recipes.",
    whatItIs:
      "Goji berry is one of the easiest Chinese herbs for English-speaking readers to recognize because it already appears in snack mixes, teas, and modern grocery products.",
    nature: "Neutral to slightly warming",
    flavor: "Sweet",
    channels: "Liver, Kidney",
    traditionalUses: [
      "Traditionally used in TCM to nourish liver and kidney systems.",
      "Often discussed in TCM for traditional eye-related language and gentle daily use.",
      "Commonly framed as a food-grade tonic rather than an intimidating medicinal.",
    ],
    foodUses: ["Tea", "Broth", "Congee"],
    caution:
      "Readers taking medication, especially blood-thinning medication, should check with a qualified clinician before using goji regularly.",
    tags: ["beginner", "berry", "tea", "food traditions", "daily cooking"],
  },
  {
    slug: "astragalus-root",
    name: "Astragalus Root",
    pinyin: "Huang Qi",
        chinese: "Huang Qi",
    latin: "Astragali Radix",
    partUsed: "Root",
    category: "Qi-supporting herbs",
    summary: "A foundational soup herb traditionally used in TCM writing about qi and seasonal routines.",
    whatItIs:
      "Astragalus root is a classic kitchen-to-library bridge herb. In English-language content it often shows up in broths, tonic soups, and seasonal kitchen articles.",
    nature: "Slightly warming",
    flavor: "Sweet",
    channels: "Lung, Spleen",
    traditionalUses: [
      "Traditionally used in TCM discussions of qi, often described in English as functional vitality.",
      "Frequently used in long-simmered soups and broth-focused food traditions.",
      "Often associated with defensive qi and seasonal context in TCM writing.",
    ],
    foodUses: ["Soup", "Broth", "Decoction"],
    caution:
      "Not every tonic herb is appropriate for every pattern. Readers with complex health situations should avoid making personal decisions from one article.",
    tags: ["root", "soup", "qi", "seasonal kitchen", "popular"],
  },
  {
    slug: "fresh-ginger",
    name: "Fresh Ginger",
    pinyin: "Sheng Jiang",
        chinese: "Sheng Jiang",
    latin: "Zingiberis Rhizoma Recens",
    partUsed: "Fresh rhizome",
    category: "Kitchen herbs",
    summary: "A familiar kitchen ingredient that gives TCM food traditions an easy and practical entry point.",
    whatItIs:
      "Fresh ginger is one of the most useful bridge ingredients for this site because readers already know it from cooking, tea, and home routines.",
    nature: "Warm",
    flavor: "Pungent",
    channels: "Lung, Spleen, Stomach",
    traditionalUses: [
      "Traditionally used to warm the middle and explain digestive language in TCM.",
      "Often used in simple teas and soups for cold-weather cooking.",
      "Commonly included in beginner-friendly food tradition articles.",
    ],
    foodUses: ["Tea", "Soup", "Stir-fry"],
    caution:
      "Even familiar food herbs can be irritating in excess. Readers with special medical needs should still use caution.",
    tags: ["kitchen", "warming", "tea", "beginner", "digestive traditions"],
  },
  {
    slug: "jujube-red-date",
    name: "Jujube",
    pinyin: "Da Zao",
        chinese: "Da Zao",
    latin: "Jujubae Fructus",
    partUsed: "Fruit",
    category: "Nourishing herbs",
    summary: "Sweet red dates that make Chinese food traditions feel warm, familiar, and approachable.",
    whatItIs:
      "Jujube, often called red date in Chinese cooking, appears in teas, broths, sweet soups, and many everyday kitchen recipes.",
    nature: "Warm",
    flavor: "Sweet",
    channels: "Spleen, Stomach",
    traditionalUses: [
      "Traditionally used to support digestive strength and gentle nourishment.",
      "Often paired with ginger, goji, or other kitchen-friendly herbs.",
      "A strong candidate for practical TCM recipe content.",
    ],
    foodUses: ["Tea", "Soup", "Dessert soup"],
    caution:
      "Sweet tonic foods may not suit every reader's dietary needs. Articles should avoid blanket recommendations.",
    tags: ["red date", "tea", "soup", "gentle nourishment", "popular"],
  },
  {
    slug: "chrysanthemum-flower",
    name: "Chrysanthemum",
    pinyin: "Ju Hua",
        chinese: "Ju Hua",
    latin: "Chrysanthemi Flos",
    partUsed: "Flower",
    category: "Tea herbs",
    summary: "A floral tea herb known for its cooling place in traditional kitchen use.",
    whatItIs:
      "Chrysanthemum tea is one of the easiest TCM beverage concepts to explain to U.S. readers because it is light, visual, and already recognizable in Asian grocery culture.",
    nature: "Cool",
    flavor: "Sweet, bitter",
    channels: "Liver, Lung",
    traditionalUses: [
      "Traditionally used in TCM discussions of clear heat and warm or irritated states.",
      "Often discussed for head and eye-related language in traditional theory.",
      "A frequent entry point for cooling-food conversations.",
    ],
    foodUses: ["Tea", "Iced tea", "Floral blends"],
    caution:
      "Cooling herbs are not automatically appropriate for everyone. Articles should explain context rather than promote constant use.",
    tags: ["tea", "cooling", "flower", "summer", "beginner"],
  },
  {
    slug: "hawthorn-berry",
    name: "Hawthorn Berry",
    pinyin: "Shan Zha",
        chinese: "Shan Zha",
    latin: "Crataegi Fructus",
    partUsed: "Fruit",
    category: "Digestive herbs",
    summary: "A tart fruit traditionally associated with food stagnation and digestive heaviness in TCM.",
    whatItIs:
      "Hawthorn is useful for SEO and education because it overlaps with Western herbal familiarity while still having a distinct place in Chinese food traditions.",
    nature: "Slightly warm",
    flavor: "Sour, sweet",
    channels: "Spleen, Stomach, Liver",
    traditionalUses: [
      "Traditionally used in TCM when heavy foods feel difficult to process.",
      "Often discussed in relation to meat-heavy meals and digestive stagnation.",
      "Works well in comparison articles and food-centered explainers.",
    ],
    foodUses: ["Tea", "Fruit snacks", "Digestive drink"],
    caution:
      "Digestive concerns can have many causes. Articles should not imply hawthorn is a substitute for evaluation of ongoing issues.",
    tags: ["digestive", "fruit", "tea", "seo", "food stagnation"],
  },
  {
    slug: "chen-pi",
    name: "Chen Pi",
    pinyin: "Chen Pi",
        chinese: "Chen Pi",
    latin: "Citri Reticulatae Pericarpium",
    partUsed: "Aged citrus peel",
    category: "Digestive herbs",
    summary: "Aged tangerine peel with a familiar citrus story and strong kitchen appeal.",
    whatItIs:
      "Chen pi is one of the best herbs for storytelling because it turns a familiar ingredient, citrus peel, into a traditional pantry concept with deep culinary value.",
    nature: "Warm",
    flavor: "Pungent, bitter",
    channels: "Lung, Spleen",
    traditionalUses: [
      "Traditionally used to help regulate qi in digestive and phlegm-related discussions.",
      "Often introduced through tea and broth applications.",
      "Helps readers see how TCM pantry knowledge overlaps with cooking wisdom.",
    ],
    foodUses: ["Tea", "Broth", "Dessert"],
    caution:
      "Readers should understand the difference between culinary use and concentrated medicinal use.",
    tags: ["citrus", "digestive", "tea", "pantry", "kitchen-friendly"],
  },
  {
    slug: "poria",
    name: "Poria",
    pinyin: "Fu Ling",
        chinese: "Fu Ling",
    latin: "Poria",
    partUsed: "Fungal body",
    category: "Dampness-related herbs",
    summary: "A classic TCM ingredient often used in conversations about dampness, fluid balance, and traditional context.",
    whatItIs:
      "Poria appears often in Chinese herbal education but is less familiar to mainstream U.S. readers, which makes it valuable for building authority once the site has a beginner base.",
    nature: "Neutral",
    flavor: "Sweet, bland",
    channels: "Heart, Spleen, Kidney, Lung",
    traditionalUses: [
      "Traditionally used in TCM discussions of dampness and fluid regulation.",
      "Often included in formulas and some food tradition recipes.",
      "Useful for explaining how TCM pattern language differs from modern diagnostic labels.",
    ],
    foodUses: ["Soup", "Porridge", "Powder blends"],
    caution:
      "Because this herb is less familiar in mainstream food use, articles should be especially careful about sourcing and context.",
    tags: ["dampness", "soup", "authority", "neutral", "tcm basics"],
  },
  {
    slug: "longan-fruit",
    name: "Longan Fruit",
    pinyin: "Long Yan Rou",
        chinese: "Long Yan Rou",
    latin: "Longan Arillus",
    partUsed: "Fruit aril",
    category: "Nourishing herbs",
    summary: "A sweet dried fruit often used in traditional dessert soups and gentle restorative recipes.",
    whatItIs:
      "Longan fruit helps the site expand beyond the most common herbs while staying within approachable food-oriented content.",
    nature: "Warm",
    flavor: "Sweet",
    channels: "Heart, Spleen",
    traditionalUses: [
      "Traditionally used for gentle nourishment and calming context in TCM language.",
      "Often appears in sweet soups and tonifying kitchen recipes.",
      "Pairs well with jujube and lotus seed content.",
    ],
    foodUses: ["Dessert soup", "Tea", "Congee"],
    caution:
      "Sweet tonic foods are not a universal fit. Content should stay descriptive and not prescriptive.",
    tags: ["sweet soup", "nourishing", "fruit", "gentle", "recipe-friendly"],
  },
  {
    slug: "lily-bulb",
    name: "Lily Bulb",
    pinyin: "Bai He",
            chinese: "Bai He",
    latin: "Lilii Bulbus",
    partUsed: "Bulb",
    category: "Food therapy herbs",
    summary: "A soft food-tradition ingredient that works especially well in gentle dessert and soup content.",
    whatItIs:
      "Lily bulb is especially useful for kitchen pages because it feels more like an ingredient than a supplement and helps the site keep a warm editorial tone.",
    nature: "Slightly cold",
    flavor: "Sweet",
    channels: "Heart, Lung",
    traditionalUses: [
      "Traditionally used in TCM to moisten and gently calm.",
      "Often discussed in soothing soups and dessert-style food traditions.",
      "Works well in seasonal dryness content.",
    ],
    foodUses: ["Sweet soup", "Pear soup", "Congee"],
    caution:
      "Use careful language around emotional or sleep-related topics and avoid medical promises.",
    tags: ["dessert soup", "gentle", "dryness", "recipe", "food traditions"],
  },
  {
    slug: "ginseng",
    name: "Ginseng",
    pinyin: "Ren Shen",
            chinese: "Ren Shen",
    latin: "Ginseng Radix et Rhizoma",
    partUsed: "Root",
    category: "Qi-supporting herbs",
    summary: "A famous tonic root that needs careful explanation because recognition is high but assumptions are often vague.",
    whatItIs:
      "Ginseng is widely known in English-speaking popular culture, which makes it important for search visibility, but it also requires careful framing to avoid hype.",
    nature: "Slightly warm",
    flavor: "Sweet, slightly bitter",
    channels: "Lung, Spleen, Heart",
    traditionalUses: [
      "Traditionally used in TCM theory for strong qi-focused discussion.",
      "Often used as a benchmark herb when discussing tonic categories.",
      "Useful for explaining why famous herbs still need context.",
    ],
    foodUses: ["Soup", "Tea", "Tonic preparations"],
    caution:
      "This is not a casual herb for everyone. The site should emphasize context, sourcing, and professional guidance.",
    tags: ["famous", "root", "qi", "seo", "high-interest"],
  },
  {
    slug: "american-ginseng",
    name: "American Ginseng",
    pinyin: "Xi Yang Shen",
            chinese: "Xi Yang Shen",
    latin: "Panacis Quinquefolii Radix",
    partUsed: "Root",
    category: "Qi-supporting herbs",
    summary: "An important comparison herb that helps readers understand why TCM does not describe all ginseng as the same.",
    whatItIs:
      "American ginseng is valuable editorially because it helps explain the difference between names readers assume are interchangeable.",
    nature: "Cool",
    flavor: "Sweet, slightly bitter",
    channels: "Heart, Lung, Kidney",
    traditionalUses: [
      "Traditionally used in TCM theory for qi-related discussion while also nourishing fluids.",
      "Useful in comparison content against Ren Shen.",
      "Supports more nuanced educational writing.",
    ],
    foodUses: ["Tea", "Soup", "Tonic slices"],
    caution:
      "Readers should avoid assuming that more famous or more expensive always means more suitable.",
    tags: ["comparison", "ginseng", "cooling", "authority", "seo"],
  },
  {
    slug: "codonopsis",
    name: "Codonopsis",
    pinyin: "Dang Shen",
            chinese: "Dang Shen",
    latin: "Codonopsis Radix",
    partUsed: "Root",
    category: "Qi-supporting herbs",
    summary: "A practical tonic root that often appears in soups and everyday-style TCM cooking content.",
    whatItIs:
      "Codonopsis is useful for a practical site because it supports qi-focused content without relying only on famous premium herbs like ginseng.",
    nature: "Neutral",
    flavor: "Sweet",
    channels: "Lung, Spleen",
    traditionalUses: [
      "Traditionally used in TCM for a gentler everyday qi-related context.",
      "Common in home-style soups and kitchen medicine content.",
      "Helps widen the site's pantry-like approach.",
    ],
    foodUses: ["Soup", "Broth", "Stew"],
    caution:
      "Articles should avoid implying that all tonic herbs are suitable for general fatigue without context.",
    tags: ["soup", "qi", "gentle", "everyday", "root"],
  },
  {
    slug: "licorice-root",
    name: "Licorice Root",
    pinyin: "Gan Cao",
            chinese: "Gan Cao",
    latin: "Glycyrrhizae Radix et Rhizoma",
    partUsed: "Root",
    category: "Harmonizing herbs",
    summary: "A famous harmonizing herb that appears in both Chinese and Western herb conversations.",
    whatItIs:
      "Licorice root is valuable because it is familiar in English-speaking herb culture and also central to many TCM formula discussions.",
    nature: "Neutral",
    flavor: "Sweet",
    channels: "Heart, Lung, Spleen, Stomach",
    traditionalUses: [
      "Traditionally used to harmonize formulas and explain digestive or respiratory language in TCM theory.",
      "Frequently discussed as a formula-balancing herb.",
      "Useful for teaching why one herb can have several roles in TCM.",
    ],
    foodUses: ["Tea", "Formula support", "Broth"],
    caution:
      "Licorice has real safety considerations for some readers. This page should include extra caution language.",
    tags: ["familiar", "formula", "sweet", "root", "searchable"],
  },
  {
    slug: "schisandra-berry",
    name: "Schisandra Berry",
    pinyin: "Wu Wei Zi",
            chinese: "Wu Wei Zi",
    latin: "Schisandrae Chinensis Fructus",
    partUsed: "Fruit",
    category: "Astringent herbs",
    summary: "A well-known five-flavor berry that stands out in both TCM and modern lifestyle writing.",
    whatItIs:
      "Schisandra has strong storytelling value because its 'five flavor' identity is memorable and distinctive in English content.",
    nature: "Warm",
    flavor: "Sour, sweet, salty, bitter, pungent",
    channels: "Heart, Lung, Kidney",
    traditionalUses: [
      "Traditionally used in TCM to astringe and in discussions of lung and kidney-related patterns.",
      "Frequently referenced in lifestyle media because of its unique flavor identity.",
      "Useful for glossary content about flavor theory.",
    ],
    foodUses: ["Tea", "Tincture discussions", "Herbal blends"],
    caution:
      "This page should carefully separate traditional symbolism from modern evidence claims.",
    tags: ["five flavor", "berry", "seo", "distinctive", "glossary"],
  },
  {
    slug: "chinese-yam",
    name: "Chinese Yam",
    pinyin: "Shan Yao",
            chinese: "Shan Yao",
    latin: "Dioscoreae Rhizoma",
    partUsed: "Rhizome",
    category: "Food therapy herbs",
    summary: "A food-grade staple that helps the site blend kitchen use with TCM education.",
    whatItIs:
      "Chinese yam is especially helpful for a practical site because it feels more like a pantry ingredient and less like an intimidating medicinal.",
    nature: "Neutral",
    flavor: "Sweet",
    channels: "Lung, Spleen, Kidney",
    traditionalUses: [
      "Traditionally used in TCM theory in discussions of spleen and lung functions.",
      "A natural fit for porridge, soup, and ingredient-based pages.",
      "Helps show the overlap between nourishment and traditional herbal classification.",
    ],
    foodUses: ["Soup", "Porridge", "Steamed dishes"],
    caution:
      "This page should keep food-use guidance general and avoid personalized diet claims.",
    tags: ["food-grade", "pantry", "soup", "neutral", "beginner"],
  },
  {
    slug: "lotus-seed",
    name: "Lotus Seed",
    pinyin: "Lian Zi",
            chinese: "Lian Zi",
    latin: "Nelumbinis Semen",
    partUsed: "Seed",
    category: "Food therapy herbs",
    summary: "A classic ingredient for soups and desserts that adds depth to nourishing kitchen content.",
    whatItIs:
      "Lotus seed supports the site's recipe layer because it appears naturally in sweet soups, porridge, and family-style Chinese kitchen traditions.",
    nature: "Neutral",
    flavor: "Sweet, astringent",
    channels: "Heart, Kidney, Spleen",
    traditionalUses: [
      "Traditionally used for gentle nourishment and stabilization in TCM language.",
      "Appears often in household food traditions.",
      "Useful for cross-linking with longan and lily bulb.",
    ],
    foodUses: ["Sweet soup", "Congee", "Dessert"],
    caution:
      "Use careful language when discussing mood or sleep themes and keep all claims general.",
    tags: ["dessert", "nourishing", "recipe", "family kitchen", "seed"],
  },
  {
    slug: "jobs-tears",
    name: "Job's Tears",
    pinyin: "Yi Yi Ren",
            chinese: "Yi Yi Ren",
    latin: "Coicis Semen",
    partUsed: "Seed",
    category: "Dampness-related herbs",
    summary: "A grain-like ingredient often used in TCM kitchen discussions about dampness and heaviness.",
    whatItIs:
      "Job's tears helps the site explain dampness through a grain-like ingredient that sits naturally inside recipe and pantry education.",
    nature: "Slightly cold",
    flavor: "Sweet, bland",
    channels: "Lung, Spleen, Stomach",
    traditionalUses: [
      "Traditionally used to support dampness resolution in TCM language.",
      "Often introduced through porridge and soup recipes.",
      "A good teaching herb for discussing body heaviness in traditional theory.",
    ],
    foodUses: ["Congee", "Soup", "Grain bowl"],
    caution:
      "Pregnancy-related and specialized use cautions should be clearly flagged when this page is published in full.",
    tags: ["dampness", "grain-like", "recipe", "porridge", "seo"],
  },
  {
    slug: "mulberry-fruit",
    name: "Mulberry Fruit",
    pinyin: "Sang Shen",
            chinese: "Sang Shen",
    latin: "Mori Fructus",
    partUsed: "Fruit",
    category: "Nourishing herbs",
    summary: "A richly colored fruit with strong crossover appeal between food culture and traditional herb education.",
    whatItIs:
      "Mulberry fruit is visually strong and easy to style in editorial content, making it useful for both search and brand tone.",
    nature: "Cold",
    flavor: "Sweet",
    channels: "Heart, Kidney, Liver",
    traditionalUses: [
      "Traditionally used in TCM to nourish and moisten.",
      "Useful in content about dryness and gentle replenishment.",
      "Adds variety beyond the most overused tonic herbs.",
    ],
    foodUses: ["Tea", "Jam", "Snack"],
    caution:
      "Cooling and nourishing language should be explained carefully so readers do not treat TCM labels like universal advice.",
    tags: ["fruit", "dryness", "visual", "tea", "nourishing"],
  },
  {
    slug: "black-sesame-seed",
    name: "Black Sesame Seed",
    pinyin: "Hei Zhi Ma",
            chinese: "Hei Zhi Ma",
    latin: "Sesami Semen Nigrum",
    partUsed: "Seed",
    category: "Food therapy herbs",
    summary: "A familiar kitchen ingredient with strong potential for accessible beauty and nourishment content.",
    whatItIs:
      "Black sesame lets the site meet users where they already are: in food, desserts, breakfast bowls, and pantry curiosity.",
    nature: "Neutral",
    flavor: "Sweet",
    channels: "Liver, Kidney, Large Intestine",
    traditionalUses: [
      "Traditionally used in TCM to nourish and moisten.",
      "A natural fit for pantry-forward recipe content.",
      "Useful for ingredient-based lifestyle pages.",
    ],
    foodUses: ["Porridge", "Paste", "Dessert"],
    caution:
      "Beauty-related content should stay grounded and avoid exaggerated external claims.",
    tags: ["pantry", "beauty foods", "seed", "breakfast", "beginner"],
  },
  {
    slug: "mint",
    name: "Mint",
    pinyin: "Bo He",
            chinese: "Bo He",
    latin: "Menthae Haplocalycis Herba",
    partUsed: "Aerial parts",
    category: "Tea herbs",
    summary: "A familiar herb that can help translate TCM cooling concepts through something readers already know.",
    whatItIs:
      "Mint is a strategic herb for a beginner site because familiarity lowers the barrier to understanding cooling and aromatic actions in TCM.",
    nature: "Cool",
    flavor: "Pungent, aromatic",
    channels: "Lung, Liver",
    traditionalUses: [
      "Traditionally used to release the exterior and move stagnant qi in TCM language.",
      "A good teaching herb for aromatic cooling categories.",
      "Useful in simple tea content.",
    ],
    foodUses: ["Tea", "Infusion", "Cooling blends"],
    caution:
      "Keep all language general and avoid turning simple herb profiles into condition-specific instructions.",
    tags: ["familiar", "tea", "cooling", "aromatic", "beginner"],
  },
  {
    slug: "perilla-leaf",
    name: "Perilla Leaf",
    pinyin: "Zi Su Ye",
            chinese: "Zi Su Ye",
    latin: "Perillae Folium",
    partUsed: "Leaf",
    category: "Kitchen herbs",
    summary: "An aromatic culinary leaf that expands the site's food-first and pantry-first storytelling.",
    whatItIs:
      "Perilla leaf is useful because it connects TCM herb writing with real cooking traditions and ingredient recognition across Asian food cultures.",
    nature: "Warm",
    flavor: "Pungent",
    channels: "Lung, Spleen",
    traditionalUses: [
      "Traditionally used to move qi and support exterior-release discussions in TCM.",
      "A useful herb for showing that some materia medica lives close to the kitchen.",
      "Good for seasonal and aromatic content.",
    ],
    foodUses: ["Soup", "Herbal broth", "Culinary leaf use"],
    caution:
      "This page should distinguish clearly between culinary use and concentrated therapeutic use.",
    tags: ["aromatic", "leaf", "kitchen", "warm", "seasonal"],
  },
  {
    slug: "cinnamon-twig",
    name: "Cinnamon Twig",
    pinyin: "Gui Zhi",
            chinese: "Gui Zhi",
    latin: "Cinnamomi Ramulus",
    partUsed: "Twig",
    category: "Warming herbs",
    summary: "A warming classic that helps explain why TCM categories do not always match supermarket spice categories one-to-one.",
    whatItIs:
      "Cinnamon twig is editorially useful because readers assume they already understand cinnamon, but TCM distinctions create a strong teaching moment.",
    nature: "Warm",
    flavor: "Pungent, sweet",
    channels: "Heart, Lung, Bladder",
    traditionalUses: [
      "Traditionally used to warm channels and release exterior-cold patterns in TCM language.",
      "Supports strong glossary and comparison content.",
      "Adds depth to warming-herb articles.",
    ],
    foodUses: ["Decoction", "Spice comparisons", "Warm blends"],
    caution:
      "Comparison and distinction are important here. Readers should not assume all cinnamon products are interchangeable.",
    tags: ["warming", "comparison", "classic", "seo", "glossary"],
  },
  {
    slug: "sichuan-lovage-root",
    name: "Sichuan Lovage Root",
    pinyin: "Chuan Xiong",
            chinese: "Chuan Xiong",
    latin: "Chuanxiong Rhizoma",
    partUsed: "Rhizome",
    category: "Movement herbs",
    summary: "A more advanced herb that helps the library grow into real TCM depth after beginner trust is established.",
    whatItIs:
      "Chuan Xiong is less kitchen-friendly but important for authority, glossary depth, and serious TCM library structure.",
    nature: "Warm",
    flavor: "Pungent",
    channels: "Liver, Gallbladder, Pericardium",
    traditionalUses: [
      "Traditionally used in TCM discussions of blood movement and qi movement.",
      "A strong example of why the site needs careful terminology explanations.",
      "Useful for later-stage depth content rather than day-one emphasis.",
    ],
    foodUses: ["Advanced formula discussions"],
    caution:
      "This is not an herb to present casually. Safety and context notes are especially important.",
    tags: ["advanced", "authority", "movement", "glossary", "library depth"],
  },
  {
    slug: "white-peony-root",
    name: "White Peony Root",
    pinyin: "Bai Shao",
            chinese: "Bai Shao",
    latin: "Paeoniae Radix Alba",
    partUsed: "Root",
    category: "Blood-related herbs",
    summary: "An important classic herb for explaining nourishment, moderation, and the TCM concept of blood.",
    whatItIs:
      "White peony root helps the site teach one of the most misunderstood ideas in English-language TCM writing: what 'blood' means in traditional theory.",
    nature: "Slightly cold",
    flavor: "Bitter, sour",
    channels: "Liver, Spleen",
    traditionalUses: [
      "Traditionally used to nourish blood and preserve yin in TCM language.",
      "Useful for careful educational discussions about cramping, dryness, and balance in traditional theory.",
      "Supports glossary and pattern pages.",
    ],
    foodUses: ["Advanced traditional preparations"],
    caution:
      "Because this page can attract problem-focused searching, the disclaimer and cautious wording need to be especially visible.",
    tags: ["blood", "yin", "authority", "glossary", "advanced"],
  },
  {
    slug: "prepared-rehmannia",
    name: "Prepared Rehmannia",
    pinyin: "Shu Di Huang",
            chinese: "Shu Di Huang",
    latin: "Rehmanniae Radix Praeparata",
    partUsed: "Prepared root",
    category: "Blood-related herbs",
    summary: "A classic dense tonic herb that belongs in the library for depth, not as a casual beginner ingredient.",
    whatItIs:
      "Prepared rehmannia is an authority-building herb. It signals that the site covers more than grocery-friendly ingredients, while still demanding careful tone.",
    nature: "Slightly warm",
    flavor: "Sweet",
    channels: "Heart, Kidney, Liver",
    traditionalUses: [
      "Traditionally used to nourish blood and essence in TCM theory.",
      "Useful for explaining why some herbs are foundational but not casual.",
      "Supports long-term library credibility.",
    ],
    foodUses: ["Advanced tonic preparations"],
    caution:
      "This page should strongly reinforce that educational content is not a personalized recommendation.",
    tags: ["tonic", "advanced", "blood", "essence", "authority"],
  },
  {
    slug: "ophiopogon-root",
    name: "Ophiopogon Root",
    pinyin: "Mai Men Dong",
            chinese: "Mai Men Dong",
    latin: "Ophiopogonis Radix",
    partUsed: "Root tuber",
    category: "Moistening herbs",
    summary: "A classic herb for dryness-related explanations and fluid-nourishing discussions in TCM.",
    whatItIs:
      "Ophiopogon helps the site build a more refined educational vocabulary around dryness and fluids without relying on exaggerated health promises.",
    nature: "Slightly cold",
    flavor: "Sweet, slightly bitter",
    channels: "Heart, Lung, Stomach",
    traditionalUses: [
      "Traditionally used to nourish fluids and moisten dryness in TCM language.",
      "Useful in dry-weather and throat-focused educational writing.",
      "Pairs well with lily bulb and pear-style food content.",
    ],
    foodUses: ["Advanced tea", "Soup pairings"],
    caution:
      "Keep the language descriptive and avoid using this page as implied medical guidance for respiratory issues.",
    tags: ["dryness", "moistening", "seasonal", "authority", "pairing"],
  },
  {
    slug: "dried-ginger",
    name: "Dried Ginger",
    pinyin: "Gan Jiang",
            chinese: "Gan Jiang",
    latin: "Zingiberis Rhizoma",
    partUsed: "Dried rhizome",
    category: "Warming herbs",
    summary: "A useful comparison herb that shows why fresh and dried forms matter in TCM thinking.",
    whatItIs:
      "Dried ginger is excellent for teaching because readers recognize ginger but usually do not realize traditional systems distinguish fresh and dried forms carefully.",
    nature: "Hot",
    flavor: "Pungent",
    channels: "Heart, Lung, Spleen, Stomach",
    traditionalUses: [
      "Traditionally used for stronger internal warming discussions in TCM.",
      "Works especially well in comparison content against fresh ginger.",
      "Helps the site teach nuance instead of oversimplification.",
    ],
    foodUses: ["Warm blends", "Decoction", "Comparison content"],
    caution:
      "This page should explain clearly why familiar ingredients can behave differently in different preparations.",
    tags: ["comparison", "warming", "ginger", "nuance", "seo"],
  },
  {
    slug: "kudzu-root",
    name: "Kudzu Root",
    pinyin: "Ge Gen",
            chinese: "Ge Gen",
    latin: "Puerariae Lobatae Radix",
    partUsed: "Root",
    category: "Exterior-related herbs",
    summary: "A notable traditional root that brings both cultural depth and search potential to the library.",
    whatItIs:
      "Kudzu root appears in both TCM and broader East Asian food traditions, which gives it room for educational crossover content.",
    nature: "Cool",
    flavor: "Sweet, pungent",
    channels: "Spleen, Stomach",
    traditionalUses: [
      "Traditionally used in TCM discussions involving the neck, fluids, and exterior patterns.",
      "A good example of a herb with multiple contexts across food and tradition.",
      "Useful for long-tail SEO later in the site's growth.",
    ],
    foodUses: ["Starch use", "Traditional drinks", "Powder"],
    caution:
      "Because this page can draw broad internet lifestyle traffic, it should stay tightly grounded and not overstate evidence.",
    tags: ["root", "cooling", "seo", "cross-cultural", "authority"],
  },
  {
    slug: "eucommia-bark",
    name: "Eucommia Bark",
    pinyin: "Du Zhong",
            chinese: "Du Zhong",
    latin: "Eucommiae Cortex",
    partUsed: "Bark",
    category: "Kidney-related herbs",
    summary: "A classic herb that helps round out the library with deeper traditional categories.",
    whatItIs:
      "Eucommia bark is more advanced than launch favorites, but it helps the site mature from a beginner site into a real library over time.",
    nature: "Warm",
    flavor: "Sweet",
    channels: "Kidney, Liver",
    traditionalUses: [
      "Traditionally used in TCM in discussions of liver and kidney systems.",
      "Useful for explaining structural support concepts in traditional language.",
      "Best published after core beginner content is stable.",
    ],
    foodUses: ["Advanced soup use", "Traditional tonics"],
    caution:
      "This page should avoid targeted medical-sounding claims and keep the language clearly educational.",
    tags: ["advanced", "bark", "kidney", "authority", "library depth"],
  },
  {
    slug: "tremella-mushroom",
    name: "Tremella Mushroom",
    pinyin: "Yin Er",
            chinese: "Yin Er",
    latin: "Tremellae Fuciformis Sporophorum",
    partUsed: "Fruiting body",
    category: "Food therapy herbs",
    summary: "A gentle edible mushroom often used in sweet soups and soft seasonal kitchen content.",
    whatItIs:
      "Tremella mushroom is one of the most approachable Chinese food-therapy ingredients because it behaves like a real kitchen ingredient first and a traditional teaching ingredient second.",
    nature: "Neutral to slightly cool",
    flavor: "Sweet, mild",
    channels: "Lung, Stomach",
    traditionalUses: [
      "Traditionally used in TCM-style food writing to support moisture and softness.",
      "Often associated with dessert soups, pear pairings, and gentle seasonal dryness content.",
      "A strong bridge ingredient between pantry cooking and plain-English TCM vocabulary.",
    ],
    foodUses: ["Sweet soup", "Pear soup", "Dessert bowl"],
    caution:
      "Even food-like ingredients should be framed carefully. Readers should avoid turning a sweet soup page into personal health guidance.",
    tags: ["mushroom", "dryness", "sweet soup", "pantry", "beginner"],
  },
  {
    slug: "adzuki-bean",
    name: "Adzuki Bean",
    pinyin: "Chi Xiao Dou",
            chinese: "Chi Xiao Dou",
    latin: "Vignae Semen",
    partUsed: "Bean",
    category: "Food therapy herbs",
    summary: "A pantry-friendly bean that fits naturally into lighter soups and dampness-related kitchen reading.",
    whatItIs:
      "Adzuki bean helps HerbGuide stay grounded in food-first content because readers can understand it through soup, porridge, and pantry routines before needing much theory.",
    nature: "Neutral",
    flavor: "Sweet, slightly sour",
    channels: "Heart, Small Intestine",
    traditionalUses: [
      "Traditionally used in Chinese kitchen writing around lightness, drainage, and food-level dampness language.",
      "Often paired with grains or beans in simple soups and porridge-style meals.",
      "Useful for connecting pantry cooking with beginner TCM explanation.",
    ],
    foodUses: ["Soup", "Bean porridge", "Light stew"],
    caution:
      "Food-first pages should still avoid implying that one bean or soup is the answer to ongoing symptoms or personal health concerns.",
    tags: ["bean", "pantry", "dampness", "soup", "beginner"],
  },
];

export const featuredHerbs = herbs.slice(0, 6);

export const launchHerbList = herbs.slice(0, 8).map((herb) => `${herb.name} (${herb.pinyin})`);

const normalizeLabel = (value: string) => value.trim().replace(/\s+/g, " ");

export const getHerbDisplayNames = (herb: Herb): HerbDisplayNames => {
  const secondary = [herb.pinyin, herb.chinese, herb.latin]
    .map(normalizeLabel)
    .filter((value, index, items) => value && value !== herb.name && items.indexOf(value) === index);

  return {
    primary: herb.name,
    secondary,
    searchText: [
      herb.name,
      herb.pinyin,
      herb.chinese,
      herb.latin,
      herb.summary,
      herb.category,
      ...herb.tags,
      ...herb.foodUses,
    ]
      .map(normalizeLabel)
      .join(" ")
      .toLowerCase(),
  };
};
