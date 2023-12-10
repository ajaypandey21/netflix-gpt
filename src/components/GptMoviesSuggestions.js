import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const GptMoviesSuggestions = () => {
  const { resultMoviedata, AIresultMoviedata } = useSelector(
    (store) => store.gpt
  );
 
  if (!AIresultMoviedata) return null;
  return (
    <div className="bg-black bg-opacity-70 text-white">
      <div>
        {resultMoviedata.map((movie, index) => (
          <Movielist
            key={movie}
            title={movie}
            movies={AIresultMoviedata[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMoviesSuggestions;
