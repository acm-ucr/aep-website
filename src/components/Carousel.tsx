"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

type galleryItem = {
  name: string;
  picture: StaticImageData;
};

const Carousel = ({ data }: { data: galleryItem[] }) => {
  return (
    <div className=" bg-gray-300 flex flex-col items-center justify-center w-[60rem] h-[25rem]">
      <div className="flex flex-row gap-14">
        <div className="bg-white h-[21rem] w-[15rem] rounded-3xl"></div>
        <div className="bg-white h-[21rem] w-[23rem] rounded-3xl flex justify-center items-center text-black text-3xl"> Carousel</div>
        <div className="bg-white h-[21rem] w-[15rem] rounded-3xl"></div>
      </div>
    </div>
  );
};

export default Carousel;