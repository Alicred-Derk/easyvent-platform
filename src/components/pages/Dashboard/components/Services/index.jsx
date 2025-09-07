import { Card, CardContent } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarPlus, CirclePlus, Ellipsis, Funnel, Plus, Search, SlidersHorizontal, Star } from "lucide-react";
import ServiceForm from "./form/ServiceForm";

const services = [
  {
    invoice: "Servc001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "Servc002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "Servc003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "Servc004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "Servc005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "Servc006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "Servc007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

const Services = () => {
  if (1 === 1) {
    return <ServiceForm />
  }

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
      <Card className="p-0 rounded-md">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="text-gray-400">
                <TableHead className="w-[150px] px-5 py-3 text-gray-500">Record ID</TableHead>
                <TableHead className="w-[200px] text-gray-500">Name</TableHead>
                <TableHead className="text-gray-500">Category</TableHead>
                <TableHead className="text-gray-500">Price Range</TableHead>
                <TableHead className="text-gray-500">Rating</TableHead>
                <TableHead className="px-5 py-3 text-gray-500">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.invoice}>
                  <TableCell className="font-medium px-5 py-2">{service.invoice}</TableCell>
                  <TableCell>
                    <div className="w-[90%] overflow-hidden text-ellipsis">
                      Hue Hotels and Resorts Puerto Princesa  and Resorts Puerto Princesa
                    </div>
                  </TableCell>
                  <TableCell>Venue</TableCell>
                  <TableCell>{service.totalAmount}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Star fill="#ffb86a" size={16} /> 4.5
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-2">
                    <div className="flex items-center justify-between">
                      {service.paymentStatus} <Button variant="icon"><Ellipsis /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
};

export default Services;