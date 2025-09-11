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
import { useEffect, useState } from "react";
import { formatCurrency } from "../../../../../../../../api/util";

const Bookings = ({ service = {} }) => {
  const [bookingList, setBookingList] = useState([]);

  const fetchBookingList = () => {
    if (!service.id) return;
    const formData = new FormData();

    formData.append("serviceId", service.id);

    fetch(`${import.meta.env.VITE_API_URL}/booking/serviceBooking.php`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(({ data = {} }) => {
        const { bookings = [] } = data;

        const parsedBookings = bookings.map((item) => ({
          ...item,
          package_item: JSON.parse(item.package_item ?? "{}"),
        }));

        setBookingList(parsedBookings);
      })
      .catch((error) => {
        toast("Something Went Wrong!", { description: error.message });
      })
  }
  
  useEffect(() => {
    fetchBookingList();
  }, []);
  return (
    <Card className="p-0 rounded-md">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="text-gray-400">
              <TableHead className="w-[150px] px-5 py-3 text-gray-500">Customer</TableHead>
              <TableHead className="text-gray-500">Package</TableHead>
              <TableHead className="text-gray-500">Date</TableHead>
              <TableHead className="px-5 py-3 text-gray-500">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookingList.map((booking) => (
              <TableRow key={booking.invoice}>
                <TableCell className="font-medium px-5 py-2">
                  <div className="w-[90%] overflow-hidden text-ellipsis">
                    {[booking.personal_name, booking.last_name].filter(Boolean).join(" ")}
                  </div>
                </TableCell>
                <TableCell>{booking.package_item?.package_name}</TableCell>
                <TableCell>YYYY/MM/DD HH:MM</TableCell>
                <TableCell className="px-5 py-2">
                  <div className="flex items-center justify-between">
                    <span>{booking.status}</span>


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
};

export default Bookings;