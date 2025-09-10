import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Circle, Edit, Edit2, Edit3, MapPin, PhilippinePeso, Users } from "lucide-react";
import { formatCurrencyWithoutSymbol } from "../../../../../../../api/util";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getServiceData } from "../../../../../../../api/services";

const ServiceDetails = () => {
  const { state = {} } = useLocation();
  const navigate = useNavigate();
  const [serviceState, setServiceState] = useState({});

  const [selectedImageIndx, setSelectedImageIndx] = useState(0);

  const {
    property_name,
    property_description,
    status,
    location = {},
    highlights = [],
    amenities = [],
    packages_list = [],
    images_url = [],
  } = serviceState;

  const { province, city, barangay, street, building_no, zip_code } = location;

  console.log()

  const initiateServiceData = async (id) => {
    const data = await getServiceData(id);

    setServiceState(data);
  }

  const editService = () => {
    navigate("/dashboard/services/form", { state: { ...serviceState }});
  };

  useEffect(() => {
    if (!state?.id) {
      navigate("/dashboard/services");
      return;
    }

    initiateServiceData(state.id);
  }, [state]);

  const formattedLocation = ["Philippines", province, city, barangay, street, building_no].filter(Boolean).join(", ");
  const selectedUrl = images_url[selectedImageIndx];

  
  return (
    <div className="flex relative px-5">
      <div className="w-[35%]">
        <div className="sticky top-25">
          <Card className="py-0 bg-gray-400 h-[18rem] rounded-md overflow-hidden">
          <CardContent className="px-0 h-full">
            <img className="w-full h-full" src={`https://easyvent.iceiy.com/ems-platform/uploads/${selectedUrl}`} />
          </CardContent>
        </Card>

        <Carousel
            opts={{
              align: "start",
            }}
            className="w-[100%] py-4"
          >
            <CarouselContent>
              {images_url.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="py-0 bg-gray-400 h-[8rem] rounded-md overflow-hidden" onClick={() => setSelectedImageIndx(index)}>
                    <CardContent className="px-0 h-full">
                      <img className="w-full h-full" src={`https://easyvent.iceiy.com/ems-platform/uploads/${item}`} />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className="w-[65%] px-5">
        <div className="flex justify-between mb-4">
          <div className="flex flex-col justify-between">
            <p className="font-title font-bold text-[2rem] mb-2">{property_name}</p>
            <div className="flex items-center gap-2">
              <MapPin size={18} /> {formattedLocation} {zip_code}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button onClick={editService} className="bg-[#183B4E] hover:bg-[#2e5e78]"><Edit3 /> Edit Service</Button>
          </div>
        </div>

        <Card className="rounded-lg mb-5">
          <CardContent>
            <p className="font-semibold mb-3">
              Description
            </p>

            <p className="text-gray-500 mb-6">
              {property_description}
            </p>

            
            <div className="flex gap-10">
              <div className={amenities.length > 0 ? "w-[50%]" : ""}>
                <p className="font-semibold mb-3">
                  Key Highlights
                </p>

                <ul>
                  {highlights.map((item) => (
                    <li key={item.title}>
                      <p className="mb-2 flex gap-2">
                        <span className="pt-[0.375rem]"><Circle fill="#183B4E" size={12} /></span>
                        <span>
                          <span className="font-semibold text-[#183B4E]">{item.title}</span> - {item.description}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {amenities.length > 0 && (
                <div className="w-[50%]">
                  <p className="font-semibold mb-3">
                    Amenities
                  </p>

                  <ul>
                    {amenities.map((item) => (
                      <li key={item}>
                        <p className="mb-2 flex gap-2">
                          <span className="pt-[0.375rem]"><Circle fill="#183B4E" size={12} /></span>
                          <span>
                            {item}
                          </span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>


          </CardContent>
        </Card>

        <Card className="rounded-lg mb-5">
          <CardContent>
            <p className="font-semibold mb-3">
              Packages
            </p>

            <div className="grid grid-cols-2">
              {packages_list.map((packageItem, index) => (
                <div onClick={() => setSelectedPackage({ ...packageItem, index })} className="py-2 rounded-sm mb-4">
                  <div className="font-semibold mb-1">
                    {packageItem.package_name}
                  </div>
                  <div className="flex gap-10 mb-5">
                    <p className="text-[0.9rem] text-gray-500 flex items-center gap-2"><PhilippinePeso size={15} /> {formatCurrencyWithoutSymbol("en-US", "PHP", packageItem.price)}</p>
                    <p className="text-[0.9rem] text-gray-500 flex items-center gap-2"><Users size={15} /> {packageItem.no_guest} Guests</p>
                  </div>

                  <p>Inclusions:</p>
                  <ul className="mb-5">
                    {packageItem.inclusions.map((inclusion) => (
                      <li className="decoration" key={inclusion}>
                        <div className="flex pl-3 gap-2 items-center">
                          <Circle size={9} fill="#183B4E" /> {inclusion}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <p>Meal Sets:</p>
                  <ul>
                    {packageItem.meal_sets.map(({ title = "", meals = [] }) => (
                      <li className="decoration" key={title}>
                        <div className="flex pl-3 gap-2 items-center">
                          <Circle size={9} fill="#183B4E" /> {title}
                        </div>

                        <ul>
                          {meals.map((mealItem) => (
                            <li key={mealItem}>
                              <div className="flex pl-6 gap-2 items-center">
                                <Circle size={9} /> {mealItem}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
};

export default ServiceDetails;