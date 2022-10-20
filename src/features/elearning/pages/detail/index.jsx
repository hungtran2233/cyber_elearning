import { HomeOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import BodyDetail from "./components/BodyDetail";
import BreadCrumb from "./components/BreadCrumb";
import RelatedCourse from "./components/RelatedCourse";
import { fetchCourseDetailAction } from "./utils/detailAction";

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
	}, [courseId]);

	if (!courseDetail) {
		return (
			<div style={{ textAlign: "center" }}>
				<Spin size="large" />
			</div>
		);
	}

	return (
		<div className="ELearningDetail">
			{/* <div style={{ paddingTop: 60 }}>ranh gioi</div> */}
			<BreadCrumb courseDetail={courseDetail} />
			<BodyDetail courseDetail={courseDetail} />
			<RelatedCourse courseDetail={courseDetail} />
		</div>
	);
}

export default Detail;
