import { StaticImageData } from "next/image";
import slide1 from "../../public/Images/CarouselImages/1.jpg";
import slide2 from "../../public/Images/CarouselImages/2.jpg";
import slide3 from "../../public/Images/CarouselImages/3.jpg";
import slide4 from "../../public/Images/CarouselImages/4.jpg";
import slide5 from "../../public/Images/CarouselImages/5.jpg";
import slide6 from "../../public/Images/CarouselImages/6.jpg";
import slide7 from "../../public/Images/CarouselImages/7.jpg";
import slide8 from "../../public/Images/CarouselImages/8.jpg";
interface slide {
  id: string;
  imgSrc: StaticImageData;
}
export const SlideData: Array<slide> = [
  {
    id: "1",
    imgSrc: slide1,
  },
  {
    id: "2",
    imgSrc: slide2,
  },
  {
    id: "3",
    imgSrc: slide3,
  },
  {
    id: "4",
    imgSrc: slide4,
  },
  {
    id: "5",
    imgSrc: slide5,
  },
  {
    id: "6",
    imgSrc: slide6,
  },
  {
    id: "7",
    imgSrc: slide7,
  },
  {
    id: "8",
    imgSrc: slide8,
  },
];
