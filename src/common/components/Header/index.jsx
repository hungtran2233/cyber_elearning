import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
	UserOutlined,
	CalendarOutlined,
	HomeOutlined,
	UnorderedListOutlined,
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
		if (e.key === "user-signin") {
			history.push("/signin");
		}
		if (e.key === "user-signup") {
			history.push("/signup");
		}
	};

	const items = [
		{
			label: "Danh Mục Khóa Học",
			key: "cate",
			icon: <UnorderedListOutlined />,
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
						<div className="title">bee</div>
						<div className="logo">
							<img src={beeLogo} alt="" />
						</div>
					</div>

					<div className="middle">search bar</div>

					<div className="language">
						<div className="vi-lan">
							<img src={viFlag} alt="" />
							<span>VI</span>
						</div>
						<div className="en-lan">
							<img src={enFlag} alt="" />
							<span>EN</span>
						</div>
					</div>
					<Menu
						onClick={onClick}
						selectedKeys={[current]}
						mode="horizontal"
						className="right"
						items={items}
					/>
				</Layout.Header>
			</div>
		</Layout>
	);
};

export default Header;
