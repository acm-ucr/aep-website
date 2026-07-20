import Barbara from "@/public/Board/Barbara Nieves - 25-26 Director of Marketing - Junior - Environmental Sciences.webp";
import Jasmine from "@/public/Board/Jasmine Lai - 25-26 Vice President - Senior - Environmental Engineering_.webp";
import Keanny from "@/public/Board/Keanny Jimenez - 25-26 Co-Director of Outreach - Senior - Environmental Sciences.webp";
import Matisse from "@/public/Board/Matisse Rios - 25-26 Treasurer - Junior - Environmental Engineering.webp";
import Rahma from "@/public/Board/Rahma Ahmed - 25-26 Director of Events - Junior - Environmental Sciences.webp";
import Rohan from "@/public/Board/Rohan Vig - 25-26 President - Junior - Environmental Sciences & Public Policy.webp";
import Sachi from "@/public/Board/Sachi Bhanji - 25-26 Director of Membership - Junior - Environmental Sciences.webp";
import Shawn from "@/public/Board/Shawn Felisilda - 25-26 Co Director of Outreach - Senior Environmental Engineering.webp";
import Skaila from "@/public/Board/Skaila Sirdeshpande - 25-26 Secretary - Sophmore - Environmental Sciences.webp";

export const boardImages = {
  Barbara,
  Jasmine,
  Keanny,
  Matisse,
  Rahma,
  Rohan,
  Sachi,
  Shawn,
  Skaila,
};

const board = [
  {
    title: "Executive",
    members: [
      {
        name: "Rohan Vig",
        position: "President",
        image: Rohan,
      },
      {
        name: "Jasmine Lai",
        position: "Vice President",
        image: Jasmine,
      },
      {
        name: "Skaila Sirdeshpande",
        position: "Secretary",
        image: Skaila,
      },
    ],
  },
  {
    title: "Marketing",
    members: [
      {
        name: "Barbara Nieves",
        position: "Director of Marketing",
        image: Barbara,
      },
    ],
  },
  {
    title: "Events",
    members: [
      {
        name: "Rahma Ahmed",
        position: "Director of Events",
        image: Rahma,
      },
    ],
  },
  {
    title: "External Relationships",
    members: [
      {
        name: "Keanny Jimenez",
        position: "Co-Director of Outreach",
        image: Keanny,
      },
      {
        name: "Shawn Felisilda",
        position: "Co-Director of Outreach",
        image: Shawn,
      },
    ],
  },
  {
    title: "Finance and Membership",
    members: [
      {
        name: "Matisse Rios",
        position: "Treasurer",
        image: Matisse,
      },
      {
        name: "Sachi Bhanji",
        position: "Director of Membership",
        image: Sachi,
      },
    ],
  },
];

export default board;
