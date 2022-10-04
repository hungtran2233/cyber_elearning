import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "features/elearning/pages/detail/ultis/detailSlice";
import homeSlice from "features/elearning/pages/home/ultis/homeSlice";

const store = configureStore({
	reducer: {
		eLearningHome: homeSlice.reducer,
		eLearningDetail: detailSlice.reducer,
	},
});
export default store;
