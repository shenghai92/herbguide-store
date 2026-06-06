import { sanitizeTopicContent } from "../utils/publicCopy";

export type Topic = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  herbSlugs?: string[];
  basicsSlugs?: string[];
  foodSlugs?: string[];
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

const rawTopics: Topic[] = [
  {
    slug: "digestive-traditions",
    title: "Digestive Traditions",
    description:
      "A practical topic page for traditional herbs, soups, pantry ingredients, and traditional terms commonly linked with digestive traditions.",
    eyebrow: "Topic Page",
    intro:
      "Digestive content is one of the easiest places for beginners to enter traditional herb learning because it overlaps with soup, tea, pantry ingredients, and everyday meal language. This hub groups the gentlest entry points together.",
    herbSlugs: ["fresh-ginger", "dried-ginger", "chen-pi", "hawthorn-berry", "poria", "jobs-tears", "adzuki-bean"],
    basicsSlugs: ["what-is-dampness", "what-is-qi-stagnation", "fresh-ginger-vs-dried-ginger", "what-does-tonify-mean", "what-does-spleen-mean", "what-is-food-stagnation", "what-is-damp-heat", "chen-pi-vs-hawthorn-berry", "poria-vs-jobs-tears", "what-does-harmonizing-mean"],
    foodSlugs: ["a-simple-warming-soup-guide-for-cold-weather", "chen-pi-tea-for-heavy-meal-days", "hawthorn-berry-tea-for-rich-meals", "jobs-tears-porridge-for-heavy-days", "adzuki-bean-and-jobs-tears-soup-basics"],
    sections: [
      {
        title: "Why digestive pages work so well",
        paragraphs: [
          "Readers already understand meals, heaviness, comfort food, and tea routines. That makes digestive content feel grounded rather than abstract.",
          "It is also one of the clearest areas for connecting herb pages, comparison guides, and kitchen-tradition articles.",
        ],
      },
      {
        title: "What this topic usually includes",
        paragraphs: [
          "Digestive traditions usually connect to warming soups, aromatic peels, pantry-style teas, and beginner explanations of qi movement or dampness.",
        ],
        bullets: [
          "Fresh ginger and dried ginger for warming comparison",
          "Chen pi for aromatic pantry context",
          "Hawthorn for food-heavy meal language",
          "Poria and Job's Tears for dampness-related reading",
        ],
      },
    ],
    featuredLinks: [
      {
        title: "What Is Dampness?",
        href: "/basics/what-is-dampness/",
        text: "A core beginner concept page for understanding heaviness and sluggishness language.",
      },
      {
        title: "Fresh Ginger vs Dried Ginger",
        href: "/basics/fresh-ginger-vs-dried-ginger/",
        text: "A strong side-by-side guide for understanding why preparation matters.",
      },
      {
        title: "A Simple Warming Soup Guide for Cold Weather",
        href: "/kitchen/a-simple-warming-soup-guide-for-cold-weather/",
        text: "A recipe-style page that shows digestive-friendly kitchen structure in practice.",
      },
      {
        title: "Chen Pi",
        href: "/herbs/chen-pi/",
        text: "A pantry herb that helps connect food, aroma, and qi movement language.",
      },
    ],
  },
  {
    slug: "evening-teas",
    title: "Evening Teas",
    description:
      "A topic page for gentle tea-style content, approachable traditional ingredients, and plain-English guidance around calming kitchen routines.",
    eyebrow: "Topic Page",
    intro:
      "Tea pages are often approachable because readers can picture them instantly. This topic page groups together tea-style pages and pantry herbs that feel light, familiar, and easy to revisit.",
    herbSlugs: ["jujube-red-date", "chrysanthemum-flower", "longan-fruit", "lotus-seed", "mint", "schisandra-berry"],
    basicsSlugs: ["goji-berry-vs-jujube", "warming-vs-cooling-foods", "what-does-clear-heat-mean", "what-does-shen-mean", "chrysanthemum-vs-mint", "what-does-astringent-mean"],
    foodSlugs: ["jujube-and-ginger-tea-for-busy-weeks", "chrysanthemum-and-mint-cooling-tea-basics", "lotus-seed-and-longan-sweet-soup-basics", "pear-and-chrysanthemum-tea-for-warm-afternoons", "goji-and-chrysanthemum-tea-basics", "jujube-and-lotus-seed-congee-for-quiet-evenings", "schisandra-and-jujube-tea-basics"],
    sections: [
      {
        title: "Why tea pages are easy for beginners to follow",
        paragraphs: [
          "Tea-style pages are easy to revisit and easy to connect with seasonal curiosity. They also fit an educational tone better than more aggressive supplement-style content.",
          "That makes them a gentle way to learn ingredient names, flavor patterns, and traditional vocabulary.",
        ],
      },
      {
        title: "What belongs in this topic",
        paragraphs: [
          "Evening teas are not presented as sleep fixes. They are presented as gentle kitchen routines, ingredient pairings, and cultural explanations in plain English.",
        ],
        bullets: [
          "Jujube and ginger tea for warm routine content",
          "Chrysanthemum and mint for lighter cooling tea content",
          "Longan and lotus seed for softer dessert-soup and tea themes",
        ],
      },
    ],
    featuredLinks: [
      {
        title: "Jujube and Ginger Tea for Busy Weeks",
        href: "/kitchen/jujube-and-ginger-tea-for-busy-weeks/",
        text: "A simple tea page with ingredients, steps, and caution language.",
      },
      {
        title: "Chrysanthemum and Mint Cooling Tea Basics",
        href: "/kitchen/chrysanthemum-and-mint-cooling-tea-basics/",
        text: "A light tea guide that also teaches cooling vocabulary.",
      },
      {
        title: "Jujube",
        href: "/herbs/jujube-red-date/",
        text: "A pantry-friendly herb profile for one of the most useful tea ingredients in the library.",
      },
      {
        title: "Chrysanthemum",
        href: "/herbs/chrysanthemum-flower/",
        text: "A floral tea herb that anchors many beginner cooling pages.",
      },
    ],
  },
  {
    slug: "seasonal-kitchen-ideas",
    title: "Seasonal Kitchen Ideas",
    description:
      "A topic page for soups, teas, warming and cooling ingredients, and practical seasonal reading across HerbGuide.",
    eyebrow: "Topic Page",
    intro:
      "Seasonality is one of the easiest ways to make traditional herb content practical. Readers may not know every traditional term, but they understand cold weather, dry days, summer drinks, and comfort foods. This topic page organizes the material through that familiar lens.",
    herbSlugs: ["fresh-ginger", "mint", "chrysanthemum-flower", "lily-bulb", "tremella-mushroom", "chinese-yam", "perilla-leaf", "mulberry-fruit"],
    basicsSlugs: ["warming-vs-cooling-foods", "what-does-moisten-dryness-mean", "what-does-clear-heat-mean", "what-does-yin-deficiency-mean", "what-does-channel-entry-mean", "what-is-damp-heat", "chrysanthemum-vs-mint", "mulberry-fruit-vs-goji-berry"],
    foodSlugs: ["a-simple-warming-soup-guide-for-cold-weather", "pear-and-lily-bulb-soup-for-dry-days", "chrysanthemum-and-mint-cooling-tea-basics", "goji-berry-porridge-for-gentle-mornings", "pear-and-chrysanthemum-tea-for-warm-afternoons", "goji-and-chrysanthemum-tea-basics", "tremella-and-pear-sweet-soup-basics", "chinese-yam-and-carrot-soup-basics", "mulberry-and-goji-tea-basics", "perilla-and-ginger-soup-for-cool-days"],
    sections: [
      {
        title: "Seasonality makes theory easier to read",
        paragraphs: [
          "Warming and cooling ideas become much easier to understand when they are tied to weather, meals, and kitchen routines.",
          "That is why seasonal content often performs better than abstract theory pages on its own.",
        ],
      },
      {
        title: "What readers can do from here",
        paragraphs: [
          "This topic page helps readers move between basics, herb profiles, and kitchen pages without losing the thread.",
        ],
        bullets: [
          "Use warming pages in cold-weather reading",
          "Use cooling pages in tea and summer-style reading",
          "Use dryness pages when soup and pear-style content feels more relevant",
        ],
      },
    ],
    featuredLinks: [
      {
        title: "Warming vs Cooling Foods",
        href: "/basics/warming-vs-cooling-foods/",
        text: "The simplest starting point for reading seasonal traditional food language.",
      },
      {
        title: "Pear and Lily Bulb Soup for Dry Days",
        href: "/kitchen/pear-and-lily-bulb-soup-for-dry-days/",
        text: "A gentle seasonal recipe-style page built around dryness vocabulary.",
      },
      {
        title: "Fresh Ginger",
        href: "/herbs/fresh-ginger/",
        text: "A core warming herb for cold-weather soups, teas, and beginner reading.",
      },
      {
        title: "Mint",
        href: "/herbs/mint/",
        text: "A familiar cooling herb that helps seasonal theory feel concrete.",
      },
    ],
  },
  {
    slug: "warming-foods",
    title: "Warming Foods",
    description:
      "A topic page for warming herbs, soup pages, ginger comparisons, and plain-English traditional language around cold-weather food traditions.",
    eyebrow: "Topic Page",
    intro:
      "Warming foods are one of the strongest beginner topics because the idea feels intuitive and useful. This hub gathers together the pages that explain warming language through herbs, tea, and soup rather than abstract theory alone.",
    herbSlugs: ["fresh-ginger", "dried-ginger", "astragalus-root", "cinnamon-twig", "perilla-leaf", "licorice-root"],
    basicsSlugs: ["warming-vs-cooling-foods", "fresh-ginger-vs-dried-ginger", "what-does-tonify-mean", "what-does-spleen-mean", "what-does-harmonizing-mean"],
    foodSlugs: ["a-simple-warming-soup-guide-for-cold-weather", "jujube-and-ginger-tea-for-busy-weeks", "perilla-and-ginger-soup-for-cool-days"],
    sections: [
      {
        title: "Why warming language is beginner-friendly",
        paragraphs: [
          "Readers can connect warming ideas to taste, weather, soup, and comfort. That makes these pages easier to read and easier to remember.",
          "It also creates a natural bridge into herb profiles like fresh ginger, dried ginger, astragalus, and cinnamon twig.",
        ],
      },
      {
        title: "What to explore first",
        paragraphs: [
          "The best warming pages combine one concept page, one comparison page, one soup page, and one or two herb profiles.",
        ],
        bullets: [
          "Start with the warming and cooling basics page",
          "Compare fresh ginger and dried ginger",
          "Move into a simple warming soup page",
          "Finish with specific herb profiles",
        ],
      },
    ],
    featuredLinks: [
      {
        title: "Warming vs Cooling Foods",
        href: "/basics/warming-vs-cooling-foods/",
        text: "A plain-English anchor page for the whole topic.",
      },
      {
        title: "Fresh Ginger vs Dried Ginger",
        href: "/basics/fresh-ginger-vs-dried-ginger/",
        text: "A comparison guide that teaches why form and preparation matter.",
      },
      {
        title: "A Simple Warming Soup Guide for Cold Weather",
        href: "/kitchen/a-simple-warming-soup-guide-for-cold-weather/",
        text: "A practical recipe-style page that turns warming theory into food.",
      },
      {
        title: "Cinnamon Twig",
        href: "/herbs/cinnamon-twig/",
        text: "A warming herb page that adds depth beyond familiar kitchen ginger content.",
      },
    ],
  },
  {
    slug: "beauty-foods",
    title: "Beauty Foods",
    description:
      "A topic page for pantry ingredients often associated with nourishment, moisture, and food-first beauty traditions in kitchen culture.",
    eyebrow: "Topic Page",
    intro:
      "Beauty food content is popular, but it can easily turn exaggerated. This topic page keeps the tone grounded by focusing on pantry ingredients, traditional context, and food-first routines instead of dramatic promises.",
    herbSlugs: ["black-sesame-seed", "goji-berry", "lily-bulb", "mulberry-fruit", "tremella-mushroom", "lotus-seed"],
    basicsSlugs: ["goji-berry-vs-jujube", "what-does-moisten-dryness-mean", "what-does-yin-deficiency-mean", "what-does-jing-mean", "what-does-nourish-blood-mean", "goji-berry-tea-vs-goji-berry-porridge", "mulberry-fruit-vs-goji-berry"],
    foodSlugs: ["black-sesame-breakfast-ideas-for-beginners", "pear-and-lily-bulb-soup-for-dry-days", "goji-berry-porridge-for-gentle-mornings", "black-sesame-and-jujube-breakfast-bowl", "goji-and-chrysanthemum-tea-basics", "tremella-and-pear-sweet-soup-basics", "tremella-and-lotus-seed-sweet-soup-basics", "mulberry-and-goji-tea-basics"],
    sections: [
      {
        title: "What makes this topic worth doing carefully",
        paragraphs: [
          "Readers are already searching for black sesame, goji berry, pear, lily bulb, and similar ingredients through a beauty and nourishment lens.",
          "Handled carefully, these pages can stay grounded while still answering that kind of curiosity.",
        ],
      },
      {
        title: "A grounded way to read this topic",
        paragraphs: [
          "The strongest version of this topic is not miracle-claim language. It is kitchen-focused, tradition-aware, and cautious about what food pages can actually promise.",
        ],
        bullets: [
          "Use black sesame as a pantry anchor",
          "Use goji berry as a crossover ingredient",
          "Use pear and lily bulb for moisture-themed seasonal context",
        ],
      },
    ],
    featuredLinks: [
      {
        title: "Black Sesame Breakfast Ideas for Beginners",
        href: "/kitchen/black-sesame-breakfast-ideas-for-beginners/",
        text: "A practical breakfast-style article that fits this topic naturally.",
      },
      {
        title: "Black Sesame Seed",
        href: "/herbs/black-sesame-seed/",
        text: "A pantry herb page that supports beauty-food reading without hype.",
      },
      {
        title: "Goji Berry",
        href: "/herbs/goji-berry/",
        text: "A visually strong, familiar herb that bridges food and tradition.",
      },
      {
        title: "Pear and Lily Bulb Soup for Dry Days",
        href: "/kitchen/pear-and-lily-bulb-soup-for-dry-days/",
        text: "A gentle seasonal page that supports moisture and softness language.",
      },
    ],
  },
  {
    slug: "balanced-pantry-habits",
    title: "Balanced Pantry Habits",
    description:
      "A topic page for pantry-friendly Chinese ingredients, gentle routines, and simple ways to learn through everyday herbs and foods.",
    eyebrow: "Topic Page",
    intro:
      "Some of the best HerbGuide content is not about advanced herbs at all. It is about pantry familiarity. This hub gathers the pages that help readers build confidence through ingredients they can actually picture using in tea, soup, porridge, and breakfast routines.",
    herbSlugs: ["goji-berry", "jujube-red-date", "black-sesame-seed", "chrysanthemum-flower", "fresh-ginger", "adzuki-bean", "tremella-mushroom", "chinese-yam", "mulberry-fruit", "schisandra-berry", "licorice-root"],
    basicsSlugs: ["what-is-traditional-herb-theory", "goji-berry-vs-jujube", "what-does-tonify-mean", "what-does-jing-mean", "what-does-channel-entry-mean", "what-does-nourish-blood-mean", "poria-vs-jobs-tears", "goji-berry-tea-vs-goji-berry-porridge", "what-does-astringent-mean", "mulberry-fruit-vs-goji-berry", "what-does-harmonizing-mean"],
    foodSlugs: ["5-easy-traditional-kitchen-ingredients-for-beginners", "black-sesame-breakfast-ideas-for-beginners", "jujube-and-ginger-tea-for-busy-weeks", "goji-berry-porridge-for-gentle-mornings", "lotus-seed-and-longan-sweet-soup-basics", "black-sesame-and-jujube-breakfast-bowl", "jobs-tears-porridge-for-heavy-days", "jujube-and-lotus-seed-congee-for-quiet-evenings", "tremella-and-pear-sweet-soup-basics", "adzuki-bean-and-jobs-tears-soup-basics", "chinese-yam-and-carrot-soup-basics", "tremella-and-lotus-seed-sweet-soup-basics", "mulberry-and-goji-tea-basics", "schisandra-and-jujube-tea-basics"],
    sections: [
      {
        title: "Why pantry-first content builds trust",
        paragraphs: [
          "Readers are much more likely to trust a site that starts with goji berry, jujube, ginger, black sesame, and chrysanthemum than one that jumps immediately into intimidating formula language.",
          "That pantry-first approach also keeps the tone practical, grounded, and easier to follow.",
        ],
      },
      {
        title: "How to use this topic page",
        paragraphs: [
          "A good sequence begins with one or two herb profiles, then moves into a recipe or comparison page, and finally into a basics page that explains the language behind the ingredient choices.",
        ],
        bullets: [
          "Start with goji berry, jujube, or black sesame",
          "Add one tea or breakfast article",
          "Use a basics page to understand the traditional vocabulary",
        ],
      },
    ],
    featuredLinks: [
      {
        title: "5 Easy Chinese Food Therapy Ingredients for Beginners",
        href: "/kitchen/5-easy-kitchen-ingredients-for-beginners/",
        text: "A broad starter page for pantry-friendly exploration.",
      },
      {
        title: "Goji Berry vs Jujube",
        href: "/basics/goji-berry-vs-jujube/",
        text: "A comparison guide that helps readers sort two common pantry ingredients clearly.",
      },
      {
        title: "Black Sesame Seed",
        href: "/herbs/black-sesame-seed/",
        text: "A pantry herb profile that supports breakfast, dessert, and beauty-food themes.",
      },
      {
        title: "What Is Traditional Herb Theory?",
        href: "/basics/what-is-traditional-herb-theory/",
        text: "A plain-English overview for readers ready to connect pantry use back to the wider framework.",
      },
    ],
  },
];

export const topics = rawTopics.map((topic) => sanitizeTopicContent(topic));

export const getTopicsForHerb = (slug: string) =>
  topics.filter((topic) => topic.herbSlugs?.includes(slug)).slice(0, 3);

export const getTopicsForBasics = (slug: string) =>
  topics.filter((topic) => topic.basicsSlugs?.includes(slug)).slice(0, 3);

export const getTopicsForFood = (slug: string) =>
  topics.filter((topic) => topic.foodSlugs?.includes(slug)).slice(0, 3);
