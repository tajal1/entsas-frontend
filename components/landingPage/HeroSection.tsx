import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type HeroSectionType = {
  img: string;
  category?: string;
  title: string;
  buttonTextOne: string;
  buttonTextTwo?: string;
};

const HeroSection = ({
  img,
  category,
  title,
  buttonTextOne,
  buttonTextTwo,
}: HeroSectionType) => {
  return (
    <div className=" h-[calc(100vh-70px)] w-full relative group">
      <Image src={img} alt="Hero Image" fill={true} className=" object-cover" />
      <div className=" absolute gap-3 right-[50%] left-[50%] flex flex-col justify-center items-center bottom-14 text-white">
        <p className="text-xs uppercase truncate">{category ?? ""}</p>
        <p className="text-3xl truncate">{title ?? ""}</p>
        <div className="flex gap-4 h-20 pt-4 ">
          {buttonTextOne && (
            <Link href={"/"}>
              <Button
                variant="outline"
                className="backdrop-blur-sm bg-black/30 rounded-full  px-14 py-6  group-hover:border-2"
              >
                {buttonTextOne ?? ""}
              </Button>
            </Link>
          )}
          {buttonTextTwo && (
            <Link href={"/"}>
              <Button
                variant="outline"
                className=" backdrop-blur-sm bg-black/30 rounded-full  px-14 py-6  group-hover:border-2"
              >
                {buttonTextTwo ?? ""}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
