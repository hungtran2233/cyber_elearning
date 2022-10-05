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
import { getNumberDistanceDate } from "common/utils/date";
import { formatFullName } from "common/utils/formatFullName";
import SampleNextArrow from "features/elearning/components/SliderArrow/SampleNextArrow";
import SamplePrevArrow from "features/elearning/components/SliderArrow/SamplePrevArrow";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import { fetchCourseAction } from "../../utils/homeAction";
import CourseItem from "./CourseItem";

function CourseCategory(props) {
	// category list
	const category = props.category;
	const allCourseList = props.allCourseList;
	const dispatch = useDispatch();

	const history = useHistory();

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
		if (value === "all") {
			setSelectedCourseList(allCourseList);
			setTitleCourse("Tất cả khóa học");
		} else {
			fetchCourse(value.maDanhMuc);
			setTitleCourse(value.tenDanhMuc);
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
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
		};
		return (
			<Slider {...settings} className="slider-custom">
				{selectedCourseList?.map((item) => {
					return <CourseItem key={item.maKhoaHoc} item={item} />;
				})}
			</Slider>
		);
	};

	// setting adv-label
	const renderAdvLabel = (date, view) => {
		const distance = getNumberDistanceDate(date);
		if (view >= 100) {
			return (
				<div className="label-box">
					<span className="hot">HOT</span>
					{distance < 30 ? <span className="new">NEW</span> : <></>}
				</div>
			);
		}
		if (distance < 30) {
			return (
				<div className="label-new">
					<span>NEW</span>
				</div>
			);
		}
		return;
	};

	// render normal
	const renderNormal = () => {
		return selectedCourseList?.map((item) => {
			return (
				<div key={item.maKhoaHoc} className="normal-item">
					<Card hoverable className="normal-card">
						{renderAdvLabel(item.ngayTao, item.luotXem)}
						<div className="card-image">
							<img src={item.hinhAnh} alt="" />
						</div>
						<div className="card-detail">
							<p className="title">{item.tenKhoaHoc}</p>
							<p className="teacher">
								Giảng viên:{" "}
								<span>{formatFullName(item.nguoiTao.hoTen)}</span>
							</p>
							<p>
								Ngày tạo: <span>{item.ngayTao}</span>{" "}
							</p>
							<p>
								Lượt xem: <span>{item.luotXem}</span>
							</p>
						</div>
					</Card>
				</div>
			);
		});
	};

	return (
		<div className="CourseCategory">
			{/* {console.log(selectedCourseList)} */}
			<div className="container">
				<h1>Bee Academy có hơn 100 khóa học đang chờ bạn khám phá</h1>
				<div className="category-list">
					<div className="card-content">
						<Card
							hoverable
							className="card-custom"
							onClick={() => handleChangeCategory("all")}
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
									onClick={() => handleChangeCategory(item)}
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
					<div className="slider-list">{renderSlider()}</div>
				) : (
					<div className="normal-list">{renderNormal()}</div>
				)}
			</div>
		</div>
	);
}

export default CourseCategory;
