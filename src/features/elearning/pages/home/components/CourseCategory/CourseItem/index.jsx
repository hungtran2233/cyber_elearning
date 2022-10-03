import React from "react";

function CourseItem(props) {
	const { maKhoaHoc, tenKhoaHoc, hinhAnh } = props.item;
	return (
		<div className="course-item">
			<p>{maKhoaHoc}</p>
			<p>{tenKhoaHoc}</p>
		</div>
	);
}

export default CourseItem;
