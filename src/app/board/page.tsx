import Board from "@/components/board/Board";
import GridPaper from "@/public/Board/paper.webp";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-aep-green-100">
      <Image
        src={GridPaper}
        alt="Grid paper background"
        className="absolute mt-56 h-[1150px] w-full"
      />
      <Board />
    </div>
  );
};

export default Page;
