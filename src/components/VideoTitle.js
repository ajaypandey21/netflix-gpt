import React from "react";

const VideoTitle = ({ title, overview }) => {

  return (
    <div className=" w-screen aspect-video bg-gradient-to-r from-black pt-[12%] px-12 absolute ">
      <h1 className="font-bold text-5xl text-white">{title}</h1>
      <p className="w-1/3 pt-2 first-letter:text-lg  text-white">{overview}</p>
      <div className="my-2">
        <button className="bg-white text-black p-2 px-8 rounded-md hover:opacity-40">
          Play
        </button>
        <button className="bg-gray-600 mx-2 text-white p-2 px-8 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
