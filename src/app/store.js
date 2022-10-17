import { configureStore } from "@reduxjs/toolkit";
import authSlice from "features/authentication/authSlice";
import homeSlice from "features/elearning/pages/home/utils/homeSlice";

const store = configureStore({
	reducer: {
		eLearningHome: homeSlice.reducer,
		auth: authSlice.reducer,
	},
});
export default store;
