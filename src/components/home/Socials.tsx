import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import SocialsCard from "./SocialsCard";
import { IconType } from "react-icons";
import Image from "next/image";
import background from "../../../public/Home/mountains.webp";

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
    <div className="relative pb-160">
      <div className="min-h-screen">
        <Image
          className="absolute h-auto w-full object-cover"
          src={background}
          alt="socials"
        />
      </div>
      <div className="font-aep-urbanist relative pb-45 text-center text-5xl font-bold text-white">
        <p>...to enhance, maintain and protect the quality of </p>
        <p>the natural and human environment.</p>
      </div>

      <div className="relative flex justify-center gap-x-24">
        {SocialsLinks.map((item, index) => (
          <SocialsCard
            key={index}
            mediaName={item.name}
            url={item.url}
            Icon={item.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Socials;
