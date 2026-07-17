import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import SocialsCard from "./SocialsCard";
import { IconType } from "react-icons";

interface SocialsItem {
  name: string;
  url: string;
  Icon: IconType;
}

export const SocialsLinks: SocialsItem[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/aepucr/?hl=en",
    Icon: RiInstagramFill,
  },
  {
    name: "Email",
    url: "mailto:aepatucr@gmail.com",
    Icon: IoMail,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/company/aepucr/",
    Icon: FaLinkedin,
  },
];

const Socials = () => {
  return (
    <div className="flex justify-center gap-x-24">
      {SocialsLinks.map((item, index) => (
        <SocialsCard
          key={index}
          mediaName={item.name}
          url={item.url}
          Icon={item.Icon}
        />
      ))}
    </div>
  );
};

export default Socials;
