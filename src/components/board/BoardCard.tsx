import Image, { StaticImageData } from "next/image";

interface BoardCardProps {
  image: StaticImageData;
  position: string;
  name: string;
}

const BoardCard = ({ image, position, name }: BoardCardProps) => {
  return (
    <div className="font-aep-unna flex min-h-36 w-20 flex-col items-center border bg-white text-center shadow-2xl sm:min-h-60 sm:w-36 md:min-h-72 md:w-44 lg:min-h-80 lg:w-48">
      <div className="mt-2 h-16 w-16 sm:mt-5 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:mt-6 lg:h-40 lg:w-40">
        <Image src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col px-1 pt-2 text-sm leading-tight sm:text-xl md:text-2xl">
        <p>{name}</p>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default BoardCard;
