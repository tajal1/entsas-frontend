"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppStore } from "@/service/store";
import { ChevronDown, CircleX, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

type Props = {};

const CartContainer = (props: Props) => {
  const selectedProduct = useAppStore((state) => state.selectedProduct);
  const [productDetails, setProductDetails]: any = useState({});

  useEffect(() => {
    setProductDetails(selectedProduct);
  }, [selectedProduct]);

  return (
    <div className=" grid grid-cols-12 ">
      <div className=" col-span-8 py-20 px-12 space-y-2">
        <p className="flex justify-between pt-5">
          My Shopping Cart{" "}
          <Link href={"/"}>
            <span className="text-xs underline underline-offset-4">
              Continue Shopping
            </span>
          </Link>
        </p>
        <div className="grid grid-cols-2  bg-white">
          <div className="p-3">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="group">
                {productDetails?.mediaList &&
                  productDetails?.mediaList?.map(
                    (media: any, mediaIdx: number) => (
                      <CarouselItem
                        className=" bg-gradient-to-tl from-gray-100 via-gray-100 to-gray-200 flex justify-center items-center relative w-full h-80 "
                        key={mediaIdx}
                      >
                        <Image
                          src={media.src}
                          alt="media"
                          fill
                          className="object-contain h-60 w-full absolute"
                        />
                      </CarouselItem>
                    )
                  )}
              </CarouselContent>
              <CarouselPrevious className="left-5 bg-transparent border-none " />
              <CarouselNext className="right-5 bg-transparent border-none " />
            </Carousel>
          </div>
          <div className="border-l">
            <div className="border-b px-4 py-6">
              <p className="text-xs">{productDetails?.productCode ?? ""}</p>
              <p>{productDetails?.title ?? ""}</p>
            </div>
            <div className=" px-4 py-6">
              <p className="flex justify-between">
                Color <span>Ebene</span>
              </p>
              <p className="flex justify-between">
                Size <span>38</span>
              </p>
            </div>
            <div className="border-b px-4 py-6 flex justify-between">
              <DropdownMenu>
                <DropdownMenuTrigger className="px-3 py-1.5 border-2 rounded-md flex gap-2">
                  1 <ChevronDown size={20} strokeWidth={1.5} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-8">
                  <DropdownMenuItem>1</DropdownMenuItem>
                  <DropdownMenuItem>2</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <p>
                {productDetails?.currency ?? ""}
                {productDetails?.price ?? ""}
              </p>
            </div>
            <div className=" px-4  flex items-center justify-center">
              <p className="flex-1 flex items-center gap-2 border-r justify-center py-6">
                <Heart size={20} strokeWidth={1.5} />
                Add to Wishlist
              </p>
              <p className="flex-1 flex items-center justify-center gap-2 py-6">
                <CircleX size={20} strokeWidth={1.5} />
                Remove
              </p>
            </div>
          </div>
              </div>
              <div className="flex justify-end py-5">
                  
        <Button className="w-fit self-end place-self-end px-12 rounded-full py-6">
          Proceed to checkout
        </Button>
              </div>
      </div>
      <div className=" bg-white py-20  col-span-4">
        <div className="py-8 px-12 space-y-6 border-b">
          <div>
            <p className="flex justify-between">
              Subtotal <span>$4333</span>
            </p>
            <p className="flex justify-between">
              Shipping <span>$4333</span>
            </p>
            <p className="flex justify-between">
              Tax <span>$4333</span>
            </p>
            <p className="text-xs">
              Will be calculated according to your delivery address
            </p>
          </div>
          <p className="flex justify-between">
            Total <span>$4333</span>
          </p>
          <div className=" space-y-2">
            {" "}
            <Button className="w-full rounded-full py-6">
              Proceed to checkout
            </Button>
            <Button className="w-full rounded-full py-6 bg-gradient-to-r from-[#253B80] to-[#179BD7]">
              <Image
                src={"/icons/ppcom.svg"}
                alt="icon"
                width={100}
                height={23}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
