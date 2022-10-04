import { createSlice } from "@reduxjs/toolkit";
import { fetchCourseDetailAction } from "./detailAction";

const initialState = {
	courseDetail: null,
};

const detailSlice = createSlice({
	name: "eLearningDetail",
	initialState: initialState,
	reducers: {},

	extraReducers: (builder) => {
		// course detail
		builder.addCase(fetchCourseDetailAction.fulfilled, (state, action) => {
			state.courseDetail = action.payload;
		});
	},
});

export default detailSlice;
