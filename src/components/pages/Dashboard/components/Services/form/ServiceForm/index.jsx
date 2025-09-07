import { Button } from "@/components/ui/button";
import PropertyImages from "./components/PropertyImages";
import Packages from "./components/Packages";
import LocationForm from "./components/Location";
import PropertyForm from "./components/PropertyForm";
import HighlightsForm from "./components/HgihlightsForm";
import AmenitiesForm from "./components/AmenitiesForm";

import { useState } from "react";

const ServiceForm = () => {
  const [formState, setFormState] = useState({});
  const { property_details = {}, images = [], highlights = [], location = {}, amenities = [], packages_list } = formState;

  const updateFormState = (fieldName, updatedState) => {
    setFormState((prev) => ({ ...prev, [fieldName]: updatedState }));
  }

  console.log("Current Form State", formState);

  return (
    <div className="px-5">
      <div className="flex items-center justify-between">
        <p className="font-poppins font-bold text-[1.5rem]">
          Venue Form
        </p>

        <div className="flex gap-2 items-center">
          <Button variant="outline" className="bg-gray-300">Discard</Button>
          <Button variant="outline">Save as Draft</Button>
          <Button>Publish</Button>
        </div>
      </div>

      <div className="flex gap-5 py-3">
        <div className="w-[60%] flex flex-col gap-5">
          <PropertyForm defaultValues={property_details} updateFormState={updateFormState} />

          <PropertyImages defaultValues={images} updateFormState={updateFormState} />

          <HighlightsForm defaultValues={highlights} updateFormState={updateFormState} />
        </div>
        <div className="w-[40%] flex flex-col gap-5">
          <LocationForm defaultValues={location} updateFormState={updateFormState} />

          <AmenitiesForm defaultValues={amenities} updateFormState={updateFormState} />

          <Packages defaultValues={packages_list} updateFormState={updateFormState} />
        </div>
      </div>
    </div>
  )
};

export default ServiceForm;