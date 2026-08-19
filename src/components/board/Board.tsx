import BoardCard from "./BoardCard";
import { BoardProps } from "@/data/board";
import Leaf from "@/public/Board/leaf.webp";
import GridPaper from "@/public/Board/paper.webp";
import Image from "next/image";

const Board = () => {
  return (
    <div className="relative flex flex-col items-center overflow-hidden px-3 sm:px-6">
      <Image
        src={GridPaper}
        alt="Grid paper background"
        className="absolute top-32 z-0 h-[calc(100%-8rem)] w-full object-cover lg:top-56 lg:h-[calc(100%-14rem)]"
      />
      <p className="font-aep-unna z-[1] mt-16 mb-8 text-2xl font-bold sm:text-3xl md:mt-28 md:mb-14 md:text-6xl lg:mt-36 lg:mb-16 lg:text-7xl">
        Meet the Board
      </p>
      <div className="z-[1] mb-20 grid grid-cols-2 gap-x-2 gap-y-7 sm:gap-x-8 sm:gap-y-12 md:gap-x-12 md:gap-y-14 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-16">
        {BoardProps.map((member, index) => (
          <BoardCard
            key={index}
            image={member.image}
            position={member.position}
            name={member.name}
          />
        ))}
        <Image
          src={Leaf}
          alt=""
          aria-hidden="true"
          className="z-[1] w-24 self-center justify-self-center sm:w-36 md:w-44 lg:hidden"
        />
      </div>
    </div>
  );
};

export default Board;
