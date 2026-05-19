"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AppSection() {

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">

      <div className="max-w-[1700px] mx-auto px-4 md:px-6">

        <motion.a
          href="https://www.reework.in/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[28px] md:rounded-[42px] overflow-hidden block"
        >
          <Image
            src="/app-section.png"
            alt="Reework App"
            width={1800}
            height={1000}
            priority
            unoptimized
            className="w-full h-auto object-cover"
          />
        </motion.a>
      </div>
    </section>
  );
}
