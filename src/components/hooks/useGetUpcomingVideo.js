import { useDispatch } from "react-redux";
import { addUpcoming } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";

const useGetUpcomingVideo = () => {
  const dispatch = useDispatch();
  const getMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addUpcoming(json.results));
  };
  useEffect(() => {
    getMoviesData();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export default useGetUpcomingVideo;
