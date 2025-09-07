
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarPlus, CirclePlus, Ellipsis, Funnel, Plus, Search, SlidersHorizontal, Star } from "lucide-react";
import ServiceForm from "./form/ServiceForm";
import ServicesTable from "./components/ServicesTable";

const Services = () => {

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex gap-3">
        <div className="relative w-[20rem]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground -translate-y-1/2 pointer-events-none" />
          <Input 
            type="search" 
            placeholder="Search service by name or ID"
            className="pl-10 pr-3 w-full h-8"
            // onChange={(evt) => setNameFilter(evt.target.value)}
          />
        </div>

        <Button variant="outline" className="h-8"><CirclePlus /> Status</Button>
        
        <Button variant="outline" className="h-8"><CirclePlus /> Category</Button>

        <div className="ml-auto">
          <Button className="h-8 bg-[#183B4E] hover:bg-[#2e5e78]"><CalendarPlus />Create Service</Button>
        </div>
      </div>
      
      <ServicesTable />
    </div>
  )
};

export default Services;