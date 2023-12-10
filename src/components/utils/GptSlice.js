import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchToggle: false,
    resultMoviedata: null,
    AIresultMoviedata: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.gptSearchToggle = !state.gptSearchToggle;
    },
    resultmoviesData: (state, action) => {
      state.resultMoviedata = action.payload;
    },
    OpenAimoviesData: (state, action) => {
      state.AIresultMoviedata = action.payload;
    },
  },
});

export const { toggleGptSearch,resultmoviesData,OpenAimoviesData } = gptSlice.actions;
export default gptSlice.reducer;
