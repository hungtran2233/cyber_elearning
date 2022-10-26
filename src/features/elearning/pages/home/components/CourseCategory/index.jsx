import {
	AlertFilled,
	AndroidFilled,
	ChromeFilled,
	DownOutlined,
	HddFilled,
	SearchOutlined,
	SettingFilled,
	SlackCircleFilled,
	StarFilled,
	UpOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Input, Pagination, Row, Spin } from "antd";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchCourseAction } from "../../utils/homeAction";
import CourseItem from "./CourseItem";

import { Select } from "antd";
import { sortByNameAZ, sortByNameZA } from "common/utils/sort/sortByName";
import { sortByViewDecrement, sortByViewIncrement } from "common/utils/sort/sortByView";
import { sortByDateLates, sortByDateOldest } from "common/utils/sort/sortByDate";
const { Option } = Select;

function CourseCategory(props) {
	// category list
	const category = props.category;
	const allCourseList = props.allCourseList;
	const dispatch = useDispatch();
	// sort by Name
	const [sortName, setSortName] = useState("Sắp xếp theo tên");
	// sort by View
	const [sortView, setSortView] = useState("Lượt xem");
	// sort by Date
	const [sortDate, setSortDate] = useState("Ngày tạo");

	// Get course
	const [selectedCourseList, setSelectedCourseList] = useState(allCourseList);
	// console.log(selectedCourseList);

	// ==== Pagination =====
	const [minValue, setMinValue] = useState(0);
	const [maxValue, setMaxValue] = useState(8);

	const handleChange = (value) => {
		if (value <= 1) {
			setMinValue(0);
			setMaxValue(8);
		} else {
			setMinValue(maxValue);
			setMaxValue(value * 8);
		}
	};

	// setting search bar
	const [query, setQuery] = useState("");

	// Get course for when click category item
	const fetchCourse = async (id) => {
		const data = await dispatch(fetchCourseAction(id));
		setSelectedCourseList(data.payload);
	};

	const handleChangeCategory = (value) => {
		if (value === "all") {
			setSelectedCourseList(allCourseList);
		} else {
			fetchCourse(value.maDanhMuc);
		}
		setSortName("Sắp xếp theo tên");
		setSortView("Lượt xem");
		setSortDate("Ngày tạo");
	};

	// Active CSS when click
	const [activeId, setActiveId] = useState(100);
	const toggleActive = (index) => {
		if (index === activeId) {
			return "active";
		} else {
			return "non_active";
		}
	};

	// set icon for course category
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

	// setting sort by Name (dropdown menu)
	const handleSortByName = (e) => {
		// console.log(e);
		if (e === "az") {
			setSortName("az");
			setSelectedCourseList(sortByNameAZ(selectedCourseList));
		}
		if (e === "za") {
			setSortName("za");
			setSelectedCourseList(sortByNameZA(selectedCourseList));
		}
	};

	// setting sort by View
	const handleSortByView = (e) => {
		// console.log(e);
		if (e === "decrement") {
			setSortView("decrement");
			setSelectedCourseList(sortByViewDecrement(selectedCourseList));
		}
		if (e === "increment") {
			setSortView("increment");
			setSelectedCourseList(sortByViewIncrement(selectedCourseList));
		}
	};

	// setting sort by Date
	const handleSortByDate = (e) => {
		if (e === "latest") {
			setSortDate("latest");
			setSelectedCourseList(sortByDateLates(selectedCourseList));
		}
		if (e === "oldest") {
			setSortDate("oldest");
			setSelectedCourseList(sortByDateOldest(selectedCourseList));
		}
	};

	// reset sort
	const handleResetSort = () => {
		setSortName("Sắp xếp theo tên");
		setSortView("Lượt xem");
		setSortDate("Ngày tạo");
	};

	// handleChange page Pagination

	return (
		<div id="course" className="CourseCategory">
			{/* {console.log(selectedCourseList)} */}
			<div className="container">
				<h1 className="title-course">Danh sách các khóa học tại Bee Academy</h1>

				<Row style={{ marginBottom: 20 }}>
					{/* Sort by Name  */}
					<Col xs={6} sm={6} md={4} lg={4} xl={4}>
						<Select
							value={sortName}
							style={{
								width: "100%",
							}}
							onChange={handleSortByName}
						>
							<Option value="az">Từ A-Z</Option>
							<Option value="za">Từ Z-A</Option>
						</Select>
					</Col>

					{/* Sort by View */}
					<Col xs={6} sm={6} md={4} lg={4} xl={4}>
						<Select
							value={sortView}
							style={{
								marginLeft: 20,

								width: "80%",
							}}
							onChange={handleSortByView}
						>
							<Option value="decrement">Nhiều nhất</Option>
							<Option value="increment">Ít nhất</Option>
						</Select>
					</Col>

					{/* Sort by Date  */}
					<Col xs={6} sm={6} md={4} lg={4} xl={4}>
						<Select
							value={sortDate}
							style={{
								marginLeft: 20,
								width: "80%",
							}}
							onChange={handleSortByDate}
						>
							<Option value="latest">Mới nhất</Option>
							<Option value="oldest">Cũ nhất</Option>
						</Select>
					</Col>

					{/* Reset sort  */}
					<Col xs={2} sm={2} md={2} lg={2} xl={2}>
						<Button type="primary" onClick={handleResetSort}>
							Đặt lại
						</Button>
					</Col>

					{/* Search course by Name  */}
					<Col xs={24} sm={8} md={10} lg={10} xl={10}>
						<div className="query-search">
							<Input
								onChange={(e) => {
									// console.log(e.target.value);
									setQuery(e.target.value);
								}}
								placeholder="Tìm kiếm khóa học..."
								prefix={<SearchOutlined style={{ marginRight: 10 }} />}
								style={{
									width: "80%",
								}}
							/>
						</div>
					</Col>
				</Row>

				{/* Display  */}
				<Row>
					{/* Category  */}
					<Col xs={24} sm={24} md={4} lg={4} xl={4}>
						<div className="category-list">
							<div className={"card-content" + " " + toggleActive(100)}>
								<div
									className="card-custom"
									onClick={() => {
										handleChangeCategory("all");
										setActiveId(100);
									}}
								>
									<div className="logo">
										<StarFilled />
									</div>
									<div className="title">Tất cả</div>
								</div>
							</div>
							{category?.map((item, index) => {
								return (
									<div
										key={index}
										className={
											"card-content" + " " + toggleActive(index)
										}
									>
										<div
											className="card-custom"
											onClick={() => {
												handleChangeCategory(item);
												setActiveId(index);
											}}
										>
											<div className="logo">
												{renderIcon(index)}
											</div>
											<div className="title">{item.tenDanhMuc}</div>
										</div>
									</div>
								);
							})}
						</div>
					</Col>

					{/* Course  */}
					<Col xs={24} sm={24} md={20} lg={20} xl={20}>
						<div className="course-list">
							{selectedCourseList
								.slice(minValue, maxValue)
								?.filter((course) =>
									course.tenKhoaHoc.toLowerCase().includes(query)
								)
								.map((item, index) => {
									return (
										<div key={index} className="item-content">
											<CourseItem courseInfo={item} />
										</div>
									);
								})}
						</div>

						{/* Pagination  */}
						<div className="pagination-bar" style={{ marginTop: 30 }}>
							<Pagination
								defaultCurrent={1}
								defaultPageSize={8}
								onChange={handleChange}
								total={selectedCourseList.length}
							/>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default CourseCategory;
