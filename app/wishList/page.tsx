import WishlistContainer from "@/components/wishlist/WishlistContainer";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="py-20 px-6 bg-gray-100">
      <WishlistContainer />
    </div>
  );
};

export default page;
