import { formatFullName } from "common/utils/formatFullName";
import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./_courseDetail.scss";

function CourseDetail(props) {
	const arrCartItem = props.cart.cartItems;
	const history = useHistory();

	const match = useRouteMatch();
	const id = match.params.id;

	const item = arrCartItem.find((item) => item.maKhoaHoc === id);

	if (!item) return;

	return (
		<div className="CourseDetail">
			<h1>KHÓA HỌC</h1>
			<div className="combo">
				<p className="combo-heading">Chi tiết</p>
				<div className="combo-content">
					<div className="image">
						<div className="box-img">
							<img src={item.hinhAnh} alt="" />
						</div>
					</div>
					<div className="course-name">
						<h3>{item.tenKhoaHoc}</h3>
						<p className="date">{item.ngayTao}</p>
						<p>Giảng viên: {formatFullName(item.nguoiTao.hoTen)}</p>
					</div>
					<div className="price">${item.price}</div>
					<div className="action" onClick={() => history.push("/cart")}>
						<span>Quay lại giỏ hàng</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CourseDetail;
