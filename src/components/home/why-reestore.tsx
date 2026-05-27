"use client";

import { motion } from "framer-motion";

export default function WhyReestore() {

  return (
    <section className="py-10 md:py-16 bg-[#d3f7f0] overflow-hidden">

      <div className="max-w-[1500px] mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="max-w-[720px] mb-7 md:mb-12">

          <p className="text-[#00b894] font-semibold mb-2 text-[13px] leading-[1.85]">
            Why Reestore
          </p>

          <h2 className="text-[28px] sm:text-[34px] md:text-4xl font-black leading-[1.04] tracking-[-0.03em] mb-3 md:mb-4">
            Designed for smarter nutrition and modern lifestyles.
          </h2>

          <p className="mt-4 text-[13px] leading-[1.85] font-medium max-w-[620px] text-black/60">
            Reestore combines premium ingredients, modern wellness science and thoughtful product experiences to create nutrition people genuinely enjoy using.
          </p>
        </div>

        {/* BENTO GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-12
            gap-3
            md:gap-4
            auto-rows-auto
            lg:auto-rows-[145px]
          "
        >

          {/* LARGE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="
              col-span-1
              sm:col-span-2
              lg:col-span-6
              lg:row-span-2
              bg-[#0d5c4d]
              rounded-[22px]
              lg:rounded-[26px]
              p-5
              md:p-6
              text-white
              relative
              overflow-hidden
              min-h-[200px]
              lg:min-h-0
            "
          >

            {/* GLOW */}
            <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#00d4b7]/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col justify-between h-full gap-4">

              <div>

                <span className="inline-block bg-white/10 border border-white/10 rounded-full px-3 py-1 text-xs mb-3 md:mb-4">
                  Science-backed
                </span>

                <h3 className="text-[17px] leading-[1.3] font-black mb-3 md:mb-4 sm:text-xl md:text-2xl">
                  Premium formulations built for everyday wellness.
                </h3>

                <p className="mt-4 text-[13px] leading-[1.85] font-medium text-white/70">
                  Every Reestore product is developed using clinically researched ingredients and transparent nutritional standards.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00d4b7]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#00d4b7]/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#00d4b7]/40" />
              </div>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="
              col-span-1
              lg:col-span-3
              bg-[#0d5c4d]
              rounded-[22px]
              lg:rounded-[24px]
              p-5
              md:p-6
              text-white
              relative
              overflow-hidden
              min-h-[145px]
              lg:min-h-0
            "
          >

            <div className="absolute top-0 right-0 w-28 h-28 bg-white/5 rounded-full blur-2xl" />

            <div className="relative z-10 h-full flex flex-col justify-between gap-3">

              <span className="text-white/50 text-xs">01</span>

              <div>
                <h3 className="text-[17px] leading-[1.3] font-black mb-2 md:mb-3">
                  Quality & Compliance
                </h3>

                <p className="mt-4 text-[13px] leading-[1.85] font-medium text-white/65">
                  Strict manufacturing standards ensure consistent premium quality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="
              col-span-1
              lg:col-span-3
              bg-[#0d5c4d]
              rounded-[22px]
              lg:rounded-[24px]
              p-5
              md:p-6
              text-white
              relative
              overflow-hidden
              min-h-[145px]
              lg:min-h-0
            "
          >

            <div className="absolute bottom-0 right-0 w-28 h-28 bg-white/5 rounded-full blur-2xl" />

            <div className="relative z-10 h-full flex flex-col justify-between gap-3">

              <span className="text-white/50 text-xs">02</span>

              <div>
                <h3 className="text-[17px] leading-[1.3] font-black mb-2 md:mb-3">
                  Clean Ingredients
                </h3>

                <p className="mt-4 text-[13px] leading-[1.85] font-medium text-white/65">
                  No unnecessary fillers or misleading blends — just purposeful nutrition.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="
              col-span-1
              sm:col-span-2
              lg:col-span-4
              bg-[#0d5c4d]
              rounded-[22px]
              lg:rounded-[24px]
              p-5
              md:p-6
              text-white
              relative
              overflow-hidden
              min-h-[145px]
              lg:min-h-0
            "
          >

            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

            <div className="relative z-10 h-full flex flex-col justify-between gap-3">

              <span className="text-white/50 text-xs">03</span>

              <div>
                <h3 className="text-[17px] leading-[1.3] font-black mb-2 md:mb-3">
                  Transparent Nutrition
                </h3>

                <p className="mt-4 text-[13px] leading-[1.85] font-medium text-white/65">
                  Honest ingredient profiles and clear nutritional information across products.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="
              col-span-1
              sm:col-span-2
              lg:col-span-2
              bg-[#0d5c4d]
              rounded-[22px]
              lg:rounded-[24px]
              p-5
              text-white
              relative
              overflow-hidden
              min-h-[145px]
              lg:min-h-0
            "
          >

            <div className="relative z-10 h-full flex flex-col justify-between gap-3">

              <span className="text-white/50 text-xs">04</span>

              <div>
                <h3 className="text-[17px] leading-[1.3] font-black mb-2 md:mb-3">
                  Modern Wellness
                </h3>

                <p className="mt-4 text-[13px] leading-[1.85] font-medium text-white/60">
                  Designed for everyday lifestyles.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
