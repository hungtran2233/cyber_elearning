import { Button } from "antd";
import { formatDayMonthYear } from "common/utils/date";
import { destroyCourseAction } from "features/authentication/authAction";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "./_courseInfo.scss";

function CourseInfo() {
	const profile = useSelector((state) => state.auth.profile);
	const arrCourseOrigin = profile.chiTietKhoaHocGhiDanh;
	const userName = profile.taiKhoan;
	const history = useHistory();
	const dispatch = useDispatch();

	// save arrCourse on state to re-render when click destroy
	const [arrCourse, setArrCourse] = useState(arrCourseOrigin);

	useEffect(() => {}, [arrCourse]);

	const destroyCourse = (course) => {
		// console.log(course);
		const courseId = course.maKhoaHoc;
		const userCourse = { courseId, userName };
		dispatch(destroyCourseAction(userCourse));
	};

	if (!arrCourse) return <div>Loading...</div>;

	// console.log(arrCourse);

	return (
		<div className="CourseInfo">
			<h2>Khóa học đã đăng ký</h2>
			{arrCourse?.map((item, index) => {
				return (
					<div className="course-item" key={index}>
						<div className="course-img">
							<img src={item.hinhAnh} alt="" />
						</div>
						<div className="description">
							<div className="course-name">{item.tenKhoaHoc}</div>
							<div className="course-id">{item.maKhoaHoc}</div>
							<div className="course-date">
								{formatDayMonthYear(item.ngayTao)}
							</div>
						</div>

						<div className="show-detail">
							<Button
								type="primary"
								onClick={() =>
									history.push(
										"/details/" + item.maKhoaHoc + "/" + item.biDanh
									)
								}
							>
								Xem chi tiết
							</Button>
						</div>

						<div className="destroy-course">
							<Button type="danger" onClick={() => destroyCourse(item)}>
								Hủy đăng ký
							</Button>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default CourseInfo;
