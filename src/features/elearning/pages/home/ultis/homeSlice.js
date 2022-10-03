import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCourseListAction, fetchCategoryAction, fetchCourseListAction } from "./homeAction";

const initialState = {
	category: null,
	allCourseList: null,
};
const homeSlice = createSlice({
	name: "home",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Category
		builder.addCase(fetchCategoryAction.fulfilled, (state, action) => {
			state.category = action.payload;
		});

		// Course list
		builder.addCase(fetchAllCourseListAction.fulfilled, (state, action) => {
			state.allCourseList = action.payload;
		});
	},
});
export default homeSlice;
