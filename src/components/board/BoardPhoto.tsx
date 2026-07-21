import Image from "next/image";
import Board from "@/public/Board/BoardPhoto.webp";
import Leaf from "@/public/Board/leaf.webp";
import MagnifyingGlass from "@/public/Board/magnifyingGlass.webp";
import Tape from "@/public/Board/tape.webp";

const BoardPhoto = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-aep-urbanist px-2 py-4 text-center text-7xl font-bold text-black">
        2025-2026
      </h1>

      <div className="relative overflow-visible">
        {/* Board Photo */}
        <Image
          src={Board}
          alt="2025-2026 Board Group Photo"
          width={987}
          height={658}
          className="relative z-10"
        />

        {/* Leaf */}
        <Image
          src={Leaf}
          alt="Leaf Decoration"
          width={440}
          height={490}
          className="absolute -top-62 -right-32 z-20"
        />

        {/* Top Left Tape */}
        <Image
          src={Tape}
          alt="Top Left Tape Decoration"
          width={374}
          height={90}
          className="absolute -top-20 -left-35 z-30 rotate-[-20deg] opacity-80"
        />

        {/* Bottom Right Tape */}
        <Image
          src={Tape}
          alt="Bottom Right Tape Decoration"
          width={374}
          height={90}
          className="absolute -right-35 -bottom-25 z-30 rotate-[-25deg] opacity-80"
        />

        {/* Magnifying Glass */}
        <Image
          src={MagnifyingGlass}
          alt="Magnifying Glass Decoration"
          width={416}
          height={507}
          className="<!--top-[320px]--> absolute -bottom-48 -left-52 z-20"
        />
      </div>
    </div>
  );
};

export default BoardPhoto;
