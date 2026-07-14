import Image, { StaticImageData } from "next/image";

interface BoardCardProps {
  image: StaticImageData;
  position: string;
  name: string;
}

const BoardCard = ({ image, position, name }: BoardCardProps) => {
  return (
    <div className="font-aep-unna flex w-40 flex-col items-center border text-center text-lg shadow-lg">
      <div className="h-32 w-32 overflow-hidden pt-8 pb-6">
        <Image
          src={image}
          alt={name}
          className="h-full w-full scale-140 object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 pb-4 font-semibold">
        <p>{name}</p>
        <p className="text-sm">{position}</p>
      </div>
    </div>
  );
};

export default BoardCard;
