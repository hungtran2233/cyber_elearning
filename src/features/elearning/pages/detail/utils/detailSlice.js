import { createSlice } from "@reduxjs/toolkit";
import { fetchCourseByCategoryAction, fetchCourseDetailAction } from "./detailAction";

const initialState = {
	courseDetail: null,
	courseByCategory: null,
};

const detailSlice = createSlice({
	name: "detail",
	initialState: initialState,
	reducers: {},

	extraReducers: (builder) => {
		// get course detail
		builder.addCase(fetchCourseDetailAction.fulfilled, (state, action) => {
			state.courseDetail = action.payload;
		});

		// get arr course by category
		builder.addCase(fetchCourseByCategoryAction.fulfilled, (state, action) => {
			state.courseByCategory = action.payload;
		});
	},
});

export default detailSlice;
