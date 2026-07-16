import { sanitizeHerbEnhancementContent } from "../utils/publicCopy";

export type HerbEnhancement = {
  slug: string;
  kitchenPairings?: string[];
  goodStartingPoints?: string[];
  compareLinks?: Array<{
    title: string;
    href: string;
  }>;
};

const rawHerbEnhancements: HerbEnhancement[] = [
  {
    slug: "goji-berry",
    kitchenPairings: ["Jujube", "Pear", "Black sesame", "Chrysanthemum"],
    goodStartingPoints: [
      "Use it in porridge, light soups, and tea-style pages rather than reading it like an isolated supplement.",
      "Add it near the end of cooking when you want color and softness without overcooking the berries.",
    ],
    compareLinks: [
      { title: "Goji Berry vs Jujube", href: "/basics/goji-berry-vs-jujube/" },
      { title: "Balanced Pantry Habits", href: "/topics/balanced-pantry-habits/" },
      { title: "Goji and Chrysanthemum Tea Basics", href: "/kitchen/goji-and-chrysanthemum-tea-basics/" },
      { title: "Goji Berry Tea vs Goji Berry Porridge", href: "/basics/goji-berry-tea-vs-goji-berry-porridge/" },
    ],
  },
  {
    slug: "ginseng",
    kitchenPairings: ["Astragalus Root", "Jujube", "Chicken broth"],
    goodStartingPoints: [
      "Understand that it is traditionally used in moderation, often in long-simmered soups rather than quick teas.",
      "Compare it with American Ginseng to see how traditional theory separates different roots.",
    ],
    compareLinks: [
      { title: "What Does Tonify Mean in Traditional Herb Writing?", href: "/basics/what-does-tonify-mean/" },
      { title: "What Does Qi Mean?", href: "/basics/what-does-qi-mean/" },
      { title: "American Ginseng Guide", href: "/herbs/american-ginseng/" },
    ],
  },
  {
    slug: "fresh-ginger",
    kitchenPairings: ["Jujube (Red Date)", "Brown sugar", "Seafood dishes", "Chicken soup"],
    goodStartingPoints: [
      "Ginger Tea: A few slices of fresh ginger simmered in water for 10-15 minutes, often paired with brown sugar or jujube (red date) for a comforting, warming drink on cold days.",
      "Balancing Seafood: Almost universally used when steaming fish or cooking crab, as traditional frameworks consider seafood 'cold' in nature, requiring ginger's warmth for balance.",
      "Preparation: For gentle warmth, ginger is often used with its skin on. For a slightly more intense heat, it is peeled.",
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
      "It is a strong bridge ingredient between beginner kitchen pages and traditional nourishment language.",
    ],
    compareLinks: [
      { title: "Goji Berry vs Jujube", href: "/basics/goji-berry-vs-jujube/" },
      { title: "Evening Teas", href: "/topics/evening-teas/" },
      { title: "Jujube and Lotus Seed Congee for Quiet Evenings", href: "/kitchen/jujube-and-lotus-seed-congee-for-quiet-evenings/" },
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
      { title: "Chrysanthemum and Mint Cooling Tea Basics", href: "/kitchen/chrysanthemum-and-mint-cooling-tea-basics/" },
      { title: "Goji and Chrysanthemum Tea Basics", href: "/kitchen/goji-and-chrysanthemum-tea-basics/" },
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
      { title: "Chrysanthemum and Mint Cooling Tea Basics", href: "/kitchen/chrysanthemum-and-mint-cooling-tea-basics/" },
    ],
  },
  {
    slug: "black-sesame-seed",
    kitchenPairings: ["Goji berry", "Warm porridge", "Sesame paste", "Lotus seed desserts"],
    goodStartingPoints: [
      "Black sesame is easiest to understand through pantry use, breakfast pages, and dessert-style routines.",
      "It is strongest on HerbGuide when framed as a food-first ingredient rather than a hype-heavy beauty angle.",
    ],
    compareLinks: [
      { title: "Black Sesame Breakfast Ideas for Beginners", href: "/kitchen/black-sesame-breakfast-ideas-for-beginners/" },
      { title: "Beauty Foods", href: "/topics/beauty-foods/" },
    ],
  },
  {
    slug: "hawthorn-berry",
    kitchenPairings: ["Chen Pi", "Barley Sprout", "Rock sugar"],
    goodStartingPoints: [
      "Brew it as a simple tea after a heavy dinner.",
      "Notice how the sour flavor cuts through the feeling of sluggishness.",
    ],
    compareLinks: [
      { title: "Hawthorn Berry Tea for Rich Meals", href: "/kitchen/hawthorn-berry-tea-for-rich-meals/" },
      { title: "What Is Food Stagnation?", href: "/basics/what-is-food-stagnation/" },
      { title: "Chen Pi vs Hawthorn Berry", href: "/basics/chen-pi-vs-hawthorn-berry/" },
    ],
  },
  {
    slug: "poria",
    kitchenPairings: ["Job's Tears", "Chinese Yam", "Adzuki Bean"],
    goodStartingPoints: [
      "Add a few pieces to your next batch of rice porridge or chicken soup.",
      "It will not change the taste, but it adds traditional value to the bowl.",
    ],
    compareLinks: [
      { title: "What Is Dampness?", href: "/basics/what-is-dampness/" },
      { title: "Job's Tears Porridge for Heavy Days", href: "/kitchen/jobs-tears-porridge-for-heavy-days/" },
      { title: "Poria vs Job's Tears", href: "/basics/poria-vs-jobs-tears/" },
    ],
  },
  {
    slug: "astragalus-root",
    kitchenPairings: ["Jujube", "Goji Berry", "Ginseng"],
    goodStartingPoints: [
      "Drop a few slices into a slow-simmering chicken or vegetable broth.",
      "Remove the woody slices before eating, as they are meant to flavor the broth, not to be chewed.",
    ],
    compareLinks: [
      { title: "A Simple Warming Soup Guide for Cold Weather", href: "/kitchen/a-simple-warming-soup-guide-for-cold-weather/" },
      { title: "Jujube and Ginger Tea for Busy Weeks", href: "/kitchen/jujube-and-ginger-tea-for-busy-weeks/" },
      { title: "What Does Tonify Mean in Traditional Herb Writing?", href: "/basics/what-does-tonify-mean/" },
      { title: "Warming Foods", href: "/topics/warming-foods/" },
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
      { title: "Job's Tears Porridge for Heavy Days", href: "/kitchen/jobs-tears-porridge-for-heavy-days/" },
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
      { title: "Chen Pi Tea for Heavy Meal Days", href: "/kitchen/chen-pi-tea-for-heavy-meal-days/" },
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
      { title: "Tremella and Pear Sweet Soup Basics", href: "/kitchen/tremella-and-pear-sweet-soup-basics/" },
      { title: "Seasonal Kitchen Ideas", href: "/topics/seasonal-kitchen-ideas/" },
      { title: "Tremella and Lotus Seed Sweet Soup Basics", href: "/kitchen/tremella-and-lotus-seed-sweet-soup-basics/" },
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
      { title: "Adzuki Bean and Job's Tears Soup Basics", href: "/kitchen/adzuki-bean-and-jobs-tears-soup-basics/" },
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
      { title: "Chinese Yam and Carrot Soup Basics", href: "/kitchen/chinese-yam-and-carrot-soup-basics/" },
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
      { title: "What Does Harmonizing Mean?", href: "/basics/what-does-harmonizing-mean/" },
      { title: "What Does Tonify Mean in Traditional Herb Writing?", href: "/basics/what-does-tonify-mean/" },
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
      { title: "What Does Astringent Mean?", href: "/basics/what-does-astringent-mean/" },
      { title: "Schisandra and Jujube Tea Basics", href: "/kitchen/schisandra-and-jujube-tea-basics/" },
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
      { title: "Mulberry and Goji Tea Basics", href: "/kitchen/mulberry-and-goji-tea-basics/" },
      { title: "Seasonal Kitchen Ideas", href: "/topics/seasonal-kitchen-ideas/" },
    ],
  },
  {
    slug: "dong-quai",
    kitchenPairings: [
      "White Peony Root",
      "Sichuan Lovage Root",
      "Prepared Rehmannia",
    ],
    goodStartingPoints: [
      "It is most commonly experienced in slow-cooked chicken or mutton soups.",
      "The flavor is strong, so a little goes a long way in the kitchen.",
    ],
    compareLinks: [
      { title: "What Does Blood Mean in Traditional Herb Writing?", href: "/basics/what-does-blood-mean/" },
      { title: "What Does Nourish Blood Mean?", href: "/basics/what-does-nourish-blood-mean/" },
      { title: "What Does Tonify Mean in Traditional Herb Writing?", href: "/basics/what-does-tonify-mean/" },
    ],
  },
  {
    slug: "red-sage-root",
    kitchenPairings: ["Classic formulas", "Root comparisons", "Calmer educational reading", "Traditional movement language"],
    goodStartingPoints: [
      "Read this page as a vocabulary and context page rather than a personal use page.",
      "It makes more sense after one simpler basics article on blood or qi movement language.",
    ],
    compareLinks: [
      { title: "What Does Blood Mean in Traditional Herb Writing?", href: "/basics/what-does-blood-mean/" },
      { title: "What Is Qi Stagnation?", href: "/basics/what-is-qi-stagnation/" },
    ],
  },
  {
    slug: "reishi-mushroom",
    kitchenPairings: [
      "Jujube (Red Date)",
      "Goji Berry",
      "Astragalus Root",
    ],
    goodStartingPoints: [
      "Add a few dried slices to a slow-simmered chicken or vegetable broth for 45-60 minutes. Remove the woody slices before serving — they flavor the broth, they are not meant to be eaten.",
      "For a simpler route, simmer dried slices in water for 20-30 minutes as a tea. The flavor is earthy and distinctly bitter, so pair it with naturally sweet ingredients like jujube or goji berry.",
      "Think of reishi as a weekend project rather than a quick morning fix. It is a slow-acting, long-term ingredient — not a casual everyday flavor.",
      "Reishi is not a casual everyday flavor ingredient. Its bitterness makes it better suited as a background note in broths and soups rather than a primary flavor.",
    ],
    compareLinks: [
      { title: "What Does Qi Mean?", href: "/basics/what-does-qi-mean/" },
      { title: "What Does Shen Mean in Traditional Herb Writing?", href: "/basics/what-does-shen-mean/" },
      { title: "What Does Tonify Mean in Traditional Herb Writing?", href: "/basics/what-does-tonify-mean/" },
    ],
  },
  {
    slug: "cordyceps",
    kitchenPairings: ["Chicken soup", "Root pairings", "Premium ingredient reading", "Long-simmered broth"],
    goodStartingPoints: [
      "Cordyceps should be read through careful traditional context, not performance-oriented hype.",
      "A simple herb profile is a better starting point than product marketing pages.",
    ],
    compareLinks: [
      { title: "What Does Jing Mean?", href: "/basics/what-does-jing-mean/" },
      { title: "What Does Tonify Mean in Traditional Herb Writing?", href: "/basics/what-does-tonify-mean/" },
    ],
  },
  {
    slug: "monk-fruit",
    kitchenPairings: ["Pear", "Light tea", "Cooling fruit infusions", "Seasonal drink reading"],
    goodStartingPoints: [
      "Monk fruit is easiest to understand as a tea or fruit page first, not only as a sweetener search.",
      "Pair it with gentle cooling and dryness language so the context stays coherent.",
    ],
    compareLinks: [
      { title: "What Does Clear Heat Mean?", href: "/basics/what-does-clear-heat-mean/" },
      { title: "Seasonal Kitchen Ideas", href: "/topics/seasonal-kitchen-ideas/" },
    ],
  },
  {
    slug: "white-atractylodes-root",
    kitchenPairings: ["Poria", "Fresh ginger", "Mild soups", "Foundational digestive reading"],
    goodStartingPoints: [
      "This page becomes much easier after a plain-English article about spleen or dampness language.",
      "Think of it as a foundational theory herb more than a casual pantry item.",
    ],
    compareLinks: [
      { title: "What Does Spleen Mean in Traditional Herb Writing?", href: "/basics/what-does-spleen-mean/" },
      { title: "What Is Dampness?", href: "/basics/what-is-dampness/" },
      { title: "Digestive Traditions", href: "/topics/digestive-traditions/" },
    ],
  },
  {
    slug: "fritillary-bulb",
    kitchenPairings: ["Pear", "Lily bulb", "Tremella", "Light dessert soups"],
    goodStartingPoints: [
      "This page works best when readers already understand gentle dryness-related kitchen language.",
      "Pear-style pages are usually a calmer introduction than theory-heavy writing alone.",
    ],
    compareLinks: [
      { title: "What Does Moisten Dryness Mean?", href: "/basics/what-does-moisten-dryness-mean/" },
      { title: "Pear and Lily Bulb Soup for Dry Days", href: "/kitchen/pear-and-lily-bulb-soup-for-dry-days/" },
      { title: "Seasonal Kitchen Ideas", href: "/topics/seasonal-kitchen-ideas/" },
    ],
  },
  {
    slug: "honeysuckle-flower",
    kitchenPairings: ["Chrysanthemum", "Mint", "Light floral tea", "Summer reading"],
    goodStartingPoints: [
      "Use this page to compare stronger and gentler floral cooling language.",
      "Tea-style comparisons usually explain honeysuckle more clearly than abstract heat language alone.",
    ],
    compareLinks: [
      { title: "What Does Clear Heat Mean?", href: "/basics/what-does-clear-heat-mean/" },
      { title: "Chrysanthemum vs Mint", href: "/basics/chrysanthemum-vs-mint/" },
      { title: "Seasonal Kitchen Ideas", href: "/topics/seasonal-kitchen-ideas/" },
    ],
  },
  {
    slug: "osmanthus-flower",
    kitchenPairings: ["Pear", "Jujube", "Light floral tea", "Dessert-style pantry reading"],
    goodStartingPoints: [
      "Osmanthus flower is easiest to understand through tea and dessert-style kitchen pages rather than abstract theory first.",
      "Readers usually trust this page more when they connect the fragrance with pear, warm drinks, and simple pantry routines.",
    ],
    compareLinks: [
      { title: "Seasonal Kitchen Ideas", href: "/topics/seasonal-kitchen-ideas/" },
      { title: "Evening Teas", href: "/topics/evening-teas/" },
      { title: "Osmanthus and Pear Tea Basics", href: "/kitchen/osmanthus-and-pear-tea-basics/" },
    ],
  },
  {
    slug: "jasmine-flower",
    kitchenPairings: ["Chrysanthemum", "Osmanthus flower", "Light floral tea", "Gentle tea culture reading"],
    goodStartingPoints: [
      "Jasmine flower is easiest to trust when introduced through tea culture and floral pantry reading.",
      "A simple floral comparison path works better here than a dense theory-first explanation.",
    ],
    compareLinks: [
      { title: "Jasmine and Pear Tea Basics", href: "/kitchen/jasmine-and-pear-tea-basics/" },
      { title: "Chrysanthemum vs Mint", href: "/basics/chrysanthemum-vs-mint/" },
      { title: "Evening Teas", href: "/topics/evening-teas/" },
      { title: "Seasonal Kitchen Ideas", href: "/topics/seasonal-kitchen-ideas/" },
    ],
  },
  {
    slug: "rose-bud",
    kitchenPairings: ["Jujube", "Osmanthus flower", "Jasmine flower", "Light floral tea"],
    goodStartingPoints: [
      "Rose bud is easiest to trust when introduced through floral tea culture and gentle pantry reading rather than abstract claims.",
      "A short tea page or a calm evening-tea topic path usually explains this flower better than theory-first writing.",
    ],
    compareLinks: [
      { title: "Evening Teas", href: "/topics/evening-teas/" },
      { title: "Rose Bud and Mulberry Leaf Tea Basics", href: "/kitchen/rose-bud-and-mulberry-leaf-tea-basics/" },
      { title: "Osmanthus and Pear Tea Basics", href: "/kitchen/osmanthus-and-pear-tea-basics/" },
    ],
  },
  {
    slug: "mulberry-leaf",
    kitchenPairings: ["Chrysanthemum", "Pear", "Rose bud", "Light seasonal tea"],
    goodStartingPoints: [
      "Mulberry leaf is most approachable when readers meet it through tea and seasonal kitchen language instead of product-heavy search pages.",
      "A simple cooling-language basics page usually helps this leaf make sense faster.",
    ],
    compareLinks: [
      { title: "What Does Clear Heat Mean?", href: "/basics/what-does-clear-heat-mean/" },
      { title: "Seasonal Kitchen Ideas", href: "/topics/seasonal-kitchen-ideas/" },
      { title: "Rose Bud and Mulberry Leaf Tea Basics", href: "/kitchen/rose-bud-and-mulberry-leaf-tea-basics/" },
    ],
  },
  {
    slug: "lotus-leaf",
    kitchenPairings: ["Mint", "Chrysanthemum", "Pear", "Simple summer tea"],
    goodStartingPoints: [
      "Lotus leaf works best when readers meet it through visual tea language and pantry habits rather than through aggressive search expectations.",
      "A short seasonal tea page usually explains this leaf more naturally than theory-heavy copy alone.",
    ],
    compareLinks: [
      { title: "Seasonal Kitchen Ideas", href: "/topics/seasonal-kitchen-ideas/" },
      { title: "Evening Teas", href: "/topics/evening-teas/" },
      { title: "Lotus Leaf and Burdock Root Tea Basics", href: "/kitchen/lotus-leaf-and-burdock-root-tea-basics/" },
    ],
  },
  {
    slug: "burdock-root",
    kitchenPairings: ["Pear", "Lotus leaf", "Chrysanthemum", "Light root tea"],
    goodStartingPoints: [
      "Burdock root becomes much easier to understand when readers picture an earthy pantry tea rather than a product-style promise page.",
      "Simple tea and seasonal kitchen language keep this root approachable without overstating its role.",
    ],
    compareLinks: [
      { title: "What Does Channel Entry Mean?", href: "/basics/what-does-channel-entry-mean/" },
      { title: "Seasonal Kitchen Ideas", href: "/topics/seasonal-kitchen-ideas/" },
      { title: "Lotus Leaf and Burdock Root Tea Basics", href: "/kitchen/lotus-leaf-and-burdock-root-tea-basics/" },
    ],
  },
  {
    slug: "cassia-seed",
    kitchenPairings: ["Chrysanthemum", "Lotus leaf", "Corn silk", "Roasted seed tea"],
    goodStartingPoints: [
      "Cassia seed becomes easier to understand when readers picture a light roasted-seed tea rather than a product-style search result.",
      "A short tea page and one seasonal topic hub usually explain this seed more naturally than dense theory alone.",
    ],
    compareLinks: [
      { title: "What Does Clear Heat Mean?", href: "/basics/what-does-clear-heat-mean/" },
      { title: "Seasonal Kitchen Ideas", href: "/topics/seasonal-kitchen-ideas/" },
      { title: "Cassia Seed and Corn Silk Tea Basics", href: "/kitchen/cassia-seed-and-corn-silk-tea-basics/" },
    ],
  },
  {
    slug: "corn-silk",
    kitchenPairings: ["Pear", "Cassia seed", "Lotus leaf", "Simple simmered tea"],
    goodStartingPoints: [
      "Corn silk is strongest when presented as a familiar pantry tea ingredient with clear boundaries, not as a promise-heavy shortcut page.",
      "Readers usually trust this ingredient faster when it sits inside a simple seasonal tea recipe.",
    ],
    compareLinks: [
      { title: "Seasonal Kitchen Ideas", href: "/topics/seasonal-kitchen-ideas/" },
      { title: "Balanced Pantry Habits", href: "/topics/balanced-pantry-habits/" },
      { title: "Cassia Seed and Corn Silk Tea Basics", href: "/kitchen/cassia-seed-and-corn-silk-tea-basics/" },
    ],
  },
  {
    slug: "gardenia-fruit",
    kitchenPairings: ["Cooling teas", "Seasonal reading", "Advanced floral pages", "Heat-language comparisons"],
    goodStartingPoints: [
      "This page is best read as advanced vocabulary support, not a first-step tea ingredient page.",
      "Readers should pair it with one plain-English basics page on heat language first.",
    ],
    compareLinks: [
      { title: "What Does Clear Heat Mean?", href: "/basics/what-does-clear-heat-mean/" },
      { title: "What Is Damp Heat?", href: "/basics/what-is-damp-heat/" },
    ],
  },
  {
    slug: "cinnamon-bark",
    kitchenPairings: ["Fresh ginger", "Cinnamon twig", "Broth", "Cold-weather reading"],
    goodStartingPoints: [
      "This page is strongest when readers compare bark-level warming with simpler kitchen ginger content.",
      "It helps show why one spice family can split into different traditional identities.",
    ],
    compareLinks: [
      { title: "Warming vs Cooling Foods", href: "/basics/warming-vs-cooling-foods/" },
      { title: "Fresh Ginger vs Dried Ginger", href: "/basics/fresh-ginger-vs-dried-ginger/" },
      { title: "Warming Foods", href: "/topics/warming-foods/" },
    ],
  },
  {
    slug: "angelica-dahurica-root",
    kitchenPairings: ["Aromatic broths", "Fresh ginger contrast", "Root comparisons", "Exterior reading"],
    goodStartingPoints: [
      "Readers often understand this page better once they realize it is not the same herb as dong quai.",
      "A simple basics page on traditional naming and context helps a lot here.",
    ],
    compareLinks: [
      { title: "What Is Traditional Herb Theory?", href: "/basics/what-is-traditional-herb-theory/" },
      { title: "Seasonal Kitchen Ideas", href: "/topics/seasonal-kitchen-ideas/" },
    ],
  },
  {
    slug: "balloon-flower-root",
    kitchenPairings: ["Pear", "Light broth", "Upper-body language reading", "Formula context"],
    goodStartingPoints: [
      "This page should be used to understand lung-related traditional vocabulary, not as direct personal advice.",
      "It works well beside one simpler seasonal or moisture-themed page.",
    ],
    compareLinks: [
      { title: "What Does Channel Entry Mean?", href: "/basics/what-does-channel-entry-mean/" },
      { title: "What Does Moisten Dryness Mean?", href: "/basics/what-does-moisten-dryness-mean/" },
    ],
  },
  {
    slug: "fo-ti-root",
    kitchenPairings: ["Black sesame", "Goji berry", "Prepared root reading", "Long-term nourishment vocabulary"],
    goodStartingPoints: [
      "Readers should approach this page as a caution-first profile, not a folklore endorsement page.",
      "It is strongest when paired with basics content about jing and nourishment language.",
    ],
    compareLinks: [
      { title: "What Does Jing Mean?", href: "/basics/what-does-jing-mean/" },
      { title: "What Does Nourish Blood Mean?", href: "/basics/what-does-nourish-blood-mean/" },
      { title: "Beauty Foods", href: "/topics/beauty-foods/" },
    ],
  },
  {
    slug: "barley-sprout",
    kitchenPairings: ["Hawthorn berry", "Chen pi", "Light tea", "Digestive grain reading"],
    goodStartingPoints: [
      "Barley sprout becomes memorable when readers connect it with food accumulation language and grain familiarity.",
      "A simple digestive basics page is the best companion read.",
    ],
    compareLinks: [
      { title: "What Is Food Stagnation?", href: "/basics/what-is-food-stagnation/" },
      { title: "Digestive Traditions", href: "/topics/digestive-traditions/" },
    ],
  },
  {
    slug: "amomum-fruit",
    kitchenPairings: ["Chen pi", "Fresh ginger", "Rice porridge", "Aromatic digestive reading"],
    goodStartingPoints: [
      "This page helps readers understand why aromatic and digestive language often overlap in traditional writing.",
      "It makes more sense after one plain-English page on dampness or qi movement.",
    ],
    compareLinks: [
      { title: "What Is Dampness?", href: "/basics/what-is-dampness/" },
      { title: "What Is Qi Stagnation?", href: "/basics/what-is-qi-stagnation/" },
      { title: "Digestive Traditions", href: "/topics/digestive-traditions/" },
    ],
  },
  {
    slug: "safflower",
    kitchenPairings: ["Classic flower comparisons", "Advanced blood-movement reading", "Traditional infusion context", "Visual herb study"],
    goodStartingPoints: [
      "Use this page to understand why some beautiful flowers still need serious caution language.",
      "It is best read as advanced educational material, not a casual pantry page.",
    ],
    compareLinks: [
      { title: "What Does Blood Mean in Traditional Herb Writing?", href: "/basics/what-does-blood-mean/" },
      { title: "What Is Qi Stagnation?", href: "/basics/what-is-qi-stagnation/" },
    ],
  },
  {
    slug: "skullcap-root",
    kitchenPairings: ["Advanced tea context", "Dampness reading", "Heat-language basics", "Root comparisons"],
    goodStartingPoints: [
      "This page should be used to decode high-intent traditional searches, not as a personal tea suggestion.",
      "Readers usually need a simpler heat-language page before this root fully makes sense.",
    ],
    compareLinks: [
      { title: "What Does Clear Heat Mean?", href: "/basics/what-does-clear-heat-mean/" },
      { title: "What Is Damp Heat?", href: "/basics/what-is-damp-heat/" },
    ],
  },
  {
    slug: "bupleurum-root",
    kitchenPairings: ["Formula reading", "Liver qi basics", "Root comparisons", "Advanced movement vocabulary"],
    goodStartingPoints: [
      "This page works best for readers who keep seeing chai hu in formulas and want a calmer explanation.",
      "It should be paired with a simple basics page on qi stagnation or liver language.",
    ],
    compareLinks: [
      { title: "What Is Qi Stagnation?", href: "/basics/what-is-qi-stagnation/" },
      { title: "What Does Liver Mean in Traditional Herb Writing?", href: "/basics/what-does-liver-mean/" },
    ],
  },
  {
    slug: "ginkgo-leaf",
    kitchenPairings: ["Light leaf infusions", "Pear in softer seasonal reading", "Classical leaf comparisons", "Calmer educational routes"],
    goodStartingPoints: [
      "This page works best when readers treat ginkgo leaf as a naming-and-context guide rather than a shortcut to supplement conclusions.",
      "A simple basics page on traditional theory or channel language helps the herb feel less random and more readable.",
    ],
    compareLinks: [
      { title: "What Is Traditional Herb Theory?", href: "/basics/what-is-traditional-herb-theory/" },
      { title: "What Does Channel Entry Mean?", href: "/basics/what-does-channel-entry-mean/" },
      { title: "Seasonal Kitchen Ideas", href: "/topics/seasonal-kitchen-ideas/" },
    ],
  },
  {
    slug: "turmeric-root",
    kitchenPairings: ["Fresh ginger", "Light broths", "Root comparisons", "Food-first spice reading"],
    goodStartingPoints: [
      "This page is easiest to trust when readers see how jiang huang differs from broad internet turmeric marketing.",
      "Pair it with one basics page on traditional theory and one simple soup page so the herb stays grounded in context.",
    ],
    compareLinks: [
      { title: "What Is Traditional Herb Theory?", href: "/basics/what-is-traditional-herb-theory/" },
      { title: "What Is Qi Stagnation?", href: "/basics/what-is-qi-stagnation/" },
      { title: "A Simple Warming Soup Guide for Cold Weather", href: "/kitchen/a-simple-warming-soup-guide-for-cold-weather/" },
    ],
  },
];

export const herbEnhancements = rawHerbEnhancements.map((item) => sanitizeHerbEnhancementContent(item));

export const getHerbEnhancement = (slug: string) =>
  herbEnhancements.find((item) => item.slug === slug);
