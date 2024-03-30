"use client";

import React from "react";
import { useAppStore } from "@/service/store";
import { useState, useEffect } from "react";

type Props = {};

const ProductDetails = (props: Props) => {
  const [productDetails, setProductDetails]: any = useState({});
  const selectedProduct = useAppStore((state) => state.selectedProduct);
  useEffect(() => {
    setProductDetails(selectedProduct);
  }, [selectedProduct]);

  return (
    <div className="grid grid-cols-2 h-full w-full">
      <div></div>
      <div className=" bg-white p-28 h-full space-y-6">
        <div className=" space-y-2">
          <p>{productDetails.productType ?? ""}</p>
          <p>{productDetails.title ?? ""}</p>
          <p>
            {productDetails.currency ?? ""}
            {productDetails.price ?? ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
