"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

interface BoardCardProps {
  image: StaticImageData;
  position: string;
  name: string;
}

const BoardCard = ({ image, position, name }: BoardCardProps) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <div className="font-aep-unna flex min-h-44 w-24 flex-col items-center border bg-white text-center shadow-2xl sm:min-h-64 sm:w-40 md:min-h-72 md:w-44 lg:min-h-80 lg:w-48">
        <div className="mt-3 h-20 w-20 sm:mt-5 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:mt-6 lg:h-40 lg:w-40">
          <Image
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col px-1 pt-2 text-sm leading-tight sm:text-xl md:text-2xl">
          <p>{name}</p>
          <p>{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BoardCard;
