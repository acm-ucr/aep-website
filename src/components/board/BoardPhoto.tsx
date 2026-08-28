"use client";

import Image from "next/image";
import Board from "@/public/Board/BoardPhoto.webp";
import Leaf from "@/public/Board/leaf.webp";
import MagnifyingGlass from "@/public/Board/magnifyingGlass.webp";
import Tape from "@/public/Board/tape.webp";
import { motion } from "motion/react";

const BoardPhoto = () => {
  return (
    <div className="flex flex-col items-center py-60">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-aep-urbanist relative z-[1] px-2 py-4 text-center text-4xl font-bold text-black sm:text-5xl md:text-6xl lg:text-7xl"
      >
        2025-2026
      </motion.h1>

      <div className="relative flex items-center justify-center overflow-visible">
        {/* Board Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -1 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-[1] flex justify-center"
        >
          <Image
            src={Board}
            alt="2025-2026 Board Group Photo"
            className="w-4/5"
          />
        </motion.div>

        {/* Leaf */}
        <motion.div
          initial={{ opacity: 0, x: 18, y: -12, rotate: 12 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          className="absolute -top-32 -right-4 z-[2] hidden w-1/4 lg:block"
        >
          <Image src={Leaf} alt="Leaf Decoration" className="w-full" />
        </motion.div>

        {/* Top Left Tape */}
        <motion.div
          initial={{ opacity: 0, x: -14, y: -10, rotate: -8 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="absolute -top-8 left-5 z-[3] w-1/5"
        >
          <Image src={Tape} alt="Top Left Tape Decoration" className="w-full" />
        </motion.div>

        {/* Bottom Right Tape */}
        <motion.div
          initial={{ opacity: 0, x: 14, y: 10, rotate: 8 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="absolute right-5 -bottom-12 z-[3] w-1/5"
        >
          <Image
            src={Tape}
            alt="Bottom Right Tape Decoration"
            className="w-full"
          />
        </motion.div>

        {/* Magnifying Glass */}
        <motion.div
          initial={{ opacity: 0, x: -18, y: 14, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
          className="absolute -bottom-24 -left-0 z-[2] w-1/4"
        >
          <Image
            src={MagnifyingGlass}
            alt="Magnifying Glass Decoration"
            className="w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default BoardPhoto;
