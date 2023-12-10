import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addMovieVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useGetMovieVideo = (movieid) => {
  const dispatch = useDispatch();
  const moviesVideo = useSelector((store) => store.movie.getMovieVideo);
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
      API_OPTION
    );
    const json = await data.json();
    const filter = json.results.filter((video) => video.type === "Trailer");
    const trailer = filter.length ? filter[0] : json.results[0];
    dispatch(addMovieVideo(trailer));
  };
  useEffect(() => {
    !moviesVideo &&  getMovieVideo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGetMovieVideo;
