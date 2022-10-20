import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "api/instance";

// get course detail
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

// get arr course of category
export const fetchCourseByCategoryAction = createAsyncThunk(
	"detail/fetchCourseByCategory",
	async (idCategory) => {
		try {
			const res = await instance.request({
				url: "/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc",
				method: "GET",
				params: {
					maDanhMuc: idCategory,
					maNhom: "GP01",
				},
			});
			// console.log(res.data);
			return res.data;
		} catch (err) {
			// console.log(err);
		}
	}
);
