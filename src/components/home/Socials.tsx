import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import SocialsCard from "./SocialsCard";

interface SocialsItem {
  name: string;
  url: string;
  Icon: React.ComponentType<{ className?: string }>;
}

export const SocialsLinks: SocialsItem[] = [
  {
    name: "Instagram",
    url: "",
    Icon: RiInstagramFill,
  },
  {
    name: "Email",
    url: "",
    Icon: IoMail,
  },
  {
    name: "Linkedin",
    url: "",
    Icon: FaLinkedin,
  },
];

const Socials = ({ data }: { data: SocialsItem[] }) => {
  return (
    <div className="flex justify-center gap-x-24">
      {data.map((item, index) => (
        <SocialsCard key={index} mediaName={item.name} url={item.url} Icon={item.Icon} />
      ))}
    </div>
  );
};

export default Socials;
