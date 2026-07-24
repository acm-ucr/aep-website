import { StaticImageData } from "next/image";
import event1 from "@/public/Events/Event1.webp";
import event2 from "@/public/Events/Event2.webp";
import event3 from "@/public/Events/Event3.webp";
import event4 from "@/public/Events/Event4.webp";
import event5 from "@/public/Events/Event5.webp";
import Carousel from "../Carousel";

interface EventItem {
  name: string;
  picture: StaticImageData;
}

export const eventsData: EventItem[] = [
  { name: "event1", picture: event1 },
  { name: "event2", picture: event2 },
  { name: "event3", picture: event3 },
  { name: "event4", picture: event4 },
  { name: "event5", picture: event5 },
];

const EventsGallery = () => {
  return (
    <div className="flex justify-center">
      <Carousel data={eventsData} />
    </div>
  );
};

export default EventsGallery;
