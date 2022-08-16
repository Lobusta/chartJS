
import { createSlice } from '@reduxjs/toolkit';


export interface IshopState{
    Countries: String[],
}


const initialState:IshopState = {
    Countries: [],
};



const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state:IshopState, {payload}) => {
        state.Countries = payload;
    }
  },

  
});

export const { setCountries } =
countrySlice.actions;

export default countrySlice.reducer;



