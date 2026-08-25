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
    <div className="bg-aep-sand-500 relative flex flex-col items-center justify-start md:min-h-[170vh]">
      <div className="from-aep-rose-300 via-aep-peach-300 to-aep-yellow-400 absolute inset-x-0 top-0 z-0 h-3/5 bg-gradient-to-b md:h-[66.6%]" />
      <div className="absolute top-72 h-20 w-20 pt-16 md:top-3/10 md:h-50 md:w-50 md:pt-0">
        <Image src={Sun} alt="Sun" fill className="object-contain" />
      </div>

      <div className="absolute inset-0 md:bottom-5">
        <Image
          src={Trees}
          alt="Trees"
          fill
          className="mt-20 object-contain md:mt-0 md:object-bottom"
        />
      </div>

      <div className="relative mt-40 px-4 text-center">
        <h1 className="font-aep-unna text-6xl font-bold text-white md:text-9xl">
          Get Involved
        </h1>
      </div>

      <div className="z-8 flex max-w-7xl flex-col items-center justify-center pt-72 pb-16 pl-10 md:absolute md:inset-x-0 md:bottom-5 md:mx-auto md:flex-row md:justify-evenly md:space-x-20 md:pt-0 md:pb-0 md:pl-0">
        <div className="pointer-events-auto relative mt-8 h-36 w-44 md:mt-0 md:h-120 md:w-120">
          <Link href={JOIN_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Image
              src={LeftSign}
              alt="Join Here Sign"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 -mt-14 mr-4 flex items-center justify-center md:mt-0 md:mr-0 md:pr-4 md:pb-45">
              <span className="font-aep-urbanist text-aep-yellow-500 text-2xl font-bold md:text-8xl">
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
              className="-mt-8 -ml-10 object-contain md:mt-0 md:ml-0"
            />
            <div className="absolute inset-0 -mt-28 mr-16 flex items-center justify-center md:mt-0 md:mr-0 md:pb-45 md:pl-7">
              <span className="font-aep-urbanist text-aep-yellow-500 text-2xl font-bold md:text-8xl">
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
