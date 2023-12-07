import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import { logo } from "./utils/constant";

const GptPage = () => {
  return (
    <div>
      <img className="absolute -z-20" alt="logo" src={logo} />
      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  );
};

export default GptPage;
