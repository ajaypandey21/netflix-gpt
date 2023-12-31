import { useDispatch, useSelector } from "react-redux";
import { addpopularMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";

const useGetPopularMovies = () => {
  const dispatch = useDispatch();
  const populardata = useSelector((store) => store.movie.popularMovies);
  const getMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addpopularMovies(json.results));
  };
  useEffect(() => {
    !populardata && getMoviesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export default useGetPopularMovies;
