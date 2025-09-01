import Hotel1 from "@/assets/images/hotel_1.jpg";
import Hotel2 from "@/assets/images/hotel_2.jpg";
import Hotel3 from "@/assets/images/hotel_3.jpeg";
import Hotel4 from "@/assets/images/hotel_4.jpg";
import Hotel5 from "@/assets/images/hotel_5.jpg";
import { useState } from "react";

import GalleryCarousel from "../GalleryCarousel";

const GalleryGrid = () => {
  const images = [Hotel1, Hotel2, Hotel3, Hotel4, Hotel5];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div class="grid grid-cols-[3fr_2fr] gap-4 mb-8 h-[20rem]">
        <div onClick={() => setSelectedImage(0)} class="bg-blue-200 rounded-xl shadow-md hover:shadow-2xl overflow-hidden cursor-pointer">
          <img src={images[0]} alt="" className="w-full h-full" />
        </div>

        <div class="grid grid-rows-2 grid-cols-2 gap-2">
          <div onClick={() => setSelectedImage(1)} class="overflow-hidden rounded-sm hover:shadow-2xl cursor-pointer">
            <img src={images[1]} alt="" className="w-full h-full" />
          </div>
          <div onClick={() => setSelectedImage(2)} class="overflow-hidden rounded-sm hover:shadow-2xl cursor-pointer">
            <img src={images[2]} alt="" className="w-full h-full" />
          </div>
          <div onClick={() => setSelectedImage(3)} class="overflow-hidden rounded-sm hover:shadow-2xl cursor-pointer">
            <img src={images[3]} alt="" className="w-full h-full" />
          </div>
          <div onClick={() => setSelectedImage(4)} class="overflow-hidden rounded-sm hover:shadow-2xl cursor-pointer">
            <img src={images[4]} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>

      {typeof selectedImage === "number" && (
        <GalleryCarousel images={images} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      )}
    </>
  )
};

export default GalleryGrid;