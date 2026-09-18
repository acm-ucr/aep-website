"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

type CarouselPic = {
  name: string;
  picture: StaticImageData;
};

const logoCarouselAnimation = (totalWidth = 0, duration = 0) => ({
  animate: { x: [0, -totalWidth] },
  transition: {
    ease: "linear" as const,
    duration,
    repeat: Infinity,
  },
});

const Carousel = ({ data }: { data: CarouselPic[] }) => {
  const duplicatedData = [...data, ...data, ...data, ...data];
  const totalWidth = data.length * 312;
  const SPEED = 70;
  const duration = totalWidth / SPEED;
  return (
    <div className="m-4 flex h-7/12 w-11/12 flex-col items-center justify-center overflow-hidden bg-gray-300 p-4 sm:m-8 sm:w-5/6 md:m-12 md:w-3/4">
      <motion.div
        className="flex h-full w-full flex-row items-center gap-x-4 sm:gap-x-8 md:gap-x-12"
        {...logoCarouselAnimation(totalWidth, duration)}
      >
        {duplicatedData.map((item, index) => (
          <div
            key={index}
            className="h-11/12 w-3/4 shrink-0 sm:w-1/2 md:w-5/12 lg:w-4/12"
          >
            <Image
              src={item.picture}
              alt={item.name}
              className="h-full w-full rounded-3xl"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
