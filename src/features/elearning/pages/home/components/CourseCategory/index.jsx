import {
	AlertFilled,
	AndroidFilled,
	ChromeFilled,
	HddFilled,
	SettingFilled,
	SlackCircleFilled,
	StarFilled,
} from "@ant-design/icons";
import { Card, Col, Row, Spin } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { fetchCourseAction } from "../../ultis/homeAction";
import CourseItem from "./CourseItem";

function CourseCategory(props) {
	// category list
	const category = props.category;
	const allCourseList = props.allCourseList;
	const dispatch = useDispatch();

	// Get course list from redux
	// const courseList = useSelector((state) => state.eLearningHome.courseList);

	// Get course
	const [selectedCourseList, setSelectedCourseList] = useState(allCourseList);
	// Title
	const [titleCourse, setTitleCourse] = useState("Tất cả khóa học");

	// Get course
	const fetchCourse = async (id) => {
		const data = await dispatch(fetchCourseAction(id));
		setSelectedCourseList(data.payload);
	};

	const handleChangeCategory = (value) => {
		// console.log(value);
		setTitleCourse(value);
		if (value === "Tất cả khóa học") {
			setSelectedCourseList(allCourseList);
		} else {
			fetchCourse(value);
		}
	};

	const renderIcon = (index) => {
		switch (index) {
			case 0:
				return <SettingFilled />;
			case 1:
				return <ChromeFilled />;
			case 2:
				return <AndroidFilled />;
			case 3:
				return <SlackCircleFilled />;
			case 4:
				return <HddFilled />;
			case 5:
				return <AlertFilled />;

			default:
				break;
		}
	};

	// render slider style
	const renderSlider = () => {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 4,
		};
		return (
			<Slider {...settings}>
				{selectedCourseList?.map((item) => {
					return <CourseItem key={item.maKhoaHoc} item={item} />;
				})}
			</Slider>
		);
	};

	// render normal
	const renderNormal = () => {
		return selectedCourseList?.map((item) => {
			return (
				<div key={item.maKhoaHoc} className="normal-item">
					<Card hoverable className="normal-card">
						<div className="card-img">
							<img src={item.hinhAnh} alt="" />
						</div>
						<p>{item.maKhoaHoc}</p>
						<p>{item.tenKhoaHoc}</p>
					</Card>
				</div>
			);
		});
	};

	return (
		<div className="CourseCategory">
			{console.log(selectedCourseList)}
			<div className="container">
				<h1>Bee Academy có hơn 100 khóa học đang chờ bạn khám phá</h1>
				<div className="category-list">
					<div className="card-content">
						<Card
							hoverable
							className="card-custom"
							onClick={() => handleChangeCategory("Tất cả khóa học")}
						>
							<div className="logo">
								<StarFilled />
							</div>
							<div className="title">Tất cả</div>
						</Card>
					</div>
					{category?.map((item, index) => {
						return (
							<div key={item.maDanhMuc} className="card-content">
								<Card
									hoverable
									className="card-custom"
									onClick={() => handleChangeCategory(item.maDanhMuc)}
								>
									<div className="logo">{renderIcon(index)}</div>
									<div className="title">{item.tenDanhMuc}</div>
								</Card>
							</div>
						);
					})}
				</div>

				{/* <div className="course-detail"></div> */}

				<h2> {titleCourse} </h2>

				{selectedCourseList.length > 4 ? (
					renderSlider()
				) : (
					<div className="normal-list">{renderNormal()}</div>
				)}
			</div>
		</div>
	);
}

export default CourseCategory;
