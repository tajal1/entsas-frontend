import ProductDetails from "@/components/productDetails/ProductDetails";

type Props = {};

const page = ({ params: { slug } }: any) => {
  return (
    <div className=" bg-gray-100 px-12">
      {/* <strong>{slug}</strong> */}
      <ProductDetails />
    </div>
  );
};

export default page;
