import { Spin } from "antd";
import "./_relatedCourse.scss";
import CourseItem from "features/elearning/pages/home/components/CourseCategory/CourseItem";
import React from "react";
import { fetchCourseByCategoryAction } from "../../utils/detailAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SampleNextArrow from "features/elearning/components/SliderArrow/SampleNextArrow";
import SamplePrevArrow from "features/elearning/components/SliderArrow/SamplePrevArrow";

function RelatedCourse(props) {
	const courseDetail = props.courseDetail;
	const dispatch = useDispatch();

	const categoryId = courseDetail.danhMucKhoaHoc.maDanhMucKhoahoc;
	// console.log(categoryId);

	const fetchCourseByCategory = () => {
		dispatch(fetchCourseByCategoryAction(categoryId));
	};

	useEffect(() => {
		fetchCourseByCategory();
	}, []);

	const courseByCategory = useSelector(
		(state) => state.eLearningDetail.courseByCategory
	);

	if (!courseByCategory) {
		return (
			<div style={{ textAlign: "center" }}>
				<Spin size="large" />
			</div>
		);
	}

	// setting slider
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 3,
		autoplay: false,
		autoplaySpeed: 4000,
		// arrows: false,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};

	// render when item <= 5

	return (
		<div className="RelatedCourse">
			<div className="container">
				<h1>Khóa học liên quan</h1>
			</div>
			<Slider {...settings} className="container">
				{courseByCategory?.map((item, index) => {
					return (
						<CourseItem
							key={index}
							className="course-item-custom"
							courseInfo={item}
						/>
					);
				})}
			</Slider>
		</div>
	);
}

export default RelatedCourse;
