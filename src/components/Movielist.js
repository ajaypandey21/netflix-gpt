import React from "react";
import Moviecard from "./Moviecard";

const Movielist = ({ title, movies }) => {
 
  return (
    <div className="p-2 md:ml-6 ">
      <h1 className="md:text-2xl text-lg pl-0 md:pl-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar ">
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
