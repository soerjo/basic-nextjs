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
    <div>
      <h1>User Page</h1>
      {users.map((user) => {
        return (
          <div
            key={user.id}
            className="container mx-auto mt-1 bg-green-400 overflow-hidden rounded shadow p-2 cursor-pointer hover:bg-sky-400"
          >
            <h2 className="font-semibold text-lg">{user.username}</h2>
            <p className="font-light text-base">{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserPage;

export const getStaticProps: GetStaticProps<IUserPage> = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data[0]);
  return {
    props: {
      users: data,
    },
  };
};
