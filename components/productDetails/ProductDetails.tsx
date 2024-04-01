"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useAppStore } from "@/service/store";
import { ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

type Props = {};

const ProductDetails = (props: Props) => {
  const [productDetails, setProductDetails]: any = useState({});
  const selectedProduct = useAppStore((state) => state.selectedProduct);
  useEffect(() => {
    setProductDetails(selectedProduct);
  }, [selectedProduct]);

  console.log(productDetails);

  return (
    <div className="grid grid-cols-2 h-full w-full">
      <div>
        {productDetails?.id && (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="group">
              {productDetails.mediaList.map((media: any, mediaIdx: number) => (
                <CarouselItem
                  className=" bg-gradient-to-tl from-gray-100 via-gray-100 to-gray-200 flex justify-center items-center relative w-full h-screen "
                  key={mediaIdx}
                >
                  <Image
                    src={media.src}
                    alt="media"
                    fill
                    className="object-cover h-60 w-full absolute"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-5 bg-transparent border-none " />
            <CarouselNext className="right-5 bg-transparent border-none " />
          </Carousel>
        )}
      </div>
      {productDetails?.id && (
        <div className="bg-white py-32 flex justify-center items-center">
          <div className=" w-80 h-fit flex flex-col gap-6">
            <div className=" space-y-2">
              <p className="text-xs">{productDetails?.productCode ?? ""}</p>
              <p>{productDetails?.title ?? ""}</p>
              <p>
                {productDetails?.currency ?? ""}
                {productDetails?.price ?? ""}
              </p>
            </div>

            <Drawer direction="right">
              <DrawerTrigger>
                {" "}
                <div className="flex justify-between border-b pb-4">
                  <p>Color</p> <ChevronRight size={20} strokeWidth={1.5} />
                </div>
              </DrawerTrigger>
              <DrawerContent className="h-full mt-0 w-2/4 inset-y-0 inset-x-auto right-0">
                <div className="p-28 space-y-8">
                  <div className="flex justify-between items-center">
                    <p className="text-lg">Colors</p>
                    <DrawerClose>
                      <X size={20} strokeWidth={1.5} />{" "}
                    </DrawerClose>
                  </div>
                  <div className="grid grid-cols-3 gap-4 ">
                    {productDetails?.colorList &&
                      productDetails?.colorList.map(
                        (colorItem: any, colorIdx: number) => {
                          return (
                            <div key={colorIdx} className="flex">
                              <div
                                className="h-20 cursor-pointer w-20"
                                style={{
                                  backgroundColor: `${colorItem.colorCode}`,
                                }}
                              ></div>{" "}
                            </div>
                          );
                        }
                      )}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>

            <Drawer direction="right">
              <DrawerTrigger>
                <div className="flex justify-between pb-4">
                  <p>Sizes</p> <ChevronRight size={20} strokeWidth={1.5} />
                </div>
              </DrawerTrigger>
              <DrawerContent className="h-full mt-0 w-2/4 inset-y-0 inset-x-auto right-0">
                <div className="p-28 space-y-8">
                  <div className="flex justify-between items-center">
                    <p className="text-lg">Sizes</p>
                    <DrawerClose>
                      <X size={20} strokeWidth={1.5} />{" "}
                    </DrawerClose>
                  </div>
                  <div className="flex gap-4 justify-start items-center">
                    {productDetails?.sizeList &&
                      productDetails?.sizeList.map(
                        (sizeItem: any, sizeIdx: number) => {
                          return (
                            <div key={sizeIdx}>
                              <div className="h-10 flex items-center justify-center bg-white rounded-full border cursor-pointer w-10 ">
                                {sizeItem?.size}
                              </div>
                            </div>
                          );
                        }
                      )}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>

            <Drawer direction="right">
              <DrawerTrigger>
                <Button className="w-full rounded-full py-6">
                  Place in Cart
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-fit mt-0 w-1/3 inset-y-0 inset-x-auto right-0 py-12">
                <div className="px-20 space-y-8">
                  <div className="flex justify-between items-center">
                    <p className="text-lg">Added to Cart</p>
                    <DrawerClose>
                      <X size={20} strokeWidth={1.5} />{" "}
                    </DrawerClose>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {productDetails?.id && (
                      <Carousel
                        opts={{
                          align: "start",
                          loop: true,
                        }}
                        className=" col-span-1"
                      >
                        <CarouselContent className="group">
                          {productDetails.mediaList.map(
                            (media: any, mediaIdx: number) => (
                              <CarouselItem
                                className=" bg-gradient-to-tl from-gray-100 via-gray-100 to-gray-200 flex justify-center items-center relative w-full h-20 overflow-hidden"
                                key={mediaIdx}
                              >
                                <Image
                                  src={media.src}
                                  alt="media"
                                  fill
                                  className="object-contain absolute"
                                />
                              </CarouselItem>
                            )
                          )}
                        </CarouselContent>
                        <CarouselPrevious className="left-5 bg-transparent border-none " />
                        <CarouselNext className="right-5 bg-transparent border-none " />
                      </Carousel>
                    )}
                    <div className=" flex flex-col justify-center space-y-1 col-span-2 text-xs">
                      <p className="">{productDetails?.productCode ?? ""}</p>
                      <p>{productDetails?.title ?? ""}</p>
                      <p>
                        {productDetails?.currency ?? ""}
                        {productDetails?.price ?? ""}
                      </p>
                    </div>
                  </div>
                </div>
                <DrawerFooter className="px-20">
                  <Button className="w-full rounded-full py-6">
                    View my Cart
                  </Button>
                  <DrawerClose>
                    <Button
                      variant={"outline"}
                      className="w-full rounded-full py-6"
                    >
                      Continue Shopping
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <p className="text-sm">
              Complimentary Carbon Efficient Delivery or Collect-in-Store.
            </p>
            <p>Find in store</p>
            <p>Product Details</p>
            <p>Delivery & Returns</p>
            <p>Gifting</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
