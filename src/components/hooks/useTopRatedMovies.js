import { useDispatch } from "react-redux";
import { addTopRatedVideos, addUpcoming } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addTopRatedVideos(json.results));
  };
  useEffect(() => {
    getMoviesData();
  }, []);
};
export default useTopRatedMovies;
