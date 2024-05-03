import React from "react";
import Loading from "../../assets/Loader.gif";

function Loader() {
  return (
    <>
      <div className="bg-green400 w-full h-full flex justify-center items-center">  
        <img className="w-[35%]" src={Loading} alt="Loading..." />
      </div>
    </>
  );
}

export default Loader;
