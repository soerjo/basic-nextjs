import React from "react";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;

  return <div>Detail Page {productId}</div>;
};

export default ProductDetails;
