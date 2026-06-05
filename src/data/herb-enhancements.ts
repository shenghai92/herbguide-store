export type HerbEnhancement = {
  slug: string;
  kitchenPairings?: string[];
  goodStartingPoints?: string[];
  compareLinks?: Array<{
    title: string;
    href: string;
  }>;
};

export const herbEnhancements: HerbEnhancement[] = [
  {
    slug: "goji-berry",
    kitchenPairings: ["Jujube", "Pear", "Black sesame", "Lotus seed"],
    goodStartingPoints: [
      "Use it in porridge, light soups, and tea-style pages rather than treating it like an isolated supplement.",
      "Add it near the end of cooking when you want color and softness without overcooking the berries.",
    ],
    compareLinks: [
      { title: "Goji Berry vs Jujube", href: "/basics/goji-berry-vs-jujube/" },
      { title: "Balanced Pantry Habits", href: "/topics/balanced-pantry-habits/" },
      { title: "Goji and Chrysanthemum Tea Basics", href: "/food-therapy/goji-and-chrysanthemum-tea-basics/" },
      { title: "Goji Berry Tea vs Goji Berry Porridge", href: "/basics/goji-berry-tea-vs-goji-berry-porridge/" },
    ],
  },
  {
    slug: "astragalus-root",
    kitchenPairings: ["Fresh ginger", "Jujube", "Chicken broth", "Carrot"],
    goodStartingPoints: [
      "Think of astragalus first as a long-simmered soup ingredient in traditional kitchen content.",
      "Use it as a context herb for learning qi language rather than as a casual everyday recommendation.",
    ],
    compareLinks: [
      { title: "What Does Tonify Mean in TCM?", href: "/basics/what-does-tonify-mean-in-tcm/" },
      { title: "Warming Foods", href: "/topics/warming-foods/" },
    ],
  },
  {
    slug: "fresh-ginger",
    kitchenPairings: ["Jujube", "Pear", "Chicken soup", "Mint in contrast"],
    goodStartingPoints: [
      "Fresh ginger is one of the best first herbs for readers who want kitchen use before theory.",
      "It works especially well when read together with warming and cooling basics rather than in isolation.",
    ],
    compareLinks: [
      { title: "Fresh Ginger vs Dried Ginger", href: "/basics/fresh-ginger-vs-dried-ginger/" },
      { title: "Digestive Traditions", href: "/topics/digestive-traditions/" },
    ],
  },
  {
    slug: "jujube-red-date",
    kitchenPairings: ["Fresh ginger", "Goji berry", "Longan fruit", "Lotus seed"],
    goodStartingPoints: [
      "Jujube is easiest to understand in teas, soups, and gentle pantry routines.",
      "It is a strong bridge ingredient between beginner food therapy pages and traditional nourishment language.",
    ],
    compareLinks: [
      { title: "Goji Berry vs Jujube", href: "/basics/goji-berry-vs-jujube/" },
      { title: "Evening Teas", href: "/topics/evening-teas/" },
      { title: "Jujube and Lotus Seed Congee for Quiet Evenings", href: "/food-therapy/jujube-and-lotus-seed-congee-for-quiet-evenings/" },
    ],
  },
  {
    slug: "chrysanthemum-flower",
    kitchenPairings: ["Mint", "Pear", "Light floral teas", "Goji berry in some blends"],
    goodStartingPoints: [
      "Chrysanthemum is usually easiest to trust when introduced through tea rather than heavy theory.",
      "Readers should pair this page with a clear explanation of cooling language for best understanding.",
    ],
    compareLinks: [
      { title: "What Does Clear Heat Mean?", href: "/basics/what-does-clear-heat-mean/" },
      { title: "Chrysanthemum and Mint Cooling Tea Basics", href: "/food-therapy/chrysanthemum-and-mint-cooling-tea-basics/" },
      { title: "Goji and Chrysanthemum Tea Basics", href: "/food-therapy/goji-and-chrysanthemum-tea-basics/" },
      { title: "Chrysanthemum vs Mint", href: "/basics/chrysanthemum-vs-mint/" },
    ],
  },
  {
    slug: "mint",
    kitchenPairings: ["Chrysanthemum", "Pear", "Light tea blends", "Fresh aromatic contrast"],
    goodStartingPoints: [
      "Mint is easiest to understand when paired with one more recognizable cooling herb rather than read alone.",
      "Tea pages usually explain mint better than abstract theory pages on their own.",
    ],
    compareLinks: [
      { title: "Chrysanthemum vs Mint", href: "/basics/chrysanthemum-vs-mint/" },
      { title: "Chrysanthemum and Mint Cooling Tea Basics", href: "/food-therapy/chrysanthemum-and-mint-cooling-tea-basics/" },
    ],
  },
  {
    slug: "black-sesame-seed",
    kitchenPairings: ["Goji berry", "Warm porridge", "Sesame paste", "Lotus seed desserts"],
    goodStartingPoints: [
      "Black sesame is easiest to understand through pantry use, breakfast pages, and dessert-style routines.",
      "It is strongest on HerbGuide when treated as a food-first ingredient rather than a hype-heavy beauty shortcut.",
    ],
    compareLinks: [
      { title: "Black Sesame Breakfast Ideas for Beginners", href: "/food-therapy/black-sesame-breakfast-ideas-for-beginners/" },
      { title: "Beauty Foods", href: "/topics/beauty-foods/" },
    ],
  },
  {
    slug: "hawthorn-berry",
    kitchenPairings: ["Chen pi", "Fresh ginger", "Light tart tea", "Rich meal contrast"],
    goodStartingPoints: [
      "Hawthorn is easiest to understand through rich-meal and pantry-tea language rather than isolated claims.",
      "Use it as a digestive reading page that connects glossary terms with practical kitchen context.",
    ],
    compareLinks: [
      { title: "Hawthorn Berry Tea for Rich Meals", href: "/food-therapy/hawthorn-berry-tea-for-rich-meals/" },
      { title: "What Is Food Stagnation in TCM?", href: "/basics/what-is-food-stagnation-in-tcm/" },
      { title: "Chen Pi vs Hawthorn Berry", href: "/basics/chen-pi-vs-hawthorn-berry/" },
    ],
  },
  {
    slug: "poria",
    kitchenPairings: ["Job's tears", "Light soups", "Plain porridge", "Chen pi in broader digestive reading"],
    goodStartingPoints: [
      "Poria makes the most sense after reading one plain-English page about dampness first.",
      "Think of it as a context herb for traditional fluid and heaviness language, not a quick-fix ingredient.",
    ],
    compareLinks: [
      { title: "What Is Dampness?", href: "/basics/what-is-dampness/" },
      { title: "Job's Tears Porridge for Heavy Days", href: "/food-therapy/jobs-tears-porridge-for-heavy-days/" },
      { title: "Poria vs Job's Tears", href: "/basics/poria-vs-jobs-tears/" },
    ],
  },
  {
    slug: "lotus-seed",
    kitchenPairings: ["Longan fruit", "Jujube", "Sweet soups", "Black sesame in broader pantry routines"],
    goodStartingPoints: [
      "Lotus seed is easiest to trust when introduced through dessert soups and gentle evening-style kitchen pages.",
      "Use it as a bridge between pantry familiarity and calmer traditional vocabulary.",
    ],
    compareLinks: [
      { title: "Lotus Seed and Longan Sweet Soup Basics", href: "/food-therapy/lotus-seed-and-longan-sweet-soup-basics/" },
      { title: "What Does Shen Mean in TCM?", href: "/basics/what-does-shen-mean-in-tcm/" },
      { title: "Jujube and Lotus Seed Congee for Quiet Evenings", href: "/food-therapy/jujube-and-lotus-seed-congee-for-quiet-evenings/" },
    ],
  },
  {
    slug: "jobs-tears",
    kitchenPairings: ["Poria", "Fresh ginger", "Light savory porridge", "Simple grain bowls"],
    goodStartingPoints: [
      "Job's tears works best for readers who want a concrete food example for dampness language.",
      "A porridge or grain-style page is usually the easiest way to make this ingredient memorable.",
    ],
    compareLinks: [
      { title: "Job's Tears Porridge for Heavy Days", href: "/food-therapy/jobs-tears-porridge-for-heavy-days/" },
      { title: "Digestive Traditions", href: "/topics/digestive-traditions/" },
      { title: "Poria vs Job's Tears", href: "/basics/poria-vs-jobs-tears/" },
    ],
  },
  {
    slug: "chen-pi",
    kitchenPairings: ["Fresh ginger", "Hawthorn", "Light teas", "Soup bases"],
    goodStartingPoints: [
      "Chen pi becomes much easier to understand when read as an aromatic pantry ingredient first.",
      "A tea-style page is often the simplest way for readers to connect the traditional story with practical kitchen use.",
    ],
    compareLinks: [
      { title: "Chen Pi Tea for Heavy Meal Days", href: "/food-therapy/chen-pi-tea-for-heavy-meal-days/" },
      { title: "Digestive Traditions", href: "/topics/digestive-traditions/" },
      { title: "Chen Pi vs Hawthorn Berry", href: "/basics/chen-pi-vs-hawthorn-berry/" },
    ],
  },
  {
    slug: "tremella-mushroom",
    kitchenPairings: ["Pear", "Jujube", "Lily bulb", "Light dessert soups"],
    goodStartingPoints: [
      "Tremella is easiest to understand through texture, sweetness, and very simple dessert-soup pages.",
      "It works best as a food-first ingredient that helps explain moisture and softness language gently.",
    ],
    compareLinks: [
      { title: "Tremella and Pear Sweet Soup Basics", href: "/food-therapy/tremella-and-pear-sweet-soup-basics/" },
      { title: "Seasonal Kitchen Ideas", href: "/topics/seasonal-kitchen-ideas/" },
      { title: "Tremella and Lotus Seed Sweet Soup Basics", href: "/food-therapy/tremella-and-lotus-seed-sweet-soup-basics/" },
    ],
  },
  {
    slug: "adzuki-bean",
    kitchenPairings: ["Job's Tears", "Fresh ginger", "Plain soups", "Lighter pantry meals"],
    goodStartingPoints: [
      "Adzuki bean makes the most sense on HerbGuide when it appears in light soup or porridge content.",
      "Readers usually understand this page best after one plain-English article about dampness or digestive heaviness.",
    ],
    compareLinks: [
      { title: "Adzuki Bean and Job's Tears Soup Basics", href: "/food-therapy/adzuki-bean-and-jobs-tears-soup-basics/" },
      { title: "Digestive Traditions", href: "/topics/digestive-traditions/" },
    ],
  },
  {
    slug: "chinese-yam",
    kitchenPairings: ["Carrot", "Light broth", "Fresh ginger", "Simple pantry soups"],
    goodStartingPoints: [
      "Chinese yam is easiest to trust when presented as a mild food-first ingredient rather than a dense tonic.",
      "Simple soup and porridge pages usually teach this ingredient better than abstract theory alone.",
    ],
    compareLinks: [
      { title: "Chinese Yam and Carrot Soup Basics", href: "/food-therapy/chinese-yam-and-carrot-soup-basics/" },
      { title: "Balanced Pantry Habits", href: "/topics/balanced-pantry-habits/" },
    ],
  },
  {
    slug: "licorice-root",
    kitchenPairings: ["Mild tea blends", "Broth support", "Formula context", "Pantry-style comparison reading"],
    goodStartingPoints: [
      "Licorice root makes the most sense on HerbGuide when readers understand it as a harmonizing herb rather than as a casual everyday sweet root.",
      "The best first click after this page is usually a plain-English basics article about harmonizing or a gentle digestive pathway page.",
    ],
    compareLinks: [
      { title: "What Does Harmonizing Mean in TCM?", href: "/basics/what-does-harmonizing-mean-in-tcm/" },
      { title: "What Does Tonify Mean in TCM?", href: "/basics/what-does-tonify-mean-in-tcm/" },
      { title: "Balanced Pantry Habits", href: "/topics/balanced-pantry-habits/" },
    ],
  },
  {
    slug: "schisandra-berry",
    kitchenPairings: ["Jujube", "Lotus seed", "Light tea blends", "Evening-style pantry routes"],
    goodStartingPoints: [
      "Schisandra is easiest to trust when introduced through very small, tea-style pairings instead of abstract five-flavor hype.",
      "It works best when readers connect the berry to astringent language and then move into one gentle recipe page.",
    ],
    compareLinks: [
      { title: "What Does Astringent Mean in TCM?", href: "/basics/what-does-astringent-mean-in-tcm/" },
      { title: "Schisandra and Jujube Tea Basics", href: "/food-therapy/schisandra-and-jujube-tea-basics/" },
      { title: "Evening Teas", href: "/topics/evening-teas/" },
    ],
  },
  {
    slug: "mulberry-fruit",
    kitchenPairings: ["Goji berry", "Pear", "Light berry teas", "Gentle seasonal pantry reading"],
    goodStartingPoints: [
      "Mulberry fruit is strongest on HerbGuide when readers approach it as a softer berry ingredient with clear seasonal and tea-style context.",
      "A comparison page or berry-tea page usually explains mulberry better than a dense theory-first route.",
    ],
    compareLinks: [
      { title: "Mulberry Fruit vs Goji Berry", href: "/basics/mulberry-fruit-vs-goji-berry/" },
      { title: "Mulberry and Goji Tea Basics", href: "/food-therapy/mulberry-and-goji-tea-basics/" },
      { title: "Seasonal Kitchen Ideas", href: "/topics/seasonal-kitchen-ideas/" },
    ],
  },
];

export const getHerbEnhancement = (slug: string) =>
  herbEnhancements.find((item) => item.slug === slug);
