import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Dropdown from "./templates/Dropdown";
import Topnav from "./templates/Topnav";
function Trending() {
  const back = useNavigate();
  return (
    <>
      <div className="text-white p-10">
        <div
          className="flex gap- items-center text-lg cursor-pointer"
          onClick={() => back(-1)}
        >
          <IoIosArrowBack /> Back
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-5xl tracking-tighter ">Trending</h1>
          <div className="w-[100%]">
            <Topnav />
          </div>
          <div className="flex gap-4">
            <Dropdown
              title="Category"
              options={["all", "movie", "tv", "people"]}
            />
            <Dropdown title="Day" options={["week", "day"]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Trending;
