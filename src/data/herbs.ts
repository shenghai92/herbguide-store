import { sanitizeHerbContent } from "../utils/publicCopy";

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

const rawHerbs: Herb[] = [
  {
    slug: "goji-berry",
    name: "Goji Berry",
    pinyin: "Gou Qi Zi",
        chinese: "Gou Qi Zi",
    latin: "Lycii Fructus",
    partUsed: "Fruit",
    category: "Nourishing herbs",
    summary: "A well-known berry often used in teas, soups, porridge, and simple everyday kitchen recipes. We have expanded this guide to offer deeper insight into why it sits on so many pantry shelves.",
    whatItIs:
      "Goji berry is one of the easiest traditional herbs for English-speaking readers to recognize because it already appears in snack mixes, teas, and modern grocery products. It bridges the gap between old-world culinary traditions and modern lifestyles seamlessly. We show the English name, pinyin, Chinese characters, and Latin name together so readers can connect grocery familiarity, traditional terminology, and reference naming in one place.",
    nature: "Neutral to slightly warming",
    flavor: "Sweet",
    channels: "Liver, Kidney",
    traditionalUses: [
      "Traditionally used to support liver and kidney language in this framework.",
      "Often discussed for eye-related language and gentle daily use.",
      "Commonly framed as a food-grade tonic rather than an intimidating concentrated product.",
    ],
    foodUses: ["Tea", "Broth", "Congee"],
    caution:
      "Readers following ongoing care plans, especially where blood-thinning products are involved, should check local guidance before using goji regularly.",
    tags: ["beginner", "berry", "tea", "food traditions"],
  },
  {
    slug: "astragalus-root",
    name: "Astragalus Root",
    pinyin: "Huang Qi",
        chinese: "Huang Qi",
    latin: "Astragali Radix",
    partUsed: "Root",
    category: "Qi-supporting herbs",
    summary: "A foundational soup herb often used in traditional writing about qi and seasonal routines. This deeper guide explains its role in winter kitchens, alongside insights from modern nutritional science and authoritative health databases.",
    whatItIs:
      "Astragalus looks like flat, pale yellow wooden tongue depressors. It is one of the most important ingredients in the traditional Chinese kitchen for supporting everyday resilience and vitality. Its Chinese name, Huang Qi, translates to 'Yellow Leader,' reflecting its esteemed status in herbal traditions.",
    nature: "Slightly warming",
    flavor: "Sweet",
    channels: "Lung, Spleen",
    traditionalUses: [
      "Traditionally used in discussions of qi, often described in English as functional vitality.",
      "Frequently used in long-simmered soups and broth-focused food traditions.",
      "Often associated with defensive qi and seasonal context in traditional writing.",
    ],
    foodUses: ["Soup", "Broth", "Decoction"],
    caution:
      "Traditionally, it is often paused if you are actively fighting off a sudden cold, as it is meant for building resilience beforehand.",
    tags: ["root", "soup", "qi", "warming", "adaptogen", "immunity"],
  },
  {
    slug: "fresh-ginger",
    name: "Fresh Ginger",
    pinyin: "Sheng Jiang",
        chinese: "Sheng Jiang",
    latin: "Zingiberis Rhizoma Recens",
    partUsed: "Fresh rhizome",
    category: "Kitchen herbs",
    summary: "A familiar kitchen ingredient that gives traditional food traditions an easy and practical entry point. This expanded guide explores its role in balancing cold-weather meals.",
    whatItIs:
      "Fresh ginger is one of the most useful bridge ingredients for this site because readers already know it from cooking, tea, and home routines. It turns abstract warming concepts into something you can actually taste and feel.",
    nature: "Warm",
    flavor: "Pungent",
    channels: "Lung, Spleen, Stomach",
    traditionalUses: [
      "Traditionally used to warm the middle and explain digestive language in this framework.",
      "Often used in simple teas and soups for cold-weather cooking.",
      "Commonly included in beginner-friendly food tradition articles.",
    ],
    foodUses: ["Tea", "Soup", "Stir-fry"],
    caution:
      "Even familiar food herbs can be irritating in excess. Readers with more complex personal needs should still use caution.",
    tags: ["kitchen", "warming", "tea", "beginner"],
  },
  {
    slug: "jujube-red-date",
    name: "Jujube",
    pinyin: "Da Zao",
        chinese: "Da Zao",
    latin: "Jujubae Fructus",
    partUsed: "Fruit",
    category: "Nourishing herbs",
    summary: "Sweet red dates that make Chinese pantry cooking feel warm, familiar, and easy to recognize.",
    whatItIs:
      "Jujube, often called Chinese red date in pantry cooking, appears in tea, congee, broths, sweet soups, and many everyday kitchen recipes.",
    nature: "Warm",
    flavor: "Sweet",
    channels: "Spleen, Stomach",
    traditionalUses: [
      "Traditionally discussed as a warm, sweet pantry ingredient with a steady household role.",
      "Often paired with ginger, lotus seed, goji, pear, or other kitchen-friendly ingredients.",
      "Useful for tea, congee, and soup pages that explain food culture in plain English.",
    ],
    foodUses: ["Tea", "Congee", "Soup", "Dessert soup"],
    caution:
      "Sweet tonic foods may not suit every reader's dietary needs. Articles should avoid blanket recommendations.",
    tags: ["red date", "chinese red date", "jujube tea", "jujube congee", "pantry ingredient", "popular"],
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
      "Chrysanthemum tea is one of the easiest traditional beverage ideas to explain to U.S. readers because it is light, visual, and already recognizable in Asian grocery culture.",
    nature: "Cool",
    flavor: "Sweet, bitter",
    channels: "Liver, Lung",
    traditionalUses: [
      "Traditionally used in discussions of clear heat and warm or irritated states.",
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
    summary: "A tart fruit traditionally associated with food stagnation and digestive heaviness in this framework. This expanded guide looks at its role after rich meals.",
    whatItIs:
      "Unlike sweet berries, hawthorn is famously tart. It is the secret behind many traditional after-dinner teas and snacks, designed specifically for moments when you have eaten a bit too much.",
    nature: "Slightly warm",
    flavor: "Sour, sweet",
    channels: "Spleen, Stomach, Liver",
    traditionalUses: [
      "Traditionally used when heavy foods feel difficult to process.",
      "Often discussed in relation to meat-heavy meals and digestive stagnation.",
      "Works well in comparison articles and food-centered explainers.",
    ],
    foodUses: ["Tea", "Fruit snacks", "Digestive drink"],
    caution:
      "Because of its tart nature, it is traditionally not recommended on an empty stomach, especially for those with sensitive digestion.",
    tags: ["digestive", "fruit", "tart", "post-meal"],
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
      "Chen pi is one of the best herbs for storytelling because it turns a familiar ingredient, citrus peel, into a traditional pantry concept with deep culinary value. It also gives readers a clearer answer when they search directly for chen pi tea or aged citrus peel kitchen use.",
    nature: "Warm",
    flavor: "Pungent, bitter",
    channels: "Lung, Spleen",
    traditionalUses: [
      "Traditionally used to help regulate qi in digestive and phlegm-related discussions.",
      "Often introduced through tea and broth applications.",
      "Helps readers see how traditional pantry knowledge overlaps with cooking wisdom.",
    ],
    foodUses: ["Tea", "Broth", "Dessert"],
    caution:
      "Readers should understand the difference between culinary use and concentrated product use.",
    tags: ["citrus", "digestive", "tea", "pantry", "kitchen-friendly", "chen pi tea", "aged citrus peel tea"],
  },
  {
    slug: "poria",
    name: "Poria",
    pinyin: "Fu Ling",
        chinese: "Fu Ling",
    latin: "Poria",
    partUsed: "Sclerotium (fungus)",
    category: "Dampness-related herbs",
    summary: "A classic traditional ingredient often used in conversations about dampness, fluid balance, and traditional context. This guide explores why it is a quiet pantry staple.",
    whatItIs:
      "Poria is a type of fungus that looks like a white, chalky block when dried and sliced. It has almost no flavor of its own, which makes it incredibly easy to slip into everyday soups and porridges.",
    nature: "Neutral",
    flavor: "Sweet, bland",
    channels: "Heart, Spleen, Kidney",
    traditionalUses: [
      "Traditionally used to gently leach out dampness and support the spleen system.",
      "Often discussed when the body feels heavy, sluggish, or clouded.",
      "Commonly framed as a foundational, neutral ingredient that pairs with almost anything.",
    ],
    foodUses: ["Soup", "Porridge", "Powder blends"],
    caution:
      "Generally considered very mild and safe for food use, but as always, read it in the context of your own needs.",
    tags: ["dampness", "soup", "pantry", "gentle"],
  },
  {
    slug: "longan-fruit",
    name: "Longan Fruit",
    pinyin: "Long Yan Rou",
        chinese: "Long Yan Rou",
    latin: "Longan Arillus",
    partUsed: "Fruit aril",
    category: "Nourishing herbs",
    summary: "A sweet dried fruit often used in traditional dessert soups, tea, and softly sweet pantry bowls.",
    whatItIs:
      "Longan fruit is best known in dried form, where it shows up in sweet soup, tea, and congee content that still feels approachable to beginners.",
    nature: "Warm",
    flavor: "Sweet",
    channels: "Heart, Spleen",
    traditionalUses: [
      "Traditionally described as warm and sweet in pantry-style kitchen language.",
      "Often appears in dried longan tea, sweet soup, and other evening-style household recipes.",
      "Pairs especially well with jujube and lotus seed content.",
    ],
    foodUses: ["Dessert soup", "Tea", "Congee"],
    caution:
      "Sweet tonic foods are not a universal fit. Content should stay descriptive and not prescriptive.",
    tags: ["dried longan", "longan tea", "longan sweet soup", "fruit", "gentle", "recipe-friendly"],
  },
  {
    slug: "lily-bulb",
    name: "Lily Bulb",
    pinyin: "Bai He",
            chinese: "Bai He",
    latin: "Lilii Bulbus",
    partUsed: "Bulb",
    category: "Kitchen herbs",
    summary: "A soft food-tradition ingredient that works especially well in gentle dessert and soup content.",
    whatItIs:
      "Lily bulb is especially useful for kitchen pages because it feels more like an ingredient than a supplement and keeps the tone warm and approachable.",
    nature: "Slightly cold",
    flavor: "Sweet",
    channels: "Heart, Lung",
    traditionalUses: [
      "Traditionally used to moisten and gently calm.",
      "Often discussed in soothing soups and dessert-style food traditions.",
      "Works well in seasonal dryness content.",
    ],
    foodUses: ["Sweet soup", "Pear soup", "Congee"],
    caution:
      "Use careful language around emotional or sleep-related topics and avoid exaggerated promises.",
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
    summary: "A famous tonic root that needs careful explanation because recognition is high but assumptions are often vague. This deeper guide removes the hype and focuses on kitchen reality.",
    whatItIs:
      "Ginseng is widely known in English-speaking popular culture, which makes it important for search visibility, but it also requires careful framing. It is not a magic bullet, but a deeply respected root used in slow-simmered broths.",
    nature: "Slightly warm",
    flavor: "Sweet, slightly bitter",
    channels: "Lung, Spleen, Heart",
    traditionalUses: [
      "Traditionally used in traditional theory for stronger qi-focused discussion.",
      "Often used as a benchmark herb when discussing tonic categories.",
      "Useful for explaining why famous herbs still need context.",
    ],
    foodUses: ["Soup", "Tea", "Tonic preparations"],
    caution:
      "This is not a casual herb for everyone. The site should emphasize context, sourcing, and professional guidance.",
    tags: ["famous", "root", "qi", "high-interest"],
  },
  {
    slug: "american-ginseng",
    name: "American Ginseng",
    pinyin: "Xi Yang Shen",
            chinese: "Xi Yang Shen",
    latin: "Panacis Quinquefolii Radix",
    partUsed: "Root",
    category: "Qi-supporting herbs",
    summary: "An important comparison herb that helps readers understand why traditional writing does not describe all ginseng as the same.",
    whatItIs:
      "American ginseng is valuable editorially because it helps explain the difference between names readers assume are interchangeable.",
    nature: "Cool",
    flavor: "Sweet, slightly bitter",
    channels: "Heart, Lung, Kidney",
    traditionalUses: [
      "Traditionally used in traditional theory for qi-related discussion while also nourishing fluids.",
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
    summary: "A practical tonic root that often appears in soups and everyday-style traditional cooking content.",
    whatItIs:
      "Codonopsis is useful for a practical site because it supports qi-focused content without relying only on famous premium herbs like ginseng.",
    nature: "Neutral",
    flavor: "Sweet",
    channels: "Lung, Spleen",
    traditionalUses: [
      "Traditionally used for a gentler everyday qi-related context.",
      "Common in home-style soups and practical kitchen content.",
      "Helps widen the pantry-style side of the library.",
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
      "Licorice root is valuable because it is familiar in English-speaking herb culture and also central to many traditional formula discussions.",
    nature: "Neutral",
    flavor: "Sweet",
    channels: "Heart, Lung, Spleen, Stomach",
    traditionalUses: [
      "Traditionally used to harmonize formulas and explain digestive and upper-body comfort language in traditional theory.",
      "Frequently discussed as a formula-balancing herb.",
      "Useful for teaching why one herb can have several roles in traditional writing.",
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
    summary: "A well-known five-flavor berry that stands out in both traditional writing and modern lifestyle writing.",
    whatItIs:
      "Schisandra has strong storytelling value because its 'five flavor' identity is memorable and distinctive in English content.",
    nature: "Warm",
    flavor: "Sour, sweet, salty, bitter, pungent",
    channels: "Heart, Lung, Kidney",
    traditionalUses: [
      "Traditionally used to astringe and in discussions of lung and kidney-related patterns.",
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
    category: "Kitchen herbs",
    summary: "A food-grade staple that blends kitchen use with traditional herb education.",
    whatItIs:
      "Chinese yam is especially helpful for a practical site because it feels more like a pantry ingredient and less like an intimidating concentrated product.",
    nature: "Neutral",
    flavor: "Sweet",
    channels: "Lung, Spleen, Kidney",
    traditionalUses: [
      "Traditionally used in traditional theory in discussions of spleen and lung function.",
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
    category: "Kitchen herbs",
    summary: "A classic ingredient for soups, congee, and desserts that adds depth to gentle kitchen content.",
    whatItIs:
      "Lotus seed fits naturally into sweet soup, porridge, and family-style kitchen traditions, especially when readers want a mild, nutty pantry ingredient.",
    nature: "Neutral",
    flavor: "Sweet, astringent",
    channels: "Heart, Kidney, Spleen",
    traditionalUses: [
      "Traditionally described as a sweet, slightly astringent ingredient in household food language.",
      "Appears often in sweet soup, congee, lotus seed paste, and family-style dessert traditions.",
      "Useful for cross-linking with longan, tremella, and lily bulb.",
    ],
    foodUses: ["Sweet soup", "Congee", "Dessert", "Paste filling"],
    caution:
      "Use careful language when discussing mood or sleep themes and keep all claims general.",
    tags: ["lotus seed soup", "cored lotus seed", "lotus seed paste", "recipe", "family kitchen", "seed"],
  },
  {
    slug: "jobs-tears",
    name: "Job's Tears",
    pinyin: "Yi Yi Ren",
            chinese: "Yi Yi Ren",
    latin: "Coicis Semen",
    partUsed: "Seed",
    category: "Dampness-related herbs",
    summary: "A grain-like ingredient often used in traditional kitchen discussions about dampness and heaviness.",
    whatItIs:
      "Job's tears helps explain dampness through a grain-like ingredient that fits naturally into recipe and pantry education.",
    nature: "Slightly cold",
    flavor: "Sweet, bland",
    channels: "Lung, Spleen, Stomach",
    traditionalUses: [
      "Traditionally used to support dampness resolution in traditional language.",
      "Often introduced through porridge and soup recipes.",
      "A good teaching herb for discussing body heaviness in traditional theory.",
    ],
    foodUses: ["Congee", "Soup", "Grain bowl"],
    caution:
      "Extra caution notes for major life stages and other specialized situations should be clearly flagged when this page is published in full.",
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
      "Traditionally used to nourish and moisten.",
      "Useful in content about dryness and gentle replenishment.",
      "Adds variety beyond the most overused tonic herbs.",
    ],
    foodUses: ["Tea", "Jam", "Snack"],
    caution:
      "Cooling and nourishing language should be explained carefully so readers do not read traditional labels like universal advice.",
    tags: ["fruit", "dryness", "visual", "tea", "nourishing"],
  },
  {
    slug: "black-sesame-seed",
    name: "Black Sesame Seed",
    pinyin: "Hei Zhi Ma",
            chinese: "Hei Zhi Ma",
    latin: "Sesami Semen Nigrum",
    partUsed: "Seed",
    category: "Kitchen herbs",
    summary: "A familiar kitchen ingredient with strong potential for accessible beauty and nourishment content.",
    whatItIs:
      "Black sesame meets readers where they already are: in food, desserts, breakfast bowls, and pantry curiosity.",
    nature: "Neutral",
    flavor: "Sweet",
    channels: "Liver, Kidney, Large Intestine",
    traditionalUses: [
      "Traditionally used to nourish and moisten.",
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
    summary: "A familiar herb that can help translate traditional cooling concepts through something readers already know.",
    whatItIs:
      "Mint is a strategic herb for a beginner site because familiarity lowers the barrier to understanding cooling and aromatic actions in traditional writing.",
    nature: "Cool",
    flavor: "Pungent, aromatic",
    channels: "Lung, Liver",
    traditionalUses: [
      "Traditionally used to release the exterior and move stagnant qi in traditional language.",
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
    summary: "An aromatic culinary leaf that expands the library's food-first and pantry-first range.",
    whatItIs:
      "Perilla leaf is useful because it connects traditional herb writing with real cooking traditions and ingredient recognition across Asian food cultures.",
    nature: "Warm",
    flavor: "Pungent",
    channels: "Lung, Spleen",
    traditionalUses: [
      "Traditionally used to move qi and support exterior-release discussions in traditional writing.",
      "A useful herb for showing that some materia medica lives close to the kitchen.",
      "Good for seasonal and aromatic content.",
    ],
    foodUses: ["Soup", "Herbal broth", "Culinary leaf use"],
    caution:
      "This page should distinguish clearly between culinary use and concentrated traditional use.",
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
    summary: "A warming classic that helps explain why traditional categories do not always match supermarket spice categories one-to-one.",
    whatItIs:
      "Cinnamon twig is editorially useful because readers assume they already understand cinnamon, but traditional distinctions create a strong teaching moment.",
    nature: "Warm",
    flavor: "Pungent, sweet",
    channels: "Heart, Lung, Bladder",
    traditionalUses: [
      "Traditionally used to warm channels and release exterior-cold patterns in traditional language.",
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
    summary: "A more advanced herb that helps the library grow into deeper traditional depth after beginner trust is established.",
    whatItIs:
      "Chuan Xiong is less kitchen-friendly but important for authority, glossary depth, and a more complete traditional library structure.",
    nature: "Warm",
    flavor: "Pungent",
    channels: "Liver, Gallbladder, Pericardium",
    traditionalUses: [
      "Traditionally used in discussions of blood movement and qi movement.",
      "A strong example of why careful terminology explanations matter.",
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
    summary: "An important classic herb for explaining nourishment, moderation, and the traditional concept of blood.",
    whatItIs:
      "White peony root helps teach one of the most misunderstood ideas in English-language traditional writing: what 'blood' means in traditional theory.",
    nature: "Slightly cold",
    flavor: "Bitter, sour",
    channels: "Liver, Spleen",
    traditionalUses: [
      "Traditionally used to nourish blood and preserve yin in traditional language.",
      "Useful for careful educational discussions about cramping, dryness, and balance in traditional theory.",
      "Supports glossary and pattern pages.",
    ],
    foodUses: ["Advanced traditional preparations"],
    caution:
      "Because this page can attract highly specific searches, the disclaimer and cautious wording need to be especially visible.",
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
      "Prepared rehmannia is a denser traditional herb that shows the library covers more than grocery-friendly ingredients while still demanding careful tone.",
    nature: "Slightly warm",
    flavor: "Sweet",
    channels: "Heart, Kidney, Liver",
    traditionalUses: [
      "Traditionally used to nourish blood and essence in traditional theory.",
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
    summary: "A classic herb for dryness-related explanations and fluid-nourishing discussions in traditional writing.",
    whatItIs:
      "Ophiopogon helps build a more refined educational vocabulary around dryness and fluids without relying on exaggerated health promises.",
    nature: "Slightly cold",
    flavor: "Sweet, slightly bitter",
    channels: "Heart, Lung, Stomach",
    traditionalUses: [
      "Traditionally used to nourish fluids and moisten dryness in traditional language.",
      "Useful in dry-weather and throat-focused educational writing.",
      "Pairs well with lily bulb and pear-style food content.",
    ],
    foodUses: ["Advanced tea", "Soup pairings"],
    caution:
      "Keep the language descriptive and avoid using this page as implied individualized advice for airway-related situations.",
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
    summary: "A useful comparison herb that shows why fresh and dried forms matter in traditional thinking.",
    whatItIs:
      "Dried ginger is excellent for teaching because readers recognize ginger but usually do not realize traditional systems distinguish fresh and dried forms carefully.",
    nature: "Hot",
    flavor: "Pungent",
    channels: "Heart, Lung, Spleen, Stomach",
    traditionalUses: [
      "Traditionally used for stronger internal warming discussions in traditional writing.",
      "Works especially well in comparison content against fresh ginger.",
      "Helps the library teach nuance instead of oversimplification.",
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
      "Kudzu root appears in both traditional herb writing and broader East Asian food traditions, which gives it room for educational crossover content.",
    nature: "Cool",
    flavor: "Sweet, pungent",
    channels: "Spleen, Stomach",
    traditionalUses: [
      "Traditionally used in discussions involving the neck, fluids, and outer-layer patterns.",
      "A good example of a herb with multiple contexts across food and tradition.",
      "Useful for readers who want to explore more cross-cultural herb traditions.",
    ],
    foodUses: ["Starch use", "Traditional drinks", "Powder"],
    caution:
      "Because this page can attract broad lifestyle curiosity, it should stay tightly grounded and not overstate evidence.",
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
      "Eucommia bark is more advanced than beginner favorites, but it helps the library grow beyond entry-level ingredients over time.",
    nature: "Warm",
    flavor: "Sweet",
    channels: "Kidney, Liver",
    traditionalUses: [
      "Traditionally used in discussions of liver and kidney functions.",
      "Useful for explaining structural support concepts in traditional language.",
      "Best published after core beginner content is stable.",
    ],
    foodUses: ["Advanced soup use", "Traditional tonics"],
    caution:
      "This page should avoid targeted outcome claims and keep the language clearly educational.",
    tags: ["advanced", "bark", "kidney", "authority", "library depth"],
  },
  {
    slug: "tremella-mushroom",
    name: "Tremella Mushroom",
    pinyin: "Yin Er",
            chinese: "Yin Er",
    latin: "Tremellae Fuciformis Sporophorum",
    partUsed: "Fruiting body",
    category: "Kitchen herbs",
    summary: "A gentle edible mushroom often used in sweet soups and soft seasonal kitchen content.",
    whatItIs:
      "Tremella mushroom is one of the most approachable Chinese kitchen-tradition ingredients because it behaves like a real kitchen ingredient first and a traditional teaching ingredient second.",
    nature: "Neutral to slightly cool",
    flavor: "Sweet, mild",
    channels: "Lung, Stomach",
    traditionalUses: [
      "Traditionally used in traditional food writing to support moisture and softness.",
      "Often associated with dessert soups, pear pairings, and gentle seasonal dryness content.",
      "A strong bridge ingredient between pantry cooking and plain-English traditional vocabulary.",
    ],
    foodUses: ["Sweet soup", "Pear soup", "Dessert bowl"],
    caution:
      "Even food-like ingredients should be framed carefully. Readers should avoid turning a sweet soup page into individualized advice.",
    tags: ["mushroom", "dryness", "sweet soup", "pantry", "beginner"],
  },
  {
    slug: "adzuki-bean",
    name: "Adzuki Bean",
    pinyin: "Chi Xiao Dou",
            chinese: "Chi Xiao Dou",
    latin: "Vignae Semen",
    partUsed: "Bean",
    category: "Kitchen herbs",
    summary: "A pantry-friendly bean that fits naturally into lighter soups and dampness-related kitchen reading.",
    whatItIs:
      "Adzuki bean keeps the library grounded in food-first content because readers can understand it through soup, porridge, and pantry routines before needing much theory.",
    nature: "Neutral",
    flavor: "Sweet, slightly sour",
    channels: "Heart, Small Intestine",
    traditionalUses: [
      "Traditionally used in kitchen writing around lightness, drainage, and food-level dampness language.",
      "Often paired with grains or beans in simple soups and porridge-style meals.",
      "Useful for connecting pantry cooking with beginner traditional explanation.",
    ],
    foodUses: ["Soup", "Bean porridge", "Light stew"],
    caution:
      "Food-first pages should still avoid implying that one bean or soup is the answer to ongoing concerns or personal situations.",
    tags: ["bean", "pantry", "dampness", "soup", "beginner"],
  },
  {
    slug: "dong-quai",
    name: "Dong Quai",
    pinyin: "Dang Gui",
    chinese: "Dang Gui",
    latin: "Angelicae Sinensis Radix",
    partUsed: "Root",
    category: "Blood-related herbs",
    summary: "A famous traditional root often searched by English name and best explained with careful context instead of hype. Here is how it actually fits into soup traditions.",
    whatItIs:
      "Dong Quai has a very distinct, earthy, almost celery-like aroma. It is widely known in the West, but often misunderstood. In the traditional kitchen, it is a soup staple, not just a supplement.",
    nature: "Warm",
    flavor: "Sweet, pungent, bitter",
    channels: "Liver, Heart, Spleen",
    traditionalUses: [
      "Traditionally used to nourish and move blood in the traditional framework.",
      "Often discussed in women's traditional routines, though not exclusively.",
      "Commonly framed as a warming, moving ingredient for cold, stagnant patterns.",
    ],
    foodUses: ["Broth", "Soup", "Prepared tonic recipes"],
    caution:
      "Because of its warming and moving nature, it is traditionally avoided during certain times (like heavy bleeding or when experiencing strong heat signs).",
    tags: ["dong quai", "blood", "warming", "soup"],
  },
  {
    slug: "red-sage-root",
    name: "Red Sage Root",
    pinyin: "Dan Shen",
    chinese: "Dan Shen",
    latin: "Salviae Miltiorrhizae Radix et Rhizoma",
    partUsed: "Root and rhizome",
    category: "Movement herbs",
    summary: "A well-known classic root that appears in deeper traditional reading and broad English-language herb searches.",
    whatItIs:
      "Red sage root, often known by the pinyin name dan shen, is a high-interest traditional herb that needs plain-English context and visible safety boundaries.",
    nature: "Slightly cold",
    flavor: "Bitter",
    channels: "Heart, Liver",
    traditionalUses: [
      "Traditionally used in discussions involving blood movement and settled or constrained patterns in this framework.",
      "Often appears in more advanced reading than beginner kitchen herbs.",
      "Useful for showing how traditional herb language can be descriptive without becoming a promise.",
    ],
    foodUses: ["Advanced decoction context", "Traditional broth context"],
    caution:
      "This is not a casual self-use herb page. Readers should not turn a traditional profile into personal decision-making, especially where ongoing care plans are involved.",
    tags: ["dan shen", "salvia", "movement herb", "advanced", "high search volume"],
  },
  {
    slug: "reishi-mushroom",
    name: "Reishi Mushroom",
    pinyin: "Ling Zhi",
    chinese: "Ling Zhi",
    latin: "Ganoderma",
    partUsed: "Fruiting body",
    category: "Qi-supporting herbs",
    summary: "A famous mushroom with broad mainstream visibility that needs grounded educational framing. We explore its traditional kitchen use beyond the modern hype.",
    whatItIs:
      "Reishi is a beautiful, woody mushroom with a lacquered appearance. While it is heavily marketed today in coffees and powders, its traditional use is much slower and more deliberate.",
    nature: "Neutral",
    flavor: "Sweet, bitter",
    channels: "Heart, Liver, Lung",
    traditionalUses: [
      "Traditionally used to calm the spirit (shen) and support overall qi.",
      "Often discussed in the context of longevity, quiet resilience, and steady nourishment.",
      "Commonly framed as a deeply respected, slow-acting ingredient.",
    ],
    foodUses: ["Tea", "Broth", "Long-simmered slices"],
    caution:
      "Reishi is generally safe but its bitter nature and strong traditional profile mean it should be used mindfully, not as a casual daily beverage for everyone.",
    tags: ["reishi", "mushroom", "calming", "advanced"],
  },
  {
    slug: "cordyceps",
    name: "Cordyceps",
    pinyin: "Dong Chong Xia Cao",
    chinese: "Dong Chong Xia Cao",
    latin: "Cordyceps",
    partUsed: "Fungal complex",
    category: "Kidney-related herbs",
    summary: "A high-interest traditional fungus that brings search traffic but requires especially careful copy.",
    whatItIs:
      "Cordyceps is a globally searched traditional fungus that easily attracts exaggerated claims, which is exactly why a calm, educational herb page is useful.",
    nature: "Warm",
    flavor: "Sweet",
    channels: "Lung, Kidney",
    traditionalUses: [
      "Traditionally used in discussions involving lung and kidney language in this framework.",
      "Often presented as a prized or premium ingredient in traditional writing.",
      "Useful for explaining why expensive or famous herbs still need context and restraint.",
    ],
    foodUses: ["Soup", "Broth", "Traditional tonic cooking"],
    caution:
      "Because this herb attracts strong performance and longevity searches, the page should stay descriptive and avoid turning reputation into a claim.",
    tags: ["cordyceps", "premium herb", "kidney-related", "search demand", "fungus"],
  },
  {
    slug: "monk-fruit",
    name: "Monk Fruit",
    pinyin: "Luo Han Guo",
    chinese: "Luo Han Guo",
    latin: "Siraitiae Fructus",
    partUsed: "Fruit",
    category: "Tea herbs",
    summary: "A familiar sweet fruit that bridges grocery curiosity, tea culture, and traditional naming.",
    whatItIs:
      "Monk fruit is easier for many U.S. readers to approach because it already exists in sweetener conversations, but traditional herb content frames it through tea and fruit use rather than just marketing.",
    nature: "Cool",
    flavor: "Sweet",
    channels: "Lung, Large Intestine",
    traditionalUses: [
      "Traditionally used in discussions involving dryness, warmth, and throat-related language in this framework.",
      "Often introduced through simple tea or fruit infusion pages.",
      "Useful for showing how a familiar product name can still carry a broader traditional context.",
    ],
    foodUses: ["Tea", "Fruit infusion", "Light sweet drinks"],
    caution:
      "A sweet or soothing fruit page should stay educational and should not be written like personal voice care advice.",
    tags: ["monk fruit", "luo han guo", "tea", "cooling", "grocery crossover"],
  },
  {
    slug: "white-atractylodes-root",
    name: "White Atractylodes Root",
    pinyin: "Bai Zhu",
    chinese: "Bai Zhu",
    latin: "Atractylodis Macrocephalae Rhizoma",
    partUsed: "Rhizome",
    category: "Qi-supporting herbs",
    summary: "A foundational traditional root often used to explain spleen and dampness language.",
    whatItIs:
      "White atractylodes root is not as mainstream as goji or ginger, but it is a strong educational herb for readers ready to go beyond pantry-level beginner pages.",
    nature: "Warm",
    flavor: "Bitter, sweet",
    channels: "Spleen, Stomach",
    traditionalUses: [
      "Traditionally used in discussions of spleen support, dampness language, and steadier digestive context.",
      "Often appears in formulas rather than casual everyday cooking.",
      "Useful for showing readers how foundational roots fit into traditional theory.",
    ],
    foodUses: ["Advanced soup context", "Traditional decoction context"],
    caution:
      "This is a deeper traditional root page and should not encourage casual self-selection from one article alone.",
    tags: ["bai zhu", "spleen language", "dampness", "qi-supporting", "traditional root"],
  },
  {
    slug: "fritillary-bulb",
    name: "Fritillary Bulb",
    pinyin: "Chuan Bei Mu",
    chinese: "Chuan Bei Mu",
    latin: "Fritillariae Cirrhosae Bulbus",
    partUsed: "Bulb",
    category: "Moistening herbs",
    summary: "A classic bulb often searched in relation to pear soups and traditional moisture-themed content.",
    whatItIs:
      "Fritillary bulb is one of those ingredients readers often discover through food tradition pages, especially pear-based recipes, before they fully understand the traditional vocabulary behind it.",
    nature: "Slightly cold",
    flavor: "Bitter, sweet",
    channels: "Heart, Lung",
    traditionalUses: [
      "Traditionally used in discussions of phlegm, dryness, and lung-related language in this framework.",
      "Often appears beside pear and gentle soup-style pairings in food tradition writing.",
      "Useful for connecting moisture-themed kitchen pages with more formal herb naming.",
    ],
    foodUses: ["Pear soup", "Light broth", "Traditional dessert soup context"],
    caution:
      "Because many readers arrive through narrow throat-and-lung searches, the page should remain educational and avoid sounding like directed care.",
    tags: ["chuan bei mu", "pear soup", "moistening", "lung language", "long-tail search"],
  },
  {
    slug: "honeysuckle-flower",
    name: "Honeysuckle Flower",
    pinyin: "Jin Yin Hua",
    chinese: "Jin Yin Hua",
    latin: "Lonicerae Japonicae Flos",
    partUsed: "Flower",
    category: "Tea herbs",
    summary: "A cooling flower with strong tea-style potential and broad traditional recognition.",
    whatItIs:
      "Honeysuckle flower is easier to introduce through tea and seasonal reading than through abstract theory, which makes it useful for long-tail educational searches.",
    nature: "Cold",
    flavor: "Sweet",
    channels: "Lung, Heart, Stomach",
    traditionalUses: [
      "Traditionally used in discussions of heat and seasonal warmth language in this framework.",
      "Often introduced as a floral tea herb with a cleaner cooling identity.",
      "Useful when readers want to compare floral cooling pages beyond chrysanthemum alone.",
    ],
    foodUses: ["Tea", "Floral infusion", "Seasonal drink context"],
    caution:
      "Cooling flower pages should stay contextual and should not present a floral tea as individualized advice.",
    tags: ["jin yin hua", "honeysuckle tea", "cooling flower", "seasonal search", "tea herb"],
  },
  {
    slug: "osmanthus-flower",
    name: "Osmanthus Flower",
    pinyin: "Gui Hua",
    chinese: "Gui Hua",
    latin: "Osmanthi Flos",
    partUsed: "Flower",
    category: "Tea herbs",
    summary: "A fragrant flower that appears in sweet teas, pear drinks, and dessert-style kitchen reading with strong long-tail search appeal.",
    whatItIs:
      "Osmanthus flower is one of the most approachable floral ingredients for readers who want a clear bridge between Chinese tea culture, dessert aromas, and traditional kitchen language.",
    nature: "Warm",
    flavor: "Sweet, slightly pungent",
    channels: "Lung, Spleen, Stomach",
    traditionalUses: [
      "Traditionally used in fragrant kitchen and tea-style writing where warmth and aroma are described in a gentle way.",
      "Often paired with pear, tea, and dessert-style ingredients that keep the page food-first and easy to picture.",
      "Useful for readers searching sweet osmanthus tea, gui hua tea, or floral pantry ingredients in plain English.",
    ],
    foodUses: ["Tea", "Pear tea", "Dessert garnish"],
    caution:
      "Floral tea pages should stay educational and should not turn a fragrant kitchen ingredient into a personal-use claim.",
    tags: ["gui hua", "sweet osmanthus", "osmanthus tea", "floral tea", "long-tail search"],
  },
  {
    slug: "jasmine-flower",
    name: "Jasmine Flower",
    pinyin: "Mo Li Hua",
    chinese: "Mo Li Hua",
    latin: "Jasmini Flos",
    partUsed: "Flower",
    category: "Tea herbs",
    summary: "A widely recognized floral ingredient that helps readers connect jasmine tea searches with calmer traditional kitchen context.",
    whatItIs:
      "Jasmine flower is already familiar to many readers through jasmine tea, which makes it a strong educational page for explaining floral tea culture without drifting into exaggerated language.",
    nature: "Warm",
    flavor: "Sweet, aromatic",
    channels: "Lung, Spleen, Stomach",
    traditionalUses: [
      "Traditionally used in floral tea and fragrance-focused kitchen writing where aroma and light warmth are part of the description.",
      "Often introduced through tea culture, making it easier for readers to understand than more abstract flower pages.",
      "Useful for searches around jasmine flower tea, floral tea ingredients, and beginner-friendly tea traditions.",
    ],
    foodUses: ["Tea", "Floral infusion", "Scented dessert context"],
    caution:
      "Readers should view jasmine flower as a culinary and tea ingredient page, not as a direct how-to page for personal concerns.",
    tags: ["mo li hua", "jasmine tea", "jasmine flower tea", "floral ingredient", "beginner tea"],
  },
  {
    slug: "rose-bud",
    name: "Rose Bud",
    pinyin: "Mei Gui Hua",
    chinese: "Mei Gui Hua",
    latin: "Rosae Rugosae Flos",
    partUsed: "Flower bud",
    category: "Tea herbs",
    summary: "A fragrant flower bud that supports floral tea reading, gentle pantry routines, and plain-English traditional context.",
    whatItIs:
      "Rose bud is easier for many readers to understand through tea culture and kitchen aroma than through abstract traditional terminology, which makes it a strong bridge page for floral ingredient searches.",
    nature: "Warm",
    flavor: "Sweet, slightly bitter",
    channels: "Liver, Spleen",
    traditionalUses: [
      "Traditionally used in discussions of floral aroma, gentle movement language, and calmer tea-style kitchen reading.",
      "Often introduced through tea blends, pantry jars, and fragrant cup routines rather than concentrated product talk.",
      "Useful for readers searching rose bud tea, mei gui hua tea, or floral ingredients in plain English.",
    ],
    foodUses: ["Tea", "Floral infusion", "Pantry tea blends"],
    caution:
      "Floral tea pages should stay food-first and educational. Readers should not treat a fragrant cup as individualized advice.",
    tags: ["mei gui hua", "rose bud tea", "floral tea", "pantry tea", "search-friendly"],
  },
  {
    slug: "mulberry-leaf",
    name: "Mulberry Leaf",
    pinyin: "Sang Ye",
    chinese: "Sang Ye",
    latin: "Mori Folium",
    partUsed: "Leaf",
    category: "Tea herbs",
    summary: "A traditional leaf ingredient that helps readers understand mulberry leaf tea, seasonal cups, and plain-English cooling language.",
    whatItIs:
      "Mulberry leaf is easier to explain as a tea and seasonal kitchen ingredient than as a product keyword, which makes it useful for readers who want a calmer introduction to leaf-based traditional terminology.",
    nature: "Cool",
    flavor: "Sweet, bitter",
    channels: "Lung, Liver",
    traditionalUses: [
      "Traditionally used in discussions of seasonal warmth, dryness language, and leaf-based tea context in this framework.",
      "Often introduced through mulberry leaf tea and comparison reading beside chrysanthemum or mint.",
      "Useful for readers searching sang ye tea, mulberry leaf tea, or simple seasonal tea ingredients.",
    ],
    foodUses: ["Tea", "Seasonal infusion", "Light pear tea pairings"],
    caution:
      "Because many readers arrive through narrow condition-style searches, this page should remain educational and avoid sounding like directed care.",
    tags: ["sang ye", "mulberry leaf tea", "tea herb", "seasonal tea", "plain english"],
  },
  {
    slug: "lotus-leaf",
    name: "Lotus Leaf",
    pinyin: "He Ye",
    chinese: "He Ye",
    latin: "Nelumbinis Folium",
    partUsed: "Leaf",
    category: "Tea herbs",
    summary: "A broad, recognizable leaf ingredient that helps readers explore lotus leaf tea and light summer pantry traditions in plain English.",
    whatItIs:
      "Lotus leaf is easiest to understand as a visual tea and kitchen ingredient rather than as a narrow search claim, which makes it a useful bridge for readers exploring Chinese pantry tea culture.",
    nature: "Neutral to slightly cool",
    flavor: "Bitter, mild",
    channels: "Liver, Spleen, Stomach",
    traditionalUses: [
      "Traditionally used in seasonal kitchen writing, light tea language, and broader discussions of summer-style food routines.",
      "Often introduced through lotus leaf tea, pantry jars, or gentle comparisons beside chrysanthemum, mint, and floral cups.",
      "Useful for readers searching lotus leaf tea, he ye tea, or simple Chinese tea ingredients in plain English.",
    ],
    foodUses: ["Tea", "Seasonal infusion", "Light pantry tea blends"],
    caution:
      "This page should stay educational and food-first. Lotus leaf searches often carry strong expectations, so the copy should avoid directed or outcome-heavy language.",
    tags: ["he ye", "lotus leaf tea", "tea leaf", "summer tea", "pantry tea"],
  },
  {
    slug: "burdock-root",
    name: "Burdock Root",
    pinyin: "Niu Bang Gen",
    chinese: "Niu Bang Gen",
    latin: "Arctii Radix",
    partUsed: "Root",
    category: "Tea herbs",
    summary: "A familiar root ingredient that gives burdock root tea and earthy pantry drinks a clearer place in traditional kitchen reading.",
    whatItIs:
      "Burdock root is easier for many readers to trust when framed as an earthy kitchen ingredient and tea root rather than a concentrated product keyword, which fits HerbGuide's pantry-first style well.",
    nature: "Neutral",
    flavor: "Sweet, slightly bitter",
    channels: "Lung, Stomach",
    traditionalUses: [
      "Traditionally used in tea and root-ingredient discussions that emphasize kitchen context, earthy flavor, and broader seasonal reading.",
      "Often introduced through burdock root tea, simple simmered drinks, or comparisons with pear, chrysanthemum, and other approachable pantry ingredients.",
      "Useful for readers searching burdock root tea, niu bang gen, or earthy Chinese-style tea ingredients.",
    ],
    foodUses: ["Tea", "Light simmered drink", "Pantry root pairings"],
    caution:
      "Because root-tea searches can drift into strong promise language, this page should remain descriptive, kitchen-focused, and clearly non-individualized.",
    tags: ["niu bang gen", "burdock root tea", "root tea", "earthy tea", "kitchen ingredient"],
  },
  {
    slug: "cassia-seed",
    name: "Cassia Seed",
    pinyin: "Jue Ming Zi",
    chinese: "Jue Ming Zi",
    latin: "Cassiae Semen",
    partUsed: "Seed",
    category: "Tea herbs",
    summary: "A widely searched seed ingredient that helps readers explore cassia seed tea through light, kitchen-first traditional context.",
    whatItIs:
      "Cassia seed is easier to trust when framed as a roasted-seed tea ingredient and pantry tradition rather than as a narrow outcome keyword, which makes it a strong fit for HerbGuide's cautious style.",
    nature: "Cool",
    flavor: "Bitter, sweet, mild",
    channels: "Liver, Large Intestine",
    traditionalUses: [
      "Traditionally used in tea and seed-ingredient writing that emphasizes seasonal lightness and plain-English kitchen context.",
      "Often introduced through cassia seed tea, roasted pantry seeds, or calm comparisons with chrysanthemum, lotus leaf, and other light tea pages.",
      "Useful for readers searching cassia seed tea, jue ming zi tea, or roasted seed tea in simple language.",
    ],
    foodUses: ["Tea", "Roasted seed infusion", "Seasonal pantry tea"],
    caution:
      "This page should stay educational and avoid turning popular seed-tea searches into directed promises or personalized suggestions.",
    tags: ["jue ming zi", "cassia seed tea", "roasted seed tea", "seasonal tea", "search-friendly"],
  },
  {
    slug: "corn-silk",
    name: "Corn Silk",
    pinyin: "Yu Mi Xu",
    chinese: "Yu Mi Xu",
    latin: "Maydis Stigma",
    partUsed: "Silk",
    category: "Tea herbs",
    summary: "A familiar pantry ingredient that gives corn silk tea a gentle, food-first place in seasonal kitchen reading.",
    whatItIs:
      "Corn silk makes sense to many readers right away because it starts from a familiar food ingredient, which helps the page answer corn silk tea searches without slipping into overclaiming.",
    nature: "Neutral",
    flavor: "Sweet, mild",
    channels: "Bladder, Liver, Gallbladder",
    traditionalUses: [
      "Traditionally used in light tea and seasonal kitchen discussions where familiar food ingredients help readers picture the material more clearly.",
      "Often introduced through corn silk tea, simple simmered cups, or pantry-style pairings with pear, lotus leaf, or mild seeds.",
      "Useful for readers searching corn silk tea, yu mi xu, or gentle pantry tea ingredients in plain English.",
    ],
    foodUses: ["Tea", "Light simmered drink", "Pantry tea pairing"],
    caution:
      "Because this ingredient feels familiar, the page should be especially careful not to blur educational context into personal guidance.",
    tags: ["yu mi xu", "corn silk tea", "pantry tea", "mild tea", "seasonal ingredient"],
  },
  {
    slug: "gardenia-fruit",
    name: "Gardenia Fruit",
    pinyin: "Zhi Zi",
    chinese: "Zhi Zi",
    latin: "Gardeniae Fructus",
    partUsed: "Fruit",
    category: "Tea herbs",
    summary: "A vivid traditional fruit that helps explain stronger cooling language in plain English.",
    whatItIs:
      "Gardenia fruit is not a first-step pantry herb for everyone, but it is useful for readers who keep running into stronger heat-clearing language online and want a calmer explanation.",
    nature: "Cold",
    flavor: "Bitter",
    channels: "Heart, Lung, Stomach, Liver, San Jiao",
    traditionalUses: [
      "Traditionally used in discussions involving stronger heat language and irritability-related descriptions in this framework.",
      "Often appears in more advanced educational reading than mainstream kitchen pages.",
      "Useful for teaching readers that not every cooling herb fits the same tone or depth.",
    ],
    foodUses: ["Advanced tea context", "Traditional color-infused preparations"],
    caution:
      "This page should stay clearly educational and avoid turning stronger traditional terminology into personal labeling.",
    tags: ["zhi zi", "gardenia fruit", "clear heat language", "advanced cooling", "search intent"],
  },
  {
    slug: "cinnamon-bark",
    name: "Cinnamon Bark",
    pinyin: "Rou Gui",
    chinese: "Rou Gui",
    latin: "Cinnamomi Cortex",
    partUsed: "Bark",
    category: "Warming herbs",
    summary: "A classic warming bark that helps readers separate pantry cinnamon from deeper traditional bark terminology.",
    whatItIs:
      "Cinnamon bark is especially useful for SEO and reader clarity because many people assume every cinnamon page means the same ingredient, which is not how traditional writing handles it.",
    nature: "Hot",
    flavor: "Pungent, sweet",
    channels: "Kidney, Spleen, Heart, Liver",
    traditionalUses: [
      "Traditionally used in warming language that is deeper and stronger than casual kitchen spice talk.",
      "Often contrasted with cinnamon twig in educational reading.",
      "Useful for showing why herb part, processing, and naming matter.",
    ],
    foodUses: ["Broth context", "Warm decoction context", "Spice comparison content"],
    caution:
      "This page should not turn a familiar spice name into casual overuse language. Strong warming content needs visible boundaries.",
    tags: ["rou gui", "cinnamon bark", "warming herb", "spice comparison", "search-friendly"],
  },
  {
    slug: "angelica-dahurica-root",
    name: "Angelica Dahurica Root",
    pinyin: "Bai Zhi",
    chinese: "Bai Zhi",
    latin: "Angelicae Dahuricae Radix",
    partUsed: "Root",
    category: "Exterior-related herbs",
    summary: "A classic root that helps explain exterior and aromatic traditional language with more depth.",
    whatItIs:
      "Angelica dahurica root is not the same herb as dong quai, and that distinction alone makes it a useful educational page for search-driven readers.",
    nature: "Warm",
    flavor: "Pungent",
    channels: "Lung, Stomach",
    traditionalUses: [
      "Traditionally used in exterior-related writing and aromatic root discussions in this framework.",
      "Often appears in more advanced classical or formula contexts.",
      "Useful for teaching readers that similar English family names do not mean the same herb role.",
    ],
    foodUses: ["Advanced broth context", "Traditional aromatic preparations"],
    caution:
      "This is a context-building herb page and should not read like a direct response to narrow discomfort searches.",
    tags: ["bai zhi", "angelica root", "exterior herb", "aromatic root", "search depth"],
  },
  {
    slug: "balloon-flower-root",
    name: "Balloon Flower Root",
    pinyin: "Jie Geng",
    chinese: "Jie Geng",
    latin: "Platycodonis Radix",
    partUsed: "Root",
    category: "Exterior-related herbs",
    summary: "A widely recognized traditional root that often appears in lung-related searches and needs careful wording.",
    whatItIs:
      "Balloon flower root is useful for long-tail SEO because readers often find the pinyin or English name in traditional formula content and want a plain-English explanation.",
    nature: "Neutral",
    flavor: "Bitter, pungent",
    channels: "Lung",
    traditionalUses: [
      "Traditionally used in discussions involving the lung and upper-body directional language in this framework.",
      "Often appears in educational reading about herb direction and delivery concepts.",
      "Useful for explaining why some roots are known more for placement in formulas than for mainstream pantry familiarity.",
    ],
    foodUses: ["Advanced soup context", "Traditional root preparation context"],
    caution:
      "Because this herb can attract direct upper-body comfort searches, the page should remain educational and not suggest personal use guidance.",
    tags: ["jie geng", "balloon flower root", "lung language", "formula context", "long-tail SEO"],
  },
  {
    slug: "fo-ti-root",
    name: "Fo-Ti Root",
    pinyin: "He Shou Wu",
    chinese: "He Shou Wu",
    latin: "Polygoni Multiflori Radix",
    partUsed: "Prepared or raw root",
    category: "Kidney-related herbs",
    summary: "A famous traditional root with strong search volume and a strong need for caution-first copy.",
    whatItIs:
      "Fo-ti root is one of the most searched traditional herbs in English, but it is also one of the clearest examples of why reputation and folklore should not replace careful educational framing.",
    nature: "Slightly warm",
    flavor: "Bitter, sweet, astringent",
    channels: "Liver, Kidney",
    traditionalUses: [
      "Traditionally used in discussions involving liver and kidney language, essence, and long-term nourishment themes.",
      "Often surrounded by longevity, hair, and age-defying folklore that should be described carefully rather than amplified.",
      "Useful for showing readers how to separate legend, tradition, and responsible caution.",
    ],
    foodUses: ["Advanced tonic cooking context", "Prepared root context"],
    caution:
      "This page needs especially visible caution. Readers should not infer safety, suitability, or product quality from folklore or search popularity.",
    tags: ["fo-ti", "he shou wu", "longevity search", "kidney-related", "high caution"],
  },
  {
    slug: "barley-sprout",
    name: "Barley Sprout",
    pinyin: "Mai Ya",
    chinese: "Mai Ya",
    latin: "Hordei Fructus Germinatus",
    partUsed: "Sprouted grain",
    category: "Digestive herbs",
    summary: "A grain-based traditional ingredient that helps explain food accumulation and digestive reading in simple terms.",
    whatItIs:
      "Barley sprout is a useful long-tail herb page because it feels more like a food tradition ingredient than a mysterious supplement, which helps keep digestive content grounded.",
    nature: "Neutral",
    flavor: "Sweet",
    channels: "Spleen, Stomach, Liver",
    traditionalUses: [
      "Traditionally used in discussions of food accumulation and smoother post-meal movement language in this framework.",
      "Often grouped with other digestant-style ingredients in traditional education.",
      "Useful for connecting grain familiarity with more formal digestive herb vocabulary.",
    ],
    foodUses: ["Tea", "Light porridge context", "Digestive grain context"],
    caution:
      "Digestive pages should not imply that a grain-based herb is a direct answer to ongoing concerns or personal questions.",
    tags: ["mai ya", "digestive herb", "grain", "food stagnation language", "searchable"],
  },
  {
    slug: "tangerine-peel",
    name: "Tangerine Peel",
    pinyin: "Ju Pi",
    chinese: "Ju Pi",
    latin: "Citri Reticulatae Pericarpium Viride",
    partUsed: "Dried citrus peel",
    category: "Digestive herbs",
    summary: "A familiar citrus peel ingredient that supports pantry-style digestive reading and long-tail tea searches.",
    whatItIs:
      "Tangerine peel helps readers connect ordinary citrus kitchen scraps with traditional pantry logic, which makes it a strong search-friendly page without drifting into risky copy.",
    nature: "Warm",
    flavor: "Pungent, bitter",
    channels: "Lung, Spleen",
    traditionalUses: [
      "Traditionally used in discussions of aromatic movement, food heaviness, and smoother kitchen flow language.",
      "Often explained beside chen pi so readers can understand why citrus peel shows up in more than one traditional form.",
      "Useful for meal-friendly tea, broth, and pantry habit content built around familiar ingredients.",
    ],
    foodUses: ["Tea", "Soup", "Pantry citrus peel cooking"],
    caution:
      "Readers should view this page as educational pantry context rather than a direct suggestion for ongoing meal-related concerns.",
    tags: ["ju pi", "citrus peel tea", "digestive pantry", "meal-friendly", "long-tail search"],
  },
  {
    slug: "dried-orange-peel",
    name: "Dried Orange Peel",
    pinyin: "Gan Ju Pi",
    chinese: "Gan Ju Pi",
    latin: "Citri Exocarpium Siccatum",
    partUsed: "Dried peel",
    category: "Kitchen herbs",
    summary: "A pantry-friendly peel ingredient that expands citrus-based kitchen reading with clear food-first language.",
    whatItIs:
      "Dried orange peel is easier for many readers to picture than more formal materia medica names, which makes it useful for long-tail searches around pantry tea, soup flavor, and citrus peel kitchen use.",
    nature: "Warm",
    flavor: "Aromatic, slightly bitter",
    channels: "Lung, Spleen, Stomach",
    traditionalUses: [
      "Traditionally used in kitchen writing around aromatic citrus peel, food heaviness, and balancing richer flavors.",
      "Often appears in tea and broth content where readers want familiar ingredients with traditional context.",
      "Useful for showing how food-first citrus peel pages differ from stronger or more aged peel discussions.",
    ],
    foodUses: ["Tea", "Broth", "Dessert peel garnish"],
    caution:
      "Food-first language should stay practical. This page should not imply that a simple peel routine replaces careful attention to ongoing needs.",
    tags: ["orange peel tea", "kitchen citrus", "pantry herb", "warming peel", "seo long tail"],
  },
  {
    slug: "amomum-fruit",
    name: "Amomum Fruit",
    pinyin: "Sha Ren",
    chinese: "Sha Ren",
    latin: "Amomi Fructus",
    partUsed: "Fruit",
    category: "Digestive herbs",
    summary: "An aromatic digestive fruit that helps explain movement and dampness language together.",
    whatItIs:
      "Amomum fruit is especially useful for readers who want to understand why traditional digestive pages often combine aromatic, warming, and dampness-related language.",
    nature: "Warm",
    flavor: "Pungent",
    channels: "Spleen, Stomach, Kidney",
    traditionalUses: [
      "Traditionally used in discussions of digestive movement, dampness, and aromatic warming context.",
      "Often appears in deeper kitchen or formula reading rather than casual beginner tea pages.",
      "Useful for showing how one herb can sit at the overlap of several traditional ideas at once.",
    ],
    foodUses: ["Broth context", "Rice porridge context", "Aromatic digestive cooking"],
    caution:
      "This page should stay educational and should not turn digestive vocabulary into direct personal-use logic.",
    tags: ["sha ren", "amomum", "digestive herb", "aromatic", "dampness language"],
  },
  {
    slug: "safflower",
    name: "Safflower",
    pinyin: "Hong Hua",
    chinese: "Hong Hua",
    latin: "Carthami Flos",
    partUsed: "Flower",
    category: "Movement herbs",
    summary: "A striking flower often searched in traditional blood-movement contexts and best handled with restraint.",
    whatItIs:
      "Safflower is visually memorable and highly searchable, but traditional herb pages about it need very careful boundaries because the flower is often tied to specific, high-risk searches.",
    nature: "Warm",
    flavor: "Pungent",
    channels: "Heart, Liver",
    traditionalUses: [
      "Traditionally used in blood-movement discussions and more active traditional language.",
      "Often introduced in more advanced classical or formula study than beginner pantry pages.",
      "Useful for teaching readers how stronger movement herbs differ from gentle kitchen ingredients.",
    ],
    foodUses: ["Traditional infusion context", "Color-focused culinary context"],
    caution:
      "This page should be especially careful. It should not encourage use in high-caution situations or other contexts where direct guidance belongs elsewhere.",
    tags: ["hong hua", "safflower", "movement herb", "flower", "high-caution search"],
  },
  {
    slug: "skullcap-root",
    name: "Skullcap Root",
    pinyin: "Huang Qin",
    chinese: "Huang Qin",
    latin: "Scutellariae Radix",
    partUsed: "Root",
    category: "Tea herbs",
    summary: "A classic root with strong search demand around heat and dampness language in traditional writing.",
    whatItIs:
      "Skullcap root, especially under the pinyin name huang qin, helps readers understand that some widely searched roots belong to more serious traditional language than casual pantry herbs do.",
    nature: "Cold",
    flavor: "Bitter",
    channels: "Lung, Stomach, Gallbladder, Large Intestine",
    traditionalUses: [
      "Traditionally used in discussions involving heat, dampness, and upper-body irritation language in this framework.",
      "Often grouped with stronger clearing herbs rather than gentle kitchen ingredients.",
      "Useful for helping readers separate serious classical language from lifestyle buzzwords.",
    ],
    foodUses: ["Advanced decoction context", "Traditional tea context"],
    caution:
      "This is not a casual tea page. The copy should stay educational and avoid sounding like direct personal advice for acute concerns.",
    tags: ["huang qin", "skullcap root", "heat language", "dampness", "high search volume"],
  },
  {
    slug: "bupleurum-root",
    name: "Bupleurum Root",
    pinyin: "Chai Hu",
    chinese: "Chai Hu",
    latin: "Bupleuri Radix",
    partUsed: "Root",
    category: "Movement herbs",
    summary: "A famous traditional root that shows up in many formula discussions and high-intent searches.",
    whatItIs:
      "Bupleurum root is one of the best educational herbs for readers who keep seeing liver qi language, formula names, or pinyin searches and want a responsible explanation.",
    nature: "Cool",
    flavor: "Bitter, pungent",
    channels: "Liver, Gallbladder, Pericardium, San Jiao",
    traditionalUses: [
      "Traditionally used in discussions of constrained liver qi, outward movement, and layered pattern language in this framework.",
      "Often introduced through formula study more than through casual kitchen reading.",
      "Useful for explaining why some famous roots are conceptually important even when they are not beginner pantry herbs.",
    ],
    foodUses: ["Advanced decoction context", "Formula study context"],
    caution:
      "This page should keep a strong educational tone and should not invite readers to self-assign pattern labels from search terms alone.",
    tags: ["chai hu", "bupleurum root", "liver qi language", "formula herb", "strong SEO"],
  },
  {
    slug: "ginkgo-leaf",
    name: "Ginkgo Leaf",
    pinyin: "Yin Xing Ye",
    chinese: "Yin Xing Ye",
    latin: "Ginkgo Folium",
    partUsed: "Leaf",
    category: "Exterior-related herbs",
    summary: "A widely recognized leaf herb that benefits from plain-English context and caution-first traditional framing.",
    whatItIs:
      "Ginkgo leaf is already familiar to many English-language readers, but its search traffic often mixes supplement marketing, traditional herb terms, and general curiosity. This page keeps the focus on naming clarity, traditional context, and safer educational language.",
    nature: "Neutral",
    flavor: "Sweet, bitter, astringent",
    channels: "Lung",
    traditionalUses: [
      "Traditionally discussed in relation to lung-related language and more specialized classical contexts.",
      "Often better understood as a library-and-terminology herb than as a beginner kitchen staple.",
      "Useful for readers who want to separate traditional herb identity from modern product marketing.",
    ],
    foodUses: ["Advanced tea context", "Educational herb context"],
    caution:
      "Because ginkgo is widely marketed online, this page should stay especially careful about not turning traditional context into personal advice or broad product encouragement.",
    tags: ["ginkgo leaf", "yin xing ye", "ginkgo herb", "traditional herb guide", "high search volume"],
  },
  {
    slug: "turmeric-root",
    name: "Turmeric Root",
    pinyin: "Jiang Huang",
    chinese: "Jiang Huang",
    latin: "Curcumae Longae Rhizoma",
    partUsed: "Rhizome",
    category: "Movement herbs",
    summary: "A globally familiar yellow root that needs clearer traditional context, naming, and safety boundaries.",
    whatItIs:
      "Turmeric root is one of the most searched yellow roots in English, but many readers do not realize that traditional Chinese herb writing treats jiang huang as a specific herb identity with its own role and context. This page helps bridge that gap without hype.",
    nature: "Warm",
    flavor: "Pungent, bitter",
    channels: "Spleen, Liver",
    traditionalUses: [
      "Traditionally discussed in relation to movement language, especially in more advanced classical contexts.",
      "Often better understood through naming, category, and food-versus-herb distinction than through oversimplified wellness claims.",
      "Useful for readers who want to connect a familiar kitchen spice with a more precise traditional herb identity.",
    ],
    foodUses: ["Broth context", "Root tea context", "Educational kitchen context"],
    caution:
      "Turmeric is common in food, but concentrated products and traditional herb use are not the same thing. The page should stay educational and avoid blanket recommendations.",
    tags: ["turmeric root", "jiang huang", "what is turmeric root", "yellow root herb", "high search volume"],
  },
];

export const herbs = rawHerbs.map((herb) => sanitizeHerbContent(herb));

export const featuredHerbs = herbs.slice(0, 6);

const normalizeLabel = (value: string) => value.trim().replace(/\s+/g, " ");

const herbCategoryAliases: Record<string, string[]> = {
  "Nourishing herbs": ["nourishing", "gentle", "restorative", "daily support"],
  "Qi-supporting herbs": ["qi", "supportive", "steady", "foundational"],
  "Kitchen herbs": ["kitchen", "pantry", "daily cooking", "food-first"],
  "Tea herbs": ["tea", "light", "seasonal", "sipping"],
  "Digestive herbs": ["digestive", "post-meal", "heaviness", "aromatic"],
  "Dampness-related herbs": ["dampness", "lightness", "grain-style", "plain soups"],
  "Harmonizing herbs": ["harmonizing", "blending", "middle-ground", "formula context"],
  "Astringent herbs": ["astringent", "holding", "five-flavor", "focused use"],
  "Warming herbs": ["warming", "cold weather", "comfort", "warming soups"],
  "Movement herbs": ["movement", "circulation language", "qi movement", "traditional flow"],
  "Blood-related herbs": ["blood-related", "nourishment language", "traditional blood", "deeper support"],
  "Moistening herbs": ["moistening", "softening", "dryness language", "gentle fluids"],
  "Exterior-related herbs": ["seasonal", "aromatic", "outer layer", "weather-related"],
  "Kidney-related herbs": ["kidney-related", "deep reserves", "long-term support", "traditional depth"],
};

const getNatureAliases = (nature: string) => {
  const value = nature.toLowerCase();
  const aliases = new Set<string>();
  if (value.includes("warm") || value.includes("hot")) {
    aliases.add("warming");
    aliases.add("comfort");
    aliases.add("cold weather");
  }
  if (value.includes("cool") || value.includes("cold")) {
    aliases.add("cooling");
    aliases.add("light");
    aliases.add("seasonal heat");
  }
  if (value.includes("neutral")) {
    aliases.add("balanced");
    aliases.add("gentle");
  }
  return Array.from(aliases);
};

export const getHerbDisplayNames = (herb: Herb): HerbDisplayNames => {
  const secondary = [herb.pinyin, herb.chinese, herb.latin]
    .map(normalizeLabel)
    .filter((value, index, items) => value && value !== herb.name && items.indexOf(value) === index);
  const guidePhrases = [
    `${herb.name} guide`,
    `${herb.name} uses`,
    `what is ${herb.name}`,
    `how to use ${herb.name}`,
    `${herb.name} safety`,
    `${herb.pinyin} guide`,
  ];

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
      ...(herbCategoryAliases[herb.category] ?? []),
      ...getNatureAliases(herb.nature),
      ...herb.tags,
      ...herb.foodUses,
      ...guidePhrases,
    ]
      .map(normalizeLabel)
      .join(" ")
      .toLowerCase(),
  };
};
