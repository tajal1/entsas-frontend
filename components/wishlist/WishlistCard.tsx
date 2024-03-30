import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import Image from "next/image";
import { useAppStore } from "@/service/store";

type Props = {
  id: number;
  mediaList: any;
  title: string;
  currency: string;
  price: number;
};

const WishlistCard = (item: Props) => {
  const [open, setIsOpen] = useState(false);
  const { wishlist, setWishlist } = useAppStore();

  const handleItemClick = (id: number) => {
    const updatedProducts = wishlist.filter((product) => product.id !== id);
    setWishlist(updatedProducts);
  };

  return (
    <>
      <AlertDialog open={open} onOpenChange={setIsOpen}>
        <AlertDialogContent className="top-[50%] p-12">
          <AlertDialogHeader>
            <AlertDialogDescription className="flex justify-between items-center">
              <p className="text-[18px] text-black">Remove from my wishlist</p>
              <AlertDialogCancel className="bg-transparent border-none">
                <X />
              </AlertDialogCancel>
            </AlertDialogDescription>
            <AlertDialogDescription className="pt-10">
              <p className="text-black text-[16px]">
                Do you wish to remove the item from your Wishlist?
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-between">
            <AlertDialogCancel className="rounded-full px-16 py-6 border border-black">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleItemClick(item.id)}
              className="rounded-full px-16 py-6 border border-black bg-black text-white hover:text-black hover:bg-white transition-[100]"
            >
              Remove
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      <div className=" space-y-3 overflow-hidden gap-4 h-80 w-full relative">
        <X
          onClick={() => {
            setIsOpen((prevIsLove) => !prevIsLove);
          }}
          size={20}
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
            {item?.mediaList?.map((media: any, mediaIdx: number) => {
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
          <span>{item.currency}</span> {item.price?.toLocaleString()}
        </p>
      </div>
    </>
  );
};

export default WishlistCard;
