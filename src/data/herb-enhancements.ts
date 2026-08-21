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
    kitchenPairings: ["Jujube (Red Date)", "Chrysanthemum flowers", "Chicken or bone broth", "Rice porridge"],
    goodStartingPoints: [
      "Soups and Broths: Add during the last 15 minutes of simmering chicken or bone broth. They plump up, release their sweetness, and add a beautiful red color.",
      "Teas: Steep in hot water, often paired with chrysanthemum flowers (for eye support) or jujube (red date). The rehydrated berries are usually eaten after drinking the tea.",
      "Congee (Porridge): Stir into warm rice porridge for a gentle, nourishing breakfast.",
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
    kitchenPairings: ["Lean chicken or pork", "Jujube (Red Date)", "Astragalus Root"],
    goodStartingPoints: [
      "Double-Boiled Soup: The most traditional preparation involves placing a few slices of ginseng with lean chicken or pork in a ceramic jar, sealing it, and steaming it in a water bath for several hours. This extracts the essence without losing volatile compounds.",
      "Ginseng Tea: A few thin slices steeped in hot water. The same slices can be re-steeped multiple times until the flavor fades, after which the slices are often chewed and eaten.",
      "Respecting the Heat: Because Red Ginseng is very warming, traditional practice advises against consuming it with other hot, spicy foods or strong stimulants like coffee.",
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
    kitchenPairings: ["Lotus seed", "Chinese yam (shan yao)", "Rice", "Chicken soup"],
    goodStartingPoints: [
      "Begin by confirming form and label: whole dried slices, granules, or a marketed blend.",
      "For pantry experimentation, start with small quantities in a long-simmered soup or congee where poria's mild texture can be observed without overwhelming other ingredients.",
    ],
    compareLinks: [
      { title: "What Is Dampness?", href: "/basics/what-is-dampness/" },
      { title: "Job's Tears Guide", href: "/herbs/jobs-tears/" },
      { title: "Chinese Yam Guide", href: "/herbs/chinese-yam/" },
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
    kitchenPairings: ["Pu'er tea", "Beef or duck (slow-cooked)", "Red bean soups", "Fresh ginger"],
    goodStartingPoints: [
      "Preparation: Before use, the dried peel is typically soaked in warm water for 10-15 minutes until soft. The white pith on the inside is sometimes gently scraped off with a knife to reduce bitterness, though premium aged Chen Pi has very little pith remaining.",
      "Teas: A small piece steeped with Pu'er tea or simply in hot water makes a classic post-meal digestive drink.",
      "Soups and Braises: Essential in slow-cooked beef, duck, or red bean soups. It adds a bright, earthy citrus note that cuts through fat and richness.",
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
    kitchenPairings: ["Ginger", "Jujube (red date)", "Pear", "Mixed root soups"],
    goodStartingPoints: [
      "Begin by reading product labels for the botanical name (Glycyrrhiza uralensis) and the stated plant part (root and rhizome).",
      "For pantry experimentation, try a single whole slice in a large pot of broth or a mild herbal blend to observe how it changes the flavor profile, then remove the slice before serving.",
    ],
    compareLinks: [
      { title: "What Does Harmonizing Mean?", href: "/basics/what-does-harmonizing-mean/" },
      { title: "Fresh Ginger Guide", href: "/herbs/fresh-ginger/" },
      { title: "Jujube Guide", href: "/herbs/jujube-red-date/" },
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
    kitchenPairings: ["Goji berry", "Black sesame", "Oats", "Rice porridge"],
    goodStartingPoints: [
      "Begin by checking the package: confirm the botanical name (Morus alba) and the plant part (dried fruit / sang shen).",
      "Try a small-scale trial such as steeping a few berries in hot water to observe rehydration, color release, and flavor.",
    ],
    compareLinks: [
      { title: "Goji Berry Guide", href: "/herbs/goji-berry/" },
      { title: "Black Sesame Seed Guide", href: "/herbs/black-sesame-seed/" },
      { title: "Goji Berry vs Jujube", href: "/basics/goji-berry-vs-jujube/" },
    ],
  },
  {
    slug: "white-peony-root",
    kitchenPairings: [
      "Licorice Root (Gan Cao) — classic sweet-and-sour tea for muscle cramps",
      "Dong Quai (Dang Gui) — foundational blood-nourishing combinations",
      "Fresh Ginger — balances its slightly cold nature in digestive formulas",
    ],
    goodStartingPoints: [
      "Think of White Peony Root as a tension reliever — it is traditionally used to 'soften the Liver' when tightness, cramping, or irritability suggest Liver Blood Deficiency.",
      "The most famous kitchen use is a simple decoction with Licorice Root (Gan Cao), creating a sweet-and-sour tea specifically associated with easing sudden muscle spasms.",
      "It is not typically eaten as food — unlike goji or jujube — and is almost always used in boiled preparations or powdered formulas.",
    ],
    compareLinks: [
      { title: "What Does Blood Mean in Traditional Herb Writing?", href: "/basics/what-does-blood-mean/" },
      { title: "What Does Nourish Blood Mean?", href: "/basics/what-does-nourish-blood-mean/" },
      { title: "Dong Quai Guide", href: "/herbs/dong-quai/" },
    ],
  },
  {
    slug: "prepared-rehmannia",
    kitchenPairings: [
      "Chen Pi (Aged Tangerine Peel) — helps the stomach process this dense, heavy root",
      "Dong Quai (Dang Gui) and Goji Berries — classic postpartum soup trio",
      "Fresh Ginger — added to bone broths with Rehmannia to support digestion",
    ],
    goodStartingPoints: [
      "Think of Prepared Rehmannia as a deep, slow-building tonic — it is rich, sticky, and pitch black, designed for long-term nourishment rather than quick fixes.",
      "In the kitchen, it is most approachable when added to slow-cooked bone broths or meat stews, where it turns the broth a dark, rich color and adds a mild earthy sweetness.",
      "If your digestion feels weak or sluggish, start with a small amount and always include Chen Pi or fresh ginger — traditional practice considers this essential pairing advice.",
    ],
    compareLinks: [
      { title: "What Does Nourish Blood Mean?", href: "/basics/what-does-nourish-blood-mean/" },
      { title: "What Does Jing Mean?", href: "/basics/what-does-jing-mean/" },
      { title: "Dong Quai Guide", href: "/herbs/dong-quai/" },
    ],
  },
  {
    slug: "dong-quai",
    kitchenPairings: [
      "White Peony Root (Bai Shao)",
      "Prepared Rehmannia (Shu Di Huang)",
      "Goji Berries and Red Dates",
      "Slow-cooked chicken or mutton",
    ],
    goodStartingPoints: [
      "Dong Quai is most commonly experienced in slow-cooked chicken or mutton soups — it is a kitchen staple, not just a supplement.",
      "The flavor is strong and distinctive — earthy, celery-like — so use only 3 to 5 thin slices per pot of soup and balance with sweeter ingredients like Goji Berries and Red Dates.",
      "Think of it as the herb that builds Blood AND moves it — unlike purely nourishing herbs like Rehmannia, Dong Quai prevents stagnation by ensuring newly built Blood circulates smoothly.",
    ],
    compareLinks: [
      { title: "What Does Blood Mean in Traditional Herb Writing?", href: "/basics/what-does-blood-mean/" },
      { title: "What Does Nourish Blood Mean?", href: "/basics/what-does-nourish-blood-mean/" },
      { title: "What Does Tonify Mean in Traditional Herb Writing?", href: "/basics/what-does-tonify-mean/" },
      { title: "White Peony Root Guide", href: "/herbs/white-peony-root/" },
      { title: "Prepared Rehmannia Guide", href: "/herbs/prepared-rehmannia/" },
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
    kitchenPairings: ["Pear", "Chrysanthemum", "Dried longan", "Warm water infusions"],
    goodStartingPoints: [
      "Begin by identifying which product form you have: a whole dried fruit, a tea bag/blend, or a commercial sweetener product.",
      "For whole dried fruits, look at the shell and labeling for processing notes; for packaged sweeteners, prioritize ingredient transparency.",
    ],
    compareLinks: [
      { title: "Chrysanthemum Tea Basics", href: "/kitchen/chrysanthemum-tea-basics/" },
      { title: "Pear and Chrysanthemum Tea", href: "/kitchen/pear-and-chrysanthemum-tea-for-warm-afternoons/" },
      { title: "Longan Fruit Guide", href: "/herbs/longan-fruit/" },
    ],
  },
  {
    slug: "white-atractylodes-root",
    kitchenPairings: ["Poria", "Chinese yam (Shan Yao)", "Rice", "Chicken soup"],
    goodStartingPoints: [
      "Begin by confirming the name and form on the product label: ensure the botanical (Atractylodes macrocephala) and the plant part (rhizome) are clear.",
      "If the product is powdered or concentrated, pause to read the safety note and the science section before relying on research summaries.",
    ],
    compareLinks: [
      { title: "Poria Guide", href: "/herbs/poria/" },
      { title: "Chinese Yam Guide", href: "/herbs/chinese-yam/" },
      { title: "What Does Tonify Mean?", href: "/basics/what-does-tonify-mean/" },
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
    kitchenPairings: ["Barley", "Red date (jujube)", "Roasted corn", "Simple warm-water infusions"],
    goodStartingPoints: [
      "Begin by confirming the ingredient name and form on any package (dried styles and stigmas or corn silk/yu mi xu) and read labels for processing and country of origin.",
      "Try a single-ingredient warm infusion to note the plain flavor, then experiment with gentle pairings such as barley or mild dried fruit.",
    ],
    compareLinks: [
      { title: "Cassia Seed and Corn Silk Tea Basics", href: "/kitchen/cassia-seed-and-corn-silk-tea-basics/" },
      { title: "Jujube Guide", href: "/herbs/jujube-red-date/" },
      { title: "What Does Clear Heat Mean?", href: "/basics/what-does-clear-heat-mean/" },
    ],
  },
  {
    slug: "gardenia-fruit",
    kitchenPairings: ["Rice dishes", "Broths", "Yellow-colored desserts", "Carefully balanced aromatic blends"],
    goodStartingPoints: [
      "Begin by identifying the product form and label information: botanical name (Gardenia jasminoides), declared plant part (dried fruit), and country or mill of origin.",
      "If the material appears as a specialized extract or powder, consider it a concentrated pantry ingredient that merits additional product-literacy steps.",
    ],
    compareLinks: [
      { title: "Turmeric Root Guide", href: "/herbs/turmeric-root/" },
      { title: "What Does Clear Heat Mean?", href: "/basics/what-does-clear-heat-mean/" },
      { title: "Warming vs Cooling Foods", href: "/basics/warming-vs-cooling-foods/" },
    ],
  },
  {
    slug: "cinnamon-bark",
    kitchenPairings: ["Star anise", "Ginger", "Beef braises", "Pear poaching liquid"],
    goodStartingPoints: [
      "Begin by checking the label on the spice jar or package: botanical name (Cinnamomum cassia vs. C. verum), form (whole quill, broken bark, or ground), and country of origin.",
      "If you are investigating concentrated products rather than culinary spice, prioritize product identity and independent quality information.",
    ],
    compareLinks: [
      { title: "Cinnamon Twig Guide", href: "/herbs/cinnamon-twig/" },
      { title: "Fresh Ginger Guide", href: "/herbs/fresh-ginger/" },
      { title: "Warming vs Cooling Foods", href: "/basics/warming-vs-cooling-foods/" },
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
    kitchenPairings: ["Sesame", "Garlic", "Soy sauce", "Scallion", "Chicken soup"],
    goodStartingPoints: [
      "Begin by identifying the form you can buy: fresh root, dried slices, or a prepared banchan, then read the kitchen notes and pairings for practical ideas.",
      "If you encounter this botanical in a supplement or concentrated extract, pause and check product labeling and formulation information.",
    ],
    compareLinks: [
      { title: "What Does Clear Heat Mean?", href: "/basics/what-does-clear-heat-mean/" },
      { title: "Fresh Ginger Guide", href: "/herbs/fresh-ginger/" },
      { title: "Seasonal Kitchen Ideas", href: "/topics/seasonal-kitchen-ideas/" },
    ],
  },
  {
    slug: "fo-ti-root",
    kitchenPairings: ["Black sesame", "Jujube (red date)", "Specialty traditional preparations"],
    goodStartingPoints: [
      "Begin by confirming the botanical name and the form on the label (Polygonum multiflorum; prepared root tuber; extract).",
      "For culinary interest, consider Fo-Ti a specialty ingredient: learn how it is listed and prepared rather than attempting an at-home protocol.",
    ],
    compareLinks: [
      { title: "Black Sesame Seed Guide", href: "/herbs/black-sesame-seed/" },
      { title: "What Does Jing Mean?", href: "/basics/what-does-jing-mean/" },
      { title: "What Is Kidney Essence?", href: "/basics/what-is-kidney-essence/" },
    ],
  },
  {
    slug: "barley-sprout",
    kitchenPairings: ["Hawthorn", "Rice", "Roasted corn", "Congee"],
    goodStartingPoints: [
      "Begin by clarifying the name and product form on a package: is it labeled germinated grain, malted barley, or barley grass?",
      "Try a small amount of whole or lightly ground germinated barley in a plain rice congee or as a single-ingredient grain tea to understand its flavor and aroma.",
    ],
    compareLinks: [
      { title: "Hawthorn Berry Guide", href: "/herbs/hawthorn-berry/" },
      { title: "What Does Tonify Mean?", href: "/basics/what-does-tonify-mean/" },
      { title: "Digestive Traditions", href: "/topics/digestive-traditions/" },
    ],
  },
  {
    slug: "amomum-fruit",
    kitchenPairings: ["Rice porridge", "Pork", "Ginger", "Mushroom broths"],
    goodStartingPoints: [
      "Begin by confirming the product form on the label (whole pods, seeds, or powder) and try a small culinary test such as a single pod in a pot of rice.",
      "If you are exploring it as a botanical or a product, prioritize learning the botanical name and part used before attempting concentrated use.",
    ],
    compareLinks: [
      { title: "Fresh Ginger Guide", href: "/herbs/fresh-ginger/" },
      { title: "What Does Harmonizing Mean?", href: "/basics/what-does-harmonizing-mean/" },
      { title: "Seasonal Kitchen Ideas", href: "/topics/seasonal-kitchen-ideas/" },
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
    kitchenPairings: ["Traditional formula context", "Label-reading (multi-ingredient products)", "Botanical identification (other skullcaps)"],
    goodStartingPoints: [
      "Begin by confirming the botanical name and plant part on any product label (Scutellaria baicalensis, root).",
      "For culinary curiosity, consider this a specialist bitter root: learn about its forms (dried slice versus powder) and cultural preparation context.",
    ],
    compareLinks: [
      { title: "What Does Clear Heat Mean?", href: "/basics/what-does-clear-heat-mean/" },
      { title: "What Is Damp Heat?", href: "/basics/what-is-damp-heat/" },
      { title: "Safety", href: "/safety/" },
    ],
  },
  {
    slug: "bupleurum-root",
    kitchenPairings: ["Other aromatic roots and rhizomes", "Label-reading for mixed herbal products", "Traditional preparation methods"],
    goodStartingPoints: [
      "Begin by noting the plant name, the exact plant part (root), and the form offered on a label — whole root, cut root, or extract.",
      "For a specialist botanical like Bupleurum root, understanding whether a product contains whole dried root versus a concentrated extract helps decide how it appears in traditional compound preparations.",
    ],
    compareLinks: [
      { title: "What Is Qi Stagnation?", href: "/basics/what-is-qi-stagnation/" },
      { title: "What Does Liver Mean in Traditional Herb Writing?", href: "/basics/what-does-liver-mean/" },
      { title: "Safety", href: "/safety/" },
    ],
  },
  {
    slug: "ginkgo-leaf",
    kitchenPairings: ["Botanical identity (Ginkgo biloba)", "Supplement-label reading", "Safety and interactions"],
    goodStartingPoints: [
      "Begin by confirming the exact name and plant part on any package: botanical name (Ginkgo biloba), the stated part used (leaf), and the product form (dried leaf, powdered extract, standardized extract).",
      "For kitchen-minded readers, recognize that this species is a specialist botanical in contemporary commerce; understanding the form and label language is more useful than attempting culinary substitution.",
    ],
    compareLinks: [
      { title: "What Does Channel Entry Mean?", href: "/basics/what-does-channel-entry-mean/" },
      { title: "What Is Traditional Herb Theory?", href: "/basics/what-is-traditional-herb-theory/" },
      { title: "Safety", href: "/safety/" },
    ],
  },
  {
    slug: "turmeric-root",
    kitchenPairings: ["Black pepper", "Coconut milk", "Lentils", "Ginger"],
    goodStartingPoints: [
      "Begin by identifying the form you have: fresh rhizome, ground spice, or a packaged extract. For cooking, follow standard culinary techniques (grating, toasting, blooming in fat).",
      "If you encounter a product labeled as an extract or as containing concentrated curcuminoids, pause and read the science and safety sections to understand how those products differ from cooking spice.",
    ],
    compareLinks: [
      { title: "Fresh Ginger Guide", href: "/herbs/fresh-ginger/" },
      { title: "What Does Harmonizing Mean?", href: "/basics/what-does-harmonizing-mean/" },
      { title: "A Simple Warming Soup Guide for Cold Weather", href: "/kitchen/a-simple-warming-soup-guide-for-cold-weather/" },
    ],
  },
  {
    slug: "american-ginseng",
    kitchenPairings: ["Pear", "Chicken soup", "Jujube (Chinese red date)", "Chrysanthemum"],
    goodStartingPoints: [
      "Begin by identifying the product on a label: species (Panax quinquefolius), part (root), and form (whole, sliced, powdered, extract).",
      "For kitchen-minded readers, thin dried slices are the gentlest starting point for tea and slow-simmered broths.",
    ],
    compareLinks: [
      { title: "Ginseng vs American Ginseng", href: "/basics/ginseng-vs-american-ginseng/" },
      { title: "Ginseng Guide", href: "/herbs/ginseng/" },
      { title: "What Does Qi Mean?", href: "/basics/what-does-qi-mean/" },
    ],
  },
  {
    slug: "codonopsis",
    kitchenPairings: ["Chicken", "Jujube (red date)", "Goji berry", "Chinese yam (Dioscorea)"],
    goodStartingPoints: [
      "Begin by checking the label language on pantry packets: botanical name (Codonopsis pilosula), form (sliced, whole), and whether it appears alone or in a blend.",
      "For kitchen experiments, try adding a few slices to a long-simmered stock or chicken pot and observe how the broth changes across a 1-3 hour simmer.",
    ],
    compareLinks: [
      { title: "Ginseng Guide", href: "/herbs/ginseng/" },
      { title: "American Ginseng Guide", href: "/herbs/american-ginseng/" },
      { title: "What Does Qi Mean?", href: "/basics/what-does-qi-mean/" },
    ],
  },
  {
    slug: "lily-bulb",
    kitchenPairings: ["Pear", "Lotus seed", "Rice", "Light chicken soup"],
    goodStartingPoints: [
      "Begin by confirming the product form and label: look for the botanical name (Lilium brownii) or the Chinese name Bai He on the package and choose dried bulb scales for soups and sweet porridges.",
      "If you are exploring literature or concentrated products, distinguish whole-food culinary uses from extracts or powdered preparations, which are different product types.",
    ],
    compareLinks: [
      { title: "Pear and Chrysanthemum Tea", href: "/kitchen/pear-and-chrysanthemum-tea-for-warm-afternoons/" },
      { title: "Lotus Seed Guide", href: "/herbs/lotus-seed/" },
      { title: "What Does Moisten Dryness Mean?", href: "/basics/what-does-moisten-dryness-mean/" },
    ],
  },
  {
    slug: "dried-ginger",
    kitchenPairings: ["Jujube (dried red date)", "Scallion", "Chicken soup", "Rice congee"],
    goodStartingPoints: [
      "Begin by checking the product label for the botanical name (Zingiber officinale) and the stated form (dried rhizome, powdered, slices).",
      "Try a simple culinary test: add a single thin slice to a cup of hot water or a pot of soup to observe how the flavor develops over ten to thirty minutes.",
    ],
    compareLinks: [
      { title: "Fresh Ginger vs Dried Ginger", href: "/basics/fresh-ginger-vs-dried-ginger/" },
      { title: "Fresh Ginger Guide", href: "/herbs/fresh-ginger/" },
      { title: "Jujube Guide", href: "/herbs/jujube-red-date/" },
    ],
  },
  {
    slug: "sichuan-lovage-root",
    kitchenPairings: ["Angelica root (Dang Gui)", "White peony (Bai Shao)", "Ginger", "Chicken broth"],
    goodStartingPoints: [
      "Begin by confirming that your supplier lists the botanical name (Ligusticum chuanxiong) and the plant part (rhizome) on the label.",
      "Then explore the kitchen notes and pairing table to imagine small-scale, flavor-oriented use in long-simmered broths.",
    ],
    compareLinks: [
      { title: "What Is Blood Stasis?", href: "/basics/what-is-blood-stasis/" },
      { title: "Dong Quai Guide", href: "/herbs/dong-quai/" },
      { title: "White Peony Root Guide", href: "/herbs/white-peony-root/" },
    ],
  },
  {
    slug: "dried-orange-peel",
    kitchenPairings: ["Ginger", "Duck", "Red bean", "Long-simmered soups"],
    goodStartingPoints: [
      "Begin by confirming the product identity on a label: botanical name (Citrus reticulata), form (aged peel), and any aging or origin notes.",
      "Try smelling the peel and testing a small, food-focused infusion or adding a small piece to a long-simmered dish to learn its contribution.",
    ],
    compareLinks: [
      { title: "Chen Pi Guide", href: "/herbs/chen-pi/" },
      { title: "Tangerine Peel Guide", href: "/herbs/tangerine-peel/" },
      { title: "Chen Pi Tea Recipe FAQ", href: "/basics/chen-pi-tea-recipe-faq/" },
    ],
  },
  {
    slug: "tangerine-peel",
    kitchenPairings: ["Ginger", "Duck", "Red date", "Pork braises"],
    goodStartingPoints: [
      "Begin by confirming the product form and label language: fresh zest, dried tangerine peel (ju pi), candied rind, aged chen pi, or essential oil.",
      "For most kitchen uses, try a modest amount of dried peel in a tea or simmered braise to learn its aromatic range.",
    ],
    compareLinks: [
      { title: "Chen Pi Guide", href: "/herbs/chen-pi/" },
      { title: "Dried Orange Peel Guide", href: "/herbs/dried-orange-peel/" },
      { title: "Fresh Ginger Guide", href: "/herbs/fresh-ginger/" },
    ],
  },
];

export const herbEnhancements = rawHerbEnhancements.map((item) => sanitizeHerbEnhancementContent(item));

export const getHerbEnhancement = (slug: string) =>
  herbEnhancements.find((item) => item.slug === slug);
