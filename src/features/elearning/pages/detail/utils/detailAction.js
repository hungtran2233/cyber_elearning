import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "api/instance";

export const fetchCourseDetailAction = createAsyncThunk(
	"detail/fetchCourse",
	async (idCourse) => {
		try {
			const res = await instance.request({
				url: "/api/QuanLyKhoaHoc/LayThongTinKhoaHoc",
				method: "GET",
				params: {
					maKhoaHoc: idCourse,
				},
			});
			// console.log(res);
			return res.data;
		} catch (err) {
			// console.log(err);
		}
	}
);
