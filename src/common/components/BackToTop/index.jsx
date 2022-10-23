import { UpOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import "./_backToTop.scss";

const BackToTop = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className="top-to-btm">
			{" "}
			{showTopBtn && (
				<UpOutlined
					style={{ fontSize: 20 }}
					className="icon-position icon-style"
					onClick={goToTop}
				/>
			)}{" "}
		</div>
	);
};
export default BackToTop;
