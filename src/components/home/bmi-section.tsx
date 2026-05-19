"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BMISection() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<string | null>(null);

  const calculateBMI = () => {
    if (!height || !weight) return;
    const h = Number(height) / 100;
    const w = Number(weight);
    const result = (w / (h * h)).toFixed(1);
    setBmi(result);
  };

  return (
    <section className="py-16 md:py-28 bg-[#f7fffd] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p className="text-[#00b894] font-semibold mb-2 md:mb-3">
              Health Calculator
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4 md:mb-6">
              Calculate your BMI instantly
            </h2>

            <p className="text-black/60 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-[620px]">
              Track your body mass index to better understand your health and wellness journey.
            </p>

            {/* CARD */}
            <div className="bg-white rounded-[28px] md:rounded-[36px] p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-black/5">

              {/* INPUTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-5 md:mb-6">

                {/* HEIGHT */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    placeholder="170"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full border border-black/10 rounded-2xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#00b894] transition text-base"
                  />
                </div>

                {/* WEIGHT */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    placeholder="65"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full border border-black/10 rounded-2xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#00b894] transition text-base"
                  />
                </div>
              </div>

              {/* BUTTON */}
              <button
                onClick={calculateBMI}
                className="w-full bg-[#0d5c4d] text-white rounded-full py-3.5 md:py-4 text-lg md:text-xl font-medium hover:opacity-90 transition"
              >
                Calculate BMI
              </button>

              {/* RESULT */}
              {bmi && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 md:mt-8 bg-[#d3f7f0] rounded-3xl p-5 md:p-6 text-center"
                >
                  <p className="text-black/60 mb-2">
                    Your BMI Score
                  </p>
                  <h3 className="text-4xl md:text-5xl font-bold text-[#0d5c4d]">
                    {bmi}
                  </h3>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* RIGHT - hidden on mobile to keep layout clean, shown on lg+ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >

            {/* BG SHAPE */}
            <div className="absolute inset-0 bg-[#d3f7f0] rounded-[60px] rotate-3 scale-95" />

            {/* IMAGE CARD */}
            <div className="relative bg-white rounded-[40px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6">
              <Image
                src="/bmi-image.png"
                alt="BMI"
                width={900}
                height={700}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
