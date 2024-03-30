import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useAppStore } from "@/service/store";
import { Heart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type CollectionCardProps = {
  mediaList: any;
  title: string;
  currency: string;
  price: number;
  index: number;
};

const CollectionCard = (props: CollectionCardProps) => {
  const [isLove, setIsLove] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const globalIsLove = useAppStore((state) => state.isLove);
  const setGlobalIsLove = useAppStore((state) => state.setIsLove);
  const { wishlist, setWishlist } = useAppStore();

  const handleItemClick = (item: CollectionCardProps) => {
    setIsLove((prevIsLove) => !prevIsLove);
    setGlobalIsLove(true);
    const updatedWishlist = [...wishlist, item];
    setWishlist(updatedWishlist);
    setShowDialog( true);
  };

  return (
    <>
      <div className=" space-y-3 overflow-hidden gap-4 h-80 w-full relative">
        <Heart
          onClick={() => handleItemClick(props)}
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
            {props.mediaList.map((media: any, mediaIdx: number) => (
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
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-5 bg-transparent border-none " />
          <CarouselNext className="right-5 bg-transparent border-none " />
        </Carousel>

        <p>{props.title}</p>
        <p>
          <span>{props.currency}</span> {props.price.toLocaleString()}
        </p>
      </div>

      {showDialog && (
        <AlertDialog
          open={globalIsLove}
          onOpenChange={(isOpen) => {
            if (!isLove) {
              setGlobalIsLove(isOpen);
            }
          }}
        >
          <AlertDialogContent className="flex justify-between">
            <AlertDialogHeader>
              <AlertDialogDescription className="text-black">
                {`This Item has been ${
                  isLove ? "added to" : "removed from"
                } your wishlist`}{" "}
                <br />{" "}
                <span className="underline">
                  <Link href="/wishlist">Access Your Wishlist</Link>
                </span>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogCancel
              className="border-none"
              onClick={() => setShowDialog(false)}
            >
              <X />
            </AlertDialogCancel>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};

export default CollectionCard;
