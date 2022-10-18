import React, { useEffect } from "react";
import "./_bannerDetail.scss";

function BannerDetail(props) {
	const { maKhoaHoc, tenKhoaHoc, danhMucKhoaHoc } = props.courseDetail;

	return (
		<div className="BannerDetail">
			<div className="container">
				<div className="bread-crumb">
					<div className="home-icon">
						<i className="fas fa-home-lg-alt"></i>
					</div>
					<div className="category-bread">
						{danhMucKhoaHoc.tenDanhMucKhoaHoc}
						<i
							style={{ margin: "0 10px" }}
							className="fas fa-chevron-right"
						></i>
					</div>
					<div className="course-bread">{tenKhoaHoc}</div>
				</div>
			</div>
		</div>
	);
}

export default BannerDetail;
