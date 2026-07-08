import React from "react";
import Image from "next/image";
import { IconType } from "react-icons";
import { SiLinktree } from "react-icons/si";

interface FooterLink {
  name: string;
  href: string;
  Icon: IconType;
}

const footerLinks: FooterLink[] = [
  {
    name: "Linktree",
    href: "https://linktr.ee/aepucr",
    Icon: SiLinktree,
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-transparent">
      <Image
        src="/Footer.webp"
        alt="AEP UCR Inland Empire Chapter Footer"
        width={1444}
        height={636}
        priority
        className="block h-auto w-full"
      />

      <div className="absolute right-[3%] bottom-[3%] z-20 flex gap-6">
        {footerLinks.map((link) => {
          const { Icon } = link;
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-white"
            >
              <Icon className="h-10 w-10 md:h-25 md:w-25" />
              <span className="text-1xl font-aep-urbanist mt-1 font-bold md:text-5xl">
                {link.name}
              </span>
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
