import React from "react";
import { IMG_URL } from "./utils/constant";

const Moviecard = ({ postpath }) => {
  if(!postpath) return
  return (
    <div className="md:w-48 w-32  p-2 ">
      <img alt="movieCard" src={IMG_URL + postpath} />
    </div>
  );
};

export default Moviecard;
