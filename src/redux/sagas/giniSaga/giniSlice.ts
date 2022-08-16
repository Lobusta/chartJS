
import { createSlice } from '@reduxjs/toolkit';


export interface IGiniState{
    Ginis: String[],
}


const initialState:IGiniState = {
    Ginis: [],
};



const giniSlice = createSlice({
  name: 'ginis',
  initialState,
  reducers: {
    setGinis: (state:IGiniState, {payload}) => {
        state.Ginis = payload;
    }
  },

  
});

export const { setGinis } =
giniSlice.actions;

export default giniSlice.reducer;



