import {
	CommentOutlined,
	DislikeOutlined,
	LikeOutlined,
	UserOutlined,
} from "@ant-design/icons";
import bannerAdv from "assets/img/advertising/banner-adv.png";
import { Col, Row } from "antd";
import useLocalStorage from "common/hooks/useLocalStorage";
import { formatDate, getCurrentDay, getDayMonthYear } from "common/utils/date";
import { formatName, upperCaseFirst } from "common/utils/formatFullName";
import { getRandomColor } from "common/utils/randomColor";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "./_userComment.scss";

function UserComment() {
	const [comment, setComment] = useLocalStorage("commentList");
	const user = useSelector((state) => state.auth.profile);
	const commentContent = useRef(null);
	const history = useHistory();

	useEffect(() => {
		setComment(commentList);
	}, []);

	const onButtonClick = () => {
		// console.log(commentContent.current.value);
		// 1) Check auth
		if (user) {
			// 2) Add comment
			const newCommentList = [...comment];
			const newId = newCommentList.length + 1;
			const currentTime = getCurrentDay();
			const newComment = {
				id: newId,
				name: user.hoTen,
				comment: commentContent.current.value,
				time: currentTime,
				movieId: `m${newId}`,
			};
			newCommentList.unshift(newComment);
			setComment(newCommentList);
		} else {
			warningBox();
		}
	};

	// Comment test
	const commentList = [
		{
			id: 1,
			name: "Hưng Trần",
			comment:
				"Khóa học Master Front-end ReactJS đã đem lại cho tôi một kiến thức nền rất tốt",
			time: "20/9/2022",
			movieId: "m1",
		},
		{
			id: 2,
			name: "Huy Phong",
			comment: "Bài giảng dễ hiểu, kiến thức cô đọng, giảng viên dạy nhiệt tình",
			time: "19/9/2022",
			movieId: "m2",
		},
		{
			id: 3,
			name: "Nguyễn Văn Tài",
			comment:
				"Hơi khó học đối với những người mới, nhưng tôi sẽ cố gắng chăm chỉ hơn",
			time: "18/9/2022",
			movieId: "m3",
		},
	];

	// Sweet alert
	const warningBox = () => {
		Swal.fire({
			title: "Bạn chưa đăng nhập?",
			text: "Không thể bình luận khi chưa đăng nhập!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			cancelButtonText: "Hủy",
			confirmButtonText: "Đăng nhập!",
		}).then((result) => {
			if (result.isConfirmed) {
				history.push("/signin");
			}
		});
	};

	// Render user info
	const renderUserInfo = () => {
		if (!user) {
			return <span>Bạn chưa đăng nhập !</span>;
		} else {
			return (
				<div className="user-render">
					<UserOutlined className="user-icon" />
					<span className="user-name">{user.taiKhoan}</span>
				</div>
			);
		}
	};

	return (
		<div className="Comment">
			{/* {console.log(user)} */}

			<div className="container">
				<Row>
					<Col
						xs={24}
						sm={24}
						md={16}
						lg={16}
						xl={16}
						style={{ paddingRight: 30 }}
						className="col-left-custom"
					>
						<div className="form-body">
							<div className="title-content">
								<span>
									<CommentOutlined style={{ fontSize: 25 }} />
								</span>
								<span>BÌNH LUẬN</span>
							</div>

							<textarea
								ref={commentContent}
								type="textarea"
								className="text-box"
								rows="3"
								placeholder="Ý kiến của bạn..."
							/>
						</div>

						<div className="form-bottom">
							<div className="user-info">{renderUserInfo()}</div>
							<button
								onClick={onButtonClick}
								type="button"
								className="btn-post"
							>
								Gửi bình luận{" "}
							</button>
						</div>

						<h2>Tất cả bình luận</h2>

						{comment?.map((item) => {
							return (
								<div
									key={item.id}
									className={`comment-item item-${item.id}`}
								>
									<div className="left">
										<div
											className="icon"
											style={{ backgroundColor: getRandomColor() }}
										>
											{upperCaseFirst(formatName(item.name))}
										</div>
									</div>
									<div className="right">
										<div className="top">{item.name}</div>
										<div className="body">{item.comment}</div>
										<div className="bottom">
											<div className="time">{item.time}</div>
											<div className="box-reply">
												<span className="icon">
													<LikeOutlined />
													28
												</span>
												<span className="icon">
													<DislikeOutlined />
													14
												</span>
												<span className="icon">
													<CommentOutlined />
													10
												</span>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</Col>

					<Col xs={24} sm={24} md={8} lg={8} xl={8}>
						<img src={bannerAdv} alt="" style={{ width: "100%" }} />
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default UserComment;
