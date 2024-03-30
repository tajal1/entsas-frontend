import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useAppStore } from "@/service/store";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Props = { mediaList: any; title: string; currency: string; price: number };

const CollectionCard = (item: Props) => {
  const [isLove, setIsLove] = useState(false);

  const globalIsLove = useAppStore((state) => state.isLove);
  const setGlobalIsLove = useAppStore((state) => state.setIsLove);

  const toggleLove = () => {
    setIsLove((prevIsLove) => !prevIsLove);
    setGlobalIsLove(isLove);
  };

  console.log(isLove); 
  console.log(globalIsLove);

  return (
    <div className=" space-y-3 overflow-hidden gap-4 h-80 w-full relative">
      <Heart
        onClick={toggleLove}
        size={20}
        fill={isLove ? "black" : "transparent"}
        strokeWidth={1.5}
        className=" absolute right-3 top-5 z-10 cursor-pointer"
      />
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="group">
          {item.mediaList.map((media: any, mediaIdx: number) => {
            return (
              <CarouselItem
                className=" bg-gradient-to-tl from-gray-100 via-gray-100 to-gray-200 flex justify-center items-center relative w-full h-60 "
                key={mediaIdx}
              >
                <Image
                  src={media.src}
                  alt="media"
                  fill
                  className="object-contain h-60 w-full absolute"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-5 bg-transparent border-none " />
        <CarouselNext className="right-5 bg-transparent border-none " />
      </Carousel>

      <p>{item.title}</p>
      <p>
        <span>{item.currency}</span> {item.price.toLocaleString()}
      </p>
    </div>
  );
};

export default CollectionCard;