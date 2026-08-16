"use client";
import Link from "next/link";
import { motion } from "motion/react";

const Landing = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-20">
      <p className="font-aep-urbanist w-5/6 max-w-6xl px-1 py-2 text-center text-3xl font-light text-black md:px-2 md:py-4 md:text-6xl md:font-medium">
        Preparing the next generation of environmental professionals through
        events, mentorship, and community engagement
      </p>

      <div className="flex gap-12">
        <motion.div whileHover={{ scale: 1.07 }}>
          <Link
            href="/about"
            className="bg-aep-green-200 flex h-20 w-32 items-center justify-center rounded-2xl px-1 py-2 text-3xl font-normal text-black drop-shadow-lg transition hover:brightness-95 md:h-[150px] md:w-[350px] md:rounded-4xl md:px-2 md:py-4 md:text-[70px]"
          >
            About
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.07 }}>
          <Link
            href="/join"
            className="bg-aep-green-200 flex h-20 w-32 items-center justify-center rounded-2xl px-1 py-2 text-3xl font-normal text-black drop-shadow-lg transition hover:brightness-95 md:h-[150px] md:w-[350px] md:rounded-4xl md:px-2 md:py-4 md:text-[70px]"
          >
            Join
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
