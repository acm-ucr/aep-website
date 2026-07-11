import { StaticImageData } from "next/image";
import gallery1 from "@/public/Home/Gallery1.webp";
import gallery2 from "@/public/Home/Gallery2.webp";
import gallery3 from "@/public/Home/Gallery3.webp";
import gallery4 from "@/public/Home/Gallery4.webp";
import gallery5 from "@/public/Home/Gallery5.webp";
import mountains from "@/public/Home/mountains.webp";

interface GalleryItem {
  name: string;
  picture: StaticImageData;
}

export const galleryData: GalleryItem[] = [
  { name: "gallery1", picture: gallery1 },
  { name: "gallery2", picture: gallery2 },
  { name: "gallery3", picture: gallery3 },
  { name: "gallery4", picture: gallery4 },
  { name: "gallery5", picture: gallery5 },
  { name: "mountains", picture: mountains },
];
