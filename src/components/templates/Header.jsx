import React from "react";
import { SlCalender } from "react-icons/sl";
import { MdLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";
import { LuPlayCircle } from "react-icons/lu";

function Header({ data }) {
  return (
    <>
      <div className="md:w-full left-0  flex justify-center absolute top-0 z-10">
        <div
          style={{
            background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.2),rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${
              data.backdrop_path || data.profile_path
            } )`,
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
          className="w-[100%] h-[100vh]"
        >
          <div className="text-white text-6xl text-center gap-2 h-full flex flex-col pb-6 justify-end tracking-tighter">
            <h1>{data.title || data.original_name || data.original_title}</h1>
            {/* <p className="md:text-[4vw] lg:text-[1vw] tracking-normal flex items-center justify-center px-40 ">
              {data.overview.slice()}
            </p> */}

            <p className="lg:text-[1.2vw] tracking-normal flex items-center justify-center px-10 md:px-20 lg:px-40 text-xs ">
              {data.overview.slice()}
            </p>

            <div className="text-sm flex justify-center tracking-normal items-center">
              <div className="flex px-4 items-center gap-2">
                <SlCalender className="" />
                {data.release_date || "No Info."}
              </div>

              <div className="flex px-4 items-center gap-2">
                <MdLocalMovies className="" />
                {data.media_type.toUpperCase()}
              </div>
            </div>
            <div className="text-xl flex justify-center tracking-normal items-center">
              <Link className="text-blue-400 flex items-center gap-1 hover:text-blue-300 hover:scale-150 transition-all ease-out duration-200">
                <LuPlayCircle />
                <h1>Watch Trailer</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
