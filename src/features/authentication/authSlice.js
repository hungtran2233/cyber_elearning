import { createSlice } from "@reduxjs/toolkit";

import { signInAction, fetchProfileAction, updateUserAction } from "./authAction";

const initialState = {
	profile: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {},

	extraReducers(builder) {
		// Sign in
		builder.addCase(signInAction.fulfilled, (state, action) => {
			state.profile = action.payload;
		});

		// Get profile
		builder.addCase(fetchProfileAction.fulfilled, (state, action) => {
			state.profile = action.payload;
		});

		// update user action
		builder.addCase(updateUserAction.fulfilled, (state, action) => {
			state.profile = action.payload;
		});
	},
});

export default authSlice;
