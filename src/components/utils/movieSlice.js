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
        addpopularMovies: (state,action)=>{
            state.popularMovies=action.payload
        },
        addMovieVideo:(state,action)=>{
            state.getMovieVideo = action.payload
        },
        addTopRatedVideos:(state,action)=>{
            state.topRated = action.payload
        },
        addUpcoming:(state,action)=>{
            state.upcoming = action.payload
        }
    }
    
})


export const {addnowPlayingMovie,addMovieVideo,addpopularMovies,addUpcoming,addTopRatedVideos} =  movieSlice.actions
export default movieSlice.reducer  