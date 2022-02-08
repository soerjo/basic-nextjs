import React from "react";
import { useRouter } from "next/router";
import { Iproduct } from ".";
import { IoChevronBack } from "react-icons/io5";
import { GetStaticPaths, GetStaticProps } from "next";

interface IProductDetailsProps {
  data: Iproduct;
}

const ProductDetails: React.FC<IProductDetailsProps> = ({ data }) => {
  const router = useRouter();
  const handlebutton = () => {
    router.push("/products");
  };
  return (
    <div>
      <div className="bg-green-400 py-3 flex">
        <h1 className="text-2xl font-semibold text-white mx-auto">Details:</h1>
      </div>
      <div className="container mx-auto">
        <div className="my-4 max-w-sm text-left">
          {router.isFallback ? (
            <p>Loading...</p>
          ) : (
            <>
              <h2 className="text-3xl font-extrabold text-green-500 capitalize border-b-2">
                {data.productsName}
              </h2>
              <h3 className="text-xl text-slate-700 font-bold">
                Harga: Rp. {data.harga}
              </h3>
              <p className="text-base text-slate-500  ">
                Ketersediaan: {data.ketersediaan}
              </p>
            </>
          )}
        </div>

        <button
          onClick={handlebutton}
          className="bg-green-400 py-1 px-3 text-white rounded shadow hover:bg-green-200 hover:text-green-500 flex flex-row items-center"
        >
          <IoChevronBack className="ml-[-5px]" />
          Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths: GetStaticPaths<{
  productId: string;
}> = async () => {
  const fetchProducts = await fetch("http://localhost:4000/products");
  const products: Iproduct[] = await fetchProducts.json();

  const paths = products.map((product) => ({
    params: {
      productId: `${product.id}`,
    },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<IProductDetailsProps> = async ({
  params,
}) => {
  const fetchProducts = await fetch(
    `http://localhost:4000/products/${params?.productId}`
  );
  const data: Iproduct = await fetchProducts.json();
  return {
    props: {
      data,
    },
    revalidate: 5,
  };
};
