export default function QualityCompliancePage() {
    return (
<main
  className="
    bg-white
    min-h-screen
    pt-[140px]
    md:pt-[170px]
    pb-10
    px-4
    md:px-6
  "
>        <div
          dangerouslySetInnerHTML={{
            __html: `
<style>
  * {
    box-sizing: border-box;
  }

  .rs-wrap {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #1a1a2e;
    max-width: 960px;
    margin: 0 auto;
  }

  .rs-tag {
    display: inline-block;
    background: #e0f7f2;
    color: #0d6e5e;
    font-size: 0.72em;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 20px;
    margin-bottom: 14px;
  }

  /* ── Hero ── */
  .rs-hero {
    background: linear-gradient(135deg, #0d4f4f 0%, #1abc9c 100%);
    color: #fff;
    border-radius: 16px;
    padding: 56px 40px;
    text-align: center;
    margin-bottom: 48px;
  }

  .rs-hero h1 {
    font-size: 2.4em;
    font-weight: 800;
    margin: 0 0 12px;
  }

  .rs-hero .sub {
    font-size: 1.05em;
    opacity: 0.88;
    max-width: 600px;
    margin: 0 auto 20px;
  }

  .rs-hero .tagline {
    font-size: 1em;
    font-style: italic;
    opacity: 0.75;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    padding-top: 16px;
    margin-top: 8px;
  }

  /* ── Section ── */
  .rs-section {
    margin-bottom: 56px;
  }

  .rs-section h2 {
    font-size: 1.75em;
    font-weight: 800;
    color: #0d1b4f;
    margin: 10px 0 8px;
  }

  .rs-section .lead {
    color: #444;
    font-size: 1em;
    line-height: 1.7;
    max-width: 680px;
    margin-bottom: 24px;
  }

  /* ── Quote ── */
  .rs-quote {
    border-left: 4px solid #1abc9c;
    padding: 10px 18px;
    color: #555;
    font-style: italic;
    margin: 20px 0;
    background: #f5fffe;
    border-radius: 0 8px 8px 0;
  }

  /* ── Three Col ── */
  .rs-three-col {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 24px;
  }

  .rs-col-card {
    flex: 1 1 220px;
    background: #D3F7F0;
    border: 2px solid #1abc9c;
    border-radius: 12px;
    padding: 22px 18px;
  }

  .rs-col-card h4 {
    color: #0d4f4f;
    font-weight: 700;
    margin: 0 0 8px;
    font-size: 1em;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .rs-col-card p {
    color: #555;
    font-size: 0.88em;
    line-height: 1.6;
    margin: 0;
  }

  /* ── Numbered ── */
  .rs-numbered {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 24px;
    counter-reset: num;
  }

  .rs-num-item {
    flex: 1 1 260px;
    background: #d3f7f0;
    border: 1px solid #d0f0ea;
    border-radius: 12px;
    padding: 36px 20px 20px;
    position: relative;
  }

  .rs-num-item::before {
    counter-increment: num;
    content: counter(num);
    position: absolute;
    top: -16px;
    left: 20px;
    background: #1abc9c;
    color: #fff;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1em;
    line-height: 34px;
    text-align: center;
  }

  .rs-num-item h4 {
    color: #0d4f4f;
    font-size: 1em;
    font-weight: 700;
    margin: 0 0 8px;
  }

  .rs-num-item p {
    color: #555;
    font-size: 0.9em;
    line-height: 1.6;
    margin: 0;
  }

  /* ── Highlight Box ── */
  .rs-highlight-box {
    background: #0d4f4f !important;
    color: #fff !important;
    border-radius: 14px;
    padding: 40px 32px;
    margin-bottom: 56px;
    text-align: center;
  }

  .rs-highlight-box h2 {
    font-size: 2em;
    font-weight: 800;
    margin: 0 0 10px;
    color: #ffffff !important;
  }

  .rs-highlight-box .hl-sub {
    font-size: 1em;
    opacity: 0.85;
    margin-bottom: 24px;
    color: #ffffff !important;
  }

  .rs-highlight-box .rs-tag {
    background: rgba(255, 255, 255, 0.15) !important;
    color: #a8f0e0 !important;
    border: none;
  }

  /* ── HL Three ── */
  .rs-hl-three {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
  }

  .rs-hl-item {
    flex: 1 1 180px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 20px 16px;
    text-align: center;
  }

  .rs-hl-item h4 {
    font-size: 1em;
    font-weight: 700;
    margin: 0 0 6px;
    color: #a8f0e0 !important;
  }

  .rs-hl-item p {
    font-size: 0.85em;
    opacity: 0.85;
    margin: 0;
    color: #ffffff !important;
  }

  /* ── Green Grid ── */
  .rs-green-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 20px;
  }

  .rs-green-card {
    flex: 1 1 200px;
    background: #D3F7F0;
    color: #1a1a2e;
    border-radius: 10px;
    padding: 18px 16px;
  }

  .rs-green-card h4 {
    font-weight: 700;
    margin: 0 0 6px;
    font-size: 0.95em;
    color: #0d4f4f;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .rs-green-card p {
    font-size: 0.85em;
    opacity: 0.88;
    margin: 0;
    color: #555;
  }

  /* ── Arrow List ── */
  .rs-arrow-list {
    list-style: none;
    padding: 0;
    margin: 20px 0 0;
  }

  .rs-arrow-list li {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e8f8f5;
  }

  .rs-arrow-list li:last-child {
    border-bottom: none;
  }

  .rs-arrow-list .arr {
    color: #1abc9c;
    font-size: 1.3em;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .rs-arrow-list h4 {
    margin: 0 0 4px;
    font-size: 0.95em;
    color: #0d1b4f;
    font-weight: 700;
  }

  .rs-arrow-list p {
    margin: 0;
    font-size: 0.87em;
    color: #555;
  }

  /* ── Divider ── */
  .rs-divider {
    border: none;
    border-top: 2px solid #e0f7f2;
    margin: 48px 0;
  }

  /* ── CTA ── */
  .rs-cta {
    background: linear-gradient(135deg, #1abc9c, #0d4f4f) !important;
    color: #fff !important;
    border-radius: 14px;
    padding: 40px 32px;
    text-align: center;
  }

  .rs-cta h2 {
    font-size: 1.8em;
    font-weight: 800;
    margin: 0 0 10px;
    color: #ffffff !important;
  }

  .rs-cta p {
    opacity: 0.88;
    margin: 0 0 20px;
    font-size: 1em;
    color: #ffffff !important;
  }

  .rs-cta .btn {
    display: inline-block;
    background: #fff !important;
    color: #0d4f4f !important;
    font-weight: 700;
    padding: 12px 32px;
    border-radius: 30px;
    text-decoration: none !important;
    font-size: 1em;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
  }

  .rs-cta .btn:hover {
    background: #e0f7f2 !important;
    color: #0d4f4f !important;
    text-decoration: none !important;
  }

  /* ── Problem Cards ── */
  .rs-problem-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 20px;
  }

  .rs-problem-card {
    flex: 1 1 220px;
    background: #D3F7F0;
    border-left: 4px solid #1abc9c;
    border-radius: 0 10px 10px 0;
    padding: 18px 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }

  .rs-problem-card h4 {
    color: #0d1b4f;
    font-weight: 700;
    margin: 0 0 8px;
    font-size: 0.95em;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .rs-problem-card p {
    color: #555;
    font-size: 0.87em;
    line-height: 1.6;
    margin: 0;
  }

  /* ── Reality Background ── */
  .rs-reality-bg {
    background: #e8faf6;
    border-radius: 14px;
    padding: 36px 32px;
    margin-bottom: 0;
  }

  /* ── Two Panel ── */
  .rs-two-panel {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    align-items: stretch;
    margin-top: 0;
  }

  .rs-two-panel .left {
    flex: 1 1 0;
    display: flex;
  }

  .rs-two-panel .right {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
  }

  .rs-changes-box,
  .rs-two-panel .right {
    width: 100%;
    background: #D3F7F0;
    border: 1px solid #c8eeea;
    border-radius: 14px;
    padding: 32px;
    height: 100%;
  }

  .rs-changes-box {
    color: #0d1b4f;
  }

  .rs-changes-box h2 {
    color: #0d4f4f;
    font-size: 1.8em;
    font-weight: 800;
    margin: 0 0 14px;
  }

  .rs-changes-box p {
    color: #555;
    font-size: 0.95em;
    line-height: 1.7;
    margin: 0 0 12px;
  }

  .rs-changes-box .italic {
    color: #1abc9c;
    font-style: italic;
    font-weight: 700;
  }

  /* ── Six Grid ── */
  .rs-six-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 24px;
  }

  @media (max-width: 700px) {
    .rs-six-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 440px) {
    .rs-six-grid {
      grid-template-columns: 1fr;
    }
  }

  .rs-six-item {
    display: flex;
    gap: 14px;
    align-items: center;
    padding: 16px;
    background: #D3F7F0;
    border-radius: 10px;
    border: 1px solid #d0f0ea;
  }

  .rs-six-item .icon {
    font-size: 1.6em;
    flex-shrink: 0;
  }

  .rs-six-item h4 {
    color: #0d4f4f;
    font-weight: 700;
    margin: 0 0 4px;
    font-size: 0.95em;
  }

  .rs-six-item p {
    color: #555;
    font-size: 0.85em;
    line-height: 1.5;
    margin: 0;
  }

  /* ── Content + Image Two Col ── */
  .rs-content-image {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    align-items: center;
    margin-top: 0;
  }

  .rs-content-image .rs-content-col {
    flex: 1 1 320px;
    min-width: 0;
  }

  .rs-content-image .rs-image-col {
    flex: 0 0 320px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rs-image-placeholder {
    width: 100%;
    aspect-ratio: 4 / 3;
    background: #D3F7F0;
    border: 2px dashed #1abc9c;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #0d6e5e;
    font-size: 0.88em;
    font-weight: 600;
    text-align: center;
    padding: 20px;
  }

  .rs-image-placeholder .ph-icon {
    width: 48px;
    height: 48px;
    opacity: 0.5;
  }

  .rs-image-placeholder span {
    opacity: 0.6;
    font-weight: 500;
    font-size: 0.9em;
  }

  /* ── Stacked List ── */
  .rs-stacked-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 16px;
  }

  .rs-stacked-item {
    background: #ffffff;
    border-left: 4px solid #1abc9c;
    border-radius: 0 10px 10px 0;
    padding: 16px 18px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  }

  .rs-stacked-item h4 {
    color: #0d1b4f;
    font-weight: 700;
    margin: 0 0 6px;
    font-size: 0.95em;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .rs-stacked-item p {
    color: #555;
    font-size: 0.87em;
    line-height: 1.6;
    margin: 0;
  }

  /* ── Icon Image Utility ── */
  .rs-icon {
    width: 28px;
    height: 28px;
    object-fit: contain;
    display: inline-block;
    vertical-align: middle;
    flex-shrink: 0;
  }

  .rs-icon-lg {
    width: 36px;
    height: 36px;
    object-fit: contain;
    display: inline-block;
    vertical-align: middle;
    flex-shrink: 0;
  }

  /* ── Mobile Responsive ── */
  @media (max-width: 640px) {
    .rs-hero {
      padding: 36px 20px;
    }

    .rs-hero h1 {
      font-size: 1.7em;
    }

    .rs-section h2 {
      font-size: 1.35em;
    }

    .rs-reality-bg {
      padding: 24px 16px;
    }

    .rs-content-image {
      flex-direction: column;
    }

    .rs-content-image .rs-image-col {
      flex: 0 0 auto;
      width: 100%;
    }

    /* Restore natural order on mobile (image always below text) */
    .rs-content-image .rs-image-col:first-child {
      order: 2;
    }

    .rs-content-image .rs-content-col:last-child {
      order: 1;
    }

    .rs-highlight-box {
      padding: 28px 16px;
    }

    .rs-highlight-box h2 {
      font-size: 1.4em !important;
    }

    .rs-cta {
      padding: 28px 16px;
    }

    .rs-cta h2 {
      font-size: 1.3em !important;
    }

    .rs-changes-box,
    .rs-two-panel .right {
      padding: 20px;
    }
  }
</style>
<div class="rs-wrap">
<!-- HERO -->
<div class="rs-hero">
<h1 style="color: white;">Science-Backed. Transparent. Trustworthy.</h1>
<p class="sub"><strong>Most platforms sell products. We evaluate them.</strong><br>From confusion to confidence — that's the ReeStore promise.</p>
</div>
<!-- SECTION: THE REALITY -->
<div class="rs-section rs-reality-bg">
<span class="rs-tag">The Reality</span>
<h2>Choosing the Right Supplement Shouldn't Feel This Confusing</h2>
<p class="lead">The supplement is crowded with hundreds of brands, bold promises, and very little transparency. You shouldn't need a degree to understand what's right for your health.</p>
<div class="rs-problem-cards">
<div class="rs-problem-card">
<h4>Too Many Options</h4>
<p>Thousands of products with overlapping claims make meaningful comparison nearly impossible.</p>
</div>
<div class="rs-problem-card">
<h4>Too Many Claims</h4>
<p>Marketing language often outpaces scientific backing, leaving consumers misled.</p>
</div>
<div class="rs-problem-card">
<h4>Too Little Clarity</h4>
<p>Without expert guidance, it's nearly impossible to know what actually works.</p>
</div>
</div>
</div>
<hr class="rs-divider">
<!-- SECTION: THE PROBLEM -->
<div class="rs-section">
<span class="rs-tag">Beyond the label</span>
<h2>What You See Isn't Always What You Get</h2>
<p class="lead">A product may look promising on the label, but what matters is how it works in the body. Dosage, quality, bioavailability, and formulation can make all the difference.</p>
<div class="rs-content-image">
<div class="rs-content-col">
<div class="rs-stacked-list">
<div class="rs-stacked-item">
<h4>Labels Don't Tell the Full Story</h4>
<p>Key details like dosage, bioavailability, filler content, and form are often easy to miss.</p>
</div>
<div class="rs-stacked-item">
<h4>Marketing Overshadows Science</h4>
<p>Bold claims may sound convincing, but they don't always reflect evidence, quality, or real-world relevance.</p>
</div>
<div class="rs-stacked-item">
<h4>Quality Varies Widely</h4>
<p>Two products with similar labels can perform very differently depending on sourcing, formulation, and standards.</p>
</div>
</div>
</div>
<div class="rs-image-col"><img style="width: 100%; border-radius: 16px; display: block;" alt="Beyond the Label" src="https://cdn.shopify.com/s/files/1/0908/3764/7643/files/Beyond_the_label.png?v=1778061378"></div>
</div>
</div>
<hr class="rs-divider">
<!-- SECTION: REESTORE CHANGES THAT -->
<div class="rs-section">
<div class="rs-two-panel">
<div class="left">
<div class="rs-changes-box">
<h2>How ReeStore Changes the Way You Choose</h2>
<p>Most platforms sell products. We evaluate them end to end. We don't just list supplements, we assess them scientifically and present you with the most perfect ones, so you can choose with more confidence.</p>
<p class="italic">"We don't trust labels. We validate them."</p>
</div>
</div>
<div class="right">
<h4 style="color: #0d4f4f; font-weight: bold; margin: 0 0 12px;">What Makes Us Different</h4>
<ul class="rs-arrow-list">
<li>
<span class="arr">→</span>
<div>
<h4>End-to-End Evaluation</h4>
<p>Every product is assessed across sourcing, formulation, dosage, and overall quality.</p>
</div>
</li>
<li>
<span class="arr">→</span>
<div>
<h4>Scientific Rigour</h4>
<p>We apply clinical nutrition thinking, not just surface-level checks or regulatory minimums.</p>
</div>
</li>
<li>
<span class="arr">→</span>
<div>
<h4>Transparent Listings</h4>
<p>Only products that clear our evaluation standards make it to ReeStore.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
<hr class="rs-divider">
<!-- SECTION: SCIENTIFIC EVALUATION -->
<div class="rs-section">
<span class="rs-tag">Our Process</span>
<h2>Every Product is Scientifically Evaluated Before You See It</h2>
<p class="lead">We assess six critical dimensions before any product reaches our platform.</p>
<div class="rs-six-grid">
<div class="rs-six-item">
<div class="icon"><img class="rs-icon-lg" alt="Ingredient Science" src="https://cdn.shopify.com/s/files/1/0908/3764/7643/files/Ingredient_Science.svg?v=1778059962"></div>
<div>
<h4>Ingredient Science</h4>
<p>Each ingredient studied for efficacy, synergy, and purity.</p>
</div>
</div>
<div class="rs-six-item">
<div class="icon"><img class="rs-icon-lg" alt="Scientific Evidence" src="https://cdn.shopify.com/s/files/1/0908/3764/7643/files/Scientific_Evidence.svg?v=1778059962"></div>
<div>
<h4>Scientific Evidence</h4>
<p>Peer-reviewed research validated for every claim.</p>
</div>
</div>
<div class="rs-six-item">
<div class="icon"><img class="rs-icon-lg" alt="Technology &amp; Absorption" src="https://cdn.shopify.com/s/files/1/0908/3764/7643/files/Technology_Absorption.svg?v=1778059962"></div>
<div>
<h4>Technology &amp; Absorption</h4>
<p>Delivery systems and bioavailability assessed.</p>
</div>
</div>
<div class="rs-six-item">
<div class="icon"><img class="rs-icon-lg" alt="Product Effectiveness" src="https://cdn.shopify.com/s/files/1/0908/3764/7643/files/Product_Effectiveness.svg?v=1778059962"></div>
<div>
<h4>Product Effectiveness</h4>
<p>Real-world performance benchmarked against alternatives.</p>
</div>
</div>
<div class="rs-six-item">
<div class="icon"><img class="rs-icon-lg" alt="Safety &amp; Interactions" src="https://cdn.shopify.com/s/files/1/0908/3764/7643/files/Safety_Interactions.svg?v=1778059961"></div>
<div>
<h4>Safety &amp; Interactions</h4>
<p>Drug-nutrient and allergen risks evaluated.</p>
</div>
</div>
<div class="rs-six-item">
<div class="icon"><img class="rs-icon-lg" alt="Claims &amp; Compliance" src="https://cdn.shopify.com/s/files/1/0908/3764/7643/files/Claims_Compliance.svg?v=1778059962"></div>
<div>
<h4>Claims &amp; Compliance</h4>
<p>Regulatory adherence and marketing accuracy verified.</p>
</div>
</div>
</div>
</div>
<hr class="rs-divider">
<!-- SECTION: INGREDIENT SCIENCE -->
<div class="rs-section">
<span class="rs-tag">Inside the formula</span>
<h2>We Go Beyond the Label</h2>
<p class="lead">We review each ingredient for its purpose, dosage, evidence, and role in the overall formula — not just how it appears on the label.</p>
<div class="rs-content-image">
<div class="rs-content-col">
<div class="rs-stacked-list">
<div class="rs-stacked-item">
<h4>Each Ingredient Reviewed</h4>
<p>We look at the purpose, dosage, form, and available evidence behind key active ingredients.</p>
</div>
<div class="rs-stacked-item">
<h4>Ingredient Combinations Assessed</h4>
<p>We assess how ingredients work together, whether they support each other, overlap, or may reduce effectiveness.</p>
</div>
<div class="rs-stacked-item">
<h4>Fillers &amp; Anti-Nutrients Flagged</h4>
<p>Unnecessary fillers, absorption blockers, allergens, and caution ingredients are identified clearly.</p>
</div>
</div>
</div>
<div class="rs-image-col"><img style="width: 100%; border-radius: 16px; display: block;" alt="Inside the Formula" src="https://cdn.shopify.com/s/files/1/0908/3764/7643/files/Inside_the_formula.png?v=1778061378"></div>
</div>
</div>
<hr class="rs-divider">
<!-- SECTION: TECHNOLOGY MATTERS -->
<div class="rs-section">
<span class="rs-tag">Delivery Matters</span>
<h2>Not All Supplements Work the Same Way</h2>
<p class="lead">The right ingredient is only part of the story. Form, delivery system, and bioavailability all influence how well a supplement is used by the body.</p>
<div class="rs-content-image">
<div class="rs-image-col"><img style="width: 100%; border-radius: 16px; display: block;" alt="Delivery Matters" src="https://cdn.shopify.com/s/files/1/0908/3764/7643/files/Deivery_matters.png?v=1778061378"></div>
<div class="rs-content-col">
<div class="rs-stacked-list">
<div class="rs-stacked-item">
<h4>Absorption &amp; Bioavailability Checked</h4>
<p>We assess how the form and formulation may influence absorption and overall usability in the body.</p>
</div>
<div class="rs-stacked-item">
<h4>Delivery Systems Evaluated</h4>
<p>Liposomal, time-release, coated, and other delivery formats are reviewed for their functional relevance.</p>
</div>
<div class="rs-stacked-item">
<h4>Real-World Relevance Considered</h4>
<p>We look beyond ingredient presence to understand whether the product design supports meaningful use.</p>
</div>
</div>
</div>
</div>
</div>
<hr class="rs-divider">
<!-- SECTION: NOT AN OPEN MARKETPLACE -->
<div class="rs-section">
<span class="rs-tag">Curated, Not Crowded</span>
<h2>Curated Products. Not Endless Listings</h2>
<p class="lead">ReeStore is a handpicked collection — not an endless scroll of unverified products. Every brand and product goes through evaluation before it is listed.</p>
<div class="rs-numbered">
<div class="rs-num-item">
<h4>Brands Are Handpicked</h4>
<p>Only brands with transparent practices, reliable sourcing, and relevant product standards are considered for ReeStore.</p>
</div>
<div class="rs-num-item">
<h4>Products Are Reviewed</h4>
<p>Each product is assessed across our evaluation framework before it moves forward for listing.</p>
</div>
<div class="rs-num-item">
<h4>Listed Only After Validation</h4>
<p>Products are added to ReeStore only after clearing the required review and compliance checks.</p>
</div>
</div>
<div class="rs-quote">"Not every brand makes it to ReeStore — and that's the point."</div>
</div>
<hr class="rs-divider">
<!-- SECTION: EXPERT VALIDATION -->
<div class="rs-section">
<span class="rs-tag">Expert Validation</span>
<h2>Reviewed by Experts, Not Just Algorithms</h2>
<div class="rs-quote">"Reviewed by experts. Not driven by algorithms alone."</div>
<p class="lead">ReeStore's validation process goes beyond automated filtering. Products are reviewed through multiple layers of expert assessment to support accuracy, credibility, and responsible listing.</p>
<div class="rs-three-col">
<div class="rs-col-card">
<h4>
<img class="rs-icon" alt="Clinical Nutrition Review" src="https://cdn.shopify.com/s/files/1/0908/3764/7643/files/Clinical_Nutrition_Review.svg?v=1778059963"> Clinical Nutrition Review</h4>
<p>Nutrition experts assess formulation, ingredient quality, dosage, and product relevance before listing.</p>
</div>
<div class="rs-col-card">
<h4>
<img class="rs-icon" alt="External Scientific Review" src="https://cdn.shopify.com/s/files/1/0908/3764/7643/files/Scientific_Review.svg?v=1778059962"> External Scientific Review</h4>
<p>Scientific inputs help evaluate product claims against available research and current evidence.</p>
</div>
<div class="rs-col-card">
<h4>
<img class="rs-icon" alt="Independent Validation Checks" src="https://cdn.shopify.com/s/files/1/0908/3764/7643/files/Independent_Validation_Checks.svg?v=1778059962"> Independent Validation Checks</h4>
<p>Multiple review layers help identify unsupported claims, incomplete disclosures, and weak evidence before products reach customers.</p>
</div>
</div>
</div>
<hr class="rs-divider">
<!-- SECTION: SMARTER CHOICES -->
<div class="rs-section">
<span class="rs-tag">What This Means For You</span>
<h2>Make Smarter Supplement Choices with Confidence</h2>
<p class="lead">The supplement space can feel noisy, uncertain, and full of conflicting claims. ReeStore helps simplify the decision with clearer product information, quality checks, and expert-reviewed guidance.</p>
<div class="rs-green-grid">
<div class="rs-green-card">
<h4>
<img class="rs-icon" alt="Clear, Actionable Guidance" src="https://cdn.shopify.com/s/files/1/0908/3764/7643/files/Clear_Actionable_Guidance.svg?v=1778059962"> Clear, Actionable Guidance</h4>
<p>Structured product information helps you understand what matters before you choose.</p>
</div>
<div class="rs-green-card">
<h4>
<img class="rs-icon" alt="Reviewed Quality Standards" src="https://cdn.shopify.com/s/files/1/0908/3764/7643/files/Reviewed_Quality_Standards.svg?v=1778059962"> Reviewed Quality Standards</h4>
<p>Products are checked across safety, quality, formulation, and relevance before listing.</p>
</div>
<div class="rs-green-card">
<h4>
<img class="rs-icon" alt="More Confident Decisions" src="https://cdn.shopify.com/s/files/1/0908/3764/7643/files/More_Confident_Decisions.svg?v=1778059962"> More Confident Decisions</h4>
<p>With less noise and more clarity, you can choose products that better support your health goals.</p>
</div>
</div>
</div>
<hr class="rs-divider">
<!-- SECTION: REAL HEALTH JOURNEYS -->
<div class="rs-section">
<span class="rs-tag">Trusted by Experts</span>
<h2>Recommended in Real Health Journeys</h2>
<p class="lead">ReeStore products are not just browsed — they are recommended as part of guided health journeys. Dietitians and health coaches using ReeCoach can suggest curated products based on individual needs, goals, and care plans.</p>
<div class="rs-content-image">
<div class="rs-content-col">
<div class="rs-quote">"These aren't just products — they're part of real prescriptions."</div>
<ul class="rs-arrow-list">
<li>
<span class="arr">→</span>
<div>
<h4>Trusted by Dietitians On ReeCoach</h4>
<p>Used within professional practice workflows to support client guidance and follow-ups.</p>
</div>
</li>
<li>
<span class="arr">→</span>
<div>
<h4>Recommended Based On Real Needs</h4>
<p>Products can be suggested according to client goals, health context, and nutrition plans.</p>
</div>
</li>
<li>
<span class="arr">→</span>
<div>
<h4>Connected To ReeWork Programs</h4>
<p>Integrated into structured wellness journeys where clients can follow plans, track progress, and stay supported.</p>
</div>
</li>
</ul>
</div>
<div class="rs-image-col"><img style="width: 100%; border-radius: 16px; display: block;" alt="Trusted by Experts" src="https://cdn.shopify.com/s/files/1/0908/3764/7643/files/Trusted_by_exprts.png?v=1778061378"></div>
</div>
</div>
<hr class="rs-divider">
<!-- SECTION: BETTER DECISIONS -->
<div class="rs-highlight-box">
<span class="rs-tag">Your Benefit</span>
<h2>Connected to a Larger Health Journey</h2>
<p class="hl-sub">ReeStore is part of the Reework ecosystem — where expert guidance, client tracking, and curated wellness products come together to support better everyday health decisions.</p>
<div class="rs-hl-three">
<div class="rs-hl-item">
<h4>ReeCoach</h4>
<p>Your qualified Dietitian manages your plans, and product recommendations.</p>
</div>
<div class="rs-hl-item">
<h4>ReeWork App</h4>
<p>You can follow their plans, track adherence, and stay connected to their health journey.</p>
</div>
<div class="rs-hl-item">
<h4>ReeStore</h4>
<p>Curated wellness products support the plan beyond consultation.</p>
</div>
</div>
</div>
<!-- CTA -->
<div class="rs-cta">
<h2>Start Your Health Journey with Reework</h2>
<p>Get expert-guided plans, curated supplements, and real support — all in one app.</p>
<div style="display:flex; flex-wrap:wrap; gap:14px; justify-content:center; margin-top:8px;">
  <a href="https://apps.apple.com/in/app/reework/id6448903885" target="_blank" rel="noopener" style="display:inline-block; border:none !important; box-shadow:none !important; background:transparent !important; padding:0;">
    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" style="height:52px; width:136px; display:block; border-radius:8px;">
  </a>
  <a href="https://play.google.com/store/apps/details?id=com.shamrock.reework" target="_blank" rel="noopener" style="display:inline-block; border:none !important; box-shadow:none !important; background:transparent !important; padding:0;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style="height:52px; width:150px; display:block; border-radius:8px;">
  </a>
</div>
</div>
</div>            `,
          }}
        />
      </main>
    );
  }