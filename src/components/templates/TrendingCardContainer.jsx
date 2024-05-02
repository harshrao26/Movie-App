import React, { useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";
import axios from "../../utils/axios";

function TrendingCardContainer() {
  const [trending, setTrending] = useState([]);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      setTrending(data.results);
      // console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <>
      
      <div className="bg-zinc-900 m-4 ">
      <h1 className="text-xl tracking-tighter font-semibold bg-white text-zinc-900 inline px-4 rounded-lg">
        Trending
      </h1>
        <div className="flex flex-wrap justify-center gap-8 mt-2 bg\-red-500">
          {trending.map((value, key) => {
            return <TrendingCard data={value} />;
          })}
        </div>
      </div>
    </>
  );
}

export default TrendingCardContainer;
