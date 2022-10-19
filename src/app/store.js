import { configureStore } from "@reduxjs/toolkit";
import authSlice from "features/authentication/authSlice";
import cartSlice from "features/elearning/utils/cartSlice";
import detailSlice from "features/elearning/pages/detail/utils/detailSlice";
import homeSlice from "features/elearning/pages/home/utils/homeSlice";

const store = configureStore({
	reducer: {
		eLearningHome: homeSlice.reducer,
		auth: authSlice.reducer,
		eLearningDetail: detailSlice.reducer,
		eLearningCart: cartSlice.reducer,
	},
});
export default store;
