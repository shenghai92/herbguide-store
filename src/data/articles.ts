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
];
