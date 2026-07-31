import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-aep-blue-300 relative isolate z-0 flex min-h-screen items-center justify-center overflow-hidden">
      <Image className="z-10 mt-30" src="/desert.webp" alt="error" fill></Image>
      <div className="font-aep-unna absolute -mt-20 flex flex-col items-center justify-center gap-3">
        <p className="z-20 text-9xl font-extrabold text-orange-600 [-webkit-text-stroke:1.7px_white]">
          404
        </p>
        <p className="z-20 text-8xl font-extrabold text-orange-600 [-webkit-text-stroke:1.7px_white]">
          ERROR
        </p>
        <Link
          href="/"
          className="z-10 mt-10 rounded-4xl bg-orange-950 p-5 text-8xl text-white mix-blend-multiply"
        >
          HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
