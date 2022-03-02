import { createSlice } from "@reduxjs/toolkit";

const mainSliderSlice = createSlice({
    name:'main-slider',

    initialState:{
        direction:'left',
        show:'showElement',
        numSlider:0
    },
    
    reducers:{
        // HIDE SLIDER CONTENT TO CHANGE
        HideReducer:(state) => {
            state.show = 'hideElement';
        },
        // CHANGE SLIDER CONTENT 
        SliderShowReducer:(state,action) =>{
            let direct = action.payload.actionDirection;
            let countData = action.payload.countData;
            if( direct === 'left' ){
                if( state.numSlider > 0 ){
                    state.direction = direct;
                    state.numSlider = state.numSlider - 1;
                }
            }else if( direct === 'right' ){
                if( state.numSlider + 1 < countData ){
                    state.direction = direct;
                    state.numSlider = state.numSlider + 1;
                }
            } 
            state.show = 'showElement';
        }
    }
});

export const { HideReducer, SliderShowReducer } = mainSliderSlice.actions;
export default mainSliderSlice.reducer;