import { EyeOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Card, message } from "antd";
import { getNumberDistanceDate } from "common/utils/date";
import { formatFullName } from "common/utils/formatFullName";
import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./_courseItem.scss";

function CourseItem(props) {
	const { maKhoaHoc, tenKhoaHoc, hinhAnh, biDanh, nguoiTao, ngayTao, luotXem } =
		props.courseInfo;

	// console.log(props.courseInfo);
	// setting heart
	const success = () => {
		message.success("Đã lưu vào mục yêu thích !");
	};
	const [toggleHeart, setToggleHeart] = useState(false);
	const changeColor = useCallback(() => {
		setToggleHeart(!toggleHeart);
		success();
	}, []);

	const history = useHistory();
	const goToDetail = () => {
		history.push("/details/" + maKhoaHoc + "/" + biDanh);
	};

	// setting adv-label
	const renderAdvLabel = (date, view) => {
		const distance = getNumberDistanceDate(date);
		if (view >= 100) {
			return (
				<div className="label-box">
					<span className="hot">HOT</span>
					{distance < 30 ? <span className="new">NEW</span> : <></>}
				</div>
			);
		}
		if (distance < 30) {
			return (
				<div className="label-new">
					<span>NEW</span>
				</div>
			);
		}
		return;
	};

	return (
		<div className="CourseItem">
			{/* {console.log(getCurrentDay())} */}

			<div className="card-content">
				{/* Render label  */}
				{renderAdvLabel(ngayTao, luotXem)}

				<div className="card-image" onClick={goToDetail}>
					<img
						src={hinhAnh}
						alt="hinh anh"
						onError={({ currentTarget }) => {
							currentTarget.onerror = null; // prevents looping
							currentTarget.src =
								"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
						}}
					/>
				</div>
				<div className="card-detail">
					<p className="title" onClick={goToDetail}>
						{tenKhoaHoc}
					</p>
					<p className="teacher">
						Giảng viên:
						<span>{formatFullName(nguoiTao.hoTen)}</span>
					</p>
					<p>
						Ngày tạo: <span>{ngayTao}</span>{" "}
					</p>
					<div className="view-heart">
						<p>
							<EyeOutlined /> <span>{luotXem}</span>
						</p>

						<HeartFilled
							className={toggleHeart ? "heart active" : "heart"}
							onClick={changeColor}
							style={{ fontSize: 18 }}
						/>
					</div>

					<h5></h5>
				</div>
			</div>
		</div>
	);
}

export default CourseItem;
