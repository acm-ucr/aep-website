import Image from "next/image";
import AEPLogo from "@/public/Logo.webp";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-25 w-full items-center">
      <div className="flex flex-1 items-center p-4">
        <Image src={AEPLogo} alt="AEP Logo" className="ml-6 size-15" />
        <p className="ml-6 text-4xl font-extrabold whitespace-nowrap text-black">
          AEP
        </p>
      </div>
      <nav className="flex items-center gap-8 pr-8 text-2xl font-bold text-black">
        <a href="#">About</a>
        <a href="#">Board</a>
        <a href="#">Events</a>
        <a href="#">Join</a>
      </nav>
    </div>
  );
};

export default Navbar;
