import { Col, Row } from "antd";
import { formatFullName } from "common/utils/formatFullName";
import React from "react";
import { Tabs } from "antd";
import "./_bodyDetail.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../utils/cartSlice";
import { useHistory } from "react-router-dom";
import { Button, message, Space } from "antd";

function BodyDetail(props) {
	const {
		maKhoaHoc,
		tenKhoaHoc,
		moTa,
		luotXem,
		hinhAnh,
		ngayTao,
		soLuongHocVien,
		nguoiTao,
		danhMucKhoaHoc,
	} = props.courseDetail;
	// console.log(props.courseDetail);

	const dispatch = useDispatch();
	const history = useHistory();

	// cart
	const handleAddToCart = () => {
		const course = props.courseDetail;
		// console.log(course);
		dispatch(addToCart(course));
	};

	// render tab teacher
	const renderTeacher = () => {
		return (
			<div className="teacher-detail">
				<div className="user-name">
					<strong>Tài khoản: </strong> {nguoiTao.taiKhoan}
				</div>
				<div className="full-name">
					<strong>Họ tên: </strong>{" "}
					<span>{formatFullName(nguoiTao.hoTen)}</span>
				</div>
				<div className="user-position">
					<strong>Chức vụ: </strong>
					{nguoiTao.tenLoaiNguoiDung}
				</div>
			</div>
		);
	};

	// setting tabs
	const items = [
		{ label: "Nội dung", key: "item-1", children: moTa }, // remember to pass the key prop
		{ label: "Giảng viên", key: "item-2", children: renderTeacher() },
	];

	// setting message
	const success = () => {
		message.success("Thêm vào giỏ hàng thành công !");
	};

	return (
		<div className="BodyDetail">
			<div className="container">
				<Row>
					<Col xs={24} sm={24} md={8} lg={8} xl={8}>
						<div className="course-image">
							<img src={hinhAnh} alt="" />
						</div>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8} xl={8}>
						<div className="course-content">
							<h1 className="course-name">{tenKhoaHoc}</h1>
							<h3 className="course-id">
								<i className="fa-brands fa-codepen"></i>{" "}
								<span>Mã khóa học:</span> <strong>{maKhoaHoc}</strong>
							</h3>

							<h3 className="course-teacher">
								<i className="fa-solid fa-user"></i>{" "}
								<span>Giảng viên:</span>{" "}
								<strong>{formatFullName(nguoiTao.hoTen)}</strong>
							</h3>

							<h3 className="course-category">
								<i className="fa-solid fa-bars"></i>{" "}
								<span>Danh mục:</span>{" "}
								<strong>{danhMucKhoaHoc.tenDanhMucKhoaHoc}</strong>
							</h3>

							<h3 className="course-date">
								<i className="fa-regular fa-calendar-days"></i>{" "}
								<span>Ngày tạo:</span> <strong>{ngayTao}</strong>
							</h3>

							<h3 className="course-view">
								<i className="fa-solid fa-eye"></i> <span>Lượt xem:</span>{" "}
								<strong>{luotXem}</strong>
							</h3>
							<h3 className="course-amount">
								<i className="fa-solid fa-graduation-cap"></i>{" "}
								<span>Số lượng học viên:</span>{" "}
								<strong>{soLuongHocVien}</strong>
							</h3>
						</div>
					</Col>

					<Col xs={24} sm={24} md={8} lg={8} xl={8}>
						<div className="cart-content">
							{/* <div
								className="register-now"
								onClick={() => history.push("/payment")}
							>
								ĐĂNG KÝ NGAY
							</div> */}
							<div
								className="add-to-cart"
								onClick={() => {
									history.push("/cart");
									handleAddToCart();
									success();
								}}
							>
								<i className="fa-solid fa-cart-plus"></i>
								Thêm vào giỏ hàng
							</div>
							<div className="note">
								Vui lòng vào giỏ hàng để tiến hành đăng kí khóa học !
							</div>
						</div>
					</Col>
				</Row>

				<Row style={{ marginTop: 20 }}>
					<Col span={24}>
						<div className="tab-content">
							<Tabs items={items} />
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default BodyDetail;
