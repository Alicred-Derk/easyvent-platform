import EventTabs from "../EventTabs";

import { Button } from "@/components/ui/button";
import Slider from "../Slider";

import Hotel1 from "@/assets/images/hotel_1.jpg";
import Hotel2 from "@/assets/images/hotel_2.jpg";
import Hotel3 from "@/assets/images/hotel_3.jpeg";
import Hotel4 from "@/assets/images/hotel_4.jpg";
import Hotel5 from "@/assets/images/hotel_5.jpg";

import Res1 from "@/assets/images/res_1.jpg";
import Res2 from "@/assets/images/res_2.jpg";
import Res3 from "@/assets/images/res_3.png";
import Res4 from "@/assets/images/res_4.jpg";
import Res5 from "@/assets/images/res_5.jpg";
import { Banknote, ChevronsUpDown } from "lucide-react";

const hotels = [
  {
    name: "Hue Hotels and Resorts Puerto Princesa",
    image: Hotel1,
  },
  {
    name: "Pricesa Garden Island resort & Spa",
    image: Hotel2,
  },
  {
    name: "Citystate Asturias Hotel Palawan",
    image: Hotel3,
  },
  {
    name: "Ponce De Leon Garden Resort",
    image: Hotel4,
  },
  {
    name: "Ivy Wall Hotel",
    image: Hotel5,
  },
];

const restaurants = [
  {
    name: "La Terrasse Cafe",
    image: Res1,
  },
  {
    name: "Badjao Seafront",
    image: Res2,
  },
  {
    name: "Kalui Restaurant",
    image: Res3,
  },
  {
    name: "Mc Donald's Palawan Junction",
    image: Res4,
  },
  {
    name: "Tong Yang",
    image: Res5,
  },
]


const Events = () => {
  return (
    <div className="px-[1rem] md:px-[10rem]">
      <EventTabs />

      <div className="flex justify-between items-center pb-4 pt-5 px-3">
        <p className="font-title font-bold text-[1.3rem]">Hotels</p>
        <div className="flex items-center gap-2">
          <Button variant="outline"><Banknote /> Price</Button>
          <Button variant="outline"><ChevronsUpDown /> Sort By</Button>
        </div>
      </div>
      <Slider list={hotels} />

      <p className="font-title font-bold text-[1.3rem] pb-4 pt-5 px-3">Restaurants</p>
      <Slider list={restaurants} />
    </div>
  )
};

export default Events;