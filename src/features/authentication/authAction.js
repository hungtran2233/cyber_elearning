import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "api/instance";

export const signInAction = createAsyncThunk("auth/signIn", async (user) => {
	try {
		const res = await instance.request({
			url: "/api/QuanLyNguoiDung/DangNhap",
			method: "POST",
			data: user,
		});
		console.log(res);
	} catch (err) {
		console.log(err);
	}
});
