import { HomeOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { fetchCourseDetailAction } from "./ultis/detailAction";

function Detail() {
	const match = useRouteMatch();
	const courseId = match.params.id;

	const dispatch = useDispatch();
	const fetchCourseDetail = () => {
		dispatch(fetchCourseDetailAction(courseId));
	};

	// get course detail from store
	const courseDetail = useSelector((state) => state.eLearningDetail.courseDetail);

	useEffect(() => {
		fetchCourseDetail();
	}, []);

	if (!courseDetail) {
		return (
			<div style={{ textAlign: "center" }}>
				<Spin size="large" />
			</div>
		);
	}

	return (
		<div className="ELearningDetail">
			<div className="top">
				<div className="container">
					<div className="bread-crumb">
						<span>
							<HomeOutlined />
						</span>
						{"  >  "}
						<span>{courseDetail.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
						{"  >  "}
						<span>{courseDetail.tenKhoaHoc}</span>
					</div>
				</div>
			</div>

			<div className="body"></div>
		</div>
	);
}

export default Detail;
