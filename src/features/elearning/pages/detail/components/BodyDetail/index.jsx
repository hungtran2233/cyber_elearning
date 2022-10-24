import { Col, Row } from "antd";
import { formatFullName } from "common/utils/formatFullName";
import React from "react";
import { Tabs } from "antd";
import "./_bodyDetail.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../utils/cartSlice";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Button, message, Space } from "antd";
import { fetchProfileAction } from "features/authentication/authAction";
import { useEffect } from "react";

function BodyDetail(props) {
	const dispatch = useDispatch();
	const history = useHistory();
	const [registerCourseList, setRegisterCourseList] = useState(null);
	const token = localStorage.getItem("token");
	// const [isRegister, setIsRegister] = useState(false);

	const fetchProfile = async () => {
		if (token === null) {
			return;
		} else {
			const data = await dispatch(fetchProfileAction());
			setRegisterCourseList(data.payload.chiTietKhoaHocGhiDanh);
		}
	};

	useEffect(() => {
		fetchProfile();
	}, []);

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

	// render button add to card when login

	const renderButtonAddToCart = (token) => {
		if (token !== null) {
			const course = registerCourseList?.find(
				(item) => item.maKhoaHoc === maKhoaHoc
			);
			if (!course) {
				return (
					<div className="cart-content">
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
				);
			} else {
				return (
					<div className="cart-content">
						<div className="btn-disable">Bạn đã đăng ký khóa học này</div>
						<div className="note">
							Vui lòng vào thông tin cá nhân để kiểm tra lại !
						</div>
					</div>
				);
			}
		} else {
			return (
				<div className="cart-content">
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
			);
		}
	};

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

					{/* Render button add to cart  */}
					<Col xs={24} sm={24} md={8} lg={8} xl={8}>
						{renderButtonAddToCart(token)}
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
