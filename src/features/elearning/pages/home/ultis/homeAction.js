import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "api/instance";

// Category list
export const fetchCategoryAction = createAsyncThunk("home/fetchCategory", async () => {
	try {
		const res = await instance.request({
			url: "/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
			method: "GET",
		});

		// console.log(res.data);
		return res.data;
	} catch (error) {}
});

// Course list
export const fetchAllCourseListAction = createAsyncThunk("home/fetchAllCourseList", async () => {
	try {
		const res = await instance.request({
			url: "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
			method: "GET",
			params: {
				maNhom: "GP01",
			},
		});

		// console.log(res.data);
		return res.data;
	} catch (error) {}
});

// Course
export const fetchCourseAction = createAsyncThunk("home/fetchCourse", async (cateId) => {
	try {
		const res = await instance.request({
			url: "/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc",
			method: "GET",
			params: {
				maDanhMuc: cateId,
				maNhom: "GP01",
			},
		});

		return res.data;
	} catch (error) {}
});
