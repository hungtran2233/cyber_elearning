import React from "react";
import { useHistory } from "react-router-dom";
import "./_courseItem.scss";

function CourseItem(props) {
	const { maKhoaHoc, tenKhoaHoc, hinhAnh, biDanh } = props.item;

	const history = useHistory();
	const goToDetail = () => {
		history.push("/details/" + maKhoaHoc + "/" + biDanh);
	};

	return (
		<div className="CourseItem" onClick={goToDetail}>
			{/* {console.log(props.item)} */}
			<p>{maKhoaHoc}</p>
			<p>{tenKhoaHoc}</p>
		</div>
	);
}

export default CourseItem;
