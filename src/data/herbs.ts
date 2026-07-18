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
  commonNames?: string;
  arabicName?: string;
  traditionalUses: string[];
  foodUses: string[];
  caution: string;
  cautionDetails?: string[];
  references?: string[];
  scientificSections?: Array<{
    title: string;
    paragraphs: string[];
  }>;
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
    chinese: "枸杞子",
    latin: "Lycium barbarum",
    partUsed: "Dried fruit",
    category: "Yin-supporting herbs",
    commonNames: "Goji Berry, Wolfberry",
    arabicName: "غوجي (Goji) / توت الذئب (Toot Al-Dhib)",
    summary: "A small, vibrant red fruit native to Asia — a quiet essential staple in East Asian kitchens for thousands of years. This guide explores its traditional roots, its role as a deeply nourishing ingredient, and what modern nutritional science reveals about its benefits.",
    whatItIs:
      "The goji berry, or wolfberry, is a small, vibrant red fruit native to Asia. While it has recently gained global fame as a 'superfood' added to smoothies and granola, it has been a quiet, essential staple in East Asian kitchens for thousands of years. In its traditional context, goji is not treated as a quick energy booster, but rather as a deeply nourishing ingredient that builds long-term reserves. It is prized for its sweet, pleasant flavor, making it one of the easiest traditional herbs to incorporate into daily meals. This page explores its traditional roots and what modern nutritional science reveals about its benefits.",
    nature: "Neutral",
    flavor: "Sweet",
    channels: "Liver, Kidney, Lung",
    traditionalUses: [
      "In traditional Chinese herb frameworks, Goji Berry (Gou Qi Zi) is categorized as an herb that tonifies Yin and Blood. It is associated with the Liver, Kidney, and Lung channels. In this system, the Liver is closely connected to eye health and blood storage, while the Kidney is considered the root of the body's foundational essence (Jing).",
      "Nourishing the Liver and Kidneys to support healthy vision and bright eyes — one of its most recognized traditional roles.",
      "Enriching Yin to moisten the Lungs, often used when the body feels dry or depleted.",
      "A gentle, neutral-temperature ingredient that can be used long-term without causing excess heat — a foundational ingredient for supporting healthy aging and vitality.",
    ],
    foodUses: ["Soups and broths (last 15 minutes of simmering)", "Teas with chrysanthemum or jujube", "Congee (rice porridge)"],
    caution:
      "This page is an educational reference built around traditional herb writing and publicly available research summaries. It is not a wellness recommendation, a substitute for professional guidance, or a claim that this herb is appropriate for any specific person.",
    cautionDetails: [
      "Product interactions: While goji berries are a common food, they can interact with certain medications. Individuals taking products that affect circulation (such as warfarin or other blood thinners) or medications for managing blood pressure and blood sugar should seek guidance from a qualified professional, as goji may amplify the effects of these drugs.",
      "When to pause: Traditional frameworks suggest that because goji berries are rich and nourishing (cloying), they should be paused when experiencing an acute onset of symptoms, such as a sudden cold, fever, or significant digestive dampness (heavy bloating).",
    ],
    scientificSections: [
      {
        title: "Vision and Eye Health",
        paragraphs: [
          "One of the most well-documented benefits of goji berries aligns closely with its traditional use for the eyes. Goji berries are exceptionally high in zeaxanthin and lutein, powerful antioxidants that accumulate in the retina. Research indicates that regular consumption of goji berries may help increase macular pigment density, offering protective support against age-related macular degeneration and oxidative stress from blue light.",
        ],
      },
      {
        title: "Antioxidant and Immune Support",
        paragraphs: [
          "Goji berries contain unique complex carbohydrates known as Lycium barbarum polysaccharides (LBPs). These compounds have been extensively studied for their antioxidant properties. They help neutralize free radicals, thereby protecting cells from oxidative damage. Furthermore, studies suggest these polysaccharides may play a role in supporting healthy immune function and enhancing the body's natural defense mechanisms.",
        ],
      },
      {
        title: "Nutritional Density",
        paragraphs: [
          "From a purely nutritional standpoint, goji berries are remarkably rich. A small serving provides a significant amount of dietary fiber, protein (unusual for a fruit), and essential minerals like iron. They are also an excellent source of Vitamin A and Vitamin C, both of which are critical for maintaining healthy skin, vision, and immune resilience.",
        ],
      },
    ],
    references: [
      "[1] Healthline. What are Goji Berries? This Unique Red Fruit, Explained. https://www.healthline.com/nutrition/goji-berry",
    ],
    tags: ["goji berry", "gou qi zi", "wolfberry", "lycium barbarum", "yin-supporting herbs", "eye health", "traditional Chinese berries", "zeaxanthin"],
  },
  {
    slug: "astragalus-root",
    name: "Astragalus Root",
    pinyin: "Huang Qi",
    chinese: "黄芪",
    latin: "Astragali Radix",
    partUsed: "Root",
    category: "Qi-supporting herbs",
    summary: "A foundational soup herb often used in traditional writing about qi and seasonal routines. This deeper guide explains its role in winter kitchens, alongside insights from modern nutritional science and authoritative health databases.",
    whatItIs:
      "Astragalus looks like flat, pale yellow wooden tongue depressors. It is one of the most important ingredients in the traditional Chinese kitchen for supporting everyday resilience and vitality. Its Chinese name, Huang Qi, translates to 'Yellow Leader,' reflecting its esteemed status in herbal traditions.",
    nature: "Slightly warming",
    flavor: "Sweet",
    channels: "Lung, Spleen",
    commonNames: "Milkvetch, Huang Qi, Yellow Leader, Tragacanth",
    arabicName: "القتاد (Al-Qatad) / عشبة القتاد",
    traditionalUses: [
      "Traditionally used in discussions of qi, often described in English as functional vitality.",
      "Frequently used in long-simmered soups and broth-focused food traditions.",
      "Often associated with defensive qi (Wei Qi) and seasonal context in traditional writing, meant to build a protective barrier against seasonal changes.",
    ],
    foodUses: ["Soup", "Broth", "Decoction"],
    caution:
      "Astragalus is generally considered appropriate for most people when used in everyday food amounts or as a standard dietary supplement. That said, a few practical notes are worth keeping in mind [1] [3]:",
    cautionDetails: [
      "Immune-modulating supplements: Because astragalus may encourage the body's natural defenses, those already taking supplements or products that affect immune function should check with a qualified professional before adding it regularly.",
      "Blood-support supplements: Astragalus may interact with certain supplements or products that affect circulation; those using such products regularly are encouraged to seek guidance.",
      "Blood pressure context: Astragalus has been associated with mild blood pressure support in some studies; those already managing their blood pressure with lifestyle or supplemental approaches should be aware of this.",
      "Autoimmune context: Individuals managing autoimmune conditions are encouraged to consult a qualified professional, as immune encouragement may not be appropriate in all situations.",
      "Traditional caution: In traditional kitchen writing, astragalus is typically set aside when someone is already experiencing an acute onset of symptoms — it is considered a foundation-building ingredient, best used during stable, everyday routines rather than during active discomfort.",
    ],
    scientificSections: [
      {
        title: "Nutritional and Active Compounds",
        paragraphs: [
          "Beneficial effects of astragalus are largely attributed to its active plant compounds, specifically polysaccharides, triterpenoid saponins (such as astragaloside IV), and flavonoids [2]. These compounds have been studied for their antioxidant and anti-inflammatory properties.",
        ],
      },
      {
        title: "Immune System Support",
        paragraphs: [
          "According to the National Center for Complementary and Integrative Health (NCCIH), astragalus is widely discussed in the context of supporting the body's natural defenses [1]. Some reviews suggest that astragalus may help encourage the body's own protective responses, including supporting white blood cell activity and helping to moderate certain inflammatory markers — though many studies remain small in scale and further research is ongoing [1] [3].",
        ],
      },
      {
        title: "Cardiovascular and Kidney Wellness",
        paragraphs: [
          "Research highlighted by Memorial Sloan Kettering Cancer Center (MSKCC) indicates that astragalus has been studied for its potential to support cardiovascular and kidney wellness. In some observational studies, astragalus-based preparations were associated with improved markers of kidney function and better outcomes in certain heart-related wellness programs when used alongside standard lifestyle approaches [2] [3]. Note: While these findings are of interest to researchers, astragalus is a food and dietary ingredient — it is not a substitute for professional guidance or standard wellness care.",
        ],
      },
    ],
    references: [
      "[1] National Center for Complementary and Integrative Health (NCCIH). Astragalus. U.S. Department of Health & Human Services. https://www.nccih.nih.gov/health/astragalus",
      "[2] Memorial Sloan Kettering Cancer Center (MSKCC). Astragalus: Purported Benefits, Side Effects & More. Integrative Medicine Service. https://www.mskcc.org/cancer-care/integrative-medicine/herbs/astragalus",
      "[3] Healthline. Astragalus: An Ancient Root With Health Benefits. Medically reviewed by Debra Rose Wilson, PhD. https://www.healthline.com/nutrition/astragalus",
    ],
    tags: ["root", "soup", "qi", "warming", "adaptogen", "immunity"],
  },
  {
    slug: "fresh-ginger",
    name: "Fresh Ginger",
    pinyin: "Sheng Jiang",
    chinese: "生姜",
    latin: "Zingiber officinale",
    partUsed: "Fresh rhizome (underground stem)",
    category: "Warming herbs",
    commonNames: "Fresh Ginger, Ginger Root",
    arabicName: "زنجبيل (Zanjabil)",
    summary: "One of the most universally recognized ingredients in the world — a foundational culinary spice and highly respected traditional herb. This guide explores its gentle dispersing warmth, traditional context, kitchen uses, and what modern science says about its active compounds.",
    whatItIs:
      "Fresh ginger is one of the most universally recognized ingredients in the world, serving as both a foundational culinary spice and a highly respected traditional herb. Unlike dried ginger (Gan Jiang), which is considered much hotter and heavier, fresh ginger (Sheng Jiang) is valued for its gentle, dispersing warmth. It is a staple in East Asian kitchens, often used to balance cold ingredients or support digestion during heavy meals. While it is easily accessible in any grocery store, understanding its traditional context elevates it from a simple flavoring to a functional kitchen tool. This page explores both its traditional applications and what modern science says about its active compounds.",
    nature: "Warm",
    flavor: "Pungent (Spicy)",
    channels: "Lung, Spleen, Stomach",
    traditionalUses: [
      "In traditional Chinese herb frameworks, Fresh Ginger (Sheng Jiang) is placed in the category of herbs that release the exterior and dispel cold. It is associated with the Lung, Spleen, and Stomach channels. In this framework, the Spleen and Stomach govern digestion, while the Lung governs the body's outer defensive layer.",
      "Warming the middle and supporting the stomach's digestive fire — a key role in traditional digestive language.",
      "Dispersing surface cold, often used when experiencing the very first signs of an acute chill.",
      "Reducing the heavy, cloying nature of certain foods (like seafood or fatty meats) — a balancing ingredient used to harmonize other, harsher herbs in traditional broths.",
    ],
    foodUses: ["Ginger tea with jujube or brown sugar", "Balancing seafood dishes", "Warming soups and broths"],
    caution:
      "This page is an educational reference built around traditional herb writing and publicly available research summaries. It is not a wellness recommendation, a substitute for professional guidance, or a claim that this herb is appropriate for any specific person.",
    cautionDetails: [
      "Product interactions: Fresh ginger in normal culinary amounts is generally safe. However, concentrated ginger supplements have blood-thinning properties. Individuals taking products that affect circulation (such as warfarin or other blood thinners) or nonsteroidal anti-inflammatory drugs (NSAIDs) should seek guidance from a qualified professional before using ginger supplements.",
      "Surgical considerations: Due to its potential to affect blood coagulation, concentrated ginger products should be paused at least two weeks before any scheduled surgery.",
      "Gallbladder wellness: Individuals with gallstones should be aware that ginger may increase the flow of bile, and should seek professional guidance before consuming large amounts.",
    ],
    scientificSections: [
      {
        title: "Digestive Wellness and Nausea",
        paragraphs: [
          "A significant body of research supports ginger's role in gastrointestinal wellness. Clinical studies have consistently shown that ginger compounds can stimulate the flow of saliva and digestive secretions, helping to calm the stomach. The National Center for Complementary and Integrative Health (NCCIH) notes that research supports its use for pregnancy-related nausea, and it is widely studied for its ability to promote gastric emptying and feelings of satiety.",
        ],
      },
      {
        title: "Anti-inflammatory and Antioxidant Properties",
        paragraphs: [
          "Ginger is rich in antioxidants, which help neutralize free radicals in the body. Preclinical and clinical studies indicate that ginger possesses notable anti-inflammatory properties. Research suggests it may help reduce the severity of menstrual discomfort and provide support for individuals managing joint discomfort, such as knee osteoarthritis symptoms, though the quality of some studies varies.",
        ],
      },
      {
        title: "Cardiovascular and Metabolic Support",
        paragraphs: [
          "Emerging research has explored ginger's potential in metabolic wellness. Some studies suggest that regular ginger intake may help support healthy blood sugar levels and lipid profiles. However, as noted by Memorial Sloan Kettering Cancer Center (MSKCC), individuals taking medications to lower blood glucose should be aware that ginger might cause larger reductions in glucose levels, highlighting its biological potency.",
        ],
      },
    ],
    references: [
      "[1] Memorial Sloan Kettering Cancer Center (MSKCC). Ginger: Purported Benefits, Side Effects & More. https://www.mskcc.org/cancer-care/integrative-medicine/herbs/ginger",
      "[2] National Center for Complementary and Integrative Health (NCCIH). Ginger Overview. https://www.nccih.nih.gov/health/ginger",
    ],
    tags: ["fresh ginger", "sheng jiang", "ginger root", "warming herbs", "digestive support", "traditional Chinese ginger", "zingiber officinale", "ginger tea"],
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
    chinese: "陈皮",
    latin: "Citri Reticulatae Pericarpium",
    partUsed: "Aged peel of the mandarin orange",
    category: "Qi-regulating herbs",
    commonNames: "Dried Tangerine Peel, Aged Mandarin Peel, Citrus Peel",
    arabicName: "قشر اليوسفي المجفف (Qishr Al-Yousefi Al-Mujaffaf)",
    summary: "Literally 'aged peel' — the sun-dried and carefully aged rind of mandarin oranges, prized in East Asian kitchens for its ability to cut through heaviness and grease. This guide explores its traditional role in digestive wellness and what modern science says about its flavonoid compounds.",
    whatItIs:
      "Chen Pi translates literally to 'aged peel.' It is the sun-dried and carefully aged rind of specific varieties of mandarin oranges (most famously from Xinhui, China). Unlike fresh orange peel, which contains volatile oils that can be harsh on the stomach, Chen Pi undergoes an aging process—sometimes lasting decades—that mellows its nature and deepens its aromatic profile. In East Asian kitchens, it is an indispensable culinary and wellness ingredient, prized for its ability to cut through heaviness and grease. This page explores its traditional role in digestive wellness and what modern science says about its flavonoid compounds.",
    nature: "Warm",
    flavor: "Pungent, bitter, aromatic",
    channels: "Spleen, Stomach, Lung",
    traditionalUses: [
      "In traditional Chinese herb frameworks, Chen Pi is a primary herb for regulating Qi (energy flow) and transforming dampness. It is associated with the Spleen, Stomach, and Lung channels. In this system, the Spleen and Stomach are responsible for digestion, and when they are overwhelmed by rich food, 'dampness' (sluggishness, bloating, mucus) accumulates.",
      "Promoting the smooth downward flow of Stomach Qi to relieve bloating and fullness — a key digestive role in traditional writing.",
      "Drying dampness and transforming phlegm, especially when associated with a heavy chest or sluggish digestion.",
      "Harmonizing the digestive system, making heavy, fatty, or rich foods easier to process — a versatile balancing herb that prevents other nourishing herbs from becoming too cloying.",
    ],
    foodUses: ["Post-meal digestive tea (with Pu'er tea)", "Slow-cooked beef, duck, or red bean soups", "Aromatic braises and broths"],
    caution:
      "This page is an educational reference built around traditional herb writing and publicly available research summaries. It is not a wellness recommendation, a substitute for professional guidance, or a claim that this herb is appropriate for any specific person.",
    cautionDetails: [
      "Product interactions: As a culinary ingredient, Chen Pi is generally very safe. However, citrus flavonoids can occasionally interact with how the liver metabolizes certain medications. Individuals taking prescription medications should seek guidance from a qualified professional before consuming concentrated Chen Pi extracts or large amounts daily.",
      "When to pause: Traditional frameworks suggest that because Chen Pi is warm and drying, individuals who frequently experience signs of 'dry heat' (such as a chronic dry cough, dry mouth, or night sweats) should use it sparingly or pair it with moistening ingredients.",
    ],
    scientificSections: [
      {
        title: "Digestive Wellness and Gastrointestinal Support",
        paragraphs: [
          "Chen Pi's traditional use for digestion is supported by modern pharmacological studies. Research indicates that the flavonoids in aged citrus peel can help stimulate gastric juices and promote healthy gastrointestinal motility. Studies published in journals like Frontiers in Nutrition suggest that Chen Pi extracts may have gastrointestinal-modulating properties, helping to protect the gastric mucosa and support overall digestive comfort.",
        ],
      },
      {
        title: "Anti-inflammatory and Antioxidant Properties",
        paragraphs: [
          "The flavonoids hesperidin and nobiletin are potent antioxidants. They help neutralize free radicals and reduce oxidative stress in the body. Furthermore, research has highlighted the anti-inflammatory capacity of these compounds, which may contribute to the peel's traditional reputation for soothing respiratory and digestive irritation.",
        ],
      },
      {
        title: "Metabolic and Lipid Support",
        paragraphs: [
          "Emerging research has explored the potential of Chen Pi in metabolic wellness. Some studies suggest that its active compounds may have hypolipidemic effects, helping to support healthy lipid metabolism. While more human clinical trials are needed, these findings align with its traditional culinary use of being paired with fatty meats to reduce their heavy impact on the body.",
        ],
      },
    ],
    references: [
      "[1] Shi, M., et al. 'Recent Advances in the Health Benefits and Application of Citri Reticulatae Pericarpium.' National Center for Biotechnology Information (NCBI). https://pmc.ncbi.nlm.nih.gov/articles/PMC11241192/",
      "[2] Wang, Y., et al. 'Citri Reticulatae Pericarpium (Chenpi) Protects against Gastric Mucosal Damage.' National Center for Biotechnology Information (NCBI). https://pmc.ncbi.nlm.nih.gov/articles/PMC9783663/",
    ],
    tags: ["chen pi", "dried tangerine peel", "aged mandarin peel", "citrus reticulatae", "qi-regulating herbs", "digestive support", "hesperidin", "traditional Chinese herbs"],
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
    name: "Asian Ginseng",
    pinyin: "Ren Shen",
    chinese: "人参",
    latin: "Panax ginseng",
    partUsed: "Root",
    category: "Qi-supporting herbs",
    commonNames: "Asian Ginseng, Korean Ginseng, Chinese Ginseng, Panax Ginseng",
    arabicName: "جنسنج آسيوي (Jinsing Asyawi)",
    summary: "Arguably the most famous traditional herb in the world — a powerful, heavy-duty ingredient revered for millennia. This guide explores its traditional gravitas, the difference between White and Red Ginseng, and what modern science says about ginsenosides.",
    whatItIs:
      "Asian Ginseng (Panax ginseng) is arguably the most famous traditional herb in the world. Native to the mountainous forests of East Asia, its fleshy root has been revered for millennia. The name 'Panax' is derived from Greek, meaning 'all-healing,' reflecting its historical reputation. In traditional contexts, ginseng is not a casual daily supplement; it is considered a powerful, heavy-duty ingredient reserved for times of deep depletion or significant physical demand. It is available primarily in two forms: White Ginseng (peeled and dried, considered milder) and Red Ginseng (steamed and dried, considered much warmer and stronger). This page explores its traditional gravitas and what modern science says about its active compounds.",
    nature: "Slightly Warm (White), Warm (Red)",
    flavor: "Sweet, slightly bitter",
    channels: "Spleen, Lung, Heart",
    traditionalUses: [
      "In traditional Chinese herb frameworks, Asian Ginseng (Ren Shen) is the premier herb for strongly tonifying foundational Qi (vital energy). It is associated with the Spleen, Lung, and Heart channels.",
      "Powerfully restoring original Qi, used when the body's foundational energy is severely compromised — the most important qi tonic in traditional writing.",
      "Tonifying the Spleen and Stomach to support digestion and nutrient absorption.",
      "Supporting Lung Qi to assist with healthy, steady respiration, and calming the spirit (shen) to support cognitive clarity by nourishing the Heart channel.",
    ],
    foodUses: ["Double-boiled soup (with lean chicken or pork)", "Ginseng tea (re-steeped slices)", "Traditional tonic preparations"],
    caution:
      "This page is an educational reference built around traditional herb writing and publicly available research summaries. It is not a wellness recommendation, a substitute for professional guidance, or a claim that this herb is appropriate for any specific person.",
    cautionDetails: [
      "Product interactions: Asian ginseng is biologically highly active. It can interact with medications that affect blood sugar (causing it to drop too low), blood coagulation (interfering with blood thinners), and immunosuppressants. Individuals taking any of these products must seek professional guidance before use.",
      "When to pause: Traditional frameworks strictly advise against using ginseng during an acute illness, such as a cold or flu, as it is believed to 'trap' the pathogen inside the body. It is also generally avoided by those with high blood pressure or conditions characterized by excess heat.",
      "Pregnancy and nursing: Some studies suggest that Asian ginseng may be unsafe when taken during pregnancy. Individuals who are pregnant, nursing, or considering use for children should avoid it or seek strict professional guidance.",
    ],
    scientificSections: [
      {
        title: "Cognitive and Mental Function",
        paragraphs: [
          "A body of research has investigated ginseng's potential to support cognitive function. Studies suggest that Asian ginseng may help improve abstract thinking, attention, and reaction time, particularly in middle-aged adults. Its ability to support mental resilience under stress aligns with its traditional use for calming the spirit and supporting the Heart channel.",
        ],
      },
      {
        title: "Fatigue and Energy Support",
        paragraphs: [
          "As a classic adaptogen, ginseng is widely studied for its effects on fatigue. According to the National Center for Complementary and Integrative Health (NCCIH), reviews of clinical trials suggest that Asian ginseng may have a beneficial effect on general fatigue. It is thought to support energy metabolism and help the body maintain homeostasis during periods of physical or mental exhaustion.",
        ],
      },
      {
        title: "Metabolic and Cardiovascular Wellness",
        paragraphs: [
          "Research indicates that Asian ginseng may play a role in metabolic wellness. Systematic reviews have found that it can improve cardiometabolic factors in certain populations, including supporting healthy fasting blood glucose levels and managing inflammatory markers. However, research regarding its use for blood sugar control remains complex, and it is known to actively lower blood sugar levels.",
        ],
      },
    ],
    references: [
      "[1] National Center for Complementary and Integrative Health (NCCIH). Asian Ginseng Overview. https://www.nccih.nih.gov/health/asian-ginseng",
    ],
    tags: ["asian ginseng", "panax ginseng", "ren shen", "korean red ginseng", "qi-supporting herbs", "adaptogen", "ginsenosides", "traditional Chinese ginseng"],
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
    chinese: "薄荷",
    latin: "Mentha haplocalyx / Mentha x piperita",
    partUsed: "Aerial parts (leaves and stems)",
    category: "Herbs that clear heat",
    commonNames: "Mint, Field Mint, Chinese Peppermint",
    arabicName: "نعناع (Na'na')",
    summary: "One of the most universally recognized herbs, prized for its refreshing aroma and cooling sensation. This guide explores Mint's traditional role as a cooling, dispersing herb, and what modern science says about its essential oils, particularly menthol, and their well-documented role in supporting digestive comfort.",
    whatItIs:
      "Mint is one of the most universally recognized herbs, prized for its refreshing aroma and cooling sensation. In traditional Chinese wellness practices, Mentha haplocalyx (Bo He) is used as a cooling, dispersing herb. While culinary peppermint (Mentha x piperita) is slightly different botanically, they share similar active compounds. Today, what modern science says about mint focuses heavily on its essential oils, particularly menthol, and its well-documented role in supporting digestive comfort.",
    nature: "Cool",
    flavor: "Pungent (acrid)",
    channels: "Lung, Liver",
    traditionalUses: [
      "In traditional frameworks, Mint (Bo He) is categorized as an herb that clears heat and resolves exterior wind-heat. It is primarily associated with the Lung and Liver channels.",
      "Dispersing heat from the head and eyes, often used when experiencing an acute onset of symptoms accompanied by a warm, heavy head.",
      "Soothing the throat and promoting a clear, refreshed feeling in the upper respiratory tract.",
      "Gently moving Liver Qi, which in traditional terms helps relieve emotional tension and frustration.",
    ],
    foodUses: ["Mint tea (steeped fresh or dried)", "Cooling infusion", "Aromatic tea blends"],
    caution:
      "Mint tea is generally very safe for regular consumption. However, the concentrated essential oil should be used with caution. Peppermint oil can occasionally cause heartburn or acid reflux in sensitive individuals.",
    cautionDetails: [
      "Infants and young children: Concentrated menthol or peppermint oil should not be applied to the face or chest of infants or young children, as it may negatively affect their breathing.",
      "Pregnancy and digestive issues: If you are pregnant or managing severe digestive issues, seek guidance from a qualified professional.",
    ],
    scientificSections: [
      {
        title: "Nutritional and Active Compounds",
        paragraphs: [
          "Mint leaves contain a variety of active compounds, including menthol, menthone, and various antioxidant flavonoids. Menthol is responsible for the characteristic cooling sensation, which occurs because it interacts directly with cold-sensitive receptors in the skin and mucous membranes.",
        ],
      },
      {
        title: "Digestive Support",
        paragraphs: [
          "A significant body of clinical research has explored peppermint oil's role in digestive wellness. According to the National Center for Complementary and Integrative Health (NCCIH), a 2022 review of 10 studies involving over 1,000 participants found that peppermint oil can significantly improve overall digestive comfort, particularly in relation to irritable bowel symptoms. The active compounds are thought to help relax the smooth muscles of the gastrointestinal tract.",
        ],
      },
      {
        title: "Respiratory and Tension Relief",
        paragraphs: [
          "The aromatic properties of mint are frequently utilized for respiratory comfort. Inhaling the vapor of steeped mint leaves can provide a soothing effect on the respiratory passages. Additionally, limited evidence suggests that topical application of mint essential oils may help relieve tension in the head and neck area.",
        ],
      },
    ],
    references: [
      "[1] NCCIH. Peppermint Oil. https://www.nccih.nih.gov/health/peppermint-oil",
    ],
    tags: ["bo he", "mint", "field mint", "chinese peppermint", "mentha", "cooling herb", "digestive support", "menthol"],
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
    chinese: "灵芝",
    latin: "Ganoderma lucidum",
    partUsed: "Fruiting body",
    category: "Qi-supporting herbs",
    commonNames: "Reishi, Lingzhi, Ling Zhi, Mushroom of Immortality, Ganoderma",
    arabicName: "فطر الريشي (Fatr Al-Reishi)",
    summary: "A beautiful, woody mushroom with a distinctive lacquered, fan-shaped appearance and over two thousand years of traditional use. This guide explores its traditional context, kitchen use, and what modern science says about its active compounds.",
    whatItIs:
      "Reishi is a beautiful, woody mushroom with a distinctive lacquered, fan-shaped appearance. It grows naturally in humid, forested regions across East Asia and has been a cornerstone of traditional Chinese, Japanese, and Korean wellness traditions for over two thousand years. While it is heavily marketed today in coffees, powders, and capsules, its traditional use is much slower and more deliberate. Traditional practitioners valued reishi not as a quick fix, but as a long-term, slow-acting ingredient associated with longevity, quiet resilience, and steady nourishment. This page explores both that traditional context and what modern science says about its active compounds.",
    nature: "Neutral",
    flavor: "Sweet, bitter",
    channels: "Heart, Liver, Lung",
    traditionalUses: [
      "In traditional Chinese herb frameworks, Reishi (Ling Zhi) is placed in the category of herbs that support the spirit (shen) and build overall defensive qi (Wei Qi). Wei Qi is the concept of the body's outer protective energy — the layer that keeps the body resilient against external stressors.",
      "Reishi is associated with the Heart, Liver, and Lung channels, which in this framework relates to emotional steadiness, detoxification support, and respiratory resilience.",
      "Supporting the spirit (shen) and calming the mind — a traditional role tied to quiet resilience rather than quick relief.",
      "Building long-term resilience rather than providing short-term relief — it is a slow-acting, deeply respected ingredient in longevity-focused kitchen traditions.",
      "Nourishing the qi of the Heart, Liver, and Lung channels — a foundational concept in traditional tonic writing.",
    ],
    foodUses: ["Long-simmered broth", "Reishi tea", "Tonic soups with jujube, goji, or astragalus"],
    caution:
      "This page is an educational reference built around traditional herb writing and publicly available research summaries. It is not a wellness recommendation, a substitute for professional guidance, or a claim that this herb is appropriate for any specific person.",
    cautionDetails: [
      "Product interactions: Individuals taking supplements or products that affect immune function (such as immunosuppressants) or circulation (such as products affecting blood coagulation) should seek guidance from a qualified professional before regular use of reishi-based products.",
      "When to pause: Traditional kitchen practices suggest pausing the use of heavy, tonifying ingredients like reishi when experiencing an acute onset of symptoms, such as a sudden cold or fever. This is a traditional guideline, not a medical instruction.",
      "Liver wellness: A small number of case reports have noted liver-related concerns associated with powdered reishi supplements. This is distinct from traditional food-grade preparation (broth, tea). Individuals with existing liver wellness concerns should seek guidance from a qualified professional before use.",
      "Pregnancy and nursing: Traditional frameworks and current research both suggest that individuals who are pregnant or nursing should seek guidance before using reishi.",
    ],
    scientificSections: [
      {
        title: "Nutritional and Active Compounds",
        paragraphs: [
          "Reishi's primary active compounds are its beta-glucan polysaccharides and triterpenes. Beta-glucans are complex carbohydrates found in the cell walls of fungi, and research suggests they may interact with immune cell receptors. Triterpenes are bitter-tasting compounds that give reishi its characteristic flavor and are the subject of ongoing research into their biological properties.",
          "Unlike many culinary mushrooms, reishi is rarely eaten whole due to its tough, woody texture. It is more commonly prepared as a long-simmered broth, a dried extract, or a tea, which helps release its water-soluble compounds.",
        ],
      },
      {
        title: "Immune System Support",
        paragraphs: [
          "A significant body of research explores reishi's immunomodulatory properties. Studies indicate that its polysaccharides may help manage the function of T lymphocyte cells and white blood cells, which play crucial roles in the body's natural immune response. Research published in the British Journal of Nutrition found that Ganoderma lucidum supplementation may modulate T-lymphocyte function. However, researchers consistently note that more large-scale human trials are needed before firm conclusions can be drawn.",
        ],
      },
      {
        title: "Cardiovascular and Metabolic Wellness",
        paragraphs: [
          "Beyond immune support, research has explored reishi's potential role in cardiovascular wellness programs. Some studies suggest that its active compounds may help support healthy lipid levels, including managing triglycerides and supporting HDL ('good') cholesterol. A number of in vitro and animal model studies have shown promising results, though human trials have produced mixed findings. The current scientific consensus is that reishi shows potential in this area, but further investigation is required.",
        ],
      },
    ],
    references: [
      "[1] Memorial Sloan Kettering Cancer Center (MSKCC). Reishi Mushroom: Purported Benefits, Side Effects & More. https://www.mskcc.org/cancer-care/integrative-medicine/herbs/reishi-mushroom",
      "[2] Healthline. 6 Benefits of Reishi Mushroom (Plus Side Effects and Dosage). https://www.healthline.com/nutrition/reishi-mushroom-benefits",
      "[3] National Center for Complementary and Integrative Health (NCCIH). Reishi Mushroom Overview. https://www.nccih.nih.gov/health/reishi-mushroom",
    ],
    tags: ["reishi", "lingzhi", "ling zhi", "ganoderma", "mushroom of immortality", "reishi mushroom benefits", "reishi tea", "reishi broth", "immune support mushroom", "qi-supporting herbs", "traditional Chinese mushroom", "灵芝"],
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
    chinese: "玫瑰花",
    latin: "Rosa rugosa / Rosa damascena",
    partUsed: "Flower bud",
    category: "Herbs that regulate Qi",
    commonNames: "Rose Bud, Chinese Rose",
    arabicName: "زهرة الورد (Zahrat Al-Ward) / ورد (Ward)",
    summary: "Cherished globally for their fragrance and beauty, rose buds also hold a significant place in traditional wellness practices. This guide explores how rose buds gently move energy and soothe the spirit, their rich antioxidant profile, and what modern science says about their potential to support digestive and menstrual comfort.",
    whatItIs:
      "Rose buds (Rosa rugosa or Rosa damascena) are cherished globally for their fragrance and beauty, but they also hold a significant place in traditional wellness practices. In traditional Chinese approaches, young, dried rose buds are brewed into a fragrant, delicate tea used to gently move energy and soothe the spirit. Today, what modern science says about rose buds highlights their rich antioxidant profile and potential to support digestive and menstrual comfort.",
    nature: "Warm",
    flavor: "Sweet, slightly bitter",
    channels: "Liver, Spleen",
    traditionalUses: [
      "In traditional frameworks, Rose Bud (Mei Gui Hua) is classified as an herb that regulates Qi (vital energy) and harmonizes the blood. It is primarily associated with the Liver and Spleen channels.",
      "Gently promoting the smooth flow of Liver Qi, which is traditionally linked to emotional balance and stress management.",
      "Harmonizing the blood, making it a popular choice for supporting menstrual comfort and regularity.",
      "Supporting digestive harmony by addressing stagnation in the Spleen and Stomach.",
    ],
    foodUses: ["Rose bud tea (caffeine-free brew)", "Floral infusion", "Delicate tea blends"],
    caution:
      "Rose bud tea is generally safe for most people when consumed in moderate amounts. However, individuals with allergies to the rose plant should avoid it.",
    cautionDetails: [
      "Product interactions: There is some indication that rose tea may interact with products that affect circulation (such as blood thinners) or mood-supporting supplements (like antidepressants). If you are managing these situations or are pregnant, it is best to seek guidance from a qualified professional before making it a regular part of your routine.",
      "Pregnancy: If you are pregnant, seek guidance from a qualified professional before making rose bud tea a regular part of your routine.",
    ],
    scientificSections: [
      {
        title: "Nutritional and Active Compounds",
        paragraphs: [
          "Rose buds are caffeine-free and contain a high concentration of polyphenols, flavonoids, tannins, and phenolic acids. They are also a source of vitamins C and E. These compounds are well-documented for their potent antioxidant properties, which help neutralize free radicals and protect cellular health.",
        ],
      },
      {
        title: "Anti-Inflammatory and Menstrual Comfort",
        paragraphs: [
          "Research indicates that the anti-inflammatory activity in powdered rose petals can be significant. One notable area of study is its effect on dysmenorrhea (menstrual discomfort). Studies have found a reduction in period-related cramping, bloating, and pain among individuals who regularly consumed rose tea. Participants in these studies also frequently reported experiencing a calmer mood and less anxiety.",
        ],
      },
      {
        title: "Digestive and Metabolic Wellness",
        paragraphs: [
          "The polyphenols in rose tea have been studied for their potential to support metabolic and cardiovascular wellness programs. Additionally, modern research suggests that rose tea may aid digestion by supporting healthy bile production in the liver, which can improve nutrient absorption and maintain digestive regularity.",
        ],
      },
    ],
    references: [
      "[1] WebMD. Rose Tea: Is It Good for You? https://www.webmd.com/diet/rose-tea-good-for-you",
      "[2] PMC. Beneficial medicinal effects and material applications of rose. https://pmc.ncbi.nlm.nih.gov/articles/PMC10758878/",
    ],
    tags: ["mei gui hua", "rose bud", "chinese rose", "rosa rugosa", "qi-regulating herbs", "rose bud tea", "menstrual comfort", "antioxidant tea"],
  },
  {
    slug: "mulberry-leaf",
    name: "Mulberry Leaf",
    pinyin: "Sang Ye",
    chinese: "桑叶",
    latin: "Morus alba",
    partUsed: "Leaf",
    category: "Herbs that clear heat",
    commonNames: "Mulberry Leaf, White Mulberry Leaf",
    arabicName: "ورق التوت (Waraq Al-Toot)",
    summary: "Harvested from the white mulberry tree — the same tree whose leaves feed silkworms. Used for centuries as a cooling herb, Mulberry Leaf is now the subject of strong modern scientific interest for its unique active compounds and potential role in metabolic and blood sugar support.",
    whatItIs:
      "Mulberry leaf (Morus alba) is harvested from the white mulberry tree, the same tree whose leaves are famously used to feed silkworms. In traditional Chinese wellness practices, it has been used for centuries as a cooling herb, often brewed into a light, grassy tea. Today, modern science has taken a strong interest in mulberry leaf, particularly regarding its unique active compounds and what modern science says about its potential role in metabolic and blood sugar support.",
    nature: "Cold",
    flavor: "Sweet, bitter",
    channels: "Lung, Liver",
    traditionalUses: [
      "In traditional frameworks, Mulberry Leaf (Sang Ye) is categorized among herbs that clear heat and resolve exterior wind-heat. It is traditionally associated with the Lung and Liver channels.",
      "Clearing heat from the Lungs, often used when experiencing an acute onset of symptoms accompanied by a dry, scratchy throat.",
      "Supporting visual health by clearing heat from the Liver channel.",
      "Providing a gentle, cooling energy that helps balance the body during warm weather or internal heat imbalances.",
    ],
    foodUses: ["Tea (light, grassy brew)", "Seasonal infusion", "Cooling tea blends"],
    caution:
      "Mulberry leaf is generally considered safe when consumed as a tea or food. However, because of its potential to influence blood sugar levels, individuals taking products or medications that affect blood glucose should seek professional guidance before using mulberry leaf supplements, to avoid the risk of hypoglycemia.",
    cautionDetails: [
      "Blood sugar interactions: Because mulberry leaf contains DNJ (1-Deoxynojirimycin), an alpha-glucosidase inhibitor, it can influence how the body breaks down carbohydrates. Individuals taking blood sugar medications should seek professional guidance before use.",
      "Cold constitution: As a traditionally 'cold' herb, it is often recommended to be used cautiously by those with a sensitive or 'cold' digestive constitution.",
    ],
    scientificSections: [
      {
        title: "Nutritional and Active Compounds",
        paragraphs: [
          "The standout compound in mulberry leaves is 1-Deoxynojirimycin (DNJ). DNJ is an alpha-glucosidase inhibitor, meaning it can influence how the body breaks down complex carbohydrates into simple sugars during digestion. The leaves also contain significant amounts of antioxidant flavonoids, such as quercetin and rutin, which contribute to their overall health-supporting profile.",
        ],
      },
      {
        title: "Metabolic and Blood Sugar Support",
        paragraphs: [
          "A robust body of clinical and preclinical research explores the potential of mulberry leaf extract in supporting metabolic wellness. Multiple studies and meta-analyses suggest that the DNJ in mulberry leaves may help modulate postprandial (post-meal) blood glucose levels by slowing the absorption of carbohydrates in the digestive tract. A 2023 review confirmed these hypoglycemic properties, noting that the active substances in mulberry leaf can help regulate blood glucose levels while also offering antioxidant benefits.",
        ],
      },
      {
        title: "Antioxidant and Cellular Health",
        paragraphs: [
          "Beyond metabolic support, the flavonoids in mulberry leaves provide strong antioxidant activity. These compounds help protect cells from oxidative stress and free radical damage, which is essential for long-term cellular resilience and cardiovascular wellness.",
        ],
      },
    ],
    references: [
      "[1] PMC. Evaluation of mulberry leaves' hypoglycemic properties. https://pmc.ncbi.nlm.nih.gov/articles/PMC10117911/",
      "[2] Nature. Effects of the timing of acute mulberry leaf extract intake on postprandial glucose. https://www.nature.com/articles/s41430-023-01259-x",
      "[3] ScienceDirect. Effects of 1-Deoxynojirimycin on glycemic control: A systematic review. https://www.sciencedirect.com/science/article/pii/S235236462400049X",
    ],
    tags: ["sang ye", "mulberry leaf", "morus alba", "cooling herb", "clear heat", "DNJ", "blood sugar support", "traditional Chinese leaf tea"],
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
  "Yin-supporting herbs": ["yin", "nourishing", "gentle", "restorative", "daily support", "cooling balance"],
  "Qi-regulating herbs": ["qi", "digestive", "aromatic", "citrus", "movement"],
  "Herbs that clear heat": ["cooling", "clear heat", "summer", "seasonal", "light"],
  "Herbs that regulate Qi": ["qi", "movement", "emotional balance", "liver", "harmony"],
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
