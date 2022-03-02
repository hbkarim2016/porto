import { createSlice } from "@reduxjs/toolkit";

const FeedbackSlice = createSlice({
    name:'Feedback',
    initialState:{
        feedbackPosition:'left_1',
        indx:1
    },
    reducers:{
        FeedbackMoving:( state ) => {
            state.indx = state.indx + 1;
            if( state.indx === 4 ){
                state.indx = 1;
            }
            state.feedbackPosition = `left_${state.indx}`
        }
    }
});

export const { FeedbackMoving } = FeedbackSlice.actions;
export default FeedbackSlice.reducer;