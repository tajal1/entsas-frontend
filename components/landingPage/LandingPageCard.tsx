import Image from "next/image";
import Link from "next/link";
import React from "react";

type LandingPageCardType = {
  img: string;
  title: string;
  url: string;
  urlText: string;
};

const LandingPageCard = ({ img, title, url, urlText }: LandingPageCardType) => {
  return (
    <Link href={url ?? "/"} className="w-full h-[calc(100vh-200px)]">
      <div className="w-full h-full cursor-pointer space-y-3">
        <div className="relative w-full h-[85%]">
          <Image src={img} alt="Image" fill={true} className=" object-cover" />
        </div>
        <p className="text-lg font-medium">{title ?? ""}</p>
        <p className=" underline underline-offset-4">{urlText ?? ""}</p>
      </div>
    </Link>
  );
};

export default LandingPageCard;
