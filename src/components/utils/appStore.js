import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import GptSlice from "./GptSlice";
import ConfigSlice from "./ConfigSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
    gpt: GptSlice,
    config: ConfigSlice,
  },
});

export default appStore;
