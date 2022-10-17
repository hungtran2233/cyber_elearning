import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "api/instance";

// Sign Up
export const signUpAction = createAsyncThunk("auth/signUp", async (user) => {
	try {
		const res = await instance.request({
			url: "/api/QuanLyNguoiDung/DangKy",
			method: "POST",
			data: user,
		});
		return res.data;
	} catch (err) {
		console.log(err);
	}
});

// Sign in
export const signInAction = createAsyncThunk("auth/signIn", async (user) => {
	try {
		const res = await instance.request({
			url: "/api/QuanLyNguoiDung/DangNhap",
			method: "POST",
			data: user,
		});

		const profile = { ...res.data };
		delete profile.accessToken;
		localStorage.setItem("token", res.data.accessToken);
		return profile;
	} catch (err) {
		console.log(err);
	}
});

// Profile
export const fetchProfileAction = createAsyncThunk("auth/fetchProfile", async () => {
	try {
		const res = await instance.request({
			url: "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
			method: "POST",
		});
		return res.data;
	} catch (err) {
		console.log("Chua dang nhap");
	}
});
