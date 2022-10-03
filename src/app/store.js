import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "features/elearning/pages/home/ultis/homeSlice";

const store = configureStore({
	reducer: {
		eLearningHome: homeSlice.reducer,
	},
});
export default store;
