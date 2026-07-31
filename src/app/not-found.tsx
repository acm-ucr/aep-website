import Image from "next/image";
import Link from "next/link";
import desert from "@/public/desert.webp";
import desertMobile from "@/public/desertMobile.webp";

const NotFound = () => {
  return (
    <div className="bg-aep-blue-300 relative isolate z-0 flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        className="z-10 mt-30 sm:hidden"
        src={desertMobile}
        alt="error"
        fill
      />
      <Image
        className="z-10 mt-30 hidden sm:block"
        src={desert}
        alt="error"
        fill
      />
      <div className="font-aep-unna absolute -mt-20 flex flex-col items-center justify-center gap-2 sm:gap-3">
        <p className="z-20 text-7xl font-extrabold text-orange-600 [-webkit-text-stroke:1.2px_white] sm:text-8xl sm:[-webkit-text-stroke:1.7px_white] md:text-9xl">
          404
        </p>
        <p className="z-20 text-5xl font-extrabold text-orange-600 [-webkit-text-stroke:1.2px_white] sm:text-7xl sm:[-webkit-text-stroke:1.7px_white] md:text-8xl">
          ERROR
        </p>
        <Link
          href="/"
          className="z-10 mt-6 rounded-3xl bg-orange-950 p-4 text-4xl text-white mix-blend-multiply sm:mt-10 sm:rounded-4xl sm:p-5 sm:text-6xl md:text-8xl"
        >
          HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
