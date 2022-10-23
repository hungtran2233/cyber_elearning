import { Row, Col } from "antd";
import React from "react";
import CountUp from "react-countup";
import { ref } from "yup";
import VisibilitySensor from "react-visibility-sensor";
import "./counter.scss";
const Counter = () => {
	return (
		<div id="statistic" className="counter">
			<div className="container">
				<h1 className="title-statistic">Thống Kê Thành Tựu Đạt Được</h1>
				<Row className="row-cover">
					<Col lg={6} span={6} className="item">
						<div className="item-cover">
							<div className="course counter-mini">
								<div className="icon">
									<i className="fa fa-book" />
								</div>
								<div className="title">KHÓA HỌC</div>
								<CountUp start={0} end={1000} delay={5}>
									{({ countUpRef, start }) => (
										// <VisibilitySensor>
										<span className="number" ref={countUpRef} />
										// </VisibilitySensor>
									)}
								</CountUp>
							</div>
						</div>
					</Col>
					<Col lg={6} span={6} className="item">
						<div className="item-cover">
							<div className="user counter-mini">
								<div className="icon ">
									<i className="fa fa-user-graduate" />
								</div>
								<div className="title">HỌC VIÊN</div>
								<CountUp
									decimal={1}
									start={0}
									end={13000}
									duration={3}
									delay={5}
								>
									{({ countUpRef, start }) => (
										// <VisibilitySensor>
										<span className="number" ref={countUpRef} />
										// </VisibilitySensor>
									)}
								</CountUp>
							</div>
						</div>
					</Col>
					<Col lg={6} span={6} className="item">
						<div className="item-cover">
							<div className="work counter-mini">
								<div className="icon">
									<i className="fa-solid fa-building" />
								</div>
								<div className="title">VIỆC LÀM</div>
								<CountUp start={0} end={10000} delay={5}>
									{({ countUpRef, start }) => (
										// <VisibilitySensor>
										<span className="number" ref={countUpRef} />
										// </VisibilitySensor>
									)}
								</CountUp>
							</div>
						</div>
					</Col>
					<Col lg={6} span={6} className="item">
						<div className="item-cover">
							<div className="teacher counter-mini">
								<div className="icon">
									<i className="fa fa-chalkboard-teacher" />
								</div>
								<div className="title">GIẢNG VIÊN</div>
								<CountUp start={0} end={500} delay={5}>
									{({ countUpRef, start }) => (
										// <VisibilitySensor>
										<span className="number" ref={countUpRef} />
										// </VisibilitySensor>
									)}
								</CountUp>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Counter;
