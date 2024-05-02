import React from "react";
import noimg from "../../assets/no-image.png";
function TrendingCard({ data}) {
  return (
    <div className="w-[15%] h-full  rounded-md relative overflow-hidden">
      <img
        src={
          data.backdrop_path || data.poster_path
            ? `https://image.tmdb.org/t/p/original/${
                data.poster_path || data.profile_path
              }`
            : noimg
        }
        alt="img"
        className="w-[100%]  shadow-xl hover:scale-150 transition-all ease-in-out duration-300"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-50"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.3),rgba(0,0,0,2))`,
        }}
      />
      <h1 className="text-white absolute bottom-0 w-full text-[1.1vw] font-semibold tracking-tighter p-2">
        {data.title || data.original_name || data.original_title || data.name}
      </h1>
      {/* <p className="absolute bottom-0 w-full text-sm p-2">{data.overview}</p> */}
    </div>
  );
}

export default TrendingCard;
