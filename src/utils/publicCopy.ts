const orderedReplacements: Array<[RegExp, string]> = [
  [/Traditional Chinese Medicine, often shortened to TCM,/gi, "This traditional framework"],
  [/Traditional Chinese Medicine/gi, "this traditional framework"],
  [/\bTCM Basics\b/gi, "Basics"],
  [/What Is TCM\?/g, "What Is This Traditional Framework?"],
  [/What Does Blood Mean in TCM\?/g, "What Does Blood Mean Here?"],
  [/What Does Tonify Mean in TCM\?/g, "What Does Tonify Mean?"],
  [/What Does Spleen Mean in TCM\?/g, "What Does Spleen Mean Here?"],
  [/What Does Liver Mean in TCM\?/g, "What Does Liver Mean Here?"],
  [/What Does Shen Mean in TCM\?/g, "What Does Shen Mean?"],
  [/What Does Jing Mean in TCM\?/g, "What Does Jing Mean?"],
  [/What Is Food Stagnation in TCM\?/g, "What Is Food Stagnation?"],
  [/What Does Nourish Blood Mean in TCM\?/g, "What Does Nourish Blood Mean?"],
  [/What Is Damp Heat in TCM\?/g, "What Is Damp Heat?"],
  [/What Does Astringent Mean in TCM\?/g, "What Does Astringent Mean?"],
  [/What Does Harmonizing Mean in TCM\?/g, "What Does Harmonizing Mean?"],
  [/What Does ([^?]+) Mean in TCM\?/g, "What Does $1 Mean?"],
  [/What Is ([^?]+) in TCM\?/g, "What Is $1?"],
  [/5 Easy Chinese Food Therapy Ingredients for Beginners/g, "5 Easy Chinese Kitchen Ingredients for Beginners"],
  [/\bFood therapy herbs\b/gi, "Kitchen herbs"],
  [/\bfood therapy\b/gi, "kitchen traditions"],
  [/\bChinese medicine writing\b/gi, "traditional herb writing"],
  [/\bTCM writing\b/gi, "traditional herb writing"],
  [/\bTCM food traditions\b/gi, "traditional kitchen traditions"],
  [/\bTCM food writing\b/gi, "traditional kitchen writing"],
  [/\bTCM cooking content\b/gi, "traditional kitchen content"],
  [/\bTCM terms\b/gi, "traditional terms"],
  [/\bTCM term\b/gi, "traditional term"],
  [/\bTCM language\b/gi, "traditional language"],
  [/\bTCM vocabulary\b/gi, "traditional vocabulary"],
  [/\bTCM categories\b/gi, "traditional categories"],
  [/\bTCM category\b/gi, "traditional category"],
  [/\bTCM concept\b/gi, "traditional concept"],
  [/\bTCM idea\b/gi, "traditional idea"],
  [/\bTCM theory\b/gi, "traditional theory"],
  [/\bTCM thinking\b/gi, "traditional thinking"],
  [/\bTCM explanations\b/gi, "traditional explanations"],
  [/\bTCM ingredient\b/gi, "traditional herb ingredient"],
  [/\bTCM ingredients\b/gi, "traditional herb ingredients"],
  [/\bTCM herb pages\b/gi, "traditional herb pages"],
  [/\bTCM herb education\b/gi, "traditional herb education"],
  [/\bTCM heat-language\b/gi, "traditional heat language"],
  [/\bTCM pattern language\b/gi, "traditional pattern language"],
  [/\bTCM pattern term\b/gi, "traditional pattern term"],
  [/\bTCM pattern terms\b/gi, "traditional pattern terms"],
  [/\bTCM depth\b/gi, "traditional depth"],
  [/\bTCM\b/gi, "traditional"],
  [/\bin traditional\b/gi, "in traditional herb writing"],
  [/\bthe traditional spleen\b/gi, "the traditional spleen label"],
  [/\bthe traditional liver\b/gi, "the traditional liver label"],
  [/\bWhat Is traditional\?/g, "What Is This Traditional Framework?"],
  [/What Is traditional herb\?/g, "What Is This Traditional Framework?"],
  [/What Does Blood Mean in traditional herb writing\?/g, "What Does Blood Mean Here?"],
  [/What Does Tonify Mean in traditional herb writing\?/g, "What Does Tonify Mean?"],
  [/What Does Spleen Mean in traditional herb writing\?/g, "What Does Spleen Mean Here?"],
  [/What Does Liver Mean in traditional herb writing\?/g, "What Does Liver Mean Here?"],
  [/What Does Shen Mean in traditional herb writing\?/g, "What Does Shen Mean?"],
  [/What Does Jing Mean in traditional herb writing\?/g, "What Does Jing Mean?"],
  [/What Is Food Stagnation in traditional herb writing\?/g, "What Is Food Stagnation?"],
  [/What Does Nourish Blood Mean in traditional herb writing\?/g, "What Does Nourish Blood Mean?"],
  [/What Is Damp Heat in traditional herb writing\?/g, "What Is Damp Heat?"],
  [/What Does Astringent Mean in traditional herb writing\?/g, "What Does Astringent Mean?"],
  [/What Does Harmonizing Mean in traditional herb writing\?/g, "What Does Harmonizing Mean?"],
  [/\btraditional traditional herb\b/gi, "traditional"],
];

export function sanitizePublicText(text: string) {
  return orderedReplacements.reduce((value, [pattern, replacement]) => (
    value.replace(pattern, replacement)
  ), text);
}

type ContentSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type ContentRecipe = {
  recipeYield: string;
  prepTime: string;
  totalTime: string;
  ingredients: string[];
  steps: string[];
  servingNotes?: string[];
  caution?: string[];
};

type ContentArticle = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  eyebrow: string;
  sections: ContentSection[];
  recipe?: ContentRecipe;
};

type ContentCard = {
  slug: string;
  title: string;
  text: string;
};

type HerbContent = {
  category: string;
  summary: string;
  whatItIs: string;
  traditionalUses: string[];
  foodUses: string[];
  caution: string;
  tags: string[];
};

type TopicContent = {
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  sections: Array<{
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  featuredLinks: Array<{
    title: string;
    href: string;
    text: string;
  }>;
};

type HerbEnhancementContent = {
  kitchenPairings?: string[];
  goodStartingPoints?: string[];
  compareLinks?: Array<{
    title: string;
    href: string;
  }>;
};

export function sanitizeContentArticle<T extends ContentArticle>(article: T): T {
  return {
    ...article,
    title: sanitizePublicText(article.title),
    description: sanitizePublicText(article.description),
    intro: sanitizePublicText(article.intro),
    eyebrow: sanitizePublicText(article.eyebrow),
    sections: article.sections.map((section) => ({
      ...section,
      title: sanitizePublicText(section.title),
      paragraphs: section.paragraphs.map((paragraph) => sanitizePublicText(paragraph)),
      bullets: section.bullets?.map((bullet) => sanitizePublicText(bullet)),
    })),
    recipe: article.recipe && {
      ...article.recipe,
      ingredients: article.recipe.ingredients.map((item) => sanitizePublicText(item)),
      steps: article.recipe.steps.map((item) => sanitizePublicText(item)),
      servingNotes: article.recipe.servingNotes?.map((item) => sanitizePublicText(item)),
      caution: article.recipe.caution?.map((item) => sanitizePublicText(item)),
    },
  };
}

export function sanitizeContentCard<T extends ContentCard>(card: T): T {
  return {
    ...card,
    title: sanitizePublicText(card.title),
    text: sanitizePublicText(card.text),
  };
}

export function sanitizeHerbContent<T extends HerbContent>(herb: T): T {
  return {
    ...herb,
    category: sanitizePublicText(herb.category),
    summary: sanitizePublicText(herb.summary),
    whatItIs: sanitizePublicText(herb.whatItIs),
    traditionalUses: herb.traditionalUses.map((item) => sanitizePublicText(item)),
    foodUses: herb.foodUses.map((item) => sanitizePublicText(item)),
    caution: sanitizePublicText(herb.caution),
    tags: herb.tags.map((item) => sanitizePublicText(item)),
  };
}

export function sanitizeTopicContent<T extends TopicContent>(topic: T): T {
  return {
    ...topic,
    title: sanitizePublicText(topic.title),
    description: sanitizePublicText(topic.description),
    eyebrow: sanitizePublicText(topic.eyebrow),
    intro: sanitizePublicText(topic.intro),
    sections: topic.sections.map((section) => ({
      ...section,
      title: sanitizePublicText(section.title),
      paragraphs: section.paragraphs.map((item) => sanitizePublicText(item)),
      bullets: section.bullets?.map((item) => sanitizePublicText(item)),
    })),
    featuredLinks: topic.featuredLinks.map((link) => ({
      ...link,
      title: sanitizePublicText(link.title),
      text: sanitizePublicText(link.text),
    })),
  };
}

export function sanitizeHerbEnhancementContent<T extends HerbEnhancementContent>(item: T): T {
  return {
    ...item,
    kitchenPairings: item.kitchenPairings?.map((entry) => sanitizePublicText(entry)),
    goodStartingPoints: item.goodStartingPoints?.map((entry) => sanitizePublicText(entry)),
    compareLinks: item.compareLinks?.map((link) => ({
      ...link,
      title: sanitizePublicText(link.title),
    })),
  };
}
