import React from "react";
import Loading from "../../assets/Loader.gif";

function Loader() {
  return (
    <>
      <div className="w-full h-full bg-black flex justify-center items-center">  
        <img className="" src={Loading} alt="Loading..." />
      </div>
    </>
  );
}

export default Loader;
