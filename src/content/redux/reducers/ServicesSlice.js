import { createSlice } from "@reduxjs/toolkit";

const ServicesSlice = createSlice({
    name:'services_slice',
    initialState:{
        position:'1st'
    },
    reducers:{
        positionReducer:(state,action) => {
            let circleName = action.payload.name;
            state.position = circleName;    
        }
    }
});

export const {positionReducer} = ServicesSlice.actions;
export default ServicesSlice.reducer;