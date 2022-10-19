import React, { useEffect, useState } from "react";
import { Anchor, Drawer, Button, Menu, Dropdown, Space } from "antd";
import { Header } from "antd/lib/layout/layout";
import mainLogo from "assets/img/icon/logo-bee.png";
import enFlag from "assets/img/icon/en-flag.png";
import user1 from "assets/img/user/pic2_3.jpg";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DownOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { formatFullName, formatName, upperCaseFirst } from "common/utils/formatFullName";
import Swal from "sweetalert2";
import { fetchProfileAction } from "features/authentication/authAction";

const { Link } = Anchor;

function AppHeader() {
	const history = useHistory();
	const dispatch = useDispatch();
	const { cartTotalQuantity } = useSelector((state) => state.eLearningCart);
	// console.log(cartTotalQuantity);

	// setting responsive
	const [visible, setVisible] = useState(false);
	const showDrawer = () => {
		setVisible(true);
	};
	const onClose = () => {
		setVisible(false);
	};

	// render user info
	const userProfile = useSelector((state) => state.auth.profile);

	// Logout
	const logout = () => {
		Swal.fire({
			title: "Bạn có muốn đăng xuất không ?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			cancelButtonText: "Hủy",
			confirmButtonText: "Đăng xuất!",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Đăng xuất thành công !",
					text: "Hẹn gặp lại !",
					showConfirmButton: false,
					timer: 1500,
				});
				///////
				// 1) Remove token localStorage
				localStorage.removeItem("token");
				localStorage.removeItem("login");

				// 2) Set profile Store --> null
				dispatch(fetchProfileAction({ payload: null }));
				history.push("/");
			}
		});
	};

	const handleClick = (e) => {
		if (e.key === "profile") {
			history.push("/profile");
		}
		if (e.key === "logout") {
			logout();
		}
	};
	const menu = (
		<Menu
			style={{ marginTop: 20 }}
			items={[
				{
					label: "Thông tin cá nhân",
					key: "profile",
					icon: <UserOutlined />,
				},
				{
					label: "Đăng xuất",
					key: "logout",
					icon: <LogoutOutlined />,
				},
			]}
			onClick={handleClick}
		/>
	);

	const renderUserInfo = () => {
		if (userProfile) {
			return (
				<div className="content-user">
					<Dropdown overlay={menu} className="dropdown-custom">
						<a onClick={(e) => e.preventDefault()}>
							<Space>
								<div className="user-info">
									<img src={user1} alt="" />

									<span style={{ marginLeft: 5 }}>
										{formatFullName(userProfile.hoTen)}
									</span>
								</div>
								<DownOutlined />
							</Space>
						</a>
					</Dropdown>
				</div>
			);
		} else {
			return (
				<div className="btn-login" onClick={() => history.push("/signin")}>
					<i className="fas fa-user"></i>
					<span>Đăng nhập</span>
				</div>
			);
		}
	};

	return (
		<Header>
			<div className="container">
				<div className="header-master">
					<div
						className="logo-box"
						onClick={() => {
							history.push("/");
							window.scrollTo(0, 0);
						}}
					>
						<div className="logo-icon">
							<img src={mainLogo} alt="" />
						</div>

						<div className="title">bee</div>
					</div>
					<div className="mobileHidden">
						<Anchor targetOffset="65">
							<Link href="#banner" title="TRANG CHỦ" />
							<Link href="#course" title="KHÓA HỌC" />
							<Link href="#statistic" title="THỐNG KÊ" />
							<Link href="#review" title="GÓC HỌC VIÊN" />
							<Link href="#contact" title="LIÊN HỆ" />
						</Anchor>
					</div>

					<div className="right-menu">
						<div className="language">
							<div className="icon">
								<img src={enFlag} alt="" />
							</div>
							<div className="country">English</div>
						</div>

						<div className="cart" onClick={() => history.push("/cart")}>
							<i className="fas fa-shopping-cart"></i>

							<span className="total-quantity">{cartTotalQuantity}</span>
						</div>

						{renderUserInfo()}
					</div>

					<div className="mobileVisible">
						<Button type="primary" onClick={showDrawer}>
							<i className="fas fa-bars"></i>
						</Button>
						<Drawer
							placement="right"
							closable={false}
							onClose={onClose}
							open={visible}
						>
							<Anchor targetOffset="65">
								<Link href="#hero" title="Home" />
								<Link href="#about" title="About" />
								<Link href="#feature" title="Features" />
								<Link href="#works" title="How it works" />
								<Link href="#faq" title="FAQ" />
								<Link href="#pricing" title="Pricing" />
								<Link href="#contact" title="Contact" />
							</Anchor>
						</Drawer>
					</div>
				</div>
			</div>
		</Header>
	);
}

export default AppHeader;
