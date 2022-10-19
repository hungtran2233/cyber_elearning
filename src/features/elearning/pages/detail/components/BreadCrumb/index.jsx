import React, { useEffect } from "react";
import "./_breadCrumb.scss";

function BreadCrumb(props) {
	const { maKhoaHoc, tenKhoaHoc, danhMucKhoaHoc } = props.courseDetail;

	return (
		<div className="BreadCrumb">
			<div className="container">
				<div className="crumb">
					<div className="home-icon">
						<i className="fas fa-home-lg-alt"></i>
					</div>
					<div className="category-crumb">
						{danhMucKhoaHoc.tenDanhMucKhoaHoc}
						<i
							style={{ margin: "0 10px" }}
							className="fas fa-chevron-right"
						></i>
					</div>
					<div className="course-crumb">{tenKhoaHoc}</div>
				</div>
			</div>
		</div>
	);
}

export default BreadCrumb;
