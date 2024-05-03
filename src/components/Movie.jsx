import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Dropdown from "./templates/Dropdown";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import TrendingCard from "../components/templates/TrendingCard";
import Loader from "../components/templates/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

function Movie() {
  const back = useNavigate();
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // State to store total number of pages

  const getMovies = async () => {
    try {
      // Fetch movie data based on category, and page number
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      setTotalPages(data.total_pages); // Update total pages
      setPage(page + 1); // Increment page number for next pagination
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, page]); // Include category and page as dependencies

  const handleCategoryChange = (e) => {
    setCategory(e.target.value); // Update category state based on selected option
    setPage(1); // Reset page to 1 when category changes
    setMovies([]); // Clear movie data when category changes
  };

  return (
    <>
      <div className="text-white p-10">
        <div
          className="flex gap- items-center text-lg cursor-pointer"
          onClick={() => back(-1)}
        >
          <IoIosArrowBack className="text-blue-500" /> Back
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-5xl tracking-tighter text-blue-500">Movie</h1>
          <div className="w-[200vw]">
            <Topnav />
          </div>
          <div className="flex gap-4">
            <Dropdown
              title="Category"
              onChange={handleCategoryChange}
              options={["popular", "top_rated", "upcoming", "now_playing"]}
            />
          </div>
        </div>
        {/* Infinite Scroll Component */}
        <InfiniteScroll
          dataLength={movies.length} // Length of the data
          next={getMovies} // Function to call when more data needs to be fetched
          hasMore={page <= totalPages} // Check if current page is less than or equal to total pages
          loader={<Loader />} // Loader component to display while loading more data
          className="flex flex-wrap justify-center gap-8 mt-2" // Additional styling for the scrollable area
        >
          {/* Map through movie data and render TrendingCard component */}
          {movies.map((value, key) => (
            <TrendingCard data={value} key={key} />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}

export default Movie;
