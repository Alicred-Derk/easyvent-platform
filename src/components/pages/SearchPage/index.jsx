import FooterSection from "../../custom-ui/Footer";
import NavigationMenu from "../../custom-ui/NavigationMenu";
import EventCards from "./components/EventCards";


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
import Filters from "./components/Filters";
import SearchSection from "./components/SearchSection";

const hotels = [
  {
    name: "Hue Hotels and Resorts Puerto Princesa",
    image: Hotel1,
    liked: true,
  },
  {
    name: "Pricesa Garden Island resort & Spa",
    image: Hotel2,
    liked: true,
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
    liked: true,
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

const SearchPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-y-auto overflow-x-hidden relative">
      <NavigationMenu />
      
      <SearchSection />
      <div className="flex gap-[2rem] px-2 md:px-[10rem]">
        <EventCards list={[...hotels, ...restaurants]} />

        <Filters />
      </div>
      <FooterSection />
    </div>
  )
};

export default SearchPage;