"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const title = "Full Width Variant";

const locations = [
  { value: "r/a", label: "Bashundhara R/A" },
  { value: "bd", label: "Badda" },
  { value: "rm", label: "Rampura" },
  { value: "dm", label: "Dhanmondi" },
  { value: "ut", label: "Uttara" },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="w-50">
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild>
          <Button
            aria-expanded={open}
            className="w-full justify-between bg-yellow-400 border border-yellow-400"
            role="combobox"
            variant="outline">
            {value
              ? locations.find((location) => location.value === value)?.label
              : "Select Location..."}
            <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search Location..." />
            <CommandList>
              <CommandEmpty>No Location found.</CommandEmpty>
              <CommandGroup>
                {locations.map((location) => (
                  <CommandItem
                    key={location.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    value={location.value}>
                    <Check
                      className={cn("mr-2 size-4", value === location.value ? "opacity-100" : "opacity-0")} />
                    {location.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Example;
