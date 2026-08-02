import { sanitizeContentCard } from "../utils/publicCopy";

export const goalCards = [
  { slug: "digestive-traditions", title: "Digestive Traditions" },
  { slug: "evening-teas", title: "Evening Teas" },
  { slug: "seasonal-kitchen-ideas", title: "Seasonal Kitchen Ideas" },
  { slug: "warming-foods", title: "Warming Foods" },
  { slug: "beauty-foods", title: "Beauty Foods" },
  { slug: "balanced-pantry-habits", title: "Balanced Pantry Habits" },
];

const rawBasicsCards = [
  {
    slug: "what-is-traditional-herb-theory",
    title: "What Is Traditional Herb Theory?",
    text: "A clear first look at this traditional framework without the jargon overload.",
  },
  {
    slug: "what-does-qi-mean",
    title: "What Does Qi Mean?",
    text: "A plain-English explanation for readers searching what qi means and how herb pages use the term.",
  },
  {
    slug: "warming-vs-cooling-foods",
    title: "Warming vs Cooling Foods",
    text: "A practical guide for readers searching warming foods, cooling foods, and everyday ingredient examples.",
  },
  {
    slug: "what-is-dampness",
    title: "What Is Dampness?",
    text: "An accessible explanation for readers searching what dampness means in traditional herb and food writing.",
  },
  {
    slug: "what-is-yin-and-yang",
    title: "What Is Yin and Yang?",
    text: "A plain-English guide to one of the most famous but most flattened traditional ideas.",
  },
  {
    slug: "what-does-blood-mean",
    title: "What Does Blood Mean in Traditional Herb Writing?",
    text: "A careful beginner explanation of what blood means inside traditional theory.",
  },
  {
    slug: "what-is-qi-stagnation",
    title: "What Is Qi Stagnation?",
    text: "A simple guide to a common traditional pattern phrase readers often see online.",
  },
  {
    slug: "fresh-ginger-vs-dried-ginger",
    title: "Fresh Ginger vs Dried Ginger",
    text: "Why traditional herb pages describe two forms of ginger as related but not identical.",
  },
  {
    slug: "what-are-the-five-flavors",
    title: "What Are the Five Flavors?",
    text: "A plain-English guide to the five flavors in traditional Chinese food writing with practical kitchen examples.",
  },
  {
    slug: "ginseng-vs-american-ginseng",
    title: "Ginseng vs American Ginseng",
    text: "A clear comparison that shows why traditional herb writing does not flatten all ginseng into one idea.",
  },
  {
    slug: "goji-berry-vs-jujube",
    title: "Goji Berry vs Jujube",
    text: "A pantry-friendly comparison of two of the most popular beginner ingredients.",
  },
  {
    slug: "what-does-clear-heat-mean",
    title: "What Does Clear Heat Mean?",
    text: "A plain-English explanation of one of the most common cooling-herb phrases.",
  },
  {
    slug: "what-does-tonify-mean",
    title: "What Does Tonify Mean in Traditional Herb Writing?",
    text: "A simple guide to one of the most common translation words in traditional herb content.",
  },
  {
    slug: "four-natures-of-food",
    title: "The Four Natures (Temperature) of Food",
    text: "A comprehensive guide to the traditional temperature categories of food — from Cold to Hot with practical examples.",
  },
  {
    slug: "what-does-moisten-dryness-mean",
    title: "What Does Moisten Dryness Mean?",
    text: "A beginner-friendly explanation of a classic phrase used on gentle food and herb pages.",
  },
  {
    slug: "what-is-spleen-qi",
    title: "What Is Spleen Qi?",
    text: "A comprehensive guide to the traditional digestive energy concept — signs of weakness and dietary support.",
  },
  {
    slug: "what-does-spleen-mean",
    title: "What Does Spleen Mean in Traditional Herb Writing?",
    text: "A plain-English guide to one of the most important organ-system words in kitchen-tradition writing.",
  },
  {
    slug: "what-does-liver-mean",
    title: "What Does Liver Mean in Traditional Herb Writing?",
    text: "A clear explanation of why the traditional liver label is broader than a modern anatomy label.",
  },
  {
    slug: "what-does-yin-deficiency-mean",
    title: "What Does Yin Deficiency Mean?",
    text: "A cautious beginner guide to one of the most searched traditional pattern phrases.",
  },
  {
    slug: "what-does-shen-mean",
    title: "What Does Shen Mean in Traditional Herb Writing?",
    text: "A plain-English explanation of one of the most misunderstood mind-and-spirit terms in traditional writing.",
  },
  {
    slug: "what-does-jing-mean",
    title: "What Does Jing Mean in Traditional Herb Writing?",
    text: "A careful beginner guide to the traditional idea of essence without turning it into hype.",
  },
  {
    slug: "what-does-channel-entry-mean",
    title: "What Does Channel Entry Mean?",
    text: "A plain-English explanation for readers trying to understand channel entry on herb guides.",
  },
  {
    slug: "what-is-food-stagnation",
    title: "What Is Food Stagnation?",
    text: "A careful beginner guide for readers searching food stagnation and digestive terminology in kitchen-style herb content.",
  },
  {
    slug: "what-does-nourish-blood-mean",
    title: "What Does Nourish Blood Mean?",
    text: "A plain-English guide to one of the most common traditional phrases on nourishing herb pages.",
  },
  {
    slug: "what-is-damp-heat",
    title: "What Is Damp Heat?",
    text: "A careful beginner explanation for readers searching damp heat in digestive and seasonal content.",
  },
  {
    slug: "chen-pi-vs-hawthorn-berry",
    title: "Chen Pi vs Hawthorn Berry",
    text: "A plain-English comparison of two common digestive ingredients that often get mentioned near heavy meals.",
  },
  {
    slug: "chen-pi-tea-recipe-faq",
    title: "Chen Pi Tea Recipe FAQ",
    text: "A question-led chen pi tea page built around how to make chen pi tea, core ingredients, and short simmer timing.",
  },
  {
    slug: "poria-vs-jobs-tears",
    title: "Poria vs Job's Tears",
    text: "A practical comparison for readers trying to understand dampness-related pantry ingredients in traditional content.",
  },
  {
    slug: "chrysanthemum-vs-mint",
    title: "Chrysanthemum vs Mint",
    text: "A plain-English comparison of two familiar cooling herbs that often appear together in tea pages.",
  },
  {
    slug: "goji-berry-tea-vs-goji-berry-porridge",
    title: "Goji Berry Tea vs Goji Berry Porridge",
    text: "A kitchen-first comparison that helps readers understand how the same ingredient reads differently in a cup and in a bowl.",
  },
  {
    slug: "what-does-astringent-mean",
    title: "What Does Astringent Mean?",
    text: "A plain-English explanation of one of the most confusing traditional quality words on many herb pages.",
  },
  {
    slug: "what-does-harmonizing-mean",
    title: "What Does Harmonizing Mean?",
    text: "A plain-English guide to one of the most common but least explained role words on herb and formula pages.",
  },
  {
    slug: "mulberry-fruit-vs-goji-berry",
    title: "Mulberry Fruit vs Goji Berry",
    text: "A pantry-friendly comparison that helps readers separate two popular pantry berries in tea and gentle nourishment content.",
  },
  {
    slug: "chinese-pantry-starter-kit",
    title: "The Chinese Pantry Starter Kit",
    text: "A friendly, opinionated list of 10 traditional ingredients every curious cook should know.",
  },
  {
    slug: "simple-herbal-tea-routine",
    title: "How to Build a Simple Herbal Tea Routine",
    text: "Practical, seasonal, no-pressure guidance for people who want a traditional tea ritual, not a strict medical regimen.",
  },
  {
    slug: "what-is-blood-deficiency",
    title: "What Is Blood Deficiency?",
    text: "A comprehensive guide to the traditional concept of Blood Deficiency — what it means, signs, and practical ways to nourish Blood through diet and lifestyle.",
  },
  {
    slug: "what-is-phlegm",
    title: "What Is Phlegm in Traditional Wellness?",
    text: "A comprehensive guide to the traditional concept of Phlegm — the difference between visible and invisible Phlegm, signs of accumulation, and kitchen approaches to resolving it.",
  },
  {
    slug: "what-is-liver-qi-stagnation",
    title: "What Is Liver Qi Stagnation?",
    text: "A comprehensive guide to the traditional concept of Liver Qi Stagnation — how stress manifests physically, signs of stagnation, and traditional approaches to moving Liver Qi through diet and lifestyle.",
  },
  {
    slug: "what-is-kidney-essence",
    title: "What Is Kidney Essence (Jing)?",
    text: "A comprehensive guide to the traditional concept of Kidney Essence — the body's deepest constitutional reserve, the difference between pre-natal and post-natal Jing, and how to conserve it through diet and lifestyle.",
  },
  {
    slug: "what-is-lung-qi",
    title: "What Is Lung Qi?",
    text: "A comprehensive guide to the traditional concept of Lung Qi — the functional energy of the respiratory system, how the Lungs govern the body's defensive Wei Qi, and traditional approaches to supporting Lung Qi through diet and lifestyle.",
  },
  {
    slug: "what-is-heart-fire",
    title: "What Is Heart Fire?",
    text: "A comprehensive guide to the traditional concept of Heart Fire — how excess heat in the Heart system manifests physically and emotionally, signs to recognize, and traditional approaches to clearing Heart Fire through diet and lifestyle.",
  },
];

export const basicsCards = rawBasicsCards.map((card) => sanitizeContentCard(card));

export const classicsCards = [
  {
    slug: "huangdi-neijing",
    title: "Huangdi Neijing",
    text: "Why this foundational classic still shapes traditional herb language today.",
  },
  {
    slug: "bencao-gangmu",
    title: "Bencao Gangmu",
    text: "A beginner's entry point into China's great herbal encyclopedia.",
  },
  {
    slug: "shanghan-lun",
    title: "Shanghan Lun",
    text: "How classical formula thinking continues to influence traditional practice.",
  },
  {
    slug: "shen-nong-ben-cao-jing",
    title: "Shen Nong Ben Cao Jing",
    text: "An early classical herb text that helps readers understand where herb categories began.",
  },
  {
    slug: "jin-gui-yao-lue",
    title: "Jin Gui Yao Lue",
    text: "A key classic for formula thinking, practical patterns, and educational depth.",
  },
  {
    slug: "wen-bing-xue",
    title: "Wen Bing Xue",
    text: "A simple introduction to the warm-season tradition behind later heat-language.",
  },
];

const rawRecipeCards = [
  {
    slug: "a-simple-warming-soup-guide-for-cold-weather",
    title: "A Simple Warming Soup Guide for Cold Weather",
    text: "A gentle introduction to seasonal kitchen traditions built around warming ingredients.",
  },
  {
    slug: "jujube-and-ginger-tea-for-busy-weeks",
    title: "Jujube and Ginger Tea for Busy Weeks",
    text: "A short, practical jujube tea article built around Chinese red dates and fresh ginger.",
  },
  {
    slug: "pear-and-lily-bulb-soup-for-dry-days",
    title: "Pear and Lily Bulb Soup for Dry Days",
    text: "A gentle seasonal kitchen article built around an easy dryness-related pairing.",
  },
  {
    slug: "black-sesame-breakfast-ideas-for-beginners",
    title: "Black Sesame Breakfast Ideas for Beginners",
    text: "A pantry-friendly article that turns black sesame into an everyday-use kitchen guide.",
  },
  {
    slug: "chrysanthemum-and-mint-cooling-tea-basics",
    title: "Chrysanthemum and Mint Cooling Tea Basics",
    text: "A simple tea guide that explains cooling language through two familiar ingredients.",
  },
  {
    slug: "chrysanthemum-tea-basics",
    title: "Chrysanthemum Tea Basics",
    text: "A simple floral tea page that gives readers a direct chrysanthemum tea entry point with clear steeping steps.",
  },
  {
    slug: "goji-berry-porridge-for-gentle-mornings",
    title: "Goji Berry Porridge for Gentle Mornings",
    text: "A soft breakfast-style page built around one of the easiest pantry herbs for beginners.",
  },
  {
    slug: "5-easy-traditional-kitchen-ingredients-for-beginners",
    title: "5 Easy Chinese Food Therapy Ingredients for Beginners",
    text: "Start with simple pantry ingredients that feel familiar and useful.",
  },
  {
    slug: "lotus-seed-and-longan-sweet-soup-basics",
    title: "Lotus Seed and Longan Sweet Soup Basics",
    text: "A gentle sweet-soup article that connects lotus seed and dried longan through one classic pantry bowl.",
  },
  {
    slug: "chen-pi-tea-for-heavy-meal-days",
    title: "Chen Pi Tea for Heavy Meal Days",
    text: "A pantry-style tea page that gives digestive readers a very practical chen pi entry point.",
  },
  {
    slug: "hawthorn-berry-tea-for-rich-meals",
    title: "Hawthorn Berry Tea for Rich Meals",
    text: "A simple digestive tea page built around one of the clearest food-adjacent traditional ingredients.",
  },
  {
    slug: "black-sesame-and-jujube-breakfast-bowl",
    title: "Black Sesame and Jujube Breakfast Bowl",
    text: "A soft pantry-style breakfast page that deepens black sesame and jujube kitchen reading.",
  },
  {
    slug: "jobs-tears-porridge-for-heavy-days",
    title: "Job's Tears Porridge for Heavy Days",
    text: "A gentle grain-style page that turns dampness language into a concrete pantry recipe readers can picture.",
  },
  {
    slug: "pear-and-chrysanthemum-tea-for-warm-afternoons",
    title: "Pear and Chrysanthemum Tea for Warm Afternoons",
    text: "A light seasonal tea page that supports cooling and dryness themes without overclaiming.",
  },
  {
    slug: "mulberry-and-goji-tea-basics",
    title: "Mulberry and Goji Tea Basics",
    text: "A simple berry tea page that gives mulberry fruit a clearer pantry-friendly path beside goji berry.",
  },
  {
    slug: "goji-and-chrysanthemum-tea-basics",
    title: "Goji and Chrysanthemum Tea Basics",
    text: "A visual pantry tea page that connects one popular berry with one especially clear cooling herb.",
  },
  {
    slug: "jujube-and-lotus-seed-congee-for-quiet-evenings",
    title: "Jujube and Lotus Seed Congee for Quiet Evenings",
    text: "A soft pantry congee page that deepens jujube and lotus seed reading with a very approachable rice bowl.",
  },
  {
    slug: "tremella-and-pear-sweet-soup-basics",
    title: "Tremella and Pear Sweet Soup Basics",
    text: "A very simple dessert-soup page that turns tremella and pear into a gentle seasonal beginner recipe.",
  },
  {
    slug: "adzuki-bean-and-jobs-tears-soup-basics",
    title: "Adzuki Bean and Job's Tears Soup Basics",
    text: "A pantry-style soup page that gives dampness and digestive readers one clear, low-hype bowl to picture.",
  },
  {
    slug: "chinese-yam-and-carrot-soup-basics",
    title: "Chinese Yam and Carrot Soup Basics",
    text: "A very simple beginner soup that makes Chinese yam feel practical, mild, and easy to trust.",
  },
  {
    slug: "perilla-and-ginger-soup-for-cool-days",
    title: "Perilla and Ginger Soup for Cool Days",
    text: "A light warming soup that turns perilla leaf into a practical kitchen ingredient for cool-weather reading.",
  },
  {
    slug: "tremella-and-lotus-seed-sweet-soup-basics",
    title: "Tremella and Lotus Seed Sweet Soup Basics",
    text: "A soft dessert-soup page that deepens the tremella and lotus seed network with one easy bowl.",
  },
  {
    slug: "schisandra-and-jujube-tea-basics",
    title: "Schisandra and Jujube Tea Basics",
    text: "A gentle pantry tea that makes schisandra easier to understand through a familiar jujube pairing.",
  },
  {
    slug: "monk-fruit-and-pear-tea-basics",
    title: "Monk Fruit and Pear Tea Basics",
    text: "A light fruit tea page that gives monk fruit a clearer place in gentle cooling kitchen reading.",
  },
  {
    slug: "walnut-and-black-sesame-paste-basics",
    title: "Walnut and Black Sesame Paste Basics",
    text: "A pantry-style breakfast bowl that expands black sesame into a richer but still approachable kitchen routine.",
  },
  {
    slug: "barley-sprout-and-chen-pi-tea-basics",
    title: "Barley Sprout and Chen Pi Tea Basics",
    text: "A practical pantry tea that connects barley sprout and chen pi through everyday meal-friendly kitchen language.",
  },
  {
    slug: "chinese-yam-and-jujube-porridge-basics",
    title: "Chinese Yam and Jujube Porridge Basics",
    text: "A soft beginner porridge that brings Chinese yam and jujube together in a balanced, kitchen-first bowl.",
  },
  {
    slug: "tangerine-peel-and-pear-warm-tea-basics",
    title: "Tangerine Peel and Pear Warm Tea Basics",
    text: "A light pantry tea that connects citrus peel and pear through a simple, search-friendly warm drink.",
  },
  {
    slug: "osmanthus-and-pear-tea-basics",
    title: "Osmanthus and Pear Tea Basics",
    text: "A fragrant pear tea page that brings sweet osmanthus into a gentle, search-friendly floral kitchen routine.",
  },
  {
    slug: "jasmine-and-pear-tea-basics",
    title: "Jasmine and Pear Tea Basics",
    text: "A soft floral pear tea page that gives jasmine a calm, kitchen-first landing page with safe long-tail wording.",
  },
  {
    slug: "rose-bud-and-mulberry-leaf-tea-basics",
    title: "Rose Bud and Mulberry Leaf Tea Basics",
    text: "A gentle floral-leaf tea page that connects rose bud and mulberry leaf through a light, kitchen-first cup.",
  },
  {
    slug: "lotus-leaf-and-burdock-root-tea-basics",
    title: "Lotus Leaf and Burdock Root Tea Basics",
    text: "A light pantry tea page that connects lotus leaf and burdock root through an earthy, seasonal cup with safe search intent.",
  },
  {
    slug: "cassia-seed-and-corn-silk-tea-basics",
    title: "Cassia Seed and Corn Silk Tea Basics",
    text: "A mild pantry tea page that connects cassia seed and corn silk through a light seasonal cup with search-friendly kitchen language.",
  },
  {
    slug: "lotus-root-soup-basics",
    title: "Lotus Root Soup Basics",
    text: "A simple lotus root soup page built around a widely searched ingredient with calm, kitchen-first wording.",
  },
  {
    slug: "astragalus-and-jujube-chicken-broth",
    title: "Astragalus and Jujube Chicken Broth",
    text: "A deeply comforting winter soup that pairs astragalus root with jujube for a classic warming broth.",
  },
  {
    slug: "poria-and-coix-seed-congee",
    title: "Poria and Coix Seed Congee",
    text: "A gentle, grain-based bowl designed to clear traditional dampness and support digestion when you feel heavy or sluggish.",
  },
  {
    slug: "ginger-and-brown-sugar-tea-for-cold-days",
    title: "Ginger and Brown Sugar Tea for Cold Days",
    text: "A classic traditional remedy for dispelling cold — fresh ginger paired with unrefined brown sugar for winter chills.",
  },
  {
    slug: "mung-bean-soup-for-summer-heat",
    title: "Mung Bean Soup for Summer Heat",
    text: "The quintessential summer beverage in East Asian traditions — a cooling mung bean soup for hot weather.",
  },
];

export const recipeCards = rawRecipeCards.map((card) => sanitizeContentCard(card));

