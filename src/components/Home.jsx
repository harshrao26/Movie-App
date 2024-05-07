import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Header from "./templates/Header";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import TrendingCardContainer from "./templates/TrendingCardContainer";
import Loader from "../components/templates/Loader";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { Link } from "react-router-dom";
function Home() {
  const [wallpaper, setWallpaper] = useState(null);
  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomWallpaper =
        data.results[Math.floor(Math.random() * data.results.length)];

      setWallpaper(randomWallpaper);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(wallpaper);

  useEffect(() => {
    !wallpaper && getWallpaper();
  }, []);
  return wallpaper ? (
    <>
      <div className="flex bg-zinc-900 relative ">
        <Sidenav />
        <div className="w-[80%] ml-[20%] ">
          <div className="">
            <Topnav />
          </div>
          <Header data={wallpaper} className="" />
          <TrendingCardContainer className="mt-[80vh]" />
        </div>
      </div>
      {/* <Link to="/signin">Sign In</Link>  */}
    </>
  ) : (
    <div className="w-full h-screen flex justify-center items-center text-white text-4xl">
      <Loader />
    </div>
  );
}

export default Home;
