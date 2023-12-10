import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies) return;
  const { original_title, overview, id } = movies[0];

  return (
    <div className="pt-[37%] md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieid={id} />
    </div>
  );
};

export default MainContainer;
