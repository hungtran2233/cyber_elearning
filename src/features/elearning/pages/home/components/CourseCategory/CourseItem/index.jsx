import { Card } from "antd";
import { getNumberDistanceDate } from "common/utils/date";
import { formatFullName } from "common/utils/formatFullName";
import React from "react";
import { useHistory } from "react-router-dom";
import "./_courseItem.scss";

function CourseItem(props) {
	const { maKhoaHoc, tenKhoaHoc, hinhAnh, biDanh, nguoiTao, ngayTao, luotXem } =
		props.item;

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
		<div className="CourseItem" onClick={goToDetail}>
			{/* {console.log(getCurrentDay())} */}

			<Card hoverable className="card-custom">
				<div className="card-content">
					{/* Render label  */}
					{renderAdvLabel(ngayTao, luotXem)}

					<div className="card-image">
						<img src={hinhAnh} alt="" />
					</div>
					<div className="card-detail">
						<p className="title">{tenKhoaHoc}</p>
						<p className="teacher">
							Giảng viên: <span>{formatFullName(nguoiTao.hoTen)}</span>
						</p>
						<p>
							Ngày tạo: <span>{ngayTao}</span>{" "}
						</p>
						<p>
							Lượt xem: <span>{luotXem}</span>
						</p>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default CourseItem;
