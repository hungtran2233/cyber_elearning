import React from "react";

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} ${["prevArrow"]}`}
			style={{
				...style,
				display: "block",
				transform: "translate(180%, -400%)",
				zIndex: 5,
			}}
			onClick={onClick}
		/>
	);
}

export default SamplePrevArrow;
