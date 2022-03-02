import { configureStore } from "@reduxjs/toolkit";
// REDUCERS SLICES
import mainSliderSlice from "./reducers/mainSliderSlice";
import navbarSlice from './reducers/navbarSlice';
import overPageSlice from './reducers/overPageSlice';
import ScrollingSmooth from "./reducers/ScrollingSmooth";
import ServicesSlice from './reducers/ServicesSlice';
import CommentsReducer from './reducers/CommentsReducer';
import FeedbackSlice from "./reducers/FeedbackSlice";
// ====================================================
// CREATE STORE
const Store = configureStore({
    reducer:{
        navbar:navbarSlice, // NAVBAR HANDLE RESPONSIVE BUTTON
        overPage:overPageSlice, // HANDLE OVERPAGE SHOW AND HIDE && HANDLE THE CONTENT IN THERE
        mainSlider:mainSliderSlice, // HANDLE MAIN SLIDER
        Services:ServicesSlice, // HANDLE MAIN SLIDER
        ScrollStore:ScrollingSmooth, // HANDLE SCROLL SMOOTH
        CommentStore:CommentsReducer, // HANDLE COMMENTS
        FeedbackStore:FeedbackSlice // HANDLE FEEDBACK
         
    }
});

export default Store;