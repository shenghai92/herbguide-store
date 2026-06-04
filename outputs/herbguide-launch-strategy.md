# herbguide.store Launch Strategy

## Brand Direction

- Brand tone: friendly and practical
- Primary market: U.S. English readers
- Core promise: explain Traditional Chinese Medicine herbs and food therapy in clear, careful English for everyday wellness learning
- Content boundary: education only, no diagnosis, no treatment plans, no claims to cure disease

Suggested homepage line:

`Traditional Chinese herbs, explained clearly for modern everyday wellness.`

## Positioning

`herbguide.store` should feel like a modern herb library and food therapy guide, not like a supplement sales page and not like a dense academic archive.

The most useful market position is:

- TCM herb glossary for curious beginners
- practical food therapy content for everyday routines
- culturally grounded but easy to understand
- careful with safety, sourcing, and medical boundaries

This gives the site three strengths:

- better trust than hype-driven wellness blogs
- better readability than practitioner-only TCM resources
- better SEO breadth than a pure recipe site

## Audience

Primary audience:

- U.S. readers interested in natural wellness
- people who already search for terms like `goji berry benefits`, `astragalus tea`, `red dates recipe`, `TCM food therapy`
- readers curious about Chinese wellness culture but unfamiliar with TCM vocabulary

Secondary audience:

- wellness writers and creators looking for explainers
- early-stage TCM learners
- Chinese diaspora users who want simple English references to share with friends or family

## Site Architecture

Top navigation:

- Herb Library
- Food Therapy
- TCM Basics
- Chinese Classics
- Safety
- About

Recommended page structure:

1. Home
2. Herb Library index
3. Individual herb pages
4. Food Therapy index
5. Individual recipe pages
6. TCM Basics hub
7. Chinese Classics hub
8. Safety and sourcing hub
9. About / editorial policy / disclaimer pages
10. Newsletter landing page for future growth

## Homepage Structure

1. Hero
   `Traditional Chinese herbs, explained clearly for modern everyday wellness.`
2. Featured herb of the day
3. Browse by goal
   digestion, sleep, stress support, seasonal wellness, beauty foods, warming foods
4. Browse the herb library
5. Featured recipes
6. Start here: TCM basics
7. Explore the classics
8. Safety and sourcing block
9. Email signup

## Core Content Pillars

### 1. Herb Library

This is the long-term SEO engine of the site.

Each herb page should include:

- English common name
- Pinyin
- Chinese characters
- Latin / pharmacopoeia name
- What it is
- Nature and flavor
- Channel entry
- Traditional uses
- Everyday food uses
- Simple recipe idea
- Cautions and who may avoid it
- Research snapshot
- Classical context
- Glossary for TCM terms used on the page

### 2. Food Therapy

This is the highest-shareability content pillar.

Content groups:

- seasonal soups and teas
- simple kitchen remedies
- ingredient pairings
- gentle routines for sleep, digestion, dry weather, cold weather
- beginner recipe collections

### 3. TCM Basics

Purpose:

- reduce bounce from confused beginners
- support internal linking from herb pages
- create reusable definitions for TCM-specific terms

Priority pages:

- What is Traditional Chinese Medicine?
- How TCM describes the body in simple English
- What does `qi` mean?
- What do `warming` and `cooling` foods mean in TCM?
- What is `dampness` in TCM?
- What are channels or meridians?
- Why TCM uses pattern-based thinking instead of single-symptom thinking

### 4. Chinese Classics

Purpose:

- cultural depth
- stronger brand identity
- higher trust

Priority pages:

- Huangdi Neijing: why it still matters
- Bencao Gangmu: the great Chinese herbal encyclopedia
- Shanghan Lun: a foundation of classical formula thinking
- Jingui Yaolue: practical classical medicine for daily life patterns

### 5. Safety

Purpose:

- compliance
- credibility
- reader protection

Priority pages:

- How to read herb information safely
- Food use vs medicinal use
- Pregnancy and herb caution page
- Drug-herb interaction basics
- How to choose a reputable herb supplier
- Why this site does not give treatment advice

## Visual Direction

The visual style should feel calm, grounded, warm, and editorial.

Color direction:

- aged ivory
- tea brown
- sage green
- ink charcoal
- muted cinnabar for small accents

Avoid:

- bright supplement-brand greens
- sterile clinic blue
- glossy e-commerce product page aesthetics

Typography direction:

- Headings: `Cormorant Garamond` or `Baskervville`
- Body: `Source Sans 3`, `Manrope`, or `Instrument Sans`

Layout notes:

- wide breathing room
- strong article hierarchy
- right-side info card on desktop for herb facts
- short sections with helpful subheads
- ingredient and caution blocks visually separated from body text

Image system:

- raw herb photo
- prepared herb / sliced herb photo
- food therapy recipe photo
- optional watercolor-style botanical accent

## Writing Rules

Voice:

- warm
- plainspoken
- practical
- never mystical or exaggerated

Good examples:

- `traditionally used in TCM to support digestive comfort`
- `often described in TCM as a warming herb`
- `commonly used in soups, teas, or broths`

Avoid:

- `cures`
- `heals`
- `detoxes your organs`
- `miracle herb`
- `ancient secret`

## TCM Translation Style Guide

Keep the original term when useful, then explain it in one simple English sentence.

Examples:

- `Qi`: often described in TCM as the body's vital energy or functional life force
- `Blood` in TCM: not exactly the same as blood in biomedicine, but a broader concept related to nourishment and circulation
- `Yin deficiency`: a TCM pattern often linked with dryness, heat signs, and lack of restorative fluids
- `Dampness`: a TCM pattern associated with heaviness, sluggishness, fluid buildup, or a sticky feeling in digestion and energy
- `Channel entry`: the organ-channel systems a herb is traditionally associated with in TCM theory
- `Nature`: whether a herb is considered warming, cooling, neutral, and so on
- `Flavor`: sweet, bitter, pungent, sour, or salty, each with traditional functional meanings

Recommended rule:

- do not over-translate TCM into fake biomedical certainty
- do not leave untranslated jargon unexplained

## Recommended Tech Direction

For this project, a content-first setup will likely work best:

- frontend: Astro
- hosting: Cloudflare Pages
- content system at launch: Markdown or MDX collections
- content system later: Sanity or Strapi if multi-author editing becomes important
- forms/newsletter later: ConvertKit, Beehiiv, or Loops

Why this stack:

- fast pages
- strong SEO foundations
- simple content publishing
- lower maintenance than a custom full-stack app

## Search And Ads Integrations

These should be treated as launch requirements, not optional extras.

### 1. Google AdSense

Your AdSense script should be added to the global site layout so it appears inside the `<head>` across the site:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4966684354825438"
     crossorigin="anonymous"></script>
```

Implementation note:

- place it in the shared layout head, not pasted page by page
- keep ad placements light at launch so the site still feels editorial and trustworthy

### 2. Google Search Console

Best practice:

- create a domain property in Google Search Console
- use DNS verification where possible
- also support HTML meta-tag verification in the site head if needed

Typical meta tag format:

```html
<meta name="google-site-verification" content="YOUR_TOKEN_HERE">
```

### 3. Bing Webmaster Tools

Best practice:

- add the site to Bing Webmaster Tools
- verify either by meta tag, XML file, or DNS
- if using a meta tag, keep it in the shared head layout

Typical meta tag format:

```html
<meta name="msvalidate.01" content="YOUR_BING_TOKEN_HERE">
```

### 4. Indexing Foundations

At launch, the site should include:

- `sitemap.xml`
- `robots.txt`
- canonical URLs
- Open Graph tags
- basic JSON-LD structured data

### 5. What I Still Need Later

I already have the AdSense script.

When we move into coding, I will still need the exact verification values for:

- Google Search Console verification token or DNS record
- Bing Webmaster verification token or XML file

Without those exact values, I can prepare the code slots but not the final production verification lines.

## First 30 Herbs

Selection logic:

- familiar or explainable to U.S. readers
- strong food therapy fit
- broad enough search intent in English
- lower regulatory and trust risk than highly specialized medicinals

These are recommendations inferred from mainstream English-language herb coverage, consumer familiarity, food-use accessibility, and the kinds of herbs commonly featured by established herbal education sites.

### Tier 1: Launch First

1. Goji berry (`Gou Qi Zi`)
2. Astragalus root (`Huang Qi`)
3. Fresh ginger (`Sheng Jiang`)
4. Jujube / red date (`Da Zao`)
5. Chrysanthemum flower (`Ju Hua`)
6. Hawthorn berry (`Shan Zha`)
7. Tangerine peel / aged citrus peel (`Chen Pi`)
8. Poria (`Fu Ling`)
9. Longan fruit (`Long Yan Rou`)
10. Lily bulb (`Bai He`)

Why these first:

- easiest to explain
- strongest food or tea applications
- high chance of beginner interest
- good bridge between culture and practicality

### Tier 2: Build Authority

11. Ginseng (`Ren Shen`)
12. American ginseng (`Xi Yang Shen`)
13. Codonopsis (`Dang Shen`)
14. Licorice root (`Gan Cao`)
15. Schisandra berry (`Wu Wei Zi`)
16. Chinese yam (`Shan Yao`)
17. Lotus seed (`Lian Zi`)
18. Job's tears / coix seed (`Yi Yi Ren`)
19. Mulberry fruit (`Sang Shen`)
20. Black sesame seed (`Hei Zhi Ma`)

Why these next:

- expand into energy, nourishment, kitchen use, and tonic traditions
- strong opportunities for recipes and ingredient pairing articles

### Tier 3: Broaden the Library

21. Mint (`Bo He`)
22. Perilla leaf (`Zi Su Ye`)
23. Cinnamon twig (`Gui Zhi`)
24. Sichuan lovage root (`Chuan Xiong`)
25. White peony root (`Bai Shao`)
26. Rehmannia prepared root (`Shu Di Huang`)
27. Ophiopogon root (`Mai Men Dong`)
28. Dried ginger (`Gan Jiang`)
29. Kudzu root (`Ge Gen`)
30. Eucommia bark (`Du Zhong`)

Why these later:

- useful for depth and internal linking
- still important in TCM, but need more careful explanation for beginners
- some are less kitchen-friendly and need more context

## Best Early SEO Angles For These Herbs

Instead of targeting only `benefits`, build several search-intent variations:

- `[herb name] benefits`
- `[herb name] in TCM`
- `[herb name] tea`
- `[herb name] recipe`
- `[herb name] side effects`
- `[herb name] warming or cooling`
- `[herb name] how to use`
- `[herb name] vs [similar herb]`

Examples:

- `goji berry benefits in TCM`
- `what is astragalus root used for`
- `jujube tea recipe`
- `is chrysanthemum tea cooling`
- `chen pi benefits and uses`

## Editorial Template For Herb Pages

Suggested page flow:

1. Quick answer summary
2. What this herb is
3. How TCM describes it
4. Traditional uses in plain English
5. How people commonly use it in food and tea
6. One beginner recipe
7. Safety and cautions
8. What modern research says so far
9. Related herbs
10. Related recipes

This structure supports:

- featured snippets
- easy scanning
- good internal linking
- trustworthy pacing

## Starter Content Roadmap

### Phase 1: Foundation Pages

- Home
- About
- Disclaimer
- Editorial policy
- Safety page
- What is TCM?
- What do warming and cooling mean?
- Huangdi Neijing introduction

### Phase 2: Launch Content

- 10 Tier 1 herb pages
- 6 food therapy articles
- 4 TCM basics articles
- 2 classics articles

### Phase 3: Growth

- remaining 20 herb pages
- comparison articles
- seasonal clusters
- email capture lead magnets

## First 12 Article Ideas

1. What Is Traditional Chinese Medicine? A Beginner-Friendly Guide
2. Huangdi Neijing: The Classic That Still Shapes TCM Today
3. What Do Warming and Cooling Foods Mean in TCM?
4. Goji Berry in TCM: Benefits, Uses, and Simple Ways to Enjoy It
5. Astragalus Root Explained: A Beginner's Guide to Huang Qi
6. Jujube Tea: Why Red Dates Matter in Chinese Food Therapy
7. Chrysanthemum Tea in TCM: Cooling, Calming, and Easy to Make
8. Chen Pi Explained: Why Aged Tangerine Peel Matters in Chinese Cooking
9. Poria in TCM: What Fu Ling Is and How It Is Traditionally Used
10. 5 Easy Chinese Food Therapy Ingredients for Beginners
11. A Simple Warming Soup Guide for Cold Weather
12. How To Read Chinese Herb Claims Safely Online

## Newsletter Direction For Later

If you add subscriptions later, the easiest path is a gentle education newsletter, not a hard-sell funnel.

Good newsletter angles:

- Herb of the Week
- seasonal food therapy notes
- one practical kitchen tip each week
- one TCM term explained simply

Best lead magnet ideas:

- `10 Chinese Kitchen Herbs for Everyday Wellness`
- `A Beginner's Guide to Warming and Cooling Foods`
- `7 Simple TCM Tea and Soup Ideas for Busy Weeks`

Recommended future setup:

- start with a simple embedded email form
- offer one free downloadable guide
- send once weekly
- keep the tone educational and useful

## Compliance Notes

The site should clearly state:

- content is for informational and educational purposes only
- content is not medical advice
- herbs and recipes are not intended to diagnose, treat, cure, or prevent any disease
- readers should consult a qualified healthcare professional before making health decisions, especially if pregnant, nursing, taking medication, or managing a medical condition

Important implementation rule:

- every herb page should include a short caution block
- the site footer should link to disclaimer and safety pages
- any product or affiliate integration added later must be reviewed separately

## Draft Disclaimer Copy

`The content on HerbGuide is for educational and informational purposes only. It is not medical advice, diagnosis, or treatment. Herbs, foods, and wellness practices discussed on this site are not intended to diagnose, treat, cure, or prevent any disease. Always consult a qualified healthcare professional before making changes related to your diet, supplements, medications, or health care, especially if you are pregnant, nursing, taking prescription medication, or living with a medical condition.`

## Recommended Next Steps

1. Confirm the brand name presentation: `HerbGuide` vs `Herb Guide`
2. Approve the first 10 launch herbs
3. Approve the top navigation and homepage structure
4. Create the visual direction board and homepage wireframe
5. Write the first 3 herb pages and 2 TCM basics pages

## Reference Notes

For compliance and tone, the most important official references are:

- FDA dietary supplement consumer guidance
- FDA structure/function claim guidance
- NCCIH overview material on Traditional Chinese Medicine

For content and positioning inspiration, useful reference points include:

- Herbal Reality
- Mountain Rose Herbs
- educational herb profiles from established English-language herbal brands
