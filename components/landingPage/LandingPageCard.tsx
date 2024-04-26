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
    <Link href={url ?? "/"} className="w-fit h-full cursor-pointer space-y-3">
      <Image
        src={img}
        alt="Image"
        height={600}
        width={600}
        className=" object-cover"
      />
      <p className="text-lg font-medium">{title ?? ""}</p>
      <p className=" underline underline-offset-4">{urlText ?? ""}</p>
    </Link>
  );
};

export default LandingPageCard;
