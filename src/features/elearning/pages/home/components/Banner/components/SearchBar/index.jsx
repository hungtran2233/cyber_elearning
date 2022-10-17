import { CloseCircleOutlined, CloseOutlined, SearchOutlined } from "@ant-design/icons";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./_searchBar.scss";
import Lottie from "lottie-react";
import downArrow from "assets/animation/98428-arrow-down-purple/data.json";

function SearchBar(props) {
	const allCourseList = props.allCourseList;
	// console.log(allCourseList);

	const [filterData, setFilterData] = useState([]);
	const [wordEntered, setWordEntered] = useState("");

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		setWordEntered(searchWord);
		const newFilter = allCourseList.filter((item) => {
			return item.tenKhoaHoc.toLowerCase().includes(searchWord.toLowerCase());
		});

		if (searchWord === "") {
			setFilterData([]);
		} else {
			setFilterData(newFilter);
		}
	};

	// Clear word input when click X
	const clearInput = () => {
		setFilterData([]);
		setWordEntered("");
	};

	return (
		<div className="SearchBar">
			<div className="searchInputs">
				<input
					type="text"
					placeholder="Nhập tên khóa học bạn muốn..."
					onChange={handleFilter}
					value={wordEntered}
				/>
				{filterData.length === 0 ? (
					<SearchOutlined className="icon" />
				) : (
					<CloseOutlined onClick={clearInput} className="icon" />
				)}
			</div>
			{filterData.length !== 0 && (
				<div className="dataResult">
					{filterData?.map((item) => {
						return (
							<Link
								key={item.maKhoaHoc}
								to={"/details/" + item.maKhoaHoc + '/' + item.biDanh }
								onClick={clearInput}
							>
								<div className="search-content">
									<img src={item.hinhAnh} alt="" />
									<span>{item.tenKhoaHoc}</span>
								</div>
							</Link>
						);
					})}
				</div>
			)}

			{/* Animation arrow down  */}
			<Lottie className="down-arrow" animationData={downArrow} loop={true} />
		</div>
	);
}

export default SearchBar;
