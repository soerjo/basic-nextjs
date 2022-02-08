import { GetStaticProps } from "next";
import React from "react";
import Alinks from "../../components/Alinks";

export interface Iproduct {
  id: number;
  productsName: string;
  harga: number;
  ketersediaan: number;
}

interface IProductProps {
  products: Array<Iproduct>;
}

const ProductPage: React.FC<IProductProps> = ({ products }) => {
  return (
    <>
      <div className="bg-green-400 py-3 flex ">
        <h1 className="text-2xl font-semibold text-white uppercase mx-auto">
          Product Page
        </h1>
      </div>
      <div className="container mx-auto mt-5">
        {products?.map((products) => {
          return (
            <Alinks key={products.id} url={`products/${products.id}`}>
              <div className="bg-sky-300 p-3 mb-2 cursor-pointer hover:bg-sky-600">
                <h2 className="text-white text-xl font-bold capitalize">
                  {products.productsName}
                </h2>
                <h3 className="text-base ">{products.harga}</h3>
              </div>
            </Alinks>
          );
        })}
      </div>
    </>
  );
};

export default ProductPage;

export const getStaticProps: GetStaticProps<IProductProps> = async () => {
  console.log("Generating / Regenerating ProductList");

  const fetchProducts = await fetch("http://localhost:4000/products");
  const products: Iproduct[] = await fetchProducts.json();

  return {
    props: {
      products,
    },
    revalidate: 5,
  };
};
