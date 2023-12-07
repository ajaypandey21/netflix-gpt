import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import GptSlice from "./GptSlice";

const appStore = configureStore(
{
    reducer:{
        user:userSlice,
        movie:movieSlice,
        gpt:GptSlice
    }
    

})

export default appStore