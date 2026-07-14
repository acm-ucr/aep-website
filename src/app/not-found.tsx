import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-aep-blue-300 relative z-0 flex min-h-screen items-center justify-center overflow-hidden">
      <Image className="z-10 mt-30" src="/desert.webp" alt="error" fill></Image>
      <p className="font-aep-unna absolute top-35 z-20 text-9xl font-extrabold text-orange-600 [-webkit-text-stroke:1.7px_white]">
        404
      </p>
      <p className="font-aep-unna absolute top-70 z-20 text-8xl font-extrabold text-orange-600 [-webkit-text-stroke:1.7px_white]">
        ERROR
      </p>
      <Link
        href="/"
        className="font-aep-unna absolute top-110 z-30 rounded-4xl bg-orange-950 p-5 text-8xl text-white mix-blend-multiply"
      >
        HOME
      </Link>
    </div>
  );
};

export default NotFound;
