import React from "react";
import language from "./languageConst";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const langconfi = useSelector((store)=>store.config.lang).toLowerCase()
    console.log(langconfi)
  return (
    <div className=" w-full pt-[7%] flex justify-center ">
      <form className="w-1/2 grid grid-cols-12">
        <input
          className="py-3 outline-none px-2 text-white m-4 col-span-9 bg-black rounded-xl"
          type="text"
          placeholder={language.wwylth[langconfi]}
        />
        <button className="bg-red-700 col-span-3 m-4 font-bold rounded-lg text-white">
          {language.search[langconfi]}
        </button>
      </form>   
    </div>
  );
};

export default GptSearchBar;
