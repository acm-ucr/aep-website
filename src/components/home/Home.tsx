import Header from "@/components/Header";
import Landing from "@/components/home/Landing";
import Gallery from "@/components/home/Gallery";
import Socials from "@/components/home/Socials";

const Home = () => {
  return (
    <main className="from-aep-blue-300 to-aep-red-100 bg-gradient-to-b pt-36 md:pt-40">
      <Header />
      <Landing />
      <Gallery />
      <Socials />
    </main>
  );
};

export default Home;
