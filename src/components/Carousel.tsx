"use client";

import Image, { StaticImageData } from "next/image";

type CarouselPic = {
  name: string;
  picture: StaticImageData;
};

const Carousel = ({ data }: { data: CarouselPic[] }) => {
  return (
    <div className="flex h-7/12 w-3/4 flex-col items-center justify-center overflow-hidden bg-gray-300 p-4">
      <div className="flex h-full w-full flex-row items-center gap-x-12">
        {data.map((item, index) => (
          <div key={index} className="h-11/12 w-4/12 shrink-0">
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
