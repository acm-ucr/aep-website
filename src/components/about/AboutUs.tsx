import Image from "next/image";
import GroupPhoto from "@/public/About/GroupPhoto.webp";
import Sand from "@/public/About/sand.webp";

const AboutUs = () => {
  return (
    <div className="from-aep-blue-100 to-aep-blue-500 relative flex h-auto flex-col overflow-hidden bg-gradient-to-br">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-8 pt-28 md:items-start md:justify-start md:gap-12 md:px-10 md:pt-52 md:text-left">
        <div className="font-aep-unna text-center text-5xl font-bold text-black md:mt-5 md:-mb-32 md:text-7xl lg:-mb-52">
          About Us
        </div>
        <div className="flex items-center pt-5 pb-20 md:space-x-5">
          <p className="font-aep-urbanist pr-1 pl-5 text-lg text-black md:w-full md:pr-0 md:pl-0 md:text-3xl">
            AEP empowers students to expand their knowledge, gain real-world
            insights, and take meaningful steps toward impactful environmental
            careers.
          </p>
          <div className="relative -mt-5 aspect-square w-1/2 max-w-2xl shrink-0 overflow-hidden rounded-full md:mt-5 md:-mr-10 md:h-auto md:w-xl">
            <Image
              src={GroupPhoto}
              alt="AEP club members"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="max-h-[42vh] w-full overflow-hidden md:-mt-14">
        <Image src={Sand} alt="sand" className="w-full" />
      </div>
    </div>
  );
};

export default AboutUs;
