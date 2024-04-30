import React from "react";
import Sidenav from "./templates/Sidenav";
function Home() {
  return (
    <>
      <div className="flex h-screen">
        <Sidenav />
        <div className="w-[80%] h-full"></div>
      </div>
    </>
  );
}

export default Home;
