import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Topnav() {
  return (
    <>
      <div className="relative w-full h-screen">
        <div className="flex items-center text-white gap-4 w-full text-2xl h-20 justify-center">
          <IoSearchSharp className="" />
          <input
            className="w-[50%] bg-transparent border-2 border-solid border-white py-1 px-4 text-lg rounded-xl outline-none"
            placeholder="Search"
            type="text"
            name=""
            id=""
          />
          <RxCross2 className="" />
        </div>
        <div className="bg-zinc-100 w-[50%] h-[80vh] ml-[25%] overflow-auto">
          <Link className="flex items-center gap-4 px-4 py-8 bg-zinc-200 ">
            <img src="" alt="Image" />
            <p>Text</p>
          </Link>
          <Link className="flex items-center gap-4 px-4 py-8 bg-zinc-200 ">
            <img src="" alt="Image" />
            <p>Text</p>
          </Link>
          <Link className="flex items-center gap-4 px-4 py-8 bg-zinc-200 ">
            <img src="" alt="Image" />
            <p>Text</p>
          </Link>
          <Link className="flex items-center gap-4 px-4 py-8 bg-zinc-200 ">
            <img src="" alt="Image" />
            <p>Text</p>
          </Link>
          <Link className="flex items-center gap-4 px-4 py-8 bg-zinc-200 ">
            <img src="" alt="Image" />
            <p>Text</p>
          </Link>
          <Link className="flex items-center gap-4 px-4 py-8 bg-zinc-200 ">
            <img src="" alt="Image" />
            <p>Text</p>
          </Link>
          <Link className="flex items-center gap-4 px-4 py-8 bg-zinc-200 ">
            <img src="" alt="Image" />
            <p>Text</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Topnav;
