import React from "react";

const VideoTitle = ({ title, overview }) => {

  return (
    <div className=" w-screen aspect-video bg-gradient-to-r from-black pt-[12%] px-12 absolute ">
      <h1 className="font-bold text-xl md:text-5xl text-white">{title}</h1>
      <p className=" hidden md:inline-block w-1/3  pt-2 first-letter:text-lg  text-white">{overview}</p>
      <div className="my-2">
        <button className="bg-white text-black font-bold
         p-1 md:p-2 px-4 md:px-8 rounded-md hover:opacity-40">
          Play
        </button>
        <button className="bg-gray-600 hidden md:inline-block mx-2 text-white font-bold p-2 px-8 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
