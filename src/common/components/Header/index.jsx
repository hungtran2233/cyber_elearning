import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
	UserOutlined,
	CalendarOutlined,
	HomeOutlined,
	UnorderedListOutlined,
	ShoppingCartOutlined,
} from "@ant-design/icons";
import instance from "api/instance";
import beeLogo from "../../../assets/icon/logo-bee.png";
import viFlag from "../../../assets/icon/vi-flag.png";
import enFlag from "../../../assets/icon/en-flag.png";
import { useHistory } from "react-router-dom";

const Header = () => {
	const [current, setCurrent] = useState("");

	const history = useHistory();
	const goToHome = () => {
		history.push("/");
	};

	const onClick = (e) => {
		setCurrent(e.key);
	};

	// handle click sign in
	const handleSignIn = () => {
		history.push("/signin");
	};

	const items1 = [
		{
			label: "TRANG CHỦ",
			key: "home",
		},
		{
			label: "KHÓA HỌC",
			key: "category",
			children: [
				
				{
					label: "Lập trình Backend",
					key: "cate-child-1",
				},
				{
					label: "Thiết kế Web",
					key: "cate-child-2",
				},
				{
					label: "Lập trình di động",
					key: "cate-child-3",
				},
				{
					label: "Lập trình Front End",
					key: "cate-child-4",
				},
				{
					label: "Lập trình Full Stack",
					key: "cate-child-5",
				},
				{
					label: "Tư duy lập trình",
					key: "cate-child-6",
				},
			],
		},
		{
			label: "BLOG",
			key: "blog",
		},
		{
			label: "LIÊN HỆ",
			key: "about",
		},
	];

	const items2 = [
		{
			label: "Tài khoản",
			key: "user",
			icon: <UserOutlined />,
			children: [
				{
					label: "Đăng Nhập",
					key: "user-signin",
				},
				{
					label: "Đăng Ký",
					key: "user-signup",
				},
			],
		},
	];
	return (
		<Layout className="Header" style={{ display: "block" }}>
			<div className="container">
				<Layout.Header className="navbar">
					<div className="left" onClick={goToHome}>
						<div className="logo">
							<img src={beeLogo} alt="" />
						</div>
						<div className="title">bee</div>
					</div>

					<Menu
						onClick={onClick}
						selectedKeys={[current]}
						mode="horizontal"
						className="menu-custom"
						items={items1}
					/>

					<div className="language">
						<div className="icon">
							<img src={enFlag} alt="" />
						</div>
						<div className="country">English</div>
					</div>

					<div className="right">
						<div className="cart">
							<div className="cart-icon">
								<ShoppingCartOutlined />
							</div>
						</div>

						<div className="auth-user" onClick={handleSignIn}>
							<div className="sign-in">
								<UserOutlined style={{ fontSize: 16, marginRight: 5 }} />
								Đăng nhập
							</div>
						</div>
					</div>
				</Layout.Header>
			</div>
		</Layout>
	);
};

export default Header;
