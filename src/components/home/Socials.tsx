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
    <div className="relative pb-40 md:pb-72">
      <div className="relative flex min-h-[32rem] flex-col items-center justify-center md:min-h-screen">
        <Image className="object-cover" src={background} alt="socials" fill />
        <div className="font-aep-urbanist relative px-8 pb-8 text-center text-xl font-bold text-white md:px-4 md:pb-45 md:text-5xl">
          <p>
            ...to enhance, maintain and protect the quality of the natural and
            human environment.
          </p>
        </div>

        <div className="relative flex w-full max-w-xs justify-evenly md:max-w-none md:justify-center md:gap-x-24">
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
    </div>
  );
};

export default Socials;
