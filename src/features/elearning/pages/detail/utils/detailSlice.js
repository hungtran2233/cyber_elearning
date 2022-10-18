import { createSlice } from "@reduxjs/toolkit";
import { fetchCourseDetailAction } from "./detailAction";

const initialState = {
	courseDetail: null,
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
	},
});

export default detailSlice;
