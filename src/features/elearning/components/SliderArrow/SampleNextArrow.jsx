import React from "react";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} ${["nextArrow"]}`}
			style={{
				...style,
				display: "block",
				transform: "translate(-280%, -200%)",
				zIndex: 5,
			}}
			onClick={onClick}
		/>
	);
}

export default SampleNextArrow;
