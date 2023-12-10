import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import { logo } from "./utils/constant";

const GptPage = () => {
  return (
    <div>
      <img className="fixed h-screen w-screen object-cover -z-20" alt="logo" src={logo} />
      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  );
};

export default GptPage;
