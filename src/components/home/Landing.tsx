import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex flex-col items-center gap-10 bg-gradient-to-b from-[#A9D6FF] to-[#D8B8B7] py-20">
      <p className="font-aep-urbanist max-w-[1069px] px-2 py-4 text-center text-[55px] font-medium text-black">
        Preparing the next generation of environmental professionals through
        events, mentorship, and community engagement
      </p>

      <div className="flex gap-10">
        <Link
          href="/about"
          className="bg-aep-green-200 flex h-[150px] w-[350px] items-center justify-center rounded-[39px] px-2 py-4 text-[70px] font-normal text-black transition hover:brightness-95"
        >
          About
        </Link>

        <Link
          href="/join"
          className="bg-aep-green-200 flex h-[150px] w-[350px] items-center justify-center rounded-[39px] px-2 py-4 text-[70px] font-normal text-black transition hover:brightness-95"
        >
          Join
        </Link>
      </div>
    </div>
  );
};

export default Landing;
