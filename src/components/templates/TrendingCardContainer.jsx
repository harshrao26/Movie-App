import React, { useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";
import Dropdown from "./Dropdown";
import axios from "../../utils/axios";
import { ImFire } from "react-icons/im";

function TrendingCardContainer() {
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all");

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrending();
  }, [category]);

  // Function to handle category change in dropdown
  const handleCategoryChange = (e) => {
    setCategory(e.target.value); // Update category state based on selected option
  };

  return (
    <>
      <div className="bg-zinc-900 mx-4 mt-[90vh]">
        <div className=" flex  justify-between my-8">
          <div className="text-xl gap-2 tracking-tighter flex items-center font-semibold text-white  px-4 rounded-lg">
            <h1 className="text-orange-600">
              <ImFire />
            </h1>
            Trending
          </div>
          <div className="flex items-center ">
            {/* Dropdown component */}
            <Dropdown
              title="Sort by"
              options={["all", "tv", "movie"]}
              onChange={handleCategoryChange} // Pass handleCategoryChange function as onChange prop
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-2 bg\-red-500">
          {/* Map through trending data and render TrendingCard component */}
          {trending.map((value, key) => {
            return <TrendingCard data={value} key={key} />;
          })}
        </div>
      </div>
    </>
  );
}

export default TrendingCardContainer;
