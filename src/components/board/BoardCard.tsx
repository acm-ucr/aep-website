import Image, { StaticImageData } from "next/image";

interface BoardCardProps {
  image: StaticImageData;
  position: string;
  name: string;
}

const BoardCard = ({ image, position, name }: BoardCardProps) => {
  return (
    <div className="font-aep-unna mt-6 flex w-48 flex-col items-center border bg-white text-center shadow-2xl">
      <div className="mt-6 h-40 w-40">
        <Image src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col pt-2 text-2xl">
        <p>{name}</p>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default BoardCard;
