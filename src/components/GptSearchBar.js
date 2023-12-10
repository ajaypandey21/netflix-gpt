import React, { useRef } from "react";
import language from "./languageConst";
import { useDispatch, useSelector } from "react-redux";
import openai from "./utils/OpenAi";
import { OpenAimoviesData, resultmoviesData } from "./utils/GptSlice";
import { API_OPTION } from "./utils/constant";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langconfi = useSelector((store) => store.config.lang).toLowerCase();
  const searchText = useRef();
  const searchMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSeacrh = async () => {
    const query =
      "Act as a movie Recommendation system and recommand some movies for the query : " +
      searchText.current.value +
      ".only give me names of the 5 comma seperated movies. like the example given ahead , Example Result = sholay, dhol, don, golmaal, dhoom.";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    // console.log(chatCompletion.choices);

    if (!chatCompletion.choices[0]) return;
    const gptMovies = chatCompletion.choices[0].message.content.split(",");
    dispatch(resultmoviesData(gptMovies));
    const moviesArray = gptMovies.map((movie) => searchMovies(movie));
    const imdbResults = await Promise.all(moviesArray);
    dispatch(OpenAimoviesData(imdbResults));
  };

  return (
    <div className=" w-full pt-[7%] flex justify-center ">
      <form
        className="w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="py-3 outline-none px-2 text-white m-4 col-span-9 bg-black rounded-xl"
          type="text"
          placeholder={language.wwylth[langconfi]}
        />
        <button
          className="bg-red-700 col-span-3 m-4 font-bold rounded-lg text-white"
          onClick={handleGptSeacrh}
        >
          {language.search[langconfi]}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
