"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarRangeIcon, ChevronDownIcon } from "lucide-react";

export default function DateRangePicker({ defaultValue, onChange }) {
  const handleChange = (data) => {
    if (onChange) onChange(data);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-9">
          <CalendarRangeIcon />
          {defaultValue?.from && defaultValue.to
            ? `${format(defaultValue.from, "MMM d")} – ${format(defaultValue.to, "MMM d yyyy")}`
            : "Date Range"}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0 overflow-hidden" align="start">
        <Calendar
          mode="range"
          selected={defaultValue}
          onSelect={handleChange}
          captionLayout="dropdown"
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
}
