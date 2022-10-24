import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addToCart,
	clearCart,
	decreaseCart,
	getTotals,
	removeFromCart,
} from "../../utils/cartSlice";

import { Link, useHistory } from "react-router-dom";
import "./_cart.scss";
import { price } from "features/elearning/utils/tempPrice";
import { fetchProfileAction } from "features/authentication/authAction";

const Cart = () => {
	const cart = useSelector((state) => state.eLearningCart);
	const dispatch = useDispatch();
	const history = useHistory();

	// check course isRegister when login or logout
	const [registerCourseList, setRegisterCourseList] = useState(null);
	const fetchProfile = async () => {
		if (token === null) {
			return;
		} else {
			const data = await dispatch(fetchProfileAction());
			setRegisterCourseList(data.payload.chiTietKhoaHocGhiDanh);
		}
	};

	useEffect(() => {
		dispatch(getTotals());
		fetchProfile();
	}, [cart, dispatch]);

	// check token
	const token = localStorage.getItem("token");

	// render button register
	const renderButtonRegister = (token, courseDetail) => {
		if (token !== null) {
			const findCourse = registerCourseList?.find(
				(item) => item.maKhoaHoc === courseDetail.maKhoaHoc
			);
			if (!findCourse) {
				return (
					<div
						className="btn-register"
						onClick={() => {
							history.push("/payment/" + courseDetail.maKhoaHoc);
						}}
					>
						Đăng ký
					</div>
				);
			} else {
				return <div className="btn-register-true">Đã đăng ký rồi</div>;
			}
		} else {
			return (
				<div
					className="btn-register"
					onClick={() => {
						history.push("/payment/" + courseDetail.maKhoaHoc);
					}}
				>
					Đăng ký
				</div>
			);
		}
	};

	const handleRemoveFromCart = (product) => {
		dispatch(removeFromCart(product));
	};
	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		// <div>cart</div>
		<div className="CartContent">
			<div className="container">
				<h2>Giỏ hàng</h2>
				{cart.cartItems?.length === 0 ? (
					<div className="cart-empty">
						<p>Giỏ hàng của bạn đang trống</p>
						<div className="start-shopping">
							<Link to="/">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									className="bi bi-arrow-left"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
									/>
								</svg>
								<span>Bắt đầu chọn khóa học</span>
							</Link>
						</div>
					</div>
				) : (
					<div>
						<div className="titles">
							<h3 className="product-title">Khóa học</h3>
							<h3 className="price">Giá</h3>
							<h3 className="quantity">Ngày tạo</h3>
							<h3 className="total">Hành động </h3>
						</div>
						<div className="cart-items">
							{cart.cartItems &&
								cart.cartItems?.map((courseDetail, index) => (
									<div className="cart-item" key={index}>
										<div className="cart-product">
											<img
												src={courseDetail.hinhAnh}
												alt={courseDetail.tenKhoaHoc}
											/>
											<div>
												<h3>{courseDetail.tenKhoaHoc}</h3>
												<p>{courseDetail.desc}</p>
												<button
													className="btn-remove"
													onClick={() =>
														handleRemoveFromCart(courseDetail)
													}
												>
													Xóa
												</button>
											</div>
										</div>
										<div className="cart-product-price">${price}</div>
										<div className="course-date">
											{courseDetail.ngayTao}
										</div>

										{/* Render button register  */}
										{renderButtonRegister(token, courseDetail)}
									</div>
								))}
						</div>
						<div className="cart-summary">
							<button
								className="clear-btn"
								onClick={() => handleClearCart()}
							>
								Xóa toàn bộ
							</button>
							<div className="cart-checkout">
								<div className="subtotal">
									<span>Tổng tiền</span>
									<span className="amount">
										${cart.cartItems?.length * price}
									</span>
								</div>
								<p>
									Chi phí được tính khi bạn nhận được mã kích hoạt khóa
									học
								</p>

								<div className="continue-shopping">
									<Link to="/">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="currentColor"
											className="bi bi-arrow-left"
											viewBox="0 0 16 16"
										>
											<path
												fillRule="evenodd"
												d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
											/>
										</svg>
										<span>Tiếp tục chọn khóa học</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
