import React from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from './templates/Topnav'
function Home() {
  return (
    <>
      <div className="flex h-screen">
        <Sidenav />
        <div className="w-[80%] h-full">
          <Topnav />
        </div>
      </div>
    </>
  );
}

export default Home;
