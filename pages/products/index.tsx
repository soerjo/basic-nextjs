import React from "react";
import Alinks from "../../components/Alinks";

const products = [
  {
    productName: "product01",
    id: "01",
  },
  {
    productName: "product02",
    id: "02",
  },
  {
    productName: "product03",
    id: "03",
  },
  {
    productName: "product04",
    id: "04",
  },
];

const ProductPage = () => {
  return (
    <div className="bg-blue-300 flex justify-center items-center h-screen">
      {products.map((product) => {
        return (
          <Alinks key={product.id} url={`products/${product.id}`}>
            <div className="container bg-green-300 flex justify-center items-center flex-col w-40 h-40 hover:bg-gray-500 hover:text-cyan-100 cursor-pointer">
              {product.productName}
            </div>
          </Alinks>
        );
      })}
    </div>
  );
};

export default ProductPage;
