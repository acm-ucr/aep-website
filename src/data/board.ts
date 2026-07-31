import type { StaticImageData } from "next/image";
import Board1 from "@/public/Board/Rohan Vig - 25-26 President - Junior - Environmental Sciences & Public Policy.webp";
import Board2 from "@/public/Board/Jasmine Lai - 25-26 Vice President - Senior - Environmental Engineering_.webp";
import Board3 from "@/public/Board/Skaila Sirdeshpande - 25-26 Secretary - Sophmore - Environmental Sciences.webp";
import Board4 from "@/public/Board/Matisse Rios - 25-26 Treasurer - Junior - Environmental Engineering.webp";
import Board5 from "@/public/Board/Rahma Ahmed - 25-26 Director of Events - Junior - Environmental Sciences.webp";
import Board6 from "@/public/Board/Barbara Nieves - 25-26 Director of Marketing - Junior - Environmental Sciences.webp";
import Board7 from "@/public/Board/Sachi Bhanji - 25-26 Director of Membership - Junior - Environmental Sciences.webp";
import Board8 from "@/public/Board/Keanny Jimenez - 25-26 Co-Director of Outreach - Senior - Environmental Sciences.webp";
import Board9 from "@/public/Board/Shawn Felisilda - 25-26 Co Director of Outreach - Senior Environmental Engineering.webp";

interface BoardProp {
  image: StaticImageData;
  position: string;
  name: string;
}

export const BoardProps: BoardProp[] = [
  {
    image: Board1,
    position: "President",
    name: "Rohan Vig",
  },
  {
    image: Board2,
    position: "Vice President",
    name: "Jasmine Lai",
  },
  {
    image: Board3,
    position: "Secretary",
    name: "Skaila Sirdeshpande",
  },
  {
    image: Board4,
    position: "Treasurer",
    name: "Matisse Rios",
  },
  {
    image: Board5,
    position: "Director of Events",
    name: "Rahma Ahmed",
  },
  {
    image: Board6,
    position: "Director of Marketing",
    name: "Barbara Nieves",
  },
  {
    image: Board7,
    position: "Director of Membership",
    name: "Sachi Bhanji",
  },
  {
    image: Board8,
    position: "Director of Outreach",
    name: "Keanny Jimenez",
  },
  {
    image: Board9,
    position: "Director of Outreach",
    name: "Shawn Felisilda",
  },
];
