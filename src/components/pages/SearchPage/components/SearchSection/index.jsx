import { Input } from "@/components/ui/input";
import { Bookmark, Clock, MapPin, Users } from "lucide-react";
import DateRangePicker from "@/components/ui/daterangepicker";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";


const SearchSection = () => {
  const [dateRange, setDateRange] = useState();
  return (
    <div className="border-b-1 px-2 md:px-[10rem] py-5">
      <div className="flex gap-5 items-center">
        <div className="relative w-[12rem]">
          <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none" />
          <Input
            type="search" 
            placeholder="Location"
            className="pl-10 pr-3 w-full h-9"
            onChange={(evt) => setNameFilter(evt.target.value)}
          />
        </div>

        <DateRangePicker defaultValue={dateRange} onChange={setDateRange} />

        <div className="relative w-[8rem]">
          <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none" />
          <Input
            type="time"
            placeholder="Location"
            className="pl-10 pr-3 w-full h-9 no-icon"
            onChange={(evt) => setNameFilter(evt.target.value)}
          />
        </div>

        <div className="relative">
          <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none" />
          <Select className="w-[8rem]">
            <SelectTrigger className="w-[12rem] pl-10">
              <SelectValue placeholder="Select a Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Event Type</SelectLabel>
                <SelectItem value="apple">Show All</SelectItem>
                <SelectItem value="banana">Hotels</SelectItem>
                <SelectItem value="blueberry">Restaurants</SelectItem>
                <SelectItem value="grapes">Resort Spas</SelectItem>
                <SelectItem value="pineapple">Service Providers</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button className="bg-[#183B4E]">Search</Button>
      </div>

      <div className="flex gap-5 items-center pt-5">
        <p className="font-bold">Sort by</p>
        <Button className="bg-[#27548a] hover:bg-[#dda853] px-10">Best Match</Button>
        <Button className="bg-[#27548a] hover:bg-[#dda853] px-10">Budget</Button>
        <Button className="bg-[#27548a] hover:bg-[#dda853] px-10">Top Rated</Button>
        <Button className="bg-[#27548a] hover:bg-[#dda853] px-10">Least to Most Expensive</Button>

        <Bookmark fill="#dda853" />
      </div>
    </div>
  )
};

export default SearchSection;