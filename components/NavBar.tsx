"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {};

const NavBar = (props: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
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

  return (
    <div
      className={`${
        scrollPosition > 80 ? "bg-white" : "bg-transparent hover:bg-white"
      }  fixed z-10  h-20  content-center w-full grid grid-cols-3 px-12 `}
    >
      <div className="flex items-center gap-3 justify-start">
        <p className=" cursor-pointer">Menu</p>
        <div className=" cursor-pointer">Search</div>
      </div>
      <div className="flex items-center justify-center">
        <Link href={"/"}>
          <p className="text-3xl font-bold tracking-widest cursor-pointer">
            LOUIS VUITTON
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-3 justify-end">
        <p className=" cursor-pointer">Call Us</p>
        <p className=" cursor-pointer">Wishlist</p>
        <p className=" cursor-pointer">user</p>
        <p className=" cursor-pointer">cart</p>
      </div>
    </div>
  );
};

export default NavBar;
