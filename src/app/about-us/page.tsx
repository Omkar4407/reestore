export default function AboutUsPage() {
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
      >
        <div
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
      color: white;
    }
  
    .rs-hero .sub {
      font-size: 1.05em;
      opacity: 0.88;
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.7;
    }
  
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
      line-height: 1.8;
      max-width: 760px;
      margin-bottom: 24px;
    }
  
    .rs-divider {
      border: none;
      border-top: 2px solid #e0f7f2;
      margin: 48px 0;
    }
  
    .rs-content-image {
      display: flex;
      flex-wrap: wrap;
      gap: 32px;
      align-items: center;
    }
  
    .rs-content-col {
      flex: 1 1 320px;
    }
  
    .rs-image-col {
      flex: 0 0 320px;
    }
  
    .rs-image-col img {
      width: 100%;
      border-radius: 16px;
      display: block;
    }
  
    .rs-stacked-list {
      display: flex;
      flex-direction: column;
      gap: 14px;
      margin-top: 18px;
    }
  
    .rs-stacked-item {
      background: #D3F7F0;
      border-left: 4px solid #1abc9c;
      border-radius: 0 10px 10px 0;
      padding: 16px 18px;
    }
  
    .rs-stacked-item h4 {
      color: #0d1b4f;
      font-weight: 700;
      margin: 0 0 6px;
      font-size: 0.95em;
    }
  
    .rs-stacked-item p {
      color: #555;
      font-size: 0.87em;
      line-height: 1.7;
      margin: 0;
    }
  
    .rs-green-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 20px;
    }
  
    .rs-green-card {
      flex: 1 1 220px;
      background: #D3F7F0;
      border-radius: 12px;
      padding: 20px;
    }
  
    .rs-green-card h4 {
      font-weight: 700;
      margin: 0 0 8px;
      font-size: 1em;
      color: #0d4f4f;
    }
  
    .rs-green-card p {
      font-size: 0.87em;
      color: #555;
      line-height: 1.7;
      margin: 0;
    }
  
    .rs-highlight-box {
      background: #0d4f4f;
      color: #fff;
      border-radius: 14px;
      padding: 40px 32px;
      margin-bottom: 56px;
      text-align: center;
    }
  
    .rs-highlight-box h2 {
      font-size: 2em;
      font-weight: 800;
      margin: 0 0 12px;
      color: white;
    }
  
    .rs-highlight-box .hl-sub {
      opacity: 0.88;
      line-height: 1.8;
      max-width: 760px;
      margin: 0 auto;
    }
  
    .rs-cta {
      background: linear-gradient(135deg, #1abc9c, #0d4f4f);
      color: white;
      border-radius: 14px;
      padding: 40px 32px;
      text-align: center;
    }
  
    .rs-cta h2 {
      font-size: 1.8em;
      font-weight: 800;
      margin: 0 0 12px;
      color: white;
    }
  
    .rs-cta p {
      opacity: 0.9;
      margin: 0 0 20px;
      line-height: 1.8;
    }
  
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
  
      .rs-content-image {
        flex-direction: column;
      }
  
      .rs-image-col {
        width: 100%;
        flex: auto;
      }
  
      .rs-highlight-box,
      .rs-cta {
        padding: 28px 18px;
      }
    }
  </style>
  
  <div class="rs-wrap">
  
    <div class="rs-hero">
      <h1>Why Choose ReeStore?</h1>
  
      <p class="sub">
        ReeStore isn’t just a marketplace — it’s a promise of trust,
        quality and transparency. Every product goes through a rigorous
        auditing and compliance process before reaching you.
      </p>
    </div>
  
    <div class="rs-section">
      <span class="rs-tag">Our Standards</span>
  
      <h2>Because your health deserves better than guesswork</h2>
  
      <p class="lead">
        Every product you see on ReeStore is screened for scientific
        relevance, ingredient quality, safety and compliance.
        We combine expert evaluation with evidence-based nutrition
        principles to help users choose with confidence.
      </p>
  
      <div class="rs-green-grid">
  
        <div class="rs-green-card">
          <h4>Expert Curated Selection</h4>
  
          <p>
            Reviewed by dietitians, nutritionists and food safety experts.
          </p>
        </div>
  
        <div class="rs-green-card">
          <h4>Regulatory Compliance</h4>
  
          <p>
            Products are evaluated against FSSAI and industry benchmarks.
          </p>
        </div>
  
        <div class="rs-green-card">
          <h4>Evidence-Based Nutrition</h4>
  
          <p>
            Scientific claims and certifications are reviewed for authenticity.
          </p>
        </div>
  
      </div>
    </div>
  
    <hr class="rs-divider">
  
    <div class="rs-section">
  
      <span class="rs-tag">Our Promise</span>
  
      <div class="rs-content-image">
  
        <div class="rs-content-col">
  
          <h2>Making trustworthy wellness accessible</h2>
  
          <p class="lead">
            Our mission is to make safe, effective and trustworthy
            wellness products accessible to everyone through
            transparency and scientific validation.
          </p>
  
          <div class="rs-stacked-list">
  
            <div class="rs-stacked-item">
              <h4>Empowering Consumers</h4>
  
              <p>
                Helping users make smarter wellness decisions
                without spending hours researching labels.
              </p>
            </div>
  
            <div class="rs-stacked-item">
              <h4>Supporting Responsible Brands</h4>
  
              <p>
                Giving visibility to manufacturers focused on quality and integrity.
              </p>
            </div>
  
            <div class="rs-stacked-item">
              <h4>Raising Industry Standards</h4>
  
              <p>
                Building a transparent and science-driven wellness marketplace.
              </p>
            </div>
  
          </div>
        </div>
  
        <div class="rs-image-col">
          <img
            src="https://cdn.shopify.com/s/files/1/0908/3764/7643/files/Inside_the_formula.png?v=1778061378"
            alt="Our Promise"
          />
        </div>
  
      </div>
    </div>
  
    <hr class="rs-divider">
  
    <div class="rs-highlight-box">
  
      <span class="rs-tag">
        ReeCoach + Reework Ecosystem
      </span>
  
      <h2>More Than Just A Store</h2>
  
      <p class="hl-sub">
        ReeStore is part of a connected wellness ecosystem where
        nutrition experts, digital tracking and curated wellness
        products work together to support healthier lives.
      </p>
  
    </div>
  
    <div class="rs-section">
  
      <span class="rs-tag">Compliance</span>
  
      <h2>Trust. Verified. FSSAI-Compliant.</h2>
  
      <p class="lead">
        From ingredient labels to health claims,
        our auditing process checks it all before products
        are listed on ReeStore.
      </p>
  
      <div class="rs-stacked-list">
  
        <div class="rs-stacked-item">
          <h4>Label & Packaging Verification</h4>
  
          <p>
            Shelf life, packaging and mandatory disclosures verified.
          </p>
        </div>
  
        <div class="rs-stacked-item">
          <h4>Ingredient Safety Review</h4>
  
          <p>
            Ingredient safety, allergen declarations and health claims checked.
          </p>
        </div>
  
        <div class="rs-stacked-item">
          <h4>Nutrition & Certifications Audit</h4>
  
          <p>
            FSSAI licenses, nutritional values and certifications reviewed.
          </p>
        </div>
  
      </div>
    </div>
  
    <hr class="rs-divider">
  
    <div class="rs-section">
  
      <span class="rs-tag">Our Process</span>
  
      <h2>4-Stage Audit Procedure</h2>
  
      <div class="rs-green-grid">
  
        <div class="rs-green-card">
          <h4>01. Information Collection</h4>
  
          <p>
            Brands submit manufacturing and product details.
          </p>
        </div>
  
        <div class="rs-green-card">
          <h4>02. Compliance Evaluation</h4>
  
          <p>
            Products checked against food safety standards.
          </p>
        </div>
  
        <div class="rs-green-card">
          <h4>03. Validation & Approval</h4>
  
          <p>
            Nutritionists verify claims, certifications and reports.
          </p>
        </div>
  
        <div class="rs-green-card">
          <h4>04. Final Onboarding</h4>
  
          <p>
            Approved products are listed on ReeStore.
          </p>
        </div>
  
      </div>
    </div>
  
    <div class="rs-cta">
  
      <h2>Connected To Real Wellness Journeys</h2>
  
      <p>
        ReeStore products are integrated into expert-led
        nutrition plans through ReeCoach and Reework.
      </p>
  
    </div>
  
  </div>
            `,
          }}
        />
      </main>
    );
  }