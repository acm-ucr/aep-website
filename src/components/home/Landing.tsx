import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-20">
      <p className="font-aep-urbanist max-w-6xl px-1 py-2 text-center text-4xl font-light text-black md:px-2 md:py-4 md:text-6xl md:font-medium">
        Preparing the next generation of environmental professionals through
        events, mentorship, and community engagement
      </p>

      <div className="flex gap-12">
        <Link
          href="/about"
          className="bg-aep-green-200 flex h-[75px] w-[275px] items-center justify-center rounded-2xl px-1 py-2 text-[50px] font-normal text-black drop-shadow-lg transition hover:brightness-95 md:h-[150px] md:w-[350px] md:rounded-4xl md:px-2 md:py-4 md:text-[70px]"
        >
          About
        </Link>

        <Link
          href="/join"
          className="bg-aep-green-200 flex h-[75px] w-[275px] items-center justify-center rounded-2xl px-1 py-2 text-[50px] font-normal text-black drop-shadow-lg transition hover:brightness-95 md:h-[150px] md:w-[350px] md:rounded-4xl md:px-2 md:py-4 md:text-[70px]"
        >
          Join
        </Link>
      </div>
    </div>
  );
};

export default Landing;
