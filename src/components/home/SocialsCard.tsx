import Link from "next/link";
import { IconType } from "react-icons";
interface SocialsCard {
  mediaName: string;
  url: string;
  Icon: IconType;
}

const SocialsCard = ({ mediaName, url, Icon }: SocialsCard) => {
  return (
    <Link href={url} className="flex h-1/12 w-2/12 flex-col justify-center">
      <div className="flex items-center">
        <Icon className="text-aep-green-200 h-full w-full" />
      </div>
      <div className="text-aep-yellow-100 py-2 text-center text-sm font-bold md:text-4xl">
        {mediaName}
      </div>
    </Link>
  );
};

export default SocialsCard;
