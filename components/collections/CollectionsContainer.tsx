"use client";
import { mens } from "../../public/json/ProductsData.json";
import CollectionCard from "./CollectionCard";

type Props = {};

const CollectionsContainer = (props: Props) => {
  //   console.log(mens);
  return (
    <div className="grid grid-cols-4 gap-5">
      {mens.map((item:any, idx) => {
        return <CollectionCard {...item} key={item.id + idx}  />;
      })}
    </div>
  );
};

export default CollectionsContainer;
