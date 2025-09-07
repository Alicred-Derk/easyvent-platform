import { Button } from "@/components/ui/button";
import PropertyImages from "./components/PropertyImages";
import Packages from "./components/Packages";
import LocationForm from "./components/Location";
import PropertyForm from "./components/PropertyForm";
import HighlightsForm from "./components/HgihlightsForm";
import AmenitiesForm from "./components/AmenitiesForm";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ServiceForm = () => {
  const [formState, setFormState] = useState({});
  const { state = {} } = useLocation();
  const { category, property_details = {}, images_url = [], highlights = [], location = {}, amenities = [], packages_list } = formState;

  useEffect(() => setFormState(state ?? {}), [state]);

  const updateFormState = (fieldName, updatedState) => {
    setFormState((prev) => ({ ...prev, [fieldName]: updatedState }));
  }

  const createService = async (status) => {
    const formData = new FormData();
    const { property_name = "", property_description = "" } = property_details;
    const files = []
    const urls = [];

    images_url.forEach((item) => {
      if (typeof item === "string") return urls.push(item);

      if (typeof item === "object") return files.push(item);
    });

    console.log("File", files, images_url);

    if (files.length > 0) {
      const uploadForm = new FormData();

      files.forEach((file) => uploadForm.append("images[]", file))

      const res = await fetch('http://localhost/ems-platform/services/upload_images.php', {
        method: 'POST',
        body: uploadForm,
      });

      const json = await res.json();

      if (json.files)  {
        urls.push(...json.files);
      }
    }

    formData.append("category", category);
    formData.append("status", status);
    formData.append("property_name", property_name);
    formData.append("property_description", property_description);
    formData.append("images_url", JSON.stringify(urls));
    formData.append("highlights", JSON.stringify(highlights));
    formData.append("amenities", JSON.stringify(amenities));
    formData.append("location", JSON.stringify(location));
    
    
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
          <Button type="button" onClick={() => createService("Publish")}>Publish</Button>
        </div>
      </div>

      <div className="flex gap-5 py-3">
        <div className="w-[60%] flex flex-col gap-5">
          <PropertyForm defaultValues={property_details} updateFormState={updateFormState} />

          <PropertyImages defaultValues={images_url} updateFormState={updateFormState} />

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