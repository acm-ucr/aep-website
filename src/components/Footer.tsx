import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { SiLinktree } from "react-icons/si";
import footerImage from "@/public/Footer.webp";

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
    <div className="relative w-full overflow-hidden bg-transparent">
      <Image
        src={footerImage}
        alt="AEP UCR Inland Empire Chapter Footer"
        priority
        className="block h-auto w-full"
      />

      <div className="absolute right-[3%] bottom-[3%] z-20 flex gap-6">
        {footerLinks.map((link) => {
          const { Icon } = link;
          return (
            <Link
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
