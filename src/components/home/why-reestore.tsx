"use client";

import { motion } from "framer-motion";

export default function WhyReestore() {
  return (
    <section className="py-16 md:py-24 bg-[#d3f7f0] overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="max-w-[780px] mb-10 md:mb-16">

          <p className="text-[#00b894] font-semibold mb-2 md:mb-3">
            Why Reestore
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-4 md:mb-5">
            Designed for smarter nutrition and modern lifestyles.
          </h2>

          <p className="text-black/60 text-base md:text-lg leading-relaxed">
            Reestore combines premium ingredients, modern wellness science and thoughtful product experiences to create nutrition people genuinely enjoy using.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5 auto-rows-auto lg:auto-rows-[190px]">

          {/* LARGE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -5 }}
            className="col-span-1 sm:col-span-2 lg:col-span-6 lg:row-span-2 bg-[#0d5c4d] rounded-[28px] lg:rounded-[32px] p-6 md:p-8 text-white relative overflow-hidden min-h-[280px] lg:min-h-0"
          >

            {/* GLOW */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#00d4b7]/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col justify-between h-full gap-6">

              <div>
                <span className="inline-block bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-sm mb-4 md:mb-6">
                  Science-backed
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-4 md:mb-5">
                  Premium formulations built for everyday wellness.
                </h3>

                <p className="text-white/70 text-base md:text-lg leading-relaxed">
                  Every Reestore product is developed using clinically researched ingredients and transparent nutritional standards.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#00d4b7]" />
                <div className="w-3 h-3 rounded-full bg-[#00d4b7]/70" />
                <div className="w-3 h-3 rounded-full bg-[#00d4b7]/40" />
              </div>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="col-span-1 lg:col-span-3 bg-[#0d5c4d] rounded-[28px] lg:rounded-[30px] p-6 md:p-7 text-white relative overflow-hidden min-h-[180px] lg:min-h-0"
          >

            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

            <div className="relative z-10 h-full flex flex-col justify-between gap-4">

              <span className="text-white/50 text-sm">01</span>

              <div>
                <h3 className="text-xl md:text-2xl font-bold leading-tight mb-3 md:mb-4">
                  Quality & Compliance
                </h3>
                <p className="text-white/65 leading-relaxed text-sm">
                  Strict sourcing and manufacturing standards ensure consistent premium quality.
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
            whileHover={{ y: -5 }}
            className="col-span-1 lg:col-span-3 bg-[#0d5c4d] rounded-[28px] lg:rounded-[30px] p-6 md:p-7 text-white relative overflow-hidden min-h-[180px] lg:min-h-0"
          >

            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

            <div className="relative z-10 h-full flex flex-col justify-between gap-4">

              <span className="text-white/50 text-sm">02</span>

              <div>
                <h3 className="text-xl md:text-2xl font-bold leading-tight mb-3 md:mb-4">
                  Clean Ingredients
                </h3>
                <p className="text-white/65 leading-relaxed text-sm">
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
            whileHover={{ y: -5 }}
            className="col-span-1 sm:col-span-2 lg:col-span-4 bg-[#0d5c4d] rounded-[28px] lg:rounded-[30px] p-6 md:p-7 text-white relative overflow-hidden min-h-[180px] lg:min-h-0"
          >

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />

            <div className="relative z-10 h-full flex flex-col justify-between gap-4">

              <span className="text-white/50 text-sm">03</span>

              <div>
                <h3 className="text-xl md:text-2xl font-bold leading-tight mb-3 md:mb-4">
                  Transparent Nutrition
                </h3>
                <p className="text-white/65 leading-relaxed text-sm">
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
            whileHover={{ y: -5 }}
            className="col-span-1 sm:col-span-2 lg:col-span-2 bg-[#0d5c4d] rounded-[28px] lg:rounded-[30px] p-6 text-white relative overflow-hidden min-h-[180px] lg:min-h-0"
          >

            <div className="relative z-10 h-full flex flex-col justify-between gap-4">

              <span className="text-white/50 text-sm">04</span>

              <div>
                <h3 className="text-xl font-bold leading-tight mb-3">
                  Modern Wellness
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
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
