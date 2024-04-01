"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { SlidersHorizontal, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { mens } from "../../public/json/ProductsData.json";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import CollectionCard from "./CollectionCard";

type Props = {};

const CollectionsContainer = (props: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [collectionType, setCollectionType] = useState(
    "Spring Collection 2024"
  );
  //   const [selectedProductType, setSelectedProductType] = useState("All");

  const productTypes = [
    "All",
    ...Array.from(new Set(mens.map((product) => product.productType))),
  ];
  const colorList = [
    ...Array.from(
      new Set(
        mens.map((colors) => colors.colorList.map((color) => color.colorCode))
      )
    ),
  ];

  const uniqueColors = Array.from(new Set(colorList.flat()));

  //   console.log(uniqueColors);
  //   const filteredProducts =
  //     selectedProductType === "All"
  //       ? mens
  //       : mens.filter((product) => product.productType === selectedProductType);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mens.length > 0) {
      setCollectionType(mens[0]?.collectionType);
    }
  }, []);
    
  

  return (
    <div className="pt-20">
      <div
        className={`bg-white flex items-center px-12 justify-between fixed z-30 h-16 w-full  shadow-sm ${
          scrollPosition > 80 ? "" : "border-t border-gray-200 "
        }`}
      >
        <p className="">{collectionType ?? ""}</p>

        <Drawer direction="right">
          <DrawerTrigger>
            {" "}
            <Button
              variant={"outline"}
              className=" hover:bg-transparent border-black hover:border-2 rounded-full w-fit px-6 gap-4"
            >
              Filters <SlidersHorizontal size={16} strokeWidth={1.5} />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-full mt-0 w-2/4 inset-y-0 inset-x-auto right-0">
            <div className="p-28 space-y-8 overflow-y-scroll overflow-x-hidden">
              <div className="flex justify-between items-center">
                <p className="text-lg">Filter by</p>
                <DrawerClose>
                  <X size={20} strokeWidth={1.5} />{" "}
                </DrawerClose>
              </div>

              <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Categories</AccordionTrigger>
                  {productTypes.map((type, index) => (
                    <AccordionContent key={index}>
                      {" "}
                      <div className="flex  gap-3 items-center space-x-2">
                        <Checkbox id={type} />
                        <Label htmlFor={type} className="cursor-pointer">
                          {type}
                        </Label>
                      </div>
                    </AccordionContent>
                  ))}
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Colors</AccordionTrigger>
                  <AccordionContent className="flex gap-3">
                    {uniqueColors.map((colorItem, colorIdx) => {
                      return (
                        <div key={colorIdx}>
                          {" "}
                          <div
                            className="h-10 cursor-pointer w-10"
                            style={{ backgroundColor: `${colorItem}` }}
                          ></div>{" "}
                        </div>
                      );
                    })}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <DrawerFooter className="px-28 py-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <Button className="rounded-full">Show Products</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="grid grid-cols-4 gap-5 px-8 bg-gray-100 pt-20 pb-8">
        {mens.map((item: any, idx: number) => (
          // <Link href={`/collections/${item.id + item.title}`} key={item.id}>
            <CollectionCard
              key={item.id}
              index={item.id}
              id={idx}
              price={item.price}
              currency={item.currency}
              mediaList={item.mediaList}
              title={item.title}
              productsDetails={item}
            />
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default CollectionsContainer;
