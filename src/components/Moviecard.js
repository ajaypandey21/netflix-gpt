import React from "react";
import { IMG_URL } from "./utils/constant";

const Moviecard = ({ postpath }) => {
  return (
    <div className="w-48  p-2 ">
      <img alt="movieCard" src={IMG_URL + postpath} />
    </div>
  );
};

export default Moviecard;
