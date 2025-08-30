import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Banknote, Heart, MapPin, MapPinned, PhilippinePeso, Star } from "lucide-react";

const WideEventCard = ({ item }) => {
  return (
    <Card className="p-0 my-5">
      <CardContent className="flex aspect-square gap-5 p-4 h-[14rem] w-full">
        <div className="rounded-md overflow-hidden h-full w-[20rem]">
          <img src={item.image} className="h-full w-full" />
        </div>

        <div className="flex flex-col grow">
          <p className="font-title text-[1.2rem] font-bold pb-3">{item.name}</p>
          <div className="text-[1rem] mb-2 flex gap-2 items-center"><MapPinned strokeWidth={1} size={16} />Brgy. San Pedro, Puerto Princesa, Palawan</div>
          <div className="text-[1rem] flex gap-2 items-center"><PhilippinePeso strokeWidth={1} size={16} /> 2,500.00</div>
          <div className="flex items-center gap-3 py-3 text-orange-300">
            <Star size={16} fill="#ffb86a" />
            <Star size={16} fill="#ffb86a" />
            <Star size={16} fill="#ffb86a" />
            <Star size={16} />
            <Star size={16} />

            <span className="text-black text-[0.85rem]">37 reviews</span>
          </div>

          <div className="flex mt-auto justify-between">
            <Button variant="outline" className="rounded-full w-[2.3rem] h-[2.3rem]">
              <Heart strokeWidth={item.liked ? 0 : 2} fill={item.liked ? "#ff7b7b" : "transparent"} />
            </Button>
            <Button className="w-[10rem] mt-auto ml-auto">Book Now</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
};

export default WideEventCard;