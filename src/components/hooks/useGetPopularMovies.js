import { useDispatch } from "react-redux";
import {  addpopularMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant"
import { useEffect } from "react";

const useGetPopularMovies = () => {
    
    const dispatch  = useDispatch()
    const getMoviesData = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTION
      );
      const json = await data.json();
    
      dispatch(addpopularMovies(json.results))
    };
    useEffect(() => {
      getMoviesData();
       // eslint-disable-next-line
    }, []);
  
}
export default useGetPopularMovies;