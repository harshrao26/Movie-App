import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Dropdown from "./templates/Dropdown";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import TrendingCard from "../components/templates/TrendingCard";
import Loader from "../components/templates/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  const back = useNavigate();
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [page, setPage] = useState(1);

  const getTrending = async () => {
    try {
      // Fetch trending data based on category, duration, and page number
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      setTrending((prevTrending) => [...prevTrending, ...data.results]);
      setPage(page + 1); // Increment page number for next pagination
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, duration, page]); // Include page as a dependency

  const handleCategoryChange = (e) => {
    setCategory(e.target.value); // Update category state based on selected option
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value); // Update duration state based on selected option
  };

  return (
    <>
      <div className="text-white px-5 py-2 md:px-10 md:py-5 ">
        <div
          className="flex gap- items-center text-lg cursor-pointer"
          onClick={() => back(-1)}
        >
          <div className="flex items-center justify-around w-full relative ">
            <div class="hover:scale-125 flex transition-all ease-in-out items-center">
              <IoIosArrowBack className="text-blue-500" />
              <p className="hidden md:block">Back</p>
            </div>
            <div className="w-full h-auto ">
              <Topnav />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h1 className=" text-2xl px-8 py-2 mb-4 tracking-tighter rounded-lg bg-gradient-to-r hidden md:block from-blue-500 to-zinc-900">
            Trending
          </h1>
          <div className="gap-4 flex items-cente">
            <Dropdown
              title="Category"
              onChange={handleCategoryChange}
              options={["all", "movie", "tv", "people"]}
            />
            <Dropdown
              title="Duration"
              onChange={handleDurationChange}
              options={["week", "day"]}
            />
          </div>
        </div>
        {/* Infinite Scroll Component */}
        <InfiniteScroll
          dataLength={trending.length} // Length of the data
          next={getTrending} // Function to call when more data needs to be fetched
          hasMore={true} // Whether there is more data to load
          loader={<Loader />} // Loader component to display while loading more data
          className="flex flex-wrap justify-center gap-8 mt-2" // Additional styling for the scrollable area
        >
          {/* Map through trending data and render TrendingCard component */}
          {trending.map((value, key) => (
            <TrendingCard data={value} key={key} />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}

export default Trending;
