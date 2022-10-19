import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "api/instance";

export const courseRegisterAction = createAsyncThunk(
	"payment/courseRegister",
	async (courseId, userName) => {
		try {
			const res = await instance.request({
				url: "/api/QuanLyKhoaHoc/DangKyKhoaHoc",
				method: "POST",
				params: {
					maKhoaHoc: courseId,
					taiKhoan: userName,
				},
			});
			console.log(res);
		} catch (err) {}
	}
);
