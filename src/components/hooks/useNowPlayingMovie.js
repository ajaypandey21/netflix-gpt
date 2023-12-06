import { useDispatch } from "react-redux";
import { addnowPlayingMovie } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant"
import { useEffect } from "react";

const useNowPlayingMovie = () => {
    
    const dispatch  = useDispatch()
    const getMoviesData = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTION
      );
      const json = await data.json();
      console.log(json);
      dispatch(addnowPlayingMovie(json.results))
    };
    useEffect(() => {
      getMoviesData();
    }, []);
  
}
export default useNowPlayingMovie;