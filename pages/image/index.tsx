/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";

const imageLists = [1, 2, 3, 4, 5, 6, 7];

const ImagePage = () => {
  return (
    <>
      <Head>
        <title>Web Soerjo | Posts</title>
      </Head>
      <div className="bg-green-400 py-3 flex ">
        <h1 className="text-2xl font-semibold text-white uppercase mx-auto">
          Image Page
        </h1>
      </div>
      <div className="relative sm:masonry-sm md:masonry-md xl:masonry-xl gap-2 m-4">
        {imageLists.map((image, index) => {
          return (
            <div
              key={index}
              className="break-inside mb-4  hover:shadow cursor-pointer "
            >
              <img
                className="relative w-full rounded-2xl  "
                src={`/_image/0${image}.jpg`}
                alt={`image0${image}`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImagePage;
