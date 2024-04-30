import React from "react";
import { Link } from "react-router-dom";
import { ImFire } from "react-icons/im";
import { WiStars } from "react-icons/wi";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { FaDisplay } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosInformationCircle } from "react-icons/io";
import { IoMdCall } from "react-icons/io";

function Sidenav() {
  return (
    <>
      <div className="w-[20%] h-full border-r-[3px] border-solid border-zinc-600 ">
        <div className="flex text-white h-24 items-center justify-center gap-2">
          <svg
            className="w-12 text-[#6556cd]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M15.4142 4.99998H21.0082C21.556 4.99998 22 5.44461 22 6.00085V19.9991C22 20.5519 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5553 2 19.9991V6.00085C2 5.44808 2.45531 4.99998 2.9918 4.99998H8.58579L6.05025 2.46445L7.46447 1.05023L11.4142 4.99998H12.5858L16.5355 1.05023L17.9497 2.46445L15.4142 4.99998ZM4 6.99998V19H20V6.99998H4Z"></path>
          </svg>
          <p className="text-3xl font-semibold tracking-tighter flex">
            <p className="text-[14a800]">Stream</p>ify
          </p>
        </div>
        <nav className="flex flex-col gap-4 text-white px-5">
          <div className="flex flex-col gap-4">
            <h1 className=" text-xl text-center px-4 py-2 rounded-xl font-semibold bg-[#6555cd]">
              New Feeds
            </h1>
            <Link className="flex items-center gap-2 hover:pl-4 transition-all ease-in-out rounded-xl py-2 hover:bg-[#6556cd] text-white ">
              <ImFire />
              Trending
            </Link>
            <Link className="flex items-center gap-2 hover:pl-4 transition-all ease-in-out rounded-xl py-2 hover:bg-[#6556cd] text-white ">
              <WiStars /> Popular
            </Link>
            <Link className="flex items-center gap-2 hover:pl-4 transition-all ease-in-out rounded-xl py-2 hover:bg-[#6556cd] text-white ">
              <IoPlaySkipForwardOutline /> Movie
            </Link>
            <Link className="flex items-center gap-2 hover:pl-4 transition-all ease-in-out rounded-xl py-2 hover:bg-[#6556cd] text-white ">
              <FaDisplay /> TV Shows
            </Link>
            <Link className="flex items-center gap-2 hover:pl-4 transition-all ease-in-out rounded-xl py-2 hover:bg-[#6556cd] text-white ">
              <BsFillPeopleFill /> Pepole
            </Link>
          </div>
          <div className=" border-t-[1px] border-solid border-zinc-100"></div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-[#6556cd]">Website Info.</h1>
            <Link className="flex items-center gap-2 hover:pl-4 transition-all ease-in-out rounded-xl py-2 hover:bg-[#6556cd] text-white "><IoIosInformationCircle /> About </Link>
            <Link className="flex items-center gap-2 hover:pl-4 transition-all ease-in-out rounded-xl py-2 hover:bg-[#6556cd] text-white "><IoMdCall /> Contact </Link>

          </div>
        </nav>
      </div>
    </>
  );
}

export default Sidenav;