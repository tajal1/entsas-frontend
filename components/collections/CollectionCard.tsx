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
import { useRouter } from "next/navigation";
import { useState } from "react";

type CollectionCardProps = {
  mediaList: any;
  title: string;
  currency: string;
  price: number;
  index: number;
  id: number;
  productsDetails: any;
};

const CollectionCard = (props: CollectionCardProps) => {
  const [isLove, setIsLove] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const globalIsLove = useAppStore((state) => state.isLove);
  const setGlobalIsLove = useAppStore((state) => state.setIsLove);
  const { wishlist, setWishlist } = useAppStore();
  const router = useRouter();

  const handleItemClick = (item: CollectionCardProps) => {
    setIsLove((prevIsLove) => !prevIsLove);
    setGlobalIsLove(true);
    const updatedWishlist = [...wishlist, item];
    setWishlist(updatedWishlist);
    setShowDialog(true);
  };

  const setSelectedProduct = useAppStore((state) => state.setSelectedProduct);

  const handleClick = () => {
    setSelectedProduct(props.productsDetails);
    router.push(`/collections/${props.id + props.title}`);
  };

  return (
    <>
      <div
        onContextMenu={(e) => e.preventDefault()}
        className=" col-span-4 md:col-span-2 lg:col-span-1 space-y-3 overflow-hidden gap-4 h-80 w-full relative cursor-pointer"
      >
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
          onClick={handleClick}
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
        <div onClick={handleClick} className=" cursor-pointer">
          <p>{props.title}</p>
          <p>
            <span>{props.currency}</span> {props.price.toLocaleString()}
          </p>
        </div>
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
          <AlertDialogContent className="flex justify-between w-5/6 lg:w-full">
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
