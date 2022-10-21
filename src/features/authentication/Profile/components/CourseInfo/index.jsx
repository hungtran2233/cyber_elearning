import { Button } from "antd";
import { formatDayMonthYear } from "common/utils/date";
import {
	destroyCourseAction,
	fetchProfileAction,
} from "features/authentication/authAction";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "./_courseInfo.scss";

function CourseInfo(props) {
	const history = useHistory();
	const dispatch = useDispatch();

	const userId = props.userId;

	const [arr, setArr] = useState([]);

	const fetchProfile = async () => {
		const data = await dispatch(fetchProfileAction());
		setArr(data.payload.chiTietKhoaHocGhiDanh);
	};

	useEffect(() => {
		fetchProfile();
	}, []);

	if (!arr) return <div>Loading...</div>;

	// remove course

	const handleDestroyCourse = (course) => {
		const courseId = course.maKhoaHoc;
		const userCourse = { courseId, userId };

		Swal.fire({
			title: "Bạn có muốn hủy đăng ký khóa học này không ?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#d33",
			cancelButtonColor: "#3085d6",
			confirmButtonText: "Hủy đăng ký!",
			cancelButtonText: "Trở về",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire(
					"Đã hủy!",
					"Bạn đã hủy đăng ký khóa học thành công.",
					"success"
				);

				//////
				// soft remove
				const cloneArr = [...arr];
				const index = cloneArr.findIndex((item) => item.maKhoaHoc === courseId);
				cloneArr.splice(index, 1);
				setArr(cloneArr);

				// hard remove
				dispatch(destroyCourseAction(userCourse));
			}
		});
	};

	// console.log(arrCourse);

	return (
		<div className="CourseInfo">
			<h2>Khóa học đã đăng ký</h2>
			{arr.length > 0 ? (
				arr?.map((item, index) => {
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
											"/details/" +
												item.maKhoaHoc +
												"/" +
												item.biDanh
										)
									}
								>
									Xem chi tiết
								</Button>
							</div>

							<div className="destroy-course">
								<Button
									type="danger"
									onClick={() => handleDestroyCourse(item)}
								>
									Hủy đăng ký
								</Button>
							</div>
						</div>
					);
				})
			) : (
				<div style={{ fontSize: 16, marginTop: 20, color: "grey" }}>
					Hiện tại không có khóa học nào !
				</div>
			)}
		</div>
	);
}

export default CourseInfo;
