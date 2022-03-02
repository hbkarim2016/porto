import { createSlice } from "@reduxjs/toolkit";

const CommentsReducer = createSlice({
    name:'comments-reducer',
    initialState:{
        commentsPosition:'comment_1'
    },
    reducers:{
        CommentChange:( state ) => {
           if( state.commentsPosition === 'comment_1' ){
               state.commentsPosition = 'comment_2';
           }else if( state.commentsPosition === 'comment_2' ){
                state.commentsPosition = 'comment_3';
            }else{
                state.commentsPosition = 'comment_1';
            }
        }
    }
});

export const { CommentChange } = CommentsReducer.actions;
export default CommentsReducer.reducer;