import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, CalendarOutlined, HomeOutlined, UnorderedListOutlined } from "@ant-design/icons";
import instance from "api/instance";
import beeLogo from "../../../assets/icon/logo-bee.png";
import viFlag from "../../../assets/icon/vi-flag.png";
import enFlag from "../../../assets/icon/en-flag.png";

const Header = () => {
	const [current, setCurrent] = useState("");

	const onClick = (e) => {
		// console.log("click ", e);
		setCurrent(e.key);
	};

	const items = [
		{
			label: "Danh Mục Khóa Học",
			key: "cat",
			icon: <UnorderedListOutlined />,
			children: [
				{
					label: "Lập trình Backend",
					key: "cat-child-1",
				},
				{
					label: "Thiết kế Web",
					key: "cat-child-2",
				},
				{
					label: "Lập trình di động",
					key: "cat-child-3",
				},
				{
					label: "Lập trình Front End",
					key: "cat-child-4",
				},
				{
					label: "Lập trình Full Stack",
					key: "cat-child-5",
				},
				{
					label: "Tư duy lập trình",
					key: "cat-child-6",
				},
			],
		},

		{
			label: "Đăng Nhập",
			key: "sub-3",
			icon: <UserOutlined />,
			children: [
				{
					label: "Đăng Nhập",
					key: "5",
				},
				{
					label: "Đăng Xuất",
					key: "6",
				},
			],
		},
	];
	return (
		<Layout className="Header" style={{ display: "block" }}>
			<div className="container">
				<Layout.Header className="navbar">
					<div className="left">
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
