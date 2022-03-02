import { createSlice } from "@reduxjs/toolkit";

const overPageSlice = createSlice({
    name:'overPage-show',
    // STATE STORE
    initialState:{
        overPageShow:0,
        overPageContent:'',
        searchValue:'',
        photo_target:'',
        photo_num:''
    },
    // REDUCERS STORE
    reducers:{
        // OPEN OVERPAGE
        overPageShow:(state,action) =>{
            state.overPageShow = 1;
            state.overPageContent = action.payload.content;
        },
        // HANDLE SEARCH VALUE
        searchSubmit:(state,action) => {
            state.searchValue = action.payload.value;
        },
        // HANDLE PHOTO TARGET
        photoTarget:(state,action) => {
            state.photo_target = action.payload.photo_target;
            state.photo_num = action.payload.photoNum;
        },
        // CLOSE OVERPAGE
        overPageClose:(state) =>{
            state.overPageShow = 0;
            state.overPageContent = '';
        }
    }
});

export const { overPageShow, searchSubmit, photoTarget, overPageClose } = overPageSlice.actions;
export default overPageSlice.reducer;