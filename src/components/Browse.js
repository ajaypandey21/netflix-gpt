import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import Header from "./header";
import useGetPopularMovies from "./hooks/useGetPopularMovies";
import useGetUpcomingVideo from "./hooks/useGetUpcomingVideo";
import useNowPlayingMovie from "./hooks/useNowPlayingMovie";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import GptPage from "./GptPage";

const Browse = () => {
  const isgptTrue = useSelector((store) => store.gpt);
  useNowPlayingMovie();
  useGetPopularMovies();
  useGetUpcomingVideo();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      {isgptTrue.gptSearchToggle ? (
        <GptPage />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
