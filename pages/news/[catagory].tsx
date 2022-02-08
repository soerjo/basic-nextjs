import { GetServerSideProps } from "next";
import React from "react";
import { Inews } from ".";

interface INewsCatagoryProps {
  news: Inews[];
}

const NewsFromCatagory: React.FC<INewsCatagoryProps> = ({ news }) => {
  return (
    <div className="flex justify-center flex-wrap">
      {news?.map((berita) => {
        return (
          <div
            key={berita.id}
            className="my-4 mx-2 p-4 min-w-sm text-left bg-slate-200 rounded shadow-sm cursor-pointer hover:shadow-xl hover:border-sky-200 "
          >
            <h2 className="text-2xl font-extrabold text-green-500 capitalize border-b-2 border-indigo-400">
              {berita.title}
            </h2>
            <h3 className="text-md text-slate-700 font-bold">
              {berita.catagory}
            </h3>
            <p className="text-base text-slate-500  ">
              Description: {berita.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default NewsFromCatagory;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, query } = context;

  const fetchFromCatagory = await fetch(
    `http://localhost:4000/news?catagory=${params?.catagory}`
  );
  const news: Inews[] = await fetchFromCatagory.json();

  return {
    props: {
      news,
    },
  };
};
