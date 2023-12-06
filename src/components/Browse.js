import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import Header from "./header";
import useGetPopularMovies from "./hooks/useGetPopularMovies";
import useGetUpcomingVideo from "./hooks/useGetUpcomingVideo";
import useNowPlayingMovie from "./hooks/useNowPlayingMovie";
import useTopRatedMovies from "./hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovie();
  useGetPopularMovies();
  useGetUpcomingVideo();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <MainContainer  />
      <SecondContainer />
    </div>
  );
};

export default Browse;


