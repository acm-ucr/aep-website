import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import SocialsCard from "./SocialsCard";
import { IconType } from "react-icons";
import Image from "next/image";

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
    <div className="bg-aep-red-100 relative z-0 min-h-screen">
      <Image
        className="absolute z-10 mt-43"
        src="home/mountains.webp"
        alt="error"
        fill
      ></Image>
      <div className="relative z-20 flex justify-center gap-x-24 pt-105">
        {SocialsLinks.map((item, index) => (
          <SocialsCard
            key={index}
            mediaName={item.name}
            url={item.url}
            Icon={item.Icon}
          />
        ))}
      </div>
      <div className="font-aep-urbanist relative z-20 -mt-110 text-center text-5xl font-bold text-white">
        <p>...to enhance, maintain and protect the quality of </p>
        <p>the natural and human environment.</p>
      </div>
    </div>
  );
};

export default Socials;
