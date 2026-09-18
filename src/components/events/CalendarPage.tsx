import Calendar from "./Calendar";
import EventsGallery from "./EventsGallery";
import Image from "next/image";
import Clouds from "@/public/Events/clouds.webp";

const CalendarPage = () => {
  return (
    <div className="bg-aep-blue-500 relative mb-5 pt-20">
      <Image
        src={Clouds}
        className="absolute flex h-full w-full justify-self-center object-cover"
        alt="clouds"
      />
      <div className="relative z-5">
        <div className="font-aep-unna flex justify-self-center p-16 text-7xl text-white">
          Events
        </div>

        <Calendar />

        <EventsGallery />
      </div>
    </div>
  );
};

export default CalendarPage;
