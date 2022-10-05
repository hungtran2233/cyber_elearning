import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "features/elearning/pages/home/utils/homeSlice";

const store = configureStore({
	reducer: {
		eLearningHome: homeSlice.reducer,
	},
});
export default store;
