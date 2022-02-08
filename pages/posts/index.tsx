import { GetStaticProps } from "next";
import React from "react";
import Alinks from "../../components/Alinks";

export interface IdataPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type IPostPage = {
  posts: Array<IdataPost>;
};

const PostsPage: React.FC<IPostPage> = ({ posts }) => {
  return (
    <>
      <div className="bg-green-400 py-3 flex ">
        <h1 className="text-2xl font-semibold text-white uppercase mx-auto">
          PostPage
        </h1>
      </div>
      <div className="container mx-auto mt-5">
        {posts.map((post) => {
          return (
            <Alinks key={post.id} url={`posts/${post.id}`}>
              <div className="bg-sky-300 p-3 mb-2 cursor-pointer hover:bg-sky-600">
                <h2>{post.title}</h2>
              </div>
            </Alinks>
          );
        })}
      </div>
    </>
  );
};

export default PostsPage;

export const getStaticProps: GetStaticProps<IPostPage> = async () => {
  console.log("Generating / Regenerating PostList");
  const response = await fetch("http://localhost:4000/posts");
  const data: IdataPost[] = await response.json();

  return {
    props: {
      posts: data.slice(0, 5),
    },
  };
};
