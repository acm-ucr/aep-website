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
    <div className="relative flex min-h-[170vh] flex-col items-center justify-start bg-[#a18866]">
      <div className="absolute inset-x-0 top-0 z-0 h-[66.6%] bg-gradient-to-b from-[#d6969a] via-[#efa281] to-[#f9ee79]" />
      <div className="absolute top-3/10 z-10 h-50 w-50">
        <Image src={Sun} alt="Sun" fill className="object-contain" />
      </div>

      <div className="absolute inset-0 bottom-5 z-20">
        <Image
          src={Trees}
          alt="Trees"
          fill
          className="object-contain object-bottom"
        />
      </div>

      <div className="relative z-40 mt-40 px-4 text-center">
        <h1 className="font-aep-unna text-9xl font-bold text-white">
          Get Involved
        </h1>
      </div>

      <div className="absolute inset-x-0 bottom-5 z-30 mx-auto flex max-w-7xl justify-between">
        <div className="pointer-events-auto relative h-120 w-120">
          <Link href={JOIN_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Image
              src={LeftSign}
              alt="Join Here Sign"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center pr-4 pb-45">
              <span className="font-aep-urbanist text-8xl font-bold text-[#FFDD00]">
                Join Here
              </span>
            </div>
          </Link>
        </div>

        <div className="pointer-events-auto relative h-120 w-120">
          <Link href={GROUPME_URL} target="_blank" rel="noopener noreferrer">
            <Image
              src={RightSign}
              alt="GroupMe Sign"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center pb-45 pl-7">
              <span className="font-aep-urbanist text-8xl font-bold text-[#FFDD00]">
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
