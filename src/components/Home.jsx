import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Header from "./templates/Header";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
function Home() {
  const [wallpaper, setWallpaper] = useState(null);
  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomWallpaper = data.results[Math.floor(Math.random() * data.results.length)];;

      setWallpaper(randomWallpaper);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(wallpaper);

  useEffect(() => {
    !wallpaper && getWallpaper();
  }, []);
  return wallpaper ? (
    <>
      <div className="flex h-screen">
        <Sidenav />
        <div className="w-[80%] ">
          <Topnav />
          <Header data={wallpaper} />
        </div>
      </div>
    </> 
  ) : (
    <div className="w-full h-screen flex justify-center items-center text-white text-4xl">
      <>Loading...</>
    </div>
  );
}

export default Home;
