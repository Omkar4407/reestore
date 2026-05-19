"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section className="relative bg-[#d3f7f0] overflow-hidden pt-32 md:pt-40 pb-10 md:pb-16">

      <div className="max-w-[1900px] mx-auto px-4 md:px-6">

        {/* HERO CONTAINER */}
        <div className="relative h-[520px] sm:h-[580px] md:h-[640px] rounded-[28px] md:rounded-[42px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.08)]">

          {/* HERO IMAGE */}
          <Image
            src="/main.png"
            alt="Reestore Hero"
            fill
            priority
            unoptimized
            className="object-cover object-[72%_center]"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

          {/* MAIN HERO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute bottom-5 left-4 right-4 sm:bottom-auto sm:top-10 sm:left-10 sm:right-auto z-20 sm:max-w-[430px]"
          >

            <div className="w-full bg-white/12 backdrop-blur-2xl border border-white/10 rounded-[22px] sm:rounded-[30px] px-5 py-4 sm:px-7 sm:py-5 shadow-[0_25px_70px_rgba(0,0,0,0.18)]">

              {/* TAG */}
              <div className="inline-flex items-center gap-2 bg-[#d3f7f0] text-[#0d5c4d] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide mb-3 sm:mb-4">
                ✦ PREMIUM WELLNESS
              </div>

              {/* TITLE */}
              <h1 className="text-[24px] sm:text-[30px] md:text-[34px] leading-[1.05] font-black tracking-tight text-white mb-2 sm:mb-4">
                Better Choices.
                <br />
                Everyday Wellness.
              </h1>

              {/* DESCRIPTION - hidden on very small screens */}
              <p className="text-white/80 text-[13px] sm:text-[14px] leading-6 sm:leading-7 mb-3 sm:mb-4 hidden sm:block">
                Curated food products, supplements, nutraceuticals and wellness essentials selected to support modern healthy lifestyles with more transparency and care.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">

                <button className="bg-white text-[#0d5c4d] px-5 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:opacity-90 transition-all duration-300">
                  Shop ReeStore
                </button>

                <button className="border border-white/15 bg-white/10 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:bg-white hover:text-[#0d5c4d] transition-all duration-300">
                  Quality Checks
                </button>
              </div>

              {/* FEATURES */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-white/10">

                <div className="bg-white/10 text-white px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-medium">
                  Curated Products
                </div>

                <div className="bg-white/10 text-white px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-medium">
                  Quality Checked
                </div>

                <div className="bg-white/10 text-white px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-medium">
                  Easy Delivery
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
