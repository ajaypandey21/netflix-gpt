import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import Header from "./header";
import useNowPlayingMovie from "./hooks/useNowPlayingMovie";

const Browse = () => {
  useNowPlayingMovie();

  return (
    <div>
      <Header />
      <MainContainer  />
      <SecondContainer />
    </div>
  );
};

export default Browse;

{
  /**
   *  -Movie Container
   *    - movie bg
   *    - movie title
   *
   *   - second container
   *    - n rows
   *     - n cards in each rows
   *
   *
   */
}
