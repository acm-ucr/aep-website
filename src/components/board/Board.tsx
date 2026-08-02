import BoardCard from "./BoardCard";
import { BoardProps } from "@/data/board";
import GridPaper from "@/public/Board/paper.webp";
import Image from "next/image";

const Board = () => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <Image
        src={GridPaper}
        alt="Grid paper background"
        className="absolute mt-56 h-dvw w-full"
      />
      <p className="font-aep-unna z-10 mt-36 mb-16 text-7xl font-bold">
        Meet the Board
      </p>
      <div className="z-10 mb-20 grid grid-cols-3 grid-rows-3 gap-x-14 gap-y-16">
        {BoardProps.map((member, index) => (
          <BoardCard
            key={index}
            image={member.image}
            position={member.position}
            name={member.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
