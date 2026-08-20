import Calendar from "./Calendar";
import EventsGallery from "./EventsGallery";
import Image from "next/image";
import Clouds from "@/public/Events/clouds.webp"

const CalendarPage = () => {
    return (
        <div className="bg-aep-blue-500 relative">
            <Image src={Clouds} className="absolute flex justify-self-center z-0 object-cover w-full h-full" alt="clouds"/>
            <div className="relative z-5">
            <div className="flex justify-self-center text-white text-7xl font-aep-unna p-16">Events</div>
           
            <Calendar />
            
            <EventsGallery />
            </div>
        </div>
    );
};

export default CalendarPage;