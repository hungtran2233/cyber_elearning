import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./_payment.scss";
import { Col, Row, Spin, Table } from "antd";
import userImg from "assets/img/user/pic2_3.jpg";
import { formatFullName } from "common/utils/formatFullName";
import { courseRegisterAction } from "features/elearning/utils/paymentAction";

function Payment() {
	const dataCart = useSelector((state) => state.eLearningCart.cartItems);
	// console.log(dataCart);
	const userInfo = useSelector((state) => state.auth.profile);
	// console.log(userInfo);

	const dispatch = useDispatch();

	const courseRegister = () => {
		dispatch(courseRegisterAction());
	};

	if (!userInfo) {
		return (
			<div style={{ textAlign: "center" }}>
				<Spin size="large" />
			</div>
		);
	}

	const totalMoney = dataCart.reduce((total, item) => {
		total = total + item.cartQuantity * item.price;
		return total;
	}, 0);

	// setting table
	const columns = [
		{
			title: "Mã Khóa Học",
			dataIndex: "maKhoaHoc",
			key: "maKhoaHoc",
			width: "15%",
			// specify the condition of filtering result
			// here is that finding the name started with `value`

			sorter: (a, b) => a.maKhoaHoc.length - b.maKhoaHoc.length,
			sortDirections: ["descend"],
		},
		{
			title: "Hình Ảnh",
			dataIndex: "hinhAnh",
			key: "hinhAnh",
			width: "15%",
			render: (text, course, index) => {
				return (
					<Fragment>
						<img
							key={course.maKhoaHoc}
							src={course.hinhAnh}
							width={50}
							alt=""
							onError={(e) => (
								(e.target.onerror = null),
								(e.target.src = `https://picsum.photos/id/${index}/50/70`)
							)}
						/>
					</Fragment>
				);
			},
		},
		{
			title: "Tên Khóa Học",
			dataIndex: "tenKhoaHoc",
			key: "tenKhoaHoc",
			width: "30%",
			sorter: (a, b) => a.tenKhoaHoc.length - b.tenKhoaHoc.length,
			sortDirections: ["descend"],
		},
		{
			title: "Số lượng",
			dataIndex: "cartQuantity",
			key: "cartQuantity",
			width: "15%",
			defaultSortOrder: "descend",
			sorter: (a, b) => a.cartQuantity - b.cartQuantity,
		},
		{
			title: "Giá",
			// dataIndex: "price",
			key: "price",
			render: (text, course, index) => {
				return (
					<Fragment>
						<div key={course.maKhoaHoc}>$ {course.price}</div>
					</Fragment>
				);
			},
		},

		{
			title: "Thành Tiền",
			key: "price",
			render: (text, course, index) => {
				return (
					<Fragment>
						<div key={course.maKhoaHoc}>
							$ {course.price * course.cartQuantity}
						</div>
					</Fragment>
				);
			},
		},
	];
	const data = dataCart;

	const onChange = (pagination, filters, sorter, extra) => {
		console.log("params", pagination, filters, sorter, extra);
	};

	return (
		<div className="Payment">
			<div className="container">
				<h1 className="title-payment">CHI TIẾT ĐĂNG KÝ KHÓA HỌC</h1>
				<Row>
					<Col xs={24} sm={24} md={16} lg={16} xl={16}>
						<div className="table-content">
							<Table
								rowKey="maKhoaHoc"
								columns={columns}
								dataSource={data}
								onChange={onChange}
								pagination={false}
								bordered
							/>
						</div>

						<div className="total-money">
							<span>Tổng tiền: </span>
							<span className="money">${totalMoney}</span>
						</div>
					</Col>

					<Col xs={24} sm={24} md={8} lg={8} xl={8}>
						<div className="user-description">
							<h2>Thông tin người đăng ký</h2>
							<div className="body">
								<div className="left">
									<div className="logo">
										<img src={userImg} alt="" />
									</div>
								</div>
								<div className="right">
									<div className="user-name">
										<i className="fas fa-user-circle"></i>
										<span style={{ margin: "0 8px" }}>
											Tài khoản:{" "}
										</span>
										<strong>{userInfo.taiKhoan}</strong>
									</div>

									<div className="full-name">
										<i className="fas fa-user"></i>
										<span style={{ margin: "0 8px" }}>Họ tên: </span>
										<strong>{formatFullName(userInfo.hoTen)}</strong>
									</div>

									<div className="full-name">
										<i className="fas fa-envelope"></i>
										<span style={{ margin: "0 8px" }}>Email: </span>
										<strong>{userInfo.email}</strong>
									</div>

									<div className="full-name">
										<i className="fas fa-phone"></i>
										<span style={{ margin: "0 8px" }}>
											Số điện thoại:{" "}
										</span>
										<strong>{userInfo.soDT}</strong>
									</div>
								</div>
							</div>
						</div>

						<div className="btn-book-course">ĐĂNG KÝ</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default Payment;
