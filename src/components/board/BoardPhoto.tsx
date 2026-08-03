import Image from "next/image";
import Board from "@/public/Board/BoardPhoto.webp";
import Leaf from "@/public/Board/leaf.webp";
import MagnifyingGlass from "@/public/Board/magnifyingGlass.webp";
import Tape from "@/public/Board/tape.webp";

const BoardPhoto = () => {
  return (
    <div className="flex flex-col items-center py-20">
      <h1 className="font-aep-urbanist relative z-[1] px-2 py-4 text-center text-7xl font-bold text-black">
        2025-2026
      </h1>

      <div className="relative flex items-center justify-center overflow-visible">
        {/* Board Photo */}
        <Image
          src={Board}
          alt="2025-2026 Board Group Photo"
          className="relative z-[1] w-4/5"
        />

        {/* Leaf */}
        <Image
          src={Leaf}
          alt="Leaf Decoration"
          className="absolute -top-32 -right-4 z-[2] w-1/4"
        />

        {/* Top Left Tape */}
        <Image
          src={Tape}
          alt="Top Left Tape Decoration"
          className="absolute -top-8 left-5 z-[3] w-1/5"
        />

        {/* Bottom Right Tape */}
        <Image
          src={Tape}
          alt="Bottom Right Tape Decoration"
          className="absolute right-5 -bottom-12 z-[3] w-1/5"
        />

        {/* Magnifying Glass */}
        <Image
          src={MagnifyingGlass}
          alt="Magnifying Glass Decoration"
          className="absolute -bottom-24 -left-0 z-[2] w-1/4"
        />
      </div>
    </div>
  );
};

export default BoardPhoto;
