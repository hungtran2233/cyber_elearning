import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "api/instance";

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
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	}
);
