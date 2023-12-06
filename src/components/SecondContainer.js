import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const movies = useSelector((store) => store?.movie);
  return (
    movies?.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-[20rem] relative z-20">
          <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>
        <Movielist title={"Popular"} movies={movies.popularMovies} />
        <Movielist title={"Top Rated "} movies={movies.topRated} />
        <Movielist title={"Upcoming"} movies={movies.upcoming} />
      </div>
    )
  );
};

export default SecondContainer;
