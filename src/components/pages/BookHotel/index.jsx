import { Calendar, Circle, Heart, MapPin, Star } from "lucide-react";
import FooterSection from "../../custom-ui/Footer";
import NavigationMenu from "../../custom-ui/NavigationMenu";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import GalleryGrid from "./components/GalleryGrid";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MapLocation from "./components/MapLocation";
import { getServiceData } from "../../../api/services";

const BookHotel = () => {
  const navigate = useNavigate();
  const [mapEnabled, setMapEnabled] = useState(false);
  const { state = {} } = useLocation();
  const [serviceState, setServiceState] = useState({});

  const {
    property_name,
    property_description,
    location = {},
    highlights = [],
    amenities = [],
    packages_list = [],
    images_url = []
  } = serviceState;

  const { province, city, barangay, street, building_no, zip_code, geocode } = location;
  const formattedLocation = [building_no, street, barangay, city, province].filter(Boolean).join(", ");

  console.log("Event Locatin", geocode);

  const urls = images_url.map((item) => `https://easyvent.iceiy.com/ems-platform/uploads/${item}`);

  const initiateServiceData = async (id) => {
    const data = await getServiceData(id);

    setServiceState(data);
  }

  useEffect(() => {
    if (!state || !state.id) {
      navigate("/");

      return;
    }

    initiateServiceData(state.id);
  }, [state])

  return (
    <div className="w-[100vw] h-[100vh] overflow-y-auto overflow-x-hidden relative">
      <NavigationMenu />
        <div className="py-6 px-2 md:px-[10rem]">
          <Card className="rounded-sm">
            <CardContent>
              <GalleryGrid imagesUrl={urls} />

              <div className="flex gap-5">
                <div className="flex flex-col gap-5 w-[70%]">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                      <p className="font-title font-bold text-[1.3rem] text-[#183B4E]">{property_name}</p>
                      <p className="flex gap-2 items-center text-[#27548a]"><MapPin size={14} /> {formattedLocation} {zip_code}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center gap-2 text-orange-300">
                        <Star size={20} />
                        <Star size={20} />
                        <Star size={20} />
                        <Star size={20} />
                        <Star size={20} />
                      </div>
                      <Button variant="outline" className="rounded-full w-[2.3rem] h-[2.3rem] ml-5">
                        <Heart />
                      </Button>
                    </div>
                  </div>

                  <p>
                    {property_description}
                  </p>

                  <Card className="py-4">
                    <CardContent>
                      <p className="font-title text-[#183B4E] text-[1rem] font-semibold mb-5">
                        Key Highlights for Events
                      </p>

                      <ul>
                        {highlights.map((item) => (
                          <li key={item.title}>
                            <div className="flex items gap-2 py-2">
                              <div className="pt-[0.4rem]"><Circle fill="#183B4E" size={10} stroke={0} /></div>
                              <p>
                                <span className="text-[#183B4E] font-bold">{item.title}</span> - {item.description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="w-[30%]">
                  <div className="relative mb-5 h-[12rem] shadow-md border-1 rounded-sm overflow-hidden">
                    {geocode && <MapLocation name={property_name} rate={0} geocode={geocode} zoom={13} />}

                    <div onClick={() => setMapEnabled(true)} className="opacity-0 cursor-pointer hover:opacity-100 absolute top-0 left-0 w-full h-full z-[1000] bg-[#000000AA] text-white flex items-center justify-center">
                      View Location on Map
                    </div>
                  </div>
                  <Card>
                    <CardContent>
                      <p className="font-title text-[#183B4E] text-[1rem] font-semibold mb-5">
                        Inclusions & Amenities
                      </p>
                      <p>Included accross venues: </p>
                      <ul>
                        {amenities.map((item) => (
                          <li key={item}>
                            <div className="flex items gap-2 py-2">
                              <div className="pt-[0.4rem]"><Circle fill="#183B4E" size={10} stroke={0} /></div>
                              <p>
                                {item}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="flex py-5">
                    <Button className="bg-[#27548a] w-full py-6">BOOK NOW <Calendar /></Button>
                  </div>

                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-10 rounded-sm">
            <CardContent>
              <div className="flex items-center justify-between mb-8">
                <p className="font-title font-bold text-[1.3rem] text-[#183B4E]">Guest Reviews</p>

                <Button variant="outline">Read all reviews</Button>
              </div>
              
            <div className="px-[4rem]">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-[100%]"
              >
                <CarouselContent>
                  {[0, 0, 0, 0, 0, 0].map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                      <div className="p-1">
                        <Card className="p-0">
                          <CardContent className="flex flex-col aspect-square p-4 h-[19rem]">
                            <div className="flex gap-2 items-center">
                              <div className="flex text-[1.2rem] text-white items-center justify-center rounded-full bg-[#183B4E] border-1 shadow-2xl w-[2.5rem] h-[2.5rem]">
                                JS
                              </div>

                              <div className="flex flex-col justify-between">
                                <p className="text-[#183B4E] font-semibold">Johnny Smith</p>
                                <p className="text-gray-400 text-[0.8rem]">Customer</p>
                              </div>
                            </div>

                            <div className="py-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </div>

                            <div className="mt-auto text-right text-gray-400 text-[0.8rem]">
                              Reviewed: 2025/01/01
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            </CardContent>
          </Card>
        </div>
      <FooterSection />

      {mapEnabled && (
        <div onClick={() => setMapEnabled(false)} className="fixed top-0 left-0 w-[100vw] h-[100vh] px-[10rem] py-10 bg-[#000000AA] backdrop-blur-xs z-[1000]">
          <div onClick={(event) => event.stopPropagation()} className="h-full">
            <MapLocation name={property_name} rate={0} geocode={geocode} zoom={13} />
          </div>
        </div>)}
    </div>
  )
};

export default BookHotel;