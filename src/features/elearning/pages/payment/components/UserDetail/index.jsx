import React from "react";
import "./_userDetail.scss";
import userImg from "assets/img/user/pic2_3.jpg";
import { formatFullName } from "common/utils/formatFullName";
import { useDispatch } from "react-redux";
import { courseRegisterAction } from "features/elearning/utils/paymentAction";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { removeFromCart, removeItemFromCart } from "features/elearning/utils/cartSlice";

function UserDetail(props) {
	const { taiKhoan, hoTen, email, soDT } = props.userDetail;
	const arrCartItem = props.cart.cartItems;
	const dispatch = useDispatch();
	const history = useHistory();

	const match = useRouteMatch();
	const courseId = match.params.id;

	// find item from cart to remove
	const item = arrCartItem.find((item) => item.maKhoaHoc === courseId);
	// remove from cart
	const handleRemoveFromCart = () => {
		dispatch(removeItemFromCart(item));
	};

	// register course
	const requestParams = { courseId, taiKhoan };
	const courseRegister = async () => {
		const data = await dispatch(courseRegisterAction(requestParams));
		console.log("thanh cong");
		setTimeout(() => {
			history.push("/cart");
		}, 1500);
	};

	const confirm = () => {
		Swal.fire({
			title: "Bạn có muốn đăng ký khóa học này ?",
			text: "Khi xác nhận bạn sẽ không thể hoàn lại",
			icon: "info",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Đăng ký ",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire(
					"Thành công!",
					"Bạn đã đăng ký thành công khóa học này.",
					"success"
				);

				// 1) register
				courseRegister();

				// 2) remove from cart
				handleRemoveFromCart();
			}
		});
	};

	useEffect(() => {}, []);

	return (
		<div className="UserDetail">
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
							<span style={{ margin: "0 8px" }}>Tài khoản: </span>
							<strong>{taiKhoan}</strong>
						</div>

						<div className="full-name">
							<i className="fas fa-user"></i>
							<span style={{ margin: "0 8px" }}>Họ tên: </span>
							<strong>{formatFullName(hoTen)}</strong>
						</div>

						<div className="full-name">
							<i className="fas fa-envelope"></i>
							<span style={{ margin: "0 8px" }}>Email: </span>
							<strong>{email}</strong>
						</div>

						<div className="full-name">
							<i className="fas fa-phone"></i>
							<span style={{ margin: "0 8px" }}>Số điện thoại: </span>
							<strong>{soDT}</strong>
						</div>
					</div>
				</div>
			</div>
			<div className="btn-book-course" onClick={() => confirm()}>
				ĐĂNG KÝ
			</div>
		</div>
	);
}

export default UserDetail;
