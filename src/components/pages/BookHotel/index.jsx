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

const BookHotel = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-y-auto overflow-x-hidden relative">
      <NavigationMenu />
        <div className="py-6 px-2 md:px-[10rem]">
          <Card className="rounded-sm">
            <CardContent>
              <GalleryGrid />

              <div className="flex gap-5">
                <div className="flex flex-col gap-5 w-[70%]">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                      <p className="font-title font-bold text-[1.3rem] text-[#183B4E]">Pricesa Garden Island Resort & Spa</p>
                      <p className="flex gap-2 items-center text-[#27548a]"><MapPin size={14} /> Brgy. Bancao-Bancao, Puerto Princesa City, Palawan</p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center gap-2 text-orange-300">
                        <Star size={20} fill="#ffb86a" />
                        <Star size={20} fill="#ffb86a" />
                        <Star size={20} fill="#ffb86a" />
                        <Star size={20} />
                        <Star size={20} />
                      </div>
                      <Button variant="outline" className="rounded-full w-[2.3rem] h-[2.3rem] ml-5">
                        <Heart />
                      </Button>
                    </div>
                  </div>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>

                  <Card className="py-4">
                    <CardContent>
                      <p className="font-title text-[#183B4E] text-[1rem] font-semibold mb-5">
                        Key Highlights for Events
                      </p>

                      <ul>
                        <li>
                          <div className="flex items gap-2 py-2">
                            <div className="pt-[0.4rem]"><Circle fill="#183B4E" size={10} stroke={0} /></div>
                            <p>
                              <span className="text-[#183B4E] font-bold">Award winning MICE Venue</span> -
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex items gap-2 py-2">
                            <div className="pt-[0.4rem]"><Circle fill="#183B4E" size={10} stroke={0} /></div>
                            <p>
                              <span className="text-[#183B4E] font-bold">Hari Ballroom</span> -
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex items gap-2 py-2">
                            <div className="pt-[0.4rem]"><Circle fill="#183B4E" size={10} stroke={0} /></div>
                            <p>
                              <span className="text-[#183B4E] font-bold">Reyna Function Hall</span> -
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex items gap-2 py-2">
                            <div className="pt-[0.4rem]"><Circle fill="#183B4E" size={10} stroke={0} /></div>
                            <p>
                              <span className="text-[#183B4E] font-bold">Chapel & Outdoor Venues</span> -
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex items gap-2 py-2">
                            <div className="pt-[0.4rem]"><Circle fill="#183B4E" size={10} stroke={0} /></div>
                            <p>
                              <span className="text-[#183B4E] font-bold">Comprehensive Event Support</span> -
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent>
                      <p className="font-title text-[#183B4E] text-[1rem] font-semibold mb-5">
                        Experience Highlights
                      </p>

                      <ul>
                        <li>
                          <div className="flex items gap-2 py-2">
                            <div className="pt-[0.4rem]"><Circle fill="#183B4E" size={10} stroke={0} /></div>
                            <p>
                              <span className="text-[#183B4E] font-bold">Environmentally sustainable</span> -
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex items gap-2 py-2">
                            <div className="pt-[0.4rem]"><Circle fill="#183B4E" size={10} stroke={0} /></div>
                            <p>
                              <span className="text-[#183B4E] font-bold">Family-friendly</span> -
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex items gap-2 py-2">
                            <div className="pt-[0.4rem]"><Circle fill="#183B4E" size={10} stroke={0} /></div>
                            <p>
                              <span className="text-[#183B4E] font-bold">Culinary variety</span> -
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="w-[30%]">
                  <Card>
                    <CardContent>
                      <p className="font-title text-[#183B4E] text-[1rem] font-semibold mb-5">
                        Inclusions & Amenities
                      </p>
                      <p>Included accross venues: </p>
                      <ul>
                        <li>
                          <div className="flex items gap-2 py-2">
                            <div className="pt-[0.4rem]"><Circle fill="#183B4E" size={10} stroke={0} /></div>
                            <p>
                              Professional event coordination (including weddings) <u>(femalenetwork.com)</u>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex items gap-2 py-2">
                            <div className="pt-[0.4rem]"><Circle fill="#183B4E" size={10} stroke={0} /></div>
                            <p>
                              State-of-the-art AV and sound systems
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex items gap-2 py-2">
                            <div className="pt-[0.4rem]"><Circle fill="#183B4E" size={10} stroke={0} /></div>
                            <p>
                              On-site catering by the resort <u>(event.com)</u>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex items gap-2 py-2">
                            <div className="pt-[0.4rem]"><Circle fill="#183B4E" size={10} stroke={0} /></div>
                            <p>
                              Free airport shuttle, business services, Wi-Fi, parking <u>(cvent.com)</u>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="flex items gap-2 py-2">
                            <div className="pt-[0.4rem]"><Circle fill="#183B4E" size={10} stroke={0} /></div>
                            <p>
                              Access to resort facilities including spa, pool, mini waterpark, chapel, sandbar, and game area
                            </p>
                          </div>
                        </li>
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
    </div>
  )
};

export default BookHotel;