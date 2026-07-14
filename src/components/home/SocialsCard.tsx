import Link from "next/link";
interface SocialsCard {
  mediaName: string;
  url: string;
  Icon: React.ComponentType;
}

const SocialsCard = ({ mediaName, url,Icon }: SocialsCard) => {
  return (
    <Link href={url} className="flex flex-col h-1/12 w-2/12 justify-center">
      <div className="flex items-center">
        <Icon className="text-aep-green-200 w-full h-full"/>
      </div>
      <div className="text-4xl text-center font-bold text-aep-yellow-100 py-2">{mediaName}</div>
    </Link>
  );
};

export default SocialsCard;
