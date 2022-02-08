import React from "react";
import useSWR, { Fetcher } from "swr";

interface IData {
  likes: number;
  subscribes: number;
  folowers: number;
}

const fetchingData: Fetcher<IData> = async (url: string) => {
  try {
    const fetchData = await fetch(url);
    const data = fetchData.json();
    return data;
  } catch (error) {
    throw new Error("somethink error");
  }
};

const useFetchData = () => {
  const { data, error } = useSWR(
    "http://localhost:4000/dashboard",
    fetchingData
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

const Dashboard = () => {
  const { data, isError, isLoading } = useFetchData();

  if (isError) {
    return <p className="bg-red-500 text-white">Some think error!</p>;
  }
  return (
    <div>
      <h1>Dashboard Page</h1>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>Likes: {data?.likes}</p>
            <p>Subsrcibes: {data?.subscribes}</p>
            <p>Folowers: {data?.folowers}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
