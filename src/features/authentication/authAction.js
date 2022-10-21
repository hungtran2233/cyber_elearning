import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "api/instance";
import Swal from "sweetalert2";

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
		// console.log("Chua dang nhap");
	}
});

//update profile
export const updateUserAction = createAsyncThunk("auth/updateUser", async (user) => {
	try {
		const res = await instance.request({
			url: "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
			method: "PUT",
			data: user,
		});

		return res.data;
	} catch (err) {}
});

// register course
export const courseRegisterAction = createAsyncThunk(
	"payment/courseRegister",
	async (requestParams) => {
		try {
			const res = await instance.request({
				url: "/api/QuanLyKhoaHoc/DangKyKhoaHoc",
				method: "POST",
				data: {
					maKhoaHoc: requestParams.courseId,
					taiKhoan: requestParams.taiKhoan,
				},
			});
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Đăng ký thành công !",
				text: "Let'go !",
				showConfirmButton: false,
				timer: 1500,
			});
			// console.log(res);
			return res.data;
		} catch (err) {
			Swal.fire({
				icon: "info",
				title: "Không thành công !",
				text: err.response.data,
			});

			// console.log(err.response.data);
		}
	}
);

// destroy course
export const destroyCourseAction = createAsyncThunk(
	"auth/destroyCourse",
	async (userCourse) => {
		try {
			const res = await instance.request({
				url: "/api/QuanLyKhoaHoc/HuyGhiDanh",
				method: "POST",
				data: {
					maKhoaHoc: userCourse.courseId,
					taiKhoan: userCourse.userId,
				},
			});

			// console.log(res.data);
			return res.data;
		} catch (err) {
			console.log(err);
		}
	}
);
