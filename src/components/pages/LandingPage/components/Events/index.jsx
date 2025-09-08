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
import { useMemo, useState } from "react";


const Events = ({ services = [] }) => {
  const [selectedTab, setSelectedTab] = useState("");

  const { hotels = [], restaurants = [], functionHalls = [] } = useMemo(() => {
    const hotelServc = [];
    const restServc = [];
    const funcServc = [];

    services.forEach((service) => {
      const { location, property_name, images_url, category, id } = service;

      const { province, city, barangay, street, zip_code } = location;
      const serviceObj = {
        id,
        name: property_name,
        location: `${[street, barangay, city, province].filter(Boolean).join(", ")} ${zip_code}`,
        image: `https://easyvent.iceiy.com/ems-platform/uploads/${images_url[0]}`
      };

      if (category === "Hotel/Resort") {
        hotelServc.push(serviceObj);
      }

      if (category === "Restaurant") {
        restServc.push(serviceObj);
      }

      if (category === "Function Hall") {
        funcServc.push(serviceObj);
      }
    })

    return { hotels: hotelServc, restaurants: restServc, functionHalls: funcServc };
  }, [services])
  return (
    <div className="px-[1rem] md:px-[10rem]">
      <EventTabs updateEventTab={setSelectedTab} />

      <div className="relative">
        <div className="flex items-center gap-2 absolute top-5 right-0">
          <Button variant="outline"><Banknote /> Price</Button>
          <Button variant="outline"><ChevronsUpDown /> Sort By</Button>
        </div>

        {(!selectedTab || selectedTab === "hotels") && (
          <>
            <p className="font-title font-bold text-[1.3rem] pb-4 pt-5 px-3">Hotels/Resorts</p>
            <Slider list={hotels} />
          </>
        )}

        {(!selectedTab || selectedTab === "restaurants") && (
          <>
            <p className="font-title font-bold text-[1.3rem] pb-4 pt-5 px-3">Restaurants</p>
            <Slider list={restaurants} />
          </>
        )}

        {(!selectedTab || selectedTab === "functionHalls") && (
          <>
            <p className="font-title font-bold text-[1.3rem] pb-4 pt-5 px-3">Function Halls</p>
            <Slider list={functionHalls} />
          </>
        )}
      </div>
    </div>
  )
};

export default Events;