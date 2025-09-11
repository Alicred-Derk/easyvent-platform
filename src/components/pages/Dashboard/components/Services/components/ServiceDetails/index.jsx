import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Edit3, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { getServiceData } from "../../../../../../../api/services";
import Details from "./Details";
import Bookings from "./Bookings";


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
            <img className="w-full h-full" src={`${import.meta.env.VITE_API_URL}/uploads/${selectedUrl}`} />
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
                      <img className="w-full h-full" src={`${import.meta.env.VITE_API_URL}/uploads/${item}`} />
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

        <Tabs defaultValue="details">
          <TabsList>
            <TabsTrigger value="details">Event Details</TabsTrigger>
            <TabsTrigger value="bookings">Event Bookings</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <Details
              property_description={property_description}
              amenities={amenities}
              highlights={highlights}
              packages_list={packages_list}
            />
          </TabsContent>
          <TabsContent value="bookings">
            <Bookings service={serviceState} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
};

export default ServiceDetails;