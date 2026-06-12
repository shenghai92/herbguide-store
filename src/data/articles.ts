import { sanitizeContentArticle } from "../utils/publicCopy";

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

const rawBasicsArticles: ContentArticle[] = [
  {
    slug: "what-is-traditional-herb-theory",
    title: "What Is Traditional Herb Theory?",
    description:
      "A clear first look at traditional herb theory in plain American English, with practical explanations and clear boundaries.",
    eyebrow: "Basics",
    intro:
      "Traditional herb theory is a long-running body of ideas about the body, food, herbs, climate, rhythm, and patterns. Here, it is presented as a traditional framework that helps readers understand herb language and food traditions, not as individualized guidance.",
    sections: [
      {
        title: "A traditional framework, not a modern labeling system",
        paragraphs: [
          "This framework uses its own vocabulary to describe how the body functions, how climate and season are understood, and how herbs and foods are traditionally categorized.",
          "That vocabulary does not map neatly onto modern lab testing or personal labeling. A reader can still learn a lot from it, but it should be read as part of a historical and cultural system.",
        ],
      },
      {
        title: "Why readers still care about this framework today",
        paragraphs: [
          "Many English-language readers first meet this framework through tea, soups, herbal products, acupuncture, or family food traditions.",
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
          "HerbGuide uses this term as an educational frame. We explain how an herb is traditionally described, what those labels mean in plain English, and where caution is needed.",
          "We do not present these traditional phrases as direct promises, fixed plans, or instructions for any one person.",
        ],
      },
    ],
  },
  {
    slug: "what-does-qi-mean",
    title: "What Does Qi Mean?",
    description:
      "A practical plain-English explanation of qi for readers who want to understand traditional herb writing.",
    eyebrow: "Basics",
    intro:
      "Qi is one of the most common and most misunderstood words in traditional herb writing. HerbGuide usually explains it in plain English as function, activity, momentum, resilience, or vitality, depending on context.",
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
          "When a herb is described in traditional writing as relating to qi, HerbGuide translates that into readable English rather than repeating jargon without explanation.",
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
      "A beginner-friendly guide to one of the easiest traditional food ideas to connect with everyday meals.",
    eyebrow: "Basics",
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
          "Warming and cooling are easier for many readers to grasp than more abstract traditional terms because they connect directly to meals, drinks, and seasonal habits.",
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
      "An accessible explanation of a classic traditional pattern term that many beginners see but rarely understand.",
    eyebrow: "Basics",
    intro:
      "Dampness is a traditional term that often sounds strange in English. It does not literally mean the body is wet. Instead, it points to a pattern language built around heaviness, sluggishness, cloudiness, and things not moving or transforming smoothly.",
    sections: [
      {
        title: "Why the term sounds confusing at first",
        paragraphs: [
          "A direct translation can feel awkward because the English word damp usually refers to weather, walls, or fabric.",
          "In traditional writing, the word is broader and more symbolic. It belongs to a traditional model, not a modern checklist or direct personal label.",
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
          "It is useful for understanding herb pages, but it should not be turned into self-labeling.",
        ],
      },
    ],
  },
  {
    slug: "what-is-yin-and-yang",
    title: "What Is Yin and Yang?",
    description:
      "A simple explanation of yin and yang for readers who want to understand traditional herb and food language without mystifying it.",
    eyebrow: "Basics",
    intro:
      "Yin and yang are among the most recognizable terms in Chinese thought, but they are often flattened into vague internet slogans. Here, they are explained as a traditional way of describing relationship, balance, contrast, and change.",
    sections: [
      {
        title: "A language of relationship, not two magic substances",
        paragraphs: [
          "Yin and yang describe how things relate to one another. They help organize ideas like rest and activity, interior and exterior, coolness and warmth, substance and function.",
          "That is why the terms show up across herb writing, kitchen traditions, lifestyle advice, and the classics. They are part of a framework, not isolated buzzwords.",
        ],
      },
      {
        title: "Why beginners see these terms everywhere",
        paragraphs: [
          "Many traditional explanations assume readers already know what yin and yang mean, but most English-language readers only know them in a decorative or philosophical sense.",
          "A plain-English explanation helps readers understand why herbs may be described as nourishing yin, supporting yang, or balancing hot and cold patterns.",
        ],
        bullets: [
          "Yin often relates to cooling, moistening, settling, or material support in traditional language.",
          "Yang often relates to warming, moving, activating, or functional strength in traditional language.",
          "Neither term should be read like a direct personal label.",
        ],
      },
      {
        title: "How HerbGuide uses yin and yang language",
        paragraphs: [
          "HerbGuide uses these terms to explain traditional descriptions more clearly, especially when comparing herbs, foods, and seasonal habits.",
          "We keep the language educational and avoid turning yin-yang ideas into simplistic rules for self-directed use.",
        ],
      },
    ],
  },
  {
    slug: "what-does-blood-mean",
    title: "What Does Blood Mean in Traditional Herb Writing?",
    description:
      "A careful beginner guide to the traditional idea of blood and why it is broader than the everyday English word suggests.",
    eyebrow: "Basics",
    intro:
      "When traditional herb writing talks about blood, it is not always speaking only about literal blood in a lab-based modern sense. In this framework, blood is a broader traditional concept tied to nourishment, grounding, and the body's ability to support tissues and rhythm.",
    sections: [
      {
        title: "Why the word causes confusion",
        paragraphs: [
          "English-speaking readers naturally assume blood means exactly what modern anatomy means by blood. In traditional writing, the term overlaps with that idea but also reaches further into a traditional model of nourishment and stability.",
          "That is why direct one-to-one translation can be misleading if no explanation is provided.",
        ],
      },
      {
        title: "How blood shows up in herb pages",
        paragraphs: [
          "Some herbs are traditionally described as nourishing blood, moving blood, or preserving blood. Those phrases are part of a historical vocabulary used in traditional herb education.",
          "Here, that language is translated carefully so readers understand it as traditional theory rather than a promise about one personal condition.",
        ],
        bullets: [
          "Blood in this framework is a traditional concept.",
          "It often overlaps with ideas of nourishment, moisture, and regulation.",
          "It should not be read as shorthand for self-labeling.",
        ],
      },
      {
        title: "Why this matters for responsible reading",
        paragraphs: [
          "Readers searching for cramping, dryness, tiredness, or cycle-related questions often find this blood language online very quickly.",
          "A responsible site should explain what the term means without nudging readers into overly specific interpretations. That is the standard HerbGuide follows.",
        ],
      },
    ],
  },
  {
    slug: "what-is-qi-stagnation",
    title: "What Is Qi Stagnation?",
    description:
      "A beginner-friendly guide to one of the most common pattern phrases in traditional herb writing.",
    eyebrow: "Basics",
    intro:
      "Qi stagnation is a traditional phrase used when movement, flow, or ease is described as constrained. It is a pattern term inside traditional herb writing, not a modern personal label, but readers see it often enough that it deserves a clear plain-English explanation.",
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
          "Qi stagnation is part of traditional pattern language.",
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
      "A clear beginner guide to why traditional herb pages describe fresh and dried ginger as related but not interchangeable.",
    eyebrow: "Basics",
    intro:
      "Many readers assume ginger is just ginger. Traditional herb writing makes a more careful distinction. Fresh ginger and dried ginger come from the same plant, but they are described differently because preparation changes how the ingredient is understood in traditional language and kitchen use.",
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
          "This comparison helps readers see one of the most important ideas in traditional herb education: preparation matters. A fresh ingredient and a dried ingredient can share a name while still being framed quite differently.",
          "That is one reason HerbGuide keeps herb pages separate instead of collapsing them into one generic ginger entry.",
        ],
        bullets: [
          "Fresh ginger is commonly linked with tea, soup, and kitchen-friendly warming language.",
          "Dried ginger is usually presented as stronger and more concentrated.",
          "Readers should not assume traditional categories frame all forms of an herb as interchangeable.",
        ],
      },
      {
        title: "How beginners should use this comparison",
        paragraphs: [
          "The most useful takeaway is not that one form is better. The useful takeaway is that traditional categories care about form, preparation, and context.",
          "Once readers understand this, other comparisons across the herb library become easier too.",
        ],
      },
    ],
  },
  {
    slug: "ginseng-vs-american-ginseng",
    title: "Ginseng vs American Ginseng",
    description:
      "A plain-English comparison that explains why traditional herb writing does not frame all ginseng as the same herb.",
    eyebrow: "Basics",
    intro:
      "English-language readers often use the word ginseng as if it refers to one simple category. Traditional herb writing is more precise. Ginseng and American ginseng are related, but they are traditionally described with different qualities and different educational use cases.",
    sections: [
      {
        title: "Why this comparison is so useful",
        paragraphs: [
          "This is one of the strongest beginner comparisons because the name overlap is strong while the traditional descriptions are not identical.",
          "It teaches readers that famous names can still hide important distinctions in traditional herb education.",
        ],
      },
      {
        title: "How the two are usually framed",
        paragraphs: [
          "Here, Ren Shen is introduced as a stronger classic tonic herb that needs careful framing. American ginseng is usually presented with a cooler profile and often appears in comparison articles for nuance.",
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
          "This is not only a ginseng lesson. It is a reading lesson. Traditional herb pages are easier to trust when they explain how names, forms, and qualities differ instead of flattening everything into broad marketing terms.",
          "That is why comparison pages are so useful for reader education.",
        ],
      },
    ],
  },
  {
    slug: "goji-berry-vs-jujube",
    title: "Goji Berry vs Jujube",
    description:
      "A beginner-friendly comparison of two popular Chinese pantry ingredients that show up often in teas and soups.",
    eyebrow: "Basics",
    intro:
      "Goji berry and jujube are two of the easiest Chinese ingredients for beginners to recognize, but they play different roles in flavor, texture, and traditional storytelling. Comparing them side by side helps readers understand why both are popular without assuming they are interchangeable.",
    sections: [
      {
        title: "Why readers compare these two so often",
        paragraphs: [
          "Both ingredients are approachable, familiar, and closely tied to tea and soup content. That makes them natural beginner favorites.",
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
        title: "Why this comparison fits the library well",
        paragraphs: [
          "This is exactly the kind of page that supports both clarity and usability. It answers a real beginner question while strengthening links between pantry-friendly herb profiles and kitchen content.",
          "It also stays safely educational rather than drifting into overpromised lifestyle language.",
        ],
      },
    ],
  },
  {
    slug: "what-does-clear-heat-mean",
    title: "What Does Clear Heat Mean?",
    description:
      "A plain-English explanation of one of the most common traditional phrases readers see on herb and tea pages.",
    eyebrow: "Basics",
    intro:
      "Clear heat is one of those classic phrases that shows up constantly in traditional herb writing but sounds vague in English. It belongs to a traditional descriptive system, not a modern labeling framework, and readers need a careful translation to use it well.",
    sections: [
      {
        title: "Why the phrase sounds stronger than it is",
        paragraphs: [
          "In English, clear heat can sound like a direct promise. In traditional writing, it is part of a pattern vocabulary used to describe how certain herbs and foods are categorized.",
          "That means the phrase should be read as context for traditional classification, not as a one-line explanation of a personal situation.",
        ],
      },
      {
        title: "Where readers usually meet this phrase",
        paragraphs: [
          "Many beginners first see clear heat language on pages about chrysanthemum, mint, cooling teas, or warm-weather food traditions.",
          "Without explanation, the phrase can create either confusion or overconfidence. A better site translates it into plain English and keeps the boundaries visible.",
        ],
        bullets: [
          "It is part of traditional heat-language, not a modern lab term.",
          "It often appears on cooling herb and tea pages.",
          "It should not be turned into self-labeling.",
        ],
      },
      {
        title: "How HerbGuide handles the phrase",
        paragraphs: [
          "HerbGuide uses clear heat as a traditional category label and then explains what kind of food or herb context that label usually points to.",
          "That keeps the page educational, readable, and more trustworthy.",
        ],
      },
    ],
  },
  {
    slug: "what-does-tonify-mean",
    title: "What Does Tonify Mean in Traditional Herb Writing?",
    description:
      "A beginner guide to the word tonify and why it appears so often on pages about famous herbs.",
    eyebrow: "Basics",
    intro:
      "Tonify is one of the most common English translations in traditional herb content, especially on pages about qi herbs, blood-related herbs, and kitchen-tradition routines. Readers often recognize the word but still do not know what it means in practice.",
    sections: [
      {
        title: "A translation with a lot of baggage",
        paragraphs: [
          "Tonify is not a word most people use in everyday conversation, which makes it easy to skim past without understanding it.",
          "In traditional writing, it usually points to traditional ideas of support, replenishment, or strengthening within a specific category like qi, blood, yin, or yang.",
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
      "A simple guide to one of the most common traditional phrases used on kitchen-tradition and gentle herb pages.",
    eyebrow: "Basics",
    intro:
      "Moisten dryness is a classic phrase that appears often on pages about pear, lily bulb, mulberry, and ophiopogon. It belongs to a traditional language system that connects climate, food texture, and seasonal reading in ways many English-speaking readers have not seen before.",
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
          "Here, moisten dryness is explained as part of traditional classification and seasonal food language.",
          "It is not presented as a direct promise about one situation or one person. That distinction matters for safe and credible content.",
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
          "That is why HerbGuide links these explanation pages closely with kitchen-tradition content instead of keeping them isolated.",
        ],
      },
    ],
  },
  {
    slug: "what-does-spleen-mean",
    title: "What Does Spleen Mean in Traditional Herb Writing?",
    description:
      "A beginner-friendly explanation of why the traditional spleen is not exactly the same thing as the organ name many readers know from modern anatomy.",
    eyebrow: "Basics",
    intro:
      "The traditional spleen is one of the most misunderstood terms in traditional herb writing because readers naturally assume it means only the modern anatomical organ. In traditional herb and food language, the spleen usually points to a broader functional system connected with transformation, nourishment, and daily digestive rhythm.",
    sections: [
      {
        title: "Why the term causes confusion",
        paragraphs: [
          "When readers see spleen on a herb page, they often think they are looking at a direct organ-targeting claim. In traditional writing, organ names often describe functional networks rather than one anatomical structure alone.",
          "That difference matters because many kitchen-tradition pages, tonic herb pages, and dampness pages rely on spleen-language heavily.",
        ],
      },
      {
        title: "How the traditional spleen is usually described",
        paragraphs: [
          "Here, the traditional spleen is usually explained through food transformation, appetite, heaviness, fluid handling, and general nourishment language.",
          "That makes it easier for readers to understand why astragalus, codonopsis, jujube, Chinese yam, and Job's Tears appear so often near spleen references.",
        ],
        bullets: [
          "The term belongs to a traditional model.",
          "It often appears in digestive and dampness-related content.",
          "It should not be read as a direct anatomical claim.",
        ],
      },
      {
        title: "Why this page matters for beginners",
        paragraphs: [
          "Once readers understand what spleen means in this framework, a large part of the herb library becomes much easier to read.",
          "It is one of the most useful glossary pages because it removes confusion from many other articles at once.",
        ],
      },
    ],
  },
  {
    slug: "what-does-liver-mean",
    title: "What Does Liver Mean in Traditional Herb Writing?",
    description:
      "A plain-English guide to one of the most common and most misunderstood organ-system words in traditional herb writing.",
    eyebrow: "Basics",
    intro:
      "The traditional liver is not just a one-to-one match for the modern anatomical liver. In traditional herb writing, liver often appears in discussions of flow, tension, blood storage, emotion, and the smooth movement of qi. That is why the word shows up on many herb pages that seem unrelated at first glance.",
    sections: [
      {
        title: "Why the term appears so often",
        paragraphs: [
          "Readers meet liver-language on pages about goji berry, chrysanthemum, white peony root, mint, and many comparison or pattern pages.",
          "Without explanation, this can make traditional writing feel either mystical or overly technical. A clear translation keeps the language grounded.",
        ],
      },
      {
        title: "How this guide explains liver-language",
        paragraphs: [
          "Here, the traditional liver is usually introduced through ideas of movement, stored blood, balance, and smoothness rather than through direct problem-solving claims.",
          "That style helps readers understand why qi stagnation, blood-related pages, and cooling tea pages may all touch the same term in different ways.",
        ],
        bullets: [
          "The traditional liver is a traditional functional system.",
          "It often overlaps with qi movement and blood-language.",
          "It should not be collapsed into one modern organ meaning.",
        ],
      },
      {
        title: "Where to see the concept in action",
        paragraphs: [
          "Comparison pages, cooling herb pages, and some nourishing herb pages are the easiest places to see this term used well.",
          "Once readers know what the traditional liver means, they can interpret a wider range of herb descriptions with much more confidence.",
        ],
      },
    ],
  },
  {
    slug: "what-does-yin-deficiency-mean",
    title: "What Does Yin Deficiency Mean?",
    description:
      "A cautious beginner guide to one of the most searched pattern phrases in traditional herb content.",
    eyebrow: "Basics",
    intro:
      "Yin deficiency is one of the most common phrases readers search after seeing traditional herb content online. It belongs to a traditional pattern vocabulary that often overlaps with dryness, heat, and depletion language, but it should not be turned into a self-labeling shortcut.",
    sections: [
      {
        title: "Why readers look for this term",
        paragraphs: [
          "Many herb pages use yin-language without fully explaining it, which leaves readers with a phrase but no useful framework.",
          "A better approach is to explain yin deficiency as part of traditional pattern reading and then show where that language appears in food, herb, and seasonal content.",
        ],
      },
      {
        title: "How the term usually behaves on educational sites",
        paragraphs: [
          "On a careful site, yin deficiency is usually explained through ideas of dryness, relative heat, depletion, or lack of cooling and moistening support in the traditional model.",
          "That is why readers may see it near pages about lily bulb, pear, mulberry, ophiopogon, and other softer ingredients.",
        ],
        bullets: [
          "It is a traditional pattern phrase.",
          "It often overlaps with dryness-related educational language.",
          "It should not be read as a personal label from one article.",
        ],
      },
      {
        title: "How this guide uses the phrase",
        paragraphs: [
          "This guide explains yin deficiency in plain English and then connects it to practical examples like moistening food pages and seasonal topic pages.",
          "That helps readers learn the vocabulary without drifting into exaggerated advice.",
        ],
      },
    ],
  },
  {
    slug: "what-does-shen-mean",
    title: "What Does Shen Mean in Traditional Herb Writing?",
    description:
      "A plain-English guide to the traditional idea of shen and why the term is broader than mind alone.",
    eyebrow: "Basics",
    intro:
      "Shen is one of the most misunderstood words in traditional herb writing. It is often translated as spirit, but on a careful beginner site it usually needs a fuller explanation: shen can point to presence, clarity, emotional steadiness, expression, and the visible quality of someone's overall state inside a traditional framework.",
    sections: [
      {
        title: "Why the word is hard to translate",
        paragraphs: [
          "If shen is translated only as spirit, many readers assume the term is purely mystical. If it is translated only as mind, important traditional nuance gets lost.",
          "A better plain-English approach is to explain shen as a traditional idea that overlaps with alertness, composure, expression, and mental-emotional presence.",
        ],
      },
      {
        title: "Where readers usually see shen-language",
        paragraphs: [
          "Readers often meet this word on pages about longan, lotus seed, jujube, schisandra, and other ingredients associated with gentler evening or nourishing traditions.",
          "Without explanation, those pages can sound vague. With explanation, they become much easier to understand as part of a broader cultural vocabulary.",
        ],
        bullets: [
          "Shen is a traditional concept, not a modern personal label.",
          "It often appears in calm, grounding, or evening-style content.",
          "It should not be turned into a promise about emotional outcomes.",
        ],
      },
      {
        title: "How HerbGuide uses the term",
        paragraphs: [
          "HerbGuide uses shen-language as educational context. We explain why the term appears, what it usually gestures toward in traditional writing, and where gentle food or tea pages make that language easier to grasp.",
          "That keeps the concept readable without drifting into mystical marketing or individualized advice.",
        ],
      },
    ],
  },
  {
    slug: "what-does-jing-mean",
    title: "What Does Jing Mean in Traditional Herb Writing?",
    description:
      "A careful beginner guide to the traditional idea of jing, often translated as essence.",
    eyebrow: "Basics",
    intro:
      "Jing is commonly translated as essence in traditional herb writing, but that translation can feel abstract or overly dramatic without context. Here, jing is explained as a traditional idea tied to deep reserves, development, reproduction, and long-term constitutional strength inside traditional theory.",
    sections: [
      {
        title: "Why the term gets overhyped online",
        paragraphs: [
          "Because essence sounds important, many websites use jing-language to make herbs sound more powerful than the evidence supports.",
          "A more responsible approach is to explain that jing belongs to a traditional model and is usually discussed in relation to long-term depth rather than quick effects.",
        ],
      },
      {
        title: "How readers may encounter jing",
        paragraphs: [
          "Jing often appears on pages about black sesame, goji berry, prepared rehmannia, eucommia bark, and other ingredients associated with nourishment or deeper reserve in traditional writing.",
          "That does not mean every page should make sweeping claims. It means the language needs careful translation and visible caution.",
        ],
        bullets: [
          "Jing is a traditional concept, not a measurable substance.",
          "It is often linked with long-term nourishment and constitutional depth.",
          "It should not be read as a shortcut to self-labeling or dramatic age-related promises.",
        ],
      },
      {
        title: "Why this page matters",
        paragraphs: [
          "A clear jing explainer supports herb pages that would otherwise sound too dense for beginners.",
          "It also gives curious readers a clearer glossary layer before they move into individual herb profiles.",
        ],
      },
    ],
  },
  {
    slug: "what-does-channel-entry-mean",
    title: "What Does Channel Entry Mean?",
    description:
      "A plain-English explanation of channel entry and why it appears on so many herb pages.",
    eyebrow: "Basics",
    intro:
      "Channel entry is one of the most common lines on herb pages and one of the least explained. In traditional writing, it describes the traditional functional systems and pathways an herb is said to relate to. It does not mean the herb only affects one literal organ in the modern anatomical sense.",
    sections: [
      {
        title: "Why this line confuses beginners",
        paragraphs: [
          "Readers often see channel entry next to nature and flavor, but no one explains what it is doing there. That can make the whole herb page feel more technical than it needs to be.",
          "A clearer explanation is that channel entry helps organize how a herb is traditionally grouped inside traditional theory. It belongs to a traditional map, not a lab-based body map.",
        ],
      },
      {
        title: "What organ names mean in this context",
        paragraphs: [
          "When a herb is said to enter the Lung, Spleen, Liver, or Kidney channel, the names point to broader traditional functional systems rather than one-to-one anatomical structures.",
          "That is why one herb can be discussed in relation to digestion, mood, seasonal dryness, or fluid balance while still listing only a few channels on the page.",
        ],
        bullets: [
          "Channel entry is traditional classification language.",
          "It gives context, not a personal recommendation.",
          "It works best when read together with nature, flavor, and practical use.",
        ],
      },
      {
        title: "How HerbGuide uses channel entry",
        paragraphs: [
          "HerbGuide keeps channel entry visible because it is part of real traditional herb reading, but we always pair it with plain-English explanation.",
          "That helps readers understand why fresh ginger, chrysanthemum, goji berry, and poria are described differently even when all four can appear in food-friendly content.",
        ],
      },
    ],
  },
  {
    slug: "what-is-food-stagnation",
    title: "What Is Food Stagnation?",
    description:
      "A plain-English guide to the traditional term food stagnation and why it appears on digestive tea and pantry pages.",
    eyebrow: "Basics",
    intro:
      "Food stagnation is a traditional phrase that usually appears in digestive writing around fullness, heaviness, rich meals, and the feeling that food is not moving or transforming smoothly in the traditional model. It is not a modern personal label, but it is a very common educational term on pantry-style herb pages.",
    sections: [
      {
        title: "Why this term matters for beginners",
        paragraphs: [
          "Readers looking up hawthorn berry, chen pi, dampness, or digestive tea pages often run into food stagnation language quickly.",
          "Without explanation, the phrase can sound either too literal or too mystical. A plain-English definition makes digestive content much easier to trust.",
        ],
      },
      {
        title: "How the phrase is usually used",
        paragraphs: [
          "On a careful educational site, food stagnation often points to heaviness after eating, rich-meal context, sluggishness, or the traditional idea that food is lingering rather than processing smoothly.",
          "This is one reason hawthorn berry, chen pi, ginger, and lighter porridge content fit so naturally around the term.",
        ],
        bullets: [
          "Food stagnation is a traditional digestive phrase.",
          "It is often discussed near rich meals and heavy foods.",
          "It should not be used for self-labeling from one article.",
        ],
      },
      {
        title: "How this guide handles the term",
        paragraphs: [
          "Food stagnation is used here to translate digestive kitchen language more clearly, especially on tea pages and topic pages.",
          "The goal is to help readers understand why certain ingredients are paired traditionally without pushing them toward personal use decisions.",
        ],
      },
    ],
  },
  {
    slug: "what-does-nourish-blood-mean",
    title: "What Does Nourish Blood Mean?",
    description:
      "A plain-English explanation of the common traditional phrase nourish blood and how HerbGuide uses it carefully.",
    eyebrow: "Basics",
    intro:
      "Nourish blood is one of the most common phrases on herb pages, but it can sound confusing or overly technical in English if no one explains it. On a careful educational site, the phrase points to a traditional idea of support, replenishment, and steadiness inside traditional theory rather than a direct modern claim.",
    sections: [
      {
        title: "Why this phrase needs translation",
        paragraphs: [
          "Readers naturally hear blood and assume the page is making a direct claim about lab values or personal labels. In traditional writing, blood is a broader traditional concept tied to nourishment, grounding, moisture, and rhythm.",
          "That is why a phrase like nourish blood needs plain-English explanation instead of being repeated as if it were self-explanatory.",
        ],
      },
      {
        title: "Where readers see nourish blood language",
        paragraphs: [
          "This phrase often appears on pages about jujube, goji berry, white peony root, mulberry fruit, prepared rehmannia, and other nourishing ingredients or classic herbs.",
          "On kitchen pages, the meaning is usually softer and more contextual: repeated gentle foods, soups, porridges, and dessert-soup traditions rather than dramatic promises.",
        ],
        bullets: [
          "Nourish blood is traditional herb language.",
          "It often overlaps with steadiness, softness, and replenishing context.",
          "It should not be read as a personal label or directed-use instruction.",
        ],
      },
      {
        title: "How HerbGuide uses the phrase",
        paragraphs: [
          "HerbGuide keeps the phrase visible because it is part of real herb reading, but we always explain it in a more grounded voice.",
          "That makes blood-related herb pages easier to trust and helps readers move from glossary learning into food-friendly pages without confusion.",
        ],
      },
    ],
  },
  {
    slug: "what-is-damp-heat",
    title: "What Is Damp Heat?",
    description:
      "A careful beginner guide to the traditional phrase damp heat and why it appears in digestive and seasonal content.",
    eyebrow: "Basics",
    intro:
      "Damp heat is a very common pattern phrase in traditional herb content, especially on digestive, seasonal, or skin-adjacent pages. It belongs to a traditional descriptive system, not a modern personal label, but readers see it often enough that it deserves a clear, low-hype explanation.",
    sections: [
      {
        title: "Why this term feels confusing at first",
        paragraphs: [
          "The two words sound concrete in English, but together they refer to a traditional pattern idea rather than literal weather inside the body.",
          "A useful beginner approach is to understand damp heat as a traditional way of describing heaviness, stickiness, and heat-like qualities appearing together in the traditional model.",
        ],
      },
      {
        title: "How the phrase is used on educational sites",
        paragraphs: [
          "Readers often meet damp heat near digestive pages, richer food discussions, aromatic herbs, or seasonal articles that explain why some ingredients are framed as lighter, more cooling, or more drying in context.",
          "Without translation, the phrase can push readers toward self-labeling. With translation, it becomes a vocabulary tool instead.",
        ],
        bullets: [
          "Damp heat is a traditional pattern phrase.",
          "It often appears around digestive and seasonal content.",
          "It should be read as educational context rather than self-labeling.",
        ],
      },
      {
        title: "Why this page matters",
        paragraphs: [
          "A damp heat explainer makes digestive topic pages and glossary reading more complete, especially for readers who arrive through comparison or kitchen pages.",
          "It also connects directly to hawthorn, chen pi, poria, mint, and lighter recipe pages that use similar language.",
        ],
      },
    ],
  },
  {
    slug: "chen-pi-vs-hawthorn-berry",
    title: "Chen Pi vs Hawthorn Berry",
    description:
      "A plain-English comparison of chen pi and hawthorn berry for readers exploring digestive Chinese pantry ingredients.",
    eyebrow: "Basics",
    intro:
      "Chen pi and hawthorn berry often appear on the same kinds of pages: rich meals, digestive heaviness, tea-style kitchen ideas, and traditional discussions of food moving more smoothly. They overlap enough to confuse beginners, but they do not tell the same story. A side-by-side comparison makes that much clearer.",
    sections: [
      {
        title: "Why readers compare these two ingredients",
        paragraphs: [
          "Both ingredients are approachable, food-adjacent, and easier to picture than many dense formula herbs.",
          "They also appear near the same kinds of questions: what to read after a heavy meal, what digestive pantry herbs mean in traditional writing, and how to understand aromatic versus tart digestive language.",
        ],
      },
      {
        title: "How the two usually differ",
        paragraphs: [
          "Chen pi is usually introduced through aroma, citrus peel, qi movement, and the idea of helping things feel less stuck or heavy in a broader digestive sense.",
          "Hawthorn berry is easier to frame around rich meals, fuller food stagnation language, and a more fruit-centered kitchen story.",
        ],
        bullets: [
          "Chen pi is an aged citrus peel with an aromatic pantry identity.",
          "Hawthorn berry is a tart fruit with stronger rich-meal comparison value.",
          "Both belong to traditional digestive context, not one-size-fits-all advice.",
        ],
      },
      {
        title: "How beginners should use this comparison",
        paragraphs: [
          "The point is not that one ingredient is better. The point is that traditional kitchen language separates ingredients by story, flavor, context, and traditional role.",
          "Once readers understand this, digestive topic pages and tea pages become much easier to follow.",
        ],
      },
    ],
  },
  {
    slug: "poria-vs-jobs-tears",
    title: "Poria vs Job's Tears",
    description:
      "A practical plain-English comparison of poria and Job's Tears for readers learning dampness-related Chinese pantry language.",
    eyebrow: "Basics",
    intro:
      "Poria and Job's Tears often appear near the same traditional term: dampness. That overlap can make them look interchangeable, but they are easier to understand when separated clearly. One reads more like a classic herb-context ingredient, while the other feels more like a grain-style pantry food that beginners can picture more easily.",
    sections: [
      {
        title: "Why this comparison matters",
        paragraphs: [
          "Many readers can imagine Job's Tears in porridge or soup, but poria feels more unfamiliar and more technical.",
          "Putting them side by side helps show how HerbGuide moves from plain kitchen examples into deeper traditional vocabulary without losing clarity.",
        ],
      },
      {
        title: "How the two are usually framed",
        paragraphs: [
          "Poria is often introduced as a traditional herb-context ingredient connected to dampness, fluids, and broader formula or soup discussions.",
          "Job's Tears is easier to explain through grain bowls, porridge, soup, and the feeling of a lighter pantry routine in seasonal digestive content.",
        ],
        bullets: [
          "Poria usually feels more library-like and theory-supportive.",
          "Job's Tears usually feels more pantry-friendly and recipe-ready.",
          "Both help readers understand dampness language in a traditional framework.",
        ],
      },
      {
        title: "What readers should learn from the contrast",
        paragraphs: [
          "This comparison teaches one of the most useful HerbGuide lessons: traditional herb learning is often easier when one concept page, one comparison page, and one kitchen page are read together.",
          "For dampness, that often means reading the glossary term first, then comparing ingredients, then opening a porridge or soup page right away.",
        ],
      },
    ],
  },
  {
    slug: "chrysanthemum-vs-mint",
    title: "Chrysanthemum vs Mint",
    description:
      "A plain-English comparison of chrysanthemum and mint for readers learning cooling tea language in traditional content.",
    eyebrow: "Basics",
    intro:
      "Chrysanthemum and mint are two of the easiest cooling herbs for beginners to recognize. They often appear together in tea content, but they do not play the same role. One usually reads more floral and gentle, while the other feels more aromatic and brisk. A direct comparison makes cooling language much easier to understand.",
    sections: [
      {
        title: "Why readers compare these two so often",
        paragraphs: [
          "Both ingredients feel familiar, both are easy to picture in tea, and both sit close to seasonal or clear-heat vocabulary.",
          "That overlap is useful for discovery, but it can also blur the differences unless the page explains them directly.",
        ],
      },
      {
        title: "How the two usually differ",
        paragraphs: [
          "Chrysanthemum is often introduced through floral tea, warm-afternoon reading, and a softer cooling story that pairs well with pear or goji.",
          "Mint is usually easier to frame through freshness, aroma, lighter blends, and a more immediately brisk style of cooling language.",
        ],
        bullets: [
          "Chrysanthemum usually feels more floral and visually gentle.",
          "Mint usually feels more aromatic and sharp.",
          "Both are part of traditional cooling language, not universal advice.",
        ],
      },
      {
        title: "What beginners should learn from the comparison",
        paragraphs: [
          "The most useful lesson is that even familiar herbs can carry different traditional stories and different kitchen tones.",
          "Once readers understand this, tea pages and seasonal topic pages stop feeling repetitive and start feeling more intentional.",
        ],
      },
    ],
  },
  {
    slug: "goji-berry-tea-vs-goji-berry-porridge",
    title: "Goji Berry Tea vs Goji Berry Porridge",
    description:
      "A kitchen-first comparison of goji berry tea and goji berry porridge for readers deciding where to start with this popular pantry ingredient.",
    eyebrow: "Basics",
    intro:
      "Goji berry is one of the most approachable ingredients on HerbGuide, but the same ingredient can feel very different depending on whether it is steeped in a cup or cooked into a bowl. Comparing tea and porridge use helps readers understand how traditional kitchen traditions change the feel of an ingredient without changing its identity.",
    sections: [
      {
        title: "Why this comparison matters",
        paragraphs: [
          "Many beginners meet goji through tea first because it is quick and visual. Others trust porridge more because it feels closer to food and daily routine.",
          "A side-by-side page helps both readers see that the difference is not only taste. It is also about texture, mood, and how kitchen learning is framed.",
        ],
      },
      {
        title: "How the two formats usually differ",
        paragraphs: [
          "Goji tea is lighter, faster, and easier to pair with other gentle ingredients like chrysanthemum or pear.",
          "Goji porridge is softer, slower, and better for readers who like breakfast-style pantry content or repeated food routines rather than a simple infusion.",
        ],
        bullets: [
          "Tea feels lighter and more visual.",
          "Porridge feels more grounding and meal-like.",
          "Both are food-first uses, but they help readers understand the ingredient in different ways.",
        ],
      },
      {
        title: "What this teaches about the library's style",
        paragraphs: [
          "This comparison shows how HerbGuide prefers practical kitchen distinctions over vague lifestyle claims.",
          "It also helps readers move between herb pages, tea pages, and breakfast pages with a clearer sense of what to click next.",
        ],
      },
    ],
  },
  {
    slug: "what-does-astringent-mean",
    title: "What Does Astringent Mean?",
    description:
      "A plain-English explanation of astringent as a traditional herb quality in traditional herb writing.",
    eyebrow: "Basics",
    intro:
      "Astringent is one of the most confusing words on many herb pages because English-speaking readers usually know it only as a taste or a skin-care term. In traditional writing, it is a traditional quality that often points to holding, containing, or preventing excessive leakage in the classical sense.",
    sections: [
      {
        title: "Why the word feels strange at first",
        paragraphs: [
          "Most beginners do not expect to see the word astringent on a herb page, much less on berries or seeds. That is why it needs explanation instead of repetition.",
          "In traditional writing, astringent belongs to a traditional descriptive system, not a modern personal label.",
        ],
      },
      {
        title: "How astringent language appears on herb pages",
        paragraphs: [
          "Readers often meet this word on pages about schisandra berry, lotus seed, and some other ingredients that are described as helping hold things in or reduce excess loss in the traditional framework.",
          "A responsible site should explain that this is historical herb vocabulary, not a reason for self-labeling or self-directed use.",
        ],
        bullets: [
          "Astringent is a traditional herb quality.",
          "It often overlaps with language about containment or restraint.",
          "The word should be read in context, not as a one-word personal recommendation.",
        ],
      },
      {
        title: "Why this matters here",
        paragraphs: [
          "Explaining astringent clearly helps schisandra, lotus seed, and related pages feel much easier to trust.",
          "It also supports a more educational tone across pantry tea and evening-style content.",
        ],
      },
    ],
  },
  {
    slug: "what-does-harmonizing-mean",
    title: "What Does Harmonizing Mean?",
    description:
      "A plain-English explanation of harmonizing as a traditional role in herb and formula writing.",
    eyebrow: "Basics",
    intro:
      "Harmonizing is one of those traditional words that sounds gentle in English but can feel vague on a herb page. In traditional herb writing, it usually points to balance, coordination, or helping different ingredients work together more smoothly inside a formula or food-style framework.",
    sections: [
      {
        title: "Why the word can feel unclear",
        paragraphs: [
          "Many beginners read harmonizing and assume it is just pleasant marketing language. On a serious herb page, though, it belongs to older technical vocabulary with a specific teaching role.",
          "It does not mean every harmonizing herb does the same thing. It means the herb is often discussed through relationship, moderation, or support rather than through one loud standalone action.",
        ],
      },
      {
        title: "How harmonizing shows up on herb pages",
        paragraphs: [
          "Readers often meet this language on pages about licorice root, formula support, or herbs that are described as helping ingredients fit together in a more balanced way.",
          "That is why harmonizing often appears near digestive, tonic, or formula-context writing instead of only next to one narrow situation phrase.",
        ],
        bullets: [
          "Harmonizing is part of traditional herb vocabulary.",
          "It often points to balance, coordination, or formula support.",
          "The term should be read as context, not as a one-word personal recommendation.",
        ],
      },
      {
        title: "Why this matters here",
        paragraphs: [
          "Explaining harmonizing clearly makes pages like licorice root easier to trust because readers can see why the herb keeps appearing in broader formula discussions.",
          "It also gives beginners a better bridge between pantry-friendly herb pages and more classical content where formulas matter much more.",
        ],
      },
    ],
  },
  {
    slug: "mulberry-fruit-vs-goji-berry",
    title: "Mulberry Fruit vs Goji Berry",
    description:
      "A pantry-friendly comparison of two popular Chinese berries that often appear in tea, gentle nourishment pages, and seasonal food writing.",
    eyebrow: "Basics",
    intro:
      "Mulberry fruit and goji berry can look similar in broad pantry content, but they do not create the same feeling on the page. A side-by-side comparison helps readers understand why goji often anchors beginner pages while mulberry fruit tends to show up in softer dryness, moisture, or berry-tea themes.",
    sections: [
      {
        title: "Why these two berries get confused",
        paragraphs: [
          "Both ingredients are small fruits, both are highly visual, and both can appear in tea or gentle food-style content.",
          "That overlap makes a comparison page useful for readers who want clearer distinctions without dense technical theory.",
        ],
      },
      {
        title: "How HerbGuide usually separates them",
        paragraphs: [
          "Goji berry usually reads as the easier all-purpose beginner berry because it already feels familiar in porridge, soups, teas, and grocery culture.",
          "Mulberry fruit often feels softer, more seasonal, and slightly more niche, which makes it useful for moisture and berry-tea themes rather than for every beginner page.",
        ],
        bullets: [
          "Goji usually fits broader pantry and breakfast routes.",
          "Mulberry often fits softer tea and seasonal berry content.",
          "The same format does not make two herbs interchangeable.",
        ],
      },
      {
        title: "What readers should click after this comparison",
        paragraphs: [
          "The best next step is usually either a practical recipe page or the individual herb profiles for goji berry and mulberry fruit.",
          "That lets readers move from comparison language into real kitchen context immediately.",
        ],
      },
    ],
  },
];

export const basicsArticles = rawBasicsArticles.map((article) => sanitizeContentArticle(article));

export const classicsArticles: ContentArticle[] = [
  {
    slug: "huangdi-neijing",
    title: "Huangdi Neijing",
    description:
      "Why the Yellow Emperor's Inner Canon still shapes the language of traditional herb writing today.",
    eyebrow: "Chinese Classics",
    intro:
      "The Huangdi Neijing, often translated as the Yellow Emperor's Inner Canon, is one of the foundational classical works behind traditional herb theory. Modern readers usually feel its influence indirectly through ideas about seasons, balance, habits, and the relationship between food, climate, and daily life.",
    sections: [
      {
        title: "Why this book matters",
        paragraphs: [
          "It is not a modern beginner handbook. Instead, it lays out a worldview: how the body is understood, how climate and season matter, and how imbalance is described.",
          "That worldview still shapes the language used in basics pages, herb categories, and many Chinese food tradition articles.",
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
          "For beginners, the value of Bencao Gangmu is not memorizing every entry. It is understanding that traditional herb culture has deep reference roots.",
          "That background gives modern herb pages more credibility when they explain names, classifications, and food uses carefully.",
        ],
      },
      {
        title: "Why it fits this library",
        paragraphs: [
          "This library focuses on kitchen-friendly explanations, plain English, and traditional context.",
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
          "One major lesson of Shanghan Lun is that traditional practice rarely frames one herb as a universal answer.",
          "Instead, herbs are understood in relationship to pattern, preparation, sequence, and combination.",
        ],
      },
      {
        title: "Why readers should know the name",
        paragraphs: [
          "Even a lightweight educational site benefits from introducing this text because it explains why traditional herb writing often cares so much about context.",
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
          "It helps show that herb classification in China has very old roots. Categories, properties, and descriptive systems did not appear overnight in modern lifestyle media.",
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
      "Jin Gui Yao Lue, often translated as Essentials from the Golden Cabinet, is a major classical work associated with pattern thinking and practical formula tradition. It helps modern readers see how structured traditional herb writing became over time.",
    sections: [
      {
        title: "A bridge between theory and practical formulas",
        paragraphs: [
          "This classic matters because it shows traditional herb writing as a system that organized recurring patterns and responses, not just isolated herb trivia.",
          "That structure helps explain why later herb education cares so much about combinations, context, and wording.",
        ],
      },
      {
        title: "Why it belongs in a beginner-friendly guide",
        paragraphs: [
          "Readers do not need technical mastery of the book. They only need to understand that practical herb and formula language comes from a lineage with real depth.",
          "Including this text strengthens the library's educational credibility without making the tone overly academic.",
        ],
      },
    ],
  },
  {
    slug: "wen-bing-xue",
    title: "Wen Bing Xue",
    description:
      "A simple introduction to the warm-season tradition and why it shaped later heat-related language in traditional writing.",
    eyebrow: "Chinese Classics",
    intro:
      "Wen Bing Xue refers to the warm-season tradition in traditional writing, a body of thought that shaped how later practitioners described heat, dryness, and febrile patterns. It matters because many modern readers encounter heat-related herb language without knowing this background exists.",
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
          "Understanding the warm-season tradition helps readers see that heat-related language has a historical framework behind it.",
          "It also reinforces one core principle here: traditional descriptions should be explained carefully, not exaggerated into modern promises.",
        ],
      },
    ],
  },
];

export const foodTherapyArticles: ContentArticle[] = [
  {
    slug: "5-easy-traditional-kitchen-ingredients-for-beginners",
    title: "5 Easy Chinese Kitchen Ingredients for Beginners",
    description:
      "A practical starter guide to five approachable ingredients that already feel close to everyday cooking.",
    eyebrow: "Kitchen Traditions",
    intro:
      "For many readers, the easiest entry into Chinese food traditions is not a complicated formula. It is a handful of familiar ingredients that already make sense in soups, teas, porridge, and pantry habits.",
    recipe: {
      recipeYield: "2 to 3 servings",
      prepTime: "PT10M",
      totalTime: "PT30M",
      ingredients: [
        "4 cups water",
        "2 slices fresh ginger",
        "3 dried jujubes, split",
        "1 tablespoon goji berries",
        "1 teaspoon dried chrysanthemum flowers",
        "1 teaspoon black sesame seeds",
        "Optional: 1 thin slice pear for a softer finish",
      ],
      steps: [
        "Add the ginger, jujube, and water to a small pot and bring to a gentle boil.",
        "Lower the heat and simmer for about 15 minutes so the base tastes light and fragrant.",
        "Add the goji berries and optional pear during the last 5 minutes of simmering.",
        "Turn off the heat, then add the chrysanthemum and cover for 3 to 5 minutes.",
        "Pour into cups or small bowls and finish with a light sprinkle of black sesame before serving.",
      ],
      servingNotes: [
        "This simple mixed base works best as a teaching recipe that introduces several beginner ingredients at once.",
        "Keep the flavor light so each ingredient stays easy to recognize.",
      ],
      caution: [
        "This page is a food-level introduction to familiar ingredients, not a personalized formula or directed-use plan.",
      ],
    },
    sections: [
      {
        title: "A simple beginner list",
        paragraphs: [
          "Fresh ginger, jujube, goji berry, chrysanthemum, and black sesame are some of the easiest ingredients for beginners to recognize in everyday food.",
          "They are easier to picture in tea, porridge, soup, and simple kitchen routines than more concentrated or unfamiliar preparations.",
        ],
        bullets: [
          "Fresh ginger: easy to connect with warming soups and teas.",
          "Jujube: familiar in sweet broths, teas, and kitchen routines.",
          "Goji berry: familiar and easy to place in porridge or soup.",
          "Chrysanthemum: approachable as a light floral tea ingredient.",
          "Black sesame: useful for pantry-style, dessert-style, and breakfast-style content.",
        ],
      },
      {
        title: "Why these ingredients are good beginner examples",
        paragraphs: [
          "Some readers already recognize a few of these names, but still need clearer explanations for how they are used in traditional kitchen writing.",
          "That makes them useful starting points for moving between beginner guides, herb profiles, and kitchen pages.",
        ],
      },
    ],
  },
  {
    slug: "a-simple-warming-soup-guide-for-cold-weather",
    title: "A Simple Warming Soup Guide for Cold Weather",
    description:
      "A gentle introduction to seasonal soup traditions built around warming ingredients and practical kitchen steps.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Cold-weather soup content works well because it feels useful, familiar, and naturally seasonal. It also gives readers an easy place to understand how ingredients like ginger, jujube, and astragalus are traditionally discussed in kitchen writing.",
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
        "Readers with complex personal situations or regular product use should not read a soup article as individualized advice.",
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
        title: "Why a simple warming soup helps beginners",
        paragraphs: [
          "A simple warming soup gives readers a more concrete way to understand how traditional ingredients can appear in everyday kitchen routines.",
          "It also helps connect ingredient names, preparation style, and caution language in a format that feels easier to remember than theory alone.",
        ],
      },
    ],
  },
  {
    slug: "jujube-and-ginger-tea-for-busy-weeks",
    title: "Jujube and Ginger Tea for Busy Weeks",
    description:
      "A simple tea-style kitchen routine that shows how two approachable ingredients can be explained with clarity and restraint.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Jujube and ginger make a strong beginner pairing because the idea is easy to picture: a few slices, a few pieces, hot water, and a short kitchen routine. It feels practical, familiar, and easy to understand without much setup.",
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
          "They are often easier to introduce than more advanced ingredients that need heavier caution framing.",
        ],
      },
      {
        title: "What readers should notice in this pairing",
        paragraphs: [
          "This pairing stays approachable because the ingredient list is short, the preparation is simple, and the flavor profile is easy to picture.",
          "Jujube brings a soft sweetness, while fresh ginger gives the tea a warmer, brighter edge that many readers already recognize from home cooking.",
        ],
        bullets: [
          "A short simmer instead of a long decoction",
          "A mild flavor that stays food-like rather than overly concentrated",
          "A familiar kitchen routine that is easy to repeat",
          "Traditional context explained in plain English",
          "A visible caution note for readers who need extra care",
        ],
      },
    ],
  },
  {
    slug: "pear-and-lily-bulb-soup-for-dry-days",
    title: "Pear and Lily Bulb Soup for Dry Days",
    description:
      "A gentle kitchen article built around two familiar ingredients often used in traditional discussions of dryness.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Pear and lily bulb create a soft, approachable traditional pairing. The flavor feels calm, the ingredient story is easy to explain, and the recipe works well for beginners who want seasonal kitchen ideas without hype.",
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
        "Dryness language here is traditional Chinese food language, not a personal label.",
      ],
    },
    sections: [
      {
        title: "Why this pairing works",
        paragraphs: [
          "Pear is already familiar to most readers, while lily bulb adds a distinctive traditional angle without feeling extreme or inaccessible.",
          "Together they create a good teaching page for how traditional kitchen writing talks about dryness, softness, and gentle kitchen routines.",
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
          "It also helps connect pear, lily bulb, and plain-English dryness language in a more concrete way.",
        ],
      },
    ],
  },
  {
    slug: "black-sesame-breakfast-ideas-for-beginners",
    title: "Black Sesame Breakfast Ideas for Beginners",
    description:
      "A practical pantry-style article that turns black sesame into an easy daily-use breakfast idea.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Black sesame works especially well in breakfast-style content because it already feels at home in porridge, paste, buns, desserts, and simple topping ideas. It is easy to picture in real food and easy to explain through everyday kitchen use.",
    recipe: {
      recipeYield: "2 bowls",
      prepTime: "PT5M",
      totalTime: "PT15M",
      ingredients: [
        "1 1/2 cups cooked oatmeal or warm rice porridge",
        "1 tablespoon black sesame seeds, lightly ground",
        "1 teaspoon black sesame paste or tahini, optional",
        "1 to 2 chopped jujubes or a few goji berries",
        "A small splash of warm milk or oat milk if needed",
      ],
      steps: [
        "Prepare the oatmeal or rice porridge so it is warm and soft.",
        "Stir in the ground black sesame while the bowl is still hot.",
        "Add the optional black sesame paste and a small splash of warm milk if you want a smoother texture.",
        "Top with the chopped jujube or goji berries.",
        "Serve warm as a simple breakfast bowl with very little added sweetness.",
      ],
      servingNotes: [
        "A soft grain base makes black sesame easier for beginners to picture in a real breakfast routine.",
        "This works best as a practical pantry bowl, not a dessert-heavy recipe.",
      ],
      caution: [
        "Black sesame breakfast language here belongs to traditional food context and everyday kitchen use, not a direct claim.",
      ],
    },
    sections: [
      {
        title: "Why breakfast content is useful",
        paragraphs: [
          "Breakfast articles are naturally practical. Readers can picture the ingredient in a real routine, which makes the traditional context easier to trust and remember.",
          "They also help balance theory with simple food examples readers can imagine making at home.",
        ],
      },
      {
        title: "Good beginner formats",
        paragraphs: [
          "A strong black sesame article can include congee, warm cereal, sesame paste, toast toppings, or dessert-style bowls.",
          "The key is to keep the preparation simple and the tone educational rather than making dramatic beauty or lifestyle promises.",
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
    eyebrow: "Kitchen Traditions",
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
        "This works best as a simple tea rather than a concentrated herbal drink.",
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
          "That clarity also helps beginners understand cooling language without feeling overwhelmed.",
        ],
      },
      {
        title: "What readers can notice in the cup",
        paragraphs: [
          "A simple tea page can explain steeping time, flavor balance, serving ideas, and the traditional reason these ingredients are often described as cooling.",
          "It should also make clear that cooling language belongs to a traditional framework and is not a one-size-fits-all instruction.",
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
  {
    slug: "goji-berry-porridge-for-gentle-mornings",
    title: "Goji Berry Porridge for Gentle Mornings",
    description:
      "A simple breakfast-style kitchen page built around one of the easiest pantry ingredients for beginners.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Goji berry porridge is easy to picture, easy to prepare, and easy to connect with pantry-first, practical kitchen learning.",
    recipe: {
      recipeYield: "2 bowls",
      prepTime: "PT5M",
      totalTime: "PT30M",
      ingredients: [
        "1/2 cup rice or a mild porridge grain",
        "4 cups water",
        "2 tablespoons goji berries",
        "Optional: 1 split jujube for a softer sweetness",
        "Optional: a small spoon of black sesame on top",
      ],
      steps: [
        "Rinse the grain and place it in a pot with the water.",
        "Bring to a gentle boil, then lower the heat and cook until the porridge texture softens.",
        "Add the goji berries during the last 8 to 10 minutes of cooking.",
        "Add the optional jujube if you want a rounder flavor.",
        "Serve warm and finish with a light spoon of black sesame if desired.",
      ],
      servingNotes: [
        "Keep the flavor mild and breakfast-friendly rather than heavily sweetened.",
        "This works best as a soft pantry recipe, not as a promise about outcomes.",
      ],
      caution: [
        "Goji berry is food-friendly for many readers, but regular use still deserves context when regular product use or special personal situations are involved.",
      ],
    },
    sections: [
      {
        title: "Why this is a strong beginner breakfast page",
        paragraphs: [
          "It centers one of the most familiar pantry herbs while staying fully in the kitchen.",
          "That makes it easier for readers to trust and easier to connect with pantry, beauty-food, and gentle routine reading.",
        ],
      },
      {
        title: "What the page teaches beyond the bowl itself",
        paragraphs: [
          "A porridge page helps explain how traditional kitchen writing often uses repeated soft routines rather than dramatic one-time solutions.",
          "It also creates useful bridges between goji, jujube, black sesame, and beginner pantry reading.",
        ],
      },
    ],
  },
  {
    slug: "lotus-seed-and-longan-sweet-soup-basics",
    title: "Lotus Seed and Longan Sweet Soup Basics",
    description:
      "A gentle dessert-soup style article that introduces two classic nourishing pantry ingredients through a simple kitchen routine.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Lotus seed and longan are a natural pair for moving beyond tea and soup into traditional dessert-soup territory. The bowl feels soft, memorable, and culturally grounded while still staying simple enough for beginners.",
    recipe: {
      recipeYield: "2 bowls",
      prepTime: "PT10M",
      totalTime: "PT45M",
      ingredients: [
        "1/4 cup dried lotus seed",
        "1/4 cup dried longan fruit",
        "3 1/2 cups water",
        "1 to 2 jujubes, optional",
        "A very small amount of rock sugar or leave unsweetened",
      ],
      steps: [
        "Rinse the lotus seed and longan.",
        "Add the water and lotus seed to a small pot and simmer first until the seed begins to soften.",
        "Add the longan and optional jujube, then continue simmering gently for another 15 to 20 minutes.",
        "Add only a light touch of sweetness if needed.",
        "Serve warm as a light dessert soup or gentle evening-style bowl.",
      ],
      servingNotes: [
        "The page works best when framed as a household-style routine, not a heavy tonic formula.",
        "Keeping sweetness moderate makes the content feel more practical and trustworthy.",
      ],
      caution: [
        "Sweet nourishing foods are not automatically a fit for every dietary situation.",
      ],
    },
    sections: [
      {
        title: "Why this page adds range",
        paragraphs: [
          "It expands the editorial voice beyond soups and teas while staying inside familiar food traditions.",
          "That variety makes the library feel more complete and makes the pantry ingredient network stronger.",
        ],
      },
      {
        title: "What beginners learn from this pairing",
        paragraphs: [
          "Readers see that traditional kitchen content can be gentle, repetitive, and comforting without becoming vague or mystical.",
          "The page also creates natural links to longan, lotus seed, jujube, and evening-themed topic pages.",
        ],
      },
    ],
  },
  {
    slug: "chen-pi-tea-for-heavy-meal-days",
    title: "Chen Pi Tea for Heavy Meal Days",
    description:
      "A pantry-style tea article that helps readers understand chen pi through one of its easiest food-adjacent use cases.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Chen pi is one of the clearest pantry herbs to explain because it turns dried citrus peel into a full traditional kitchen concept. A simple tea-style article gives readers an immediate way to understand why this ingredient shows up so often in digestive writing.",
    recipe: {
      recipeYield: "2 cups",
      prepTime: "PT5M",
      totalTime: "PT15M",
      ingredients: [
        "1 to 2 small pieces chen pi",
        "2 1/2 cups water",
        "Optional: 1 thin slice fresh ginger",
        "Optional: a small piece of hawthorn for a more tart finish",
      ],
      steps: [
        "Rinse the chen pi briefly under cool water.",
        "Add it to a small pot with the water and optional ginger.",
        "Bring to a gentle boil, then lower the heat and simmer for about 10 minutes.",
        "Strain into cups before serving.",
        "Keep the flavor light and aromatic rather than overly strong.",
      ],
      servingNotes: [
        "This is a pantry-style educational tea page, not a formula guide.",
        "The simplest version is often the easiest for readers to remember and trust.",
      ],
      caution: [
        "Heavy-meal language here belongs to traditional digestive context, not personal labeling or directed-use advice.",
      ],
    },
    sections: [
      {
        title: "Why chen pi deserves its own tea page",
        paragraphs: [
          "It is one of the clearest examples of how ordinary kitchen ingredients become traditional categories through preparation and aging.",
          "That makes it especially useful for education because the story is memorable and the use case is practical.",
        ],
      },
      {
        title: "How this page fits broader reading",
        paragraphs: [
          "A simple chen pi tea article connects naturally with digestive topics, aromatic herb reading, and comparison-style pantry content.",
          "It also gives readers a specific everyday example instead of only a broad concept page.",
        ],
      },
    ],
  },
  {
    slug: "hawthorn-berry-tea-for-rich-meals",
    title: "Hawthorn Berry Tea for Rich Meals",
    description:
      "A simple pantry-style tea page that introduces hawthorn berry through one of its most intuitive traditional food contexts.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Hawthorn berry is one of the easiest herbs to explain through food culture because the fruit already feels familiar and its traditional use often appears next to rich meals, heaviness, and digestion-related kitchen language. A tea-style page makes that context easy to picture without overcomplicating it.",
    recipe: {
      recipeYield: "2 cups",
      prepTime: "PT5M",
      totalTime: "PT18M",
      ingredients: [
        "1 tablespoon dried hawthorn berry pieces",
        "2 1/2 cups water",
        "Optional: 1 small piece chen pi",
        "Optional: 1 thin slice fresh ginger for a warmer finish",
      ],
      steps: [
        "Rinse the hawthorn briefly under cool water.",
        "Add the water, hawthorn, and optional chen pi or ginger to a small pot.",
        "Bring to a gentle boil, then lower the heat and simmer for 10 to 12 minutes.",
        "Strain into cups and keep the flavor light rather than very concentrated.",
        "Serve warm after a heavier meal or as a simple pantry tea on its own.",
      ],
      servingNotes: [
        "A lighter tea is usually the easiest version for beginners to understand and repeat.",
        "Chen pi adds aroma while ginger changes the profile toward a slightly warmer cup.",
      ],
      caution: [
        "Rich-meal language here belongs to traditional food context, not personal labeling or directed-use advice.",
        "Readers using regular products or managing ongoing concerns should not read a tea page as individualized advice.",
      ],
    },
    sections: [
      {
        title: "Why this is a strong digestive entry page",
        paragraphs: [
          "The use case is easy to picture: a tart fruit tea after a heavy meal. That makes the page more practical and memorable than a vague theory article on its own.",
          "It also gives HerbGuide a stronger connection between hawthorn, chen pi, digestive traditions, and pantry-style tea routines.",
        ],
      },
      {
        title: "What the page teaches beyond the pot",
        paragraphs: [
          "A page like this shows how traditional kitchen writing often uses gentle, food-adjacent preparations to explain traditional ingredient roles.",
          "It also creates a natural bridge into digestive topic pages, chen pi reading, and dampness or qi movement vocabulary for readers who want more context.",
        ],
      },
    ],
  },
  {
    slug: "black-sesame-and-jujube-breakfast-bowl",
    title: "Black Sesame and Jujube Breakfast Bowl",
    description:
      "A soft breakfast-style pantry page that deepens black sesame and jujube reading without overcomplicating the recipe.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Black sesame and jujube make a strong breakfast pair because the flavor feels grounded and the ingredients already connect with some of the most approachable pantry pages. A simple bowl-style page helps readers imagine a real routine while staying fully inside kitchen-first educational content.",
    recipe: {
      recipeYield: "2 bowls",
      prepTime: "PT8M",
      totalTime: "PT20M",
      ingredients: [
        "1 cup cooked oats or soft rice porridge",
        "2 tablespoons black sesame powder or lightly ground seeds",
        "2 dried jujubes, split and sliced thinly",
        "1 1/2 cups water or unsweetened plant milk",
        "Optional: 1 teaspoon chopped walnuts",
      ],
      steps: [
        "Warm the cooked oats or porridge base with the water or plant milk in a small pot.",
        "Stir in the black sesame until the bowl turns evenly dark and nutty.",
        "Add the sliced jujube and simmer gently for 3 to 4 minutes.",
        "Top with the optional walnuts if you want a little more texture.",
        "Serve warm and keep the sweetness very light or skip it entirely.",
      ],
      servingNotes: [
        "This works best as a simple breakfast idea rather than a strict daily routine.",
        "A mild base keeps the black sesame flavor clear without making the bowl too heavy.",
      ],
      caution: [
        "Even food-style pantry pages should avoid implying the same routine fits every reader.",
      ],
    },
    sections: [
      {
        title: "Why this page works well",
        paragraphs: [
          "It builds on two of the strongest pantry ingredients already on HerbGuide while adding a more repeatable breakfast-style use case.",
          "That gives readers who start with goji, jujube, or black sesame one more practical step to explore.",
        ],
      },
      {
        title: "What readers learn from the pairing",
        paragraphs: [
          "This bowl teaches that traditional kitchen writing can be gentle, ordinary, and ingredient-focused rather than dramatic.",
          "It also connects naturally with beauty-food, balanced-pantry, and beginner breakfast reading.",
        ],
      },
    ],
  },
  {
    slug: "jobs-tears-porridge-for-heavy-days",
    title: "Job's Tears Porridge for Heavy Days",
    description:
      "A gentle grain-style kitchen page that helps readers understand dampness language through a practical pantry recipe.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Job's tears is one of the most useful ingredients for turning traditional dampness language into something concrete. A simple porridge page helps readers picture the ingredient in a real bowl, which is much easier to trust than abstract digestive theory on its own.",
    recipe: {
      recipeYield: "2 bowls",
      prepTime: "PT10M",
      totalTime: "PT50M",
      ingredients: [
        "1/2 cup job's tears",
        "4 cups water",
        "2 thin slices fresh ginger, optional",
        "A small pinch of salt or leave plain",
        "Optional: a few diced carrots for a softer savory version",
      ],
      steps: [
        "Rinse the job's tears well and soak briefly if the grains are very firm.",
        "Add the grains and water to a small pot and bring to a gentle boil.",
        "Lower the heat and simmer until the grains soften into a light porridge texture.",
        "Add the optional ginger during the second half of cooking if you want a slightly warmer profile.",
        "Serve warm and keep the seasoning simple.",
      ],
      servingNotes: [
        "A plain version usually works best for educational pantry content.",
        "This page is strongest as a seasonal kitchen idea rather than a daily rule.",
      ],
      caution: [
        "Heavy-day language here belongs to traditional food context, not personal labeling or directed-use advice.",
      ],
    },
    sections: [
      {
        title: "Why this page works so well for dampness reading",
        paragraphs: [
          "Readers can immediately see how a grain-style ingredient fits into traditional kitchen traditions.",
          "That makes the traditional idea of heaviness or dampness feel much less abstract than a definition page on its own.",
        ],
      },
      {
        title: "What the bowl teaches beyond the recipe",
        paragraphs: [
          "A job's tears porridge page helps connect dampness, digestive traditions, poria, and lighter pantry routines into one reading path.",
          "It also gives glossary readers a practical follow-up after terms like dampness or food stagnation.",
        ],
      },
    ],
  },
  {
    slug: "pear-and-chrysanthemum-tea-for-warm-afternoons",
    title: "Pear and Chrysanthemum Tea for Warm Afternoons",
    description:
      "A light seasonal tea page that supports cooling and dryness themes with familiar ingredients and low-hype language.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Pear and chrysanthemum make a useful pairing for seasonal content because the ingredients already feel recognizable and the traditional language around them often connects to warmth, lightness, and dryness. A simple tea page gives readers a gentle way to understand that vocabulary through the kitchen first.",
    recipe: {
      recipeYield: "2 mugs",
      prepTime: "PT6M",
      totalTime: "PT20M",
      ingredients: [
        "1 small pear, sliced thinly",
        "1 tablespoon dried chrysanthemum flowers",
        "3 cups water",
        "Optional: 2 to 3 goji berries added near the end",
      ],
      steps: [
        "Rinse the chrysanthemum and slice the pear.",
        "Add the water and pear to a small pot and bring to a light simmer.",
        "After 8 minutes, add the chrysanthemum and optional goji berries.",
        "Simmer gently for another 3 to 4 minutes, then turn off the heat.",
        "Strain or pour directly into mugs and serve warm.",
      ],
      servingNotes: [
        "The flavor should stay light and floral rather than heavily sweet.",
        "This page works well as a seasonal tea idea, not as a fixed daily instruction.",
      ],
      caution: [
        "Warm-afternoon language here is traditional seasonal context, not individualized advice.",
      ],
    },
    sections: [
      {
        title: "Why this is a strong seasonal teaching page",
        paragraphs: [
          "Pear makes the page approachable while chrysanthemum carries the traditional cooling story clearly.",
          "Together they create a calmer, easier entry into pages about clear heat, dryness, and warm-weather kitchen ideas.",
        ],
      },
      {
        title: "How this page fits related reading",
        paragraphs: [
          "This tea article strengthens the link between chrysanthemum, pear-style seasonal content, glossary pages about clear heat, and the seasonal kitchen topic page.",
          "It also gives readers who begin with warming pages a useful contrast page instead of stopping at one concept.",
        ],
      },
    ],
  },
  {
    slug: "goji-and-chrysanthemum-tea-basics",
    title: "Goji and Chrysanthemum Tea Basics",
    description:
      "A simple visual tea page that connects a familiar nourishing berry with one especially clear cooling flower.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Goji and chrysanthemum are one of the most recognizable pairings in beginner-friendly tea writing because the color is vivid, the ingredients already feel familiar, and the traditional language around them is easier to explain than denser herb theory. A tea page makes that pairing practical without becoming exaggerated.",
    recipe: {
      recipeYield: "2 mugs",
      prepTime: "PT5M",
      totalTime: "PT12M",
      ingredients: [
        "1 tablespoon dried chrysanthemum flowers",
        "1 tablespoon goji berries",
        "2 1/2 cups hot water",
        "Optional: 1 thin slice pear for a softer finish",
      ],
      steps: [
        "Rinse the chrysanthemum and goji briefly.",
        "Place them in a teapot or heat-safe cup.",
        "Pour the hot water over the ingredients and cover lightly.",
        "Steep for 5 to 7 minutes until the goji softens and the tea turns golden.",
        "Add the optional pear slice only if you want a gentler fruit note.",
      ],
      servingNotes: [
        "This page works best as a light educational tea, not a concentrated herbal routine.",
        "Keeping the ingredient list short helps the pairing stay clear for beginners.",
      ],
      caution: [
        "Cooling and nourishing language here belongs to traditional kitchen context, not individualized advice.",
      ],
    },
    sections: [
      {
        title: "Why this pairing works so well",
        paragraphs: [
          "Both ingredients are highly visual and already familiar enough to lower reader anxiety.",
          "That makes this page an easy next step for readers who begin with goji or cooling-related pages.",
        ],
      },
      {
        title: "What readers learn from this tea",
        paragraphs: [
          "This page teaches that traditional kitchen writing often pairs contrast and balance rather than collapsing every ingredient into one broad lifestyle label.",
          "It also creates a stronger route between goji, chrysanthemum, clear heat language, and pantry-friendly tea content.",
        ],
      },
    ],
  },
  {
    slug: "jujube-and-lotus-seed-congee-for-quiet-evenings",
    title: "Jujube and Lotus Seed Congee for Quiet Evenings",
    description:
      "A gentle evening-style pantry bowl that deepens jujube and lotus seed reading with simple kitchen language.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Jujube and lotus seed make a calm, memorable pair because both ingredients already feel closely tied to household food traditions. A simple congee page lets readers picture a real bowl more easily than abstract evening-themed language alone.",
    recipe: {
      recipeYield: "2 bowls",
      prepTime: "PT10M",
      totalTime: "PT45M",
      ingredients: [
        "1/2 cup rice",
        "4 cups water",
        "3 dried jujubes, split",
        "1/4 cup lotus seed",
        "Optional: a few longan pieces for a slightly sweeter finish",
      ],
      steps: [
        "Rinse the rice, jujube, and lotus seed.",
        "Add the rice, water, and lotus seed to a small pot and bring to a gentle boil.",
        "Lower the heat and simmer until the porridge begins to soften.",
        "Add the jujube during the second half of cooking and the optional longan near the end.",
        "Serve warm with a mild texture and very little added sweetness.",
      ],
      servingNotes: [
        "This is strongest as a gentle household-style bowl, not a rigid nightly rule.",
        "A softer, lighter bowl usually feels better than a very rich dessert version.",
      ],
      caution: [
        "Quiet-evening language here is traditional and culinary in tone, not a claim about sleep or fixed outcomes.",
      ],
    },
    sections: [
      {
        title: "Why this page adds useful depth",
        paragraphs: [
          "It extends pantry and evening-style reading without relying only on teas.",
          "It also gives jujube and lotus seed readers another concrete kitchen example to follow.",
        ],
      },
      {
        title: "What the bowl teaches beyond the recipe",
        paragraphs: [
          "A congee page like this helps readers understand that traditional kitchen learning is often repetitive, simple, and food-first.",
          "It also strengthens links between jujube, lotus seed, longan, and plain-English pages about shen or nourishment language.",
        ],
      },
    ],
  },
  {
    slug: "tremella-and-pear-sweet-soup-basics",
    title: "Tremella and Pear Sweet Soup Basics",
    description:
      "A very simple dessert-soup page that introduces tremella and pear through a soft, beginner-friendly seasonal recipe.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Tremella and pear make a very soft seasonal pairing. The ingredients are easy to picture, the preparation is simple, and the traditional language around moisture and gentle kitchen routines becomes much easier to understand when readers can imagine the actual bowl.",
    recipe: {
      recipeYield: "2 bowls",
      prepTime: "PT10M",
      totalTime: "PT40M",
      ingredients: [
        "1 small handful dried tremella mushroom",
        "1 ripe pear, peeled and cut into chunks",
        "3 1/2 cups water",
        "1 to 2 jujubes, optional",
        "A very small piece of rock sugar or skip it entirely",
      ],
      steps: [
        "Rinse the tremella and soak it briefly until it softens enough to trim and tear into small pieces.",
        "Add the tremella and water to a small pot and simmer gently for about 20 minutes.",
        "Add the pear and optional jujubes, then continue simmering until the pear softens.",
        "Add only a light touch of sweetness if needed.",
        "Serve warm as a soft dessert soup or gentle seasonal bowl.",
      ],
      servingNotes: [
        "The page works best when the flavor stays light and the texture stays soft.",
        "This recipe is strongest as a calm kitchen idea, not a fixed daily routine.",
      ],
      caution: [
        "Dryness and softness language here belongs to traditional food context, not personal labeling or directed-use advice.",
      ],
    },
    sections: [
      {
        title: "Why this is such a strong beginner page",
        paragraphs: [
          "Both ingredients feel gentle and low-pressure, which makes the page easier to trust than heavier claim-driven content.",
          "It also gives readers a clearer dessert-soup example alongside tea and porridge.",
        ],
      },
      {
        title: "What the bowl teaches beyond the recipe",
        paragraphs: [
          "A tremella and pear page helps readers understand how traditional kitchen writing often explains softness and moisture through food texture rather than abstract theory alone.",
          "It also helps connect tremella, pear, lily bulb, and plain-English dryness explanations.",
        ],
      },
    ],
  },
  {
    slug: "adzuki-bean-and-jobs-tears-soup-basics",
    title: "Adzuki Bean and Job's Tears Soup Basics",
    description:
      "A very simple pantry-style soup that connects adzuki bean and Job's Tears to digestive and dampness-related kitchen reading.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Adzuki bean and Job's Tears create a clear pantry-style pairing for readers who want a practical bowl after landing on dampness or digestive terminology. The ingredients feel recognizable enough to trust, and the preparation is simple enough to make the traditional language feel more concrete.",
    recipe: {
      recipeYield: "2 bowls",
      prepTime: "PT10M",
      totalTime: "PT55M",
      ingredients: [
        "1/3 cup adzuki beans",
        "1/3 cup Job's Tears",
        "4 1/2 cups water",
        "2 thin slices fresh ginger, optional",
        "A small pinch of salt for a savory version",
      ],
      steps: [
        "Rinse the adzuki beans and Job's Tears well.",
        "Add them to a small pot with the water and bring to a gentle boil.",
        "Lower the heat and simmer until both ingredients soften into a light soup texture.",
        "Add the optional ginger during the last 15 minutes if you want a slightly warmer finish.",
        "Serve warm and keep the seasoning simple.",
      ],
      servingNotes: [
        "This works best when it stays plain, practical, and easy to remember.",
        "A lighter soup style usually feels better here than a very heavy bean stew.",
      ],
      caution: [
        "Dampness and digestive language here belongs to traditional educational context, not individualized advice.",
      ],
    },
    sections: [
      {
        title: "Why this page works well",
        paragraphs: [
          "It gives readers interested in digestive and dampness language a very concrete food page after one abstract concept article.",
          "That makes the terminology easier to remember through a real food example.",
        ],
      },
      {
        title: "How this page supports the wider library",
        paragraphs: [
          "This soup connects adzuki bean, Job's Tears, poria, and lighter pantry language into one clearer pathway.",
          "It also offers a meal-style example that feels different from dessert soup and tea.",
        ],
      },
    ],
  },
  {
    slug: "chinese-yam-and-carrot-soup-basics",
    title: "Chinese Yam and Carrot Soup Basics",
    description:
      "A very simple beginner soup that makes Chinese yam feel practical, mild, and easy to trust.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Chinese yam is one of the best examples of a food-first traditional ingredient because readers can understand it through a mild soup before they ever need dense theory. Pairing it with carrot keeps the recipe familiar, soft, and easy to imagine in a real kitchen.",
    recipe: {
      recipeYield: "2 bowls",
      prepTime: "PT10M",
      totalTime: "PT40M",
      ingredients: [
        "1 cup Chinese yam, peeled and cut into chunks",
        "1 medium carrot, cut into chunks",
        "4 cups water or light broth",
        "2 thin slices fresh ginger, optional",
        "A small pinch of salt near the end",
      ],
      steps: [
        "Prepare the Chinese yam and carrot.",
        "Add them to a small pot with the water or light broth.",
        "Bring to a gentle boil, then lower the heat and simmer until the vegetables soften.",
        "Add the optional ginger during the last 15 minutes if you want a slightly warmer flavor.",
        "Serve warm with very light seasoning.",
      ],
      servingNotes: [
        "This page works best when the soup stays mild and uncomplicated.",
        "A lighter broth helps Chinese yam stay approachable for beginners.",
      ],
      caution: [
        "This is a food-first educational soup page, not a personal directed-use page for digestive or energy concerns.",
      ],
    },
    sections: [
      {
        title: "Why this is a strong beginner soup",
        paragraphs: [
          "Chinese yam already feels closer to food than to supplement-style herb language, which makes it easier for new readers to trust.",
          "Carrot keeps the page familiar and helps expand simple soup examples beyond tea and dessert soup.",
        ],
      },
      {
        title: "What the soup teaches beyond the pot",
        paragraphs: [
          "A page like this helps readers understand how traditional food writing often starts with ordinary ingredients and gentle preparation.",
          "It also creates a clearer path between Chinese yam, spleen-language, pantry content, and practical seasonal reading.",
        ],
      },
    ],
  },
  {
    slug: "tremella-and-lotus-seed-sweet-soup-basics",
    title: "Tremella and Lotus Seed Sweet Soup Basics",
    description:
      "A soft dessert-soup page that deepens the tremella and lotus seed network with one easy, pantry-friendly bowl.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Tremella and lotus seed make a natural next-step dessert soup because both ingredients already fit a calm, food-first tone. The bowl feels soft, simple, and visually clear, especially for readers who already know tremella, lotus seed, or gentle evening-style recipes.",
    recipe: {
      recipeYield: "2 bowls",
      prepTime: "PT10M",
      totalTime: "PT45M",
      ingredients: [
        "1 small handful dried tremella mushroom",
        "1/4 cup lotus seed",
        "3 1/2 cups water",
        "1 to 2 jujubes, optional",
        "A very small amount of rock sugar or leave unsweetened",
      ],
      steps: [
        "Rinse and soak the tremella briefly, then tear it into smaller pieces.",
        "Rinse the lotus seed and add it to a pot with the water first.",
        "Once the lotus seed starts to soften, add the tremella and optional jujubes.",
        "Simmer gently until the bowl feels soft and lightly thickened.",
        "Sweeten only very lightly if needed and serve warm.",
      ],
      servingNotes: [
        "A mild sweetness keeps the page feeling practical rather than dessert-heavy.",
        "This works best as a soft household-style bowl, not a tonic-style promise.",
      ],
      caution: [
        "Gentle evening or nourishment language here belongs to traditional food context, not individualized advice.",
      ],
    },
    sections: [
      {
        title: "Why this page works so well",
        paragraphs: [
          "It adds another dessert-soup example without making the recipes feel repetitive.",
          "It also gives tremella and lotus seed readers one more concrete kitchen page that feels easy to trust.",
        ],
      },
      {
        title: "How this bowl fits related reading",
        paragraphs: [
          "This recipe deepens links between tremella, lotus seed, jujube, longan, and soft nourishment language.",
          "It also keeps the focus on pantry familiarity rather than drifting toward claim-heavy herb language.",
        ],
      },
    ],
  },
  {
    slug: "mulberry-and-goji-tea-basics",
    title: "Mulberry and Goji Tea Basics",
    description:
      "A simple berry-style tea page that connects mulberry fruit and goji berry through a soft, pantry-friendly recipe.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Mulberry and goji make an easy next-step pairing for readers who already understand pantry berries but want a gentler, more seasonal tea idea. The ingredients feel recognizable, the color is memorable, and the recipe offers a clear bridge between mulberry fruit, goji berry, and nourishment-style language.",
    recipe: {
      recipeYield: "2 mugs",
      prepTime: "PT5M",
      totalTime: "PT12M",
      ingredients: [
        "1 tablespoon dried mulberry fruit",
        "1 tablespoon goji berries",
        "2 1/2 cups hot water",
        "Optional: 1 thin slice pear for a softer finish",
      ],
      steps: [
        "Rinse the mulberry fruit and goji berries briefly.",
        "Place them in a teapot or heat-safe cup.",
        "Pour the hot water over the berries and cover lightly.",
        "Steep for 6 to 8 minutes until the fruit softens and the tea deepens in color.",
        "Add the optional pear slice only if you want a lighter, softer finish.",
      ],
      servingNotes: [
        "This page works best as a gentle pantry tea, not a concentrated tonic-style routine.",
        "Keeping the ingredient list short helps readers notice the flavor and role of each berry.",
      ],
      caution: [
        "Nourishing and moisture-style language here belongs to traditional food context, not individualized advice.",
      ],
    },
    sections: [
      {
        title: "Why this pairing works well",
        paragraphs: [
          "Mulberry fruit adds a softer second-berry pathway beyond the more familiar goji content.",
          "That makes this page useful for readers who want one more pantry tea before moving into denser traditional terms.",
        ],
      },
      {
        title: "What the tea teaches beyond the cup",
        paragraphs: [
          "A page like this helps readers understand that many traditional kitchen traditions work through familiar pairings, not huge ingredient lists.",
          "It also creates a stronger internal link path between mulberry fruit, goji berry, dryness language, and beauty-food style reading.",
        ],
      },
    ],
  },
  {
    slug: "perilla-and-ginger-soup-for-cool-days",
    title: "Perilla and Ginger Soup for Cool Days",
    description:
      "A warming kitchen soup that connects perilla leaf and fresh ginger through a simple cold-weather pantry recipe.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Perilla leaf is one of the easiest herbs to understand when it appears next to ginger in a small, warming soup. The pairing feels practical, aromatic, and seasonal, which helps new readers trust the traditional language around release and movement without getting lost in jargon.",
    recipe: {
      recipeYield: "2 bowls",
      prepTime: "PT10M",
      totalTime: "PT30M",
      ingredients: [
        "4 cups light broth or water",
        "2 to 3 slices fresh ginger",
        "1 small handful fresh perilla leaves or 1 teaspoon dried perilla",
        "1 small carrot, thinly sliced",
        "A small pinch of salt near the end",
      ],
      steps: [
        "Add the broth or water, ginger, and carrot to a small pot and bring to a gentle boil.",
        "Lower the heat and simmer until the carrot softens.",
        "Add the perilla during the last 3 to 5 minutes so the aroma stays fresh.",
        "Season lightly with a small pinch of salt.",
        "Serve warm as a very simple cool-weather bowl.",
      ],
      servingNotes: [
        "This soup works best when the flavor stays light and aromatic rather than heavy.",
        "Adding perilla near the end helps keep the page tied to real kitchen practice.",
      ],
      caution: [
        "Warming and release-style language here belongs to traditional culinary context, not a personal-label or directed-use claim.",
      ],
    },
    sections: [
      {
        title: "Why this page adds useful range",
        paragraphs: [
          "It offers a more aromatic warming soup example beyond ginger-only content.",
          "That makes perilla leaf easier to connect with actual cooking instead of leaving it as an abstract herb name.",
        ],
      },
      {
        title: "How this soup fits broader kitchen reading",
        paragraphs: [
          "A perilla and ginger soup page links naturally to fresh ginger, warming foods, and plain-English pages about movement language.",
          "It also gives seasonal kitchen reading another savory bowl that is distinct from dessert soups and teas.",
        ],
      },
    ],
  },
  {
    slug: "schisandra-and-jujube-tea-basics",
    title: "Schisandra and Jujube Tea Basics",
    description:
      "A gentle berry-and-date tea that introduces schisandra through a simple pantry recipe with clear boundaries.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Schisandra can feel abstract on its own, but it becomes much easier to picture when paired with jujube in a very simple tea. That makes this page a useful bridge between pantry familiarity and the more classical language readers often see around schisandra berry.",
    recipe: {
      recipeYield: "2 mugs",
      prepTime: "PT5M",
      totalTime: "PT15M",
      ingredients: [
        "1 teaspoon dried schisandra berries",
        "3 dried jujubes, split",
        "2 1/2 cups water",
        "Optional: 1 small slice fresh ginger for a warmer finish",
      ],
      steps: [
        "Rinse the schisandra berries and jujubes briefly.",
        "Add them to a small pot with the water.",
        "Bring to a gentle boil, then lower the heat and simmer for 8 to 10 minutes.",
        "Add the optional ginger during the last few minutes if you want a slightly warmer finish.",
        "Strain into mugs and serve warm.",
      ],
      servingNotes: [
        "This page works best as a light educational tea with a short ingredient list.",
        "A very small amount of schisandra is enough to keep the flavor clear for beginners.",
      ],
      caution: [
        "Calming, astringing, or nourishing language here belongs to traditional kitchen context, not personalized guidance.",
      ],
    },
    sections: [
      {
        title: "Why this pairing is helpful for beginners",
        paragraphs: [
          "Jujube gives the recipe a familiar anchor, which makes schisandra feel less intimidating.",
          "That helps readers move from everyday pantry content into slightly deeper herb vocabulary without losing trust.",
        ],
      },
      {
        title: "What this tea adds to the evening path",
        paragraphs: [
          "This page creates a new route between schisandra berry, jujube, evening-style kitchen pages, and shen-related basics content.",
          "It also adds another tea that feels distinct from more floral and cooling cups.",
        ],
      },
    ],
  },
  {
    slug: "monk-fruit-and-pear-tea-basics",
    title: "Monk Fruit and Pear Tea Basics",
    description:
      "A light fruit tea page that explains monk fruit through a simple pear pairing and gentle seasonal kitchen language.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Monk fruit is easier to understand when it appears in a very simple fruit tea instead of as a product claim. Pairing it with pear keeps the page familiar, light, and useful for readers looking for gentle cooling-style kitchen ideas without heavy jargon.",
    recipe: {
      recipeYield: "2 mugs",
      prepTime: "PT6M",
      totalTime: "PT18M",
      ingredients: [
        "1 small monk fruit, cracked into a few pieces",
        "1 small pear, sliced thinly",
        "3 cups water",
        "Optional: 3 to 4 goji berries for a softer finish",
      ],
      steps: [
        "Rinse the monk fruit pieces and slice the pear.",
        "Add the water and monk fruit to a small pot and bring to a gentle boil.",
        "Lower the heat and simmer for about 8 minutes so the fruit flavor opens gradually.",
        "Add the pear and optional goji berries, then simmer for another 4 to 5 minutes.",
        "Pour into mugs and keep the flavor light rather than strongly sweet.",
      ],
      servingNotes: [
        "This tea works best as a light kitchen page, not a concentrated routine.",
        "Pear keeps the recipe grounded in food-first seasonal reading.",
      ],
      caution: [
        "Cooling and gentle-language here belongs to traditional kitchen context, not individualized advice.",
      ],
    },
    sections: [
      {
        title: "Why this page works well for beginners",
        paragraphs: [
          "Monk fruit is familiar enough to attract curiosity, but many readers only know it through packaged sweeteners. A simple tea gives it clearer cultural and kitchen context.",
          "Pear keeps the page recognizable and helps seasonal language feel practical instead of abstract.",
        ],
      },
      {
        title: "How this tea strengthens the library",
        paragraphs: [
          "This page adds a lighter fruit-tea route between monk fruit, pear-style seasonal content, and beginner-friendly cooling language.",
          "It also supports readers who want another gentle tea option beyond chrysanthemum and mint.",
        ],
      },
    ],
  },
  {
    slug: "walnut-and-black-sesame-paste-basics",
    title: "Walnut and Black Sesame Paste Basics",
    description:
      "A rich but approachable pantry bowl that turns black sesame and walnut into a simple breakfast-style kitchen page.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Black sesame already performs well in pantry-style reading because it feels familiar and food-first. Adding walnut creates a thicker, more comforting bowl that still reads as a practical breakfast or snack page rather than an exaggerated promise page.",
    recipe: {
      recipeYield: "2 small bowls",
      prepTime: "PT8M",
      totalTime: "PT20M",
      ingredients: [
        "2 tablespoons black sesame powder or finely ground black sesame",
        "2 tablespoons walnuts, chopped finely",
        "2 cups unsweetened oat milk or water",
        "1 teaspoon rice flour or oat flour for a smoother body",
        "Optional: 1 sliced jujube for a softer pantry note",
      ],
      steps: [
        "Whisk the sesame powder and flour with a small amount of cool liquid until smooth.",
        "Add the remaining liquid to a small pot and warm it gently.",
        "Stir in the sesame mixture and chopped walnuts.",
        "Simmer very gently until the bowl thickens into a soft paste-like texture.",
        "Add the optional jujube near the end and serve warm.",
      ],
      servingNotes: [
        "A small bowl is usually enough because the texture is richer than tea or porridge.",
        "Keeping the sweetness low helps the page stay grounded and kitchen-first.",
      ],
      caution: [
        "Nourishing pantry language here is educational kitchen framing, not personal advice.",
      ],
    },
    sections: [
      {
        title: "Why this recipe has strong pantry appeal",
        paragraphs: [
          "Black sesame is already one of the strongest crossover ingredients on the site. Walnut gives it a more substantial bowl that still feels easy to understand.",
          "That makes the page useful for breakfast, pantry, and gentle nourishment-style searches without drifting into hype.",
        ],
      },
      {
        title: "What readers learn from this bowl",
        paragraphs: [
          "The page shows that traditional kitchen content can include thicker breakfast or snack textures, not just soups and teas.",
          "It also creates stronger connections between black sesame, jujube, pantry habits, and beginner kitchen routines.",
        ],
      },
    ],
  },
  {
    slug: "barley-sprout-and-chen-pi-tea-basics",
    title: "Barley Sprout and Chen Pi Tea Basics",
    description:
      "A practical pantry tea that pairs barley sprout and chen pi in a simple cup for meal-friendly kitchen reading.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Barley sprout is easier to explain when it is paired with something familiar like chen pi. Together they make a light pantry tea that helps readers understand digestive-style kitchen language through a concrete cup instead of a vague theory paragraph.",
    recipe: {
      recipeYield: "2 cups",
      prepTime: "PT5M",
      totalTime: "PT16M",
      ingredients: [
        "1 tablespoon barley sprout",
        "1 small piece chen pi",
        "2 1/2 cups water",
        "Optional: 1 thin slice fresh ginger for a warmer finish",
      ],
      steps: [
        "Rinse the barley sprout and chen pi briefly under cool water.",
        "Add them to a small pot with the water.",
        "Bring to a gentle boil, then lower the heat and simmer for 8 to 10 minutes.",
        "Add the optional ginger only during the last few minutes if you want a warmer cup.",
        "Strain and serve warm with a light, aromatic flavor.",
      ],
      servingNotes: [
        "The simplest version is usually the best teaching version for new readers.",
        "A lighter cup keeps the barley sprout flavor approachable.",
      ],
      caution: [
        "Digestive and meal-friendly language here belongs to traditional kitchen context, not directed-use advice.",
      ],
    },
    sections: [
      {
        title: "Why this pairing is useful",
        paragraphs: [
          "Chen pi gives the cup an aromatic anchor while barley sprout expands the digestive pantry network in a clear way.",
          "That makes the page easier to trust than a standalone term-heavy explanation of barley sprout.",
        ],
      },
      {
        title: "How this cup supports internal search",
        paragraphs: [
          "This tea adds a direct entry for barley sprout and gives digestive readers another low-pressure result for tea, pantry, and post-meal style searches.",
          "It also strengthens the link path between barley sprout, chen pi, digestive traditions, and balanced pantry content.",
        ],
      },
    ],
  },
  {
    slug: "chinese-yam-and-jujube-porridge-basics",
    title: "Chinese Yam and Jujube Porridge Basics",
    description:
      "A soft pantry porridge that brings Chinese yam and jujube together in a balanced, beginner-friendly bowl.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Chinese yam already feels close to everyday food, and jujube makes the bowl warmer and more familiar. Together they create an easy porridge page that gives readers another gentle breakfast-style result without using exaggerated language.",
    recipe: {
      recipeYield: "2 bowls",
      prepTime: "PT10M",
      totalTime: "PT35M",
      ingredients: [
        "1/2 cup rice or rolled oats",
        "3 1/2 cups water",
        "3 dried jujubes, split",
        "3/4 cup Chinese yam, peeled and diced small",
        "Optional: 1 thin slice fresh ginger",
      ],
      steps: [
        "Rinse the rice or oats and prepare the jujube and Chinese yam.",
        "Add the grain base and water to a small pot and bring to a gentle boil.",
        "Lower the heat and simmer until the porridge starts to soften.",
        "Add the Chinese yam and jujube, then continue cooking until the bowl turns soft and cohesive.",
        "Add the optional ginger near the end if you want a slightly warmer finish, then serve warm.",
      ],
      servingNotes: [
        "This bowl works well as a mild breakfast or gentle evening-style porridge.",
        "Keeping the texture soft makes the page feel approachable for beginners.",
      ],
      caution: [
        "Balanced and nourishing-style language here belongs to traditional food context, not individualized advice.",
      ],
    },
    sections: [
      {
        title: "Why this is a strong beginner porridge",
        paragraphs: [
          "Chinese yam keeps the page mild and practical, while jujube adds a familiar pantry note that many readers already recognize.",
          "That makes this bowl a good bridge between simple soups, pantry teas, and breakfast-style kitchen content.",
        ],
      },
      {
        title: "How this bowl expands the kitchen section",
        paragraphs: [
          "It gives Chinese yam another food-first entry point and gives jujube another result beyond tea and dessert soup.",
          "It also supports searches around porridge, balanced kitchen routines, and beginner pantry bowls.",
        ],
      },
    ],
  },
  {
    slug: "tangerine-peel-and-pear-warm-tea-basics",
    title: "Tangerine Peel and Pear Warm Tea Basics",
    description:
      "A light citrus-and-fruit tea that supports gentle pantry reading with familiar ingredients and clear kitchen language.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Tangerine peel and pear make an easy pair for readers who want a soft citrus tea without heavy jargon. The peel adds aromatic depth, the pear keeps the page food-first, and the overall recipe supports long-tail searches around warm pear tea, citrus peel tea, and simple pantry routines.",
    recipe: {
      recipeYield: "2 cups",
      prepTime: "PT6M",
      totalTime: "PT18M",
      ingredients: [
        "1 tablespoon dried tangerine peel or dried orange peel",
        "1 small pear, sliced thinly",
        "2 1/2 cups water",
        "Optional: 2 jujubes, split for a softer finish",
      ],
      steps: [
        "Rinse the dried peel quickly and slice the pear into thin pieces.",
        "Add the peel and water to a small pot and bring to a gentle boil.",
        "Lower the heat and simmer for about 8 minutes so the citrus aroma opens gradually.",
        "Add the pear and optional jujube, then simmer for another 4 to 5 minutes.",
        "Strain if desired and serve warm with a light, clear flavor.",
      ],
      servingNotes: [
        "Keep the flavor light so the page stays kitchen-first and easy to repeat.",
        "This tea works best as a pantry-style warm drink rather than a concentrated routine.",
      ],
      caution: [
        "Meal-friendly and gentle-language here belongs to traditional kitchen context, not individualized advice.",
      ],
    },
    sections: [
      {
        title: "Why this tea works well for search and usability",
        paragraphs: [
          "Pear tea is easy for many readers to picture right away, while tangerine peel gives the page a more distinct traditional pantry angle.",
          "That combination supports practical long-tail searches without leaning on exaggerated lifestyle language.",
        ],
      },
      {
        title: "How this recipe strengthens the kitchen section",
        paragraphs: [
          "This page creates a direct route between citrus-peel herb profiles, pear-based seasonal reading, and simple pantry tea habits.",
          "It also adds another warm, food-friendly drink that feels different from ginger-heavy or floral tea pages.",
        ],
      },
    ],
  },
  {
    slug: "osmanthus-and-pear-tea-basics",
    title: "Osmanthus and Pear Tea Basics",
    description:
      "A fragrant floral pear tea that brings sweet osmanthus into a gentle, search-friendly kitchen routine with clear ingredients and steps.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Osmanthus and pear make a very approachable pairing for readers who want a floral tea that still feels grounded in familiar kitchen ingredients. The flower brings fragrance, the pear keeps the page food-first, and the overall cup fits long-tail searches around osmanthus tea, pear tea, and gentle floral drinks.",
    recipe: {
      recipeYield: "2 cups",
      prepTime: "PT6M",
      totalTime: "PT16M",
      ingredients: [
        "1 teaspoon dried osmanthus flower",
        "1 small pear, sliced thinly",
        "2 1/2 cups water",
        "Optional: 1 split jujube for a rounder finish",
      ],
      steps: [
        "Rinse the osmanthus flower lightly and slice the pear into thin pieces.",
        "Add the water to a small pot and bring it to a gentle boil.",
        "Lower the heat, add the pear, and simmer for about 6 minutes until the fruit softens slightly.",
        "Add the osmanthus flower and optional jujube during the last 2 to 3 minutes so the fragrance stays clear.",
        "Strain if desired and serve warm as a light floral pantry tea.",
      ],
      servingNotes: [
        "A shorter steep keeps the tea bright and fragrant instead of heavy.",
        "Pear helps the page stay food-first and easy for beginners to picture.",
      ],
      caution: [
        "Floral and gentle-language here belongs to traditional kitchen context, not individualized advice.",
      ],
    },
    sections: [
      {
        title: "Why this floral tea works well for beginners",
        paragraphs: [
          "Osmanthus is memorable because of its fragrance, but fragrance alone can feel abstract online. Pear gives the cup a familiar anchor and makes the recipe much easier to trust.",
          "That combination helps the page answer searches for sweet osmanthus tea, pear flower tea, and gentle Chinese-style tea ideas without leaning on risky wording.",
        ],
      },
      {
        title: "How this tea strengthens the kitchen section",
        paragraphs: [
          "This page adds a distinct floral tea path beyond mint, chrysanthemum, and berry-based cups.",
          "It also creates cleaner internal links between osmanthus flower, jasmine flower, pear-based recipes, and seasonal tea reading.",
        ],
      },
    ],
  },
  {
    slug: "rose-bud-and-mulberry-leaf-tea-basics",
    title: "Rose Bud and Mulberry Leaf Tea Basics",
    description:
      "A gentle floral-leaf tea page that connects rose bud and mulberry leaf through a light, kitchen-first cup.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Rose bud and mulberry leaf make a useful pairing for readers who want a floral tea that still feels grounded in seasonal kitchen reading. The cup is light, easy to picture, and useful for searches around floral tea, mulberry leaf tea, and simple pantry tea routines.",
    recipe: {
      recipeYield: "2 mugs",
      prepTime: "PT5M",
      totalTime: "PT12M",
      ingredients: [
        "1 teaspoon dried rose buds",
        "1 teaspoon dried mulberry leaf",
        "2 1/2 cups hot water",
        "2 split jujubes, optional",
        "Optional: 1 thin slice pear for a softer finish",
      ],
      steps: [
        "Rinse the rose buds, mulberry leaf, and optional jujubes briefly.",
        "Place them in a teapot or heat-safe cup.",
        "Pour the hot water over the ingredients and cover lightly.",
        "Steep for 6 to 8 minutes until the floral aroma opens and the leaf softens.",
        "Add the optional pear slice only if you want a softer finish, then serve warm.",
      ],
      servingNotes: [
        "This page works best as a light floral tea with a short ingredient list readers can remember easily.",
        "Keeping the flavor gentle helps the rose bud and mulberry leaf stay distinct instead of muddying together.",
      ],
      caution: [
        "Floral and cooling-style language here belongs to traditional kitchen context, not individualized advice.",
      ],
    },
    sections: [
      {
        title: "Why this pairing works well",
        paragraphs: [
          "Rose bud brings fragrance and pantry familiarity, while mulberry leaf gives the cup a clearer seasonal tea identity.",
          "That balance makes the page useful for readers who want something more distinctive than a plain jasmine-style cup without drifting into exaggerated language.",
        ],
      },
      {
        title: "What this tea adds to the site",
        paragraphs: [
          "This page creates a clean internal path between rose bud, mulberry leaf, chrysanthemum, evening tea reading, and seasonal tea searches.",
          "It also expands the floral tea cluster with a cup that feels light, kitchen-first, and easy to connect with everyday pantry habits.",
        ],
      },
    ],
  },
  {
    slug: "lotus-leaf-and-burdock-root-tea-basics",
    title: "Lotus Leaf and Burdock Root Tea Basics",
    description:
      "A light pantry tea page that connects lotus leaf and burdock root through an earthy, seasonal cup with safe search intent.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Lotus leaf and burdock root create a tea page that feels grounded, visual, and easy to place inside seasonal kitchen reading. The pairing is especially useful for readers searching lotus leaf tea or burdock root tea who need a calmer, food-first introduction instead of product-heavy language.",
    recipe: {
      recipeYield: "2 mugs",
      prepTime: "PT6M",
      totalTime: "PT16M",
      ingredients: [
        "1 teaspoon dried lotus leaf",
        "1 teaspoon sliced dried burdock root",
        "2 1/2 cups hot water",
        "2 thin pear slices, optional",
        "Optional: 1 small piece dried orange peel for a softer aroma",
      ],
      steps: [
        "Rinse the lotus leaf and burdock root briefly.",
        "Add them to a small pot or heat-safe teapot with the hot water.",
        "Steep covered for 8 to 10 minutes, or simmer very gently if the burdock slices are thick.",
        "Add the optional pear slices and dried orange peel for the last 2 minutes if you want a softer finish.",
        "Strain and serve warm as a light pantry tea.",
      ],
      servingNotes: [
        "This tea reads best as earthy and light rather than strong, so a short steep keeps the cup approachable.",
        "Pear helps the page stay visual and beginner-friendly without taking attention away from the leaf-and-root pairing.",
      ],
      caution: [
        "This page uses traditional seasonal tea language for educational kitchen context, not individualized advice.",
      ],
    },
    sections: [
      {
        title: "Why this tea is easy to understand",
        paragraphs: [
          "Lotus leaf gives the page a familiar seasonal tea identity, while burdock root adds an earthy note that makes the cup feel more grounded than a purely floral blend.",
          "That balance helps readers picture the ingredients clearly and supports safer long-tail searches around lotus leaf tea, burdock root tea, and simple pantry tea routines.",
        ],
      },
      {
        title: "How this page strengthens site SEO",
        paragraphs: [
          "This recipe creates a clean internal path between lotus leaf, burdock root, pear-based tea pages, and broader seasonal kitchen reading.",
          "It also expands the tea cluster with a more earthy profile, which keeps the site from relying only on floral or berry-style cups for search growth.",
        ],
      },
    ],
  },
  {
    slug: "cassia-seed-and-corn-silk-tea-basics",
    title: "Cassia Seed and Corn Silk Tea Basics",
    description:
      "A mild pantry tea page that connects cassia seed and corn silk through a light seasonal cup with search-friendly kitchen language.",
    eyebrow: "Kitchen Traditions",
    intro:
      "Cassia seed and corn silk create a tea page that feels approachable because both ingredients can be explained through pantry logic rather than abstract terminology. The cup is especially useful for readers searching cassia seed tea or corn silk tea who need a calmer, kitchen-first introduction.",
    recipe: {
      recipeYield: "2 mugs",
      prepTime: "PT6M",
      totalTime: "PT15M",
      ingredients: [
        "1 teaspoon cassia seeds",
        "1 small handful dried corn silk",
        "2 1/2 cups hot water",
        "1 thin pear slice, optional",
        "Optional: 1 small piece lotus leaf for a lighter finish",
      ],
      steps: [
        "Rinse the cassia seeds and corn silk briefly.",
        "Lightly crush the cassia seeds with the back of a spoon so the flavor opens more easily.",
        "Add everything to a small pot or heat-safe teapot with the hot water.",
        "Steep covered for 8 to 10 minutes, or simmer very gently if you want a fuller seed flavor.",
        "Add the optional pear slice near the end, then strain and serve warm.",
      ],
      servingNotes: [
        "A shorter steep keeps the cup mild and more beginner-friendly for readers trying seed tea for the first time.",
        "Pear helps the page stay visual and pantry-based while leaving cassia seed and corn silk as the main focus.",
      ],
      caution: [
        "The language on this page belongs to traditional kitchen context and should not be read as individualized advice.",
      ],
    },
    sections: [
      {
        title: "Why this pairing works for search and clarity",
        paragraphs: [
          "Cassia seed gives the cup a recognizable seed-tea identity, while corn silk keeps the page tied to familiar food culture and mild pantry habits.",
          "That makes the recipe easier to trust for readers looking up cassia seed tea, corn silk tea, or light seasonal tea without pulling the copy into stronger promise language.",
        ],
      },
      {
        title: "What this page adds to the site",
        paragraphs: [
          "This recipe creates a new internal path between cassia seed, corn silk, lotus leaf, and other light tea pages in the seasonal cluster.",
          "It also widens the tea library with a seed-and-silk pairing so the site is not limited to floral, berry, or root-centered cups.",
        ],
      },
    ],
  },
];
