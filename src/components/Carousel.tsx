"use client";

import Image, { StaticImageData } from "next/image";

type CarouselPic = {
  name: string;
  picture: StaticImageData;
};

const Carousel = ({ data }: { data: CarouselPic[] }) => {
  return (
    <div className="m-4 flex h-7/12 w-11/12 flex-col items-center justify-center overflow-hidden bg-gray-300 p-4 sm:m-8 sm:w-5/6 md:m-12 md:w-3/4">
      <div className="flex h-full w-full flex-row items-center gap-x-4 sm:gap-x-8 md:gap-x-12">
        {data.map((item, index) => (
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
      </div>
    </div>
  );
};

export default Carousel;