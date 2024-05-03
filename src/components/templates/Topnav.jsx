import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import noimg from "../../assets/no-image.png";
import Header from "./Header";
function Topnav() {
  const [query, setQuery] = useState("");

  const [search, setSearch] = useState([]);

  const GetSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
    //   console.log(data);
      setSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetSearch();
  }, [query]);
  return (
    <>
      <div className="relative border-l- border-blue-500  text-black z-50">
        <div className="flex items-center text-white gap-4 w-full text-2xl h-20 justify-center">
          <IoSearchSharp className="" />
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className="w-[50%]  bg-transparent border-2 border-solid border-white py-1 px-4 text-lg rounded-xl outline-none"
            placeholder="Search"
            type="text"
            name=""
            id=""
          />
          {query && <RxCross2 className="" onClick={() => setQuery("")} />}
        </div>
        <div className="bg-zinc-100 w-[50%] max-h-[80vh] ml-[25%] overflow-auto rounded-lg absolute">
          {/* <Link className="flex items-center gap-4 px-4 py-8 bg-zinc-200 ">
            <img src="" alt="Image" />
            <p>Text</p>
          </Link> */}
          {search.map((item) => (
            <Link
              key={item.id}
              className="flex items-center h-28  gap-4 px-4 py-4 bg-zinc-200 hover:bg-zinc-300 transition-all ease-in-out  rounded-sm"
            >
              <img
                src={item.backdrop_path || item.poster_path ? `https://image.tmdb.org/t/p/original/${item.poster_path || item.profile_path}` : noimg }
                alt="img"
                className="w-[60px] rounded-sm shadow-xl"
              />
              <p>{item.name || item.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

// {backdrop_path: '/dexmjWmlEAgYS2vOXhqle7dPmO.jpg', id: 65682, original_name: 'भाबीजी घर पर हैं!', overview: "Two culturally different husbands try to get the attention of each other's wives.", poster_path: '/2lkV7WWu1QbXV3PYqqslgGZMLNq.jpg', …}

export default Topnav;
