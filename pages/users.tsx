import React from "react";
import { GetStaticProps } from "next";

export type IUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  addres: object;
  phone: string;
  website: string;
  company: object;
};

export type IUserPage = {
  users: Array<IUser>;
};

const UserPage: React.FC<IUserPage> = ({ users }) => {
  return (
    <>
      <h1 className="text-2xl">User Page</h1>
      <div className="container mx-auto  flex flex-col justify-center">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className=" py-2.5 mb-3 bg-green-400 rounded shadow cursor-pointer hover:bg-sky-400"
            >
              <h2 className="font-semibold text-lg">{user.username}</h2>
              <p className="font-light text-base">{user.email}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserPage;

export const getStaticProps: GetStaticProps<IUserPage> = async () => {
  console.log("Generating / Regenerating UserLists");
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
};
