import Link from "next/link";
interface SocialsCard {
  mediaName: string;
  url: string;
  Icon: React.ComponentType;
}

const SocialsCard = ({ mediaName, url, Icon }: SocialsCard) => {
  return (
    <Link href={url} className="flex h-1/12 w-2/12 flex-col justify-center">
      <div className="flex items-center">
        <Icon className="text-aep-green-200 h-full w-full" />
      </div>
      <div className="text-aep-yellow-100 py-2 text-center text-4xl font-bold">
        {mediaName}
      </div>
    </Link>
  );
};

export default SocialsCard;
