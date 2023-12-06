import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        getMovieVideo:null
    },
    reducers:{
        addnowPlayingMovie: (state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addMovieVideo:(state,action)=>{
            state.getMovieVideo = action.payload
        }
    }
    
})


export const {addnowPlayingMovie,addMovieVideo} =  movieSlice.actions
export default movieSlice.reducer  