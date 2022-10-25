import { Col, Row, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./_review.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import reivew1 from "assets/img/user/testimonial-1.jpg";
import reivew2 from "assets/img/user/testimonial-2.jpg";
import reivew3 from "assets/img/user/testimonial-3.jpg";
import reivew4 from "assets/img/user/testimonial-4.jpg";
import reivew5 from "assets/img/user/testimonial-5.jpg";
const Review = () => {
	const [activeKey, setActiveKey] = useState(1);
	const dataReview = [
		{
			id: 1,
			content:
				"Giảng viên nhiệt tình, hướng dẫn cặn kẽ, giúp tôi có được một nền tảng khá vững chắc. Hiện tại mình vừa giao dịch hàng ngày, vừa xem đi xem lại các bài liên quan đến tình huống thực tế thị trường mình đang gặp, thấy rất hữu ích. Mình đã tham gia vài khoá học của cô Jennifer Trần trên kyna và mong cô sẽ mở thêm các khoá học khác trong tương lai (ví dụ như hướng dẫn phân tích cơ bản)",
			name: "Huy Phong",
			image: reivew1,
		},
		{
			id: 2,
			content:
				"Bài giảng kết hợp giữa lý thuyể và kinh nghiệm thực tế rất quý giá. Rất cần thiết và đáng để những TVTC tìm học, giúp người TV phát triển và hoàn thiện hơn",
			name: "Ngọc Thảo",
			image: reivew2,
		},
		{
			id: 3,
			content:
				"Kiến thức cô động, ví dụ đa dạng phong phú, giảng viên nhiệt huyết và dày dặn kinh nghiệm. Hiện tại mình vừa giao dịch hàng ngày, vừa xem đi xem lại các bài liên quan đến tình huống thực tế thị trường mình đang gặp, thấy rất hữu ích. Mình đã tham gia vài khoá học của cô Jennifer Trần trên kyna và mong cô sẽ mở thêm các khoá học khác trong tương lai (ví dụ như hướng dẫn phân tích cơ bản).",
			name: "Phước Hưng",
			image: reivew3,
		},
		{
			id: 4,
			content:
				"Bài giảng hay và giảng viên am hiểu tuyển dụng việc làm, Hiện tại mình vừa giao dịch hàng ngày, vừa xem đi xem lại các bài liên quan đến tình huống thực tế thị trường mình đang gặp, thấy rất hữu ích. Mình đã tham gia vài khoá học của cô Jennifer Trần trên kyna và mong cô sẽ mở thêm các khoá học khác trong tương lai (ví dụ như hướng dẫn phân tích cơ bản)",
			name: "Thanh Tâm",
			image: reivew4,
		},
		{
			id: 5,
			content:
				"Thầy giảng hay, dễ hiểu, tận tâm với kiến thức và sự truyền đạt. Kiến thức của thầy rất hay và phong phú, có trải nghiệm, rất chắc chắn và rất có ích",
			name: "Phi Khanh",
			image: reivew5,
		},
	];

	useEffect(() => {
		const autoClick = setTimeout(() => {
			const i = 1;
			if (activeKey == 5) {
				setActiveKey(1);
			} else setActiveKey(activeKey + 1);
		}, 2500);
		return () => {
			//clear time out
			clearTimeout(autoClick);
		};
	});
	return (
		<div id="review" className="review">
			<h1
				style={{
					textAlign: "center",
					color: "#082346",
					fontSize: "30px",
					fontWeight: "800",
					padding: "30px 0",
				}}
			>
				Đánh Giá Của Học Viên
			</h1>
			<div className="tabResponsive">
				<Tabs
					onTabClick={(key) => {
						setActiveKey(key);
					}}
					activeKey={activeKey}
					items={dataReview.map((item) => {
						return {
							label: <img className="image" src={item.image} />,
							key: item.id,
							children: (
								<div>
									<strong>
										<i
											style={{
												marginRight: 5,
												opacity: 0.5,
												verticalAlign: "top",
											}}
											className="fas fa-quote-left"
										></i>{" "}
										{item.content}
										<i
											style={{
												marginLeft: 10,
												opacity: 0.5,
												verticalAlign: "top",
											}}
											className="fas fa-quote-right"
										></i>
									</strong>
									<h3 style={{ color: "#FD4766", fontWeight: "600" }}>
										{item.name}
									</h3>
								</div>
							),
						};
					})}
				/>
			</div>
			<div>
				<Swiper
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
						type: "progressbar",
					}}
					navigation={true}
					modules={[Pagination, Navigation, Autoplay]}
					className="mySwiper"
				>
					{dataReview.map((item) => {
						return (
							<SwiperSlide className="swiperResponsive" key={item.id}>
								<div className="coverResponsive container">
									<div className="contentResponsve">
										<strong>
											<i className="fas fa-quote-left" />{" "}
											{item.content}{" "}
											<i className="fas fa-quote-right" />
										</strong>
										<h3
											style={{
												color: "#FD4766",
												fontWeight: "600",
											}}
										>
											{item.name}
										</h3>
									</div>
									<div className="imageResponsve">
										<img className="imgReponsive" src={item.image} />
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
};

export default Review;
