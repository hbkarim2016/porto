import { createSlice } from "@reduxjs/toolkit";

const ScrollingSmooth = createSlice({
    name:'scrolling',
    initialState:{
        url:''
    },
    reducers:{
        ScrollLocationReducer:( state, action ) => {
            state.url = action.payload.url;
        },
        ScrollReducer:( state ) => {
            window.location.hash=('');
            window.location.hash=(state.url);
        }
    }
});

export const { ScrollLocationReducer, ScrollReducer  } = ScrollingSmooth.actions;
export default ScrollingSmooth.reducer;