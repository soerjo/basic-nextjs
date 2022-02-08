import { GetServerSideProps } from "next";
import React from "react";
import Alinks from "../../components/Alinks";

export interface Inews {
  id: number;
  title: string;
  description: string;
  catagory: string;
}

interface INewsPageProps {
  news: Array<Inews> | null;
  catagory: string[] | null;
}

const NewsPage: React.FC<INewsPageProps> = ({ news, catagory }) => {
  if (!news && !catagory) {
    return <p className="bg-red-500 text-white">Some think error!</p>;
  }

  return (
    <>
      <h1 className="text-2xl font-medium text-slate-700 ">Page News List:</h1>

      <div className="mx-auto container py-4 border-indigo-500 border-b-2">
        {catagory?.map((cat, index) => {
          return (
            <button
              className="bg-indigo-500 rounded py-1 px-3 mx-2 capitalize text-white hover:shadow-lg cursor-pointer hover:font-medium"
              key={index}
            >
              <Alinks url={`/news/${cat}`}>{cat}</Alinks>
            </button>
          );
        })}
      </div>

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
    </>
  );
};

export default NewsPage;

export const getServerSideProps: GetServerSideProps<
  INewsPageProps
> = async () => {
  console.log("Generating / Regenerating NewsList");

  try {
    const fetchNews = await fetch("http://localhost:4000/news");
    const news: Inews[] = await fetchNews.json();

    const catagory = news
      .map((berita) => berita.catagory)
      .filter((value, index, self) => self.indexOf(value) === index);

    return {
      props: {
        news,
        catagory,
      },
    };
  } catch (error) {
    return {
      props: {
        news: null,
        catagory: null,
      },
    };
  }
};
