import { useDispatch, useSelector } from "react-redux";
import { addTopRatedVideos } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedg = useSelector((store) => store.movie.topRated);
  const getMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addTopRatedVideos(json.results));
  };
  useEffect(() => {
    !topRatedg && getMoviesData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export default useTopRatedMovies;
