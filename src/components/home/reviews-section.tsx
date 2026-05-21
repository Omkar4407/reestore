"use client";

import { motion } from "framer-motion";
import {
  Quote,
  ArrowUpRight,
  User,
} from "lucide-react";

const reviews = [
  {
    name: "Aarav Sharma",
    role: "Fitness Enthusiast",
    review:
      "Reestore completely changed my nutrition routine. The protein blends actually feel clean and digestible unlike most products I've tried.",
    rotation: "md:rotate-[-2deg]",
  },

  {
    name: "Omkar Bommakanti",
    role: "Working Professional",
    review:
      "The snacks and supplements fit perfectly into my daily routine. Packaging, quality and taste genuinely feel premium.",
    rotation: "md:rotate-[1deg]",
  },

  {
    name: "Kabir Patel",
    role: "Athlete",
    review:
      "I love how transparent the ingredients are. Everything feels modern, science-backed and actually useful.",
    rotation: "md:rotate-[-1deg]",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-12 md:py-16 bg-[#d3f7f0] overflow-hidden">

      <div className="max-w-[1600px] mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-12 gap-5">

          <div>

            <p className="text-[#00b894] font-semibold mb-2 text-sm md:text-base">
              Community Voices
            </p>

            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-bold
                tracking-tight
                max-w-[620px]
                leading-tight
              "
            >

              Real stories from people building healthier lifestyles.
            </h2>
          </div>

          <button
            className="
              flex
              items-center
              gap-2
              border
              border-black/10
              rounded-full
              px-5
              py-2.5
              text-sm
              font-medium
              hover:bg-black
              hover:text-white
              transition
              self-start
              sm:self-auto
              whitespace-nowrap
            "
          >

            Explore Reviews

            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* REVIEWS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            md:gap-5
          "
        >

          {reviews.map((review, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className={review.rotation}
            >

              <div
                className="
                  bg-white
                  rounded-[24px]
                  md:rounded-[28px]
                  p-5
                  md:p-6
                  min-h-[250px]
                  md:min-h-[280px]
                  relative
                  overflow-hidden
                  border
                  border-[#0d5c4d]/10
                  shadow-[0_4px_20px_rgba(13,92,77,0.06)]
                  transition-all
                  duration-300
                  flex
                  flex-col
                "
              >

                {/* QUOTE ICON */}
                <div
                  className="
                    absolute
                    -top-1
                    -right-1
                    text-[#1f6861]
                    opacity-[0.06]
                  "
                >

                  <Quote className="w-20 h-20 md:w-24 md:h-24" />
                </div>

                {/* TOP */}
                <div className="relative z-10 flex-1">

                  {/* AVATAR */}
                  <div
                    className="
                      w-11
                      h-11
                      md:w-12
                      md:h-12
                      rounded-2xl
                      bg-[#0d5c4d]
                      mb-4
                      md:mb-5
                      flex
                      items-center
                      justify-center
                      text-white
                    "
                  >

                    <User className="w-5 h-5 md:w-6 md:h-6" />
                  </div>

                  {/* REVIEW */}
                  <p
                    className="
                      text-[15px]
                      md:text-base
                      leading-7
                      font-medium
                      text-[#1f1f1f]
                    "
                  >

                    "{review.review}"
                  </p>
                </div>

                {/* USER */}
                <div className="pt-5 mt-auto">

                  <h4
                    className="
                      text-base
                      md:text-lg
                      font-semibold
                      text-[#0d5c4d]
                    "
                  >

                    {review.name}
                  </h4>

                  <p className="mt-1 text-black/50 text-sm">
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