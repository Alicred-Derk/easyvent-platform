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
import { Ellipsis } from "lucide-react";
import { formatCurrency, formatDate } from "../../../../../../../api/util";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const BookingTable = ({ bookingList = [] }) => {
  return (
    <Card className="p-0 rounded-md">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="text-gray-400">
              <TableHead className="w-[150px] px-5 py-3 text-gray-500">Record ID</TableHead>
              <TableHead className="w-[200px] text-gray-500">Service</TableHead>
              <TableHead className="text-gray-500">Package</TableHead>
              <TableHead className="text-gray-500">Price</TableHead>
              <TableHead className="text-gray-500">Date</TableHead>
              <TableHead className="px-5 py-3 text-gray-500">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookingList.map((service) => (
              <TableRow key={service.invoice}>
                <TableCell className="font-medium px-5 py-2">Booking{service.id.toString().padStart(4, "0")}</TableCell>
                <TableCell>
                  <div className="w-[90%] overflow-hidden text-ellipsis">
                    {service.property_name}
                  </div>
                </TableCell>
                <TableCell>{service.package_item?.package_name}</TableCell>
                <TableCell>{formatCurrency(service.package_item?.price)}</TableCell>
                <TableCell>{formatDate(service.created_at)}</TableCell>
                <TableCell className="px-5 py-2">
                  <div className="flex items-center justify-between">
                    <span>{service.status}</span>


                    <Popover align="right">
                      <PopoverTrigger asChild>
                        <Button variant="icon"><Ellipsis /></Button>
                      </PopoverTrigger>
                    </Popover>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default BookingTable;