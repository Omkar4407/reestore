import Image from "next/image";
import Link from "next/link";

import {
  ShieldCheck,
  Leaf,
  Eye,
  HeartHandshake,
  ArrowRight,
  ShoppingBasket,
  ShoppingBag,
} from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <style>{`
        /* ── Why We Exist cards ── */
        .rs-problem-card {
          background: var(--white);
          border: 1px solid var(--border-light);
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .rs-problem-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,184,148,0.14);
          border-color: rgba(0,212,183,0.3);
        }

        /* ── How We Choose step icon circles ── */
        .rs-step-icon {
          background: var(--sage);
          transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .rs-step-icon:hover {
          background: var(--mint-dark);
          transform: scale(1.08);
          box-shadow: 0 8px 20px rgba(0,184,148,0.25);
        }
        .rs-step-icon:hover svg {
          color: var(--white) !important;
        }

        /* ── Outline / ghost buttons ── */
        .rs-btn-outline {
          border: 1px solid rgba(0,184,148,0.3);
          background: var(--white);
          color: var(--text);
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }
        .rs-btn-outline:hover {
          background: var(--sage);
          border-color: var(--mint-dark);
        }

        /* ── "Explore All Categories" button ── */
        .rs-btn-outline-fill:hover {
          background: var(--mint-dark) !important;
          color: var(--white) !important;
          border-color: var(--mint-dark) !important;
        }

        /* ── Solution section feature columns ── */
        .rs-solution-col {
          transition: background 0.2s ease;
        }
        .rs-solution-col:hover {
          background: var(--sage);
        }

        /* ── Ecosystem cards ── */
        .rs-eco-card {
          background: var(--white);
          border: 1px solid var(--border-light);
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .rs-eco-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 16px 40px rgba(0,184,148,0.18);
          border-color: rgba(0,212,183,0.4);
        }

        /* ── Category image cards ── */
        .rs-cat-card {
          background: var(--white);
          border: 1px solid var(--border-light);
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .rs-cat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 32px rgba(0,184,148,0.2);
          border-color: rgba(0,212,183,0.35);
        }

        /* ── CTA bar primary button ── */
        .rs-btn-mint {
          background: var(--mint);
          color: var(--text);
          transition: background 0.2s ease, color 0.2s ease;
        }
        .rs-btn-mint:hover {
          background: var(--mint-dark);
          color: var(--white);
        }

        /* ── CTA bar ghost button ── */
        .rs-btn-ghost-white {
          border: 1px solid rgba(255,255,255,0.25);
          color: var(--white);
          transition: background 0.2s ease;
        }
        .rs-btn-ghost-white:hover {
          background: rgba(255,255,255,0.1);
        }

        /* ── Primary CTA button (hero) ── */
        .rs-btn-primary {
          background: var(--mint-dark);
          color: var(--white);
          box-shadow: 0 10px 28px rgba(0,184,148,0.28);
          transition: background 0.2s ease;
        }
        .rs-btn-primary:hover {
          background: var(--forest);
        }
      `}</style>

      <main className="overflow-hidden font-sans" style={{ background: "var(--white)" }}>

        {/* HERO */}
<section className="bg-[#f7fffd] pt-5 pb-4 overflow-hidden">

<div className="max-w-[1320px] mx-auto px-5">

  <div
    className="
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-[#e7f1ee]
      bg-white
      min-h-[560px]
    "
  >

    {/* RIGHT HERO IMAGE */}
    <div
      className="
        absolute
        right-0
        top-0
        h-full
        w-[62%]
        overflow-hidden
      "
      style={{
        borderTopLeftRadius: "320px",
        borderBottomLeftRadius: "320px",
      }}
    >

      <Image
        src="/landinghero.png"
        alt="ReeStore Hero"
        fill
        priority
        className="object-contain object-center"
      />

      {/* SOFT OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(247,255,253,0.18), rgba(247,255,253,0.02))",
        }}
      />
    </div>

    {/* CONTENT */}
    <div className="relative z-20 px-10 pt-10 pb-0 h-full">

      <div className="max-w-[470px] pt-6">

        {/* LABEL */}
        <div
          className="
            inline-flex
            items-center
            h-[28px]
            rounded-full
            px-4
            mb-5
          "
          style={{
            background: "rgba(211,247,240,0.9)",
            color: "var(--forest)",
            fontSize: 8,
            fontWeight: 900,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          Why ReeStore
        </div>

        {/* TITLE */}
        <h1
          className="
            text-[58px]
            leading-[0.94]
            tracking-[-0.05em]
            font-black
          "
          style={{
            color: "#061526",
          }}
        >

          Better choices.
          <br />

          Better health.
          <br />

          <span style={{ color: "var(--mint-dark)" }}>
            Made simple.
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mt-5
            text-[15px]
            leading-[2]
            font-semibold
            max-w-[410px]
          "
          style={{
            color: "rgba(6,21,38,0.72)",
          }}
        >

          ReeStore helps you choose curated wellness products
          with clarity, care and expert guidance.
        </p>

        {/* BUTTONS */}
        <div className="flex items-center gap-3 mt-7">

          <Link
            href="/store"
            className="
              h-[46px]
              px-7
              rounded-[12px]
              text-white
              font-bold
              text-[13px]
              inline-flex
              items-center
              gap-2.5
              transition
            "
            style={{
              background: "var(--mint-dark)",
              boxShadow: "0 10px 24px rgba(0,184,148,0.18)",
            }}
          >

            Shop Now

            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            className="
              h-[46px]
              px-7
              rounded-[12px]
              border
              font-bold
              text-[13px]
              inline-flex
              items-center
              justify-center
              transition
            "
            style={{
              borderColor: "rgba(0,184,148,0.28)",
              background: "rgba(255,255,255,0.7)",
              color: "#061526",
            }}
          >

            See How We Choose
          </button>
        </div>
      </div>
    </div>

    {/* FEATURE BAR */}
    <div
      className="
        absolute
        bottom-0
        left-0
        w-full
        z-30
        grid
        grid-cols-4
        border-t
      "
      style={{
        background: "rgba(250,252,245,0.96)",
        borderColor: "rgba(0,0,0,0.05)",
      }}
    >

      {[
        {
          icon: ShieldCheck,
          title: "Curated with care",
        },
        {
          icon: ShoppingBasket,
          title: "Expert reviewed",
        },
        {
          icon: Eye,
          title: "Transparent information",
        },
        {
          icon: HeartHandshake,
          title: "Part of your health journey",
        },
      ].map((item, index) => (

        <div
          key={index}
          className={`
            flex
            items-center
            gap-3
            px-7
            py-5
            ${index !== 3 ? "border-r" : ""}
          `}
          style={{
            borderColor: "rgba(0,0,0,0.06)",
          }}
        >

          <item.icon
            className="w-5 h-5 shrink-0"
            style={{
              color: "var(--mint-dark)",
            }}
          />

          <p
            className="
              text-[13px]
              leading-[1.45]
              font-bold
            "
            style={{
              color: "#061526",
            }}
          >

            {item.title}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
</section>

        {/* ─── WHY WE EXIST ─── */}
        <section className="py-11" style={{ background: "var(--white)", borderTop: "1px solid var(--border-light)" }}>
          <div className="max-w-[1180px] mx-auto px-5">
            <div className="max-w-[700px]">
              <div className="inline-flex items-center justify-center h-[27px] rounded-full px-3.5 mb-4"
                style={{ background: "var(--sage)", color: "var(--forest)", fontSize: 8, fontWeight: 900, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                Why We Exist
              </div>
              <h2 className="text-[34px] leading-[1.04] tracking-[-0.03em] font-black" style={{ color: "var(--text)" }}>
                Because your health deserves better than guesswork.
              </h2>
              <p className="mt-4 text-[13px] leading-[1.85] font-medium max-w-[620px]" style={{ color: "var(--text-muted)" }}>
                The wellness space is full of noise. We simplify your choices by curating products that are safe, relevant, and aligned with real health needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mt-8">
              {[
                { icon: Leaf, title: "Too many products", text: "Overwhelming options make it hard to choose.", iconBg: "rgba(0,212,183,0.12)" },
                { icon: ShieldCheck, title: "Too many claims", text: "Not every claim is backed by science.", iconBg: "rgba(0,212,183,0.18)" },
                { icon: Eye, title: "Too little guidance", text: "Most people are left to decide alone.", iconBg: "rgba(0,184,148,0.12)" },
              ].map((item, i) => (
                <div key={i} className="rs-problem-card rounded-[22px] px-5 py-5 flex items-start gap-4 cursor-default">
                  <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center shrink-0" style={{ background: item.iconBg }}>
                    <item.icon className="w-7 h-7" style={{ color: "var(--mint-dark)" }} />
                  </div>
                  <div>
                    <h3 className="text-[17px] leading-[1.3] font-black" style={{ color: "var(--text)" }}>{item.title}</h3>
                    <p className="mt-3 text-[12px] leading-[1.8] font-medium max-w-[210px]" style={{ color: "var(--text-muted)" }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW WE CHOOSE ─── */}
        <section className="py-11" style={{ background: "var(--white)", borderTop: "1px solid var(--border-light)" }}>
          <div className="max-w-[1180px] mx-auto px-5">
            <div className="grid lg:grid-cols-[1.05fr_0.55fr] gap-8 items-start">

              <div>
                <div className="inline-flex items-center justify-center h-[27px] rounded-full px-3.5 mb-4"
                  style={{ background: "var(--sage)", color: "var(--forest)", fontSize: 8, fontWeight: 900, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                  How We Choose Products
                </div>
                <h2 className="text-[34px] leading-[1.04] tracking-[-0.03em] font-black" style={{ color: "var(--text)" }}>
                  We go beyond the basics.
                </h2>

                <div className="flex items-start gap-5 mt-8">
                  {[
                    { icon: HeartHandshake, text: "We review product information" },
                    { icon: Eye, text: "We check labels & claims" },
                    { icon: Leaf, text: "We assess ingredients & formulation" },
                    { icon: ShieldCheck, text: "We verify safety & compliance" },
                    { icon: ShoppingBasket, text: "We approve for listing" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-5">
                      <div className="text-center max-w-[120px]">
                        <div className="rs-step-icon w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto cursor-default">
                          <item.icon className="w-8 h-8" style={{ color: "var(--mint-dark)" }} />
                        </div>
                        <p className="mt-4 text-[13px] leading-[1.6] font-bold" style={{ color: "var(--text)" }}>{item.text}</p>
                      </div>
                      {i !== 4 && <ArrowRight className="w-4 h-4 mt-7 shrink-0" style={{ color: "rgba(0,184,148,0.35)" }} />}
                    </div>
                  ))}
                </div>

                <div className="mt-8 ml-[160px]">
                  <Link href="/quality-compliance" className="rs-btn-outline h-[46px] px-8 rounded-[14px] font-bold text-[14px] inline-flex items-center justify-center">
                    Learn More About Our Process
                  </Link>
                </div>
              </div>

              {/* Our Promise card */}
              <div className="rounded-[28px] px-8 py-8 relative overflow-hidden min-h-[270px]"
                style={{ background: "var(--mint-dark)", color: "var(--white)", boxShadow: "0 8px 32px rgba(0,184,148,0.22)" }}>
                <HeartHandshake className="absolute right-6 top-5 w-20 h-20" style={{ color: "rgba(255,255,255,0.1)" }} />
                <h3 className="text-[30px] font-black" style={{ color: "var(--white)" }}>Our Promise</h3>
                <div className="mt-7 space-y-5">
                  {["Quality you can trust", "Information you can understand", "Products that support your goals"].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(255,255,255,0.15)" }}>
                        <ShieldCheck className="w-3.5 h-3.5" style={{ color: "var(--white)" }} />
                      </div>
                      <p className="text-[15px] leading-[1.8] font-semibold" style={{ color: "var(--white-soft)" }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SOLUTION ─── */}
        <section className="py-11" style={{ background: "var(--sage)", borderTop: "1px solid var(--border-light)" }}>
          <div className="max-w-[1180px] mx-auto px-5">
            <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-7 items-center">

              <div>
                <div className="inline-flex items-center justify-center h-[27px] rounded-full px-3.5 mb-4"
                  style={{ background: "var(--sage-dark)", color: "var(--forest)", fontSize: 8, fontWeight: 900, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                  Our Solution
                </div>
                <h2 className="text-[34px] leading-[1.04] tracking-[-0.03em] font-black max-w-[520px]" style={{ color: "var(--text)" }}>
                  That's why we created ReeStore.
                </h2>
                <p className="mt-4 text-[13px] leading-[1.85] font-medium max-w-[500px]" style={{ color: "var(--text-soft)" }}>
                  A curated wellness store where products are selected with expert thinking, clearer information and responsible review — so you can make better everyday health choices.
                </p>
              </div>

              <div className="rounded-[22px] grid grid-cols-3 overflow-hidden" style={{ background: "var(--white)", border: "1px solid var(--border-light)" }}>
                {[
                  { icon: Leaf, title: "Curated, not crowded", text: "Only relevant and high-quality products make it to our store." },
                  { icon: HeartHandshake, title: "Expert-led thinking", text: "Nutrition professionals help shape what gets selected." },
                  { icon: ShieldCheck, title: "Built for clarity", text: "We simplify information so you can choose better." },
                ].map((item, i) => (
                  <div key={i} className="rs-solution-col px-5 py-6 text-left cursor-default"
                    style={{ borderRight: i !== 2 ? "1px solid var(--border-light)" : "none" }}>
                    <item.icon className="w-7 h-7" style={{ color: "var(--mint-dark)" }} />
                    <h3 className="mt-4 text-[17px] leading-[1.3] font-black" style={{ color: "var(--text)" }}>{item.title}</h3>
                    <p className="mt-3 text-[12px] leading-[1.8] font-medium" style={{ color: "var(--text-muted)" }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── ECOSYSTEM ─── */}
        <section className="py-11" style={{ background: "var(--white)", borderTop: "1px solid var(--border-light)" }}>
          <div className="max-w-[1180px] mx-auto px-5">
            <div className="rounded-[30px] px-10 py-9 flex items-center justify-between gap-6" style={{ background: "var(--sage)" }}>
              {[
                { icon: HeartHandshake, title: "ReeCoach", text: "Expert guidance, care personalized plans." },
                { icon: Eye, title: "ReeWork App", text: "Follow plans, track progress and stay motivated." },
                { icon: Leaf, title: "ReeStore", text: "Curated products to support your health journey." },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="rs-eco-card w-[230px] min-h-[185px] rounded-[26px] px-6 py-6 text-center flex flex-col items-center justify-center cursor-default">
                    <div className="w-[68px] h-[68px] rounded-full flex items-center justify-center" style={{ background: "var(--sage)" }}>
                      <item.icon className="w-8 h-8" style={{ color: "var(--mint-dark)" }} />
                    </div>
                    <h3 className="mt-5 text-[24px] font-black" style={{ color: "var(--mint-dark)" }}>{item.title}</h3>
                    <p className="mt-3 text-[14px] leading-[1.8] font-semibold max-w-[170px]" style={{ color: "var(--text-soft)" }}>{item.text}</p>
                  </div>
                  {i !== 2 && (
                    <svg width="110" height="34" viewBox="0 0 110 34" fill="none" className="shrink-0 mt-[-6px]">
                      <path d="M6 24C38 4 76 4 102 18" stroke="rgba(0,184,148,0.45)" strokeWidth="3" strokeLinecap="round" fill="none" />
                      <path d="M94 11L102 18L91 19" stroke="rgba(0,184,148,0.45)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BEYOND THE LABEL ─── */}
        <section className="pt-16 pb-10 overflow-hidden" style={{ background: "var(--white)", borderTop: "1px solid var(--border-light)" }}>
          <div className="max-w-[1180px] mx-auto px-5">
            <div className="inline-flex items-center justify-center h-[25px] rounded-full px-3 mb-3"
              style={{ background: "var(--sage)", color: "var(--forest)", fontSize: 7, fontWeight: 900, letterSpacing: "0.22em", textTransform: "uppercase" }}>
              Beyond The Label
            </div>
            <h2 className="text-[30px] leading-[1.05] tracking-[-0.03em] font-black max-w-[400px]" style={{ color: "var(--text)" }}>
              We look beyond what's written on the label.
            </h2>

            <div className="relative mt-10 grid grid-cols-[1fr_460px_1fr] items-center gap-2">
              <div className="space-y-10">
                {[
                  { title: "Ingredients", text: "Are they clinically relevant?", line: "M220 28H300V0H360", cy: "0" },
                  { title: "Dosage", text: "Is it the right amount to make a difference?", line: "M220 28H300V28H360", cy: "28" },
                  { title: "Certifications", text: "Are they backed by authentic certifications?", line: "M220 28H300V56H360", cy: "56" },
                ].map((item, i) => (
                  <div key={i} className="relative min-h-[92px]">
                    <div className="max-w-[220px]">
                      <h3 className="text-[13px] font-black" style={{ color: "var(--mint-dark)" }}>{item.title}</h3>
                      <p className="mt-2 text-[11px] leading-[1.8] font-medium" style={{ color: "var(--text-soft)" }}>{item.text}</p>
                    </div>
                    <svg className="absolute top-0 left-0 pointer-events-none z-30 overflow-visible" width="380" height="90" viewBox="0 0 380 90" fill="none">
                      <path d={item.line} stroke="rgba(0,184,148,0.25)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="360" cy={item.cy} r="4.5" fill="var(--mint-dark)" />
                    </svg>
                  </div>
                ))}
              </div>

              <div className="relative flex justify-center z-20">
                <Image src="/bottle.png" alt="Supplement Bottle" width={520} height={760} priority className="object-contain pointer-events-none" />
              </div>

              <div className="space-y-10">
                {[
                  { title: "Form & Source", text: "Does the form used ensure better absorption?", line: "M0 0H60V28H150", cy: "0" },
                  { title: "Additives", text: "Any unnecessary fillers or harmful additives?", line: "M0 28H60V28H150", cy: "28" },
                  { title: "Claims", text: "Are the claims supported by real evidence?", line: "M0 56H60V28H150", cy: "56" },
                ].map((item, i) => (
                  <div key={i} className="relative min-h-[92px]">
                    <svg className="absolute top-0 right-[180px] pointer-events-none z-30 overflow-visible" width="160" height="90" viewBox="0 0 160 90" fill="none">
                      <path d={item.line} stroke="rgba(0,184,148,0.25)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="0" cy={item.cy} r="4.5" fill="var(--mint-dark)" />
                    </svg>
                    <div className="ml-[170px] max-w-[220px]">
                      <h3 className="text-[13px] font-black" style={{ color: "var(--mint-dark)" }}>{item.title}</h3>
                      <p className="mt-2 text-[11px] leading-[1.8] font-medium" style={{ color: "var(--text-soft)" }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── EXPLORE CATEGORIES ─── */}
        <section className="py-11" style={{ background: "var(--sage)", borderTop: "1px solid var(--border-light)" }}>
          <div className="max-w-[1180px] mx-auto px-5">
            <div className="inline-flex items-center justify-center h-[25px] rounded-full px-3 mb-3"
              style={{ background: "var(--sage-dark)", color: "var(--forest)", fontSize: 7, fontWeight: 900, letterSpacing: "0.22em", textTransform: "uppercase" }}>
              Explore Categories
            </div>
            <h2 className="text-[30px] leading-[1.05] tracking-[-0.03em] font-black" style={{ color: "var(--text)" }}>
              Shop by your health goals
            </h2>

            <div className="grid grid-cols-6 gap-4 mt-8">
              {[
                { image: "/cat-protein.png", title: "Protein & Nutrition" },
                { image: "/cat-gut.png", title: "Gut Health" },
                { image: "/cat-women.png", title: "Women's Health" },
                { image: "/cat-immunity.png", title: "Immunity Support" },
                { image: "/cat-snacks.png", title: "Healthy Snacks" },
                { image: "/cat-wellness.png", title: "Wellness Essentials" },
              ].map((item, i) => (
                <Link key={i} href="/store" className="group">
                  <div className="rs-cat-card relative aspect-[1/1] rounded-[18px] overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-4 text-[15px] leading-[1.35] font-black" style={{ color: "var(--text)" }}>{item.title}</h3>
                </Link>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/store" className="rs-btn-outline rs-btn-outline-fill h-[46px] px-8 rounded-[14px] font-bold text-[14px] inline-flex items-center gap-3 justify-center">
                Explore All Categories
                <ArrowRight className="w-4 h-4" style={{ color: "var(--mint-dark)" }} />
              </Link>
            </div>
          </div>
        </section>

{/* ─── EXPERTS SECTION ─── */}
<section
  className="overflow-hidden pt-12"
  style={{
    background: "var(--white)",
    borderTop: "1px solid var(--border-light)",
  }}
>

  <div className="max-w-[1280px] mx-auto px-6">

    {/* ─── EXPERTS ROW ─── */}
<div
  className="
    grid
    grid-cols-5
    gap-x-6
    gap-y-10
    justify-items-center
  "
>

  {[
    {
      image: "/arun_om_lal.jpg",
      name: "Dr. Arun Om Lal",
      role: "Industry Chair Prof.",
      place: "(NIFTEM K)"
    },
    {
      image: "/nilesh_amritkar.jpg",
      name: "Dr. Nilesh Amritkar",
      role: "Food Safety & Testing Expert",
      place: "(Managing Director, Envirocare Labs)"
    },
    {
      image: "/sakharam_garale.jpg",
      name: "Dr. Sakharam Garale",
      role: "Founder & CEO",
      place: "(Renovare Healthcare Solutions)"
    },
    {
      image: "/shilpa_varma.jpg",
      name: "Ms. Shilpa Varma",
      role: "Chief Clinical Nutritionist",
      place: "(BelleVue Hospital)"
    },
    {
      image: "/vilas_shirhatti.jpeg",
      name: "Dr. Vilas Shirhatti",
      role: "Technical Director",
      place: "(Naturell India Pvt. Ltd.)"
    },
    {
      image: "/chinmayee_deulgaonkar.png",
      name: "Ms. Chinmayee Deulgaonkar",
      role: "Managing Director",
      place: "(FoodChain ID India)"
    },
    {
      image: "/eileen_canday.jpg",
      name: "Dr. Eileen Canday",
      role: "HOD, Nutrition & Dietetics",
      place: "(Reliance Foundation Hospital)"
    },
    {
      image: "/niti_desai.jpg",
      name: "Ms. Niti Desai",
      role: "Consultant Nutritionist",
      place: "(Cumballa Hill Hospital)"
    },
    {
      image: "/subhaprada_nishtala.jpg",
      name: "Ms. Subhaprada Nishtala",
      role: "Director Incharge",
      place: "(ITC-FSAN)"
    },
    {
      image: "/zamurrud_patel.png",
      name: "Ms. Zamurrud Patel",
      role: "Chief Dietitian",
      place: "(Gleneagles Hospital)"
    },
  ].map((expert, index) => (

    <div
      key={index}
      className="
        flex
        flex-col
        items-center
        text-center
        max-w-[180px]
      "
    >

      {/* IMAGE CIRCLE */}
      <div
        className="
          relative
          w-[150px]
          h-[150px]
          rounded-full
          overflow-hidden
          border-[5px]
          bg-[#f7fffd]
          shadow-[0_10px_28px_rgba(0,0,0,0.05)]
        "
        style={{
          borderColor: "rgba(0,184,148,0.16)",
        }}
      >

        <Image
          src={expert.image}
          alt={expert.name}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* NAME */}
      <div
        className="
          mt-3
          px-3
          py-2
          rounded-full
          border
        "
        style={{
          borderColor: "rgba(0,184,148,0.16)",
          background: "rgba(211,247,240,0.45)",
        }}
      >

        <p
          className="
            text-[11px]
            leading-[1.3]
            font-bold
            tracking-[0.01em]
          "
          style={{
            color: "var(--mint-dark)",
          }}
        >
          {expert.name}
        </p>
      </div>

      {/* DESIGNATION */}
      <p
        className="
        mt-1.5
        text-[9px]
        leading-[1.55]
        font-semibold
        max-w-[170px]
      "
      style={{
        color: "var(--text-soft)",
      }}
      >
        {expert.role}
      </p>

      {/* PLACE */}
      <p
        className="
          mt-1.5
          text-[9px]
          leading-[1.55]
          font-semibold
          max-w-[170px]
        "
        style={{
          color: "var(--text-soft)",
        }}
      >
        {expert.place}
      </p>
    </div>
  ))}
</div>

    {/* ─── DESCRIPTION ─── */}
    <div
      className="
        px-10
        py-12
        bg-white
      "
    >

      <div className="max-w-[980px] mx-auto text-center">

        <div
          className="
            inline-flex
            items-center
            justify-center
            h-[25px]
            rounded-full
            px-3
            mb-4
          "
          style={{
            background: "var(--sage)",
            color: "var(--forest)",
            fontSize: 7,
            fontWeight: 900,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          Guided By Nutrition Expertise
        </div>

        <h2
          className="
            text-[40px]
            leading-[1.05]
            tracking-[-0.03em]
            font-black
          "
          style={{
            color: "var(--text)",
          }}
        >
          Guided by experience.
          <br />

          Driven by purpose.
        </h2>

        <p
          className="
            mt-5
            text-[14px]
            leading-[2]
            max-w-[820px]
            mx-auto
            font-medium
          "
          style={{
            color: "var(--text-soft)",
          }}
        >

          ReeStore is powered by experienced nutritionists,
          wellness professionals and clinical experts who
          simplify better health decisions through curated
          wellness guidance, transparent education and
          evidence-backed product selection.
        </p>

        {/* EXPERTISE */}
        <div
          className="
            grid
            grid-cols-4
            gap-5
            mt-8
            max-w-[820px]
            mx-auto
          "
        >

          {[
            {
              icon: ShieldCheck,
              text: "Clinical Dietitian",
            },
            {
              icon: Leaf,
              text: "Sports Nutrition Specialist",
            },
            {
              icon: HeartHandshake,
              text: "Yoga & Lifestyle Expert",
            },
            {
              icon: Eye,
              text: "Behavioural Wellness Coach",
            },
          ].map((item, i) => (

            <div
              key={i}
              className="
                flex
                items-start
                justify-center
                gap-2.5
              "
            >

              <item.icon
                className="
                  w-[18px]
                  h-[18px]
                  shrink-0
                  mt-0.5
                "
                style={{
                  color: "var(--mint-dark)",
                }}
              />

              <p
                className="
                  text-[11px]
                  leading-[1.5]
                  font-semibold
                  text-left
                "
                style={{
                  color: "var(--text)",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex items-center justify-center gap-4 mt-9">

          <Link
            href="/store"
            className="
              rs-btn-outline
              h-[48px]
              px-8
              rounded-[14px]
              font-bold
              text-[14px]
              inline-flex
              items-center
              justify-center
              gap-3
            "
          >

            Shop Now

            <ArrowRight
              className="w-4 h-4"
              style={{
                color: "var(--mint-dark)",
              }}
            />
          </Link>

          <Link
            href="/store"
            className="
              rs-btn-outline
              h-[48px]
              px-8
              rounded-[14px]
              font-bold
              text-[14px]
              inline-flex
              items-center
              justify-center
            "
          >
            Explore Products
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>
    </>
  );
}