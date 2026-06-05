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
    slug: "chen-pi",
    kitchenPairings: ["Fresh ginger", "Hawthorn", "Light teas", "Soup bases"],
    goodStartingPoints: [
      "Chen pi becomes much easier to understand when read as an aromatic pantry ingredient first.",
      "A tea-style page is often the simplest way for readers to connect the traditional story with practical kitchen use.",
    ],
    compareLinks: [
      { title: "Chen Pi Tea for Heavy Meal Days", href: "/food-therapy/chen-pi-tea-for-heavy-meal-days/" },
      { title: "Digestive Traditions", href: "/topics/digestive-traditions/" },
    ],
  },
];

export const getHerbEnhancement = (slug: string) =>
  herbEnhancements.find((item) => item.slug === slug);
