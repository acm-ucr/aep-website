import Image from "next/image";
import Link from "next/link";
import Sun from "@/public/Join/sun.webp";
import Trees from "@/public/Join/trees.webp";
import LeftSign from "@/public/Join/leftSign.webp";
import RightSign from "@/public/Join/rightSign.webp";

const Join = () => {
  const JOIN_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLScLaNOrX6TncB4H_PXNqcZXRT0tNYx9cZLtvyr_IfDLSdp1Mg/viewform?pli=1";
  const GROUPME_URL = "https://groupme.com/join_group/109731630/ApjU7A0t";

  return (
    <div className="bg-aep-sand-500 relative flex max-h-screen md:min-h-[170vh] flex-col items-center justify-start">
      <div className="from-aep-rose-300 via-aep-peach-300 to-aep-yellow-400 absolute inset-x-0 top-0 z-0 h-3/5 md:h-[66.6%] bg-gradient-to-b" />
      <div className="absolute top-72 pt-16 md:pt-0 md:top-3/10 z-10 h-20 w-20 md:h-50 md:w-50">
        <Image src={Sun} alt="Sun" fill className="object-contain" />
      </div>

      <div className="absolute inset-0 md:bottom-5">
        <Image
          src={Trees}
          alt="Trees"
          fill
          className="object-contain mt-20 md:mt-0 md:object-bottom"
        />
      </div>

      <div className="relative mt-40 px-4 text-center">
        <h1 className="font-aep-unna text-6xl md:text-9xl font-bold text-white">
          Get Involved
        </h1>
      </div>

      <div className="md:absolute pl-10 md:pl-0 items-center justify-center md:justify-evenly md:inset-x-0 pt-72 md:pt-0 flex flex-col md:flex-row pb-16 md:pb-0 md:bottom-5 z-8 md:mx-auto max-w-7xl md:space-x-20">
        <div className="pointer-events-auto relative mt-8 h-36 w-44 md:mt-0 md:h-120 md:w-120">
          <Link href={JOIN_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Image
              src={LeftSign}
              alt="Join Here Sign"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center mr-4 -mt-14 md:mt-0 md:mr-0 md:pr-4 md:pb-45">
              <span className="font-aep-urbanist text-aep-yellow-500 text-2xl md:text-8xl font-bold">
                Join Here
              </span>
            </div>
          </Link>
        </div>

        <div className="pointer-events-auto relative h-32 w-40 md:h-120 md:w-120">
          <Link href={GROUPME_URL} target="_blank" rel="noopener noreferrer">
            <Image
              src={RightSign}
              alt="GroupMe Sign"
              fill
              className="object-contain -mt-8 -ml-10 md:mt-0 md:ml-0"
            />
            <div className="absolute inset-0 flex items-center justify-center mr-16 -mt-28 md:mt-0 md:mr-0 md:pb-45 md:pl-7">
              <span className="font-aep-urbanist text-aep-yellow-500 text-2xl md:text-8xl font-bold">
                GroupMe
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
