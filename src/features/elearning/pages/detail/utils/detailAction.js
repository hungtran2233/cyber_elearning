import instance from "api/instance";

const { createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchCourseDetailAction = createAsyncThunk(
	"eLearningDetail/fetchCourseDetail",
	async (courseId) => {
		try {
			const res = await instance.request({
				url: "/api/QuanLyKhoaHoc/LayThongTinKhoaHoc",
				method: "GET",
				params: {
					maKhoaHoc: courseId,
				},
			});
			console.log(res.data);
			return res.data;
		} catch (err) {}
	}
);
