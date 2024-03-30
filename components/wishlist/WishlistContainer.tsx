"use client";

import { useAppStore } from "@/service/store";
import WishlistCard from "./WishlistCard";

type Props = {};

const WishlistContainer = (props: Props) => {
  const { wishlist } = useAppStore();

  console.log("wishlist", wishlist);

  return (
    <div className="grid grid-cols-4 gap-5">
      {wishlist?.map((item: any, idx) => {
        return <WishlistCard {...item} key={item.id + idx} />;
      })}
    </div>
  );
};

export default WishlistContainer;
