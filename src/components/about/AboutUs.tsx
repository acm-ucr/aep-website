import Image from "next/image";
import GroupPhoto from "@/public/About/GroupPhoto.webp";
import Sand from "@/public/About/sand.webp";

const AboutUs = () => {
  return (
    <section className="from-aep-blue-100 to-aep-blue-400 relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-br">
      <div className="mx-auto flex w-full max-w-6xl flex-1 items-start justify-between gap-8 px-6 pt-20 md:gap-12 md:px-10 md:pt-28">
        <div className="max-w-xl">
          <h1 className="font-aep-unna text-6xl font-bold text-black md:text-7xl">
            About Us
          </h1>
          <p className="font-aep-urbanist mt-6 text-xl text-black md:text-2xl">
            AEP empowers students to expand their knowledge, gain real-world
            insights, and take meaningful steps toward impactful environmental
            careers.
          </p>
        </div>
        <div className="relative aspect-square w-2/5 max-w-sm shrink-0 overflow-hidden rounded-full">
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
    </section>
  );
};

export default AboutUs;
