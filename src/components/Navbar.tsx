"use client";
import Link from "next/link";
import Image from "next/image";
import AEPLogo from "@/public/Logo.webp";
import { MenuIcon } from "lucide-react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";

const itemAnimation = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2 },
};

const navbarLinks = [
  { name: "About", href: "/about" },
  { name: "Board", href: "/board" },
  { name: "Events", href: "/events" },
  { name: "Join", href: "/join" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <div className="font-aep-urbanist fixed z-10 flex h-25 w-full items-center border-b-2 bg-white">
      <div className="flex flex-1 items-center p-4">
        <Link href="/" className="flex">
          <Image
            src={AEPLogo}
            alt="AEP Logo"
            className="ml-2 size-12 md:ml-6 md:size-15"
          />
        </Link>
        <p className="ml-4 text-3xl font-extrabold whitespace-nowrap text-black md:ml-6 md:text-4xl">
          AEP
        </p>
      </div>
      <nav className="hidden items-center gap-10 pr-8 text-2xl font-bold text-black md:flex">
        {navbarLinks.map(({ name, href }) => (
          <motion.div key={href} {...itemAnimation}>
            <Link href={href}>{name}</Link>
          </motion.div>
        ))}
      </nav>
      <div className="mr-6 md:hidden">
        {isOpen ? (
          <IoMdClose size={32} onClick={closeMenu} className="cursor-pointer" />
        ) : (
          <MenuIcon
            size={32}
            onClick={handleClick}
            className="cursor-pointer"
          />
        )}
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          <div className="flex flex-col">
            {navbarLinks.map(({ name, href }) => (
              <motion.div key={href} className="w-full" {...itemAnimation}>
                <Link
                  href={href}
                  onClick={closeMenu}
                  className="block w-full py-4 text-center text-xl font-bold text-black hover:bg-gray-100"
                >
                  {name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
