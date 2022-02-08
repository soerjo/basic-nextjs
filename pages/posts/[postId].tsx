import React from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { IoChevronBack } from "react-icons/io5";
import { IdataPost } from ".";

interface IPostDetails {
  data: IdataPost;
}

const PostDetails: React.FC<IPostDetails> = ({ data }) => {
  const router = useRouter();
  const handlebutton = () => {
    router.push("/posts");
  };
  return (
    <div>
      <div className="bg-green-400 py-3 flex">
        <h1 className="text-2xl font-semibold text-white mx-auto">Details:</h1>
      </div>
      <div className="container mx-auto">
        <div className="my-4">
          {router.isFallback ? (
            <p>Loading...</p>
          ) : (
            <>
              <h2 className="text-xl font-medium text-green-500 capitalize">
                {data.title}
              </h2>
              <p className="text-base ">{data.body}</p>
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

export default PostDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`http://localhost:4000/posts`);
  const datas: IdataPost[] = await response.json();
  const paths = datas.slice(0, 5).map((data) => ({
    params: {
      postId: `${data.id}`,
    },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<IPostDetails> = async ({
  params,
}) => {
  const response = await fetch(`http://localhost:4000/posts/${params?.postId}`);
  const datas: IdataPost = await response.json();

  return {
    props: {
      data: datas,
    },
  };
};
