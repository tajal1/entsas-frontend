import Link from "next/link";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className=" bg-transparent fixed z-10 hover:bg-white h-20  content-center w-full grid grid-cols-3 px-12 ">
      <div className="flex gap-3 justify-start">
        <p className=" cursor-pointer">Menu</p>
        <div className=" cursor-pointer">Search</div>
      </div>
      <div className="flex justify-center">
        <Link href={"/"}>
          <p className="text-3xl font-bold tracking-widest cursor-pointer">
            LOUIS VUITTON
          </p>
        </Link>
      </div>
      <div className="flex gap-3 justify-end">
        <p className=" cursor-pointer">Call Us</p>
        <p className=" cursor-pointer">Wishlist</p>
        <p className=" cursor-pointer">user</p>
        <p className=" cursor-pointer">cart</p>
      </div>
    </div>
  );
};

export default NavBar;
