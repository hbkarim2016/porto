import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
    name:'navbar-responsive',
    initialState:{
        navbarShow:0
    },
    reducers:{
        navbarReducer:(state) => {
            let navbarState = state.navbarShow;
            if( navbarState === 0 ){
                state.navbarShow = 1;
            }else{
                state.navbarShow = 0;
            }
        }
    }
});

export const { navbarReducer } = navbarSlice.actions;
export default navbarSlice.reducer;