"use client";

import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import CallUsDrawer from "./CallUsDrawer";
import LoginDrawer from "./LoginDrawer";
import MenuDrawer from "./MenuDrawer";

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
        scrollPosition > 80
          ? "bg-white border-b-2 border-gray-200"
          : "bg-transparent hover:bg-white "
      }  fixed z-30  h-20  content-center w-full grid grid-cols-3 px-12 `}
    >
      <div className="flex items-center gap-6 justify-start">
        <MenuDrawer />
        <div className=" cursor-pointer flex gap-2 items-center">
          <Search size={20} strokeWidth={1.5} />
          <p>Search</p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Link href={"/"}>
          <p className="text-3xl font-bold tracking-widest cursor-pointer">
            LOUIS VUITTON
          </p>
        </Link>
      </div>

      <div className="flex items-center gap-6 justify-end">
        <div className=" cursor-pointer">
          <CallUsDrawer />
        </div>
        <p className=" cursor-pointer">Wishlist</p>
        <div className=" cursor-pointer">
          <LoginDrawer />
        </div>
        <Link href={"/cart"}>
          <div className=" cursor-pointer relative ">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <p className="bg-black w-3.5 h-3.5 absolute -top-2 -right-4 rounded-full text-white text-center text-[10px] flex justify-center">
              0
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
