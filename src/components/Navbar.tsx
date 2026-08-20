import Link from "next/link";
import Image from "next/image";
import AEPLogo from "@/public/Logo.webp";

const Navbar = () => {
  return (
    <div className="font-aep-urbanist z-10 flex h-25 w-full items-center">
      <div className="flex flex-1 items-center p-4">
        <Link href="/" className="flex">
          <Image src={AEPLogo} alt="AEP Logo" className="ml-6 size-15" />
        </Link>
        <p className="ml-6 text-4xl font-extrabold whitespace-nowrap text-black">
          AEP
        </p>
      </div>
      <nav className="flex items-center gap-10 pr-8 text-2xl font-bold text-black">
        <Link href="/about">About</Link>
        <Link href="/board">Board</Link>
        <Link href="/events">Events</Link>
        <Link href="/join">Join</Link>
      </nav>
    </div>
  );
};

export default Navbar;
