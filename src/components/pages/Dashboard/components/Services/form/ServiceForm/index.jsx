import { Button } from "@/components/ui/button";
import PropertyImages from "./components/PropertyImages";
import Packages from "./components/Packages";
import LocationForm from "./components/Location";
import PropertyForm from "./components/PropertyForm";
import HighlightsForm from "./components/HgihlightsForm";
import AmenitiesForm from "./components/AmenitiesForm";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IndependentForm from "./components/IndependentForm";

const ServiceForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { state = {} } = useLocation();
  const {
    id,
    status,
    category,
    property_details = {},
    images_url = [],
    highlights = [],
    location = {},
    amenities = [],
    packages_list = [],
    independent_locations = [],
    independent_packages = [],
  } = formState;

  useEffect(() => {
    if (!state) return;

    const newState = {
      ...state,
      property_details: {
        skills: state.skills,
        experiences: state.experiences,
        property_name: state.property_name,
        property_description: state.property_description,
      }
    }
    setFormState(newState ?? {})
  }, [state]);

  console.log("Form State [123123]", formState, amenities);

  const updateFormState = (fieldName, updatedState) => {
    setFormState((prev) => ({ ...prev, [fieldName]: updatedState }));
  }

  const setupFormData = async (status) => {
    const formData = new FormData();
    const { property_name = "", property_description = "", skills = [], experiences = [] } = property_details;
    const files = []
    const urls = [];

    images_url.forEach((item) => {
      if (typeof item === "string") return urls.push(item);

      if (typeof item === "object") return files.push(item);
    });
    if (files.length > 0) {
      const uploadForm = new FormData();

      files.forEach((file) => uploadForm.append("images[]", file))

      const res = await fetch(`${import.meta.env.VITE_API_URL}/services/upload_images.php`, {
        method: 'POST',
        body: uploadForm,
      });

      const json = await res.json();

      if (json.files)  {
        urls.push(...json.files);
      }
    }

    const userData = localStorage.getItem("user-data");
    const parsedUserData = JSON.parse(userData);

    if (id) formData.append("id", id);

    formData.append("userId", parsedUserData.id);

    formData.append("category", category);
    formData.append("status", status);
    formData.append("property_name", property_name);
    formData.append("property_description", property_description);
    formData.append("images_url", JSON.stringify(urls ?? []));
    formData.append("highlights", JSON.stringify(highlights ?? []));
    formData.append("amenities", JSON.stringify(amenities ?? []));
    formData.append("location", JSON.stringify(location ?? {}));
    formData.append("packages_list", JSON.stringify(packages_list));

    
    formData.append("skills", JSON.stringify(skills ?? []));
    formData.append("experiences", JSON.stringify(experiences ?? []));
    formData.append("independent_locations", JSON.stringify(independent_locations ?? []));

    return formData;
  }

  const createService = async (status) => {
    setIsLoading(true);
    const formData = await setupFormData(status);

    const res = await fetch(`${import.meta.env.VITE_API_URL}/services/create.php`, {
      method: 'POST',
      body: formData,
    });

    const json = await res.json();

    if (json.error)  {
      
    }

    if (json.data) {
      navigate("/dashboard/services/details", { state: { id: json.data.id }})
    }
    
  }

  const updateService = async (status) => {
    setIsLoading(true);
    const formData = await setupFormData(status);
    
    const res = await fetch(`${import.meta.env.VITE_API_URL}/services/update.php`, {
      method: 'POST',
      body: formData,
    });

    const json = await res.json();

    if (json.error)  {
      
    }

    if (json.data) {
      navigate("/dashboard/services/details", { state: { id: json.data.id }})
    }
  };

  const handlePublish = () => {
    if (id) {
      updateService("Published");
    } else {
      createService("Published");
    }
  }

  const handleDraft = () => {
    if (id) {
      updateService("Draft");
    } else {
      createService("Draft");
    }
  }

  const handleDeactivate = () => {
    if (id) {
      updateService("Deactivated");
    } else {
      createService("Deactivated");
    }
  }

  console.log("Current Form State", formState);

  return (
    <div className="px-5">
      <div className="flex items-center justify-between">
        <p className="font-poppins font-bold text-[1.5rem]">
          {category} Form
        </p>

        <div className="flex gap-2 items-center">
          {(!id || status === "Draft") && <Button disabled={isLoading} variant="outline" type="button" onClick={handleDraft}>Save as Draft</Button>}
          {status === "Published" && <Button disabled={isLoading} variant="outline" type="button" onClick={handleDeactivate}>Deactivate</Button>}
          <Button disabled={isLoading} type="button" className="bg-[#183B4E] hover:bg-[#2e5e78]" onClick={handlePublish}>Publish Service</Button>
        </div>
      </div>

      {category !== "Independent Provider" && (
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
      )}

      {category === "Independent Provider" && (
        <IndependentForm formState={formState} updateFormState={updateFormState} />
      )}
    </div>
  )
};

export default ServiceForm;