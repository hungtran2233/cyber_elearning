import { HomeOutlined } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Spin } from "antd";
import BackToTop from "common/components/BackToTop";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import BodyDetail from "./components/BodyDetail";
import BreadCrumb from "./components/BreadCrumb";
import RelatedCourse from "./components/RelatedCourse";
import { fetchCourseDetailAction } from "./utils/detailAction";
import UserComment from "./components/UserComment";

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
			<BackToTop />
			<BreadCrumb courseDetail={courseDetail} />
			<BodyDetail courseDetail={courseDetail} />
			<UserComment />
			<RelatedCourse courseDetail={courseDetail} />
		</div>
	);
}

export default Detail;
