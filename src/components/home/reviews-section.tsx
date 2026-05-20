"use client";

import { motion } from "framer-motion";
import { Quote, ArrowUpRight, User } from "lucide-react";

const reviews = [
  {
    name: "Aarav Sharma",
    role: "Fitness Enthusiast",
    review:
      "Reestore completely changed my nutrition routine. The protein blends actually feel clean and digestible unlike most products I've tried.",
    rotation: "md:rotate-[-3deg]",
  },
  {
    name: "Omkar Bommakanti",
    role: "Working Professional",
    review:
      "The snacks and supplements fit perfectly into my daily routine. Packaging, quality and taste genuinely feel premium.",
    rotation: "md:rotate-[2deg]",
  },
  {
    name: "Kabir Patel",
    role: "Athlete",
    review:
      "I love how transparent the ingredients are. Everything feels modern, science-backed and actually useful.",
    rotation: "md:rotate-[-2deg]",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-16 md:py-28 bg-[#d3f7f0] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-20 gap-6">

          <div>
            <p className="text-[#00b894] font-semibold mb-2 md:mb-3">
              Community Voices
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-[700px] leading-tight">
              Real stories from people building healthier lifestyles.
            </h2>
          </div>

          <button className="flex items-center gap-2 border border-black/10 rounded-full px-6 py-3 hover:bg-black hover:text-white transition self-start sm:self-auto whitespace-nowrap">
            Explore Reviews
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* REVIEW LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`${review.rotation}`}
            >

              <div className="bg-white rounded-[32px] md:rounded-[40px] p-7 md:p-10 min-h-[320px] md:min-h-[420px] relative overflow-hidden border-2 border-[#0d5c4d] shadow-[0_8px_30px_rgba(13,92,77,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(13,92,77,0.22)]">

                {/* HUGE QUOTE */}
                <div className="absolute -top-2 -right-2 color-[#1f6861] opacity-10">
                  <Quote className="w-32 h-32 md:w-40 md:h-40" />
                </div>

                {/* TOP SECTION */}
                <div className="relative z-10">

                  {/* AVATAR */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#0d5c4d] mb-6 md:mb-8 flex items-center justify-center shadow-lg text-white">
                    <User className="w-7 h-7 md:w-8 md:h-8" />
                  </div>

                  {/* REVIEW */}
                  <p className="text-lg md:text-[1.35rem] leading-relaxed font-medium mb-10 md:mb-12 text-[#1f1f1f]">
                    "{review.review}"
                  </p>
                </div>

                {/* USER */}
                <div className="absolute bottom-7 left-7 md:bottom-10 md:left-10">
                  <h4 className="text-lg md:text-xl font-semibold text-[#0d5c4d]">
                    {review.name}
                  </h4>
                  <p className="mt-1 text-black/60">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
