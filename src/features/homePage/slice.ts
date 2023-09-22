import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 0,
};

const homePageSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
			increment: (state) => {
			state.value += 1;
			},
			decrement: (state) => {
			state.value -= 1;
			},
    },
});
  
export const { increment, decrement } = homePageSlice.actions;
export default homePageSlice.reducer;