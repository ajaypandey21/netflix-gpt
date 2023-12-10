import { useDispatch, useSelector } from "react-redux";
import { addnowPlayingMovie } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  const nowPlayingrdata = useSelector((store) => store.movie.nowPlayingMovies);
  const getMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addnowPlayingMovie(json.results));
  };
  useEffect(() => {
    !nowPlayingrdata&&getMoviesData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export default useNowPlayingMovie;
