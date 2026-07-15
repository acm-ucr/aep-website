import Image from "next/image";
import GroupPhoto from "@/public/About/GroupPhoto.webp";
import Sand from "@/public/About/sand.webp";

const AboutUs = () => {
  return (
    <div className="from-aep-blue-100 to-aep-blue-400 relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-br">
      <div className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-between gap-8 px-6 pt-20 md:gap-12 md:px-10 md:pt-28">
        <div className="max-w-xl">
          <div className="font-aep-unna text-7xl font-bold text-black md:text-8xl">
            About Us
          </div>
          <p className="font-aep-urbanist mt-6 text-2xl text-black md:text-3xl">
            AEP empowers students to expand their knowledge, gain real-world
            insights, and take meaningful steps toward impactful environmental
            careers.
          </p>
        </div>
        <div className="relative aspect-square w-1/2 max-w-lg shrink-0 overflow-hidden rounded-full">
          <Image
            src={GroupPhoto}
            alt="AEP club members"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="max-h-[42vh] w-full overflow-hidden">
        <Image src={Sand} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default AboutUs;
