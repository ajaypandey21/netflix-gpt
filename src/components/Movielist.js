import React from "react";
import Moviecard from "./Moviecard";

const Movielist = ({ title, movies }) => {
 
  return (
    <div className="p-4 ">
      <h1 className="text-2xl pl-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll  ">
        <div className="flex ">
          {movies?.map((movie) => (
            <Moviecard key={movie?.id} postpath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
