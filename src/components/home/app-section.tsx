"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AppSection() {

  return (
<section className="bg-white py-8 md:py-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6">

        <motion.a
          href="https://www.reework.in/"
          target="_blank"
          rel="noopener noreferrer"
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
            duration: 0.6,
          }}
          whileHover={{
            y: -4,
          }}
          className="
            relative
            rounded-[22px]
            md:rounded-[30px]
            overflow-hidden
            block
            border
            border-black/5
            shadow-[0_6px_30px_rgba(0,0,0,0.04)]
            transition-all
            duration-300
          "
        >

          <Image
            src="/app-section.png"
            alt="Reework App"
            width={1800}
            height={1000}
            priority
            unoptimized
            className="
              w-full
              h-auto
              object-cover
            "
          />
        </motion.a>
      </div>
    </section>
  );
}