import Link from "next/link";
import Image from "next/image";
import AEPLogo from "@/public/Logo.webp";

const Navbar = () => {
  return (
    <div className="fixed z-50 flex h-25 w-full font-aep-urbanist items-center">
      <div className="flex flex-1 items-center p-4">
        <Image src={AEPLogo} alt="AEP Logo" className="ml-6 size-15" />
        <p className="ml-6 text-4xl font-extrabold whitespace-nowrap text-black">
          AEP
        </p>
      </div>
      <nav className="flex items-center gap-10 pr-8 text-2xl font-bold text-black">
        <Link href="#">About</Link>
        <Link href="#">Board</Link>
        <Link href="#">Events</Link>
        <Link href="#">Join</Link>
      </nav>
    </div>
  );
};

export default Navbar;
