import React from "react";
import { useRouter } from "next/router";

const DocsPage = () => {
  const router = useRouter();
  const { params } = router.query;

  console.log(params);

  if (params instanceof Array && params.length >= 2) {
    return (
      <h1>
        Page Docs{" "}
        {params.map((param) => {
          return "parameter: " + param + " ";
        })}
      </h1>
    );
  } else {
    return <h1>Page Docs {params}</h1>;
  }
};

export default DocsPage;
