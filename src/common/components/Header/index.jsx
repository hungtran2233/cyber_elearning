import React, { Suspense, useEffect, useState } from "react";
import { Anchor, Drawer, Button, Menu, Dropdown, Space, Select } from "antd";
import { Header } from "antd/lib/layout/layout";
import mainLogo from "assets/img/icon/logo-bee.png";
import enFlag from "assets/img/icon/en-flag.png";
import viFlag from "assets/img/icon/vi-flag.png";
import user1 from "assets/img/user/pic2_3.jpg";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DownOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { formatFullName, formatName, upperCaseFirst } from "common/utils/formatFullName";
import Swal from "sweetalert2";
import { fetchProfileAction } from "features/authentication/authAction";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18n";

const { Option } = Select;
const { Link } = Anchor;

// change language
const translationVi = {
	home: "TRANG CHỦ",
	course: "KHÓA HỌC",
	statistic: "THỐNG KÊ",
	review: "GÓC HỌC VIÊN",
	contact: "LIÊN HỆ",
	signIn: "Đăng Nhập",
};
const translationEn = {
	home: "HOME",
	course: "COURSE",
	statistic: "STATISTIC",
	review: "REVIEW",
	contact: "CONTACT",
	signIn: "Sign In",
};

i18n.use(initReactI18next).init({
	resources: {
		vi: { translation: translationVi },
		en: { translation: translationEn },
	},
	lng: "vi",
	fallbackLng: "vi",
	interpolation: { escapeValue: false },
});

function AppHeader() {
	const history = useHistory();
	const dispatch = useDispatch();
	const arrItem = useSelector((state) => state.eLearningCart.cartItems);
	// language
	const { t } = useTranslation();

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
					<span>{t("signIn")}</span>
				</div>
			);
		}
	};

	// language
	const handleChange = (e) => {
		i18n.changeLanguage(e);
		// console.log(value);
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

					<div className="home-class" onClick={() => history.push("/")}>
						{/* Trang chủ  */}
						{t("home")}
					</div>
					<div className="mobileHidden">
						<Anchor targetOffset="65">
							<Link href="#course" title={t("course")} />
							<Link href="#statistic" title={t("statistic")} />
							<Link href="#review" title={t("review")} />
							<Link href="#Footer" title={t("contact")} />
						</Anchor>
					</div>

					<div className="right-menu">
						<div className="language">
							<Select
								defaultValue="vi"
								style={{
									width: 65,
								}}
								onChange={handleChange}
							>
								<Option value="vi">VI</Option>
								<Option value="en">EN</Option>
							</Select>
						</div>

						<div className="cart" onClick={() => history.push("/cart")}>
							<i className="fas fa-shopping-cart"></i>

							<span className="total-quantity">{arrItem.length}</span>
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
								<Link href="#banner" title="HOME" />
								<Link href="#course" title={t("course")} />
								<Link href="#statistic" title={t("statistic")} />
								<Link href="#review" title={t("review")} />
								<Link href="#Footer" title={t("contact")} />
							</Anchor>
						</Drawer>
					</div>
				</div>
			</div>
		</Header>
	);
}

export default AppHeader;
