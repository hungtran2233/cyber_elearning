import { Spin } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./components/Banner";
import CourseCategory from "./components/CourseCategory";
import { fetchAllCourseListAction, fetchCategoryAction } from "./utils/homeAction";
// Slick slider --by Hung
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./_home.scss";
import Review from "./components/Review/Review";
import Counter from "./components/Counter/Counter";
import BackToTop from "common/components/BackToTop";

function Home() {
	const dispatch = useDispatch();

	const fetchCategory = () => {
		dispatch(fetchCategoryAction());
	};

	// Get course list
	const fetchCourseList = () => {
		dispatch(fetchAllCourseListAction());
	};

	const category = useSelector((state) => state.eLearningHome.category);
	const allCourseList = useSelector((state) => state.eLearningHome.allCourseList);

	useEffect(() => {
		fetchCategory();
		fetchCourseList();
	}, []);

	if (!category) {
		return (
			<div style={{ textAlign: "center" }}>
				<Spin size="large" />
			</div>
		);
	}

	if (!allCourseList) {
		return (
			<div style={{ textAlign: "center" }}>
				<Spin size="large" />
			</div>
		);
	}

	return (
		<div className="Home">
			<BackToTop />
			{/* <div style={{ paddingTop: 40 }}>ranh gioi</div> */}
			<Banner allCourseList={allCourseList} />
			<CourseCategory category={category} allCourseList={allCourseList} />
			<Counter />
			<Review />
		</div>
	);
}

export default Home;
