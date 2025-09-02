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
import { useState } from "react";
import NearByMap from "./components/NearyByMap";

const getTime = (date) => (new Date(date)).getTime();

const hotels = [
  {
    name: "Hue Hotels and Resorts Puerto Princesa",
    image: Hotel1,
    liked: true,
    location: "Brgy. San Pedro, Puerto Princesa, Palawan",
    price: 4500,
    rate: 4,
    pax: 10,
    date_availability: ["2025-09-10", "2025-09-15"],
    geocode: [9.7654703,118.7454311],
  },
  {
    name: "Pricesa Garden Island resort & Spa",
    image: Hotel2,
    liked: true,
    location: "Brgy. Sta Monica, Puerto Princesa, Palawan",
    price: 8500,
    rate: 2,
    pax: 15,
    date_availability: ["2025-09-05", "2025-09-10"],
    geocode: [9.7955289,118.7341833],
  },
  {
    name: "Citystate Asturias Hotel Palawan",
    image: Hotel3,
    location: "Brgy. Lio, El Nido, Palawan",
    price: 4000,
    rate: 5,
    pax: 5,
    date_availability: ["2025-09-23", "2025-09-29"],
    geocode: [11.1739928,119.4205109],
  },
  {
    name: "Ponce De Leon Garden Resort",
    image: Hotel4,
    location: "Brgy. Mangingisda, Puerto Princesa, Palawan",
    price: 40500,
    rate: 5,
    pax: 65,
    date_availability: ["2025-09-13", "2025-09-15"],
    geocode: [9.6796805,118.7510964],
  },
  {
    name: "Ivy Wall Hotel",
    image: Hotel5,
    liked: true,
    price: 2000,
    location: "Brgy. Sicsican, Puerto Princesa, Palawan",
    rate: 3,
    pax: 5,
    date_availability: ["2025-10-05", "2025-09-28"],
    geocode: [9.794839,118.7132215],
  },
];

const filterList = (list, searchState) => {
  const filteredList = [];
   const { date_range = {}, location = "", pax = "", time, budget_range } = searchState;

  if (!date_range?.to && !location && !pax && !budget_range) return list;

  list.forEach((item) => {
   let searchPoints = 0;
   
   const [minPax, maxPax] = pax.split("-") || [0, 0];

   if (location && item.location.toLowerCase().includes(location.toLowerCase())) searchPoints += 1;

   if (item.pax >= minPax && item.pax <= maxPax) searchPoints += 1;

    if (date_range.from && date_range.to && item.date_availability.some((avail) => {
      const startDate = date_range.from.getTime();
      const endDate = date_range.to.getTime();

      const availTime = getTime(avail);

      return availTime >= startDate && availTime <= endDate;
    })) searchPoints += 1;

    
    if (budget_range) {
      const [minBudget, maxBudget] = budget_range;

      searchPoints += item.price >= minBudget && item.price <= maxBudget ? 1 : 0;
    }

    if (searchPoints === 0) return;

    filteredList.push({...item, searchPoints });
  });

  filteredList.sort((a, b) => b.searchPoints - a.searchPoints);

  return filteredList;
};

const sortList = (list, sortBy) => {
  const copy = [...list];

  copy.sort((a, b) => {
    if (sortBy === "price") return a[sortBy] - b[sortBy];

    return b[sortBy] - a[sortBy]
  });

  console.log("Sorted", copy, sortBy, copy.sort((item) => item.price - item.price))

  return copy;
}

const SearchPage = () => {
  const [searchState, setSearchState] = useState({
    location: "",
    date_range: {},
    time: "",
    pax: ""
  });

  const [sortBy, setSortBy] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  const [mapEnabled, setMapEnabled] = useState();

  const filteredList = filterList(hotels, searchState).filter(item => item.name.toLowerCase().includes(nameFilter.toLowerCase()));

  const sortedList = sortBy ? sortList(filteredList, sortBy) : filteredList;

  return (
    <div className="w-[100vw] h-[100vh] overflow-y-auto overflow-x-hidden relative">
      <NavigationMenu />
      
      <SearchSection setSearchState={setSearchState} sortBy={sortBy} setSortBy={setSortBy} />
      <div className="flex gap-[2rem] px-2 md:px-[10rem]">
        <EventCards list={[...sortedList]} />

        <Filters setNameFilter={setNameFilter} setMapEnabled={setMapEnabled} eventList={sortedList} setSearchState={setSearchState} />
      </div>
      <FooterSection />

      {mapEnabled && (
        <div onClick={() => setMapEnabled(false)} className="fixed top-0 left-0 w-[100vw] h-[100vh] px-[10rem] py-10 bg-[#000000AA] backdrop-blur-xs z-[1000]">
          <div onClick={(event) => event.stopPropagation()} className="h-full">
            <NearByMap eventList={sortedList} />
          </div>
        </div>)}
    </div>
  )
};

export default SearchPage;