export type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ContentArticle = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  eyebrow: string;
  sections: ArticleSection[];
  recipe?: {
    recipeYield: string;
    prepTime: string;
    totalTime: string;
    ingredients: string[];
    steps: string[];
    servingNotes?: string[];
    caution?: string[];
  };
};

export const basicsArticles: ContentArticle[] = [
  {
    slug: "what-is-tcm",
    title: "What Is TCM?",
    description:
      "A clear first look at Traditional Chinese Medicine in plain American English, with practical explanations and clear boundaries.",
    eyebrow: "TCM Basics",
    intro:
      "Traditional Chinese Medicine, often shortened to TCM, is a long-running body of ideas about the body, food, herbs, climate, rhythm, and patterns. On HerbGuide, it is presented as a traditional framework that helps readers understand herb language and food traditions, not as personalized medical advice.",
    sections: [
      {
        title: "A traditional framework, not a modern diagnosis system",
        paragraphs: [
          "TCM uses its own vocabulary to describe how the body functions, how climate and season are understood, and how herbs and foods are traditionally categorized.",
          "That vocabulary does not map neatly onto modern lab testing or diagnosis. A reader can still learn a lot from it, but it should be read as part of a historical and cultural system.",
        ],
      },
      {
        title: "Why readers still care about TCM today",
        paragraphs: [
          "Many English-language readers first meet TCM through tea, soups, herbal products, acupuncture, or family food traditions.",
          "Learning the basics makes herb pages easier to understand because terms like qi, dampness, warming, cooling, and channel entry stop feeling abstract.",
        ],
        bullets: [
          "It helps explain why the same ingredient may be described differently in different traditions.",
          "It gives cultural context for herb names, soup pairings, and pantry habits.",
          "It creates a clearer path into Chinese classics and herb profiles.",
        ],
      },
      {
        title: "How HerbGuide uses the term",
        paragraphs: [
          "HerbGuide uses TCM as an educational frame. We explain how an herb is traditionally described, what those labels mean in plain English, and where caution is needed.",
          "We do not present TCM phrases as direct promises, prescriptions, or instructions for any one person.",
        ],
      },
    ],
  },
  {
    slug: "what-does-qi-mean",
    title: "What Does Qi Mean?",
    description:
      "A practical plain-English explanation of qi for readers who want to understand Chinese herb and TCM writing.",
    eyebrow: "TCM Basics",
    intro:
      "Qi is one of the most common and most misunderstood words in Chinese medicine writing. HerbGuide usually explains it in plain English as function, activity, momentum, resilience, or vitality, depending on context.",
    sections: [
      {
        title: "Why qi is hard to translate",
        paragraphs: [
          "There is no single English word that fully covers qi. That is why some writers leave it untranslated while others use terms like energy or vitality.",
          "For beginners, the most useful approach is to think of qi as the body's capacity to do things: move, warm, transform, protect, and recover.",
        ],
      },
      {
        title: "How qi appears on herb pages",
        paragraphs: [
          "When a herb is described in TCM as relating to qi, HerbGuide translates that into readable English rather than repeating jargon without explanation.",
          "Depending on the herb, that may mean traditional discussions around stamina, appetite, resilience, or general functional strength.",
        ],
        bullets: [
          "Qi is a traditional concept, not a scientific measurement.",
          "Qi language gives context, but it should not be read as a personal recommendation.",
          "The same herb can relate to qi differently depending on preparation and context.",
        ],
      },
      {
        title: "A better way to read qi language online",
        paragraphs: [
          "If a website uses qi language without explaining it, readers often either over-trust it or dismiss it too quickly.",
          "A better approach is to ask what traditional idea is being described and how it is being translated into normal English. That is the editorial standard HerbGuide is aiming for.",
        ],
      },
    ],
  },
  {
    slug: "warming-vs-cooling-foods",
    title: "Warming vs Cooling Foods",
    description:
      "A beginner-friendly guide to one of the easiest TCM food ideas to connect with everyday meals.",
    eyebrow: "TCM Basics",
    intro:
      "Warming and cooling are traditional qualities in Chinese food and herb writing. They do not simply mean the temperature of the dish itself. Instead, they describe how an ingredient is traditionally categorized.",
    sections: [
      {
        title: "Traditional quality, not serving temperature",
        paragraphs: [
          "A cooling tea can be served hot. A warming ingredient can appear in a room-temperature dish. The traditional label is about classification, not whether something feels hot to the touch.",
          "This is why ingredients like ginger, mint, chrysanthemum, pear, and cinnamon show up in very different kinds of traditional kitchen writing.",
        ],
      },
      {
        title: "Why this idea is useful for beginners",
        paragraphs: [
          "Warming and cooling are easier for many readers to grasp than more abstract TCM terms because they connect directly to meals, drinks, and seasonal habits.",
          "Once readers understand this idea, many herb pages become easier to interpret.",
        ],
        bullets: [
          "Fresh ginger is often introduced as warming.",
          "Chrysanthemum and mint are often introduced as cooling.",
          "Pear often appears in discussions of dry or warm seasonal conditions.",
        ],
      },
      {
        title: "How HerbGuide handles these labels",
        paragraphs: [
          "HerbGuide explains these terms as part of traditional language and food culture.",
          "We do not turn warming and cooling labels into absolute rules or one-size-fits-all instructions.",
        ],
      },
    ],
  },
  {
    slug: "what-is-dampness",
    title: "What Is Dampness?",
    description:
      "An accessible explanation of a classic TCM pattern term that many beginners see but rarely understand.",
    eyebrow: "TCM Basics",
    intro:
      "Dampness is a traditional TCM term that often sounds strange in English. It does not literally mean the body is wet. Instead, it points to a pattern language built around heaviness, sluggishness, cloudiness, and things not moving or transforming smoothly.",
    sections: [
      {
        title: "Why the term sounds confusing at first",
        paragraphs: [
          "A direct translation can feel awkward because the English word damp usually refers to weather, walls, or fabric.",
          "In TCM writing, the word is broader and more symbolic. It belongs to a traditional model, not a modern diagnostic checklist.",
        ],
      },
      {
        title: "How dampness shows up in food and herb language",
        paragraphs: [
          "Readers often see dampness mentioned next to grains, light soups, aromatic peels, porridge, and ingredients that are traditionally described as helping things feel lighter or less stuck.",
          "This is one reason ingredients like poria, chen pi, and Job's Tears show up often in educational content.",
        ],
        bullets: [
          "Dampness is a traditional pattern term.",
          "It should not be reduced to one modern label.",
          "Food pages usually explain it through texture, heaviness, and kitchen context.",
        ],
      },
      {
        title: "How to read the term responsibly",
        paragraphs: [
          "The safest way to read dampness language is as a traditional descriptive system.",
          "It is useful for understanding Chinese herb pages, but it should not be turned into self-diagnosis.",
        ],
      },
    ],
  },
  {
    slug: "what-is-yin-and-yang",
    title: "What Is Yin and Yang?",
    description:
      "A simple explanation of yin and yang for readers who want to understand Chinese herb and food language without mystifying it.",
    eyebrow: "TCM Basics",
    intro:
      "Yin and yang are among the most recognizable terms in Chinese thought, but they are often flattened into vague internet slogans. On HerbGuide, they are explained as a traditional way of describing relationship, balance, contrast, and change.",
    sections: [
      {
        title: "A language of relationship, not two magic substances",
        paragraphs: [
          "Yin and yang describe how things relate to one another. They help organize ideas like rest and activity, interior and exterior, coolness and warmth, substance and function.",
          "That is why the terms show up across herb writing, food therapy, lifestyle advice, and the Chinese classics. They are part of a framework, not isolated buzzwords.",
        ],
      },
      {
        title: "Why beginners see these terms everywhere",
        paragraphs: [
          "Many TCM explanations assume readers already know what yin and yang mean, but most English-language readers only know them in a decorative or philosophical sense.",
          "A plain-English explanation helps readers understand why herbs may be described as nourishing yin, supporting yang, or balancing hot and cold patterns.",
        ],
        bullets: [
          "Yin often relates to cooling, moistening, settling, or material support in traditional language.",
          "Yang often relates to warming, moving, activating, or functional strength in traditional language.",
          "Neither term should be treated like a direct medical diagnosis.",
        ],
      },
      {
        title: "How HerbGuide uses yin and yang language",
        paragraphs: [
          "HerbGuide uses these terms to explain traditional descriptions more clearly, especially when comparing herbs, foods, and seasonal habits.",
          "We keep the language educational and avoid turning yin-yang ideas into simplistic rules for self-treatment.",
        ],
      },
    ],
  },
  {
    slug: "what-does-blood-mean-in-tcm",
    title: "What Does Blood Mean in TCM?",
    description:
      "A careful beginner guide to the TCM idea of blood and why it is broader than the everyday English word suggests.",
    eyebrow: "TCM Basics",
    intro:
      "When Chinese medicine writing talks about blood, it is not always speaking only about literal blood in a lab-based modern sense. In TCM, blood is a broader traditional concept tied to nourishment, grounding, and the body's ability to support tissues and rhythm.",
    sections: [
      {
        title: "Why the word causes confusion",
        paragraphs: [
          "English-speaking readers naturally assume blood means exactly what modern medicine means by blood. In TCM, the term overlaps with that idea but also reaches further into a traditional model of nourishment and stability.",
          "That is why direct one-to-one translation can be misleading if no explanation is provided.",
        ],
      },
      {
        title: "How blood shows up in herb pages",
        paragraphs: [
          "Some herbs are traditionally described as nourishing blood, moving blood, or preserving blood. Those phrases are part of a historical vocabulary used in Chinese herb education.",
          "On HerbGuide, that language is translated carefully so readers understand it as traditional theory rather than a promise about one personal condition.",
        ],
        bullets: [
          "Blood in TCM is a traditional concept.",
          "It often overlaps with ideas of nourishment, moisture, and regulation.",
          "It should not be treated as shorthand for self-diagnosis.",
        ],
      },
      {
        title: "Why this matters for responsible reading",
        paragraphs: [
          "Readers searching for cramping, dryness, tiredness, or cycle-related issues often find TCM blood language online very quickly.",
          "A responsible site should explain what the term means without nudging readers into overly specific interpretations. That is the standard HerbGuide follows.",
        ],
      },
    ],
  },
  {
    slug: "what-is-qi-stagnation",
    title: "What Is Qi Stagnation?",
    description:
      "A beginner-friendly guide to one of the most common pattern phrases in Chinese medicine writing.",
    eyebrow: "TCM Basics",
    intro:
      "Qi stagnation is a traditional TCM phrase used when movement, flow, or ease is described as constrained. It is a pattern term inside Chinese medicine, not a modern diagnosis label, but readers see it often enough that it deserves a clear plain-English explanation.",
    sections: [
      {
        title: "A traditional idea about flow and constraint",
        paragraphs: [
          "In simple terms, qi stagnation language often points to a sense that things are not moving as smoothly as they should in the traditional model.",
          "That is why the phrase is often paired with language around tension, fullness, frustration, irregularity, or stuckness depending on the context.",
        ],
      },
      {
        title: "Why it appears on digestive and aromatic herb pages",
        paragraphs: [
          "Readers often meet this phrase on pages about chen pi, mint, perilla leaf, or other herbs that are traditionally discussed in relation to movement and release.",
          "Without explanation, the phrase can sound either mysterious or overly dramatic. A better approach is to translate the traditional idea into readable English while keeping the limits clear.",
        ],
        bullets: [
          "Qi stagnation is part of TCM pattern language.",
          "It is usually about functional flow in a traditional sense.",
          "It should not be turned into a label someone assigns to themself from one article.",
        ],
      },
      {
        title: "How to use the term usefully",
        paragraphs: [
          "The most useful reason to learn this phrase is that it makes many herb descriptions easier to understand.",
          "Once readers know what qi stagnation means in traditional language, comparisons between aromatic, digestive, and movement-related herbs become much clearer.",
        ],
      },
    ],
  },
  {
    slug: "fresh-ginger-vs-dried-ginger",
    title: "Fresh Ginger vs Dried Ginger",
    description:
      "A clear beginner guide to why TCM and Chinese herb pages treat fresh and dried ginger as related but not interchangeable.",
    eyebrow: "TCM Basics",
    intro:
      "Many readers assume ginger is just ginger. Traditional Chinese herb writing makes a more careful distinction. Fresh ginger and dried ginger come from the same plant, but they are described differently because preparation changes how the ingredient is understood in TCM and kitchen use.",
    sections: [
      {
        title: "Same plant, different preparation, different role",
        paragraphs: [
          "Fresh ginger usually feels easier to connect with everyday cooking. It appears in soups, teas, stir-fries, and light cold-weather recipes.",
          "Dried ginger is a more concentrated comparison herb in traditional writing. It is often described as hotter and more strongly warming than the fresh form.",
        ],
      },
      {
        title: "Why the distinction matters on herb pages",
        paragraphs: [
          "This comparison helps readers see one of the most important ideas in Chinese herb education: preparation matters. A fresh ingredient and a dried ingredient can share a name while still being framed quite differently.",
          "That is one reason HerbGuide keeps herb pages separate instead of collapsing them into one generic ginger entry.",
        ],
        bullets: [
          "Fresh ginger is commonly linked with tea, soup, and kitchen-friendly warming language.",
          "Dried ginger is usually presented as stronger and more concentrated.",
          "Readers should not assume traditional categories treat all forms of an herb as interchangeable.",
        ],
      },
      {
        title: "How beginners should use this comparison",
        paragraphs: [
          "The most useful takeaway is not that one form is better. The useful takeaway is that TCM categories care about form, preparation, and context.",
          "Once readers understand this, other comparisons across the herb library become easier too.",
        ],
      },
    ],
  },
  {
    slug: "ginseng-vs-american-ginseng",
    title: "Ginseng vs American Ginseng",
    description:
      "A plain-English comparison that explains why TCM does not treat all ginseng as the same herb.",
    eyebrow: "TCM Basics",
    intro:
      "English-language readers often use the word ginseng as if it refers to one simple category. Chinese herb writing is more precise. Ginseng and American ginseng are related, but they are traditionally described with different qualities and different educational use cases.",
    sections: [
      {
        title: "Why this comparison is so useful",
        paragraphs: [
          "This is one of the best beginner comparisons on the whole site because the name overlap is strong while the traditional descriptions are not identical.",
          "It teaches readers that famous names can still hide important distinctions in TCM herb education.",
        ],
      },
      {
        title: "How the two are usually framed",
        paragraphs: [
          "On HerbGuide, Ren Shen is introduced as a stronger classic tonic herb that needs careful framing. American ginseng is usually presented with a cooler profile and often appears in comparison articles for nuance.",
          "That contrast helps readers move past the idea that more famous or more expensive automatically means more appropriate.",
        ],
        bullets: [
          "Ginseng is usually described as more warming or strongly qi-focused in traditional language.",
          "American ginseng is often described as cooler and more fluid-supportive in traditional language.",
          "Both pages need visible caution and context.",
        ],
      },
      {
        title: "The deeper lesson behind the comparison",
        paragraphs: [
          "This is not only a ginseng lesson. It is a reading lesson. TCM herb pages are easier to trust when they explain how names, forms, and qualities differ instead of flattening everything into broad marketing terms.",
          "That is why comparison pages are useful for SEO and for reader education at the same time.",
        ],
      },
    ],
  },
  {
    slug: "goji-berry-vs-jujube",
    title: "Goji Berry vs Jujube",
    description:
      "A beginner-friendly comparison of two popular Chinese pantry ingredients that show up often in teas and soups.",
    eyebrow: "TCM Basics",
    intro:
      "Goji berry and jujube are two of the easiest Chinese ingredients for beginners to recognize, but they play different roles in flavor, texture, and traditional storytelling. Comparing them side by side helps readers understand why both are popular without assuming they are interchangeable.",
    sections: [
      {
        title: "Why readers compare these two so often",
        paragraphs: [
          "Both ingredients are approachable, highly searchable, and closely tied to tea and soup content. That makes them natural beginner favorites.",
          "At the same time, they feel different in the kitchen. Goji berry is usually lighter and smaller, while jujube adds sweetness, body, and a more obvious soup or tea presence.",
        ],
      },
      {
        title: "How the comparison helps in practice",
        paragraphs: [
          "A side-by-side article makes recipe pages easier to understand. Readers can see why goji may be added near the end for color and softness, while jujube may shape the flavor of the whole pot.",
          "It also shows how traditional herb descriptions can overlap without being identical.",
        ],
        bullets: [
          "Goji berry often appears in porridge, light soup, and tea-style pages.",
          "Jujube often appears in sweet broths, warming drinks, and gentle soup routines.",
          "Both work well in beginner content, but they create different kinds of pages.",
        ],
      },
      {
        title: "Why this comparison fits HerbGuide well",
        paragraphs: [
          "This is exactly the kind of page that supports both search and usability. It answers a real beginner question while strengthening links between pantry-friendly herb profiles and food therapy content.",
          "It also stays safely educational rather than drifting into overpromised wellness language.",
        ],
      },
    ],
  },
  {
    slug: "what-does-clear-heat-mean",
    title: "What Does Clear Heat Mean?",
    description:
      "A plain-English explanation of one of the most common TCM phrases readers see on herb and tea pages.",
    eyebrow: "TCM Basics",
    intro:
      "Clear heat is one of those classic TCM phrases that shows up constantly in Chinese herb writing but sounds vague in English. It belongs to a traditional descriptive system, not a modern diagnosis framework, and readers need a careful translation to use it well.",
    sections: [
      {
        title: "Why the phrase sounds stronger than it is",
        paragraphs: [
          "In English, clear heat can sound like a direct therapeutic promise. In TCM, it is part of a traditional pattern vocabulary used to describe how certain herbs and foods are categorized.",
          "That means the phrase should be read as context for traditional classification, not as a one-line explanation of a personal health situation.",
        ],
      },
      {
        title: "Where readers usually meet this phrase",
        paragraphs: [
          "Many beginners first see clear heat language on pages about chrysanthemum, mint, cooling teas, or warm-weather food traditions.",
          "Without explanation, the phrase can create either confusion or overconfidence. A better site translates it into plain English and keeps the boundaries visible.",
        ],
        bullets: [
          "It is part of TCM heat-language, not a modern lab term.",
          "It often appears on cooling herb and tea pages.",
          "It should not be turned into self-diagnosis.",
        ],
      },
      {
        title: "How HerbGuide handles the phrase",
        paragraphs: [
          "HerbGuide uses clear heat as a traditional category label and then explains what kind of food or herb context that label usually points to.",
          "That keeps the site educational, readable, and more trustworthy.",
        ],
      },
    ],
  },
  {
    slug: "what-does-tonify-mean-in-tcm",
    title: "What Does Tonify Mean in TCM?",
    description:
      "A beginner guide to the word tonify and why it appears so often on pages about famous Chinese herbs.",
    eyebrow: "TCM Basics",
    intro:
      "Tonify is one of the most common English translations in Chinese herb content, especially on pages about qi herbs, blood-related herbs, and food therapy routines. Readers often recognize the word but still do not know what it means in practice.",
    sections: [
      {
        title: "A translation with a lot of baggage",
        paragraphs: [
          "Tonify is not a word most people use in everyday conversation, which makes it easy to skim past without understanding it.",
          "In TCM writing, it usually points to traditional ideas of support, replenishment, or strengthening within a specific category like qi, blood, yin, or yang.",
        ],
      },
      {
        title: "Why the term matters on herb pages",
        paragraphs: [
          "Famous herbs like ginseng, astragalus, codonopsis, prepared rehmannia, and black sesame often attract tonify-language.",
          "If the term is left unexplained, readers may either overestimate the claim or miss the traditional nuance completely.",
        ],
        bullets: [
          "Tonify is a traditional translation word.",
          "It usually needs another noun after it, such as qi or blood.",
          "It should not be read as a one-size-fits-all recommendation.",
        ],
      },
      {
        title: "The practical reading habit to learn",
        paragraphs: [
          "Whenever you see tonify on HerbGuide, the useful next question is: tonify what, in what traditional sense, and through what kind of ingredient or preparation?",
          "That reading habit makes the whole herb library easier to understand.",
        ],
      },
    ],
  },
  {
    slug: "what-does-moisten-dryness-mean",
    title: "What Does Moisten Dryness Mean?",
    description:
      "A simple guide to one of the most common TCM phrases used on food therapy and gentle herb pages.",
    eyebrow: "TCM Basics",
    intro:
      "Moisten dryness is a classic TCM phrase that appears often on pages about pear, lily bulb, mulberry, and ophiopogon. It belongs to a traditional language system that connects climate, food texture, and seasonal reading in ways many English-speaking readers have not seen before.",
    sections: [
      {
        title: "Why the phrase appears so often",
        paragraphs: [
          "Dryness is one of the easiest traditional ideas to connect with season, weather, and food routine. Readers can imagine dry air, scratchy conditions, or the desire for softer foods even before they know the technical vocabulary.",
          "That makes moisten dryness one of the most useful phrases for beginner education.",
        ],
      },
      {
        title: "How to read it responsibly",
        paragraphs: [
          "On HerbGuide, moisten dryness is explained as part of traditional classification and seasonal food language.",
          "It is not presented as a direct promise about one symptom or one person. That distinction matters for safe and credible content.",
        ],
        bullets: [
          "The phrase often appears on gentle food pages.",
          "It is tied to traditional climate and texture language.",
          "It should stay descriptive, not prescriptive.",
        ],
      },
      {
        title: "Where to see the idea in practice",
        paragraphs: [
          "Pear and lily bulb content is one of the clearest ways to understand how this phrase works. So are pages on lily bulb, mulberry, and other softer seasonal ingredients.",
          "That is why HerbGuide links these explanation pages closely with food therapy content instead of keeping them isolated.",
        ],
      },
    ],
  },
];

export const classicsArticles: ContentArticle[] = [
  {
    slug: "huangdi-neijing",
    title: "Huangdi Neijing",
    description:
      "Why the Yellow Emperor's Inner Canon still shapes the language of Chinese medicine and herb writing today.",
    eyebrow: "Chinese Classics",
    intro:
      "The Huangdi Neijing, often translated as the Yellow Emperor's Inner Canon, is one of the foundational classical works behind Chinese medicine. Modern readers usually feel its influence indirectly through ideas about seasons, balance, habits, and the relationship between food, climate, and daily life.",
    sections: [
      {
        title: "Why this book matters",
        paragraphs: [
          "It is not a modern beginner handbook. Instead, it lays out a worldview: how the body is understood, how climate and season matter, and how imbalance is described.",
          "That worldview still shapes the language used in TCM basics, herb categories, and many Chinese food tradition articles.",
        ],
      },
      {
        title: "What readers can still learn from it",
        paragraphs: [
          "The book is useful even for readers who never plan to study the original text deeply.",
          "It helps explain why traditional Chinese writing often talks about harmony with seasons, moderation, and matching habits to context.",
        ],
      },
    ],
  },
  {
    slug: "bencao-gangmu",
    title: "Bencao Gangmu",
    description:
      "A beginner-friendly introduction to China's great herbal encyclopedia and why it matters for modern herb education.",
    eyebrow: "Chinese Classics",
    intro:
      "Bencao Gangmu, often called the Compendium of Materia Medica, is one of the most famous herb reference works in Chinese history. It matters because it shows that herb knowledge in China developed across kitchens, fields, markets, observations, and long-running literary traditions.",
    sections: [
      {
        title: "More than a list of herbs",
        paragraphs: [
          "For beginners, the value of Bencao Gangmu is not memorizing every entry. It is understanding that Chinese herb culture has deep reference roots.",
          "That background gives modern herb pages more credibility when they explain names, classifications, and food uses carefully.",
        ],
      },
      {
        title: "Why it fits HerbGuide",
        paragraphs: [
          "HerbGuide focuses on kitchen-friendly explanations, plain English, and traditional context.",
          "Bencao Gangmu supports that approach because it reflects a wide world of observation, culinary knowledge, and herb description rather than narrow marketing language.",
        ],
      },
    ],
  },
  {
    slug: "shanghan-lun",
    title: "Shanghan Lun",
    description:
      "How this classic text shaped formula thinking, pattern logic, and the traditional way herbs are combined.",
    eyebrow: "Chinese Classics",
    intro:
      "Shanghan Lun, often translated as the Treatise on Cold Damage, is central to classical formula thinking. Its importance is not that it praises random famous herbs. Its importance is the structured way it organizes patterns, timing, and combinations.",
    sections: [
      {
        title: "Why formula thinking matters",
        paragraphs: [
          "One major lesson of Shanghan Lun is that traditional practice rarely treats one herb as a universal answer.",
          "Instead, herbs are understood in relationship to pattern, preparation, sequence, and combination.",
        ],
      },
      {
        title: "Why readers should know the name",
        paragraphs: [
          "Even a lightweight educational site benefits from introducing this text because it explains why Chinese herb writing often cares so much about context.",
          "That background helps readers understand why HerbGuide keeps emphasizing wording, pattern language, and caution.",
        ],
      },
    ],
  },
  {
    slug: "shen-nong-ben-cao-jing",
    title: "Shen Nong Ben Cao Jing",
    description:
      "A beginner-friendly introduction to one of the earliest classic herb texts in the Chinese tradition.",
    eyebrow: "Chinese Classics",
    intro:
      "The Shen Nong Ben Cao Jing, often translated as the Divine Farmer's Classic of Materia Medica, is one of the earliest famous herb texts in the Chinese tradition. Modern readers usually meet it as background context rather than as a book they need to read line by line.",
    sections: [
      {
        title: "Why this early text still matters",
        paragraphs: [
          "It helps show that herb classification in China has very old roots. Categories, properties, and descriptive systems did not appear overnight in modern wellness media.",
          "Even if later books became more detailed, this text remains important as a historical starting point for herb literacy.",
        ],
      },
      {
        title: "What readers can take from it today",
        paragraphs: [
          "The value for most readers is perspective. It reminds us that herb language developed through long traditions of naming, comparing, and organizing ingredients.",
          "That makes modern herb pages easier to trust when they explain where their categories come from instead of pretending everything is newly discovered.",
        ],
      },
    ],
  },
  {
    slug: "jin-gui-yao-lue",
    title: "Jin Gui Yao Lue",
    description:
      "Why this classic matters for understanding formulas, household patterns, and later herb education.",
    eyebrow: "Chinese Classics",
    intro:
      "Jin Gui Yao Lue, often translated as Essential Prescriptions from the Golden Cabinet, is a major classical work associated with pattern thinking and practical formula tradition. It helps modern readers see how structured Chinese medicine writing became over time.",
    sections: [
      {
        title: "A bridge between theory and practical formulas",
        paragraphs: [
          "This classic matters because it shows Chinese medicine as a system that organized recurring patterns and responses, not just isolated herb trivia.",
          "That structure helps explain why later herb education cares so much about combinations, context, and wording.",
        ],
      },
      {
        title: "Why it belongs on a beginner-friendly site",
        paragraphs: [
          "Readers do not need technical mastery of the book. They only need to understand that practical herb and formula language comes from a lineage with real depth.",
          "Including this text strengthens the site's educational credibility without making the tone overly academic.",
        ],
      },
    ],
  },
  {
    slug: "wen-bing-xue",
    title: "Wen Bing Xue",
    description:
      "A simple introduction to the warm disease tradition and why it shaped later heat-related language in Chinese medicine.",
    eyebrow: "Chinese Classics",
    intro:
      "Wen Bing Xue refers to the warm disease tradition in Chinese medicine, a body of thought that shaped how later practitioners described heat, dryness, and febrile patterns. It matters because many modern readers encounter heat-related herb language without knowing this background exists.",
    sections: [
      {
        title: "Why this tradition matters",
        paragraphs: [
          "It gives context for why some herbs and foods are described in relation to heat, summer weather, dryness, and fluids.",
          "That language appears often on pages about mint, chrysanthemum, mulberry, and moistening ingredients, even when the classical source is not named directly.",
        ],
      },
      {
        title: "What readers gain from this context",
        paragraphs: [
          "Understanding the warm disease tradition helps readers see that heat-related language has a historical framework behind it.",
          "It also reinforces one of HerbGuide's core principles: traditional descriptions should be explained carefully, not exaggerated into modern promises.",
        ],
      },
    ],
  },
];

export const foodTherapyArticles: ContentArticle[] = [
  {
    slug: "5-easy-chinese-food-therapy-ingredients-for-beginners",
    title: "5 Easy Chinese Food Therapy Ingredients for Beginners",
    description:
      "A practical starter guide to five approachable ingredients that already feel close to everyday cooking.",
    eyebrow: "Food Therapy",
    intro:
      "For many readers, the easiest entry into Chinese food traditions is not a complicated formula. It is a handful of familiar ingredients that already make sense in soups, teas, porridge, and pantry habits.",
    sections: [
      {
        title: "A simple beginner list",
        paragraphs: [
          "The strongest launch ingredients are fresh ginger, jujube, goji berry, chrysanthemum, and black sesame.",
          "They work well because readers can picture them in real food. That makes them easier to trust and easier to explain than concentrated products.",
        ],
        bullets: [
          "Fresh ginger: easy to connect with warming soups and teas.",
          "Jujube: familiar in sweet broths, teas, and kitchen routines.",
          "Goji berry: highly searchable and easy to place in porridge or soup.",
          "Chrysanthemum: approachable as a light floral tea ingredient.",
          "Black sesame: useful for pantry-style, dessert-style, and breakfast-style content.",
        ],
      },
      {
        title: "Why these ingredients are strong for SEO too",
        paragraphs: [
          "They combine familiarity, search demand, and cultural depth. Readers already know some of the names, but they still need better explanations.",
          "That makes them good for beginner guides, herb profiles, recipe pages, and internal linking.",
        ],
      },
    ],
  },
  {
    slug: "a-simple-warming-soup-guide-for-cold-weather",
    title: "A Simple Warming Soup Guide for Cold Weather",
    description:
      "A gentle introduction to seasonal soup traditions built around warming ingredients and practical kitchen steps.",
    eyebrow: "Food Therapy",
    intro:
      "Cold-weather soup content works well because it feels useful, familiar, and naturally seasonal. It also gives readers an easy place to understand how ingredients like ginger, jujube, and astragalus are traditionally discussed in Chinese kitchen writing.",
    recipe: {
      recipeYield: "2 to 3 bowls",
      prepTime: "PT10M",
      totalTime: "PT1H10M",
      ingredients: [
        "6 cups water or light broth",
        "2 to 3 slices fresh ginger",
        "4 dried jujubes, split and pitted if needed",
        "2 to 3 slices astragalus root",
        "1 small carrot, cut into chunks",
        "1 cup chicken pieces or firm tofu",
        "A small pinch of salt near the end",
      ],
      steps: [
        "Rinse the jujubes and astragalus slices quickly under cool water.",
        "Add the water or broth, ginger, jujube, astragalus, and carrot to a small pot and bring to a gentle boil.",
        "Lower the heat, add the chicken or tofu, and simmer slowly for 45 to 60 minutes.",
        "Taste the broth, remove the astragalus slices before serving if desired, and add only a light pinch of salt.",
        "Serve warm as a simple cold-weather soup alongside rice or a plain vegetable dish.",
      ],
      servingNotes: [
        "Keep the broth light rather than heavily seasoned.",
        "This kind of page works best as a comfort-food idea, not a promise about outcomes.",
      ],
      caution: [
        "Readers with complex health conditions or medication use should not treat a soup article as personal guidance.",
        "Astragalus is a traditional soup ingredient, but that does not make it right for every person or pattern.",
      ],
    },
    sections: [
      {
        title: "A beginner-friendly warming soup structure",
        paragraphs: [
          "A simple warming soup page usually starts with a light protein or vegetable base, then layers in a few traditional ingredients rather than too many.",
          "This makes the recipe easier to follow and easier to trust.",
        ],
        bullets: [
          "Base ingredients can include chicken, root vegetables, or a mild broth.",
          "Fresh ginger often serves as the clearest warming anchor.",
          "Jujube adds familiarity and a softer flavor profile.",
          "Astragalus can be introduced carefully as a traditional soup ingredient.",
        ],
      },
      {
        title: "Why this kind of page matters",
        paragraphs: [
          "Recipe pages like this help the site feel practical rather than abstract.",
          "They also create a natural bridge between herb profiles, safety notes, and kitchen-focused long-tail SEO topics.",
        ],
      },
    ],
  },
  {
    slug: "jujube-and-ginger-tea-for-busy-weeks",
    title: "Jujube and Ginger Tea for Busy Weeks",
    description:
      "A simple tea-style kitchen routine that shows how two approachable ingredients can be explained with clarity and restraint.",
    eyebrow: "Food Therapy",
    intro:
      "Jujube and ginger make a strong beginner pairing because the idea is easy to picture: a few slices, a few pieces, hot water, and a short kitchen routine. That is exactly the kind of content that encourages repeat visits without overcomplicating the site.",
    recipe: {
      recipeYield: "2 mugs",
      prepTime: "PT5M",
      totalTime: "PT20M",
      ingredients: [
        "4 dried jujubes, lightly split",
        "4 to 5 thin slices fresh ginger",
        "3 cups water",
        "Optional: a small slice of pear for a softer flavor",
      ],
      steps: [
        "Rinse the jujubes and ginger.",
        "Add the water, jujubes, and ginger to a small pot and bring to a light boil.",
        "Lower the heat and simmer gently for 12 to 15 minutes.",
        "Turn off the heat, let the tea rest for 2 minutes, then strain into mugs.",
        "Serve warm and keep the flavor simple rather than turning it into a very sweet drink.",
      ],
      servingNotes: [
        "This is best framed as a kitchen routine rather than a daily rule.",
        "A milder flavor usually makes the page feel more approachable to beginners.",
      ],
      caution: [
        "Even gentle tea-style pages should avoid implying that everyone should use the same routine regularly.",
      ],
    },
    sections: [
      {
        title: "Why this pairing works for beginners",
        paragraphs: [
          "Both ingredients are easy to explain, easy to source, and closely tied to practical food use.",
          "That makes them stronger for an educational launch than more advanced ingredients that need heavier caution framing.",
        ],
      },
      {
        title: "What a full article should include",
        paragraphs: [
          "A strong standalone article can include a short ingredient list, simple preparation steps, timing guidance, and a short note on how the pairing is traditionally described.",
          "It can also link directly back to the jujube and ginger herb pages so readers can keep learning without leaving the site.",
        ],
        bullets: [
          "Ingredient list",
          "Step-by-step preparation",
          "Serving suggestions",
          "Traditional context in plain English",
          "Visible caution note",
        ],
      },
    ],
  },
  {
    slug: "pear-and-lily-bulb-soup-for-dry-days",
    title: "Pear and Lily Bulb Soup for Dry Days",
    description:
      "A gentle food therapy article built around two familiar ingredients often used in traditional discussions of dryness.",
    eyebrow: "Food Therapy",
    intro:
      "Pear and lily bulb create one of the softest, most approachable traditional pairings on the site. The flavor feels calm, the ingredient story is easy to explain, and the page naturally supports beginner readers who want seasonal kitchen ideas without hype.",
    recipe: {
      recipeYield: "2 bowls",
      prepTime: "PT10M",
      totalTime: "PT35M",
      ingredients: [
        "1 ripe pear, peeled and cut into chunks",
        "1/4 cup dried lily bulb, rinsed",
        "3 cups water",
        "1 to 2 small jujubes, optional",
        "Optional: a few goji berries added near the end",
      ],
      steps: [
        "Rinse the lily bulb and prepare the pear.",
        "Add the water, pear, lily bulb, and optional jujubes to a small pot.",
        "Bring to a gentle boil, then lower the heat and simmer for about 25 minutes.",
        "Add a few goji berries during the last 3 minutes if you want a slightly richer finish.",
        "Serve warm with the cooking liquid as a light soup or dessert-style bowl.",
      ],
      servingNotes: [
        "This pairing works well when readers want a very soft, simple seasonal recipe.",
        "The flavor should stay delicate rather than heavily sweetened.",
      ],
      caution: [
        "Dryness language here is traditional Chinese food language, not a diagnosis.",
      ],
    },
    sections: [
      {
        title: "Why this pairing works",
        paragraphs: [
          "Pear is already familiar to most readers, while lily bulb adds a distinctive traditional angle without feeling extreme or inaccessible.",
          "Together they create a good teaching page for how Chinese food therapy talks about dryness, softness, and gentle kitchen routines.",
        ],
        bullets: [
          "Pear makes the page approachable.",
          "Lily bulb adds traditional context.",
          "The pairing fits soup, dessert soup, or light simmered preparations.",
        ],
      },
      {
        title: "What the article can teach beyond the recipe",
        paragraphs: [
          "A page like this does more than list ingredients. It helps readers understand how seasonal kitchen habits are described in Chinese food writing.",
          "It also creates strong internal links to pear-style seasonal content, lily bulb, and dryness-related herb pages.",
        ],
      },
    ],
  },
  {
    slug: "black-sesame-breakfast-ideas-for-beginners",
    title: "Black Sesame Breakfast Ideas for Beginners",
    description:
      "A practical pantry-style article that turns black sesame into an easy daily-use content hub.",
    eyebrow: "Food Therapy",
    intro:
      "Black sesame works especially well in breakfast-style content because it already feels at home in porridge, paste, buns, desserts, and simple topping ideas. That makes it one of the strongest bridge ingredients between search traffic and repeat readers.",
    sections: [
      {
        title: "Why breakfast content is useful",
        paragraphs: [
          "Breakfast articles are naturally practical. Readers can picture the ingredient in a real routine, which makes the traditional context easier to trust and remember.",
          "This also gives the site more everyday-use content rather than relying only on theory pages.",
        ],
      },
      {
        title: "Good beginner formats",
        paragraphs: [
          "A strong black sesame article can include congee, warm cereal, sesame paste, toast toppings, or dessert-style bowls.",
          "The key is to keep the preparation simple and the tone educational rather than making dramatic beauty or wellness promises.",
        ],
        bullets: [
          "Black sesame congee",
          "Warm grain bowl topping",
          "Simple sesame paste",
          "Dessert-style breakfast bowl",
        ],
      },
    ],
  },
  {
    slug: "chrysanthemum-and-mint-cooling-tea-basics",
    title: "Chrysanthemum and Mint Cooling Tea Basics",
    description:
      "A simple cooling tea explainer that helps readers understand two familiar herbs in practical kitchen language.",
    eyebrow: "Food Therapy",
    intro:
      "Chrysanthemum and mint are a strong pair for educational tea content because both ingredients already feel recognizable, and both help explain what cooling language means in Chinese food traditions.",
    recipe: {
      recipeYield: "2 mugs",
      prepTime: "PT5M",
      totalTime: "PT12M",
      ingredients: [
        "1 tablespoon dried chrysanthemum flowers",
        "6 to 8 fresh mint leaves or 1 teaspoon dried mint",
        "2 1/2 cups hot water",
        "Optional: a thin slice of pear for a softer flavor",
      ],
      steps: [
        "Place the chrysanthemum and mint in a teapot or heat-safe cup.",
        "Pour the hot water over the herbs and cover lightly.",
        "Steep for 5 to 7 minutes, depending on how strong you want the flavor.",
        "Remove the herbs or strain the tea before serving.",
        "Drink warm or let it cool slightly if you want a lighter summer-style cup.",
      ],
      servingNotes: [
        "This works best as a simple educational tea rather than a concentrated herbal drink.",
        "Mint can dominate the cup quickly, so lighter amounts are usually better for beginners.",
      ],
      caution: [
        "Cooling herbs are not automatically appropriate for everyone in every season.",
      ],
    },
    sections: [
      {
        title: "Why this is a strong beginner tea page",
        paragraphs: [
          "The pairing is easy to picture and easy to explain. Readers can immediately understand that this is a tea-style educational page, not a complicated formula.",
          "That clarity is helpful for AdSense-friendly tone as well as beginner trust.",
        ],
      },
      {
        title: "What the article should include",
        paragraphs: [
          "A complete page can explain simple steeping, flavor balance, serving ideas, and the traditional reason these ingredients are often described as cooling.",
          "It should also make it clear that cooling language belongs to a traditional framework and is not a one-size-fits-all instruction.",
        ],
        bullets: [
          "Simple ingredient amounts",
          "Short steeping steps",
          "Flavor notes",
          "Traditional context in plain English",
          "Visible caution language",
        ],
      },
    ],
  },
];
